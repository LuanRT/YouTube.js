import { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';

export default class HowThisWasMadeSectionView extends YTNode {
  static type = 'HowThisWasMadeSectionView';

  public section_title?: Text;
  public body_text?: Text;
  public body_header?: Text;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'sectionText'))
      this.section_title = Text.fromAttributed(data.sectionText);
    if (Reflect.has(data, 'bodyText'))
      this.body_text = Text.fromAttributed(data.bodyText);
    if (Reflect.has(data, 'bodyHeader'))
      this.body_header = Text.fromAttributed(data.bodyHeader);
  }
}