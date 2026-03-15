import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import OverlayPanel from './OverlayPanel.js';
import Button from './Button.js';

export default class OverlayTwoPanel extends YTNode {
  static type = 'OverlayTwoPanel';

  action_panel: OverlayPanel | null;
  back_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.action_panel = Parser.parseItem(data.actionPanel, OverlayPanel);
    this.back_button = Parser.parseItem(data.backButton, Button);
  }
}