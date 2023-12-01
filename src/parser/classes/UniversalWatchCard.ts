import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class UniversalWatchCard extends YTNode {
  static type = 'UniversalWatchCard';

  header: YTNode;
  call_to_action: YTNode;
  sections: ObservedArray<YTNode>;
  collapsed_label?: Text;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);
    this.call_to_action = Parser.parseItem(data.callToAction);
    this.sections = Parser.parseArray(data.sections);
    if (Reflect.has(data, 'collapsedLabel')) {
      this.collapsed_label = new Text(data.collapsedLabel);
    }
  }
}