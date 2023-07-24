import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ContentPreviewImageView from './ContentPreviewImageView.ts';
import DynamicTextView from './DynamicTextView.ts';

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