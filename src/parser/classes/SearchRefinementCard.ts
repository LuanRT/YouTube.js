import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

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