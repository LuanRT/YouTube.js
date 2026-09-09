import { Innertube, UniversalCache } from 'youtubei.js';
import { botguard_solver, get_channel_id, image_path_to_post_image, youtube_cookies } from './utils.ts';

(async () => {
  const COOKIES = await youtube_cookies();

  const yt = await Innertube.create({ cache: new UniversalCache(false), cookie: COOKIES });
  const CHANNEL_ID = await get_channel_id(yt);

  const posts_manager = yt.posts(botguard_solver);
  const create_post_result = await posts_manager.create({
    comment_text: 'Test post 001',
    // scheduled_publish_time_seconds: String(Math.floor(Date.now() / 1000) + (60 * 60)) // upload in a hour
  }, CHANNEL_ID, 
  {
    type: "IMAGE_POLL",
    options: [
      {text: "Yes", image: {
        source: await image_path_to_post_image(""), 
        preview_coordinates: {left: 0, top: 0, right: 1, bottom: 1}
      }},
      {text: "No", image: {
        source: await image_path_to_post_image(""), 
        preview_coordinates: {left: 0, top: 0, right: 1, bottom: 1}
      }}
    ]
  });
  
  console.log(create_post_result);
})();