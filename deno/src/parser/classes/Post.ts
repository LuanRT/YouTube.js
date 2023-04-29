import type { RawNode } from '../index.ts';
import BackstagePost from './BackstagePost.ts';

export default class Post extends BackstagePost {
  static type = 'Post';

  constructor(data: RawNode) {
    super(data);
  }
}