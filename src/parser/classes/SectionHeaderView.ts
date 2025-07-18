import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class SectionHeaderView extends YTNode {
  static type = 'SectionHeaderView';
  
  public headline: Text;
  
  constructor(data: RawNode) {
    super();
    this.headline = Text.fromAttributed(data.headline);
  }
}