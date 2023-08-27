import AudioOnlyPlayability from './classes/AudioOnlyPlayability.js';
import CardCollection from './classes/CardCollection.js';
import Endscreen from './classes/Endscreen.js';
import PlayerAnnotationsExpanded from './classes/PlayerAnnotationsExpanded.js';
import PlayerCaptionsTracklist from './classes/PlayerCaptionsTracklist.js';
import PlayerLiveStoryboardSpec from './classes/PlayerLiveStoryboardSpec.js';
import PlayerStoryboardSpec from './classes/PlayerStoryboardSpec.js';
import Alert from './classes/Alert.js';
import AlertWithButton from './classes/AlertWithButton.js';

import type { IParsedResponse, IRawResponse, RawData, RawNode } from './types/index.js';

import MusicMultiSelectMenuItem from './classes/menus/MusicMultiSelectMenuItem.js';
import Format from './classes/misc/Format.js';
import VideoDetails from './classes/misc/VideoDetails.js';
import NavigationEndpoint from './classes/NavigationEndpoint.js';

import { InnertubeError, ParsingError, Platform } from '../utils/Utils.js';
import type { ObservedArray, YTNodeConstructor, YTNode } from './helpers.js';
import { Memo, observe, SuperParsedResult } from './helpers.js';
import * as YTNodes from './nodes.js';
import type { KeyInfo } from './generator.js';
import { camelToSnake, generateRuntimeClass, generateTypescriptClass } from './generator.js';
import { Continuation, ItemSectionContinuation, SectionListContinuation, LiveChatContinuation, MusicPlaylistShelfContinuation, MusicShelfContinuation, GridContinuation, PlaylistPanelContinuation, NavigateAction, ShowMiniplayerCommand, ReloadContinuationItemsCommand } from './continuations.js';

export type ParserError = {
  classname: string,
} & ({
  error_type: 'typecheck',
  classdata: RawNode,
  expected: string | string[]
} | {
  error_type: 'parse',
  classdata: RawNode,
  error: unknown
} | {
  error_type: 'mutation_data_missing'
} | {
  error_type: 'mutation_data_invalid',
  total: number,
  failed: number,
  titles: string[]
} | {
  error_type: 'class_not_found',
  key_info: KeyInfo,
} | {
  error_type: 'class_changed',
  key_info: KeyInfo,
  changed_keys: KeyInfo
});

export type ParserErrorHandler = (error: ParserError) => void;

const IGNORED_LIST = new Set([
  'AdSlot',
  'DisplayAd',
  'SearchPyv',
  'MealbarPromo',
  'PrimetimePromo',
  'BackgroundPromo',
  'PromotedSparklesWeb',
  'RunAttestationCommand',
  'CompactPromotedVideo',
  'BrandVideoShelf',
  'BrandVideoSingleton',
  'StatementBanner',
  'GuideSigninPromo',
  'AdsEngagementPanelContent'
]);

const RUNTIME_NODES = new Map<string, YTNodeConstructor>(Object.entries(YTNodes));

const DYNAMIC_NODES = new Map<string, YTNodeConstructor>();

let MEMO: Memo | null = null;

let ERROR_HANDLER: ParserErrorHandler = ({ classname, ...context }: ParserError) => {
  switch (context.error_type) {
    case 'parse':
      if (context.error instanceof Error) {
        console.warn(
          new InnertubeError(
            `Something went wrong at ${classname}!\n` +
            `This is a bug, please report it at ${Platform.shim.info.bugs_url}`, {
              stack: context.error.stack
            }
          )
        );
      }
      break;
    case 'typecheck':
      console.warn(
        new ParsingError(
          `Type mismatch, got ${classname} expected ${Array.isArray(context.expected) ? context.expected.join(' | ') : context.expected}.`,
          context.classdata
        )
      );
      break;
    case 'mutation_data_missing':
      console.warn(
        new InnertubeError(
          'Mutation data required for processing MusicMultiSelectMenuItems, but none found.\n' +
          `This is a bug, please report it at ${Platform.shim.info.bugs_url}`
        )
      );
      break;
    case 'mutation_data_invalid':
      console.warn(
        new InnertubeError(
          `Mutation data missing or invalid for ${context.failed} out of ${context.total} MusicMultiSelectMenuItems. ` +
          `The titles of the failed items are: ${context.titles.join(', ')}.\n` +
          `This is a bug, please report it at ${Platform.shim.info.bugs_url}`
        )
      );
      break;
    case 'class_not_found':
      console.warn(
        new InnertubeError(
          `${classname} not found!\n` +
          `This is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!\n` +
          `Introspected and JIT generated this class in the meantime:\n${generateTypescriptClass(classname, context.key_info)}`
        )
      );
      break;
    case 'class_changed':
      console.warn(
        `${classname} changed!\n` +
        `The following keys where altered: ${context.changed_keys.map(([ key ]) => camelToSnake(key)).join(', ')}\n` +
        `The class has changed to:\n${generateTypescriptClass(classname, context.key_info)}`
      );
      break;
    default:
      console.warn(
        'Unreachable code reached at ParserErrorHandler'
      );
      break;
  }
};

export function setParserErrorHandler(handler: ParserErrorHandler) {
  ERROR_HANDLER = handler;
}

function _clearMemo() {
  MEMO = null;
}

function _createMemo() {
  MEMO = new Memo();
}

function _addToMemo(classname: string, result: YTNode) {
  if (!MEMO)
    return;

  const list = MEMO.get(classname);
  if (!list)
    return MEMO.set(classname, [ result ]);

  list.push(result);
}

function _getMemo() {
  if (!MEMO)
    throw new Error('Parser#getMemo() called before Parser#createMemo()');
  return MEMO;
}

export function shouldIgnore(classname: string) {
  return IGNORED_LIST.has(classname);
}

export function sanitizeClassName(input: string) {
  return (input.charAt(0).toUpperCase() + input.slice(1))
    .replace(/Renderer|Model/g, '')
    .replace(/Radio/g, 'Mix').trim();
}

export function getParserByName(classname: string) {
  const ParserConstructor = RUNTIME_NODES.get(classname);

  if (!ParserConstructor) {
    const error = new Error(`Module not found: ${classname}`);
    (error as any).code = 'MODULE_NOT_FOUND';
    throw error;
  }

  return ParserConstructor;
}

export function hasParser(classname: string) {
  return RUNTIME_NODES.has(classname);
}

export function addRuntimeParser(classname: string, ParserConstructor: YTNodeConstructor) {
  RUNTIME_NODES.set(classname, ParserConstructor);
  DYNAMIC_NODES.set(classname, ParserConstructor);
}

export function getDynamicParsers() {
  return Object.fromEntries(DYNAMIC_NODES);
}

/**
 * Parses given InnerTube response.
 * @param data - Raw data.
 */
export function parseResponse<T extends IParsedResponse = IParsedResponse>(data: IRawResponse): T {
  const parsed_data = {} as T;

  _createMemo();
  const contents = parse(data.contents);
  const contents_memo = _getMemo();
  if (contents) {
    parsed_data.contents = contents;
    parsed_data.contents_memo = contents_memo;
  }
  _clearMemo();

  _createMemo();
  const on_response_received_actions = data.onResponseReceivedActions ? parseRR(data.onResponseReceivedActions) : null;
  const on_response_received_actions_memo = _getMemo();
  if (on_response_received_actions) {
    parsed_data.on_response_received_actions = on_response_received_actions;
    parsed_data.on_response_received_actions_memo = on_response_received_actions_memo;
  }
  _clearMemo();

  _createMemo();
  const on_response_received_endpoints = data.onResponseReceivedEndpoints ? parseRR(data.onResponseReceivedEndpoints) : null;
  const on_response_received_endpoints_memo = _getMemo();
  if (on_response_received_endpoints) {
    parsed_data.on_response_received_endpoints = on_response_received_endpoints;
    parsed_data.on_response_received_endpoints_memo = on_response_received_endpoints_memo;
  }
  _clearMemo();

  _createMemo();
  const on_response_received_commands = data.onResponseReceivedCommands ? parseRR(data.onResponseReceivedCommands) : null;
  const on_response_received_commands_memo = _getMemo();
  if (on_response_received_commands) {
    parsed_data.on_response_received_commands = on_response_received_commands;
    parsed_data.on_response_received_commands_memo = on_response_received_commands_memo;
  }
  _clearMemo();

  _createMemo();
  const continuation_contents = data.continuationContents ? parseLC(data.continuationContents) : null;
  const continuation_contents_memo = _getMemo();
  if (continuation_contents) {
    parsed_data.continuation_contents = continuation_contents;
    parsed_data.continuation_contents_memo = continuation_contents_memo;
  }
  _clearMemo();

  _createMemo();
  const actions = data.actions ? parseActions(data.actions) : null;
  const actions_memo = _getMemo();
  if (actions) {
    parsed_data.actions = actions;
    parsed_data.actions_memo = actions_memo;
  }
  _clearMemo();

  _createMemo();
  const live_chat_item_context_menu_supported_renderers = data.liveChatItemContextMenuSupportedRenderers ? parseItem(data.liveChatItemContextMenuSupportedRenderers) : null;
  const live_chat_item_context_menu_supported_renderers_memo = _getMemo();
  if (live_chat_item_context_menu_supported_renderers) {
    parsed_data.live_chat_item_context_menu_supported_renderers = live_chat_item_context_menu_supported_renderers;
    parsed_data.live_chat_item_context_menu_supported_renderers_memo = live_chat_item_context_menu_supported_renderers_memo;
  }
  _clearMemo();

  _createMemo();
  const header = data.header ? parse(data.header) : null;
  const header_memo = _getMemo();
  if (header) {
    parsed_data.header = header;
    parsed_data.header_memo = header_memo;
  }
  _clearMemo();

  _createMemo();
  const sidebar = data.sidebar ? parseItem(data.sidebar) : null;
  const sidebar_memo = _getMemo();
  if (sidebar) {
    parsed_data.sidebar = sidebar;
    parsed_data.sidebar_memo = sidebar_memo;
  }
  _clearMemo();

  applyMutations(contents_memo, data.frameworkUpdates?.entityBatchUpdate?.mutations);

  const continuation = data.continuation ? parseC(data.continuation) : null;
  if (continuation) {
    parsed_data.continuation = continuation;
  }

  const metadata = parse(data.metadata);
  if (metadata) {
    parsed_data.metadata = metadata;
  }

  const microformat = parseItem(data.microformat);
  if (microformat) {
    parsed_data.microformat = microformat;
  }

  const overlay = parseItem(data.overlay);
  if (overlay) {
    parsed_data.overlay = overlay;
  }

  const alerts = parseArray(data.alerts, [ Alert, AlertWithButton ]);
  if (alerts.length) {
    parsed_data.alerts = alerts;
  }

  const refinements = data.refinements;
  if (refinements) {
    parsed_data.refinements = refinements;
  }

  const estimated_results = data.estimatedResults ? parseInt(data.estimatedResults) : null;
  if (estimated_results) {
    parsed_data.estimated_results = estimated_results;
  }

  const player_overlays = parse(data.playerOverlays);
  if (player_overlays) {
    parsed_data.player_overlays = player_overlays;
  }

  const playback_tracking = data.playbackTracking ? {
    videostats_watchtime_url: data.playbackTracking.videostatsWatchtimeUrl.baseUrl,
    videostats_playback_url: data.playbackTracking.videostatsPlaybackUrl.baseUrl
  } : null;

  if (playback_tracking) {
    parsed_data.playback_tracking = playback_tracking;
  }

  const playability_status = data.playabilityStatus ? {
    status: data.playabilityStatus.status,
    reason: data.playabilityStatus.reason || '',
    embeddable: !!data.playabilityStatus.playableInEmbed || false,
    audio_only_playablility: parseItem(data.playabilityStatus.audioOnlyPlayability, AudioOnlyPlayability),
    error_screen: parseItem(data.playabilityStatus.errorScreen)
  } : null;

  if (playability_status) {
    parsed_data.playability_status = playability_status;
  }

  const streaming_data = data.streamingData ? {
    expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
    formats: parseFormats(data.streamingData.formats),
    adaptive_formats: parseFormats(data.streamingData.adaptiveFormats),
    dash_manifest_url: data.streamingData.dashManifestUrl || null,
    hls_manifest_url: data.streamingData.hlsManifestUrl || null
  } : undefined;

  if (streaming_data) {
    parsed_data.streaming_data = streaming_data;
  }

  const current_video_endpoint = data.currentVideoEndpoint ? new NavigationEndpoint(data.currentVideoEndpoint) : null;
  if (current_video_endpoint) {
    parsed_data.current_video_endpoint = current_video_endpoint;
  }

  const endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  if (endpoint) {
    parsed_data.endpoint = endpoint;
  }

  const captions = parseItem(data.captions, PlayerCaptionsTracklist);
  if (captions) {
    parsed_data.captions = captions;
  }

  const video_details = data.videoDetails ? new VideoDetails(data.videoDetails) : null;
  if (video_details) {
    parsed_data.video_details = video_details;
  }

  const annotations = parseArray(data.annotations, PlayerAnnotationsExpanded);
  if (annotations.length) {
    parsed_data.annotations = annotations;
  }

  const storyboards = parseItem(data.storyboards, [ PlayerStoryboardSpec, PlayerLiveStoryboardSpec ]);
  if (storyboards) {
    parsed_data.storyboards = storyboards;
  }

  const endscreen = parseItem(data.endscreen, Endscreen);
  if (endscreen) {
    parsed_data.endscreen = endscreen;
  }

  const cards = parseItem(data.cards, CardCollection);
  if (cards) {
    parsed_data.cards = cards;
  }

  const engagement_panels = data.engagementPanels?.map((e) => {
    const item = parseItem(e, YTNodes.EngagementPanelSectionList) as YTNodes.EngagementPanelSectionList;
    return item;
  });
  if (engagement_panels) {
    parsed_data.engagement_panels = engagement_panels;
  }
  _createMemo();
  const items = parse(data.items);
  if (items) {
    parsed_data.items = items;
    parsed_data.items_memo = _getMemo();
  }
  _clearMemo();

  return parsed_data;
}

/**
 * Parses a single item.
 * @param data - The data to parse.
 * @param validTypes - YTNode types that are allowed to be parsed.
 */
export function parseItem<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawNode | undefined, validTypes: K): InstanceType<K[number]> | null;
export function parseItem<T extends YTNode>(data: RawNode | undefined, validTypes: YTNodeConstructor<T>): T | null;
export function parseItem(data?: RawNode) : YTNode;
export function parseItem(data?: RawNode, validTypes?: YTNodeConstructor | YTNodeConstructor[]) {
  if (!data) return null;

  const keys = Object.keys(data);

  if (!keys.length)
    return null;

  const classname = sanitizeClassName(keys[0]);

  if (!shouldIgnore(classname)) {
    try {
      const has_target_class = hasParser(classname);

      const TargetClass = has_target_class ?
        getParserByName(classname) :
        generateRuntimeClass(classname, data[keys[0]], ERROR_HANDLER);

      if (validTypes) {
        if (Array.isArray(validTypes)) {
          if (!validTypes.some((type) => type.type === TargetClass.type)) {
            ERROR_HANDLER({
              classdata: data[keys[0]],
              classname,
              error_type: 'typecheck',
              expected: validTypes.map((type) => type.type)
            });
            return null;
          }
        } else if (TargetClass.type !== validTypes.type) {
          ERROR_HANDLER({
            classdata: data[keys[0]],
            classname,
            error_type: 'typecheck',
            expected: validTypes.type
          });
          return null;
        }
      }

      const result = new TargetClass(data[keys[0]]);
      _addToMemo(classname, result);

      return result;
    } catch (err) {
      ERROR_HANDLER({
        classname,
        classdata: data[keys[0]],
        error: err,
        error_type: 'parse'
      });
      return null;
    }
  }

  return null;
}

/**
 * Parses an array of items.
 * @param data - The data to parse.
 * @param validTypes - YTNode types that are allowed to be parsed.
 */
export function parseArray<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawNode[] | undefined, validTypes: K): ObservedArray<InstanceType<K[number]>>;
export function parseArray<T extends YTNode = YTNode>(data: RawNode[] | undefined, validType: YTNodeConstructor<T>): ObservedArray<T>;
export function parseArray(data: RawNode[] | undefined): ObservedArray<YTNode>;
export function parseArray(data?: RawNode[], validTypes?: YTNodeConstructor | YTNodeConstructor[]) {
  if (Array.isArray(data)) {
    const results: YTNode[] = [];

    for (const item of data) {
      const result = parseItem(item, validTypes as YTNodeConstructor);
      if (result) {
        results.push(result);
      }
    }

    return observe(results);
  } else if (!data) {
    return observe([] as YTNode[]);
  }
  throw new ParsingError('Expected array but got a single item');
}

/**
 * Parses an item or an array of items.
 * @param data - The data to parse.
 * @param requireArray - Whether the data should be parsed as an array.
 * @param validTypes - YTNode types that are allowed to be parsed.
 */
export function parse<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawData, requireArray: true, validTypes?: K): ObservedArray<InstanceType<K[number]>> | null;
export function parse<T extends YTNode = YTNode>(data?: RawData, requireArray?: false | undefined, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): SuperParsedResult<T>;
export function parse<T extends YTNode = YTNode>(data?: RawData, requireArray?: boolean, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) {
  if (!data) return null;

  if (Array.isArray(data)) {
    const results: T[] = [];

    for (const item of data) {
      const result = parseItem(item, validTypes as YTNodeConstructor<T>);
      if (result) {
        results.push(result);
      }
    }

    const res = observe(results);

    return requireArray ? res : new SuperParsedResult(res);
  } else if (requireArray) {
    throw new ParsingError('Expected array but got a single item');
  }

  return new SuperParsedResult(parseItem(data, validTypes as YTNodeConstructor<T>));
}

export function parseC(data: RawNode) {
  if (data.timedContinuationData)
    return new Continuation({ continuation: data.timedContinuationData, type: 'timed' });
  return null;
}

export function parseLC(data: RawNode) {
  if (data.itemSectionContinuation)
    return new ItemSectionContinuation(data.itemSectionContinuation);
  if (data.sectionListContinuation)
    return new SectionListContinuation(data.sectionListContinuation);
  if (data.liveChatContinuation)
    return new LiveChatContinuation(data.liveChatContinuation);
  if (data.musicPlaylistShelfContinuation)
    return new MusicPlaylistShelfContinuation(data.musicPlaylistShelfContinuation);
  if (data.musicShelfContinuation)
    return new MusicShelfContinuation(data.musicShelfContinuation);
  if (data.gridContinuation)
    return new GridContinuation(data.gridContinuation);
  if (data.playlistPanelContinuation)
    return new PlaylistPanelContinuation(data.playlistPanelContinuation);

  return null;
}

export function parseRR(actions: RawNode[]) {
  return observe(actions.map((action: any) => {
    if (action.navigateAction)
      return new NavigateAction(action.navigateAction);
    if (action.showMiniplayerCommand)
      return new ShowMiniplayerCommand(action.showMiniplayerCommand);
    if (action.reloadContinuationItemsCommand)
      return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
    if (action.appendContinuationItemsAction)
      return new YTNodes.AppendContinuationItemsAction(action.appendContinuationItemsAction);
  }).filter((item) => item) as (ReloadContinuationItemsCommand | YTNodes.AppendContinuationItemsAction)[]);
}

export function parseActions(data: RawData) {
  if (Array.isArray(data)) {
    return parse(data.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }));
  }
  return new SuperParsedResult(parseItem(data));
}

export function parseFormats(formats: RawNode[]): Format[] {
  return formats?.map((format) => new Format(format)) || [];
}

export function applyMutations(memo: Memo, mutations: RawNode[]) {
  // Apply mutations to MusicMultiSelectMenuItems
  const music_multi_select_menu_items = memo.getType(MusicMultiSelectMenuItem);

  if (music_multi_select_menu_items.length > 0 && !mutations) {
    ERROR_HANDLER({
      error_type: 'mutation_data_missing',
      classname: 'MusicMultiSelectMenuItem'
    });
  } else {
    const missing_or_invalid_mutations = [];

    for (const menu_item of music_multi_select_menu_items) {
      const mutation = mutations
        .find((mutation) => mutation.payload?.musicFormBooleanChoice?.id === menu_item.form_item_entity_key);

      const choice = mutation?.payload.musicFormBooleanChoice;

      if (choice?.selected !== undefined && choice?.opaqueToken) {
        menu_item.selected = choice.selected;
      } else {
        missing_or_invalid_mutations.push(`'${menu_item.title}'`);
      }
    }
    if (missing_or_invalid_mutations.length > 0) {
      ERROR_HANDLER({
        error_type: 'mutation_data_invalid',
        classname: 'MusicMultiSelectMenuItem',
        total: music_multi_select_menu_items.length,
        failed: missing_or_invalid_mutations.length,
        titles: missing_or_invalid_mutations
      });
    }
  }
}
