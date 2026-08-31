import type { Memo, ObservedArray, SuperParsedResult, YTNode } from '../helpers.js';
import type {
  ReloadContinuationItemsCommand, Continuation, GridContinuation,
  ItemSectionContinuation, LiveChatContinuation, MusicPlaylistShelfContinuation, MusicShelfContinuation,
  PlaylistPanelContinuation, SectionListContinuation, ContinuationCommand, ShowMiniplayerCommand, NavigateAction,
  IYoutubeApiInnertubeChallengePrompt
} from '../index.js';

import type PlayerCaptionsTracklist from '../classes/PlayerCaptionsTracklist.js';
import type CardCollection from '../classes/CardCollection.js';
import type Endscreen from '../classes/Endscreen.js';
import type AudioOnlyPlayability from '../classes/AudioOnlyPlayability.js';
import type Format from '../classes/misc/Format.js';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.js';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.js';
import type VideoDetails from '../classes/misc/VideoDetails.js';
import type Alert from '../classes/Alert.js';
import type AlertWithButton from '../classes/AlertWithButton.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded.js';
import type EngagementPanelSectionList from '../classes/EngagementPanelSectionList.js';
import type AppendContinuationItemsAction from '../classes/actions/AppendContinuationItemsAction.js';
import type MusicThumbnail from '../classes/MusicThumbnail.js';
import type OpenPopupAction from '../classes/actions/OpenPopupAction.js';

export interface IParsedResponse {
  background?: MusicThumbnail;
  challenge?: string;
  bg_challenge?: IBotguardChallenge;
  botguard_data?: IBotguardData;
  ctx?: string;
  should_fetch_reauth_session_token?: boolean;
  encoded_reauth_proof_token?: string;
  session_risk_ctx?: string;
  session_token?: string;
  web_reauth_url?: string;
  plt?: string;
  require_challenge?: boolean;
  actions?: SuperParsedResult<YTNode>;
  actions_memo?: Memo;
  content?: YTNode;
  contents?: SuperParsedResult<YTNode>;
  contents_memo?: Memo;
  header?: SuperParsedResult<YTNode>;
  header_memo?: Memo;
  sidebar?: YTNode;
  sidebar_memo?: Memo;
  live_chat_item_context_menu_supported_renderers?: YTNode;
  live_chat_item_context_menu_supported_renderers_memo?: Memo;
  items_memo?: Memo;
  on_response_received_actions?: ObservedArray<AppendContinuationItemsAction | OpenPopupAction | NavigateAction | ShowMiniplayerCommand | ReloadContinuationItemsCommand>;
  on_response_received_actions_memo?: Memo;
  on_response_received_endpoints?: ObservedArray<AppendContinuationItemsAction | OpenPopupAction | NavigateAction | ShowMiniplayerCommand | ReloadContinuationItemsCommand>;
  on_response_received_endpoints_memo?: Memo;
  on_response_received_commands?: ObservedArray<AppendContinuationItemsAction | OpenPopupAction | NavigateAction | ShowMiniplayerCommand | ReloadContinuationItemsCommand>;
  on_response_received_commands_memo?: Memo;
  continuation?: Continuation;
  continuation_contents?: ItemSectionContinuation | SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation |
  MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation | ContinuationCommand;
  continuation_contents_memo?: Memo;
  metadata?: SuperParsedResult<YTNode>;
  microformat?: YTNode;
  overlay?: YTNode;
  alerts?: ObservedArray<Alert | AlertWithButton>;
  refinements?: string[];
  estimated_results?: number;
  player_overlays?: SuperParsedResult<YTNode>;
  playback_tracking?: IPlaybackTracking;
  playability_status?: IPlayabilityStatus;
  playability_status_memo?: Memo;
  streaming_data?: IStreamingData;
  player_config?: IPlayerConfig;
  current_video_endpoint?: NavigationEndpoint;
  endpoint?: NavigationEndpoint;
  captions?: PlayerCaptionsTracklist;
  video_details?: VideoDetails;
  annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  endscreen?: Endscreen;
  cards?: CardCollection;
  cpn_info?: {
    cpn?: string;
    cpn_source?:
    | 'CPN_SOURCE_TYPE_UNKNOWN'
    | 'CPN_SOURCE_TYPE_CLIENT'
    | 'CPN_SOURCE_TYPE_WATCH_SERVER';
  },
  engagement_panels?: ObservedArray<EngagementPanelSectionList>;
  items?: SuperParsedResult<YTNode>;
  entries?: NavigationEndpoint[];
  entries_memo?: Memo;
  target_id?: string;
  continuation_endpoint?: YTNode;
  player_response?: IPlayerResponse;
  heartbeat_params?: IHeartbeatParams;
  watch_next_response?: INextResponse;
  challenge_prompt?: IYoutubeApiInnertubeChallengePrompt;
  heartbeat_server_data?: string;
  stop_heartbeat?: boolean;
  poll_delay_ms?: string;
}

export interface ITrustedResource {
  private_do_not_access_or_else_trusted_resource_url_wrapped_value?: string;
  private_do_not_access_or_else_safe_script_wrapped_value?: string;
}

export interface IHeartbeatParams {
  drm_session_id?: string;
  heartbeat_server_data?: string;
  heartbeat_token?: string;
  interval_milliseconds?: string;
  max_retries?: string;
  soft_fail_on_error?: boolean;
  use_innertube_heartbeats_for_drm?: boolean;
}

export interface IBotguardChallenge {
  interpreter_url: ITrustedResource;
  interpreter_hash: string;
  program: string;
  global_name: string;
  client_experiments_state_blob: string;
}

export interface IBotguardData {
  interpreter_url: ITrustedResource;
  program: string;
}

export interface IPlaybackTracking {
  videostats_watchtime_url: string;
  videostats_playback_url: string;
}
export interface IPlayabilityStatus {
  status: string;
  error_screen: YTNode | null;
  audio_only_playability: AudioOnlyPlayability | null;
  live_streamability: YTNode | null;
  embeddable: boolean;
  reason: string;
}

export interface IPlayerConfig {
  audio_config: {
    loudness_db?: number;
    perceptual_loudness_db?: number;
    enable_per_format_loudness: boolean;
  };
  stream_selection_config: {
    max_bitrate: string;
  };
  media_common_config: {
    dynamic_readahead_config: {
      max_read_ahead_media_time_ms: number;
      min_read_ahead_media_time_ms: number;
      read_ahead_growth_rate_ms: number;
    };
    media_ustreamer_request_config?: {
      video_playback_ustreamer_config?: string;
    };
  };
}

export interface IStreamingData {
  expires: Date;
  formats: Format[];
  adaptive_formats: Format[];
  dash_manifest_url?: string;
  hls_manifest_url?: string;
  server_abr_streaming_url?: string;
}

export type IPlayerResponse = Pick<IParsedResponse, 'captions' | 'cards' | 'endscreen' | 'microformat' | 'annotations' | 'playability_status' | 'streaming_data' | 'player_config' | 'heartbeat_params' | 'playback_tracking' | 'storyboards' | 'video_details'>;
export type IPlayerHeartbeatResponse = Pick<IParsedResponse, 'playability_status' | 'playability_status_memo' | 'heartbeat_server_data' | 'poll_delay_ms' | 'stop_heartbeat'>;
export type INextResponse = Pick<IParsedResponse, 'contents' | 'contents_memo' | 'continuation_contents' | 'continuation_contents_memo' | 'current_video_endpoint' | 'on_response_received_endpoints' | 'on_response_received_endpoints_memo' | 'player_overlays' | 'engagement_panels'>;
export type IBrowseResponse = Pick<IParsedResponse, 'background' | 'continuation_contents' | 'continuation_contents_memo' | 'on_response_received_actions' | 'on_response_received_actions_memo' | 'on_response_received_endpoints' | 'on_response_received_endpoints_memo' | 'contents' | 'contents_memo' | 'header' | 'header_memo' | 'metadata' | 'microformat' | 'alerts' | 'sidebar' | 'sidebar_memo'>;
export type ISearchResponse = Pick<IParsedResponse, 'header' | 'header_memo' | 'contents' | 'contents_memo' | 'on_response_received_commands' | 'on_response_received_commands_memo' | 'continuation_contents' | 'continuation_contents_memo' | 'refinements' | 'estimated_results'>;
export type IResolveURLResponse = Pick<IParsedResponse, 'endpoint'>;
export type IGetTranscriptResponse = Pick<IParsedResponse, 'actions' | 'actions_memo'>;
export type IGetNotificationsMenuResponse = Pick<IParsedResponse, 'actions' | 'actions_memo'>;
export type IUpdatedMetadataResponse = Pick<IParsedResponse, 'actions' | 'actions_memo' | 'continuation'>;
export type IGuideResponse = Pick<IParsedResponse, 'items' | 'items_memo'>;
export type IGetChallengeResponse = Pick<IParsedResponse, 'challenge' | 'bg_challenge' | 'botguard_data'>;
export type IESRChallengeResponse = Pick<IParsedResponse, 'ctx' | 'should_fetch_reauth_session_token' | 'session_token'>;
export type IGetWebReauthURLResponse = Pick<IParsedResponse, 'web_reauth_url' | 'encoded_reauth_proof_token' | 'session_risk_ctx' | 'plt' | 'require_challenge'>;
export type IGetSessionTokenResponse = Pick<IParsedResponse, 'session_token'>;
export type IShowEngagementPanelResponse = Pick<IParsedResponse, 'content'>;