'use strict';

const Axios = require('axios');
const Stream = require('stream');
const Parser = require('./parser');
const CancelToken = Axios.CancelToken;
const EventEmitter = require('events');

const OAuth = require('./core/OAuth');
const Player = require('./core/Player');
const Actions = require('./core/Actions');
const Livechat = require('./core/Livechat');

const Utils = require('./utils/Utils');
const Request = require('./utils/Request');
const Constants = require('./utils/Constants');

const NToken = require('./deciphers/NToken');
const Signature = require('./deciphers/Signature');

class Innertube {
  #oauth;
  #player;
  #retry_count;
  
  /**
   * ```js
   * const Innertube = require('youtubei.js');
   * const youtube = await new Innertube();
   * ```
   * @param {object} [config]
   * @param {string} [config.gl]
   * @param {string} [config.cookie]
   * @returns {Innertube}
   * @constructor
   */
  constructor(config) {
    this.config = config || {};
    this.#retry_count = 0;
    return this.#init();
  }

  async #init() {
    const response = await Axios.get(Constants.URLS.YT_BASE, Constants.DEFAULT_HEADERS(this.config)).catch((error) => error);
    if (response instanceof Error) throw new Utils.InnertubeError('Could not retrieve Innertube session', { message: response.message, status_code: response.status || 0 });

    const data = JSON.parse(`{${Utils.getStringBetweenStrings(response.data, 'ytcfg.set({', '});') || ''}}`);
    if (data.INNERTUBE_CONTEXT) {
      this.key = data.INNERTUBE_API_KEY;
      this.version = data.INNERTUBE_API_VERSION;
      this.context = data.INNERTUBE_CONTEXT;

      this.player_url = data.PLAYER_JS_URL;
      this.logged_in = data.LOGGED_IN;
      this.sts = data.STS;

      this.context.client.hl = 'en';
      this.context.client.gl = this.config.gl || 'US';

      /**
       * @event Innertube#auth - Fired when signing in to an account.
       * @event Innertube#update-credentials - Fired when the access token is no longer valid.
       * @type {EventEmitter}
       */
      this.ev = new EventEmitter();
      this.#oauth = new OAuth(this.ev);
      
      this.#player = new Player(this);
      await this.#player.init();

      if (this.logged_in && this.config.cookie) {
        this.auth_apisid = Utils.getStringBetweenStrings(this.config.cookie, 'PAPISID=', ';');
        this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
      }
      
      this.request = new Request(this);
      
      this.#initMethods();
    } else {
      this.#retry_count += 1;
      if (this.#retry_count >= 10)
        throw new Utils.ParsingError('No InnerTubeContext shell provided in ytconfig.', {
          data_snippet: response.data.slice(0, 300),
          status_code: response.status || 0
        });
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
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setSubscriptions: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS, 'account_notifications', new_value),

          /**
           * Recommended content notifications.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setRecommendedVideos: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, 'account_notifications', new_value),

          /**
           * Notify about activity on your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setChannelActivity: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, 'account_notifications', new_value),

          /**
           * Notify about replies to your comments.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setCommentReplies: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.COMMENT_REPLIES, 'account_notifications', new_value),

          /**
           * Notify when others mention your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setMentions: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.USER_MENTION, 'account_notifications', new_value),

          /**
           * Notify when others share your content on their channels.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setSharedContent: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SHARED_CONTENT, 'account_notifications', new_value)
        },
        privacy: {
          /**
           * If set to true, your subscriptions won't be visible to others.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
           */
          setSubscriptionsPrivate: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, 'account_privacy', new_value),

          /**
           * If set to true, saved playlists won't appear on your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise<{ success: boolean; status_code: string; }>}
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
       * @returns {Promise<{ success: boolean; status_code: string; }>}
       */
      like: (video_id) => Actions.engage(this, 'like/like', { video_id }),

      /**
       * Diskes a given video.
       * 
       * @param {string} video_id
       * @returns {Promise<{ success: boolean; status_code: string; }>}
       */
      dislike: (video_id) => Actions.engage(this, 'like/dislike', { video_id }),

      /**
       * Removes a like/dislike.
       * 
       * @param {string} video_id 
       * @returns {Promise<{ success: boolean; status_code: string; }>} 
       */
      removeLike: (video_id) => Actions.engage(this, 'like/removelike', { video_id }),

      /**
       * Posts a comment on a given video.
       * 
       * @param {string} video_id 
       * @param {string} text 
       * @returns {Promise<{ success: boolean; status_code: string; }>}
       */
      comment: (video_id, text) => Actions.engage(this, 'comment/create_comment', { video_id, text }),

      /**
       * Subscribes to a given channel.
       * 
       * @param {string} channel_id 
       * @returns {Promise<{ success: boolean; status_code: string; }>}
       */
      subscribe: (channel_id) => Actions.engage(this, 'subscription/subscribe', { channel_id }),

      /**
       * Unsubscribes from a given channel.
       * 
       * @param {string} channel_id 
       * @returns {Promise<{ success: boolean; status_code: string; }>}
       */
      unsubscribe: (channel_id) => Actions.engage(this, 'subscription/unsubscribe', { channel_id }),

      /**
       * Changes notification preferences for a given channel.
       * Only works with channels you are subscribed to.
       * 
       * @param {string} channel_id 
       * @param {string} type PERSONALIZED | ALL | NONE
       * @returns {Promise<{ success: boolean; status_code: string; }>} 
       */
      setNotificationPreferences: (channel_id, type) => Actions.notifications(this, 'modify_channel_preference', { channel_id, pref: type || 'NONE' }),
    };

    this.playlist = {
      /**
       * Creates a playlist.
       * 
       * @param {string} title 
       * @param {string} video_id - Note that a video must be supplied, empty playlists cannot be created.
       * @returns {Promise<{ success: boolean; status_code: string; }>} 
       */
      create: (title, video_id) => Actions.engage(this, 'playlist/create', { title, video_id }),

      /**
       * Deletes a given playlist.
       * 
       * @param {string} playlist_id
       * @returns {Promise<{ success: boolean; status_code: string; }>} 
       */
      delete: (playlist_id) => Actions.engage(this, 'playlist/delete', { playlist_id }),

      /**
       * Adds videos to a given playlist.
       * 
       * @param {string} playlist_id
       * @param {Array.<string>} video_ids
       */
      addVideos: (playlist_id, video_ids) => Actions.engage(this, 'browse/edit_playlist', { action: 'ACTION_ADD_VIDEO', playlist_id, video_ids })
    };
  }

  /**
   * Internal method to perform changes on an account's settings.
   * 
   * @param {string} setting_id 
   * @param {string} type 
   * @param {string} new_value 
   * @returns {Promise<{ success: boolean; status_code: string; }>}
   */
  async #setSetting(setting_id, type, new_value) {
    const response = await Actions.browse(this, type);
    if (!response.success) return response;
    
    const contents = ({
      account_notifications: () => Utils.findNode(response.data, 'contents', 'Your preferences', 13, false).options,
      account_privacy: () => Utils.findNode(response.data, 'contents', 'settingsSwitchRenderer', 13, false).options
    })[type.trim()]();

    const option = contents.find((option) => option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);

    const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
    const set_setting = await Actions.account(this, 'account/set_setting', { new_value: type == 'account_privacy' ? !new_value : new_value, setting_item_id });

    return {
      success: set_setting.success,
      status_code: set_setting.status_code,
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
      this.#oauth.init(auth_info);

      if (this.#oauth.isValidAuthInfo()) {
        await this.#oauth.checkTokenValidity();
        this.#updateCredentials();
        return resolve();
      }
  
      this.ev.on('auth', (data) => {
        if (data.status === 'SUCCESS') {
          this.#updateCredentials();
          resolve();
        }
      });
    });
  }
  
  #updateCredentials() {
    this.access_token = this.#oauth.getAccessToken();
    this.refresh_token = this.#oauth.getRefreshToken();
    this.logged_in = true;
  }
  
  /**
   * Signs out of your account.
   * @returns {Promise.<{ success: boolean; status_code: number }>}
   */
  async signOut() {
    if (!this.logged_in) throw new Utils.InnertubeError('You are not signed in');
    const response = await this.#oauth.revokeAccessToken();
    response.success && (this.logged_in = false);
    return response;
  }

  /**
   * Returns information about the account being used.
   * @returns {Promise<{ name: string; photo: Array<object>; country: string; language: string; }>}
   */
  async getAccountInfo() {
    const response = await Actions.account(this, 'account/account_menu');
    if (!response.success) throw new Utils.InnertubeError('Could not get account info', response);

    const menu = Utils.findNode(response, 'actions', 'multiPageMenuRenderer', 6, false);

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
   * { results: { songs: []; videos: []; albums: []; community_playlists: [] } }>} 
   */
  async search(query, options = { client: 'YOUTUBE', period: 'any', order: 'relevance', duration: 'any' }) {
    const response = await Actions.search(this, options.client, { query, options });
    if (!response.success) throw new Utils.InnertubeError('Could not search on YouTube', response);
    
    const results = new Parser(this, response.data, {
      query, client: options.client,
      data_type: 'SEARCH'
    }).parse();

    return results;
  }

  /**
   * Gets search suggestions.
   * 
   * @param {string} input - The search query.
   * @param {object} [options] - Search options.
   * @param {string} [options.client='YOUTUBE'] - Client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
   * @returns {Promise.<[{ text: string; bold_text: string }]>}
   */
  async getSearchSuggestions(input, options = { client: 'YOUTUBE' }) {
    const response = await Actions.getSearchSuggestions(this, options.client, input);
    if (!response.success) throw new Utils.InnertubeError('Could not get search suggestions', response);
    if (options.client === 'YTMUSIC' && !response.data.contents) return [];

    const suggestions = new Parser(this, response.data, {
      input, client: options.client, 
      data_type: 'SEARCH_SUGGESTIONS'
    }).parse();
    
    return suggestions;
  }

  /**
   * Gets video info.
   *
   * @param {string} video_id - The id of the video.
   * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
   */
  async getDetails(video_id) {
    if (!video_id) throw new Utils.MissingParamError('Video id is missing');

    const response = await Actions.getVideoInfo(this, { id: video_id });
    const continuation = await Actions.next(this, { video_id });
    continuation.success && (response.continuation = continuation.data);

    const details = new Parser(this, response, {
      client: 'YOUTUBE', 
      data_type: 'VIDEO_INFO'
    }).parse();

    // Functions
    details.like = () => Actions.engage(this, 'like/like', { video_id });
    details.dislike = () => Actions.engage(this, 'like/dislike', { video_id });
    details.removeLike = () => Actions.engage(this, 'like/removelike', { video_id });
    details.subscribe = () => Actions.engage(this, 'subscription/subscribe', { channel_id: details.metadata.channel_id });
    details.unsubscribe = () => Actions.engage(this, 'subscription/unsubscribe', { channel_id: details.metadata.channel_id });
    details.comment = (text) => Actions.engage(this, 'comment/create_comment', { video_id, text });
    details.getComments = () => this.getComments(video_id, { channel_id: details.metadata.channel_id });
    details.getLivechat = () => new Livechat(this, continuation.data.contents?.twoColumnWatchNextResults?.conversationBar?.liveChatRenderer?.continuations?.find((continuation) => continuation.reloadContinuationData).reloadContinuationData.continuation, details.metadata.channel_id, video_id);
    details.setNotificationPreferences = (type) => Actions.notifications(this, 'modify_channel_preference', { channel_id: details.metadata.channel_id, pref: type || 'NONE' });

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
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve channel info.', response);
    
    const channel_info = new Parser(this, response.data, {
      client: 'YOUTUBE', 
      data_type: 'CHANNEL'
    }).parse();
    
    return channel_info;
  }

  /**
   * Retrieves the lyrics for a given song if available.
   * 
   * @param {string} video_id 
   * @returns {Promise.<string>} Song lyrics
   */
  async getLyrics(video_id) {
    const continuation = await Actions.next(this, { video_id: video_id, ytmusic: true });
    if (!continuation.success) throw new Utils.InnertubeError('Could not retrieve lyrics', continuation);

    const lyrics_tab = Utils.findNode(continuation, 'contents',  'Lyrics', 8, false);
    
    const response = await Actions.browse(this, 'lyrics', { ytmusic: true, browse_id: lyrics_tab.endpoint?.browseEndpoint.browseId });
    if (!response.success || !response.data?.contents?.sectionListRenderer) throw new Utils.UnavailableContentError('Lyrics not available', { video_id });
    
    const lyrics = Utils.findNode(response.data, 'contents', 'runs', 6, false);
    return lyrics.runs[0].text;
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
    if (!response.success) throw new Utils.InnertubeError('Could not get playlist', response);
    
    const playlist = new Parser(this, response.data, {
      client: options.client, 
      data_type: 'PLAYLIST'
    }).parse();
    
    return playlist;
  }

  /**
   * Gets the comments section of a video.
   *
   * @param {string} video_id - The id of the video.
   * @param {string} [data] - Video data and continuation token (optional).
   * @return {Promise.<[{ comments: []; comment_count?: string }]>
   */
  async getComments(video_id, data = {}) {
    let comment_section_token;
    
    //TODO: Refactor this and move it to the parser
    if (!data.token) {
      const continuation = await Actions.next(this, { video_id });
      if (!continuation.success) throw new Utils.InnertubeError('Could not fetch comments section', continuation);

      const contents = Utils.findNode(continuation.data, 'contents', 'comments-section', 5);
      const item_section_renderer = contents.find((item) => item.itemSectionRenderer).itemSectionRenderer;
      comment_section_token = item_section_renderer?.contents[0]?.continuationItemRenderer?.continuationEndpoint.continuationCommand.token;

      const secondary_info_renderer = contents.find((item) => item.videoSecondaryInfoRenderer).videoSecondaryInfoRenderer;
      data.channel_id = secondary_info_renderer.owner.videoOwnerRenderer.navigationEndpoint.browseEndpoint.browseId;
    }

    const response = await Actions.next(this, { continuation_token: comment_section_token || data.token });
    if (!response.success) throw new Utils.InnertubeError('Could not fetch comments section', response);
    
    const comments_section = { comments: [] };
    !data.token && (comments_section.comment_count = response.data?.onResponseReceivedEndpoints[0]?.reloadContinuationItemsCommand?.continuationItems[0]?.commentsHeaderRenderer?.countText.runs[0]?.text || 'N/A');

    let continuation_token;
    !data.token &&
      (continuation_token = response.data?.onResponseReceivedEndpoints[1]?.reloadContinuationItemsCommand?.continuationItems
        ?.find((item) => item.continuationItemRenderer)?.continuationItemRenderer?.continuationEndpoint?.continuationCommand.token) ||
      ((continuation_token = response.data?.onResponseReceivedEndpoints[0]?.appendContinuationItemsAction?.continuationItems
        ?.find((item) => item.continuationItemRenderer)?.continuationItemRenderer?.continuationEndpoint?.continuationCommand.token) ||
       (continuation_token = response.data?.onResponseReceivedEndpoints[0]?.appendContinuationItemsAction?.continuationItems
        ?.find((item) => item.continuationItemRenderer)?.continuationItemRenderer?.button.buttonRenderer.command.continuationCommand.token));

    continuation_token && (comments_section.getContinuation =
      () => this.getComments(video_id, {
        token: continuation_token,
        channel_id: data.channel_id
      }));

    let contents;
    !data.token && (contents = response.data.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems) ||
      (contents = response.data.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems);

    contents.forEach((content) => {
      const thread = content?.commentThreadRenderer?.comment.commentRenderer || content?.commentRenderer;
      if (!thread) return;
      
      // TODO: Reverse engineer this token so we can generate it manually (it's just protobuf).
      const replies_token = content?.commentThreadRenderer?.replies?.commentRepliesRenderer?.contents
        ?.find((content) => content.continuationItemRenderer.continuationEndpoint)
        ?.continuationItemRenderer.continuationEndpoint.continuationCommand.token;

      const like_btn = thread?.actionButtons?.commentActionButtonsRenderer.likeButton;
      const dislike_btn = thread?.actionButtons?.commentActionButtonsRenderer.dislikeButton;

      const comment = {
        text: thread.contentText.runs.map((t) => t.text).join(' '),
        author: {
          name: thread.authorText.simpleText,
          thumbnail: thread.authorThumbnail.thumbnails,
          channel_id: thread.authorEndpoint.browseEndpoint.browseId
        },
        metadata: {
          published: thread.publishedTimeText.runs[0].text,
          is_liked: like_btn?.toggleButtonRenderer.isToggled,
          is_disliked: dislike_btn?.toggleButtonRenderer.isToggled,
          is_pinned: thread.pinnedCommentBadge && true || false,
          is_channel_owner: thread.authorIsChannelOwner,
          like_count: thread?.voteCount?.simpleText || '0',
          reply_count: thread.replyCount || 0,
          id: thread.commentId,
        },
        like: () => Actions.engage(this, 'comment/perform_comment_action', { comment_action: 'like', comment_id: thread.commentId, video_id, channel_id: data.channel_id }),
        dislike: () => Actions.engage(this, 'comment/perform_comment_action', { comment_action: 'dislike', comment_id: thread.commentId, video_id, channel_id: data.channel_id }),
        reply: (text) => Actions.engage(this, 'comment/create_comment_reply', { text, comment_id: thread.commentId, video_id }),
        getReplies: () => this.getComments(video_id, { token: replies_token, channel_id: data.channel_id })
      };

      !replies_token && (delete comment.getReplies);

      comments_section.comments.push(comment);
    });

    return comments_section;
  }

  /**
   * Returns your watch history.
   * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
   */
  async getHistory() {
    const response = await Actions.browse(this, 'history');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve watch history', response);

    const history = new Parser(this, response, {
      client: 'YOUTUBE', 
      data_type: 'HISTORY'
    }).parse();
    
    return history;
  }

  /**
   * Returns YouTube's home feed (aka recommendations).
   * @returns {Promise.<{ videos: [{ id: string; title: string; description: string; channel: string; metadata: object }] }>}
   */
  async getHomeFeed() {
    const response = await Actions.browse(this, 'home_feed');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve home feed', response);

    const homefeed = new Parser(this, response, {
      client: 'YOUTUBE', 
      data_type: 'HOMEFEED'
    }).parse();
    
    return homefeed;
  }
  
  /**
   * Retrieves trending content.
   * @returns {Promise.<{ now: { content: [{ title: string; videos: []; }] };
   * music: { getVideos: Promise.<Array>; }; gaming: { getVideos: Promise.<Array>; };
   * gaming: { getVideos: Promise.<Array>; }; }>}
   */
  async getTrending() {
    const response = await Actions.browse(this, 'trending');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve trending content', response);
    
    const trending = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'TRENDING'
    }).parse();
    
    return trending;
  }

  /**
   * Returns your subscription feed.
   * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
   */
  async getSubscriptionsFeed() {
    const response = await Actions.browse(this, 'subscriptions_feed');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve subscriptions feed', response);

    const subsfeed = new Parser(this, response, {
      client: 'YOUTUBE', 
      data_type: 'SUBSFEED'
    }).parse();

    return subsfeed;
  }

  /**
   * Retrieves your notifications.
   * @returns {Promise.<{ items: [{ title: string; sent_time: string; channel_name: string; channel_thumbnail: {}; video_thumbnail: {}; video_url: string; read: boolean; notification_id: string }] }>}
   */
  async getNotifications() {
    const response = await Actions.notifications(this, 'get_notification_menu');
    if (!response.success) throw new Utils.InnertubeError('Could not fetch notifications', response);
    
    const notifications = new Parser(this, response.data, {
      client: 'YOUTUBE', 
      data_type: 'NOTIFICATIONS'
    }).parse();
    
    return notifications;
  }

  /**
   * Returns unseen notifications count.
   * @returns {Promise.<number>} unseen notifications count.
   */
  async getUnseenNotificationsCount() {
    const response = await Actions.notifications(this, 'get_unseen_count');
    if (!response.success) throw new Utils.InnertubeError('Could not get unseen notifications count', response);
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
        format.url = new Signature(format.url, this.#player).decipher();
      }

      const url_components = new URL(format.url);
      url_components.searchParams.set('cver', this.context.client.clientVersion);
      url_components.searchParams.set('ratebypass', 'yes');

      if (url_components.searchParams.get('n')) {
        url_components.searchParams.set('n', new NToken(this.#player.ntoken_sc, url_components.searchParams.get('n')).transform());
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
    if (!streaming_data.selected_format) throw new Utils.NoStreamingDataError('Could not find any suitable format.', { id, options });

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
    if (!id) throw new Utils.MissingParamError('Video id is missing');

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

      const video_details = new Parser(this, video_data, { client: 'YOUTUBE', data_type: 'VIDEO_INFO' }).parse();
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
