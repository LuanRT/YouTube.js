import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ContentMetadataView from './ContentMetadataView.js';
import ContentPreviewImageView from './ContentPreviewImageView.js';
import DecoratedAvatarView from './DecoratedAvatarView.js';
import DynamicTextView from './DynamicTextView.js';
import FlexibleActionsView from './FlexibleActionsView.js';
import DescriptionPreviewView from './DescriptionPreviewView.js';
import AttributionView from './AttributionView.js';

export default class PageHeaderView extends YTNode {
  static type = 'PageHeaderView';

  title: DynamicTextView | null;
  image: ContentPreviewImageView | DecoratedAvatarView | null;
  metadata: ContentMetadataView | null;
  actions: FlexibleActionsView | null;
  description: DescriptionPreviewView | null;
  attributation: AttributionView | null;

  constructor(data: RawNode) {
    super();
    this.title = Parser.parseItem(data.title, DynamicTextView);
    this.image = Parser.parseItem(data.image, [ ContentPreviewImageView, DecoratedAvatarView ]);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
    this.actions = Parser.parseItem(data.actions, FlexibleActionsView);
    this.description = Parser.parseItem(data.description, DescriptionPreviewView);
    this.attributation = Parser.parseItem(data.attributation, AttributionView);
  }
}