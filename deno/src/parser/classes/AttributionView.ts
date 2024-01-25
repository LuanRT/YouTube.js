import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

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