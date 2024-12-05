import { InnertubeError } from '../../utils/Utils.ts';

import Feed from '../../core/mixins/Feed.ts';
import Message from '../classes/Message.ts';
import PlaylistCustomThumbnail from '../classes/PlaylistCustomThumbnail.ts';
import PlaylistHeader from '../classes/PlaylistHeader.ts';
import PlaylistMetadata from '../classes/PlaylistMetadata.ts';
import PlaylistSidebarPrimaryInfo from '../classes/PlaylistSidebarPrimaryInfo.ts';
import PlaylistSidebarSecondaryInfo from '../classes/PlaylistSidebarSecondaryInfo.ts';
import PlaylistVideoThumbnail from '../classes/PlaylistVideoThumbnail.ts';
import ReelItem from '../classes/ReelItem.ts';
import ShortsLockupView from '../classes/ShortsLockupView.ts';
import VideoOwner from '../classes/VideoOwner.ts';
import Alert from '../classes/Alert.ts';
import ContinuationItem from '../classes/ContinuationItem.ts';
import PlaylistVideo from '../classes/PlaylistVideo.ts';
import SectionList from '../classes/SectionList.ts';
import { observe, type ObservedArray, type YTNode } from '../helpers.ts';

import type { Actions, ApiResponse } from '../../core/index.ts';
import type { IBrowseResponse } from '../types/index.ts';
import type Thumbnail from '../classes/misc/Thumbnail.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';

export default class Playlist extends Feed<IBrowseResponse> {
  public info;
  public menu: YTNode;
  public endpoint?: NavigationEndpoint;
  public messages: ObservedArray<Message>;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);

    const header = this.memo.getType(PlaylistHeader).first();
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo).first();
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo).first();
    const alert = this.page.alerts?.firstOfType(Alert);

    if (alert && alert.alert_type === 'ERROR')
      throw new InnertubeError(alert.text.toString(), alert);

    if (!primary_info && !secondary_info && Object.keys(this.page).length === 0)
      throw new InnertubeError('Got empty continuation response. This is likely the end of the playlist.');

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

  get items(): ObservedArray<PlaylistVideo | ReelItem | ShortsLockupView> {
    return observe(this.videos.as(PlaylistVideo, ReelItem, ShortsLockupView).filter((video) => (video as PlaylistVideo).style !== 'PLAYLIST_VIDEO_RENDERER_STYLE_RECOMMENDED_VIDEO'));
  }

  get has_continuation() {
    const section_list = this.memo.getType(SectionList).first();

    if (!section_list)
      return super.has_continuation;

    return !!this.memo.getType(ContinuationItem).find((node) => !section_list.contents.includes(node));
  }

  async getContinuationData(): Promise<IBrowseResponse | undefined> {
    const section_list = this.memo.getType(SectionList).first();

    /**
     * No section list means there can't be additional continuation nodes here,
     * so no need to check.
     */
    if (!section_list)
      return await super.getContinuationData();

    const playlist_contents_continuation = this.memo.getType(ContinuationItem)
      .find((node) => !section_list.contents.includes(node));

    if (!playlist_contents_continuation)
      throw new InnertubeError('There are no continuations.');

    return await playlist_contents_continuation.endpoint.call<IBrowseResponse>(this.actions, { parse: true });
  }

  async getContinuation(): Promise<Playlist> {
    const page = await this.getContinuationData();
    if (!page)
      throw new InnertubeError('Could not get continuation data');
    return new Playlist(this.actions, page, true);
  }

  #getStat(index: number, primary_info?: PlaylistSidebarPrimaryInfo): string {
    if (!primary_info || !primary_info.stats) return 'N/A';
    return primary_info.stats[index]?.toString() || 'N/A';
  }
}