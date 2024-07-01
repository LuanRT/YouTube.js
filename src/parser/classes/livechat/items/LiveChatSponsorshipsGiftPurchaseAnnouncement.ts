import { YTNode } from "../../../helpers.js";
import type { RawNode } from "../../../index.js";
import Author from "../../misc/Author.js";
import Text from "../../misc/Text.js";

export default class LiveChatSponsorshipsGiftPurchaseAnnouncement extends YTNode {
  static type = "LiveChatSponsorshipsGiftPurchaseAnnouncement";

  id: string;
  primary_text: Text;
  timestamp: number;
  author: Author;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.author = new Author(
      data.header?.liveChatSponsorshipsHeaderRenderer?.authorName,
      data.header?.liveChatSponsorshipsHeaderRenderer?.authorBadges,
      data.header?.liveChatSponsorshipsHeaderRenderer?.authorPhoto,
      data.authorExternalChannelId
    );
    this.primary_text = new Text(data?.header?.liveChatSponsorshipsHeaderRenderer?.primaryText)
  }
}
