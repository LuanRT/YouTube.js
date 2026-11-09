import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

import Text from './misc/Text.js';
import Button from './Button.js';
import Thumbnail from './misc/Thumbnail.js';

export default class LiveStreamOfflineSlate extends YTNode {
  static type = 'LiveStreamOfflineSlate';

  public main_text: Text;
  public subtitle_text: Text;
  public thumbnail: Thumbnail[];
  public action_buttons: ObservedArray<Button>;

  constructor(data: RawNode) {
    super();
    this.main_text = new Text(data.mainText);
    this.subtitle_text = new Text(data.subtitleText);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.action_buttons = Parser.parseArray(data.actionButtons, Button);
  }
}