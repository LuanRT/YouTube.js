import Parser from '../index.js';
import Text from './misc/Text.js';
import Author from './misc/Author.js';
import Menu from './menus/Menu.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MetadataBadge from './MetadataBadge.js';
import ExpandableMetadata from './ExpandableMetadata.js';

import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';

class Video extends YTNode {
  static type = 'Video';

  id: string;
  title: Text;
  description_snippet: Text | null;
  snippets: {
    text: Text;
    hover_text: Text;
  }[];
  expandable_metadata: ExpandableMetadata | null;

  thumbnails: Thumbnail[];
  thumbnail_overlays;
  rich_thumbnail;
  author: Author;
  badges: MetadataBadge[];
  endpoint: NavigationEndpoint;
  published: Text;
  view_count: Text;
  short_view_count: Text;
  upcoming;

  duration: {
    text: string;
    seconds: number;
  };

  show_action_menu: boolean;
  is_watched: boolean;
  menu: Menu | null;
  search_video_result_entity_key: string;

  constructor(data: any) {
    super();

    const overlay_time_status = data.thumbnailOverlays
      .find((overlay: any) => overlay.thumbnailOverlayTimeStatusRenderer)
      ?.thumbnailOverlayTimeStatusRenderer.text || 'N/A';

    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet) : null;

    this.snippets = data.detailedMetadataSnippets?.map((snippet: any) => ({
      text: new Text(snippet.snippetText),
      hover_text: new Text(snippet.snippetHoverText)
    })) || [];

    this.expandable_metadata = Parser.parseItem<ExpandableMetadata>(data.expandableMetadata);

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.rich_thumbnail = data.richThumbnail ? Parser.parseItem(data.richThumbnail) : null;
    this.author = new Author(data.ownerText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.published = new Text(data.publishedTimeText);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);

    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }

    this.duration = {
      text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
      seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
    };

    this.show_action_menu = data.showActionMenu;
    this.is_watched = data.isWatched || false;
    this.menu = Parser.parseItem<Menu>(data.menu, Menu);
    this.search_video_result_entity_key = data.searchVideoResultEntityKey;
  }

  get description(): string {
    if (this.snippets.length > 0) {
      return this.snippets.map((snip) => snip.text.toString()).join('');
    }
    return this.description_snippet?.toString() || '';
  }

  get is_live(): boolean {
    return this.badges.some((badge) => {
      if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
        return true;
    });
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

export default Video;