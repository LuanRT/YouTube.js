import './style.css'
import { Innertube } from "../../../../build/browser.js";
import dashjs from "dashjs";

async function main() {
  const yt = await Innertube.create({
    browser_proxy: {
      host: 'localhost:8080',
      schema: 'http'
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

      const dash = video.toDash();

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