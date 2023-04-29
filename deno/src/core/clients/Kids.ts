import Channel from '../../parser/ytkids/Channel.ts';
import HomeFeed from '../../parser/ytkids/HomeFeed.ts';
import Search from '../../parser/ytkids/Search.ts';
import VideoInfo from '../../parser/ytkids/VideoInfo.ts';
import type Session from '../Session.ts';

import { generateRandomString } from '../../utils/Utils.ts';

import {
  BrowseEndpoint, NextEndpoint,
  PlayerEndpoint, SearchEndpoint
} from '../endpoints/index.ts';

export default class Kids {
  #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  /**
   * Searches the given query.
   * @param query - The query.
   */
  async search(query: string): Promise<Search> {
    const response = await this.#session.actions.execute(
      SearchEndpoint.PATH, SearchEndpoint.build({ client: 'YTKIDS', query })
    );
    return new Search(this.#session.actions, response);
  }

  /**
   * Retrieves video info.
   * @param video_id - The video id.
   */
  async getInfo(video_id: string): Promise<VideoInfo> {
    const player_payload = PlayerEndpoint.build({
      sts: this.#session.player?.sts,
      client: 'YTKIDS',
      video_id
    });

    const next_payload = NextEndpoint.build({
      video_id,
      client: 'YTKIDS'
    });

    const player_response = this.#session.actions.execute(PlayerEndpoint.PATH, player_payload);
    const next_response = this.#session.actions.execute(NextEndpoint.PATH, next_payload);
    const response = await Promise.all([ player_response, next_response ]);

    const cpn = generateRandomString(16);

    return new VideoInfo(response, this.#session.actions, cpn);
  }

  /**
   * Retrieves the contents of the given channel.
  * @param channel_id - The channel id.
   */
  async getChannel(channel_id: string): Promise<Channel> {
    const response = await this.#session.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: channel_id,
        client: 'YTKIDS'
      })
    );
    return new Channel(this.#session.actions, response);
  }

  /**
   * Retrieves the home feed.
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.#session.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'FEkids_home',
        client: 'YTKIDS'
      })
    );
    return new HomeFeed(this.#session.actions, response);
  }
}