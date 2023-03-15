import Parser, { RawNode } from '../index.js';
import Author from './misc/Author.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { timeToSeconds } from '../../utils/Utils.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class Movie extends YTNode {
  static type = 'Movie';

  id: string;
  title: Text;
  description_snippet: Text | null;
  top_metadata_items: Text;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  author: Author;

  duration: {
    text: string;
    seconds: number;
  };

  endpoint: NavigationEndpoint;
  badges;
  use_vertical_poster: boolean;
  show_action_menu: boolean;
  menu;

  constructor(data: RawNode) {
    super();
    const overlay_time_status = data.thumbnailOverlays
      .find((overlay: any) => overlay.thumbnailOverlayTimeStatusRenderer)
      ?.thumbnailOverlayTimeStatusRenderer.text || 'N/A';

    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet) : null;
    this.top_metadata_items = new Text(data.topMetadataItems);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);

    this.duration = {
      text: data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString(),
      seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString())
    };

    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.badges = Parser.parse(data.badges);
    this.use_vertical_poster = data.useVerticalPoster;
    this.show_action_menu = data.showActionMenu;
    this.menu = Parser.parseItem(data.menu);
  }
}

export default Movie;