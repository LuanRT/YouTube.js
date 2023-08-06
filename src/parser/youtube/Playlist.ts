import Feed from '../../core/mixins/Feed.js';
import Message from '../classes/Message.js';
import type Thumbnail from '../classes/misc/Thumbnail.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import PlaylistCustomThumbnail from '../classes/PlaylistCustomThumbnail.js';
import PlaylistHeader from '../classes/PlaylistHeader.js';
import PlaylistMetadata from '../classes/PlaylistMetadata.js';
import PlaylistSidebarPrimaryInfo from '../classes/PlaylistSidebarPrimaryInfo.js';
import PlaylistSidebarSecondaryInfo from '../classes/PlaylistSidebarSecondaryInfo.js';
import PlaylistVideoThumbnail from '../classes/PlaylistVideoThumbnail.js';
import VideoOwner from '../classes/VideoOwner.js';

import { InnertubeError } from '../../utils/Utils.js';
import type { ObservedArray } from '../helpers.js';

import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';

class Playlist extends Feed<IBrowseResponse> {
  info;
  menu;
  endpoint?: NavigationEndpoint;
  messages: ObservedArray<Message>;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);

    const header = this.memo.getType(PlaylistHeader).first();
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo).first();
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo).first();

    if (!primary_info && !secondary_info)
      throw new InnertubeError('This playlist does not exist');

    this.info = {
      ...this.page.metadata?.item().as(PlaylistMetadata),
      ...{
        subtitle: header ? header.subtitle : null,
        author: secondary_info?.owner?.as(VideoOwner).author ?? header?.author,
        thumbnails: primary_info?.thumbnail_renderer?.as(PlaylistVideoThumbnail, PlaylistCustomThumbnail).thumbnail as Thumbnail[],
        total_items: this.#getStat(0, primary_info),
        views: this.#getStat(1, primary_info),
        last_updated: this.#getStat(2, primary_info),
        can_share: header?.can_share,
        can_delete: header?.can_delete,
        is_editable: header?.is_editable,
        privacy: header?.privacy
      }
    };

    this.menu = primary_info?.menu;
    this.endpoint = primary_info?.endpoint;
    this.messages = this.memo.getType(Message);
  }

  #getStat(index: number, primary_info?: PlaylistSidebarPrimaryInfo): string {
    if (!primary_info || !primary_info.stats) return 'N/A';
    return primary_info.stats[index]?.toString() || 'N/A';
  }

  get items() {
    return this.videos;
  }

  async getContinuation(): Promise<Playlist> {
    const page = await this.getContinuationData();
    if (!page)
      throw new InnertubeError('Could not get continuation data');
    return new Playlist(this.actions, page, true);
  }
}

export default Playlist;