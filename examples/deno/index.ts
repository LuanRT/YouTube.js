import { Innertube } from '../../bundle/browser.js';

const yt = await Innertube.create();

const video = await yt.getInfo('dQw4w9WgXcQ');

console.log('Video title is', video.basic_info.title);

const file = await Deno.open('test.mp4', {
  write: true,
  create: true,
});

const stream = await video.download();

stream.pipeTo(file.writable);
