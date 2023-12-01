import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import AboutChannelView from './AboutChannelView.ts';
import Button from './Button.ts';

export default class AboutChannel extends YTNode {
  static type = 'AboutChannel';

  metadata: AboutChannelView | null;
  share_channel: Button | null;

  constructor(data: RawNode) {
    super();

    this.metadata = Parser.parseItem(data.metadata, AboutChannelView);
    this.share_channel = Parser.parseItem(data.shareChannel, Button);
  }
}