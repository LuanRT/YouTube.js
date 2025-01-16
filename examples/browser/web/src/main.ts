import { BG } from 'bgutils-js';
import GoogleVideo, { PART, Protos } from 'googlevideo';
import { Innertube, ProtoUtils, UniversalCache, Utils } from '../../../..';
import shaka from 'shaka-player/dist/shaka-player.ui';

import 'shaka-player/dist/controls.css';

function fetchFn(input: RequestInfo | URL, init?: RequestInit) {
  const url = typeof input === 'string'
    ? new URL(input)
    : input instanceof URL
      ? input
      : new URL(input.url);

  // Transform the url for use with our proxy.
  url.searchParams.set('__host', url.host);
  url.host = 'localhost:8080';
  url.protocol = 'http';

  const headers = init?.headers
    ? new Headers(init.headers)
    : input instanceof Request
      ? input.headers
      : new Headers();

  // Now serialize the headers.
  url.searchParams.set('__headers', JSON.stringify([ ...headers ]));

  // Copy over the request.
  const request = new Request(
    url,
    input instanceof Request ? input : undefined
  );

  headers.delete('user-agent');

  return fetch(request, init ? {
    ...init,
    headers
  } : {
    headers
  });
}

const title = document.getElementById('title') as HTMLHeadingElement;
const description = document.getElementById('description') as HTMLDivElement;
const metadata = document.getElementById('metadata') as HTMLDivElement;
const loader = document.getElementById('loader') as HTMLDivElement;
const form = document.querySelector('form') as HTMLFormElement;

async function getPo(identifier: string): Promise<string | undefined> {
  const requestKey = 'O43z0dpjhgX20SCx4KAo';

  const bgConfig = {
    fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => fetch(input, init),
    globalObj: window,
    requestKey,
    identifier
  };

  const bgChallenge = await BG.Challenge.create(bgConfig);

  if (!bgChallenge)
    throw new Error('Could not get challenge');

  const interpreterJavascript = bgChallenge.interpreterJavascript.privateDoNotAccessOrElseSafeScriptWrappedValue;

  if (interpreterJavascript) {
    new Function(interpreterJavascript)();
  } else throw new Error('Could not load VM');

  const poTokenResult = await BG.PoToken.generate({
    program: bgChallenge.program,
    globalName: bgChallenge.globalName,
    bgConfig
  });

  return poTokenResult.poToken;
}

async function main() {
  let poToken: string | undefined;
  const visitorData = ProtoUtils.encodeVisitorData(Utils.generateRandomString(11), Math.floor(Date.now() / 1000));

  // Immediately mint a cold start token so we can start playback without delays.
  const coldStartToken = BG.PoToken.generatePlaceholder(visitorData);
  getPo(visitorData).then((webPo) => poToken = webPo);

  const yt = await Innertube.create({
    po_token: poToken || coldStartToken,
    visitor_data: visitorData,
    fetch: fetchFn,
    generate_session_locally: true,
    cache: new UniversalCache(false)
  });

  form.animate({ opacity: [ 0, 1 ] }, { duration: 300, easing: 'ease-in-out' });
  form.style.display = 'block';

  showUI({ hidePlayer: true });

  let player: shaka.Player | undefined;
  let ui: shaka.ui.Overlay | undefined;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (player) {
      await player.destroy();
    }

    hideUI();

    let videoId;

    const videoIdOrURL = document.querySelector<HTMLInputElement>('input[type=text]')?.value;

    if (!videoIdOrURL) {
      title.textContent = 'No video id or URL provided';
      showUI({ hidePlayer: true });
      return;
    }

    try {
      if (videoIdOrURL.match(/(http|https):\/\/([\w_-]+(?:\.[\w_-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/)) {
        const endpoint = await yt.resolveURL(videoIdOrURL);

        if (!endpoint.payload.videoId) {
          title.textContent = 'Could not resolve URL';
          showUI({ hidePlayer: true });
          return;
        }

        videoId = endpoint.payload.videoId;
      } else {
        videoId = videoIdOrURL;
      }

      const info = await yt.getInfo(videoId);

      title.textContent = info.basic_info.title || null;
      description.innerHTML = info.secondary_info?.description.toHTML() || '';
      title.textContent = info.basic_info.title || null;

      document.title = info.basic_info.title || '';

      metadata.innerHTML = '';
      metadata.innerHTML += `<div id="metadata-item">${info.primary_info?.published.toHTML()}</div>`;
      metadata.innerHTML += `<div id="metadata-item">${info.primary_info?.view_count?.short_view_count?.toHTML()}</div>`;
      metadata.innerHTML += `<div id="metadata-item">${info.basic_info.like_count} likes</div>`;

      showUI({ hidePlayer: false });

      const dash = await info.toDash();

      const uri = `data:application/dash+xml;charset=utf-8;base64,${btoa(dash)}`;

      if (player) {
        await player.destroy();
        player = undefined;
      }

      if (ui) {
        await ui.destroy();
        ui = undefined;
      }

      const videoEl = document.getElementById('videoel') as HTMLVideoElement;
      const shakaContainer = document.getElementById('shaka-container') as HTMLDivElement;

      shakaContainer
        .querySelectorAll('div')
        .forEach((node) => node.remove());

      shaka.polyfill.installAll();

      if (shaka.Player.isBrowserSupported()) {
        videoEl.poster = info.basic_info.thumbnail![0].url;

        player = new shaka.Player();
        await player.attach(videoEl);
        ui = new shaka.ui.Overlay(player, shakaContainer, videoEl);

        const config = {
          seekBarColors: {
            base: 'rgba(255,255,255,.2)',
            buffered: 'rgba(255,255,255,.4)',
            played: 'rgb(255,0,0)'
          },
          fadeDelay: 0
        };

        ui.configure(config);

        const overflowMenuButton = document.querySelector('.shaka-overflow-menu-button');
        if (overflowMenuButton) {
          overflowMenuButton.innerHTML = 'settings';
        }

        const backToOverflowButton = document.querySelector('.shaka-back-to-overflow-button .material-icons-round');
        if (backToOverflowButton) {
          backToOverflowButton.innerHTML = 'arrow_back_ios_new';
        }

        player.configure({
          streaming: {
            bufferingGoal: (info.page[0].player_config?.media_common_config.dynamic_readahead_config.max_read_ahead_media_time_ms || 0) / 1000,
            rebufferingGoal: (info.page[0].player_config?.media_common_config.dynamic_readahead_config.read_ahead_growth_rate_ms || 0) / 1000,
            bufferBehind: 300,
            autoLowLatencyMode: true
          },
          abr: {
            enabled: true,
            restrictions: {
              maxBandwidth: Number(info.page[0].player_config?.stream_selection_config.max_bitrate)
            }
          }
        });

        const networkingEngine = player.getNetworkingEngine();

        if (!networkingEngine) return;

        networkingEngine.registerRequestFilter(async (type, request) => {
          const uri = request.uris[0];
          const url = new URL(uri);
          const headers = request.headers;

          // For local development.
          if ((url.host.endsWith('.googlevideo.com') || url.href.includes('drm'))) {
            url.searchParams.set('__host', url.host);
            url.host = 'localhost';
            url.port = '8080';
            url.protocol = 'http';
          }

          if (type === shaka.net.NetworkingEngine.RequestType.SEGMENT) {
            if (url.pathname.includes('videoplayback')) {
              if (headers.Range) {
                url.searchParams.set('range', headers.Range.split('=')[1]);
                url.searchParams.set('ump', '1');
                url.searchParams.set('srfvp', '1');
                url.searchParams.set('pot', (poToken ?? coldStartToken) ?? '');
                request.headers = {};
                delete headers.Range;
              }
            }

            request.method = 'POST';
            request.body = new Uint8Array([ 120, 0 ]);
          }

          request.uris[0] = url.toString();
        });

        const RequestType = shaka.net.NetworkingEngine.RequestType;

        networkingEngine.registerResponseFilter(async (type, response) => {
          let mediaData = new Uint8Array(0);

          const handleRedirect = async (redirectData: Protos.SabrRedirect) => {
            const redirectRequest = shaka.net.NetworkingEngine.makeRequest([ redirectData.url! ], player!.getConfiguration().streaming.retryParameters);
            const requestOperation = player!.getNetworkingEngine()!.request(type, redirectRequest);
            const redirectResponse = await requestOperation.promise;

            response.data = redirectResponse.data;
            response.headers = redirectResponse.headers;
            response.uri = redirectResponse.uri;
          };

          const handleMediaData = async (data: Uint8Array) => {
            const combinedLength = mediaData.length + data.length;
            const tempMediaData = new Uint8Array(combinedLength);

            tempMediaData.set(mediaData);
            tempMediaData.set(data, mediaData.length);

            mediaData = tempMediaData;
          };

          if (type == RequestType.SEGMENT) {
            const googUmp = new GoogleVideo.UMP(new GoogleVideo.ChunkedDataBuffer([ new Uint8Array(response.data as ArrayBuffer) ]));

            let redirect: Protos.SabrRedirect | undefined;

            googUmp.parse((part) => {
              try {
                const data = part.data.chunks[0];
                switch (part.type) {
                  case PART.MEDIA_HEADER: {
                    const mediaHeader = Protos.MediaHeader.decode(data);
                    console.info('[MediaHeader]:', mediaHeader);
                    break;
                  }
                  case PART.MEDIA: {
                    handleMediaData(part.data.split(1).remainingBuffer.chunks[0]);
                    break;
                  }
                  case PART.SABR_REDIRECT: {
                    redirect = Protos.SabrRedirect.decode(data);
                    console.info('[SABRRedirect]:', redirect);
                    break;
                  }
                  case PART.STREAM_PROTECTION_STATUS: {
                    const streamProtectionStatus = Protos.StreamProtectionStatus.decode(data);
                    switch (streamProtectionStatus.status) {
                      case 1:
                        console.info('[StreamProtectionStatus]: Ok');
                        break;
                      case 2:
                        console.error('[StreamProtectionStatus]: Attestation pending');
                        break;
                      case 3:
                        console.error('[StreamProtectionStatus]: Attestation required');
                        break;
                      default:
                        break;
                    }
                    break;
                  }
                }
              } catch (error) {
                console.error('An error occurred while processing the part:', error);
              }
            });

            if (redirect)
              return handleRedirect(redirect);

            if (mediaData.length)
              response.data = mediaData;
          }
        });

        try {
          await player.load(uri);
        } catch (e) {
          console.error('Could not load manifest', e);
        }
      } else {
        console.error('Browser not supported!');
      }
    } catch (error) {
      title.textContent = 'An error occurred (see console)';
      showUI({ hidePlayer: true });
      console.error(error);
    }
  });
}

function showUI(args: { hidePlayer?: boolean } = {
  hidePlayer: true
}) {
  const ytplayer = document.getElementById('shaka-container') as HTMLDivElement;

  ytplayer.style.display = args.hidePlayer ? 'none' : 'block';

  const video_container = document.getElementById('video-container') as HTMLDivElement;
  video_container.animate({ opacity: [ 0, 1 ] }, { duration: 300, easing: 'ease-in-out' });
  video_container.style.display = 'block';

  loader.style.display = 'none';
}

function hideUI() {
  const video_container = document.getElementById('video-container') as HTMLDivElement;
  video_container.style.display = 'none';
  loader.style.display = 'block';
}

main().catch(console.error);