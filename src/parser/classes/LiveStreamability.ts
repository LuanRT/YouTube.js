import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import RendererContext from './misc/RendererContext.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import LiveStreamOfflineSlate from './LiveStreamOfflineSlate.js';

export default class LiveStreamability extends YTNode {
  static type = 'LiveStreamability';

  public video_id: string;
  public broadcast_id?: string;
  public stream_transition_endpoint?: NavigationEndpoint;
  public switch_streams_immediately?: boolean;
  public display_endscreen?: boolean;
  public poll_delay_ms?: string;
  public creator_redirect?: { hide_autoplay_toggle?: boolean; };
  public transition_timing?:
    | 'STREAM_TRANSITION_TIMING_UNSPECIFIED'
    | 'STREAM_TRANSITION_TIMING_AT_HEAD'
    | 'STREAM_TRANSITION_TIMING_IMMEDIATELY'
    | 'STREAM_TRANSITION_TIMING_AT_STREAM_END';
  public offline_slate: LiveStreamOfflineSlate | null;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.video_id = data.videoId;
    this.broadcast_id = data.broadcastId;
    this.transition_timing = data.transitionTiming;
    this.offline_slate = Parser.parseItem(data.offlineSlate, LiveStreamOfflineSlate);

    if ('pollDelayMs' in data) {
      this.poll_delay_ms = data.pollDelayMs;
    }

    if ('switchStreamsImmediately' in data) {
      this.switch_streams_immediately = data.switchStreamsImmediately;
    }

    if ('displayEndscreen' in data) {
      this.display_endscreen = data.displayEndscreen;
    }

    if ('streamTransitionEndpoint' in data) {
      this.stream_transition_endpoint = new NavigationEndpoint(data.streamTransitionEndpoint);
    }

    if ('creatorRedirect' in data) {
      this.creator_redirect = {
        hide_autoplay_toggle: data.creatorRedirect?.hideAutoplayToggle
      };
    }

    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}