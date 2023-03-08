import { Memo, ObservedArray, SuperParsedResult, YTNode } from '../helpers.ts';

import type {
  ReloadContinuationItemsCommand, AppendContinuationItemsAction, Continuation, GridContinuation,
  ItemSectionContinuation, LiveChatContinuation, MusicPlaylistShelfContinuation, MusicShelfContinuation,
  PlaylistPanelContinuation, SectionListContinuation
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
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded.ts';

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
  alerts?: ObservedArray<Alert>;
  refinements?: string[];
  estimated_results?: number;
  player_overlays?: SuperParsedResult<YTNode>;
  playback_tracking?: {
    videostats_watchtime_url: string;
    videostats_playback_url: string;
  };
  playability_status?: {
    status: string;
    error_screen: YTNode | null;
    audio_only_playablility: AudioOnlyPlayability | null;
    embeddable: boolean;
    reason: string;
  };
  streaming_data?: {
    expires: Date;
    formats: Format[];
    adaptive_formats: Format[];
    dash_manifest_url: string | null;
    hls_manifest_url: string | null;
  };
  current_video_endpoint?: NavigationEndpoint;
  endpoint?: NavigationEndpoint;
  captions?: PlayerCaptionsTracklist;
  video_details?: VideoDetails;
  annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  endscreen?: Endscreen;
  cards?: CardCollection;
  items?: SuperParsedResult<YTNode>;
}

export interface IPlayerResponse {
  captions?: PlayerCaptionsTracklist;
  cards?: CardCollection;
  endscreen?: Endscreen;
  microformat?: YTNode;
  annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  playability_status: {
    status: string;
    error_screen: YTNode | null;
    audio_only_playablility: AudioOnlyPlayability | null;
    embeddable: boolean;
    reason: string;
  };
  streaming_data?: {
    expires: Date;
    formats: Format[];
    adaptive_formats: Format[];
    dash_manifest_url: string | null;
    hls_manifest_url: string | null;
  };
  playback_tracking?: {
    videostats_watchtime_url: string;
    videostats_playback_url: string;
  };
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  video_details?: VideoDetails;
}

export interface INextResponse {
  contents?: SuperParsedResult<YTNode>;
  contents_memo?: Memo;
  current_video_endpoint?: NavigationEndpoint;
  on_response_received_endpoints?: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
  on_response_received_endpoints_memo?: Memo;
  player_overlays?: SuperParsedResult<YTNode>;
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
  alerts?: ObservedArray<Alert>;
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