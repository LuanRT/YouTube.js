import Video from './Video';

class VideoCard extends Video {
  static type = 'VideoCard';

  constructor(data: any) {
    super(data);
  }
}

export default VideoCard;