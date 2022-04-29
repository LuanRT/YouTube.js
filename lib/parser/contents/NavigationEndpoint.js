class NavigationEndpoint {
    type = 'NavigationEndpoint'; 
    url;
    browseId;
    constructor (item) {
        this.url = 
            item.browseEndpoint.canonicalBaseUrl ||
            item.commandMetadata.webCommandMetadata.url;
        this.browseId = item.browseEndpoint.browseId;
        this.pageType = item.commandMetadata.webCommandMetadata.webPageType || 'UNKNOWN';
    }
}

module.exports = NavigationEndpoint;