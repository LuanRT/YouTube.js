import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

export default class DidYouMean extends YTNode {
  static type = 'DidYouMean';

  text: string;
  corrected_query: Text;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.didYouMean).toString();
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.correctedQueryEndpoint);
  }
}