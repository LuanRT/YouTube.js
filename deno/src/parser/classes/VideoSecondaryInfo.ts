import Parser from '../index.ts';
import Text from './misc/Text.ts';
import Button from './Button.ts';
import VideoOwner from './VideoOwner.ts';
import SubscribeButton from './SubscribeButton.ts';
import MetadataRowContainer from './MetadataRowContainer.ts';
import { YTNode } from '../helpers.ts';

class VideoSecondaryInfo extends YTNode {
  static type = 'VideoSecondaryInfo';

  owner: VideoOwner | null;// TODO: VideoOwner?
  description: Text;
  subscribe_button;
  metadata: MetadataRowContainer | null;
  show_more_text: string;
  show_less_text: string;
  default_expanded: string;
  description_collapsed_lines: string;

  constructor(data: any) {
    super();
    this.owner = Parser.parseItem<VideoOwner>(data.owner);
    this.description = new Text(data.description);
    this.subscribe_button = Parser.parseItem<SubscribeButton | Button>(data.subscribeButton, [ SubscribeButton, Button ]);
    this.metadata = Parser.parseItem<MetadataRowContainer>(data.metadataRowContainer, MetadataRowContainer);
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
}

export default VideoSecondaryInfo;