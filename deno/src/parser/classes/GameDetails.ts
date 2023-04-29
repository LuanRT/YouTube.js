import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class GameDetails extends YTNode {
  static type = 'GameDetails';

  title: Text;
  box_art: Thumbnail[];
  box_art_overlay_text: Text;
  endpoint: NavigationEndpoint;
  is_official_box_art: boolean;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.box_art = Thumbnail.fromResponse(data.boxArt);
    this.box_art_overlay_text = new Text(data.boxArtOverlayText);
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.is_official_box_art = !!data.isOfficialBoxArt;
  }
}