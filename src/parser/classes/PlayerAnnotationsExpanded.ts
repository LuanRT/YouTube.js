import Parser from '../index';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode, SuperParsedResult } from '../helpers';

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