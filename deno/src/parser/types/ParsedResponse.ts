import type { Memo, ObservedArray, SuperParsedResult, YTNode } from '../helpers.ts';
import type {
  ReloadContinuationItemsCommand, Continuation, GridContinuation,
  ItemSectionContinuation, LiveChatContinuation, MusicPlaylistShelfContinuation, MusicShelfContinuation,
  PlaylistPanelContinuation, SectionListContinuation, ContinuationCommand,
  CpnSource
} from '../index.ts';
import type PlayerCaptionsTracklist from '../classes/PlayerCaptionsTracklist.ts';
import type CardCollection from '../classes/CardCollection.ts';
import type Endscreen from '../classes/Endscreen.ts';
import type AudioOnlyPlayability from '../classes/AudioOnlyPlayability.ts';
import type Format from '../classes/misc/Format.ts';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.ts';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.ts';
import type VideoDetails from '../classes/misc/VideoDetails.ts';
import type Alert from '../classes/Alert.ts';
import type AlertWithButton from '../classes/AlertWithButton.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded.ts';
import type EngagementPanelSectionList from '../classes/EngagementPanelSectionList.ts';
import type { AppendContinuationItemsAction, MusicThumbnail } from '../nodes.ts';

export interface IParsedResponse {
  background?: MusicThumbnail;
  actions?: SuperParsedResult<YTNode>;
  actions_memo?: Memo;
  contents?: SuperParsedResult<YTNode>;
  contents_memo?: Memo;
  header?: SuperParsedResult<YTNode>;
  header_memo?: Memo;
  sidebar?: YTNode;
  sidebar_memo?: Memo;
  live_chat_item_context_menu_supported_renderers?: YTNode;
  live_chat_item_context_menu_supported_renderers_memo?: Memo;
  items_memo?: Memo;
  on_response_received_actions?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  on_response_received_actions_memo?: Memo;
  on_response_received_endpoints?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  on_response_received_endpoints_memo?: Memo;
  on_response_received_commands?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
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
    cpn: string;
    cpn_source: CpnSource;
  },
  engagement_panels?: ObservedArray<EngagementPanelSectionList>;
  items?: SuperParsedResult<YTNode>;
  entries?: NavigationEndpoint[];
  entries_memo?: Memo;
  continuation_endpoint?: YTNode;
  player_response?: IPlayerResponse;
  watch_next_response?: INextResponse;
}

export interface IPlaybackTracking {
  videostats_watchtime_url: string;
  videostats_playback_url: string;
}
export interface IPlayabilityStatus {
  status: string;
  error_screen: YTNode | null;
  audio_only_playablility: AudioOnlyPlayability | null;
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
  };
}

export interface IStreamingData {
  expires: Date;
  formats: Format[];
  adaptive_formats: Format[];
  dash_manifest_url: string | null;
  hls_manifest_url: string | null;
}

export type IPlayerResponse = Pick<IParsedResponse, 'captions' | 'cards' | 'endscreen' | 'microformat' | 'annotations' | 'playability_status' | 'streaming_data' | 'player_config' | 'playback_tracking' | 'storyboards' | 'video_details'>;
export type INextResponse = Pick<IParsedResponse, 'contents' | 'contents_memo' | 'current_video_endpoint' | 'on_response_received_endpoints' | 'on_response_received_endpoints_memo' | 'player_overlays' | 'engagement_panels'>
export type IBrowseResponse = Pick<IParsedResponse, 'background' | 'continuation_contents' | 'continuation_contents_memo' | 'on_response_received_actions' | 'on_response_received_actions_memo' | 'on_response_received_endpoints' | 'on_response_received_endpoints_memo' | 'contents' | 'contents_memo' | 'header' | 'header_memo' | 'metadata' | 'microformat' | 'alerts' | 'sidebar' | 'sidebar_memo'>
export type ISearchResponse = Pick<IParsedResponse, 'header' | 'header_memo' | 'contents' | 'contents_memo' | 'on_response_received_commands' | 'continuation_contents' | 'continuation_contents_memo' | 'refinements' | 'estimated_results'>;
export type IResolveURLResponse = Pick<IParsedResponse, 'endpoint'>;
export type IGetTranscriptResponse = Pick<IParsedResponse, 'actions' | 'actions_memo'>
export type IGetNotificationsMenuResponse = Pick<IParsedResponse, 'actions' | 'actions_memo'>
export type IUpdatedMetadataResponse = Pick<IParsedResponse, 'actions' | 'actions_memo' | 'continuation'>
export type IGuideResponse = Pick<IParsedResponse, 'items' | 'items_memo'>
