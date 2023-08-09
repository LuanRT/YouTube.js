import type { ObservedArray} from './helpers.js';
import { YTNode, observe } from './helpers.js';
import type { RawNode } from './index.js';
import { Thumbnail } from './misc.js';
import { NavigationEndpoint, LiveChatItemList, LiveChatHeader, LiveChatParticipantsList, Message } from './nodes.js';
import * as Parser from './parser.js';

export class ItemSectionContinuation extends YTNode {
  static readonly type = 'itemSectionContinuation';

  contents: ObservedArray<YTNode> | null;
  continuation?: string;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
    if (Array.isArray(data.continuations)) {
      this.continuation = data.continuations?.at(0)?.nextContinuationData?.continuation;
    }
  }
}

export class NavigateAction extends YTNode {
  static readonly type = 'navigateAction';

  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}

export class ShowMiniplayerCommand extends YTNode {
  static readonly type = 'showMiniplayerCommand';

  miniplayer_command: NavigationEndpoint;
  show_premium_branding: boolean;

  constructor(data: RawNode) {
    super();
    this.miniplayer_command = new NavigationEndpoint(data.miniplayerCommand);
    this.show_premium_branding = data.showPremiumBranding;
  }
}

export { default as AppendContinuationItemsAction } from './classes/actions/AppendContinuationItemsAction.js';

export class ReloadContinuationItemsCommand extends YTNode {
  static readonly type = 'reloadContinuationItemsCommand';

  target_id: string;
  contents: ObservedArray<YTNode> | null;
  slot?: string;

  constructor(data: RawNode) {
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

  constructor(data: RawNode) {
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

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation = data.continuations?.[0].nextContinuationData.continuation || null;
  }
}

export class MusicShelfContinuation extends YTNode {
  static readonly type = 'musicShelfContinuation';

  continuation: string;
  contents: ObservedArray<YTNode> | null;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
    this.continuation =
      data.continuations?.[0].nextContinuationData?.continuation ||
      data.continuations?.[0].reloadContinuationData?.continuation || null;
  }
}

export class GridContinuation extends YTNode {
  static readonly type = 'gridContinuation';

  continuation: string;
  items: ObservedArray<YTNode> | null;

  constructor(data: RawNode) {
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

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
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

  constructor(data: RawNode) {
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

  constructor(data: RawNode) {
    super();
    this.actions = Parser.parse(data.actions?.map((action: any) => {
      delete action.clickTrackingParams;
      return action;
    }), true) || observe<YTNode>([]);

    this.action_panel = Parser.parseItem(data.actionPanel);
    this.item_list = Parser.parseItem(data.itemList, LiveChatItemList);
    this.header = Parser.parseItem(data.header, LiveChatHeader);
    this.participants_list = Parser.parseItem(data.participantsList, LiveChatParticipantsList);
    this.popout_message = Parser.parseItem(data.popoutMessage, Message);

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
