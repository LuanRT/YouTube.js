import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class SectionHeaderView extends YTNode {
  static type = 'SectionHeaderView';
  
  public headline: Text;
  
  constructor(data: RawNode) {
    super();
    this.headline = Text.fromAttributed(data.headline);
  }
}