import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class PdgCommentChip extends YTNode {
  static type = 'PdgCommentChip';

  text: Text;
  color_pallette: {
    background_color: string;
    foreground_title_color: string;
  };
  icon_type: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.chipText);
    this.color_pallette = {
      background_color: data.chipColorPalette?.backgroundColor,
      foreground_title_color: data.chipColorPalette?.foregroundTitleColor
    };
    this.icon_type = data.chipIcon?.iconType;
  }
}

export default PdgCommentChip;