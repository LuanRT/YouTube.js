import { Innertube } from "youtubei.js/cf-worker";

export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    // cannot initialize Innertube in global scope as it makes fetch requests
    const yt = await Innertube.create();

    const video = await yt.getInfo("jNQXAC9IVRw");
    console.log("Video title is", video.basic_info.title);

    return new Response("Hello World!");
  },
};
