const ResultsParser = require('.');
const { InnertubeError } = require('../../utils/Utils');
const Actions = require('../../core/Actions');

class NavigationEndpoint {
  type = 'NavigationEndpoint'; 

  constructor (item) {
    this.metadata = {
      api_url: item.commandMetadata.webCommandMetadata.api_url,
      url: item.commandMetadata.webCommandMetadata.url,
      send_post: item.commandMetadata.webCommandMetadata.sendPost,
      page_type: item.commandMetadata.webCommandMetadata.webPageType,
    }
    // TODO: clean this up!
    this.browse = item.browseEndpoint ? {
      browseId: item.browseEndpoint.browseId,
      params: item.browseEndpoint.params,
      base_url: item.browseEndpoint.canonicalBaseUrl
    } : null;
    // this is the video id to navigate to
    this.watchVideo = item.watchEndpoint ? {
      video_id: item.watchEndpoint.videoId,
      playlist_id: item.watchEndpoint.playlistId,
      index: item.watchEndpoint.index, // this is the video index in the playlist
      params: item.watchEndpoint.params,
    } : null;
    // this is a search button
    this.search = item.searchEndpoint ? {
      query: item.searchEndpoint.query,
      params: item.searchEndpoint.params || null,
    } : null;
    // this is a playlist page to navigate to
    // but redirect and actually start playing it
    // see url for index (playnext and index searchParams)
    this.watchPlaylist = item.watchPlaylistEndpoint?.playlistId;
    // reels have their own navigation endpoint for some reason
    this.watchReel = item.reelWatchEndpoint ? {
      video_id: item.reelWatchEndpoint.videoId,
      player_params: item.reelWatchEndpoint.playerParams,
      params: item.reelWatchEndpoint.params,
      sequence_provider: item.reelWatchEndpoint.sequenceProvider,
      sequence_params: item.reelWatchEndpoint.sequenceParams,
    } : null;
    // external url
    this.url = item.urlEndpoint ? {
      url: new URL(item.urlEndpoint.url),
      target: item.urlEndpoint.target,
      nofollow: item.urlEndpoint.nofollow || false
    } : null;
    // continuations
    this.continuation = item.continuationCommand ? {
      request: item.continuationCommand.request, // 'CONTINUATION_REQUEST_TYPE_BROWSE' -> filter the browse results on home_feed?
      token: item.continuationCommand.token,
      trigger: item.trigger // TODO: is this the right place for this?
    } : null;
    this.is_reveal_business_emal = !!item.revealBusinessEmailCommand;
    // TODO: sign in endpoints

    // TODO: modal endpoints cleanup
    const modalRenderer = item.modalEndpoint?.moadlWithTitleAndButtonRenderer;
    this.modal = modalRenderer ? {
      title: modalRenderer.title,
      button: ResultsParser.parseItem(modalRenderer.button),
      content: modalRenderer.content,
    } : null;
  }

  /**
   * 
   * @param {import('../../Innertube')} session 
   * @returns 
   */
  call(session) {
    if (this.continuation) {
      switch (this.continuation.request) {
        case 'CONTINUATION_REQUEST_TYPE_BROWSE':
          return session.actions.browse(this.continuation.token, { is_ctoken: true });
            
        default:
          throw new InnertubeError(`Unknown continuation request type: ${this.continuation.request}`);
      }
    }

    if (this.browse) {
      return session.actions.browse(this.browse.browseId, { params: this.browse.params });
    }
  }
}

module.exports = NavigationEndpoint;