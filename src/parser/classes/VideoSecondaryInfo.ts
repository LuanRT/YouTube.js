import Parser, { type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import VideoOwner from './VideoOwner.js';
import SubscribeButton from './SubscribeButton.js';
import MetadataRowContainer from './MetadataRowContainer.js';
import { YTNode } from '../helpers.js';

export default class VideoSecondaryInfo extends YTNode {
  static type = 'VideoSecondaryInfo';

  owner: VideoOwner | null;
  description: Text;
  subscribe_button: SubscribeButton | Button | null;
  metadata: MetadataRowContainer | null;
  show_more_text: string;
  show_less_text: string;
  default_expanded: string;
  description_collapsed_lines: string;

  constructor(data: RawNode) {
    super();
    this.owner = Parser.parseItem(data.owner, VideoOwner);
    this.description = new Text(data.description);

    if (Reflect.has(data, 'attributedDescription')) {
      this.description = Text.fromAttributed(data.attributedDescription);
    }

    this.subscribe_button = Parser.parseItem(data.subscribeButton, [ SubscribeButton, Button ]);
    this.metadata = Parser.parseItem(data.metadataRowContainer, MetadataRowContainer);
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
}