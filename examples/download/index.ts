import { createWriteStream, type WriteStream } from 'node:fs';

import { BG, type BgConfig } from 'bgutils-js';
import { JSDOM } from 'jsdom';

import { Constants, Innertube, Platform, UniversalCache, type Types } from 'youtubei.js';

import { SabrStream, type SabrPlaybackOptions } from 'googlevideo/sabr-stream';
import { buildSabrFormat, EnabledTrackTypes } from 'googlevideo/utils';
import type { SabrFormat } from 'googlevideo/shared-types';
import type { ReloadPlaybackContext } from 'googlevideo/protos';

// Modern YouTube streams use the SABR protocol: instead of one downloadable URL per
// format, the server streams media segments over a single endpoint and requires a
// Proof of Origin (po_token). The old `yt.download()` GET flow no longer works for
// these formats, so this example uses the `googlevideo` SABR client together with
// YouTube.js for the player request and signature deciphering.

// Deciphering the streaming URL requires executing YouTube's obfuscated player code.
// YouTube.js does not ship a JavaScript interpreter, so we provide one here.
// See https://ytjs.dev/guide/getting-started.html#providing-a-custom-javascript-interpreter
Platform.shim.eval = async (data: Types.BuildScriptResult) => new Function(data.output)();

/**
 * Generates a Proof of Origin token bound to the given video id using BotGuard.
 * A DOM is required because BotGuard expects a browser-like environment.
 */
async function generatePoToken(contentBinding: string): Promise<string> {
  const dom = new JSDOM();
  Object.assign(globalThis, { window: dom.window, document: dom.window.document });

  const bgConfig: BgConfig = {
    fetch: (input, init) => fetch(input, init),
    globalObj: globalThis,
    identifier: contentBinding,
    requestKey: 'O43z0dpjhgX20SCx4KAo'
  };

  const challenge = await BG.Challenge.create(bgConfig);
  if (!challenge)
    throw new Error('Could not get BotGuard challenge');

  const interpreterJavascript = challenge.interpreterJavascript.privateDoNotAccessOrElseSafeScriptWrappedValue;
  if (!interpreterJavascript)
    throw new Error('Could not load BotGuard VM');

  new Function(interpreterJavascript)();

  const result = await BG.PoToken.generate({
    program: challenge.program,
    globalName: challenge.globalName,
    bgConfig
  });

  return result.poToken ?? BG.PoToken.generatePlaceholder(contentBinding);
}

function fileExtension(mimeType: string): string {
  if (mimeType.includes('video'))
    return mimeType.includes('webm') ? 'webm' : 'mp4';
  return mimeType.includes('webm') ? 'webm' : 'm4a';
}

/**
 * Creates a WritableStream that writes media chunks to disk and logs progress.
 */
function createFileSink(format: SabrFormat, title: string): { sink: WritableStream<Uint8Array>; filePath: string } {
  const kind = format.mimeType?.includes('video') ? 'video' : 'audio';
  const safeTitle = title.replace(/[^a-z0-9]/gi, '_') || 'video';
  const filePath = `${safeTitle}.${kind}.${fileExtension(format.mimeType ?? '')}`;

  const output: WriteStream = createWriteStream(filePath, { flags: 'w' });
  const totalBytes = Number(format.contentLength ?? 0);
  let written = 0;

  const sink = new WritableStream<Uint8Array>({
    write(chunk) {
      return new Promise((resolve, reject) => {
        written += chunk.length;
        const progress = totalBytes ? ` (${((written / totalBytes) * 100).toFixed(0)}%)` : '';
        process.stdout.write(`\r${kind}: ${(written / 1024 / 1024).toFixed(2)} MB${progress}   `);
        output.write(chunk, (err) => (err ? reject(err) : resolve()));
      });
    },
    close() {
      process.stdout.write('\n');
      output.end();
    }
  });

  return { sink, filePath };
}

async function main() {
  const videoId = process.argv[2] || 'dQw4w9WgXcQ';
  const videoQuality = process.argv[3] || '720p';

  const innertube = await Innertube.create({ cache: new UniversalCache(true) });

  console.info(`Generating Proof of Origin token for ${videoId}...`);
  const poToken = await generatePoToken(videoId);

  const info = await innertube.getBasicInfo(videoId);

  if (info.playability_status?.status !== 'OK') {
    throw new Error(
      `Video is not playable: ${info.playability_status?.status} ` +
      `(${info.playability_status?.reason ?? 'no reason given'})`
    );
  }

  const title = info.basic_info.title ?? videoId;
  console.info(`\nTitle: ${title}`);

  const serverAbrStreamingUrl = await innertube.session.player?.decipher(
    info.streaming_data?.server_abr_streaming_url
  );
  const ustreamerConfig = info.player_config
    ?.media_common_config.media_ustreamer_request_config?.video_playback_ustreamer_config;

  if (!ustreamerConfig)
    throw new Error('Could not find the ustreamer config in the player response.');
  if (!serverAbrStreamingUrl)
    throw new Error('This video has no SABR streaming URL (it may use the legacy protocol).');

  const formats = info.streaming_data?.adaptive_formats.map(buildSabrFormat) ?? [];

  const stream = new SabrStream({
    formats,
    serverAbrStreamingUrl,
    videoPlaybackUstreamerConfig: ustreamerConfig,
    poToken,
    clientInfo: {
      clientName: parseInt(
        Constants.CLIENT_NAME_IDS[innertube.session.context.client.clientName as keyof typeof Constants.CLIENT_NAME_IDS]
      ),
      clientVersion: innertube.session.context.client.clientVersion
    }
  });

  // The server may ask us to reload the player response (e.g. when formats expire).
  stream.on('reloadPlayerResponse', async (_reloadPlaybackContext: ReloadPlaybackContext) => {
    const reloaded = await innertube.getBasicInfo(videoId);
    const url = await innertube.session.player?.decipher(reloaded.streaming_data?.server_abr_streaming_url);
    const config = reloaded.player_config
      ?.media_common_config.media_ustreamer_request_config?.video_playback_ustreamer_config;
    if (url && config) {
      stream.setStreamingURL(url);
      stream.setUstreamerConfig(config);
    }
  });

  const options: SabrPlaybackOptions = {
    videoQuality,
    preferMP4: true,
    preferH264: true,
    enabledTrackTypes: EnabledTrackTypes.VIDEO_AND_AUDIO
  };

  console.info('Starting SABR download...\n');
  const { videoStream, audioStream, selectedFormats } = await stream.start(options);

  const video = createFileSink(selectedFormats.videoFormat, title);
  const audio = createFileSink(selectedFormats.audioFormat, title);

  await Promise.all([
    videoStream.pipeTo(video.sink),
    audioStream.pipeTo(audio.sink)
  ]);

  console.info(`\nDone! Saved:\n  ${video.filePath}\n  ${audio.filePath}`);
}

main().catch((err) => {
  console.error('\nDownload failed:', err);
  process.exit(1);
});
