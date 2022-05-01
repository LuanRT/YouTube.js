class AppendContinuationItemsAction {
  type = 'AppendContinuationItemsAction';
    
  constructor (item) {
    this.continuation_items = ResultsParser.parse(item.continuationItems);
  }
}

class ResultsParser {
  static parseResponse(data) {
    return {
      contents: data.contents && ResultsParser.parseItem(data.contents),
      on_response_received_actions: data.onResponseReceivedActions && ResultsParser.parseRRA(data.onResponseReceivedActions) || undefined,
      metadata: data.metadata && ResultsParser.parseItem(data.metadata),
      header: data.header && ResultsParser.parseItem(data.header),
      // XXX: microformat contains meta tags for SEO?
      microformat: data.microformat && ResultsParser.parseItem(data.microformat),
    }
  }

  static parseRRA(actions) {
    return actions.map((action) => {
      if (Object.keys(action).includes('appendContinuationItemsAction'))
        return new AppendContinuationItemsAction(action.appendContinuationItemsAction);
    }).filter((item) => item);
  }

  static parse(contents) {
    return contents.map((item) => this.parseItem(item)).filter((item) => item);
  }

  static parseItem(item) {
    const renderers = {
      twoColumnSearchResultsRenderer: require('./TwoColumnSearchResults'),
      twoColumnBrowseResultsRenderer: require('./TwoColumnBrowseResults'),
      tabRenderer: require('./Tab'),
      expandableTabRenderer: require('./ExpandableTab'),
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
      itemSectionRenderer: require('./GenericList')('ItemSection'),
      universalWatchCardRenderer: require('./UniversalWatchCard'),
      watchCardRichHeaderRenderer: require('./WatchCardRichHeader'),
      watchCardHeroVideoRenderer: require('./WatchCardHeroVideo'),
      collageHeroImageRenderer: require('./CollageHeroImage'),
      watchCardSectionSequenceRenderer: require('./WatchCardSectionSequence'),
      verticalWatchCardListRenderer: require('./GenericList')('VerticalWatchCardList', 'items'),
      horizontalCardListRenderer: require('./HorizontalCardList'),
      watchCardCompactVideoRenderer: require('./WatchCardCompactVideo'),
      searchRefinementCardRenderer: require('./SearchRefinementCard'),
      channelVideoPlayerRenderer: require('./ChannelVideoPlayer'),
      gridVideoRenderer: require('./GridVideo'),
      gridChannelRenderer: require('./GridChannel'),
      reelShelfRenderer: require('./ReelShelf'),
      reelItemRenderer: require('./ReelItem'),
      gridRenderer: require('./GenericList')('Grid', 'items'),
      gridPlaylistRenderer: require('./GridPlaylist'),
      backstagePostThreadRenderer: require('./BackstagePostThread'),
      backstagePostRenderer: require('./BackstagePost'),
      backstageImageRenderer: require('./BackstageImage'),
      commentActionButtonsRenderer: require('./CommentActionButtons'),
      buttonRenderer: require('./Button'),
      toggleButtonRenderer: require('./ToggleButton'),
      continuationItemRenderer: require('./ContinuationItem'),
      channelAboutFullMetadataRenderer: require('./ChannelAboutFullMetadata'),
      playlistVideoListRenderer: require('./PlaylistVideoList'),
      playlistVideoRenderer: require('./PlaylistVideo'),
      richGridRenderer: require('./RichGrid'),
      feedFilterChipBarRenderer: require('./GenericList')('FeedFilterChipBar'),
      chipCloudChipRenderer: require('./ChipCloudChip'),
      richItemRenderer: require('./GenericContainer')('RichItem'),
      richShelfRenderer: require('./RichShelf'),
      richSectionRenderer: require('./GenericContainer')('RichSection'),
      twoColumnWatchNextResults: require('./TwoColumnWatchNextResults'),
      videoPrimaryInfoRenderer: require('./VideoPrimaryInfo'),
      menuRenderer: require('./Menu'),
      menuNavigationItemRenderer: require('./MenuNavigationItem'),
      menuServiceItemRenderer: require('./MenuServiceItem'),
      videoSecondaryInfoRenderer: require('./VideoSecondaryInfo'),
      videoOwnerRenderer: require('./VideoOwner'),
      metadataRowContainerRenderer: require('./MetadataRowContainer'),
      metadataRowHeaderRenderer: require('./MetadataRowHeader'),
      metadataRowRenderer: require('./MetadataRow'),
      compactVideoRenderer: require('./CompactVideo'),
      playlistPanelVideoRenderer: require('./PlaylistPanelVideo'),
      movingThumbnailRenderer: require('./MovingThumbnail'),
      expandedShelfContentsRenderer: require('./GenericList')('ExpandedShelfContents', 'items'),
      channelMetadataRenderer: require('./ChannelMetadata'),
    }

    const keys = Reflect.ownKeys(item);
    if (keys.length !== 1) return null; 

    if (!renderers.hasOwnProperty(keys[0])) {
      console.warn('No renderer found for type: ', keys[0]);
      return null;
    }

    const result = new renderers[keys[0]](item[keys[0]]);
    return result;
  }
}

module.exports = ResultsParser;