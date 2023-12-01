import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';

import type { RawNode } from '../types/index.ts';

export default class ClipCreationTextInput extends YTNode {
  static type = 'ClipCreationTextInput';

  placeholder_text: Text;
  max_character_limit: number;

  constructor(data: RawNode) {
    super();
    this.placeholder_text = new Text(data.placeholderText);
    this.max_character_limit = data.maxCharacterLimit;
  }
}