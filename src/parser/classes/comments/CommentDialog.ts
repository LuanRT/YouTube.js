import { Parser } from '../../index.js';
import Button from '../Button.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import EmojiPicker from './EmojiPicker.js';

import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class CommentDialog extends YTNode {
  static type = 'CommentDialog';

  editable_text: Text;
  author_thumbnail: Thumbnail[];
  submit_button: Button | null;
  cancel_button: Button | null;
  placeholder: Text;
  emoji_button: Button | null;
  emoji_picker: EmojiPicker | null;

  constructor(data: RawNode) {
    super();
    this.editable_text = new Text(data.editableText);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.submit_button = Parser.parseItem(data.submitButton, Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
    this.placeholder = new Text(data.placeholderText);
    this.emoji_button = Parser.parseItem(data.emojiButton, Button);
    this.emoji_picker = Parser.parseItem(data.emojiPicker, EmojiPicker);
  }
}