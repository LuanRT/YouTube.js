/**
 * DEPRECATED -
 * This parser will no longer receive updates or improvements.
 */

'use strict';

const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');
const YTDataItems = require('./youtube');
const YTMusicDataItems = require('./ytmusic');
const Proto = require('../proto');

class Parser {
  constructor(session, data, args = {}) {
    this.data = data;
    this.session = session;
    this.args = args;
  }

  parse() {
    const client = this.args.client;
    const data_type = this.args.data_type;

    let processed_data;

    switch (client) {
      case 'YOUTUBE':
        processed_data = (() => {
          switch (data_type) {
            case 'SEARCH':
              return this.#processSearch();
            case 'CHANNEL':
              return this.#processChannel();
            case 'PLAYLIST':
              return this.#processPlaylist();
            case 'SUBSFEED':
              return this.#processSubscriptionFeed();
            case 'HOMEFEED':
              return this.#processHomeFeed();
            case 'LIBRARY':
              return this.#processLibrary(); // WIP
            case 'TRENDING':
              return this.#processTrending();
            case 'HISTORY':
              return this.#processHistory();
            case 'COMMENTS':
              return this.#processComments();
            case 'VIDEO_INFO':
              return this.#processVideoInfo();
            case 'NOTIFICATIONS':
              return this.#processNotifications();
            case 'SEARCH_SUGGESTIONS':
              return this.#processSearchSuggestions();
            default:
              // This is just for maximum compatibility, this is most definitely a bad way to handle this
              throw new TypeError('undefined is not a function');
          }
        })();
        break;
      case 'YTMUSIC':
        processed_data = (() => {
          switch (data_type) {
            case 'SEARCH':
              return this.#processMusicSearch();
            case 'PLAYLIST':
              return this.#processMusicPlaylist();
            case 'SEARCH_SUGGESTIONS':
              return this.#processMusicSearchSuggestions();
            default:
              // This is just for maximum compatibility, this is most definitely a bad way to handle this
              throw new TypeError('undefined is not a function');
          }
        })();
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

        const response = await this.session.actions.search({ ctoken });

        const continuation_items = Utils.findNode(response.data, 'onResponseReceivedCommands', 'itemSectionRenderer', 4, false);
        return parseItems(continuation_items);
      };

      return processed_data;
    };

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
          ['Top result']: () => YTMusicDataItems.TopResultItem.parse(section.contents),
          ['Songs']: () => YTMusicDataItems.SongResultItem.parse(section.contents),
          ['Videos']: () => YTMusicDataItems.VideoResultItem.parse(section.contents),
          ['Featured playlists']: () => YTMusicDataItems.PlaylistResultItem.parse(section.contents),
          ['Community playlists']: () => YTMusicDataItems.PlaylistResultItem.parse(section.contents),
          ['Artists']: () => YTMusicDataItems.ArtistResultItem.parse(section.contents),
          ['Albums']: () => YTMusicDataItems.AlbumResultItem.parse(section.contents)
        }[section_title] || (() => {}))();

        processed_data.results[section_title.replace(/ /g, '_').toLowerCase()] = section_items;
      }
    });

    return processed_data;
  }

  #processSearchSuggestions() {
    return YTDataItems.SearchSuggestionItem.parse(JSON.parse(this.data.replace(')]}\'', '')));
  }

  #processMusicSearchSuggestions() {
    const contents = this.data.contents[0].searchSuggestionsSectionRenderer.contents;
    return YTMusicDataItems.MusicSearchSuggestionItem.parse(contents);
  }

  #processPlaylist() {
    const details = this.data.sidebar.playlistSidebarRenderer.items[0];

    const metadata = {
      title: this.data.metadata.playlistMetadataRenderer.title,
      description: details.playlistSidebarPrimaryInfoRenderer?.description?.simpleText || 'N/A',
      total_items: details.playlistSidebarPrimaryInfoRenderer.stats[0].runs[0]?.text || 'N/A',
      last_updated: details.playlistSidebarPrimaryInfoRenderer.stats[2].runs[1]?.text || 'N/A',
      views: details.playlistSidebarPrimaryInfoRenderer.stats[1].simpleText
    };

    const list = Utils.findNode(this.data, 'contents', 'contents', 13, false);
    const items = YTDataItems.PlaylistItem.parse(list.contents);

    return {
      ...metadata,
      items
    };
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
    };
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
        if (key == 'view_count') {
          processed_data.metadata[key] = parseInt(entry[1]);
        } else if (key == 'owner_profile_url') {
          processed_data.metadata.channel_url = entry[1];
        } else if (key == 'owner_channel_name') {
          processed_data.metadata.channel_name = entry[1];
        } else {
          processed_data.metadata[key] = entry[1];
        }
      } else {
        processed_data[key] = entry[1];
      }
    });

    // Extracts extra details
    dt_raw_data.forEach((entry) => {
      const key = Utils.camelToSnake(entry[0]);
      if (Constants.BLACKLISTED_KEYS.includes(key)) return;
      if (Constants.METADATA_KEYS.includes(key)) {
        if (key == 'view_count') {
          processed_data.metadata[key] = parseInt(entry[1]);
        } else {
          processed_data.metadata[key] = entry[1];
        }
      } else if (key == 'short_description') {
        processed_data.description = entry[1];
      } else if (key == 'thumbnail') {
        processed_data.thumbnail = entry[1].thumbnails.slice(-1)[0];
      } else if (key == 'video_id') {
        processed_data.id = entry[1];
      } else {
        processed_data[key] = entry[1];
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

    if (streaming_data && streaming_data.adaptiveFormats) {
      processed_data.metadata.available_qualities = [ ...new Set(streaming_data.adaptiveFormats.filter((v) => v.qualityLabel).map((v) => v.qualityLabel).sort((a, b) => +a.replace(/\D/gi, '') - +b.replace(/\D/gi, ''))) ];
    } else {
      processed_data.metadata.available_qualities = [];
    }

    return processed_data;
  }

  #processComments() {
    if (!this.data.onResponseReceivedEndpoints)
      throw new Utils.UnavailableContentError('Comments section not available', this.args);

    const header = Utils.findNode(this.data, 'onResponseReceivedEndpoints', 'commentsHeaderRenderer', 5, false);
    const comment_count = parseInt(header.commentsHeaderRenderer.countText.runs[0].text.replace(/,/g, ''));
    const page_count = parseInt(comment_count / 20);

    const parseComments = (data) => {
      const items = Utils.findNode(data, 'onResponseReceivedEndpoints', 'commentRenderer', 4, false);

      const response = {
        page_count,
        comment_count,
        items: []
      };

      response.items = items.map((item) => {
        const comment = YTDataItems.CommentThread.parseItem(item);
        if (comment) {
          comment.like = () => this.session.actions.engage('comment/perform_comment_action', { comment_action: 'like', comment_id: comment.metadata.id, video_id: this.args.video_id });
          comment.dislike = () => this.session.actions.engage('comment/perform_comment_action', { comment_action: 'dislike', comment_id: comment.metadata.id, video_id: this.args.video_id });
          comment.reply = (text) => this.session.actions.engage('comment/create_comment_reply', { text, comment_id: comment.metadata.id, video_id: this.args.video_id });

          comment.report = async () => {
            const payload = Utils.findNode(item, 'commentThreadRenderer', 'params', 10, false);
            const form = await this.session.actions.flag('flag/get_form', { params: payload.params });

            const action = Utils.findNode(form, 'actions', 'flagAction', 13, false);
            const flag = await this.session.actions.flag('flag/flag', { action: action.flagAction });

            return flag;
          };

          comment.getReplies = async () => {
            if (comment.metadata.reply_count === 0) throw new Utils.InnertubeError('This comment has no replies', comment);
            const payload = Proto.encodeCommentRepliesParams(this.args.video_id, comment.metadata.id);
            const next = await this.session.actions.next({ ctoken: payload });
            return parseComments(next.data);
          };

          comment.translate = async (target_language) => {
            const response = await this.session.actions.engage('comment/perform_comment_action', {
              text: comment.text,
              comment_action: 'translate',
              comment_id: comment.metadata.id,
              video_id: this.args.video_id,
              target_language
            });

            const translated_content = Utils.findNode(response.data, 'frameworkUpdates', 'content', 7, false);

            return {
              success: response.success,
              status_code: response.status_code,
              translated_content: translated_content.content
            };
          };

          return comment;
        }
      }).filter((c) => c);

      response.comment = (text) => this.session.actions.engage('comment/create_comment', { video_id: this.args.video_id, text });

      response.getContinuation = async () => {
        const continuation_item = items.find((item) => item.continuationItemRenderer);
        if (!continuation_item) throw new Utils.InnertubeError('You\'ve reached the end');

        const is_reply = !!continuation_item.continuationItemRenderer.button;
        const payload = Utils.findNode(continuation_item, 'continuationItemRenderer', 'token', is_reply ? 5 : 3);
        const next = await this.session.actions.next({ ctoken: payload.token });

        return parseComments(next.data);
      };

      return response;
    };

    return parseComments(this.data);
  }

  #processHomeFeed() {
    const contents = Utils.findNode(this.data, 'contents', 'videoRenderer', 9, false);

    const parseItems = (contents) => {
      const videos = YTDataItems.VideoItem.parse(contents);

      const getContinuation = async () => {
        const citem = contents.find((item) => item.continuationItemRenderer);
        const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;

        const response = await this.session.actions.browse(ctoken, { is_ctoken: true });

        return parseItems(response.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems);
      };

      return { videos, getContinuation };
    };

    return parseItems(contents);
  }

  #processLibrary() { // TODO: Finish this
    const profile_data = Utils.findNode(this.data, 'contents', 'profileColumnRenderer', 3);
    const stats_data = profile_data.profileColumnRenderer.items.find((item) => item.profileColumnStatsRenderer);
    const stats_items = stats_data.profileColumnStatsRenderer.items;
    const userinfo = profile_data.profileColumnRenderer.items.find((item) => item.profileColumnUserInfoRenderer);

    const stats = {};

    stats_items.forEach((item) => {
      const label = item.profileColumnStatsEntryRenderer.label.runs.map((run) => run.text).join('');
      stats[label.toLowerCase()] = parseInt(item.profileColumnStatsEntryRenderer.value.simpleText);
    });

    const profile = {
      name: userinfo.profileColumnUserInfoRenderer?.title?.simpleText,
      thumbnails: userinfo.profileColumnUserInfoRenderer?.thumbnail.thumbnails,
      stats
    };

    // Const content = Utils.findNode(this.data, 'contents', 'content', 8, false);
    // Console.info(content[0].itemSectionRenderer.contents[0].shelfRenderer);

    return {
      profile
    };
  }

  #processSubscriptionFeed() {
    const contents = Utils.findNode(this.data, 'contents', 'contents', 9, false);

    const subsfeed = { items: [] };

    const parseItems = (contents) => {
      contents.forEach((section) => {
        if (!section.itemSectionRenderer) return;

        const section_contents = section.itemSectionRenderer.contents[0];
        const section_title = section_contents.shelfRenderer.title.runs[0].text;
        const section_items = section_contents.shelfRenderer.content.gridRenderer.items;

        const items = YTDataItems.GridVideoItem.parse(section_items);

        subsfeed.items.push({
          date: section_title,
          videos: items
        });
      });

      subsfeed.getContinuation = async () => {
        const citem = contents.find((item) => item.continuationItemRenderer);
        const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;

        const response = await this.session.actions.browse(ctoken, { is_ctoken: true });

        const ccontents = Utils.findNode(response.data, 'onResponseReceivedActions', 'itemSectionRenderer', 4, false);
        subsfeed.items = [];

        return parseItems(ccontents);
      };

      return subsfeed;
    };

    return parseItems(contents);
  }

  #processChannel() {
    const tabs = this.data.contents.twoColumnBrowseResultsRenderer.tabs;
    const metadata = this.data.metadata;

    const home_tab = tabs.find((tab) => tab.tabRenderer.title == 'Home');
    const home_contents = home_tab.tabRenderer.content.sectionListRenderer.contents;
    const home_shelves = [];

    home_contents.forEach((content) => {
      if (content.itemSectionRenderer) {
        const contents = content.itemSectionRenderer.contents[0];
        const list = contents?.shelfRenderer?.content.horizontalListRenderer;
        if (!list) return; // Ignores featured channels (for now only videos & playlists are supported)

        const shelf = {
          title: contents.shelfRenderer.title.runs[0].text,
          content: []
        };

        shelf.content = list.items.map((item) => {
          if (item.gridVideoRenderer) {
            return YTDataItems.GridVideoItem.parseItem(item);
          } else if (item.gridPlaylistRenderer) {
            return YTDataItems.GridPlaylistItem.parseItem(item);
          }
        });

        home_shelves.push(shelf);
      }
    });

    const ch_info = YTDataItems.ChannelMetadata.parse(metadata);

    return {
      ...ch_info,
      content: {
        // Home page of the channel, always available in the first request.
        home_page: home_shelves,

        // TODO: Implement these (note: they require additional requests)
        getVideos: () => {},
        getPlaylists: () => {},
        getCommunity: () => {},
        getChannels: () => {},
        getAbout: () => {}
      }
    };
  }

  #processNotifications() {
    const contents = this.data.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections[0];
    if (!contents.multiPageMenuNotificationSectionRenderer) throw new Utils.InnertubeError('No notifications');

    const parseItems = (items) => {
      const parsed_items = YTDataItems.NotificationItem.parse(items);

      const getContinuation = async () => {
        const citem = items.find((item) => item.continuationItemRenderer);
        const ctoken = citem?.continuationItemRenderer?.continuationEndpoint?.getNotificationMenuEndpoint?.ctoken;

        const response = await this.session.actions.notifications('get_notification_menu', { ctoken });

        return parseItems(response.data.actions[0].appendContinuationItemsAction.continuationItems);
      };

      return { items: parsed_items, getContinuation };
    };

    return parseItems(contents.multiPageMenuNotificationSectionRenderer.items);
  }

  #processTrending() {
    const tabs = Utils.findNode(this.data, 'contents', 'tabRenderer', 4, false);
    const categories = {};

    tabs.forEach((tab) => {
      const tab_renderer = tab.tabRenderer;
      const tab_content = tab_renderer?.content;
      const category_title = tab_renderer.title.toLowerCase();

      categories[category_title] = {};

      if (tab_content) { // The “Now” category is always available
        const contents = tab_content.sectionListRenderer.contents;

        categories[category_title].content = contents.map((content) => {
          const shelf = content.itemSectionRenderer.contents[0].shelfRenderer;
          const parsed_shelf = YTDataItems.ShelfRenderer.parse(shelf);
          return parsed_shelf;
        });
      } else { // The rest can only be fetched with additional calls
        const params = tab_renderer.endpoint.browseEndpoint.params;
        categories[category_title].getVideos = async () => {
          const response = await this.session.actions.browse('FEtrending', { params });

          const tabs = Utils.findNode(response, 'contents', 'tabRenderer', 4, false);
          const tab = tabs.find((tab) => tab.tabRenderer.title === tab_renderer.title);

          const contents = tab.tabRenderer.content.sectionListRenderer.contents;
          const items = Utils.findNode(contents, 'itemSectionRenderer', 'items', 8, false);

          return YTDataItems.VideoItem.parse(items);
        };
      }
    });

    return categories;
  }

  #processHistory() {
    const contents = Utils.findNode(this.data, 'contents', 'videoRenderer', 9, false);

    const history = { items: [] };

    const parseItems = (contents) => {
      contents.forEach((section) => {
        if (!section.itemSectionRenderer) return;

        const header = section.itemSectionRenderer.header.itemSectionHeaderRenderer.title;
        const section_title = header?.simpleText || header?.runs.map((run) => run.text).join('');
        const contents = section.itemSectionRenderer.contents;

        const section_items = YTDataItems.VideoItem.parse(contents);

        history.items.push({
          date: section_title,
          videos: section_items
        });
      });

      history.getContinuation = async () => {
        const citem = contents.find((item) => item.continuationItemRenderer);
        const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;

        const response = await this.session.actions.browse(ctoken, { is_ctoken: true });

        history.items = [];

        return parseItems(response.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems);
      };

      return history;
    };

    return parseItems(contents);
  }
}

module.exports = Parser;
