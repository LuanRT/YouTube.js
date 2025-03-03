import { timeToSeconds } from '../../utils/Utils.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ExpandableMetadata from './ExpandableMetadata.js';
import MetadataBadge from './MetadataBadge.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class Video extends YTNode {
  static type = 'Video';

  public video_id: string;
  public title: Text;
  public untranslated_title?: Text;
  public description_snippet?: Text;
  public snippets?: { text: Text; hover_text: Text; }[];
  public expandable_metadata: ExpandableMetadata | null;
  public additional_metadatas?: Text[];
  public thumbnails: Thumbnail[];
  public thumbnail_overlays: ObservedArray<YTNode>;
  public rich_thumbnail?: YTNode;
  public author: Author;
  public badges: MetadataBadge[];
  public endpoint?: NavigationEndpoint;
  public published?: Text;
  public view_count?: Text;
  public short_view_count?: Text;
  public upcoming?: Date;
  public length_text?: Text;
  public show_action_menu: boolean;
  public is_watched: boolean;
  public menu: Menu | null;
  public byline_text?: Text;
  public search_video_result_entity_key?: string;
  public service_endpoints?: NavigationEndpoint[];
  public service_endpoint?: NavigationEndpoint;
  public style?: 'VIDEO_STYLE_TYPE_UNKNOWN' | 'VIDEO_STYLE_TYPE_NORMAL' | 'VIDEO_STYLE_TYPE_POST' | 'VIDEO_STYLE_TYPE_SUB' | 'VIDEO_STYLE_TYPE_LIVE_POST' | 'VIDEO_STYLE_TYPE_FULL_BLEED_ISOLATED' | 'VIDEO_STYLE_TYPE_WITH_EXPANDED_METADATA';

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.video_id = data.videoId;
    this.expandable_metadata = Parser.parseItem(data.expandableMetadata, ExpandableMetadata);

    if ('untranslatedTitle' in data)
      this.untranslated_title = new Text(data.untranslatedTitle);

    if ('descriptionSnippet' in data)
      this.description_snippet = new Text(data.descriptionSnippet);

    if ('detailedMetadataSnippets' in data) {
      this.snippets = data.detailedMetadataSnippets.map((snippet: RawNode) => ({
        text: new Text(snippet.snippetText),
        hover_text: new Text(snippet.snippetHoverText)
      }));
    }

    if ('additionalMetadatas' in data)
      this.additional_metadatas = data.additionalMetadatas.map((meta: RawNode) => new Text(meta));

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);

    if ('richThumbnail' in data)
      this.rich_thumbnail = Parser.parseItem(data.richThumbnail);

    this.author = new Author(data.ownerText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);

    if ('navigationEndpoint' in data)
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if ('publishedTimeText' in data)
      this.published = new Text(data.publishedTimeText);

    if ('viewCountText' in data)
      this.view_count = new Text(data.viewCountText);

    if ('shortViewCountText' in data)
      this.short_view_count = new Text(data.shortViewCountText);

    if ('upcomingEventData' in data)
      this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));

    this.show_action_menu = !!data.showActionMenu;
    this.is_watched = !!data.isWatched;
    this.menu = Parser.parseItem(data.menu, Menu);

    if ('searchVideoResultEntityKey' in data)
      this.search_video_result_entity_key = data.searchVideoResultEntityKey;

    if ('bylineText' in data)
      this.byline_text = new Text(data.bylineText);

    if ('lengthText' in data)
      this.length_text = new Text(data.lengthText);

    if ('serviceEndpoints' in data)
      this.service_endpoints = data.serviceEndpoints.map((endpoint: RawNode) => new NavigationEndpoint(endpoint));

    if ('serviceEndpoint' in data)
      this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);
    
    if ('style' in data)
      this.style = data.style;
  }

  /**
   * @deprecated Use {@linkcode video_id} instead.
   */
  get id(): string {
    return this.video_id;
  }

  get description(): string {
    if (this.snippets)
      return this.snippets.map((snip) => snip.text.toString()).join('');
    return this.description_snippet?.toString() || '';
  }

  get is_live(): boolean {
    return this.badges.some((badge) => {
      if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
        return true;
    }) || this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus)?.style === 'LIVE';
  }

  get is_upcoming(): boolean | undefined {
    return this.upcoming && this.upcoming > new Date();
  }

  get is_premiere(): boolean {
    return this.badges.some((badge) => badge.label === 'PREMIERE');
  }

  get is_4k(): boolean {
    return this.badges.some((badge) => badge.label === '4K');
  }

  get has_captions(): boolean {
    return this.badges.some((badge) => badge.label === 'CC');
  }

  get best_thumbnail(): Thumbnail | undefined {
    return this.thumbnails[0];
  }

  get duration() {
    const overlay_time_status = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus);
    const length_text = this.length_text?.toString() || overlay_time_status?.text.toString();
    return {
      text: length_text,
      seconds: length_text ? timeToSeconds(length_text) : 0
    };
  }
}
