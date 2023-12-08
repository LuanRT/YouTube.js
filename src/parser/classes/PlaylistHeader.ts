import Text from './misc/Text.js';
import Author from './misc/Author.js';
import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class PlaylistHeader extends YTNode {
  static type = 'PlaylistHeader';

  id: string;
  title: Text;
  subtitle: Text | null;
  stats: Text[];
  brief_stats: Text[];
  author: Author | null;
  description: Text;
  num_videos: Text;
  view_count: Text;
  can_share: boolean;
  can_delete: boolean;
  is_editable: boolean;
  privacy: string;
  save_button: YTNode;
  shuffle_play_button: YTNode;
  menu: YTNode;
  banner: YTNode;

  constructor(data: RawNode) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.subtitle = data.subtitle ? new Text(data.subtitle) : null;
    this.stats = data.stats.map((stat: RawNode) => new Text(stat));
    this.brief_stats = data.briefStats.map((stat: RawNode) => new Text(stat));
    this.author = data.ownerText || data.ownerEndpoint ? new Author({ ...data.ownerText, navigationEndpoint: data.ownerEndpoint }, data.ownerBadges, null) : null;
    this.description = new Text(data.descriptionText);
    this.num_videos = new Text(data.numVideosText);
    this.view_count = new Text(data.viewCountText);
    this.can_share = data.shareData.canShare;
    this.can_delete = data.editableDetails.canDelete;
    this.is_editable = data.isEditable;
    this.privacy = data.privacy;
    this.save_button = Parser.parseItem(data.saveButton);
    this.shuffle_play_button = Parser.parseItem(data.shufflePlayButton);
    this.menu = Parser.parseItem(data.moreActionsMenu);
    this.banner = Parser.parseItem(data.playlistHeaderBanner);
  }
}