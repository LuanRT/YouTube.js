import { YTNode } from '../helpers.js';
import Parser, { RawNode } from '../index.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

class GridPlaylist extends YTNode {
  static type = 'GridPlaylist';

  id: string;
  title: Text;
  author?: PlaylistAuthor;
  badges;
  endpoint: NavigationEndpoint;
  view_playlist: Text;
  thumbnails: Thumbnail[];
  thumbnail_renderer;
  sidebar_thumbnails: Thumbnail[] | null;
  video_count: Text;
  video_count_short: Text;

  constructor(data: RawNode) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);

    if (data.shortBylineText) {
      this.author = new PlaylistAuthor(data.shortBylineText, data.ownerBadges);
    }

    this.badges = Parser.parseArray(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.view_playlist = new Text(data.viewPlaylistText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_renderer = Parser.parseItem(data.thumbnailRenderer);
    this.sidebar_thumbnails = [].concat(...data.sidebarThumbnails?.map((thumbnail: any) => Thumbnail.fromResponse(thumbnail)) || []) || null;
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short = new Text(data.videoCountShortText);
  }
}

export default GridPlaylist;