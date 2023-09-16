import Parser from '../../parser/index.js';
import Channel from '../../parser/ytkids/Channel.js';
import HomeFeed from '../../parser/ytkids/HomeFeed.js';
import Search from '../../parser/ytkids/Search.js';
import VideoInfo from '../../parser/ytkids/VideoInfo.js';
import type Session from '../Session.js';
import { type ApiResponse } from '../Actions.js';

import { InnertubeError, generateRandomString } from '../../utils/Utils.js';

import {
  BrowseEndpoint, NextEndpoint,
  PlayerEndpoint, SearchEndpoint
} from '../endpoints/index.js';
import { KidsBlocklistPickerEndpoint } from '../endpoints/channel/index.js';
import KidsBlocklistPickerItem from '../../parser/classes/ytkids/KidsBlocklistPickerItem.js';

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

  /**
   * Retrieves the list of supervised accounts that the signed-in user has
   * access to, and blocks the given channel for each of them.
   * @param channel_id - The channel id to block.
   * @returns A list of API responses.
   */
  async blockChannel(channel_id: string): Promise<ApiResponse[]> {
    if (!this.#session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const blocklist_payload = KidsBlocklistPickerEndpoint.build({ channel_id: channel_id });
    const response = (await this.#session.actions.execute( KidsBlocklistPickerEndpoint.PATH, blocklist_payload ));
    const popup = response.data.command.confirmDialogEndpoint;
    const popupFragment = { contents: popup.content, engagementPanels: [] };
    const kidPicker = Parser.parseResponse(popupFragment);
    const kids = kidPicker.contents_memo?.getType(KidsBlocklistPickerItem);

    if (!kids)
      throw new InnertubeError('Could not find any kids profiles or supervised accounts.');

    // Iterate through the kids and block the channel if not already blocked.
    const responses: ApiResponse[] = [];
    for (const kid of kids) {
      if (!kid.block_button?.is_toggled) {
        kid.setActions(this.#session.actions);
        // Block channel and add to the response list.
        responses.push(await kid.blockchannel());
      }
    }
    return responses;
  }
}