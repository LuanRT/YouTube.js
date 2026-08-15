import Innertube, { UniversalCache } from 'youtubei.js';
import { botguard_solver, get_channel_id, get_file_named_buffer_base64, get_file_named_buffer_reader } from "./utils.ts";

const COOKIES = ""; // ?? Place your YouTube cookies here
const VIDEO_FILE_PATH = ""; // ?? Place your video file path here
const THUMBNAIL_FILE_PATH = ""; // ?? Place your thumbnail file path here
const SRT_FILE_PATH = ""; // ?? Place your srt file path here

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(false), cookie: COOKIES });

  const CHANNEL_ID = await get_channel_id(yt);

  const yt_studio_web = yt.studioWeb(CHANNEL_ID);
  yt_studio_web.setBotGuardSolver(botguard_solver);

  console.log('creating...');

  const created_response = await yt_studio_web.uploadVideo(await get_file_named_buffer_reader(VIDEO_FILE_PATH), {
    title: "This is a test upload",
    thumbnail: await get_file_named_buffer_reader(THUMBNAIL_FILE_PATH),
    subtitles: {
      synced: true,
      data: await get_file_named_buffer_base64(SRT_FILE_PATH)
    },
    description: "This is a test description",
    visibility: "PRIVATE"
  }, (written_bytes, total_bytes) => {
    // NOTE this callback only fires around every 100mb
    console.log(`${written_bytes / total_bytes}%`);
  }, async (full_created) => {
    // NOTE this cycle fires every 2s-ish
    await yt_studio_web.uploadFeedbackCycle([full_created.feedback_token], (content) => {
      if(content[0].transfer_progress_bar?.progress_message) console.log(content[0].transfer_progress_bar?.progress_message);
      if(content[0].is_processing) console.log("processing...");
      return true;
    });
  });
  console.log(created_response);
})();