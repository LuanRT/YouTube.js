import './style.css'
import { Innertube } from "../../../../build/browser.js";

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
    } catch (error) {
      span.textContent = 'An error occurred (see console)';
      console.error(error);
    }
  });
}

main();