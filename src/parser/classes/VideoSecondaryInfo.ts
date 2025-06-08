import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import VideoOwner from './VideoOwner.js';
import SubscribeButton from './SubscribeButton.js';
import MetadataRowContainer from './MetadataRowContainer.js';
import { YTNode } from '../helpers.js';

export default class VideoSecondaryInfo extends YTNode {
  static type = 'VideoSecondaryInfo';

  public owner: VideoOwner | null;
  public description: Text;
  public description_placeholder?: Text;
  public subscribe_button: SubscribeButton | Button | null;
  public metadata: MetadataRowContainer | null;
  public show_more_text: Text;
  public show_less_text: Text;
  public default_expanded: string;
  public description_collapsed_lines: string;

  constructor(data: RawNode) {
    super();
    this.owner = Parser.parseItem(data.owner, VideoOwner);
    this.description = new Text(data.description);

    if ('attributedDescription' in data)
      this.description = Text.fromAttributed(data.attributedDescription);
    
    if ('descriptionPlaceholder' in data)
      this.description_placeholder = new Text(data.descriptionPlaceholder);

    this.subscribe_button = Parser.parseItem(data.subscribeButton, [ SubscribeButton, Button ]);
    this.metadata = Parser.parseItem(data.metadataRowContainer, MetadataRowContainer);
    this.show_more_text = new Text(data.showMoreText);
    this.show_less_text = new Text(data.showLessText);
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
}