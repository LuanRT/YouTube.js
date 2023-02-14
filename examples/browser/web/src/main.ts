import './style.css';
import { Innertube, UniversalCache } from '../../../../bundle/browser';
import dashjs from 'dashjs';

async function main() {
  const yt = await Innertube.create({
    generate_session_locally: true,
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      // url
      const url = typeof input === 'string'
        ? new URL(input)
        : input instanceof URL
          ? input
          : new URL(input.url);

      // transform the url for use with our proxy
      url.searchParams.set('__host', url.host);
      url.host = 'localhost:8080';
      url.protocol = 'http';

      const headers = init?.headers
        ? new Headers(init.headers)
        : input instanceof Request
          ? input.headers
          : new Headers();

      // now serialize the headers
      url.searchParams.set('__headers', JSON.stringify([...headers]));

      // @ts-ignore
      input.duplex = 'half';

      // copy over the request
      const request = new Request(
        url,
        input instanceof Request ? input : undefined,
      );

      headers.delete('user-agent');

      // fetch the url
      return fetch(request, init ? {
        ...init,
        headers
      } : {
        headers
      });
    },
    cache: new UniversalCache(false),
  });

  const description = document.getElementById('description') as HTMLDivElement;
  const form = document.querySelector('form') as HTMLFormElement;
  const title = document.getElementById('title') as HTMLHeadingElement;
  const metadata = document.getElementById('metadata') as HTMLDivElement;
  const loader = document.getElementById('loader') as HTMLDivElement;
  const video_container = document.getElementById('video_container') as HTMLDivElement;

  let player: dashjs.MediaPlayerClass | undefined;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (player) {
      player.reset();
    }

    video_container.style.display = 'none';
    loader.style.display = 'block';

    let video_id;

    const video_id_or_url = document.querySelector<HTMLInputElement>('input[type=text]')?.value;

    if (!video_id_or_url) {
      title.textContent = 'No video id or URL provided';
      return;
    }

    try {
      if (video_id_or_url.match(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/)) {
        const endpoint = await yt.resolveURL(video_id_or_url);

        if (!endpoint.payload.videoId) {
          title.textContent = 'Could not resolve URL';
          return;
        }

        video_id = endpoint.payload.videoId;
      } else {
        video_id = video_id_or_url;
      }

      const video = await yt.getInfo(video_id);

      loader.style.display = 'none';

      title.textContent = video.basic_info.title || null;
      description.innerHTML = video.secondary_info?.description.toHTML() || '';
      title.textContent = video.basic_info.title || null;

      document.title = video.basic_info.title || '';

      metadata!.innerHTML = '';
      metadata!.innerHTML += `<div class="metadata_item">${video.primary_info?.published.toHTML()}</div>`;
      metadata!.innerHTML += `<div class="metadata_item">${video.primary_info?.view_count.toHTML()}</div>`;
      metadata!.innerHTML += `<div class="metadata_item">${video.basic_info.like_count} likes</div>`;

      video_container.animate({ opacity: [0, 1] }, { duration: 300, easing: 'ease-in-out' });
      video_container.style.display = 'block';

      const dash = video.toDash((url) => {
        url.searchParams.set('__host', url.host);
        url.host = 'localhost:8080';
        url.protocol = 'http';
        return url;
      });

      const uri = 'data:application/dash+xml;charset=utf-8;base64,' + btoa(dash);

      // create and append video element
      const video_element = document.querySelector('video') as HTMLVideoElement;
      video_element.setAttribute('controls', 'true');
      video_element.poster = video.basic_info.thumbnail![0].url;

      // use dash.js to parse the manifest
      if (player) {
        player.destroy();
      }

      player = dashjs.MediaPlayer().create();
      player.initialize(video_element, uri, true);
      player.setInitialMediaSettingsFor('audio', { lang: 'en-US' });
    } catch (error) {
      title.textContent = 'An error occurred (see console)';
      console.error(error);
    }
  });
}

main();
