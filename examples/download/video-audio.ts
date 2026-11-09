import { createWriteStream } from 'node:fs';

import { JSDOM } from 'jsdom';
import { BotGuardClient } from 'bgutils-js/botguard';
import { WebPoMinter } from 'bgutils-js/webpo';
import type { WebPoSignalOutput } from 'bgutils-js/shared-types';
import { buildURL, getHeaders, parseLooseJSON, USER_AGENT } from 'bgutils-js/utils';

import { Constants, Innertube, Platform, UniversalCache, YTNodes, type IPlayerResponse, type IRawResponse, type Types } from 'youtubei.js';
import { SabrStream } from 'googlevideo/sabr-stream';
import { buildSabrFormat, EnabledTrackTypes } from 'googlevideo/utils';
import type { ReloadPlaybackContext } from 'googlevideo/protos';

// First video uploaded to YouTube ("Me at the zoo").
const videoId = process.argv[2] || 'jNQXAC9IVRw';

Platform.shim.eval = async (data: Types.BuildScriptResult) => new Function(data.output)();

const REQUEST_KEY = 'O43z0dpjhgX20SCx4KAo';

async function getWebPoMinter() {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'https://www.youtube.com',
    referrer: 'https://www.youtube.com/',
    userAgent: USER_AGENT
  });

  const pageHtml = await fetch('https://www.youtube.com', {
    headers: { 'user-agent': USER_AGENT, 'accept-language': 'en-US,en;q=0.7' }
  }).then((response) => response.text());

  const ytConfig = pageHtml.match(/ytcfg\.set\(({.+?})\);/s)?.[1];
  const challengeJson = pageHtml.match(/window\.ytAtN\(\s*({[\s\S]*?})\s*\)/)?.[1];
  if (!ytConfig || !challengeJson)
    throw new Error('Could not find the BotGuard challenge on the YouTube homepage.');

  dom.window.yt = { config_: JSON.parse(ytConfig) };
  dom.window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, {
    get: (_target, key) => {
      if (key === 'getImageData')
        return (_x: number, _y: number, w: number, h: number) => ({ data: new Uint8ClampedArray(w * h * 4) });
      if (key === 'measureText')
        return () => ({ width: 0 });
      return () => {};
    }
  }) as unknown as typeof HTMLCanvasElement.prototype.getContext;

  Object.assign(globalThis, {
    yt: dom.window.yt,
    window: dom.window,
    document: dom.window.document,
    location: dom.window.location,
    origin: dom.window.origin
  });

  const challenge = (parseLooseJSON(challengeJson).R as IRawResponse).bgChallenge;
  if (!challenge)
    throw new Error('Could not get the BotGuard challenge.');

  const interpreterUrl = challenge.interpreterUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;
  new Function(await fetch(`https:${interpreterUrl}`).then((response) => response.text()))();

  const botguard = await BotGuardClient.create({
    program: challenge.program,
    globalName: challenge.globalName,
    globalObject: globalThis
  });

  const webPoSignalOutput: WebPoSignalOutput = [];
  const snapshot = await botguard.snapshot({ webPoSignalOutput });
  const [ integrityToken, estimatedTtlSecs, mintRefreshThreshold, websafeFallbackToken ] =
    await fetch(buildURL('GenerateIT', true), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify([ REQUEST_KEY, snapshot ])
    }).then((response) => response.json()) as [string, number, number, string];

  return WebPoMinter.create({ integrityToken, estimatedTtlSecs, mintRefreshThreshold, websafeFallbackToken }, webPoSignalOutput);
}

async function getPlayer(yt: Innertube, id: string, reload?: ReloadPlaybackContext) {
  return new YTNodes.NavigationEndpoint({ watchEndpoint: { videoId: id } }).call<IPlayerResponse>(yt.actions, {
    playbackContext: {
      contentPlaybackContext: {
        vis: 0,
        splay: false,
        signatureTimestamp: yt.session.player?.signature_timestamp
      },
      reloadPlaybackContext: reload
    },
    contentCheckOk: true,
    racyCheckOk: true,
    client: 'WEB',
    parse: true
  });
}

function save(stream: ReadableStream<Uint8Array>, filePath: string) {
  const file = createWriteStream(filePath);
  return stream.pipeTo(new WritableStream({
    write(chunk) {
      const bytes = new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
      return new Promise<void>((resolve, reject) => file.write(bytes, (err) => err ? reject(err) : resolve()));
    },
    close() {
      file.end();
    }
  }));
}

const yt = await Innertube.create({ cache: new UniversalCache(false), generate_session_locally: true });
const minter = await getWebPoMinter();
const player = await getPlayer(yt, videoId);
const serverAbrStreamingUrl = await yt.session.player?.decipher(player.streaming_data?.server_abr_streaming_url);
const videoPlaybackUstreamerConfig = player.player_config
  ?.media_common_config.media_ustreamer_request_config?.video_playback_ustreamer_config;

if (!serverAbrStreamingUrl || !videoPlaybackUstreamerConfig)
  throw new Error(`No SABR stream for ${videoId}`);

const clientName = Constants.CLIENT_NAME_IDS[yt.session.context.client.clientName as keyof typeof Constants.CLIENT_NAME_IDS];
const stream = new SabrStream({
  videoId,
  formats: player.streaming_data?.adaptive_formats.map(buildSabrFormat) ?? [],
  serverAbrStreamingUrl,
  videoPlaybackUstreamerConfig,
  clientInfo: {
    clientName: parseInt(clientName),
    clientVersion: yt.session.context.client.clientVersion
  },
  callbacks: {
    onMintPoToken: () => minter.mint(videoId),
    onReloadPlayerResponse: async (reload) => {
      const next = await getPlayer(yt, videoId, reload);
      const url = await yt.session.player?.decipher(next.streaming_data?.server_abr_streaming_url);
      const config = next.player_config?.media_common_config.media_ustreamer_request_config?.video_playback_ustreamer_config;
      if (!url || !config)
        throw new Error(`No SABR stream for ${videoId}`);
      return { serverAbrStreamingUrl: url, videoPlaybackUstreamerConfig: config };
    }
  }
});

const { videoStream, audioStream } = await stream.start({
  videoPreferences: { container: 'mp4', quality: '720p', preferredVideoCodec: 'h264' },
  audioPreferences: { container: 'mp4' },
  enabledTrackTypes: EnabledTrackTypes.VIDEO_AND_AUDIO,
  isPostLiveDvr: !!player.video_details?.is_post_live_dvr
});

const videoPath = `${videoId}.video.mp4`;
const audioPath = `${videoId}.audio.m4a`;
console.info(`Downloading ${player.video_details?.title} (${videoId}, ${player.video_details?.duration}s)`);
await Promise.all([ save(videoStream, videoPath), save(audioStream, audioPath) ]);
console.info(`Done:\n  ${videoPath}\n  ${audioPath}`);
