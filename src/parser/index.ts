import Format from './classes/misc/Format';
import VideoDetails from './classes/misc/VideoDetails';
import GetParserByName from './map';
import Endscreen from './classes/Endscreen';
import CardCollection from './classes/CardCollection';
import NavigationEndpoint from './classes/NavigationEndpoint';

import { InnertubeError, ParsingError } from '../utils/Utils';
import { YTNode, YTNodeConstructor, SuperParsedResult, ObservedArray, observe, Memo } from './helpers';

import package_json from '../../package.json';

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

  constructor(data: any) {
    super();
    this.target_id = data.targetId;
    this.contents = Parser.parse(data.continuationItems, true);
  }
}

export class SectionListContinuation extends YTNode {
  static readonly type = 'sectionListContinuation';

  continuation: string;
  contents: ObservedArray<YTNode> | null;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation = data.continuations[0].nextContinuationData.continuation;
  }
}

export class TimedContinuation extends YTNode {
  static readonly type = 'timedContinuationData';

  timeout_ms: number;
  token: string;

  constructor(data: any) {
    super();
    this.timeout_ms = data.timeoutMs || data.timeUntilLastMessageMsec;
    this.token = data.continuation;
  }
}

export class LiveChatContinuation extends YTNode {
  static readonly type = 'liveChatContinuation';

  actions: ObservedArray<YTNode>;
  action_panel: YTNode | null;
  item_list: YTNode | null;
  header: YTNode | null;
  participants_list: YTNode | null;
  popout_message: YTNode | null;
  emojis: any[] | null; // TODO: give this an actual type
  continuation: TimedContinuation;
  viewer_name: string;

  constructor(data: any) {
    super();
    this.actions = Parser.parse(data.actions?.map((action: any) => {
      delete action.clickTrackingParams;
      return action;
    }), true) || observe<YTNode>([]);

    this.action_panel = Parser.parseItem(data.actionPanel);
    this.item_list = Parser.parseItem(data.itemList);
    this.header = Parser.parseItem(data.header);
    this.participants_list = Parser.parseItem(data.participantsList);
    this.popout_message = Parser.parseItem(data.popoutMessage);

    this.emojis = data.emojis?.map((emoji: any) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: emoji.image,
      is_custom_emoji: emoji.isCustomEmoji
    })) || null;

    this.continuation = new TimedContinuation(
      data.continuations?.[0].timedContinuationData ||
      data.continuations?.[0].invalidationContinuationData ||
      data.continuations?.[0].liveChatReplayContinuationData
    );

    this.viewer_name = data.viewerName;
  }
}

export default class Parser {
  static #memo: Memo | null = null;

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
   */
  static parseResponse(data: any) {
    // Memoize the response objects by classname
    this.#createMemo();
    // TODO: is this parseItem?
    const contents = Parser.parse(data.contents);
    const contents_memo = this.#getMemo();
    // End of memoization
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
    const actions = data.actions ? Parser.parseActions(data.actions) : null;
    const actions_memo = this.#getMemo();
    this.#clearMemo();

    return {
      actions,
      actions_memo,
      contents,
      contents_memo,
      on_response_received_actions,
      on_response_received_actions_memo,
      on_response_received_endpoints,
      on_response_received_endpoints_memo,
      on_response_received_commands,
      on_response_received_commands_memo,
      continuation: data.continuation ? Parser.parseC(data.continuation) : null,
      continuation_contents: data.continuationContents ? Parser.parseLC(data.continuationContents) : null,
      metadata: Parser.parse(data.metadata),
      header: Parser.parse(data.header),
      microformat: data.microformat ? Parser.parseItem(data.microformat) : null,
      sidebar: Parser.parseItem(data.sidebar),
      overlay: Parser.parseItem(data.overlay),
      refinements: data.refinements || null,
      estimated_results: data.estimatedResults ? parseInt(data.estimatedResults) : null,
      player_overlays: Parser.parse(data.playerOverlays),
      playability_status: data.playabilityStatus ? {
        status: data.playabilityStatus.status as string,
        error_screen: Parser.parse(data.playabilityStatus.errorScreen),
        embeddable: !!data.playabilityStatus.playableInEmbed || false,
        reason: data.playabilityStatus?.reason || ''
      } : undefined,
      streaming_data: data.streamingData ? {
        expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
        formats: Parser.parseFormats(data.streamingData.formats),
        adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
        dash_manifest_url: data.streamingData?.dashManifestUrl || null,
        dls_manifest_url: data.streamingData?.dashManifestUrl || null
      } : undefined,
      current_video_endpoint: data.currentVideoEndpoint ? new NavigationEndpoint(data.currentVideoEndpoint) : null,
      // TODO: PlayerCaptionsTracklist ?
      captions: Parser.parse(data.captions),
      video_details: data.videoDetails ? new VideoDetails(data.videoDetails) : undefined,
      // TODO: might want to type check these two and use parseItem
      annotations: Parser.parse(data.annotations),
      storyboards: Parser.parse(data.storyboards),
      endscreen: Parser.parseItem<Endscreen>(data.endscreen, Endscreen),
      cards: Parser.parseItem<CardCollection>(data.cards, CardCollection)
    };
  }

  static parseC(data: any) {
    if (data.timedContinuationData)
      return new TimedContinuation(data.timedContinuationData);
  }

  static parseLC(data: any) {
    if (data.sectionListContinuation)
      return new SectionListContinuation(data.sectionListContinuation);
    if (data.liveChatContinuation)
      return new LiveChatContinuation(data.liveChatContinuation);
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

  static parseItem<T extends YTNode = YTNode>(data: any, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) {
    if (!data) return null;

    const keys = Object.keys(data);
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
        this.formatError({ classname, classdata: data[keys[0]], err });
        return null;
      }
    }

    return null;
  }

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

  static parse<T extends YTNode = YTNode>(data: any, requireArray: true, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) : ObservedArray<T> | null;
  static parse<T extends YTNode = YTNode>(data: any, requireArray?: false | undefined, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]) : SuperParsedResult<T>;

  /**
   * Parses the `contents` property of the response as well as its nodes.
   */
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

  static formatError({ classname, classdata, err }: { classname: string, classdata: any, err: any }) {
    if (err.code == 'MODULE_NOT_FOUND') {
      return console.warn(
        new InnertubeError(
          `${classname} not found!\n` +
          `This is a bug, please report it at ${package_json.bugs.url}`, classdata)
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
    'DisplayAd',
    'SearchPyv',
    'MealbarPromo',
    'BackgroundPromo',
    'PromotedSparklesWeb',
    'RunAttestationCommand',
    'StatementBanner'
  ]);

  static shouldIgnore(classname: string) {
    return this.ignore_list.has(classname);
  }
}

export type ParsedResponse = ReturnType<typeof Parser.parseResponse>;