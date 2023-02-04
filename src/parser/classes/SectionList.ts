import Parser from '../index';
import { YTNode } from '../helpers';

class SectionList extends YTNode {
  static type = 'SectionList';

  target_id?: string;
  contents;
  continuation?: string;
  header?;
  sub_menu?;

  constructor(data: any) {
    super();
    if (data.targetId) {
      this.target_id = data.targetId;
    }

    // TODO: this should be Parser#parseArray
    this.contents = Parser.parseArray(data.contents);

    if (data.continuations) {
      if (data.continuations[0].nextContinuationData) {
        this.continuation = data.continuations[0].nextContinuationData.continuation;
      } else if (data.continuations[0].reloadContinuationData) {
        this.continuation = data.continuations[0].reloadContinuationData.continuation;
      }
    }

    if (data.header) {
      this.header = Parser.parse(data.header);
    }

    if (data.subMenu) {
      this.sub_menu = Parser.parseItem(data.subMenu);
    }
  }
}

export default SectionList;