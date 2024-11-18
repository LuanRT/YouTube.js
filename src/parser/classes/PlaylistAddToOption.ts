import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type { RawNode } from '../index.js';

export type PrivacyIcon = {
  icon_type: string | null;
};

export default class PlaylistAddToOption extends YTNode {
  static type = 'PlaylistAddToOption';

  public add_to_playlist_service_endpoint: NavigationEndpoint;
  public contains_selected_videos: 'ALL' | 'NONE';
  public playlist_id: string;
  public privacy: string;
  public privacy_icon: PrivacyIcon;
  public remove_from_playlist_service_endpoint: NavigationEndpoint;
  public title: Text;

  constructor(data: RawNode) {
    super();
    this.add_to_playlist_service_endpoint = new NavigationEndpoint(data.addToPlaylistServiceEndpoint);
    this.contains_selected_videos = data.containsSelectedVideos;
    this.playlist_id = data.playlistId;
    this.privacy = data.privacy;
    this.privacy_icon = { icon_type: data.privacyIcon?.iconType || null };
    this.remove_from_playlist_service_endpoint = new NavigationEndpoint(data.removeFromPlaylistServiceEndpoint);
    this.title = new Text(data.title);
  }
}