import { Innertube } from "../../build/browser.js";

const yt = await Innertube.create();

const video = await yt.getInfo("dQw4w9WgXcQ");

console.log('Video title is', video.basic_info.title);
