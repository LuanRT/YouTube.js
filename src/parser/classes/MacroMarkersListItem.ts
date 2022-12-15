import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class MacroMarkersListItem extends YTNode {
  static type = 'MacroMarkersListItem';

  title: Text;
  time_description: Text;
  thumbnail: Thumbnail[];
  on_tap_endpoint: NavigationEndpoint;
  layout: string;
  is_highlighted: boolean;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.time_description = new Text(data.timeDescription);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
    this.layout = data.layout;
    this.is_highlighted = data.isHighlighted;
  }
}

export default MacroMarkersListItem;