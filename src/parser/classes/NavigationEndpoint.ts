// TODO: refactor this
import { YTNode } from '../helpers';
import Parser, { ParsedResponse } from '../index';
import Actions, { ActionsResponse } from '../../core/Actions';
import CreatePlaylistDialog from './CreatePlaylistDialog';

class NavigationEndpoint extends YTNode {
  static type = 'NavigationEndpoint';

  payload;
  dialog?;

  metadata: {
    url?: string;
    api_url?: string;
    page_type?: string;
    send_post?: boolean; // TODO: is this a boolean?
  };

  // TODO: these should be given proper types, currently infered
  browse?: {
    id: string,
    params: string | null,
    base_url: string | null,
    page_type: string | null,
    form_data?: {}
  };
  watch;
  search;
  subscribe;
  unsubscribe;
  like;
  perform_comment_action;
  offline_video;
  continuation;
  feedback;
  watch_playlist;
  playlist_edit;
  add_to_playlist;
  create_playlist;
  get_report_form;
  live_chat_item_context_menu;
  send_live_chat_vote;

  constructor(data: any) {
    super();

    // This is only present in Android nav endpoints
    if (Reflect.has(data || {}, 'innertubeCommand'))
      data = data.innertubeCommand;

    const name = Object.keys(data || {})
      .find((item) =>
        item.endsWith('Endpoint') ||
        item.endsWith('Command')
      );

    this.payload = name ? Reflect.get(data, name) : {};

    if (Reflect.has(this.payload, 'dialog')) {
      this.dialog = Parser.parse(this.payload.dialog);
    }

    if (data?.serviceEndpoint) {
      data = data.serviceEndpoint;
    }

    this.metadata = {};

    if (data?.commandMetadata?.webCommandMetadata?.url) {
      this.metadata.url = data.commandMetadata.webCommandMetadata.url;
    }

    if (data?.commandMetadata?.webCommandMetadata?.webPageType) {
      this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
    }

    if (data?.commandMetadata?.webCommandMetadata?.apiUrl) {
      this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace('/youtubei/v1/', '');
    } else if (name) {
      this.metadata.api_url = this.getEndpoint(name);
    }

    if (data?.commandMetadata?.webCommandMetadata?.sendPost) {
      this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
    }

    if (data?.browseEndpoint) {
      const configs = data?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig;
      this.browse = {
        id: data?.browseEndpoint?.browseId || null,
        params: data?.browseEndpoint.params || null,
        base_url: data?.browseEndpoint?.canonicalBaseUrl || null,
        page_type: configs?.pageType || null
      };
    }

    if (data?.watchEndpoint) {
      const configs = data?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig;
      this.watch = {
        video_id: data?.watchEndpoint?.videoId,
        playlist_id: data?.watchEndpoint.playlistId || null,
        params: data?.watchEndpoint.params || null,
        index: data?.watchEndpoint.index || null,
        supported_onesie_config: data?.watchEndpoint?.watchEndpointSupportedOnesieConfig,
        music_video_type: configs?.musicVideoType || null
      };
    }

    if (data?.searchEndpoint) {
      this.search = {
        query: data.searchEndpoint.query,
        params: data.searchEndpoint.params
      };
    }

    if (data?.subscribeEndpoint) {
      this.subscribe = {
        channel_ids: data.subscribeEndpoint.channelIds,
        params: data.subscribeEndpoint.params
      };
    }

    if (data?.unsubscribeEndpoint) {
      this.unsubscribe = {
        channel_ids: data.unsubscribeEndpoint.channelIds,
        params: data.unsubscribeEndpoint.params
      };
    }

    if (data?.likeEndpoint) {
      this.like = {
        status: data.likeEndpoint.status,
        target: {
          video_id: data.likeEndpoint.target.videoId,
          playlist_id: data.likeEndpoint.target.playlistId
        },
        params:
          data.likeEndpoint?.removeLikeParams ||
          data.likeEndpoint?.likeParams ||
          data.likeEndpoint?.dislikeParams
      };
    }

    if (data?.performCommentActionEndpoint) {
      this.perform_comment_action = {
        action: data?.performCommentActionEndpoint.action
      };
    }

    if (data?.offlineVideoEndpoint) {
      this.offline_video = {
        video_id: data.offlineVideoEndpoint.videoId,
        on_add_command: {
          get_download_action: {
            video_id: data.offlineVideoEndpoint.videoId,
            params: data.offlineVideoEndpoint.onAddCommand.getDownloadActionCommand.params
          }
        }
      };
    }

    if (data?.continuationCommand) {
      this.continuation = {
        request: data?.continuationCommand?.request || null,
        token: data?.continuationCommand?.token || null
      };
    }

    if (data?.feedbackEndpoint) {
      this.feedback = {
        token: data.feedbackEndpoint.feedbackToken
      };
    }

    if (data?.watchPlaylistEndpoint) {
      this.watch_playlist = {
        playlist_id: data.watchPlaylistEndpoint?.playlistId,
        params: data.watchPlaylistEndpoint?.params || null
      };
    }

    if (data?.playlistEditEndpoint) {
      this.playlist_edit = {
        playlist_id: data.playlistEditEndpoint.playlistId,
        actions: data.playlistEditEndpoint.actions.map((item: any) => ({
          action: item.action,
          removed_video_id: item.removedVideoId
        }))
      };
    }

    if (data?.addToPlaylistEndpoint) {
      this.add_to_playlist = {
        video_id: data.addToPlaylistEndpoint.videoId
      };
    }

    if (data?.addToPlaylistServiceEndpoint) {
      this.add_to_playlist = {
        video_id: data.addToPlaylistServiceEndpoint.videoId
      };
    }

    if (data?.createPlaylistEndpoint) {
      if (data?.createPlaylistEndpoint.createPlaylistDialog) {
        this.dialog = Parser.parseItem(data?.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog);
      }
      this.create_playlist = {
        // Nothing to put here - data.createPlaylistEndpoint has only one prop `createPlaylistDialog`
        // Which was already parsed and referred to by `this.dialog`. But still useful to have this as
        // A quick indicator of what the endpoint does.
      };
    }

    if (data?.getReportFormEndpoint) {
      this.get_report_form = {
        params: data.getReportFormEndpoint.params
      };
    }

    if (data?.liveChatItemContextMenuEndpoint) {
      this.live_chat_item_context_menu = {
        params: data?.liveChatItemContextMenuEndpoint?.params
      };
    }

    if (data?.sendLiveChatVoteEndpoint) {
      this.send_live_chat_vote = {
        params: data.sendLiveChatVoteEndpoint.params
      };
    }

    if (data?.liveChatItemContextMenuEndpoint) {
      this.live_chat_item_context_menu = {
        params: data.liveChatItemContextMenuEndpoint.params
      };
    }
  }

  /**
   * Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.
   */
  getEndpoint(name: string) {
    switch (name) {
      case 'browseEndpoint':
        return '/browse';
      case 'watchEndpoint':
        return '/player';
      case 'watchPlaylistEndpoint':
        return '/next';
    }
  }

  callTest(actions: Actions, args: { [ key: string ]: any; parse: true }): Promise<ParsedResponse>;
  callTest(actions: Actions, args?: { [ key: string ]: any; parse?: false }): Promise<ActionsResponse>;
  callTest(actions: Actions, args?: { [ key: string ]: any; parse?: boolean }): Promise<ParsedResponse | ActionsResponse> {
    if (!actions)
      throw new Error('An active caller must be provided');
    if (!this.metadata.api_url)
      throw new Error('Expected an api_url, but none was found, this is a bug.');
    return actions.execute(this.metadata.api_url, { ...this.payload, ...args });
  }

  // TODO: replace client with an enum or something
  async #call(actions: Actions, client?: string) {
    if (!actions)
      throw new Error('An active caller must be provided');

    if (this.continuation) {
      switch (this.continuation.request) {
        case 'CONTINUATION_REQUEST_TYPE_BROWSE': {
          return await actions.browse(this.continuation.token, { is_ctoken: true });
        }
        case 'CONTINUATION_REQUEST_TYPE_SEARCH': {
          return await actions.search({ ctoken: this.continuation.token });
        }
        case 'CONTINUATION_REQUEST_TYPE_WATCH_NEXT': {
          return await actions.next({ ctoken: this.continuation.token });
        }
        default:
          throw new Error(`${this.continuation.request} not implemented`);
      }
    }

    if (this.search) {
      return await actions.search({ query: this.search.query, params: this.search.params, client });
    }

    if (this.browse) {
      return await actions.browse(this.browse.id, { ...this.browse, client });
    }

    if (this.like) {
      if (!this.metadata.api_url)
        throw new Error('Like endpoint requires an api_url, but was not parsed from the response.');
      const response = await actions.engage(this.metadata.api_url, { video_id: this.like.target.video_id, params: this.like.params });
      return response;
    }
  }

  async call(actions: Actions, client: string | undefined, parse: true) : Promise<ParsedResponse | undefined>;
  async call(actions: Actions, client?: string, parse?: false) : Promise<ActionsResponse | undefined>;
  async call(actions: Actions, client?: string, parse?: boolean): Promise<ParsedResponse | ActionsResponse | undefined> {
    const result = await this.#call(actions, client);

    if (parse && result)
      return Parser.parseResponse(result.data);

    return this.#call(actions, client);
  }
}

export default NavigationEndpoint;