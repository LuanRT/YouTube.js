import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import OverlayTwoPanel from './OverlayTwoPanel.js';

export default class OverlaySection extends YTNode {
  static type = 'OverlaySection';

  endpoint: NavigationEndpoint;
  overlay: OverlayTwoPanel | null;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.dismissalCommand);
    this.overlay = Parser.parseItem(data.overlay, OverlayTwoPanel);
  }
}