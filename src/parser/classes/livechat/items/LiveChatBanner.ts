import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import { Parser } from '../../../index.js';
import LiveChatBannerHeader from './LiveChatBannerHeader.js';

export default class LiveChatBanner extends YTNode {
  static type = 'LiveChatBanner';

  header: LiveChatBannerHeader | null;
  contents: YTNode;
  action_id: string;
  viewer_is_creator?: boolean;
  target_id: string;
  is_stackable: boolean;
  background_type?: string;
  banner_type: string;
  banner_properties_is_ephemeral?: boolean;
  banner_properties_auto_collapse_delay_seconds?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, LiveChatBannerHeader);
    this.contents = Parser.parseItem(data.contents);
    this.action_id = data.actionId;

    if (Reflect.has(data, 'viewerIsCreator')) {
      this.viewer_is_creator = data.viewerIsCreator;
    }

    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;

    if (Reflect.has(data, 'backgroundType')) {
      this.background_type = data.backgroundType;
    }

    this.banner_type = data.bannerType;

    if (
      Reflect.has(data, 'bannerProperties') &&
      Reflect.has(data.bannerProperties, 'isEphemeral')
    ) {
      this.banner_properties_is_ephemeral = Boolean(data.bannerProperties.isEphemeral);
    }

    if (
      Reflect.has(data, 'bannerProperties') &&
      Reflect.has(data.bannerProperties, 'autoCollapseDelay') &&
      Reflect.has(data.bannerProperties.autoCollapseDelay, 'seconds')
    ) {
      this.banner_properties_auto_collapse_delay_seconds = data.bannerProperties.autoCollapseDelay.seconds;
    }
  }
}