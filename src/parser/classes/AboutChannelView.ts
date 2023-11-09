import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ChannelExternalLinkView from './ChannelExternalLinkView.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class AboutChannelView extends YTNode {
  static type = 'AboutChannelView';

  description?: string;
  description_label?: Text;
  country?: string;
  custom_links_label?: Text;
  subscriber_count?: string;
  view_count?: string;
  joined_date?: Text;
  canonical_channel_url?: string;
  channel_id?: string;
  additional_info_label?: Text;
  custom_url_on_tap?: NavigationEndpoint;
  video_count?: string;
  sign_in_for_business_email?: Text;
  links: ObservedArray<ChannelExternalLinkView>;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'description')) {
      this.description = data.description;
    }

    if (Reflect.has(data, 'descriptionLabel')) {
      this.description_label = Text.fromAttributed(data.descriptionLabel);
    }

    if (Reflect.has(data, 'country')) {
      this.country = data.country;
    }

    if (Reflect.has(data, 'customLinksLabel')) {
      this.custom_links_label = Text.fromAttributed(data.customLinksLabel);
    }

    if (Reflect.has(data, 'subscriberCountText')) {
      this.subscriber_count = data.subscriberCountText;
    }

    if (Reflect.has(data, 'viewCountText')) {
      this.view_count = data.viewCountText;
    }

    if (Reflect.has(data, 'joinedDateText')) {
      this.joined_date = Text.fromAttributed(data.joinedDateText);
    }

    if (Reflect.has(data, 'canonicalChannelUrl')) {
      this.canonical_channel_url = data.canonicalChannelUrl;
    }

    if (Reflect.has(data, 'channelId')) {
      this.channel_id = data.channelId;
    }

    if (Reflect.has(data, 'additionalInfoLabel')) {
      this.additional_info_label = Text.fromAttributed(data.additionalInfoLabel);
    }

    if (Reflect.has(data, 'customUrlOnTap')) {
      this.custom_url_on_tap = new NavigationEndpoint(data.customUrlOnTap);
    }

    if (Reflect.has(data, 'videoCountText')) {
      this.video_count = data.videoCountText;
    }

    if (Reflect.has(data, 'signInForBusinessEmail')) {
      this.sign_in_for_business_email = Text.fromAttributed(data.signInForBusinessEmail);
    }

    if (Reflect.has(data, 'links')) {
      this.links = Parser.parseArray(data.links, ChannelExternalLinkView);
    } else {
      this.links = [] as unknown as ObservedArray<ChannelExternalLinkView>;
    }
  }
}