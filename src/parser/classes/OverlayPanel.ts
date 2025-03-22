import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import OverlayPanelHeader from './OverlayPanelHeader.js';
import ScrollPane from './ScrollPane.js';

export default class OverlayPanel extends YTNode {
  static type = 'OverlayPanel';

  header: OverlayPanelHeader | null;
  content: ScrollPane | null;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, OverlayPanelHeader);
    this.content = Parser.parseItem(data.content, ScrollPane);
  }
}