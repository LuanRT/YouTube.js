import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import SecondarySearchContainer from './SecondarySearchContainer.js';
import RichGrid from './RichGrid.js';
import SectionList from './SectionList.js';

export default class TwoColumnSearchResults extends YTNode {
  static type = 'TwoColumnSearchResults';

  public header: YTNode | null;
  public primary_contents: RichGrid | SectionList | null;
  public secondary_contents: SecondarySearchContainer | null;
  public target_id?: string;
  
  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);
    this.primary_contents = Parser.parseItem(data.primaryContents, [ RichGrid, SectionList ]);
    this.secondary_contents = Parser.parseItem(data.secondaryContents, [ SecondarySearchContainer ]);
    
    if ('targetId' in data) {
      this.target_id = data.targetId;
    }
  }
}