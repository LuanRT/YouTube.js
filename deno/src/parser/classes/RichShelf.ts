import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

export default class RichShelf extends YTNode {
  static type = 'RichShelf';

  title: Text;
  contents: ObservedArray<YTNode>;
  endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.contents = Parser.parseArray(data.contents);

    if (Reflect.has(data, 'endpoint')) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }
  }
}