import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class OverlayMessage extends YTNode {
  static type = 'OverlayMessage';

  title: Text;
  subtitle: Text;
  style: string;
  label: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.style = data.style;
    this.label = new Text(data.label);
  }
}