import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ContentMetadataView from './ContentMetadataView.ts';
import ContentPreviewImageView from './ContentPreviewImageView.ts';
import DecoratedAvatarView from './DecoratedAvatarView.ts';
import DynamicTextView from './DynamicTextView.ts';
import FlexibleActionsView from './FlexibleActionsView.ts';
import DescriptionPreviewView from './DescriptionPreviewView.ts';
import AttributionView from './AttributionView.ts';
import ImageBannerView from './ImageBannerView.ts';

export default class PageHeaderView extends YTNode {
  static type = 'PageHeaderView';

  title: DynamicTextView | null;
  image: ContentPreviewImageView | DecoratedAvatarView | null;
  animated_image: ContentPreviewImageView | null;
  hero_image: ContentPreviewImageView | null;
  metadata: ContentMetadataView | null;
  actions: FlexibleActionsView | null;
  description: DescriptionPreviewView | null;
  attributation: AttributionView | null;
  banner: ImageBannerView | null;

  constructor(data: RawNode) {
    super();
    this.title = Parser.parseItem(data.title, DynamicTextView);
    this.image = Parser.parseItem(data.image, [ ContentPreviewImageView, DecoratedAvatarView ]);
    this.animated_image = Parser.parseItem(data.animatedImage, ContentPreviewImageView);
    this.hero_image = Parser.parseItem(data.heroImage, ContentPreviewImageView);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
    this.actions = Parser.parseItem(data.actions, FlexibleActionsView);
    this.description = Parser.parseItem(data.description, DescriptionPreviewView);
    this.attributation = Parser.parseItem(data.attributation, AttributionView);
    this.banner = Parser.parseItem(data.banner, ImageBannerView);
  }
}