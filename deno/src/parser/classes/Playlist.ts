import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import PlaylistCustomThumbnail from './PlaylistCustomThumbnail.ts';
import PlaylistVideoThumbnail from './PlaylistVideoThumbnail.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class Playlist extends YTNode {
  static type = 'Playlist';

  id: string;
  title: Text;
  author: Text | Author;
  thumbnails: Thumbnail[];
  thumbnail_renderer?: PlaylistVideoThumbnail | PlaylistCustomThumbnail;
  video_count: Text;
  video_count_short: Text;
  first_videos: ObservedArray<YTNode>;
  share_url: string | null;
  menu: YTNode;
  badges: ObservedArray<YTNode>;
  endpoint: NavigationEndpoint;
  thumbnail_overlays: ObservedArray<YTNode>;
  view_playlist?: Text;

  constructor(data: RawNode) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);

    this.author = data.shortBylineText?.simpleText ?
      new Text(data.shortBylineText) :
      new Author(data.longBylineText, data.ownerBadges, null);

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th: any) => th.thumbnails).flat(1) });
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short = new Text(data.videoCountShortText);
    this.first_videos = Parser.parseArray(data.videos);
    this.share_url = data.shareUrl || null;
    this.menu = Parser.parseItem(data.menu);
    this.badges = Parser.parseArray(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);

    if (Reflect.has(data, 'thumbnailRenderer')) {
      this.thumbnail_renderer = Parser.parseItem(data.thumbnailRenderer, [ PlaylistVideoThumbnail, PlaylistCustomThumbnail ]) || undefined;
    }

    if (Reflect.has(data, 'viewPlaylistText')) {
      this.view_playlist = new Text(data.viewPlaylistText);
    }
  }
}