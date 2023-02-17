import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class LikeButton extends YTNode {
  static type = 'LikeButton';

  target: {
    video_id: string;
  };

  like_status: string;
  likes_allowed: string;
  endpoints?: NavigationEndpoint[];

  constructor(data: any) {
    super();

    this.target = {
      video_id: data.target.videoId
    };

    this.like_status = data.likeStatus;
    this.likes_allowed = data.likesAllowed;

    if (data.serviceEndpoints) {
      this.endpoints = data.serviceEndpoints?.map((endpoint: any) => new NavigationEndpoint(endpoint));
    }
  }
}

export default LikeButton;