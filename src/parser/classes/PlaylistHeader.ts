import Text from './misc/Text.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class PlaylistHeader extends YTNode {
  static type = 'PlaylistHeader';

  id: string;
  title: Text;
  stats: Text[];
  brief_stats: Text[];
  author: PlaylistAuthor;
  description: Text;
  num_videos: Text;
  view_count: Text;
  can_share: boolean;
  can_delete: boolean;
  is_editable: boolean;
  privacy: string;
  save_button;
  shuffle_play_button;
  menu;

  constructor(data: any) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.stats = data.stats.map((stat: any) => new Text(stat));
    this.brief_stats = data.briefStats.map((stat: any) => new Text(stat));
    this.author = new PlaylistAuthor({ ...data.ownerText, navigationEndpoint: data.ownerEndpoint }, data.ownerBadges, null);
    this.description = new Text(data.descriptionText);
    this.num_videos = new Text(data.numVideosText);
    this.view_count = new Text(data.viewCountText);
    this.can_share = data.shareData.canShare;
    this.can_delete = data.editableDetails.canDelete;
    this.is_editable = data.isEditable;
    this.privacy = data.privacy;
    this.save_button = Parser.parse(data.saveButton);
    this.shuffle_play_button = Parser.parse(data.shufflePlayButton);
    this.menu = Parser.parse(data.moreActionsMenu);
  }
}

export default PlaylistHeader;