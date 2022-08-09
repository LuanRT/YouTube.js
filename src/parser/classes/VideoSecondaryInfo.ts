import Parser from '../index';
import Text from './misc/Text';

import { YTNode } from '../helpers';
import MetadataRowContainer from './MetadataRowContainer';

class VideoSecondaryInfo extends YTNode {
  static type = 'VideoSecondaryInfo';
  
  owner; // TODO: VideoOwner?
  description: Text;
  subscribe_button;
  metadata: MetadataRowContainer | null;
  show_more_text: string;
  show_less_text: string;
  default_expanded: string;
  description_collapsed_lines: string;
  
  constructor(data: any) {
    super();
    this.owner = Parser.parse(data.owner);
    this.description = new Text(data.description);
    this.subscribe_button = Parser.parse(data.subscribeButton);
    this.metadata = Parser.parseItem<MetadataRowContainer>(data.metadataRowContainer, MetadataRowContainer);
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
}

export default VideoSecondaryInfo;