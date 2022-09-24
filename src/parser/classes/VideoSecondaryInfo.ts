import Parser from '../index';
import Text from './misc/Text';
import Button from './Button';
import VideoOwner from './VideoOwner';
import SubscribeButton from './SubscribeButton';
import MetadataRowContainer from './MetadataRowContainer';
import { YTNode } from '../helpers';
import RichMetadataRow from './RichMetadataRow';

class VideoSecondaryInfo extends YTNode {
  static type = 'VideoSecondaryInfo';

  owner: VideoOwner | null;// TODO: VideoOwner?
  description: Text;
  subscribe_button;
  metadata: RichMetadataRow | null;
  show_more_text: string;
  show_less_text: string;
  default_expanded: string;
  description_collapsed_lines: string;

  constructor(data: any) {
    super();
    this.owner = Parser.parseItem<VideoOwner>(data.owner);
    this.description = new Text(data.description);
    this.subscribe_button = Parser.parseItem<SubscribeButton | Button>(data.subscribeButton, [ SubscribeButton, Button ]);
    // MetadataRowContainer is redundant, we want to target 'RichMetadataRow'
    this.metadata = Parser.parseItem<MetadataRowContainer>(data.metadataRowContainer, MetadataRowContainer)?.rows?.[0] ?? null;
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
}

export default VideoSecondaryInfo;