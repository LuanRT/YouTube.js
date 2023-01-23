import type AudioOnlyPlayability from './classes/AudioOnlyPlayability';
import type CardCollection from './classes/CardCollection';
import type Endscreen from './classes/Endscreen';
import type PlayerAnnotationsExpanded from './classes/PlayerAnnotationsExpanded';
import type PlayerCaptionsTracklist from './classes/PlayerCaptionsTracklist';
import type PlayerLiveStoryboardSpec from './classes/PlayerLiveStoryboardSpec';
import type PlayerStoryboardSpec from './classes/PlayerStoryboardSpec';
import type Message from './classes/Message';
import type LiveChatParticipantsList from './classes/LiveChatParticipantsList';
import type LiveChatHeader from './classes/LiveChatHeader';
import type LiveChatItemList from './classes/LiveChatItemList';

import MusicMultiSelectMenuItem from './classes/menus/MusicMultiSelectMenuItem';
import Format from './classes/misc/Format';
import VideoDetails from './classes/misc/VideoDetails';
import NavigationEndpoint from './classes/NavigationEndpoint';
import Thumbnail from './classes/misc/Thumbnail';

import { InnertubeError, ParsingError } from '../utils/Utils';
import { Memo, observe, ObservedArray, SuperParsedResult, YTNode, YTNodeConstructor } from './helpers';
import GetParserByName from './map';

import package_json from '../../package.json';

export type ParserError = { classname: string, classdata: any, err: any };
export type ParserErrorHandler = (error: ParserError) => void;

export default class Parser {
  static #errorHandler: ParserErrorHandler = Parser.#printError;
  static #memo: Memo | null = null;

  static setParserErrorHandler(handler: ParserErrorHandler) {
    this.#errorHandler = handler;
  }

  static #clearMemo() {
    Parser.#memo = null;
  }

  static #createMemo() {
    Parser.#memo = new Memo();
  }

  static #addToMemo(classname: string, result: YTNode) {
    if (!Parser.#memo)
      return;

    const list = Parser.#memo.get(classname);
    if (!list)
      return Parser.#memo.set(classname, [ result ]);

    list.push(result);
  }

  static #getMemo() {
    if (!Parser.#memo)
      throw new Error('Parser#getMemo() called before Parser#createMemo()');
    return Parser.#memo;
  }

  /**
   * Parses InnerTube response.
   * @param data - The response data.
   */
  static parseResponse(data: any) {
    // Memoize the response objects by classname
    this.#createMemo();
    // TODO: should this parseItem?
    const contents = Parser.parse(data.contents);
    const contents_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const on_response_received_actions = data.onResponseReceivedActions ? Parser.parseRR(data.onResponseReceivedActions) : null;
    const on_response_received_actions_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const on_response_received_endpoints = data.onResponseReceivedEndpoints ? Parser.parseRR(data.onResponseReceivedEndpoints) : null;
    const on_response_received_endpoints_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const on_response_received_commands = data.onResponseReceivedCommands ? Parser.parseRR(data.onResponseReceivedCommands) : null;
    const on_response_received_commands_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const continuation_contents = data.continuationContents ? Parser.parseLC(data.continuationContents) : null;
    const continuation_contents_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const actions = data.actions ? Parser.parseActions(data.actions) : null;
    const actions_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const live_chat_item_context_menu_supported_renderers = data.liveChatItemContextMenuSupportedRenderers
      ? Parser.parseItem(data.liveChatItemContextMenuSupportedRenderers)
      : null;
    const live_chat_item_context_menu_supported_renderers_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const header = data.header ? Parser.parse(data.header) : null;
    const header_memo = this.#getMemo();
    this.#clearMemo();

    this.#createMemo();
    const sidebar = data.sidebar ? Parser.parseItem(data.sidebar) : null;
    const sidebar_memo = this.#getMemo();
    this.#clearMemo();

    this.applyMutations(contents_memo, data.frameworkUpdates?.entityBatchUpdate?.mutations);

    return {
      actions,
      actions_memo,
      contents,
      contents_memo,
      header,
      header_memo,
      sidebar,
      sidebar_memo,
      live_chat_item_context_menu_supported_renderers,
      live_chat_item_context_menu_supported_renderers_memo,
      on_response_received_actions,
      on_response_received_actions_memo,
      on_response_received_endpoints,
      on_response_received_endpoints_memo,
      on_response_received_commands,
      on_response_received_commands_memo,
      continuation: data.continuation ? Parser.parseC(data.continuation) : null,
      continuation_contents,
      continuation_contents_memo,
      metadata: Parser.parse(data.metadata),
      microformat: data.microformat ? Parser.parseItem(data.microformat) : null,
      overlay: Parser.parseItem(data.overlay),
      refinements: data.refinements || null,
      estimated_results: data.estimatedResults ? parseInt(data.estimatedResults) : null,
      player_overlays: Parser.parse(data.playerOverlays),
      playback_tracking: data.playbackTracking ? {
        videostats_watchtime_url: data.playbackTracking.videostatsWatchtimeUrl.baseUrl as string,
        videostats_playback_url: data.playbackTracking.videostatsPlaybackUrl.baseUrl as string
      } : null,
      playability_status: data.playabilityStatus ? {
        status: data.playabilityStatus.status as string,
        error_screen: Parser.parseItem(data.playabilityStatus.errorScreen),
        audio_only_playablility: Parser.parseItem<AudioOnlyPlayability>(data.playabilityStatus.audioOnlyPlayability),
        embeddable: !!data.playabilityStatus.playableInEmbed || false,
        reason: data.playabilityStatus?.reason || ''
      } : undefined,
      streaming_data: data.streamingData ? {
        expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
        formats: Parser.parseFormats(data.streamingData.formats),
        adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
        dash_manifest_url: data.streamingData?.dashManifestUrl as string || null,
        hls_manifest_url: data.streamingData?.hlsManifestUrl as string || null
      } : undefined,
      current_video_endpoint: data.currentVideoEndpoint ? new NavigationEndpoint(data.currentVideoEndpoint) : null,
      endpoint: data.endpoint ? new NavigationEndpoint(data.endpoint) : null,
      captions: Parser.parseItem<PlayerCaptionsTracklist>(data.captions),
      video_details: data.videoDetails ? new VideoDetails(data.videoDetails) : undefined,
      annotations: Parser.parseArray<PlayerAnnotationsExpanded>(data.annotations),
      storyboards: Parser.parseItem<PlayerStoryboardSpec | PlayerLiveStoryboardSpec>(data.storyboards),
      endscreen: Parser.parseItem<Endscreen>(data.endscreen),
      cards: Parser.parseItem<CardCollection>(data.cards)
    };
  }

  /**
   * Parses a single item.
   * @param data - The data to parse.
   * @param validTypes - YTNode types that are allowed to be parsed.
   */
  static parseItem<T extends YTNode = YTNode>(data: any, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) {
    if (!data) return null;

    const keys = Object.keys(data);

    if (!keys.length)
      return null;

    const classname = this.sanitizeClassName(keys[0]);

    if (!this.shouldIgnore(classname)) {
      try {
        const TargetClass = GetParserByName(classname);

        if (validTypes) {
          if (Array.isArray(validTypes)) {
            if (!validTypes.some((type) => type.type === TargetClass.type))
              throw new ParsingError(`Type mismatch, got ${classname} but expected one of ${validTypes.map((type) => type.type).join(', ')}`);
          } else if (TargetClass.type !== validTypes.type)
            throw new ParsingError(`Type mismatch, got ${classname} but expected ${validTypes.type}`);
        }

        const result = new TargetClass(data[keys[0]]);
        this.#addToMemo(classname, result);

        return result as T;
      } catch (err) {
        this.#errorHandler({ classname, classdata: data[keys[0]], err });
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
  static parseArray<T extends YTNode = YTNode>(data: any[], validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) {
    if (Array.isArray(data)) {
      const results: T[] = [];

      for (const item of data) {
        const result = this.parseItem(item, validTypes);
        if (result) {
          results.push(result);
        }
      }

      return observe(results);
    } else if (!data) {
      return observe([] as T[]);
    }
    throw new ParsingError('Expected array but got a single item');
  }

  /**
   * Parses an item or an array of items.
   * @param data - The data to parse.
   * @param requireArray - Whether the data should be parsed as an array.
   * @param validTypes - YTNode types that are allowed to be parsed.
   */
  static parse<T extends YTNode = YTNode>(data: any, requireArray: true, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): ObservedArray<T> | null;
  static parse<T extends YTNode = YTNode>(data: any, requireArray?: false | undefined, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): SuperParsedResult<T>;
  static parse<T extends YTNode = YTNode>(data: any, requireArray?: boolean, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) {
    if (!data) return null;

    if (Array.isArray(data)) {
      const results: T[] = [];

      for (const item of data) {
        const result = this.parseItem(item, validTypes);
        if (result) {
          results.push(result);
        }
      }

      const res = observe(results);

      return requireArray ? res : new SuperParsedResult(observe(results));
    } else if (requireArray) {
      throw new ParsingError('Expected array but got a single item');
    }

    return new SuperParsedResult(this.parseItem(data, validTypes));
  }

  static parseC(data: any) {
    if (data.timedContinuationData)
      return new Continuation({ continuation: data.timedContinuationData, type: 'timed' });
  }

  static parseLC(data: any) {
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
  }

  static parseRR(actions: any[]) {
    return observe(actions.map((action: any) => {
      if (action.reloadContinuationItemsCommand)
        return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
      if (action.appendContinuationItemsAction)
        return new AppendContinuationItemsAction(action.appendContinuationItemsAction);
    }).filter((item) => item) as (ReloadContinuationItemsCommand | AppendContinuationItemsAction)[]);
  }

  static parseActions(data: any) {
    if (Array.isArray(data)) {
      return Parser.parse(data.map((action) => {
        delete action.clickTrackingParams;
        return action;
      }));
    }
    return new SuperParsedResult(Parser.parseItem(data));
  }

  static parseFormats(formats: any[]) {
    return formats?.map((format) => new Format(format)) || [];
  }

  static applyMutations(memo: Memo, mutations: Array<any>) {
    // Apply mutations to MusicMultiSelectMenuItems
    const music_multi_select_menu_items = memo.getType(MusicMultiSelectMenuItem);

    if (music_multi_select_menu_items.length > 0 && !mutations) {
      console.warn(
        new InnertubeError(
          'Mutation data required for processing MusicMultiSelectMenuItems, but none found.\n' +
          `This is a bug, please report it at ${package_json.bugs.url}`
        )
      );
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
        console.warn(
          new InnertubeError(
            `Mutation data missing or invalid for ${missing_or_invalid_mutations.length} out of ${music_multi_select_menu_items.length} MusicMultiSelectMenuItems. ` +
            `The titles of the failed items are: ${missing_or_invalid_mutations.join(', ')}.\n` +
            `This is a bug, please report it at ${package_json.bugs.url}`
          )
        );
      }
    }
  }

  static #printError({ classname, classdata, err }: ParserError) {
    if (err.code == 'MODULE_NOT_FOUND') {
      return console.warn(
        new InnertubeError(
          `${classname} not found!\n` +
          `This is a bug, want to help us fix it? Follow the instructions at ${package_json.homepage.split('#')[0]}/blob/main/docs/updating-the-parser.md or report it at ${package_json.bugs.url}!`, classdata
        )
      );
    }

    console.warn(
      new InnertubeError(
        `Something went wrong at ${classname}!\n` +
        `This is a bug, please report it at ${package_json.bugs.url}`, { stack: err.stack }
      )
    );
  }

  static sanitizeClassName(input: string) {
    return (input.charAt(0).toUpperCase() + input.slice(1))
      .replace(/Renderer|Model/g, '')
      .replace(/Radio/g, 'Mix').trim();
  }

  static ignore_list = new Set<string>([
    'AdSlot',
    'DisplayAd',
    'SearchPyv',
    'MealbarPromo',
    'BackgroundPromo',
    'PromotedSparklesWeb',
    'RunAttestationCommand',
    'CompactPromotedVideo',
    'StatementBanner'
  ]);

  static shouldIgnore(classname: string) {
    return this.ignore_list.has(classname);
  }
}

export type ParsedResponse = ReturnType<typeof Parser.parseResponse>;

// Continuation

export class ItemSectionContinuation extends YTNode {
  static readonly type = 'itemSectionContinuation';

  contents: ObservedArray<YTNode> | null;
  continuation?: string;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
    if (data.continuations) {
      this.continuation = data.continuations?.at(0)?.nextContinuationData?.continuation;
    }
  }
}

export class AppendContinuationItemsAction extends YTNode {
  static readonly type = 'appendContinuationItemsAction';

  contents: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.continuationItems, true);
  }
}

export class ReloadContinuationItemsCommand extends YTNode {
  static readonly type = 'reloadContinuationItemsCommand';

  target_id: string;
  contents: ObservedArray<YTNode> | null;
  slot?: string;

  constructor(data: any) {
    super();
    this.target_id = data.targetId;
    this.contents = Parser.parse(data.continuationItems, true);
    this.slot = data?.slot;
  }
}

export class SectionListContinuation extends YTNode {
  static readonly type = 'sectionListContinuation';

  continuation: string;
  contents: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation =
      data.continuations?.[0]?.nextContinuationData?.continuation ||
      data.continuations?.[0]?.reloadContinuationData?.continuation || null;
  }
}

export class MusicPlaylistShelfContinuation extends YTNode {
  static readonly type = 'musicPlaylistShelfContinuation';

  continuation: string;
  contents: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation = data.continuations?.[0].nextContinuationData.continuation || null;
  }
}

export class MusicShelfContinuation extends YTNode {
  static readonly type = 'musicShelfContinuation';

  continuation: string;
  contents: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation =
      data.continuations?.[0].nextContinuationData?.continuation ||
      data.continuations?.[0].reloadContinuationData?.continuation || null;
  }
}

export class GridContinuation extends YTNode {
  static readonly type = 'gridContinuation';

  continuation: string;
  items: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items, true);
    this.continuation = data.continuations?.[0].nextContinuationData.continuation || null;
  }

  get contents() {
    return this.items;
  }
}

export class PlaylistPanelContinuation extends YTNode {
  static readonly type = 'playlistPanelContinuation';

  continuation: string;
  contents: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation ||
      data.continuations?.[0]?.nextRadioContinuationData?.continuation || null;
  }
}

export class Continuation extends YTNode {
  static readonly type = 'continuation';

  continuation_type: string;
  timeout_ms?: number;
  time_until_last_message_ms?: number;
  token: string;

  constructor(data: any) {
    super();
    this.continuation_type = data.type;
    this.timeout_ms = data.continuation?.timeoutMs;
    this.time_until_last_message_ms = data.continuation?.timeUntilLastMessageMsec;
    this.token = data.continuation?.continuation;
  }
}

export class LiveChatContinuation extends YTNode {
  static readonly type = 'liveChatContinuation';

  actions: ObservedArray<YTNode>;
  action_panel: YTNode | null;
  item_list: LiveChatItemList | null;
  header: LiveChatHeader | null;
  participants_list: LiveChatParticipantsList | null;
  popout_message: Message | null;
  emojis: {
    emoji_id: string;
    shortcuts: string[];
    search_terms: string[];
    image: Thumbnail[];
  }[];
  continuation: Continuation;
  viewer_name: string;

  constructor(data: any) {
    super();
    this.actions = Parser.parse(data.actions?.map((action: any) => {
      delete action.clickTrackingParams;
      return action;
    }), true) || observe<YTNode>([]);

    this.action_panel = Parser.parseItem(data.actionPanel);
    this.item_list = Parser.parseItem<LiveChatItemList>(data.itemList);
    this.header = Parser.parseItem<LiveChatHeader>(data.header);
    this.participants_list = Parser.parseItem<LiveChatParticipantsList>(data.participantsList);
    this.popout_message = Parser.parseItem<Message>(data.popoutMessage);

    this.emojis = data.emojis?.map((emoji: any) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji
    })) || [];

    let continuation, type;

    if (data.continuations?.[0].timedContinuationData) {
      type = 'timed';
      continuation = data.continuations?.[0].timedContinuationData;
    } else if (data.continuations?.[0].invalidationContinuationData) {
      type = 'invalidation';
      continuation = data.continuations?.[0].invalidationContinuationData;
    } else if (data.continuations?.[0].liveChatReplayContinuationData) {
      type = 'replay';
      continuation = data.continuations?.[0].liveChatReplayContinuationData;
    }

    this.continuation = new Continuation({ continuation, type });

    this.viewer_name = data.viewerName;
  }
}