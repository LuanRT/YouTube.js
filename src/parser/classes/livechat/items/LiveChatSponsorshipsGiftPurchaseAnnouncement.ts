import { YTNode } from '../../../helpers.js';
import { Parser, type RawNode } from '../../../index.js';
import Author from '../../misc/Author.js';
import LiveChatSponsorshipsHeader from './LiveChatSponsorshipsHeader.js';

export default class LiveChatSponsorshipsGiftPurchaseAnnouncement extends YTNode {
  static type = 'LiveChatSponsorshipsGiftPurchaseAnnouncement';

  id: string;
  timestamp_usec: string;
  author: Author;
  header: LiveChatSponsorshipsHeader | null;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp_usec = data.timestampUsec;

    this.author = new Author(
      data.header.liveChatSponsorshipsHeaderRenderer.authorName,
      data.header.liveChatSponsorshipsHeaderRenderer.authorBadges,
      data.header.liveChatSponsorshipsHeaderRenderer.authorPhoto,
      data.authorExternalChannelId
    );

    this.header = Parser.parseItem(data.header, LiveChatSponsorshipsHeader);
  }
}