import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import SectionHeaderView from './SectionHeaderView.ts';

export default class HypeFanCreditsSectionView extends YTNode{
  static type = 'HypeFanCreditsSectionView';
  
  public header: SectionHeaderView | null;
  
  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, SectionHeaderView);
  }
}