'use strict';

const Utils = require('../utils/Utils');
const Actions = require('../core/Actions');
const Constants = require('../utils/Constants');
const YTDataItems = require('./youtube');
const YTMusicDataItems = require('./ytmusic');

class Parser {
  constructor(session, data, args = {}) {
    this.session = session;
    this.data = data;
    this.args = args;
  }

  parse() {
    const client = this.args.client;
    const data_type = this.args.data_type

    let processed_data;

    switch (client) {
      case 'YOUTUBE':
        processed_data = ({
          SEARCH: () => this.#processSearch(),
          PLAYLIST: () => this.#processPlaylist(),
          VIDEO_INFO: () => this.#processVideoInfo()
        })[data_type]()
        break;
      case 'YTMUSIC':
        processed_data = ({
          SEARCH: () => this.#processMusicSearch(),
          PLAYLIST: () => this.#processMusicPlaylist()
        })[data_type]();
        break;
      default:
        throw new Utils.InnertubeError('Invalid client');
    }

    return processed_data;
  }

  #processSearch() {
    const contents = Utils.findNode(this.data, 'contents', 'contents', 5);

    const processed_data = {};

    const parseItems = (contents) => {
      const content = contents[0].itemSectionRenderer.contents;

      processed_data.query = content[0]?.showingResultsForRenderer?.originalQuery?.simpleText || this.args.query;
      processed_data.corrected_query = content[0]?.showingResultsForRenderer?.correctedQueryEndpoint?.searchEndpoint?.query || 'N/A';
      processed_data.estimated_results = parseInt(this.data.estimatedResults);

      processed_data.videos = YTDataItems.VideoResultItem.parse(content);

      processed_data.getContinuation = async () => {
        const citem = contents.find((item) => item.continuationItemRenderer);
        const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;

        const response = await Actions.search(this.session, 'YOUTUBE', { ctoken });
        if (!response.success) throw new Utils.InnertubeError('Could not get continuation', response);

        const continuation_items = Utils.findNode(response.data, 'onResponseReceivedCommands', 'itemSectionRenderer', 4, false);
        return parseItems(continuation_items);
      };

      return processed_data;
    }

    return parseItems(contents);
  }

  #processMusicSearch() {
    const tabs = Utils.findNode(this.data, 'contents', 'tabs').tabs;
    const contents = Utils.findNode(tabs, '0', 'contents', 5);

    const did_you_mean_item = contents.find((content) => content.itemSectionRenderer);
    const did_you_mean_renderer = did_you_mean_item?.itemSectionRenderer.contents[0].didYouMeanRenderer;

    const processed_data = {
      query: '',
      corrected_query: '',
      results: {}
    };

    processed_data.query = this.args.query;
    processed_data.corrected_query = did_you_mean_renderer?.correctedQuery.runs.map((run) => run.text).join('') || 'N/A';

    contents.forEach((content) => {
      const section = content?.musicShelfRenderer;
      if (section) {
        const section_title = section.title.runs[0].text;

        const section_items = ({
          ['Top result']: () => YTMusicDataItems.TopResultItem.parse(section.contents), // console.log(JSON.stringify(section.contents, null, 4)),
          ['Songs']: () => YTMusicDataItems.SongResultItem.parse(section.contents),
          ['Videos']: () => YTMusicDataItems.VideoResultItem.parse(section.contents),
          ['Featured playlists']: () => YTMusicDataItems.PlaylistResultItem.parse(section.contents),
          ['Community playlists']: () => YTMusicDataItems.PlaylistResultItem.parse(section.contents),
          ['Artists']: () => YTMusicDataItems.ArtistResultItem.parse(section.contents),
          ['Albums']: () => YTMusicDataItems.AlbumResultItem.parse(section.contents)
        })[section_title]();

        processed_data.results[section_title.replace(/ /g, '_').toLowerCase()] = section_items;
      }
    });

    return processed_data;
  }

  #processPlaylist() {
    const details = this.data.sidebar.playlistSidebarRenderer.items[0];

    const metadata = {
      title: this.data.metadata.playlistMetadataRenderer.title,
      description: details.playlistSidebarPrimaryInfoRenderer.description.simpleText || 'N/A',
      total_items: details.playlistSidebarPrimaryInfoRenderer.stats[0].runs[0].text,
      last_updated: details.playlistSidebarPrimaryInfoRenderer.stats[2].runs[1].text,
      views: details.playlistSidebarPrimaryInfoRenderer.stats[1].simpleText
    }

    const list = Utils.findNode(this.data, 'contents', 'contents', 13, false);
    const items = YTDataItems.PlaylistItem.parse(list.contents);

    return {
      ...metadata,
      items
    }
  }

  #processMusicPlaylist() {
    const details = this.data.header.musicDetailHeaderRenderer;

    const metadata = {
      title: details?.title?.runs[0].text,
      description: details?.description?.runs?.map((run) => run.text).join('') || 'N/A',
      total_items: parseInt(details?.secondSubtitle?.runs[0].text.match(/\d+/g)),
      duration: details?.secondSubtitle?.runs[2].text,
      year: details?.subtitle?.runs[4].text
    };

    const contents = this.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
    const playlist_content = contents[0].musicPlaylistShelfRenderer.contents;

    const items = YTMusicDataItems.PlaylistItem.parse(playlist_content);

    return {
      ...metadata,
      items
    }
  }

  /**
   * Video data is parsed dynamically, so if youtube decides to add something new we won't have to change anything here.
   */
  #processVideoInfo() {
    const playability_status = this.data.playabilityStatus;

    if (playability_status.status == 'ERROR')
      throw new Error(`Could not retrieve video details: ${playability_status.status} - ${playability_status.reason}`);

    const details = this.data.videoDetails;
    const microformat = this.data.microformat.playerMicroformatRenderer;
    const streaming_data = this.data.streamingData;

    const mf_raw_data = Object.entries(microformat);
    const dt_raw_data = Object.entries(details);

    const processed_data = {
      id: '',
      title: '',
      description: '',
      thumbnail: [],
      metadata: {}
    };

    // Extracts most of the metadata
    mf_raw_data.forEach((entry) => {
      const key = Utils.camelToSnake(entry[0]);
      if (Constants.METADATA_KEYS.includes(key)) {
        key == 'view_count' && (processed_data.metadata[key] = parseInt(entry[1])) ||
          key == 'owner_profile_url' && (processed_data.metadata.channel_url = entry[1]) ||
          key == 'owner_channel_name' && (processed_data.metadata.channel_name = entry[1]) ||
          (processed_data.metadata[key] = entry[1]);
      } else {
        processed_data[key] = entry[1];
      }
    });

    // Extracts extra details 
    dt_raw_data.forEach((entry) => {
      const key = Utils.camelToSnake(entry[0]);
      if (Constants.BLACKLISTED_KEYS.includes(key)) return;
      if (Constants.METADATA_KEYS.includes(key)) {
        key == 'view_count' && (processed_data.metadata[key] = parseInt(entry[1])) ||
          (processed_data.metadata[key] = entry[1]);
      } else {
        key == 'short_description' && (processed_data.description = entry[1]) ||
          key == 'thumbnail' && (processed_data.thumbnail = entry[1].thumbnails.slice(-1)[0]) ||
          key == 'video_id' && (processed_data.id = entry[1]) ||
          (processed_data[key] = entry[1]);
      }
    });

    // Data continuation is only required for getDetails()
    if (this.data.continuation) {
      const primary_info_renderer = this.data.continuation.contents.twoColumnWatchNextResults
        .results.results.contents.find((item) => item.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer;

      const secondary_info_renderer = this.data.continuation.contents.twoColumnWatchNextResults
        .results.results.contents.find((item) => item.videoSecondaryInfoRenderer).videoSecondaryInfoRenderer;

      const like_btn = primary_info_renderer.videoActions.menuRenderer
        .topLevelButtons.find((item) => item.toggleButtonRenderer.defaultIcon.iconType == 'LIKE');

      const dislike_btn = primary_info_renderer.videoActions.menuRenderer
        .topLevelButtons.find((item) => item.toggleButtonRenderer.defaultIcon.iconType == 'DISLIKE');

      const notification_toggle_btn = secondary_info_renderer.subscribeButton.subscribeButtonRenderer
        ?.notificationPreferenceButton?.subscriptionNotificationToggleButtonRenderer;

      // These will always be false if logged out.
      processed_data.metadata.is_liked = like_btn.toggleButtonRenderer.isToggled;
      processed_data.metadata.is_disliked = dislike_btn.toggleButtonRenderer.isToggled;
      processed_data.metadata.is_subscribed = secondary_info_renderer.subscribeButton.subscribeButtonRenderer?.subscribed || false;

      processed_data.metadata.subscriber_count = secondary_info_renderer.owner.videoOwnerRenderer?.subscriberCountText?.simpleText || 'N/A';
      processed_data.metadata.current_notification_preference = notification_toggle_btn?.states.find((state) => state.stateId == notification_toggle_btn.currentStateId)
        .state.buttonRenderer.icon.iconType || 'N/A';

      // Simpler version of publish_date
      processed_data.metadata.publish_date_text = primary_info_renderer.dateText.simpleText;

      // Only parse like count if it's enabled
      if (processed_data.metadata.allow_ratings) {
        processed_data.metadata.likes = {
          count: parseInt(like_btn.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D/g, '')),
          short_count_text: like_btn.toggleButtonRenderer.defaultText.simpleText
        };
      }

      processed_data.metadata.owner_badges = secondary_info_renderer.owner.videoOwnerRenderer?.badges?.map((badge) => badge.metadataBadgeRenderer.tooltip) || [];
    }

    streaming_data && streaming_data.adaptiveFormats &&
      (processed_data.metadata.available_qualities = [...new Set(streaming_data.adaptiveFormats.filter(v => v.qualityLabel)
        .map(v => v.qualityLabel).sort((a, b) => +a.replace(/\D/gi, '') - +b.replace(/\D/gi, '')))]) ||
      (processed_data.metadata.available_qualities = []);

    return processed_data;
  }
}

module.exports = Parser;
