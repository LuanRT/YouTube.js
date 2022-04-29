class NavigationEndpoint {
    type = 'NavigationEndpoint'; 
    url;
    browseId;
    constructor (item) {
        this.url = 
            item.browseEndpoint?.canonicalBaseUrl ||
            item.commandMetadata.webCommandMetadata.url;
        // TODO: clean this up!
        // browseId is most likely the channel id
        this.browseId = item.browseEndpoint?.browseId;
        // this is the video id to navigate to
        this.watchVideoId = item.watchEndpoint?.videoId;
        // this is a playlist page to navigate to
        // but redirect and actually start playing it
        // see url for index (playnext and index searchParams)
        this.watchPlaylistId = item.watchPlaylistEndpoint?.playlistId;
        this.pageType = item.commandMetadata.webCommandMetadata.webPageType || 'UNKNOWN';
    }
}

module.exports = NavigationEndpoint;