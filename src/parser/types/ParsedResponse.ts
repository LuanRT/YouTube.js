import type { Memo, ObservedArray, SuperParsedResult, YTNode } from '../helpers.js';

import type {
  ReloadContinuationItemsCommand, Continuation, GridContinuation,
  ItemSectionContinuation, LiveChatContinuation, MusicPlaylistShelfContinuation, MusicShelfContinuation,
  PlaylistPanelContinuation, SectionListContinuation
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
import type { AppendContinuationItemsAction } from '../nodes.js';
export interface IParsedResponse {
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
  MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation;
  continuation_contents_memo?: Memo;
  metadata?: SuperParsedResult<YTNode>;
  microformat?: YTNode;
  overlay?: YTNode;
  alerts?: ObservedArray<Alert | AlertWithButton>;
  refinements?: string[];
  estimated_results?: number;
  player_overlays?: SuperParsedResult<YTNode>;
  playback_tracking?: {
    videostats_watchtime_url: string;
    videostats_playback_url: string;
  };
  playability_status?: IPlayabilityStatus;
  streaming_data?: IStreamingData;
  current_video_endpoint?: NavigationEndpoint;
  endpoint?: NavigationEndpoint;
  captions?: PlayerCaptionsTracklist;
  video_details?: VideoDetails;
  annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  endscreen?: Endscreen;
  cards?: CardCollection;
  engagement_panels?: EngagementPanelSectionList[];
  items?: SuperParsedResult<YTNode>;
}

export interface IStreamingData {
  expires: Date;
  formats: Format[];
  adaptive_formats: Format[];
  dash_manifest_url: string | null;
  hls_manifest_url: string | null;
}

export interface IPlayerResponse {
  captions?: PlayerCaptionsTracklist;
  cards?: CardCollection;
  endscreen?: Endscreen;
  microformat?: YTNode;
  annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  playability_status: IPlayabilityStatus;
  streaming_data?: IStreamingData;
  playback_tracking?: {
    videostats_watchtime_url: string;
    videostats_playback_url: string;
  };
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  video_details?: VideoDetails;
}

export interface IPlayabilityStatus {
  status: string;
  error_screen: YTNode | null;
  audio_only_playablility: AudioOnlyPlayability | null;
  embeddable: boolean;
  reason: string;
}

export interface INextResponse {
  contents?: SuperParsedResult<YTNode>;
  contents_memo?: Memo;
  current_video_endpoint?: NavigationEndpoint;
  on_response_received_endpoints?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  on_response_received_endpoints_memo?: Memo;
  player_overlays?: SuperParsedResult<YTNode>;
  engagement_panels?: EngagementPanelSectionList[];
}

export interface IBrowseResponse {
  continuation_contents?: ItemSectionContinuation | SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation |
  MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation;
  continuation_contents_memo?: Memo;
  on_response_received_actions: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  on_response_received_actions_memo: Memo;
  on_response_received_endpoints?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  on_response_received_endpoints_memo?: Memo;
  contents?: SuperParsedResult<YTNode>;
  contents_memo?: Memo;
  header?: SuperParsedResult<YTNode>;
  header_memo?: Memo;
  metadata?: SuperParsedResult<YTNode>;
  microformat?: YTNode;
  alerts?: ObservedArray<Alert | AlertWithButton>;
  sidebar?: YTNode;
  sidebar_memo?: Memo;
}

export interface ISearchResponse {
  header?: SuperParsedResult<YTNode>;
  header_memo?: Memo;
  contents?: SuperParsedResult<YTNode>;
  contents_memo?: Memo;
  on_response_received_commands?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  continuation_contents?: ItemSectionContinuation | SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation |
  MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation;
  continuation_contents_memo?: Memo;
  refinements?: string[];
  estimated_results: number;
}

export interface IResolveURLResponse {
  endpoint: NavigationEndpoint;
}

export interface IGetNotificationsMenuResponse {
  actions: SuperParsedResult<YTNode>;
  actions_memo: Memo;
}

export interface IUpdatedMetadataResponse {
  actions: SuperParsedResult<YTNode>;
  actions_memo: Memo;
  continuation?: Continuation;
}

export interface IGuideResponse {
  items: SuperParsedResult<YTNode>;
  items_memo: Memo;
}
