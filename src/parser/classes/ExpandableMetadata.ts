import Parser from '..';

import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

import Button from './Button';
import HorizontalCardList from './HorizontalCardList';

import { YTNode } from '../helpers';

class ExpandableMetadata extends YTNode {
  static type = 'ExpandableMetadata';

  header: {
    collapsed_title: Text;
    collapsed_thumbnail: Thumbnail[];
    collapsed_label: Text;
    expanded_title: Text;
  };

  expanded_content: HorizontalCardList | null;
  expand_button: Button | null;
  collapse_button: Button | null;

  constructor(data: any) {
    super();

    this.header = {
      collapsed_title: new Text(data.header.collapsedTitle),
      collapsed_thumbnail: Thumbnail.fromResponse(data.header.collapsedThumbnail),
      collapsed_label: new Text(data.header.collapsedLabel),
      expanded_title: new Text(data.header.expandedTitle)
    };

    this.expanded_content = Parser.parseItem<HorizontalCardList>(data.expandedContent);
    this.expand_button = Parser.parseItem<Button>(data.expandButton);
    this.collapse_button = Parser.parseItem<Button>(data.collapseButton);
  }
}

export default ExpandableMetadata;