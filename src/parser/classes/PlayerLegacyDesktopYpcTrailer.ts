import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import YpcTrailer from './YpcTrailer.js';

export default class PlayerLegacyDesktopYpcTrailer extends YTNode {
  static type = 'PlayerLegacyDesktopYpcTrailer';

  video_id: string;
  title: string;
  thumbnail: string;
  offer_headline: string;
  offer_description: string;
  offer_id: string;
  offer_button_text: string;
  video_message: string;
  trailer: YpcTrailer | null;

  constructor(data: RawNode) {
    super();
    this.video_id = data.trailerVideoId;
    this.title = data.itemTitle;
    this.thumbnail = data.itemThumbnail;
    this.offer_headline = data.offerHeadline;
    this.offer_description = data.offerDescription;
    this.offer_id = data.offerId;
    this.offer_button_text = data.offerButtonText;
    this.video_message = data.fullVideoMessage;
    this.trailer = Parser.parseItem(data.ypcTrailer, YpcTrailer);
  }
}