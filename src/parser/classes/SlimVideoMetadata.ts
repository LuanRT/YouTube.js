import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class SlimVideoMetadata extends YTNode {
  static type = 'SlimVideoMetadata';

  title: Text;
  collapsed_subtitle: Text;
  expanded_subtitle: Text;
  owner: YTNode;
  description: Text;
  video_id: string;
  date: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.collapsed_subtitle = new Text(data.collapsedSubtitle);
    this.expanded_subtitle = new Text(data.expandedSubtitle);
    this.owner = Parser.parseItem(data.owner);
    this.description = new Text(data.description);
    this.video_id = data.videoId;
    this.date = new Text(data.dateText);
  }
}