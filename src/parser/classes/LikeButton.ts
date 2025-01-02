import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class LikeButton extends YTNode {
  static type = 'LikeButton';

  target: {
    video_id: string;
  };

  like_status: string;
  likes_allowed: string;
  like_count: number;
  endpoints?: NavigationEndpoint[];
  
  // TODO: Add Like and Dislike endpoints

  constructor(data: RawNode) {
    super();

    this.target = {
      video_id: data.target.videoId
    };

    this.like_status = data.likeStatus;
    this.likes_allowed = data.likesAllowed;
    this.like_count = data.likeCount;

    if (Reflect.has(data, 'serviceEndpoints')) {
      this.endpoints = data.serviceEndpoints.map((endpoint: RawNode) => new NavigationEndpoint(endpoint));
    }
  }
}