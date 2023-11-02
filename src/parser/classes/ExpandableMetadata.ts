import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import HorizontalCardList from './HorizontalCardList.js';
import HorizontalList from './HorizontalList.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ExpandableMetadata extends YTNode {
  static type = 'ExpandableMetadata';

  header?: {
    collapsed_title: Text;
    collapsed_thumbnail: Thumbnail[];
    collapsed_label: Text;
    expanded_title: Text;
  };

  expanded_content: HorizontalCardList | HorizontalList | null;
  expand_button: Button | null;
  collapse_button: Button | null;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'header')) {
      this.header = {
        collapsed_title: new Text(data.header.collapsedTitle),
        collapsed_thumbnail: Thumbnail.fromResponse(data.header.collapsedThumbnail),
        collapsed_label: new Text(data.header.collapsedLabel),
        expanded_title: new Text(data.header.expandedTitle)
      };
    }

    this.expanded_content = Parser.parseItem(data.expandedContent, [ HorizontalCardList, HorizontalList ]);
    this.expand_button = Parser.parseItem(data.expandButton, Button);
    this.collapse_button = Parser.parseItem(data.collapseButton, Button);
  }
}