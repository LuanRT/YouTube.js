import Video from './Video';

export default class VideoCard extends Video {
  static type = 'VideoCard';

  constructor(data: any) {
    super(data);
  }
}