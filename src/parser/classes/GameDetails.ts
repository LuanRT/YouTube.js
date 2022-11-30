import { YTNode } from '../helpers';

import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

class GameDetails extends YTNode {
  static type = 'GameDetails';

  title: Text;
  box_art: Thumbnail[];
  box_art_overlay_text: Text;
  endpoint: NavigationEndpoint;
  is_official_box_art: boolean;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.box_art = Thumbnail.fromResponse(data.boxArt);
    this.box_art_overlay_text = new Text(data.boxArtOverlayText);
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.is_official_box_art = data.isOfficialBoxArt;
  }
}

export default GameDetails;