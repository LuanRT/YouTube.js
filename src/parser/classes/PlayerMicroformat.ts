import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class PlayerMicroformat extends YTNode {
  static type = 'PlayerMicroformat';

  title: Text;
  description: Text;
  thumbnails;

  embed?: {
    iframe_url: string;
    flash_url: string;
    flash_secure_url: string;
    // TODO: check these
    width: any;
    height: any;
  };

  length_seconds: number;

  channel: {
    id: string;
    name: string;
    url: string;
  };

  is_family_safe: boolean;
  is_unlisted: boolean;
  has_ypc_metadata: boolean;
  view_count: number;
  category: string;
  publish_date: string;
  upload_date: string;
  available_countries: string[];
  start_timestamp: Date | null;
  end_timestamp: Date | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);

    if (Reflect.has(data, 'embed')) {
      this.embed = {
        iframe_url: data.embed.iframeUrl,
        flash_url: data.embed.flashUrl,
        flash_secure_url: data.embed.flashSecureUrl,
        width: data.embed.width,
        height: data.embed.height
      };
    }

    this.length_seconds = parseInt(data.lengthSeconds);

    this.channel = {
      id: data.externalChannelId,
      name: data.ownerChannelName,
      url: data.ownerProfileUrl
    };

    this.is_family_safe = !!data.isFamilySafe;
    this.is_unlisted = !!data.isUnlisted;
    this.has_ypc_metadata = !!data.hasYpcMetadata;
    this.view_count = parseInt(data.viewCount);
    this.category = data.category;
    this.publish_date = data.publishDate;
    this.upload_date = data.uploadDate;
    this.available_countries = data.availableCountries;
    this.start_timestamp = data.liveBroadcastDetails?.startTimestamp ? new Date(data.liveBroadcastDetails.startTimestamp) : null;
    this.end_timestamp = data.liveBroadcastDetails?.endTimestamp ? new Date(data.liveBroadcastDetails.endTimestamp) : null;
  }
}