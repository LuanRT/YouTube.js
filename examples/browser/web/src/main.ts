import { Innertube, UniversalCache } from '../../../../bundle/browser';

// @ts-ignore - Shaka's TS support is not the best.
import shaka from 'shaka-player/dist/shaka-player.ui.js';

import "shaka-player/dist/controls.css";

const title = document.getElementById('title') as HTMLHeadingElement;
const description = document.getElementById('description') as HTMLDivElement;
const metadata = document.getElementById('metadata') as HTMLDivElement;
const loader = document.getElementById('loader') as HTMLDivElement;
const form = document.querySelector('form') as HTMLFormElement;

async function main() {
  const yt = await Innertube.create({
    generate_session_locally: true,
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
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
      url.searchParams.set('__headers', JSON.stringify([...headers]));

      if (input instanceof Request) {
        // @ts-ignore
        input.duplex = 'half';
      }

      // Copy over the request.
      const request = new Request(
        url,
        input instanceof Request ? input : undefined,
      );

      headers.delete('user-agent');

      return fetch(request, init ? {
        ...init,
        headers
      } : {
        headers
      });
    },
    cache: new UniversalCache(false),
  });

  form.animate({ opacity: [0, 1] }, { duration: 300, easing: 'ease-in-out' });
  form.style.display = 'block';

  showUI({ hidePlayer: true });

  let player: shaka.Player | undefined;
  let ui: shaka.ui.Overlay | undefined;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (player) {
      player.destroy();
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
      if (videoIdOrURL.match(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/)) {
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
      metadata.innerHTML += `<div id="metadata-item">${info.primary_info?.view_count.toHTML()}</div>`;
      metadata.innerHTML += `<div id="metadata-item">${info.basic_info.like_count} likes</div>`;

      showUI({ hidePlayer: false });

      const dash = await info.toDash();

      const uri = 'data:application/dash+xml;charset=utf-8;base64,' + btoa(dash);

      if (player) {
        await player.destroy();
        player = undefined;
      }

      if (ui) {
        ui.destroy();
        ui = undefined;
      }

      const videoEl = document.getElementById('videoel') as HTMLVideoElement;
      const shakaContainer = document.getElementById('shaka-container') as HTMLDivElement;

      shakaContainer
        .querySelectorAll("div")
        .forEach(node => node.remove());

      shaka.polyfill.installAll();

      if (shaka.Player.isBrowserSupported()) {
        videoEl.poster = info.basic_info.thumbnail![0].url;

        player = new shaka.Player(videoEl);
        ui = new shaka.ui.Overlay(player, shakaContainer, videoEl);

        const config = {
          seekBarColors: {
            base: 'rgba(255,255,255,.2)',
            buffered: 'rgba(255,255,255,.4)',
            played: 'rgb(255,0,0)',
          },
          fadeDelay: 0,
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
            bufferingGoal: 180,
            rebufferingGoal: 0.02,
            bufferBehind: 300
          }
        });

        player.getNetworkingEngine()?.registerRequestFilter((_type: any, request: any) => {
          const uri = request.uris[0];
          const url = new URL(uri);
          const headers = request.headers;

          if (url.host.endsWith(".googlevideo.com") || headers.Range) {
            url.searchParams.set('__host', url.host);
            url.host = 'localhost:8080';
            url.protocol = 'http';
          }

          request.method = 'POST';

          // protobuf - { 15: 0 }
          request.body = new Uint8Array([120, 0]);

          if (url.pathname === "/videoplayback") {
            if (headers.Range) {
              request.headers = {};
              url.searchParams.set("range", headers.Range.split("=")[1]);
              url.searchParams.set("alr", "yes");
            }
          }

          request.uris[0] = url.toString();
        });

        // The UTF-8 characters "h", "t", "t", and "p".
        const HTTP_IN_HEX = 0x68747470;

        const RequestType = shaka.net.NetworkingEngine.RequestType;

        player.getNetworkingEngine()?.registerResponseFilter(async (type: any, response: any) => {
          const dataView = new DataView(response.data);
          
          if (response.data.byteLength < 4 ||
            dataView.getUint32(0) != HTTP_IN_HEX) {
            // This doesn't start with "http", so it is not an ALR.
            return;
          }

          // Interpret the response data as a URL string.
          const response_as_string = shaka.util.StringUtils.fromUTF8(response.data);

          let retry_parameters;

          if (type == RequestType.MANIFEST) {
            retry_parameters = player!.getConfiguration().manifest.retryParameters;
          } else if (type == RequestType.SEGMENT) {
            retry_parameters = player!.getConfiguration().streaming.retryParameters;
          } else if (type == RequestType.LICENSE) {
            retry_parameters = player!.getConfiguration().drm.retryParameters;
          } else {
            retry_parameters = shaka.net.NetworkingEngine.defaultRetryParameters();
          }

          // Make another request for the redirect URL.
          const uris = [response_as_string];
          const redirect_request = shaka.net.NetworkingEngine.makeRequest(uris, retry_parameters);
          const request_operation = player!.getNetworkingEngine()!.request(type, redirect_request);
          const redirect_response = await request_operation.promise;

          // Modify the original response to contain the results of the redirect
          // response.
          response.data = redirect_response.data;
          response.headers = redirect_response.headers;
          response.uri = redirect_response.uri;
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
  hidePlayer: true,
}) {
  const ytplayer = document.getElementById('shaka-container') as HTMLDivElement;

  ytplayer.style.display = args.hidePlayer ? 'none' : 'block';

  const video_container = document.getElementById('video-container') as HTMLDivElement;
  video_container.animate({ opacity: [0, 1] }, { duration: 300, easing: 'ease-in-out' });
  video_container.style.display = 'block';

  loader.style.display = 'none';
}

function hideUI() {
  const video_container = document.getElementById('video-container') as HTMLDivElement;
  video_container.style.display = 'none';
  loader.style.display = 'block';
}

main();