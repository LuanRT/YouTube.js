import { YTNode } from "../../../helpers.js";
import type { RawNode } from "../../../index.js";
import NavigationEndpoint from "../../NavigationEndpoint.js";
import Author from "../../misc/Author.js";
import Text from "../../misc/Text.js";

export default class LiveChatSponsorshipsGiftRedemptionAnnouncement extends YTNode {
  static type = "LiveChatSponsorshipsGiftRedemptionAnnouncement";

  id: string;
  message: Text;
  timestamp: number;
  author: Author;
  menu_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();

    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );
    this.message = new Text(data?.message)
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
  }
}
