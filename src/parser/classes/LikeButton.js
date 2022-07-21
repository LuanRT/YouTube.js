import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class LikeButton extends YTNode {
  static type = 'LikeButton';

  constructor(data) {
    super();
    this.target = {
      video_id: data.target.videoId
    };

    this.like_status = data.likeStatus;
    this.likes_allowed = data.likesAllowed;

    if (data.serviceEndpoints) {
      this.endpoints = data.serviceEndpoints?.map((endpoint) => new NavigationEndpoint(endpoint));
    }
  }
}

export default LikeButton;