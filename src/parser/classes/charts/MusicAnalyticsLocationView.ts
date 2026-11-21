import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Thumbnail from '../misc/Thumbnail.js';

export default class MusicAnalyticsLocationView extends YTNode {
  static type = 'MusicAnalyticsLocationView';

  id?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  navigation_endpoint: NavigationEndpoint;
  thumbnail: Thumbnail[];
  view_count?: string;

  constructor(data: RawNode) {
    super();

    this.id = data.id;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.name = data.name;
    this.navigation_endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.view_count = data.viewCount;
  }
}
