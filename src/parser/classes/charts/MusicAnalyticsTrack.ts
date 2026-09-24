import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Thumbnail from '../misc/Thumbnail.js';

export default class MusicAnalyticsTrack extends YTNode {
  static type = 'MusicAnalyticsTrack';

  artist_id?: string;
  artist_name?: string;
  encrypted_video_id?: string;
  id?: string;
  name?: string;
  navigation_endpoint: NavigationEndpoint;
  thumbnail: Thumbnail[];
  video_duration?: number;
  view_count?: string;

  constructor(data: RawNode) {
    super();

    this.artist_id = data.artistId;
    this.artist_name = data.artistName;
    this.encrypted_video_id = data.encryptedVideoId;
    this.id = data.id;
    this.name = data.name;
    this.navigation_endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.video_duration = data.videoDuration;
    this.view_count = data.viewCount;
  }
}
