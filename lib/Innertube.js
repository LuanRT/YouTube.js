'use strict';

const Axios = require('axios');
const Stream = require('stream');
const OAuth = require('./OAuth');
const Utils = require('./Utils');
const Player = require('./Player');
const Parser = require('./Parser');
const NToken = require('./NToken');
const Actions = require('./Actions');
const Livechat = require('./Livechat');
const Constants = require('./Constants');
const SigDecipher = require('./Sig');
const EventEmitter = require('events');
const CancelToken = Axios.CancelToken;

class Innertube {
  #player;
  #retry_count;

  /**
   * ```js
   * const Innertube = require('youtubei.js');
   * const youtube = await new Innertube();
   * ```
   * @param {string} [cookie]
   * @returns {Innertube}
   * @constructor
   */
  constructor(cookie) {
    this.cookie = cookie || '';
    this.#retry_count = 0;
    return this.#init();
  }

  async #init() {
    const response = await Axios.get(Constants.URLS.YT_BASE, Constants.DEFAULT_HEADERS(this)).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not retrieve Innertube session: ${response.message}`);

    try {
      const data = JSON.parse(`{${Utils.getStringBetweenStrings(response.data, 'ytcfg.set({', '});')}}`);
      if (data.INNERTUBE_CONTEXT) {
        this.key = data.INNERTUBE_API_KEY; 
        this.version = data.INNERTUBE_API_VERSION;
        this.context = data.INNERTUBE_CONTEXT;

        this.player_url = data.PLAYER_JS_URL;
        this.logged_in = data.LOGGED_IN;
        this.sts = data.STS;

        this.context.client.hl = 'en';
        this.context.client.gl = 'US';

        /**
         * @event Innertube#auth - Fired when signing in to an account.
         * @event Innertube#update-credentials - Fired when the access token is no longer valid.
         * @type {EventEmitter}
         */
        this.ev = new EventEmitter();

        this.#player = new Player(this);
        await this.#player.init();
         
        if (this.logged_in && this.cookie.length) {
          this.auth_apisid = Utils.getStringBetweenStrings(this.cookie, 'PAPISID=', ';');
          this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
        }
        
        // Axios instances
        this.YTRequester = Axios.create({
          baseURL: Constants.URLS.YT_BASE_API + this.version,
          timeout: 15000,
          headers: Constants.INNERTUBE_HEADERS({ session: this, ytmusic: false }),
          params: { key: this.key }
        });
        
        this.YTMRequester = Axios.create({
          baseURL: Constants.URLS.YT_MUSIC_BASE_API + this.version,
          timeout: 15000,
          headers: Constants.INNERTUBE_HEADERS({ session: this, ytmusic: true }),
          params: { key: this.key }
        });
        
        this.#initMethods();
      } else {
        throw new Error('No InnerTubeContext shell provided in ytconfig.');
      }
    } catch (err) {
      this.#retry_count += 1;
      if (this.#retry_count >= 10) throw new Error(`Could not retrieve Innertube session: ${err.message}`);
      return this.#init();
    }
    return this;
  }

  #initMethods() {
    this.account = {
      info: () => this.getAccountInfo(),
      settings: {
        notifications: {
          /**
           * Notify about activity from the channels you're subscribed to.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setSubscriptions: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS, 'account_notifications', new_value),

          /**
           * Recommended content notifications.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setRecommendedVideos: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, 'account_notifications', new_value),

          /**
           * Notify about activity on your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setChannelActivity: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, 'account_notifications', new_value),

          /**
           * Notify about replies to your comments.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setCommentReplies: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.COMMENT_REPLIES, 'account_notifications', new_value),

          /**
           * Notify when others mention your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setMentions: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.USER_MENTION, 'account_notifications', new_value),

          /**
           * Notify when others share your content on their channels.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setSharedContent: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SHARED_CONTENT, 'account_notifications', new_value)
        },
        privacy: {
          /**
           * If set to true, your subscriptions won't be visible to others.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setSubscriptionsPrivate: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, 'account_privacy', new_value),

          /**
           * If set to true, saved playlists won't appear on your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{success: boolean; status_code: string; }>}
           */
          setSavedPlaylistsPrivate: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.PLAYLISTS_PRIVACY, 'account_privacy', new_value)
        }
      }
    }

    this.interact = {
      /**
       * Likes a given video.
       * 
       * @param {string} video_id
       * @returns {Promise<{success: boolean; status_code: string; }>}
       */
      like: (video_id) => Actions.engage(this, 'like/like', { video_id }),

      /**
       * Diskes a given video.
       * 
       * @param {string} video_id
       * @returns {Promise<{success: boolean; status_code: string; }>}
       */
      dislike: (video_id) => Actions.engage(this, 'like/dislike', { video_id }),

      /**
       * Removes a like/dislike.
       * 
       * @param {string} video_id 
       * @returns {Promise<{success: boolean; status_code: string; }>} 
       */
      removeLike: (video_id) => Actions.engage(this, 'like/removelike', { video_id }),

      /**
       * Posts a comment on a given video.
       * 
       * @param {string} video_id 
       * @param {string} text 
       * @returns {Promise<{success: boolean; status_code: string; }>}
       */
      comment: (video_id, text) => Actions.engage(this, 'comment/create_comment', { video_id, text }),

      /**
       * Subscribes to a given channel.
       * 
       * @param {string} channel_id 
       * @returns {Promise<{success: boolean; status_code: string; }>}
       */
      subscribe: (channel_id) => Actions.engage(this, 'subscription/subscribe', { channel_id }),

      /**
       * Unsubscribes from a given channel.
       * 
       * @param {string} channel_id 
       * @returns {Promise<{success: boolean; status_code: string; }>}
       */
      unsubscribe: (channel_id) => Actions.engage(this, 'subscription/unsubscribe', { channel_id }),

      /**
       * Changes notification preferences for a given channel.
       * Only works with channels you are subscribed to.
       * 
       * @param {string} channel_id 
       * @param {string} type PERSONALIZED | ALL | NONE
       * @returns {Promise<{success: boolean; status_code: string; }>} 
       */
      changeNotificationPreferences: (channel_id, type) => Actions.notifications(this, 'modify_channel_preference', { channel_id, pref: type || 'NONE' }),
    };
  }

  /**
   * Internal method to perform changes on an account's settings.
   * 
   * @param {string} setting_id 
   * @param {string} type 
   * @param {string} new_value 
   * @returns {Promise<{success: boolean; status_code: string; }>}
   */
  async #setSetting(setting_id, type, new_value) {
    const response = await Actions.browse(this, type);

    const contents = response.data.contents.twoColumnBrowseResultsRenderer.tabs[0]
      .tabRenderer.content.sectionListRenderer.contents[1]
      .itemSectionRenderer.contents.find((content) => content.settingsOptionsRenderer.options)
      .settingsOptionsRenderer.options;

    const option = contents.find((option) => option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);

    const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
    const set_setting = await Actions.account(this, 'account/set_setting', { new_value, setting_item_id });

    return {
      success: set_setting.success,
      status_code: response.status_code,
    }
  }

  /**
   * Signs-in to a google account.
   *
   * @param {object} auth_info
   * @param {string} auth_info.access_token - Token used to sign in.
   * @param {string} auth_info.refresh_token - Token used to get a new access token.
   * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish
   * @returns {Promise.<void>}
   */
  signIn(auth_info = {}) {
    return new Promise(async (resolve) => {
      const oauth = new OAuth(auth_info);
      if (auth_info.access_token) {
        if (!oauth.isTokenValid()) {
          const tokens = await oauth.refreshAccessToken();
          auth_info.refresh_token = tokens.credentials.refresh_token;
          auth_info.access_token = tokens.credentials.access_token;
          this.ev.emit('update-credentials', { credentials: tokens.credentials, status: tokens.status });
        }

        this.access_token = auth_info.access_token;
        this.refresh_token = auth_info.refresh_token;
        this.logged_in = true;
        
        // API key is not needed if logged in via OAuth
        delete this.YTRequester.defaults.params.key;
        delete this.YTMRequester.defaults.params.key;
        
        // Update default headers
        this.YTRequester.defaults.headers = Constants.INNERTUBE_HEADERS({ session: this, ytmusic: false });
        this.YTMRequester.defaults.headers = Constants.INNERTUBE_HEADERS({ session: this, ytmusic: true });

        resolve(); 
      } else {
        oauth.on('auth', (data) => {
          if (data.status === 'SUCCESS') {
            this.ev.emit('auth', { credentials: data.credentials, status: data.status });
            this.access_token = data.credentials.access_token;
            this.refresh_token = data.credentials.refresh_token;
            this.logged_in = true;
            
            delete this.YTRequester.defaults.params.key;
            delete this.YTMRequester.defaults.params.key;
            
            this.YTRequester.defaults.headers = Constants.INNERTUBE_HEADERS({ session: this, ytmusic: false });
            this.YTMRequester.defaults.headers = Constants.INNERTUBE_HEADERS({ session: this, ytmusic: true });

            resolve();
          } else {
            this.ev.emit('auth', data);
          }
        });
      }
    });
  }

  /**
   * Returns information about the account being used.
   * @returns {Promise<{ name: string; photo: Array<object>; country: string; language: string; }>}
   */
  async getAccountInfo() {
    const response = await Actions.account(this, 'account/account_menu');
    if (!response.success) throw new Error('Could not get account info');

    const menu = response.data.actions[0].openPopupAction.popup.multiPageMenuRenderer;

    return {
      name: menu.header.activeAccountHeaderRenderer.accountName.simpleText,
      photo: menu.header.activeAccountHeaderRenderer.accountPhoto.thumbnails,
      country: menu.sections[1].multiPageMenuSectionRenderer.items[2].compactLinkRenderer.subtitle.simpleText,
      language: menu.sections[1].multiPageMenuSectionRenderer.items[1].compactLinkRenderer.subtitle.simpleText
    }
  }

  /**
   * Searches on YouTube.
   *
   * @param {string} query - Search query.
   * @param {object} options - Search options.
   * @param {string} options.client - Client used to perform the search, can be: `YTMUSIC` or `YOUTUBE`. 
   * @param {string} options.period - Filter videos uploaded within a period, can be: any | hour | day | week | month | year
   * @param {string} options.order - Filter results by order, can be: relevance | rating | age | views
   * @param {string} options.duration - Filter video results by duration, can be: any | short | long
   * @returns {Promise.<{ query: string; corrected_query: string; estimated_results: number; videos: [] } |
   * { songs: []; videos: []; albums: []; playlists: [] }>} 
   */
  async search(query, options = { client: 'YOUTUBE', period: 'any', order: 'relevance', duration: 'any' }) {
    const response = await Actions.search(this, options.client, { query, options });
    if (!response.success) throw new Error(`Could not search on YouTube: ${response.message}`);

    const data = new Parser(this, response.data, {
      client: options.client,
      data_type: 'SEARCH',
      query
    }).parse();

    return data;
  }

  /**
   * Gets search suggestions.
   * 
   * @param {string} input - The search query.
   * @param {string} [client='YOUTUBE'] - Client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
   * @returns {Promise.<[{ text: string; bold_text: string }]>}
   */
  async getSearchSuggestions(input, { client = 'YOUTUBE' }) {
    if (client == 'YOUTUBE') {
      const response = await Actions.getYTSearchSuggestions(this, input);
      if (!response.success) throw new Error('Could not get search suggestions');

      return response.data[1].map((item) => {
        return {
          text: item.trim(),
          bold_text: response.data[0].trim()
        };
      });
    } else if (client == 'YTMUSIC') {
      const response = await Actions.music(this, 'get_search_suggestions', { input });
      if (!response.success) throw new Error('Could not get search suggestions');
      if (!response.data.contents) return [];

      const contents = response.data.contents[0].searchSuggestionsSectionRenderer.contents;
      return contents.map((item) => {
        let suggestion;

        if (item.historySuggestionRenderer) {
          suggestion = item.historySuggestionRenderer.suggestion;
        } else {
          suggestion = item.searchSuggestionRenderer.suggestion;
        }

        return {
          text: suggestion.runs.map((run) => run.text).join('').trim(),
          bold_text: suggestion.runs[0].text.trim()
        };
      });
    }
  }

  /**
  * Gets details for a video.
  *
  * @param {string} video_id - The id of the video.
  * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: {} }>}
  */
  async getDetails(video_id) {
    if (!video_id) throw new Error('You must provide a video id');

    const data = await Actions.getVideoInfo(this, { id: video_id });
    const continuation = await Actions.getContinuation(this, { video_id });
    data.continuation = continuation.data;
    
    const details = new Parser(this, data, { client: 'YOUTUBE', data_type: 'VIDEO_INFO' }).parse();

    if (details.metadata.is_live_content) {
      const data_continuation = await Actions.getContinuation(this, { video_id });
      if (data_continuation.data.contents.twoColumnWatchNextResults.conversationBar) {
        details.getLivechat = () => new Livechat(this, data_continuation.data.contents.twoColumnWatchNextResults.conversationBar.liveChatRenderer.continuations[0].reloadContinuationData.continuation, details.metadata.channel_id, video_id);
      } else {
        details.getLivechat = () => { };
      }
    } else {
      details.getLivechat = () => { };
    }
    
    // Functions
    details.like = () => Actions.engage(this, 'like/like', { video_id });
    details.dislike = () => Actions.engage(this, 'like/dislike', { video_id });
    details.removeLike = () => Actions.engage(this, 'like/removelike', { video_id });
    details.subscribe = () => Actions.engage(this, 'subscription/subscribe', { channel_id: details.metadata.channel_id });
    details.unsubscribe = () => Actions.engage(this, 'subscription/unsubscribe', { channel_id: details.metadata.channel_id });
    details.comment = (text) => Actions.engage(this, 'comment/create_comment', { video_id, text });
    details.getComments = () => this.getComments(video_id);
    details.changeNotificationPreferences = (type) => Actions.notifications(this, 'modify_channel_preference', { channel_id: details.metadata.channel_id, pref: type || 'NONE' });

    return details;
  }
  
  /**
   * Gets info about a given channel. (WIP)
   * 
   * @param {string} id - The id of the channel.
   * @return {Promise.<{ title: string; description: string; metadata: object; content: object }>}
   */
  async getChannel(id) {
    const response = await Actions.browse(this, 'channel', { browse_id: id });
    if (!response.success) throw new Error('Could not retrieve channel info.');
    
    const tabs = response.data.contents.twoColumnBrowseResultsRenderer.tabs;
    const metadata = response.data.metadata;
    
    const home_tab = tabs.find((tab) => tab.tabRenderer.title == 'Home');
    const home_contents = home_tab.tabRenderer.content.sectionListRenderer.contents;
    const home_shelves = [];
    
    home_contents.forEach((content) => {
      if(!content.itemSectionRenderer) return;
    
      const contents = content.itemSectionRenderer.contents[0];
      
      const list = contents?.shelfRenderer?.content.horizontalListRenderer;
      if (!list) return; // Will support only videos & playlists for now
      
      const shelf = {
        title: contents.shelfRenderer.title.runs[0].text,
        content: []
      };
      
      shelf.content = list.items.map((item) => {
        const renderer = item.gridVideoRenderer || item.gridPlaylistRenderer;
        if (renderer.videoId) {
          return {
            id: renderer?.videoId,
            title: renderer?.title?.simpleText,
            metadata: {
              view_count: renderer?.viewCountText?.simpleText || 'N/A',
              short_view_count_text: {
                simple_text: renderer?.shortViewCountText?.simpleText || 'N/A',
                accessibility_label: renderer?.shortViewCountText?.accessibility?.accessibilityData?.label || 'N/A',
              },
              thumbnail: renderer?.thumbnail?.thumbnails?.slice(-1)[0] || {},
              moving_thumbnail: renderer?.richThumbnail?.movingThumbnailRenderer?.movingThumbnailDetails?.thumbnails[0] || {},
              published: renderer?.publishedTimeText?.simpleText || 'N/A',
              badges: renderer?.badges?.map((badge) => badge.metadataBadgeRenderer.label) || [],
              owner_badges: renderer?.ownerBadges?.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
            }
          }
        } else {
          return {
            id: renderer?.playlistId,
            title: renderer?.title?.runs?.map((run) => run.text).join(''),
            metadata: {
              thumbnail: renderer?.thumbnail?.thumbnails?.slice(-1)[0] || {},
              video_count: renderer?.videoCountShortText?.simpleText || 'N/A',
            }
          }
        }
      });
      home_shelves.push(shelf);
    });
    
    return {
      title: metadata.channelMetadataRenderer.title,
      description: metadata.channelMetadataRenderer.description,
      metadata: {
        url: metadata.channelMetadataRenderer?.channelUrl,
        rss_urls: metadata.channelMetadataRenderer?.rssUrl,
        vanity_channel_url: metadata.channelMetadataRenderer?.vanityChannelUrl,
        external_id: metadata.channelMetadataRenderer?.externalId,
        is_family_safe: metadata.channelMetadataRenderer?.isFamilySafe,
        keywords: metadata.channelMetadataRenderer?.keywords
      },
      content: {
        // Home page of the channel, always available in the first request.
        home_page: home_shelves, 
        
        // Functions— these will need additional requests and will possibly use the parser.
        getVideos: () => {},
        getPlaylists: () => {},
        getCommunity: () => {},
        getChannels: () => {},
        getAbout: () => {}
      }
    }
  }
  
  /**
  * Retrieves the lyrics for a given song if available.
  * 
  * @param {string} video_id 
  * @returns {Promise.<string>} Song lyrics
  */
  async getLyrics(video_id) {
    const data_continuation = await Actions.getContinuation(this, { video_id: video_id, ytmusic: true });

    const lyrics_tab = data_continuation.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer
      .watchNextTabbedResultsRenderer.tabs.find((obj) => obj.tabRenderer.title == 'Lyrics');

    const response = await Actions.browse(this, 'lyrics', { ytmusic: true, browse_id: lyrics_tab.tabRenderer.endpoint.browseEndpoint.browseId });
    if (!response.data.contents.sectionListRenderer) throw new Error(response.data.contents.messageRenderer.text.runs[0].text);

    const lyrics = response.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.description.runs[0].text;
    return lyrics;
  }

  /**
   * Parses a given playlist.
   * 
   * @param {string} playlist_id - The id of the playlist.
   * @param {object} options - { client: YOUTUBE | YTMUSIC }
   * @param {string} options.client - Client used to parse the playlist, can be: `YTMUSIC` | `YOUTUBE`
   * @returns {Promise.<
   *  { title: string; description: string; total_items: string; last_updated: string; views: string; items: [] } |
   *  { title: string; description: string; total_items: number; duration: string; year: string; items: [] }>}
   */
  async getPlaylist(playlist_id, options = { client: 'YOUTUBE' }) {
    const response = await Actions.browse(this, options.client == 'YTMUSIC' ? 'music_playlist' : 'playlist', { ytmusic: options.client == 'YTMUSIC', browse_id: `VL${playlist_id}` });
    const data = new Parser(this, response.data, { client: options.client, data_type: 'PLAYLIST' }).parse();
    return data;
  }

  /**
  * Gets the comments section of a video.
  *
  * @param {string} video_id - The id of the video.
  * @param {string} [token] - Continuation token (optional).
  * @return {Promise.<[{ comments: []; comment_count: string }]>
  */
  async getComments(video_id, token) {
    let comment_section_token;

    if (!token) {
      const data_continuation = await Actions.getContinuation(this, { video_id });
      const item_section_renderer = data_continuation.data.contents.twoColumnWatchNextResults.results.results.contents.find((item) => item.itemSectionRenderer);
      comment_section_token = item_section_renderer.itemSectionRenderer.contents[0].continuationItemRenderer.continuationEndpoint.continuationCommand.token;
    }

    const response = await Actions.getContinuation(this, { continuation_token: comment_section_token || token });
    if (!response.success) throw new Error('Could not fetch comments section');

    const comments_section = { comments: [] };
    !token && (comments_section.comment_count = response.data.onResponseReceivedEndpoints[0].reloadContinuationItemsCommand.continuationItems && response.data.onResponseReceivedEndpoints[0].reloadContinuationItemsCommand.continuationItems[0].commentsHeaderRenderer.countText.runs[0].text || 'N/A');

    let continuation_token;
    !token && (continuation_token = response.data.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems.find((item) => item.continuationItemRenderer).continuationItemRenderer.continuationEndpoint.continuationCommand.token) ||
      (continuation_token = response.data.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems.find((item) => item.continuationItemRenderer).continuationItemRenderer.continuationEndpoint.continuationCommand.token);

    comments_section.getContinuation = () => this.getComments(video_id, continuation_token);

    let contents;
    !token && (contents = response.data.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems) ||
      (contents = response.data.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems);

    contents.forEach((thread) => {
      if (!thread.commentThreadRenderer) return;
      const comment = {
        text: thread.commentThreadRenderer.comment.commentRenderer.contentText.runs.map((t) => t.text).join(' '),
        author: {
          name: thread.commentThreadRenderer.comment.commentRenderer.authorText.simpleText,
          thumbnail: thread.commentThreadRenderer.comment.commentRenderer.authorThumbnail.thumbnails,
          channel_id: thread.commentThreadRenderer.comment.commentRenderer.authorEndpoint.browseEndpoint.browseId
        },
        metadata: {
          published: thread.commentThreadRenderer.comment.commentRenderer.publishedTimeText.runs[0].text,
          is_liked: thread.commentThreadRenderer.comment.commentRenderer.isLiked,
          is_channel_owner: thread.commentThreadRenderer.comment.commentRenderer.authorIsChannelOwner,
          like_count: thread.commentThreadRenderer.comment.commentRenderer.voteCount && thread.commentThreadRenderer.comment.commentRenderer.voteCount.simpleText || 'N/A',
          reply_count: thread.commentThreadRenderer.comment.commentRenderer.replyCount || 0,
          id: thread.commentThreadRenderer.comment.commentRenderer.commentId,
        }
      };
      comments_section.comments.push(comment);
    });

    return comments_section;
  }

  /**
   * Returns your watch history.
   * @returns {Promise.<[{ id: string; title: string; channel: string; metadata: {} }]>}
   */
  async getHistory() {
    const response = await Actions.browse(this, 'history');
    const contents = response.data.contents.twoColumnBrowseResultsRenderer.tabs[0]
      .tabRenderer.content.sectionListRenderer.contents;

    const history = [];

    contents.forEach((section) => {
      if (!section.itemSectionRenderer) return;
      const section_items = section.itemSectionRenderer.contents;
      section_items.forEach((item) => {
        const content = {
          id: item.videoRenderer.videoId,
          title: item.videoRenderer.title.runs.map((run) => run.text).join(' '),
          description: item.videoRenderer.descriptionSnippet && item.videoRenderer.descriptionSnippet.runs[0].text || 'N/A',
          channel: {
            name: item.videoRenderer.shortBylineText && item.videoRenderer.shortBylineText.runs[0].text || 'N/A',
            url: item.videoRenderer.shortBylineText && `${Constants.URLS.YT_BASE}${item.videoRenderer.shortBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}` || 'N/A',
          }, 
          metadata: {
            view_count: item.videoRenderer.viewCountText && item.videoRenderer.viewCountText.simpleText || 'N/A',
            short_view_count_text: {
              simple_text: item.videoRenderer.shortViewCountText && item.videoRenderer.shortViewCountText.simpleText || 'N/A',
              accessibility_label: item.videoRenderer.shortViewCountText && (item.videoRenderer.shortViewCountText.accessibility && item.videoRenderer.shortViewCountText.accessibility.accessibilityData.label || 'N/A') || 'N/A',
            },
            thumbnail: item.videoRenderer.thumbnail && item.videoRenderer.thumbnail.thumbnails.slice(-1)[0] || [],
            moving_thumbnail: item.videoRenderer.richThumbnail && item.videoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0] || [],
            published: item.videoRenderer.publishedTimeText && item.videoRenderer.publishedTimeText.simpleText || 'N/A',
            duration: {
              seconds: Utils.timeToSeconds(item.videoRenderer.lengthText && item.videoRenderer.lengthText.simpleText || '0'),
              simple_text: item.videoRenderer.lengthText && item.videoRenderer.lengthText.simpleText || 'N/A',
              accessibility_label: item.videoRenderer.lengthText && item.videoRenderer.lengthText.accessibility.accessibilityData.label || 'N/A'
            },
            badges: item.videoRenderer.badges && item.videoRenderer.badges.map((badge) => badge.metadataBadgeRenderer.label) || [],
            owner_badges: item.videoRenderer.ownerBadges && item.videoRenderer.ownerBadges.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
          }
        };
        history.push(content);
      });
    });

    return history;
  }

  /**
  * Returns YouTube's home feed (aka recommendations).
  * @returns {Promise.<[{ id: string; title: string; channel: string; metadata: {} }]>}
  */
  async getHomeFeed() {
    const response = await Actions.browse(this, 'home_feed');
    if (!response.success) throw new Error('Could not get home feed');

    const contents = response.data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents;
    
    return contents.map((item) => {
      const content = item.richItemRenderer && item.richItemRenderer.content.videoRenderer &&
        item.richItemRenderer.content || undefined;

      if (content) return {
        id: content.videoRenderer.videoId,
        title: content.videoRenderer.title.runs.map((run) => run.text).join(' '),
        description: content.videoRenderer.descriptionSnippet && content.videoRenderer.descriptionSnippet.runs[0].text || 'N/A',
        channel: {
          name: content.videoRenderer.shortBylineText && content.videoRenderer.shortBylineText.runs[0].text || 'N/A',
          url: content.videoRenderer.shortBylineText && `${Constants.URLS.YT_BASE}${content.videoRenderer.shortBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}` || 'N/A',
        }, 
        metadata: {
          view_count: content.videoRenderer.viewCountText && content.videoRenderer.viewCountText.simpleText || 'N/A',
          short_view_count_text: {
            simple_text: content.videoRenderer.shortViewCountText && content.videoRenderer.shortViewCountText.simpleText || 'N/A',
            accessibility_label: content.videoRenderer.shortViewCountText && (content.videoRenderer.shortViewCountText.accessibility && content.videoRenderer.shortViewCountText.accessibility.accessibilityData.label || 'N/A') || 'N/A',
          },
          thumbnail: content.videoRenderer.thumbnail && content.videoRenderer.thumbnail.thumbnails.slice(-1)[0] || {},
          moving_thumbnail: content.videoRenderer.richThumbnail && content.videoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0] || {},
          published: content.videoRenderer.publishedTimeText && content.videoRenderer.publishedTimeText.simpleText || 'N/A',
          duration: {
            seconds: Utils.timeToSeconds(content.videoRenderer.lengthText && content.videoRenderer.lengthText.simpleText || '0'),
            simple_text: content.videoRenderer.lengthText && content.videoRenderer.lengthText.simpleText || 'N/A',
            accessibility_label: content.videoRenderer.lengthText && content.videoRenderer.lengthText.accessibility.accessibilityData.label || 'N/A'
          },
          badges: content.videoRenderer.badges && content.videoRenderer.badges.map((badge) => badge.metadataBadgeRenderer.label) || [],
          owner_badges: content.videoRenderer.ownerBadges && content.videoRenderer.ownerBadges.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
        }
      }
    }).filter((video) => video);
  }

  /**
  * Returns your subscription feed.
  * @returns {Promise.<{ today: []; yesterday: []; this_week: [] }>}
  */
  async getSubscriptionsFeed() {
    const response = await Actions.browse(this, 'subscriptions_feed');
    if (!response.success) throw new Error('Could not get subscriptions feed');

    const contents = response.data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
    const subscriptions_feed = {};

    contents.forEach((section) => {
      if (!section.itemSectionRenderer) return;

      const section_contents = section.itemSectionRenderer.contents[0];
      const section_items = section_contents.shelfRenderer.content.gridRenderer.items;

      const key = section_contents.shelfRenderer.title.runs[0].text;
      subscriptions_feed[key.toLowerCase().replace(/ +/g, '_')] = [];

      section_items.forEach((item) => {
        const content = {
          id: item.gridVideoRenderer.videoId,
          title: item.gridVideoRenderer.title.runs.map((run) => run.text).join(' '),
          channel: {
            name: item.gridVideoRenderer.shortBylineText && item.gridVideoRenderer.shortBylineText.runs[0].text || 'N/A',
            url: item.gridVideoRenderer.shortBylineText && `${Constants.URLS.YT_BASE}${item.gridVideoRenderer.shortBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}` || 'N/A',
          }, 
          metadata: {
            view_count: item.gridVideoRenderer.viewCountText && item.gridVideoRenderer.viewCountText.simpleText || 'N/A',
            short_view_count_text: {
              simple_text: item.gridVideoRenderer.shortViewCountText && item.gridVideoRenderer.shortViewCountText.simpleText || 'N/A',
              accessibility_label: item.gridVideoRenderer.shortViewCountText && (item.gridVideoRenderer.shortViewCountText.accessibility && item.gridVideoRenderer.shortViewCountText.accessibility.accessibilityData.label || 'N/A') || 'N/A',
            },
            thumbnail: item.gridVideoRenderer.thumbnail && item.gridVideoRenderer.thumbnail.thumbnails.slice(-1)[0] || [],
            moving_thumbnail: item.gridVideoRenderer.richThumbnail && item.gridVideoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0] || {},
            published: item.gridVideoRenderer.publishedTimeText && item.gridVideoRenderer.publishedTimeText.simpleText || 'N/A',
            badges: item.gridVideoRenderer.badges && item.gridVideoRenderer.badges.map((badge) => badge.metadataBadgeRenderer.label) || [],
            owner_badges: item.gridVideoRenderer.ownerBadges && item.gridVideoRenderer.ownerBadges.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
          }
        };

        subscriptions_feed[key.toLowerCase().replace(/ +/g, '_')].push(content);
      });
    });

    return subscriptions_feed;
  }

  /**
   * Retrieves your notifications.
   * @returns {Promise.<[{ title: string; sent_time: string; channel_name: string; channel_thumbnail: {}; video_thumbnail: {}; video_url: string; read: boolean; notification_id: string }]>}
   */
  async getNotifications() {
    const response = await Actions.notifications(this, 'get_notification_menu');
    if (!response.success) throw new Error('Could not fetch notifications');

    const contents = response.data.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections[0];
    if (!contents.multiPageMenuNotificationSectionRenderer) return { error: 'You don\'t have any notification.' };
    return contents.multiPageMenuNotificationSectionRenderer.items.map((notification) => {
      if (!notification.notificationRenderer) return;
      notification = notification.notificationRenderer;
      return {
        title: notification.shortMessage.simpleText,
        sent_time: notification.sentTimeText.simpleText,
        channel_name: notification.contextualMenu.menuRenderer.items[1].menuServiceItemRenderer.text.runs[1].text,
        channel_thumbnail: notification.thumbnail.thumbnails[0],
        video_thumbnail: notification.videoThumbnail.thumbnails[0],
        video_url: `https://youtu.be/${notification.navigationEndpoint.watchEndpoint.videoId}`,
        read: notification.read,
        notification_id: notification.notificationId,
      };
    }).filter((notification_block) => notification_block);
  }

  /**
   * Returns unseen notifications count.
   * @returns {Promise.<number>} unseen notifications count.
   */
  async getUnseenNotificationsCount() {
    const response = await Actions.notifications(this, 'get_unseen_count');
    if (!response.success) throw new Error('Could not get unseen notifications count');
    return response.data.unseenCount;
  }

  /**
   * Internal method to process and filter formats.
   * 
   * @param {object} options 
   * @param {object} video_data 
   * @returns {object.<{ selected_format: {}; formats: [] }>}
   */
  #chooseFormat(options, video_data) {
    let formats = [];

    formats = formats
      .concat(video_data.streamingData.formats || [])
      .concat(video_data.streamingData.adaptiveFormats || []);

    formats.forEach((format) => {
      format.url = format.url || format.signatureCipher || format.cipher;

      if (format.signatureCipher || format.cipher) {
        format.url = new SigDecipher(format.url, this.#player).decipher();
      }

      const url_components = new URL(format.url);
      url_components.searchParams.set('cver', this.context.client.clientVersion);
      url_components.searchParams.set('ratebypass', 'yes');
      
      if (url_components.searchParams.get('n')) {
        url_components.searchParams.set('n', new NToken(this.#player.ntoken_sc).transform(url_components.searchParams.get('n')));
      }

      format.url = url_components.toString();
      format.has_audio = !!format.audioBitrate || !!format.audioQuality;
      format.has_video = !!format.qualityLabel;

      delete format.cipher;
      delete format.signatureCipher;
    });

    formats.hls_manifest_url = video_data.streamingData.hlsManifestUrl || undefined;
    formats.dash_manifest_url = video_data.streamingData.dashManifestUrl || undefined;

    let format;
    let bitrates;
    let filtered_formats;

    filtered_formats = ({
      'video': formats.filter((format) => format.has_video && !format.has_audio),
      'audio': formats.filter((format) => format.has_audio && !format.has_video),
      'videoandaudio': formats.filter((format) => format.has_video && format.has_audio)
    })[options.type] || formats.filter((format) => format.has_video && format.has_audio);

    if (options.type != 'videoandaudio') {
      let streams;

      options.type != 'audio' &&
        (streams = filtered_formats.filter((format) => format.mimeType.includes(options.format || 'mp4') && format.qualityLabel == options.quality)) ||
        (streams = filtered_formats.filter((format) => format.mimeType.includes(options.format || 'mp4')));

      streams == undefined || streams.length == 0 &&
        (streams = filtered_formats.filter((format) => format.quality == 'medium'));

      bitrates = streams.map((format) => format.bitrate);
      format = streams.filter((format) => format.bitrate === Math.max(...bitrates))[0];
    } else {
      format = filtered_formats[0];
    }

    return { selected_format: format, formats };
  }

  /**
   * An alternative to {@link download}.
   * Returns deciphered streaming data.
   * 
   * @param {string} id - The id of the video.
   * @param {object} options - Download options.
   * @param {string} options.quality - Video quality; 360p, 720p, 1080p, etc....
   * @param {string} options.type - Download type, can be: video, audio or videoandaudio
   * @param {string} options.format - File format
   * @returns {Promise.<{ selected_format: {}; formats: [] }>}
   */
  async getStreamingData(id, options = {}) {
    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    const data = await Actions.getVideoInfo(this, { id });
    const streaming_data = this.#chooseFormat(options, data);
    if (!streaming_data.selected_format) throw new Error('Could not find any suitable format.');

    return streaming_data;
  }

  /**
   * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
   * 
   * @param {string} id - The id of the video.
   * @param {object} options - Download options.
   * @param {string} options.quality - Video quality; 360p, 720p, 1080p, etc....
   * @param {string} options.type - Download type, can be: video, audio or videoandaudio
   * @param {string} options.format - File format
   * @return {ReadableStream}
   */
  download(id, options = {}) {
    if (!id) throw new Error('Missing video id');

    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    let cancel;
    let cancelled = false;

    const stream = new Stream.PassThrough();
    Actions.getVideoInfo(this, { id }).then(async (video_data) => {
      if (video_data.playabilityStatus.status === 'LOGIN_REQUIRED')
        return stream.emit('error', { message: 'You must login to download age-restricted videos.', error_type: 'LOGIN_REQUIRED', playability_status: video_data.playabilityStatus.status });
      if (!video_data.streamingData)
        return stream.emit('error', { message: 'Streaming data not available.', error_type: 'NO_STREAMING_DATA', playability_status: video_data.playabilityStatus.status });

      const { selected_format: format, formats } = this.#chooseFormat(options, video_data);

      if (!format)
        return stream.emit('error', { message: 'Could not find any suitable format.', type: 'FORMAT_UNAVAILABLE' });

      const video_details = new Parser(this, video_data, { client: 'YOUTUBE', data_type: 'VIDEO_INFO', desktop_v: true }).parse();
      stream.emit('info', { video_details, selected_format: format, formats });

      if (options.type == 'videoandaudio' && !options.range) {
        const response = await Axios.get(format.url, {
          responseType: 'stream',
          cancelToken: new CancelToken(function executor(c) { cancel = c; }),
          headers: Constants.STREAM_HEADERS
        }).catch((error) => error);

        if (response instanceof Error) {
          stream.emit('error', { message: response.message, type: 'REQUEST_FAILED' });
          return stream;
        } else {
          stream.emit('start');
        }

        let downloaded_size = 0;

        response.data.on('data', (chunk) => {
          downloaded_size += chunk.length;
          let size = (response.headers['content-length'] / 1024 / 1024).toFixed(2);
          let percentage = Math.floor((downloaded_size / response.headers['content-length']) * 100);

          stream.emit('progress', {
            size,
            percentage,
            chunk_size: chunk.length,
            downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
            raw_data: {
              chunk_size: chunk.length,
              downloaded: downloaded_size,
              size: response.headers['content-length']
            }
          });
        });

        response.data.on('error', (err) => {
          cancelled &&
            stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' }) ||
            stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
        });

        response.data.pipe(stream, { end: true });
      } else {
        const chunk_size = 1048576 * 10; // 10MB

        let chunk_start = (options.range && options.range.start || 0);
        let chunk_end = (options.range && options.range.end || chunk_size);
        let downloaded_size = 0;
        let must_end = false;

        stream.emit('start');

        const downloadChunk = async () => {
          (chunk_end >= format.contentLength || options.range) && (must_end = true);
          options.range && (format.contentLength = options.range.end);

          const response = await Axios.get(`${format.url}&range=${chunk_start}-${chunk_end || ''}`, {
            responseType: 'stream',
            cancelToken: new CancelToken(function executor(c) { cancel = c; }),
            headers: Constants.STREAM_HEADERS
          }).catch((error) => error);

          if (response instanceof Error) {
            stream.emit('error', { message: response.message, type: 'REQUEST_FAILED' });
            return stream;
          }

          response.data.on('data', (chunk) => {
            downloaded_size += chunk.length;

            let size = (format.contentLength / 1024 / 1024).toFixed(2);
            let percentage = Math.floor((downloaded_size / format.contentLength) * 100);

            stream.emit('progress', {
              size,
              percentage,
              chunk_size: chunk.length,
              downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
              raw_data: {
                chunk_size: chunk.length,
                downloaded: downloaded_size,
                size: response.headers['content-length']
              }
            });
          });

          response.data.on('error', (err) => {
            cancelled &&
              stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' }) ||
              stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
          });

          response.data.on('end', () => {
            if (!must_end && !options.range) {
              chunk_start = chunk_end + 1;
              chunk_end += chunk_size;
              downloadChunk();
            }
          });

          response.data.pipe(stream, { end: must_end });
        };

        downloadChunk();
      }
    });

    stream.cancel = () => {
      cancelled = true;
      cancel();
    };

    return stream;
  }
}

module.exports = Innertube;
