import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import ButtonView from './ButtonView.ts';

export default class VideoDescriptionYouchatSectionView extends YTNode {
  static type = 'VideoDescriptionYouchatSectionView';

  public section_title?: Text;
  public sub_header_text?: Text;
  public primary_button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    if ('sectionTitle' in data) {
      this.section_title = Text.fromAttributed(data.sectionTitle);
    }

    if ('subHeaderText' in data) {
      this.sub_header_text = Text.fromAttributed(data.subHeaderText);
    }

    this.primary_button = Parser.parseItem(data.primaryButton, ButtonView);
  }
}