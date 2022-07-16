import './style.css'
import { Innertube } from "../../../../bundle/browser";
import dashjs from "dashjs";

async function main() {
  const yt = await Innertube.create({
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      // url
      const url = 
        typeof input === 'string' ? 
          new URL(input) : 
        input instanceof URL ?
          input :
          new URL(input.url);

      // transform the url for use with our proxy
      url.searchParams.set('__host', url.host);
      url.host = 'localhost:8080';
      url.protocol = 'http';
      
      const headers = 
        init?.headers ? 
          new Headers(init.headers) : 
        input instanceof Request ? 
          input.headers : 
          new Headers();

      // now serialize the headers
      url.searchParams.set('__headers', JSON.stringify([...headers]));

      // copy over the request
      const request = new Request(url, input instanceof Request ? input : undefined);

      // fetch the url
      return fetch(request, init);
    }
  });

  const span = document.getElementById('video_name') as HTMLSpanElement;
  const form = document.querySelector('form') as HTMLFormElement;

  span.textContent = 'Library ready';

  let player: dashjs.MediaPlayerClass | undefined = undefined;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    span.textContent = 'Loading...';

    const video_id = document.querySelector<HTMLInputElement>('input[type=text]')?.value;
    if (!video_id) {
      span.textContent = 'No video id';
      return;
    };
    try {
      const video = await yt.getInfo(video_id);
    
      console.log(video);
      span.textContent = video.basic_info.title || null;

      const dash = video.toDash(url => {
        url.searchParams.set('__host', url.host);
        url.host = 'localhost:8080';
        url.protocol = 'http';
        return url;
      });

      const uri = "data:application/dash+xml;charset=utf-8;base64," + btoa(dash);

      // create and append video element
      const video_element = document.querySelector('video') as HTMLVideoElement;
      video_element.setAttribute('controls', 'true');
      // use dash.js to parse the manifest
      if (player)
        player.destroy();
      player = dashjs.MediaPlayer().create();
      player.initialize(video_element, uri, true);
      // append to dom
      document.body.appendChild(video_element);
    } catch (error) {
      span.textContent = 'An error occurred (see console)';
      console.error(error);
    }
  });
}

main();