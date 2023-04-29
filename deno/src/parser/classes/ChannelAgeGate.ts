import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import Button from './Button.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class ChannelAgeGate extends YTNode {
  static type = 'ChannelAgeGate';

  channel_title: string;
  avatar: Thumbnail[];
  header: Text;
  main_text: Text;
  sign_in_button: Button | null;
  secondary_text: Text;

  constructor(data: RawNode) {
    super();
    this.channel_title = data.channelTitle;
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.header = new Text(data.header);
    this.main_text = new Text(data.mainText);
    this.sign_in_button = Parser.parseItem(data.signInButton, Button);
    this.secondary_text = new Text(data.secondaryText);
  }
}