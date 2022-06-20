'use strict';

const Parser = require('..');

// TODO: refactor this

class NavigationEndpoint {
  type = 'NavigationEndpoint';

  constructor(data) {
    data?.serviceEndpoint &&
      (data = data.serviceEndpoint);
    
    this.metadata = {};
    
    data?.commandMetadata?.webCommandMetadata?.url &&
      (this.metadata.url = data.commandMetadata.webCommandMetadata.url);
   
    data?.commandMetadata?.webCommandMetadata?.webPageType &&
      (this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType);
 
    data?.commandMetadata?.webCommandMetadata?.apiUrl &&
      (this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace('/youtubei/v1/', ''));
    
    data?.commandMetadata?.webCommandMetadata?.sendPost &&
      (this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost);
    
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
      }
    }
    
    if (data?.subscribeEndpoint) {
      this.subscribe = {
        channel_ids: data.subscribeEndpoint.channelIds,
        params: data.subscribeEndpoint.params
      }
    }
    
    if (data?.unsubscribeEndpoint) {
      this.unsubscribe = {
        channel_ids: data.unsubscribeEndpoint.channelIds,
        params: data.unsubscribeEndpoint.params
      }
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
      }
    }
    
    if (data?.performCommentActionEndpoint) {
      this.perform_comment_action = {
        action: data?.performCommentActionEndpoint.action
      }
    }
    
    if (data?.offlineVideoEndpoint) {
      this.offline_video = {
        video_id: data.offlineVideoEndpoint.videoId,
        on_add_command: {
          get_download_action: {
            video_id: data.offlineVideoEndpoint.videoId,
            params: data.offlineVideoEndpoint.onAddCommand.getDownloadActionCommand.params,
          }
        }
      }
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
      }
    }
    
    if (data?.watchPlaylistEndpoint) {
      this.watch_playlist = {
        playlist_id: data.watchPlaylistEndpoint?.playlistId
      }
    }
    
    if (data?.playlistEditEndpoint) {
      this.playlist_edit = {
        playlist_id: data.playlistEditEndpoint.playlistId,
        actions: data.playlistEditEndpoint.actions.map((item) => ({
          action: item.action,
          removed_video_id: item.removedVideoId 
        }))
      }
    }
    
    if (data?.addToPlaylistEndpoint) {
      this.add_to_playlist = {
        video_id: data.addToPlaylistEndpoint.videoId
      }
    }
    
    if (data?.addToPlaylistServiceEndpoint) {
      this.add_to_playlist = {
        video_id: data.addToPlaylistServiceEndpoint.videoId
      }
    }
    
    if (data?.getReportFormEndpoint) {
      this.get_report_form = {
        params: data.getReportFormEndpoint.params
      }
    }
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
          throw new Error(this.continuation.request + ' not implemented');
      }
    }
    
    if (this.search) {
      const response = await actions.search({ query: this.search.query, params: this.search.params, client });
      return Parser.parseResponse(response.data);
    }
    
    if (this.browse) {
      const args = { client };
      
      this.browse.params && 
        (args.params = this.browse.params);
      
      const response = await actions.browse(this.browse.id, args);
      return Parser.parseResponse(response.data);
    }
    
    if (this.like) {
      const response = await actions.engage(this.metadata.api_url, { video_id: this.like.target.video_id, params: this.like.params });
      return response; 
    }
  }
}

module.exports = NavigationEndpoint;