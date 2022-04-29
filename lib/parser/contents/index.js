class ResultsParser {
    static parse(results) {
        return results.map((item) => this.parseItem(item)).filter((item) => item);
    }

    static parseItem(item) {
        const renderers = {
            twoColumnSearchResultsRenderer: require('./TwoColumnSearchResults'),
            videoRenderer: require('./Video'),
            metadataBadgeRenderer: require('./MetadataBadge'),
            channelRenderer: require('./Channel'),
            playlistRenderer: require('./Playlist'),
            childVideoRenderer: require('./ChildVideo'),
            radioRenderer: require('./Mix'),
            shelfRenderer: require('./Shelf'),
            verticalListRenderer: require('./VerticalList'),
            horizontalListRenderer: require('./HorizontalList'),
            sectionListRenderer: require('./GenericList')('SectionList'),
            secondarySearchContainerRenderer: require('./GenericList')('SecondarySearchContainer'),
            itemSectionRenderer: require('./GenericList')('SecondarySearchContainer'),
            universalWatchCardRenderer: require('./UniversalWatchCard'),
            watchCardRichHeaderRenderer: require('./WatchCardRichHeader'),
            watchCardHeroVideoRenderer: require('./WatchCardHeroVideo'),
            collageHeroImageRenderer: require('./CollageHeroImage'),
            watchCardSectionSequenceRenderer: require('./WatchCardSectionSequence'),
            verticalWatchCardListRenderer: require('./GenericList')('VerticalWatchCardList', 'items'),
            horizontalCardListRenderer: require('./HorizontalCardList'),
            watchCardCompactVideoRenderer: require('./WatchCardCompactVideo'),
            searchRefinementCardRenderer: require('./SearchRefinementCard'),
        }

        const keys = Reflect.ownKeys(item);
        if (keys.length !== 1) return null; 

        if (!renderers.hasOwnProperty(keys[0])) {
            console.warn('No renderer found for type: ', keys[0]);
            return null;
        }

        const result = new renderers[keys[0]](item[keys[0]]);
        if (keys[0] === 'shelfRenderer')
            console.log(result);
        return result;
    }
}

module.exports = ResultsParser;