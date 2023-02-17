import Parser from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode, SuperParsedResult } from '../helpers.ts';

class PlayerAnnotationsExpanded extends YTNode {
  static type = 'PlayerAnnotationsExpanded';

  featured_channel: {
    start_time_ms: number;
    end_time_ms: number;
    watermark: Thumbnail[];
    channel_name: string;
    endpoint: NavigationEndpoint;
    subscribe_button: SuperParsedResult<YTNode>;
  };

  allow_swipe_dismiss: boolean;
  annotation_id: string;

  constructor(data: any) {
    super();

    this.featured_channel = {
      start_time_ms: data.featuredChannel.startTimeMs,
      end_time_ms: data.featuredChannel.endTimeMs,
      watermark: Thumbnail.fromResponse(data.featuredChannel.watermark),
      channel_name: data.featuredChannel.channelName,
      endpoint: new NavigationEndpoint(data.featuredChannel.navigationEndpoint),
      subscribe_button: Parser.parse(data.featuredChannel.subscribeButton)
    };

    this.allow_swipe_dismiss = data.allowSwipeDismiss;
    this.annotation_id = data.annotationId;
  }
}

export default PlayerAnnotationsExpanded;