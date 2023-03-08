import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

class PlayerLegacyDesktopYpcOffer extends YTNode {
  static type = 'PlayerLegacyDesktopYpcOffer';

  title: string;
  thumbnail: string;
  offer_description: string;
  offer_id: string;

  constructor(data: RawNode) {
    super();
    this.title = data.itemTitle;
    this.thumbnail = data.itemThumbnail;
    this.offer_description = data.offerDescription;
    this.offer_id = data.offerId;
  }
}

export default PlayerLegacyDesktopYpcOffer;