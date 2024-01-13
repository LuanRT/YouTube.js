import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class AttributionView extends YTNode {
  static type = 'AttributionView';

  text: Text;
  suffix: Text;

  constructor(data: RawNode) {
    super();

    this.text = Text.fromAttributed(data.text);
    this.suffix = Text.fromAttributed(data.suffix);
  }
}