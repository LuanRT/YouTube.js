'use strict';

const Parser = require('..');

// TODO: refactor this

class NavigationEndpoint {
  type = 'NavigationEndpoint';

  constructor(data) {
    const name = Object.keys(data || {})
      .find(
        (item) =>
          item.endsWith('Endpoint') ||
          item.endsWith('Command')
      );

    this.payload = data?.[name] || {};

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
        playlist_id: data.watchPlaylistEndpoint?.playlistId
      };
    }

    if (data?.playlistEditEndpoint) {
      this.playlist_edit = {
        playlist_id: data.playlistEditEndpoint.playlistId,
        actions: data.playlistEditEndpoint.actions.map((item) => ({
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
   * Calls the endpoint. (This is an experiment and may replace {@link call()} in the future.).
   * @param {import('../../../core/Actions')} actions
   * @param {object} args
   */
  async callTest(actions, args = { parse: true, params: {} }) {
    if (!actions)
      throw new Error('An active caller must be provided');

    const response = await actions.execute(this.metadata.api_url, { ...this.payload, ...args.params });

    if (args.parse) {
      return Parser.parseResponse(response.data);
    }

    return response;
  }

  async call(actions, client) {
    if (!actions)
      throw new Error('An active caller must be provided');

    if (this.continuation) {
      switch (this.continuation.request) {
        case 'CONTINUATION_REQUEST_TYPE_BROWSE': {
          const response = await actions.browse(this.continuation.token, { is_ctoken: true });
          return Parser.parseResponse(response.data);
        }
        case 'CONTINUATION_REQUEST_TYPE_SEARCH': {
          const response = await actions.search({ ctoken: this.continuation.token });
          return Parser.parseResponse(response.data);
        }
        case 'CONTINUATION_REQUEST_TYPE_WATCH_NEXT': {
          const response = await actions.next({ ctoken: this.continuation.token });
          return Parser.parseResponse(response.data);
        }
        default:
          throw new Error(`${this.continuation.request} not implemented`);
      }
    }

    if (this.search) {
      const response = await actions.search({ query: this.search.query, params: this.search.params, client });
      return Parser.parseResponse(response.data);
    }

    if (this.browse) {
      const response = await actions.browse(this.browse.id, { ...this.browse, client });
      return Parser.parseResponse(response.data);
    }

    if (this.like) {
      const response = await actions.engage(this.metadata.api_url, { video_id: this.like.target.video_id, params: this.like.params });
      return response;
    }
  }
}

module.exports = NavigationEndpoint;