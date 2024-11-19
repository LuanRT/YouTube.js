import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class AddToPlaylistCommand extends YTNode {
  static type = 'AddToPlaylistCommand';

  public open_miniplayer: boolean;
  public video_id: string;
  public list_type: string;
  public endpoint: NavigationEndpoint;
  public video_ids: string[];

  constructor(data: RawNode) {
    super();
    this.open_miniplayer = data.openMiniplayer;
    this.video_id = data.videoId;
    this.list_type = data.listType;
    this.endpoint = new NavigationEndpoint(data.onCreateListCommand);
    this.video_ids = data.videoIds;
  }
}