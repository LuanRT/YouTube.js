import Parser from '../index';
import Text from './misc/Text';
import Author from './misc/Author';
import Menu from './menus/Menu';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { timeToSeconds } from '../../utils/Utils';
import { YTNode } from '../helpers';

class Video extends YTNode {
  static type = 'Video';

  id: string;
  title: Text;
  description_snippet: Text | null;
  snippets: {
    text: Text;
    hover_text: Text;
  }[];

  thumbnails: Thumbnail[];
  thumbnail_overlays;
  rich_thumbnail;
  author: Author;
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
  menu;

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

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.rich_thumbnail = data.richThumbnail ? Parser.parse(data.richThumbnail) : null;
    this.author = new Author(data.ownerText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
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
  }

  get description(): string {
    if (this.snippets.length > 0) {
      return this.snippets.map((snip) => snip.text.toString()).join('');
    }
    return this.description_snippet?.toString() || '';
  }

  /*
  Get is_live() {
    return this.badges.some((badge) => badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW');
  }
  */

  get is_upcoming(): boolean | undefined {
    return this.upcoming && this.upcoming > new Date();
  }

  /*
  Get has_captions() {
    return this.badges.some((badge) => badge.label === 'CC');
  }*/

  get best_thumbnail(): Thumbnail | undefined{
    return this.thumbnails[0];
  }
}

export default Video;