import Search from '../parser/ytkids/Search.js';
import HomeFeed from '../parser/ytkids/HomeFeed.js';
import VideoInfo from '../parser/ytkids/VideoInfo.js';
import Channel from '../parser/ytkids/Channel.js';
import type Session from './Session.js';

import { generateRandomString } from '../utils/Utils.js';

class Kids {
  #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  /**
   * Searches the given query.
   * @param query - The query.
   */
  async search(query: string): Promise<Search> {
    const response = await this.#session.actions.execute('/search', { query, client: 'YTKIDS' });
    return new Search(this.#session.actions, response.data);
  }

  /**
   * Retrieves video info.
   * @param video_id - The video id.
   */
  async getInfo(video_id: string): Promise<VideoInfo> {
    const cpn = generateRandomString(16);

    const initial_info = this.#session.actions.execute('/player', {
      cpn,
      client: 'YTKIDS',
      videoId: video_id,
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: this.#session.player?.sts || 0
        }
      }
    });

    const continuation = this.#session.actions.execute('/next', { videoId: video_id, client: 'YTKIDS' });

    const response = await Promise.all([ initial_info, continuation ]);

    return new VideoInfo(response, this.#session.actions, cpn);
  }

  /**
   * Retrieves the contents of the given channel.
  * @param channel_id - The channel id.
   */
  async getChannel(channel_id: string): Promise<Channel> {
    const response = await this.#session.actions.execute('/browse', { browseId: channel_id, client: 'YTKIDS' });
    return new Channel(this.#session.actions, response.data);
  }

  /**
   * Retrieves the home feed.
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.#session.actions.execute('/browse', { browseId: 'FEkids_home', client: 'YTKIDS' });
    return new HomeFeed(this.#session.actions, response.data);
  }
}

export default Kids;