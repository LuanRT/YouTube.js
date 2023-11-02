import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ContentPreviewImageView from './ContentPreviewImageView.js';
import DynamicTextView from './DynamicTextView.js';

export default class PageHeaderView extends YTNode {
  static type = 'PageHeaderView';

  image: ContentPreviewImageView | null;
  title: DynamicTextView | null;

  constructor(data: RawNode) {
    super();
    this.image = Parser.parseItem(data.image, ContentPreviewImageView);
    this.title = Parser.parseItem(data.title, DynamicTextView);
  }
}