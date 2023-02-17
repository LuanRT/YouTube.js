import Video from './Video.ts';

class VideoCard extends Video {
  static type = 'VideoCard';

  constructor(data: any) {
    super(data);
  }
}

export default VideoCard;