import { YTNode } from '../../../helpers.ts';
import { Parser, type RawNode } from '../../../index.ts';
import LiveChatSponsorshipsHeader from './LiveChatSponsorshipsHeader.ts';

export default class LiveChatSponsorshipsGiftPurchaseAnnouncement extends YTNode {
  static type = 'LiveChatSponsorshipsGiftPurchaseAnnouncement';

  id: string;
  timestamp_usec: string;
  author_external_channel_id: string;
  header: LiveChatSponsorshipsHeader | null;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp_usec = data.timestampUsec;
    this.author_external_channel_id = data.authorExternalChannelId;
    this.header = Parser.parseItem(data.header, LiveChatSponsorshipsHeader);
  }
}