import Innertube, { UniversalCache } from 'youtubei.js';
import { botguard_solver, get_channel_id, youtube_cookies } from './utils.ts';


(async () => {
  const COOKIES = await youtube_cookies();

  const yt = await Innertube.create({ cache: new UniversalCache(false), cookie: COOKIES });

  const CHANNEL_ID = await get_channel_id(yt);

  const yt_studio_web = yt.studioWeb(CHANNEL_ID);
  yt_studio_web.setBotGuardSolver(botguard_solver);
  const session_token = await yt_studio_web.getSessionToken();
  console.log(session_token);
})();