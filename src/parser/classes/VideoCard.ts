import Video from './Video.js';

class VideoCard extends Video {
  static type = 'VideoCard';

  constructor(data: any) {
    super(data);
  }
}

export default VideoCard;