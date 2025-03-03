import { timeToSeconds } from '../../utils/Utils.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Menu from './menus/Menu.js';
import MetadataBadge from './MetadataBadge.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.js';

export default class CompactVideo extends YTNode {
  static type = 'CompactVideo';

  public video_id: string;
  public thumbnails: Thumbnail[];
  public rich_thumbnail?: YTNode;
  public title: Text;
  public author: Author;
  public view_count?: Text;
  public short_view_count?: Text;
  public short_byline_text?: Text;
  public long_byline_text?: Text;
  public published?: Text;
  public badges: MetadataBadge[];
  public thumbnail_overlays: ObservedArray<YTNode>;
  public endpoint?: NavigationEndpoint;
  public menu: Menu | null;
  public length_text?: Text;
  public is_watched: boolean;
  public service_endpoints?: NavigationEndpoint[];
  public service_endpoint?: NavigationEndpoint;
  public style?: 'COMPACT_VIDEO_STYLE_TYPE_UNKNOWN' | 'COMPACT_VIDEO_STYLE_TYPE_NORMAL' | 'COMPACT_VIDEO_STYLE_TYPE_PROMINENT_THUMBNAIL' | 'COMPACT_VIDEO_STYLE_TYPE_HERO';

  constructor(data: RawNode) {
    super();
    this.video_id = data.videoId;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
    this.is_watched = !!data.isWatched;
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.menu = Parser.parseItem(data.menu, Menu);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);

    if ('publishedTimeText' in data)
      this.published = new Text(data.publishedTimeText);
    
    if ('shortBylineText' in data)
      this.view_count = new Text(data.viewCountText);

    if ('shortViewCountText' in data)
      this.short_view_count = new Text(data.shortViewCountText);

    if ('richThumbnail' in data)
      this.rich_thumbnail = Parser.parseItem(data.richThumbnail);

    if ('shortBylineText' in data)
      this.short_byline_text = new Text(data.shortBylineText);

    if ('longBylineText' in data)
      this.long_byline_text = new Text(data.longBylineText);

    if ('lengthText' in data)
      this.length_text = new Text(data.lengthText);

    if ('serviceEndpoints' in data)
      this.service_endpoints = data.serviceEndpoints.map((endpoint: RawNode) => new NavigationEndpoint(endpoint));

    if ('serviceEndpoint' in data)
      this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);

    if ('navigationEndpoint' in data)
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if ('style' in data)
      this.style = data.style;
  }

  /**
   * @deprecated Use {@linkcode video_id} instead.
   */
  get id(): string {
    return this.video_id;
  }

  get duration() {
    const overlay_time_status = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus);
    const length_text = this.length_text?.toString() || overlay_time_status?.text.toString();
    return {
      text: length_text,
      seconds: length_text ? timeToSeconds(length_text) : 0
    };
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }

  get is_fundraiser(): boolean {
    return this.badges.some((badge) => badge.label === 'Fundraiser');
  }

  get is_live(): boolean {
    return this.badges.some((badge) => {
      if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
        return true;
    });
  }

  get is_new(): boolean {
    return this.badges.some((badge) => badge.label === 'New');
  }

  get is_premiere(): boolean {
    return this.badges.some((badge) => badge.style === 'PREMIERE');
  }
}