import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

import Text from './misc/Text.ts';
import Button from './Button.ts';
import Thumbnail from './misc/Thumbnail.ts';

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