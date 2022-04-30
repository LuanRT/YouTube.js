class NavigationEndpoint {
    type = 'NavigationEndpoint'; 
    url;
    constructor (item) {
        // TODO: safely remove this:
        this.url = item.commandMetadata.webCommandMetadata.url;
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
        this.watchVideoId = item.watchEndpoint ? {
            videoId: item.watchEndpoint.videoId,
            playlistId: item.watchEndpoint.playlistId
        } : null;
        // this is a search button
        this.search = item.searchEndpoint ? {
            query: item.searchEndpoint.query,
            params: item.searchEndpoint.params || null,
        } : null;
        // this is a playlist page to navigate to
        // but redirect and actually start playing it
        // see url for index (playnext and index searchParams)
        this.watchPlaylistId = item.watchPlaylistEndpoint?.playlistId;
        // reels have their own navigation endpoint for some reason
        this.watchReelId = item.reelWatchEndpoint?.videoId;
        // external url
        this.url = item.urlEndpoint ? {
            url: new URL(item.urlEndpoint.url),
            target: item.urlEndpoint.target,
            nofollow: item.urlEndpoint.nofollow || false
        } : null;
        // continuations
        this.continuation = item.continuationCommand ? {
            request: item.continuationCommand.request,
            token: item.continuationCommand.token,
            trigger: item.trigger // TODO: is this the right place for this?
        } : null;
    }
}

module.exports = NavigationEndpoint;