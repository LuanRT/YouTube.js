import { timeToSeconds } from '../../utils/Utils.ts';
import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ExpandableMetadata from './ExpandableMetadata.ts';
import MetadataBadge from './MetadataBadge.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.ts';
import Menu from './menus/Menu.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class Video extends YTNode {
  static type = 'Video';

  id: string;
  title: Text;
  description_snippet?: Text;
  snippets?: {
    text: Text;
    hover_text: Text;
  }[];
  expandable_metadata: ExpandableMetadata | null;
  thumbnails: Thumbnail[];
  thumbnail_overlays: ObservedArray<YTNode>;
  rich_thumbnail?: YTNode;
  author: Author;
  badges: MetadataBadge[];
  endpoint: NavigationEndpoint;
  published: Text;
  view_count: Text;
  short_view_count: Text;
  upcoming?: Date;
  duration: {
    text: string;
    seconds: number;
  };
  show_action_menu: boolean;
  is_watched: boolean;
  menu: Menu | null;
  search_video_result_entity_key?: string;

  constructor(data: RawNode) {
    super();
    const overlay_time_status = data.thumbnailOverlays
      .find((overlay: any) => overlay.thumbnailOverlayTimeStatusRenderer)
      ?.thumbnailOverlayTimeStatusRenderer.text || 'N/A';

    this.id = data.videoId;
    this.title = new Text(data.title);

    if (Reflect.has(data, 'descriptionSnippet')) {
      this.description_snippet = new Text(data.descriptionSnippet);
    }

    if (Reflect.has(data, 'detailedMetadataSnippets')) {
      this.snippets = data.detailedMetadataSnippets.map((snippet: RawNode) => ({
        text: new Text(snippet.snippetText),
        hover_text: new Text(snippet.snippetHoverText)
      }));
    }

    this.expandable_metadata = Parser.parseItem(data.expandableMetadata, ExpandableMetadata);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);

    if (Reflect.has(data, 'richThumbnail')) {
      this.rich_thumbnail = Parser.parseItem(data.richThumbnail);
    }

    this.author = new Author(data.ownerText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.published = new Text(data.publishedTimeText);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);

    if (Reflect.has(data, 'upcomingEventData')) {
      this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));
    }

    this.duration = {
      text: data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString(),
      seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString())
    };

    this.show_action_menu = !!data.showActionMenu;
    this.is_watched = !!data.isWatched;
    this.menu = Parser.parseItem(data.menu, Menu);

    if (Reflect.has(data, 'searchVideoResultEntityKey')) {
      this.search_video_result_entity_key = data.searchVideoResultEntityKey;
    }
  }

  get description(): string {
    if (this.snippets) {
      return this.snippets.map((snip) => snip.text.toString()).join('');
    }

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
}
