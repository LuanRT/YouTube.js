import Feed from '../../core/Feed.js';

import Thumbnail from '../classes/misc/Thumbnail.js';
import VideoOwner from '../classes/VideoOwner.js';

import PlaylistMetadata from '../classes/PlaylistMetadata.js';
import PlaylistSidebarPrimaryInfo from '../classes/PlaylistSidebarPrimaryInfo.js';
import PlaylistSidebarSecondaryInfo from '../classes/PlaylistSidebarSecondaryInfo.js';
import PlaylistCustomThumbnail from '../classes/PlaylistCustomThumbnail.js';
import PlaylistVideoThumbnail from '../classes/PlaylistVideoThumbnail.js';
import PlaylistHeader from '../classes/PlaylistHeader.js';
import Message from '../classes/Message.js';

import { InnertubeError } from '../../utils/Utils.js';

import type Actions from '../../core/Actions.js';
import { ObservedArray } from '../helpers.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';

class Playlist extends Feed {
  info;
  menu;
  endpoint?: NavigationEndpoint;
  messages: ObservedArray<Message>;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    const header = this.memo.getType(PlaylistHeader).first();
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo).first();
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo).first();

    if (!primary_info && !secondary_info)
      throw new InnertubeError('This playlist does not exist');

    this.info = {
      ...this.page.metadata.item().as(PlaylistMetadata),
      ...{
        author: secondary_info?.owner.item().as(VideoOwner).author ?? header?.author,
        thumbnails: primary_info?.thumbnail_renderer.item().as(PlaylistVideoThumbnail, PlaylistCustomThumbnail).thumbnail as Thumbnail[],
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
    const response = await this.getContinuationData();
    return new Playlist(this.actions, response, true);
  }
}

export default Playlist;