import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ContentMetadataView from './ContentMetadataView.ts';
import ContentPreviewImageView from './ContentPreviewImageView.ts';
import DynamicTextView from './DynamicTextView.ts';
import FlexibleActionsView from './FlexibleActionsView.ts';

export default class PageHeaderView extends YTNode {
  static type = 'PageHeaderView';

  title: DynamicTextView | null;
  image: ContentPreviewImageView | null;
  metadata: ContentMetadataView | null;
  actions: FlexibleActionsView | null;

  constructor(data: RawNode) {
    super();
    this.title = Parser.parseItem(data.title, DynamicTextView);
    this.image = Parser.parseItem(data.image, ContentPreviewImageView);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
    this.actions = Parser.parseItem(data.actions, FlexibleActionsView);
  }
}