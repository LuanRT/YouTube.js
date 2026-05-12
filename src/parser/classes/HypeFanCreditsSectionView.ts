import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import SectionHeaderView from './SectionHeaderView.js';

export default class HypeFanCreditsSectionView extends YTNode{
  static type = 'HypeFanCreditsSectionView';
  
  public header: SectionHeaderView | null;
  
  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, SectionHeaderView);
  }
}