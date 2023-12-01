import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class PlayerAnnotationsExpanded extends YTNode {
  static type = 'PlayerAnnotationsExpanded';

  featured_channel?: {
    start_time_ms: number;
    end_time_ms: number;
    watermark: Thumbnail[];
    channel_name: string;
    endpoint: NavigationEndpoint;
    subscribe_button: YTNode | null;
  };

  allow_swipe_dismiss: boolean;
  annotation_id: string;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'featuredChannel')) {
      this.featured_channel = {
        start_time_ms: data.featuredChannel.startTimeMs,
        end_time_ms: data.featuredChannel.endTimeMs,
        watermark: Thumbnail.fromResponse(data.featuredChannel.watermark),
        channel_name: data.featuredChannel.channelName,
        endpoint: new NavigationEndpoint(data.featuredChannel.navigationEndpoint),
        subscribe_button: Parser.parseItem(data.featuredChannel.subscribeButton)
      };
    }

    this.allow_swipe_dismiss = data.allowSwipeDismiss;
    this.annotation_id = data.annotationId;
  }
}