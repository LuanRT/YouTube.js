import { type ObservedArray, YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import type { Thumbnail } from '../misc.js';
import Factoid from './Factoid.js';

export default class VideoDescriptionHeader extends YTNode {
  static type = 'VideoDescriptionHeader';

  channel: String;
  channel_id: String;
  channel_thumbnails: String[];
  factoids: ObservedArray<Factoid>;
  publish_date: String;
  title: String;
  views: String;

  constructor(data: RawNode) {
    super();
    this.title = data.title.runs.map(({ text }: { text: String }) => text).join('');
    this.channel = data.channel.simpleText;
    this.channel_id = data.channelNavigationEndpoint.browseEndpoint.browseId;
    this.channel_thumbnails = data.channelThumbnail.thumbnails.map((thumbnail: Thumbnail) => thumbnail.url);
    this.publish_date = data.publishDate.simpleText;
    this.views = data.views.simpleText;
    this.factoids = Parser.parseArray(data.factoid, Factoid);
  }
}
