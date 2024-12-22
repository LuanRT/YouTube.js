import { YTNode } from '../../../helpers.js';
import { Parser, type RawNode } from '../../../index.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';

export default class LiveChatTickerPaidStickerItem extends YTNode {
  static type = 'LiveChatTickerPaidStickerItem';

  id: string;
  author_external_channel_id: string;
  author_photo: Thumbnail[];
  start_background_color: number;
  end_background_color: number;
  duration_sec: number;
  full_duration_sec: number;
  show_item: YTNode;
  show_item_endpoint: NavigationEndpoint;
  ticker_thumbnails: {
    thumbnails: Thumbnail[],
    label?: string,
  }[];

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.author_external_channel_id = data.authorExternalChannelId;
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.start_background_color = data.startBackgroundColor;
    this.end_background_color = data.endBackgroundColor;
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = Parser.parseItem(data.showItemEndpoint?.showLiveChatItemEndpoint?.renderer);
    this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);

    this.ticker_thumbnails = data.tickerThumbnails.map((item: any) => ({
      thumbnails: Thumbnail.fromResponse(item),
      label: item?.accessibility?.accessibilityData?.label
    }));
  }
}