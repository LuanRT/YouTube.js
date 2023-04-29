import NavigationEndpoint from './NavigationEndpoint.ts';
import Thumbnail from './misc/Thumbnail.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class SearchRefinementCard extends YTNode {
  static type = 'SearchRefinementCard';

  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint;
  query: string;

  constructor(data: RawNode) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.searchEndpoint);
    this.query = new Text(data.query).toString();
  }
}