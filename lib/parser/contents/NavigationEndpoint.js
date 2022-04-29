class NavigationEndpoint {
    type = 'NavigationEndpoint'; 
    url;
    browseId;
    constructor (item) {
        this.url = 
            item.browseEndpoint?.canonicalBaseUrl ||
            item.commandMetadata.webCommandMetadata.url;
        // TODO: clean this up!
        this.browse = item.browseEndpoint ? {
            browseId: item.browseEndpoint.browseId,
            params: item.browseEndpoint.params,
            base_url: item.browseEndpoint.canonicalBaseUrl
        } : null;
        // this is the video id to navigate to
        this.watchVideoId = item.watchEndpoint?.videoId;
        // this is a playlist page to navigate to
        // but redirect and actually start playing it
        // see url for index (playnext and index searchParams)
        this.watchPlaylistId = item.watchPlaylistEndpoint?.playlistId;
        // reels have their own navigation endpoint for some reason
        this.watchReelId = item.reelWatchEndpoint?.videoId;
        this.pageType = item.commandMetadata.webCommandMetadata.webPageType || 'UNKNOWN';
    }
}

module.exports = NavigationEndpoint;