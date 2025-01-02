import { YTNode } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import CommentsEntryPoint from './CommentsEntryPoint.js';

export default class VideoDescriptionCommentsSection extends YTNode {
  static type = 'VideoDescriptionCommentsSection';

  content: CommentsEntryPoint | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, CommentsEntryPoint);
  }
}