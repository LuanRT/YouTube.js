import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import Text from "./misc/Text.js";

export default class HowThisWasMadeSectionView extends YTNode {
  static type = 'HowThisWasMadeSectionView';

  public section_title: Text;
  public body_text: Text;
  public body_header: Text;

  constructor(data: RawNode) {
    super();
    this.section_title = Text.fromAttributed(data.sectionText);
    this.body_text = Text.fromAttributed(data.bodyText);
    this.body_header = Text.fromAttributed(data.bodyHeader);
  }
}