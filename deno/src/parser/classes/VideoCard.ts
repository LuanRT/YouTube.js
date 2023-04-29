import type { RawNode } from '../index.ts';
import Video from './Video.ts';

export default class VideoCard extends Video {
  static type = 'VideoCard';

  constructor(data: RawNode) {
    super(data);
  }
}