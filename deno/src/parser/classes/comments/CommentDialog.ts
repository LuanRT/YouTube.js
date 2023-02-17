import Parser from '../../index.ts';
import Text from '../misc/Text.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import type Button from '../Button.ts';
import type EmojiPicker from './EmojiPicker.ts';
import { YTNode } from '../../helpers.ts';

class CommentDialog extends YTNode {
  static type = 'CommentDialog';

  editable_text: Text;
  author_thumbnail: Thumbnail[];
  submit_button: Button | null;
  cancel_button: Button | null;
  placeholder: Text;
  emoji_button: Button | null;
  emoji_picker: any | null;

  constructor(data: any) {
    super();
    this.editable_text = new Text(data.editableText);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.submit_button = Parser.parseItem<Button>(data.submitButton);
    this.cancel_button = Parser.parseItem<Button>(data.cancelButton);
    this.placeholder = new Text(data.placeholderText);
    this.emoji_button = Parser.parseItem<Button>(data.emojiButton);
    this.emoji_picker = Parser.parseItem<EmojiPicker>(data.emojiPicker);
  }
}

export default CommentDialog;