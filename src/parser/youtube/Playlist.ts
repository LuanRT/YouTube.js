import Actions from '../../core/Actions';
import Feed from '../../core/Feed';

import Thumbnail from '../classes/misc/Thumbnail';
import VideoOwner from '../classes/VideoOwner';

import PlaylistMetadata from '../classes/PlaylistMetadata';
import PlaylistSidebarPrimaryInfo from '../classes/PlaylistSidebarPrimaryInfo';
import PlaylistSidebarSecondaryInfo from '../classes/PlaylistSidebarSecondaryInfo';
import PlaylistVideoThumbnail from '../classes/PlaylistVideoThumbnail';
import PlaylistHeader from '../classes/PlaylistHeader';

import { InnertubeError } from '../../utils/Utils';

class Playlist extends Feed {
  info;
  menu;
  endpoint;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    const header = this.memo.getType(PlaylistHeader)?.[0];
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo)?.[0];
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo)?.[0];

    if (!primary_info && !secondary_info)
      throw new InnertubeError('This playlist does not exist');

    this.info = {
      ...this.page.metadata.item().as(PlaylistMetadata),
      ...{
        author: secondary_info?.owner.item().as(VideoOwner).author,
        thumbnails: primary_info?.thumbnail_renderer.item().as(PlaylistVideoThumbnail).thumbnail as Thumbnail[],
        total_items: this.#getStat(0, primary_info),
        views: this.#getStat(1, primary_info),
        last_updated: this.#getStat(2, primary_info),
        can_share: header?.can_share,
        can_delete: header?.can_delete,
        is_editable: header?.is_editable,
        privacy: header?.privacy
      }
    };

    this.menu = primary_info?.menu.item();
    this.endpoint = primary_info?.endpoint;
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
    return new Playlist(this.actions, response);
  }
}

export default Playlist;