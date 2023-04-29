import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MacroMarkersListItem extends YTNode {
  static type = 'MacroMarkersListItem';

  title: Text;
  time_description: Text;
  thumbnail: Thumbnail[];
  on_tap_endpoint: NavigationEndpoint;
  layout: string;
  is_highlighted: boolean;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.time_description = new Text(data.timeDescription);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
    this.layout = data.layout;
    this.is_highlighted = !!data.isHighlighted;
  }
}