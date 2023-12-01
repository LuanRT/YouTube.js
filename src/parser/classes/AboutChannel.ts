import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import AboutChannelView from './AboutChannelView.js';
import Button from './Button.js';

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