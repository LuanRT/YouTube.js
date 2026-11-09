import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class VideoDescriptionGamingSection extends YTNode {
  static type = 'VideoDescriptionGamingSection';

  public media_lockups: ObservedArray<YTNode>;
  public section_title: Text;
  public topic_link: YTNode; // @TODO: Find out what type this is.

  constructor(data: RawNode) {
    super();
    this.media_lockups = Parser.parseArray(data.mediaLockups);
    this.section_title = new Text(data.sectionTitle);
    this.topic_link = Parser.parseItem(data.topicLink);
  }
}