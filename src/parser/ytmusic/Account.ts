import { BrowseEndpoint } from '../../core/endpoints/index.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IParsedResponse } from '../types/ParsedResponse.js';
import { Parser } from '../../platform/lib.js';
import type { Memo, ObservedArray } from '../helpers.js';
import type Thumbnail from '../classes/misc/Thumbnail.js';
import ActiveAccountHeader from '../classes/ytmusic/ActiveAccountHeader.js';
import CompactLink from '../classes/CompactLink.js';
import Artist from './Artist.js';

export default class Account {
  #page: IParsedResponse;
  #actions: Actions;
  #memos: Memo | undefined;
  #artist: Artist | undefined;

  account_name: string;
  account_photo: Thumbnail[];
  channel_handle: string;
  channel_id: string;
  items: ObservedArray<CompactLink>;

  constructor(response: ApiResponse, actions: Actions) {
    this.#page = Parser.parseResponse<IParsedResponse>(response.data);
    this.#actions = actions;
    this.#memos = this.#page.actions_memo;

    if (this.#memos === undefined)
      throw new Error('Could not find actions');

    const profile = this.#memos.getType(ActiveAccountHeader).first();

    if (profile === undefined)
      throw new Error('Could not find ActiveAccountHeader');

    this.account_name = profile.account_name.toString();
    this.account_photo = profile.account_photo;
    this.channel_handle = profile.channel_handle.toString();
    this.items = this.#memos.getType(CompactLink);
    const your_channel = this.items.find((lnk) => lnk.title.toString() === 'Your channel') as CompactLink;
    this.channel_id = your_channel.endpoint.payload.browseId;
  }

  get page(): IParsedResponse {
    return this.#page;
  }

  async getProfile(): Promise<Artist> {
    if (this.#artist !== undefined) return this.#artist;

    const response = await this.#actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        client: 'YTMUSIC',
        browse_id: this.channel_id
      })
    );

    return new Artist(response, this.#actions);
  }
}