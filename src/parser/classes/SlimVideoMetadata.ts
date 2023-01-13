import Parser from '..';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class SlimVideoMetadata extends YTNode {
  static type = 'SlimVideoMetadata';

  title: Text;
  collapsed_subtitle: Text;
  expanded_subtitle: Text;
  owner: any;
  description: Text;
  video_id: string;
  date: Text;

  constructor(data: any) {
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

export default SlimVideoMetadata;