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
  constructor(cookie) {
    this.cookie = cookie || '';
    this.retry_count = 0;
    return this.#init();
  }

  async #init() {
    const response = await Axios.get(Constants.URLS.YT_BASE_URL, Constants.DEFAULT_HEADERS(this)).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not retrieve Innertube session: ${response.message}`);

    try {
      const data = JSON.parse(`{${Utils.getStringBetweenStrings(response.data, 'ytcfg.set({', '});')}}`);
      if (data.INNERTUBE_CONTEXT) {
        this.context = data.INNERTUBE_CONTEXT;
        this.key = data.INNERTUBE_API_KEY;
        this.id_token = data.ID_TOKEN;
        this.session_token = data.XSRF_TOKEN;
        this.player_url = data.PLAYER_JS_URL;
        this.logged_in = data.LOGGED_IN;
        this.sts = data.STS;
        this.context.client.hl = 'en';
        this.context.client.gl = 'US';

        this.ev = new EventEmitter();

        this.player = new Player(this);
        await this.player.init();

        if (this.logged_in && this.cookie.length > 1) {
          this.auth_apisid = Utils.getStringBetweenStrings(this.cookie, 'PAPISID=', ';');
          this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
        }
      } else {
        throw new Error('Could not retrieve Innertube session due to unknown reasons');
      }
    } catch (err) {
      this.retry_count += 1;
      if (this.retry_count >= 10) throw new Error(`Could not retrieve Innertube session: ${err.message}`);
      return this.#init();
    }
    return this;
  }

  /**
   * Signs-in to a google account.
   *
   * @param {object} auth_info { refresh_token: string, access_token: string, expires: string }
   * @returns {Promise<void>}
   */
  signIn(auth_info = {}) {
    return new Promise(async (resolve, reject) => {
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

        resolve();
      } else {
        oauth.on('auth', (data) => {
          if (data.status === 'SUCCESS') {
            this.ev.emit('auth', { credentials: data.credentials, status: data.status });
            this.access_token = data.credentials.access_token;
            this.refresh_token = data.credentials.refresh_token;
            this.logged_in = true;
            resolve();
          } else {
            this.ev.emit('auth', data);
          }
        });
      }
    });
  }

  /**
   * Searches on YouTube.
   *
   * @param {string} query Search query.
   * @param {object} options { client: YOUTUBE | YTMUSIC, period: any | hour | day | week | month | year , order: relevance | rating | age | views, duration: any | short | long }
   * @returns {Promise<object>} Search results.
   */
  async search(query, options = { client: 'YOUTUBE', period: 'any', order: 'relevance', duration: 'any' }) {
    const response = await Actions.search(this, options.client, { query, options });
    if (!response.success) throw new Error(`Could not search on YouTube: ${response.message}`);

    const refined_data = new Parser(this, response.data, {
      client: options.client,
      data_type: 'SEARCH',
      query
    }).parse();

    return refined_data;
  }

  /**
  * Gets details for a video.
  *
  * @param {string} id The id of the video.
  */
  async getDetails(id) {
    if (!id) throw new Error('You must provide a video id');

    const data = await Actions.getVideoInfo(this, { id, is_desktop: false });
    const refined_data = new Parser(this, data, { client: 'YOUTUBE', data_type: 'VIDEO_INFO', desktop_v: false }).parse();

    if (refined_data.metadata.is_live_content) {
      const data_continuation = await Actions.getContinuation(this, { video_id: id });
      if (data_continuation.data.contents.twoColumnWatchNextResults.conversationBar) {
        refined_data.getLivechat = () => new Livechat(this, data_continuation.data.contents.twoColumnWatchNextResults.conversationBar.liveChatRenderer.continuations[0].reloadContinuationData.continuation, refined_data.metadata.channel_id, id);
      } else {
        refined_data.getLivechat = () => { };
      }
    } else {
      refined_data.getLivechat = () => { };
    }

    refined_data.like = () => Actions.engage(this, 'like/like', { video_id: id });
    refined_data.dislike = () => Actions.engage(this, 'like/dislike', { video_id: id });
    refined_data.removeLike = () => Actions.engage(this, 'like/removelike', { video_id: id });
    refined_data.subscribe = () => Actions.engage(this, 'subscription/subscribe', { video_id: id, channel_id: refined_data.metadata.channel_id });
    refined_data.unsubscribe = () => Actions.engage(this, 'subscription/unsubscribe', { video_id: id, channel_id: refined_data.metadata.channel_id });
    refined_data.comment = text => Actions.engage(this, 'comment/create_comment', { video_id: id, text });
    refined_data.getComments = () => this.getComments(id);
    refined_data.setNotificationPref = pref => Actions.notifications(this, 'modify_channel_preference', { channel_id: refined_data.metadata.channel_id, pref: pref || 'NONE' });

    return refined_data;
  }

  /**
  * Gets the comments section of a video.
  *
  * @param {string} video_id The id of the video.
  * @param {string} token Continuation token (optional).
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
  * Returns YouTube's home feed.
  * @returns {Promise<object>} home feed.
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
        channel: content.videoRenderer.shortBylineText && content.videoRenderer.shortBylineText.runs[0].text || 'N/A',
        metadata: {
          view_count: content.videoRenderer.viewCountText && content.videoRenderer.viewCountText.simpleText || 'N/A',
          thumbnail: content.videoRenderer.thumbnail && content.videoRenderer.thumbnail.thumbnails.slice(-1)[0] || [],
          moving_thumbnail: content.videoRenderer.richThumbnail && content.videoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0] || [],
          published: content.videoRenderer.publishedTimeText && content.videoRenderer.publishedTimeText.simpleText || 'N/A',
          badges: content.videoRenderer.badges && content.videoRenderer.badges.map((badge) => badge.metadataBadgeRenderer.label) || [],
          owner_badges: content.videoRenderer.ownerBadges && content.videoRenderer.ownerBadges.map((badge) => badge.metadataBadgeRenderer.tooltip) || []
        }
      }
    }).filter((video) => video);
  }

  /**
  * Returns your subscription feed.
  * @returns {Promise<object>} subs feed.
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
          channel: item.gridVideoRenderer.shortBylineText && item.gridVideoRenderer.shortBylineText.runs[0].text || 'N/A',
          metadata: {
            view_count: item.gridVideoRenderer.viewCountText && item.gridVideoRenderer.viewCountText.simpleText || 'N/A',
            thumbnail: item.gridVideoRenderer.thumbnail && item.gridVideoRenderer.thumbnail.thumbnails.slice(-1)[0] || [],
            published: item.gridVideoRenderer.publishedTimeText && item.gridVideoRenderer.publishedTimeText.simpleText || 'N/A',
            badges: item.gridVideoRenderer.badges && item.gridVideoRenderer.badges.map((badge) => badge.metadataBadgeRenderer.label) || 'N/A',
            owner_badges: item.gridVideoRenderer.ownerBadges && item.gridVideoRenderer.ownerBadges.map((badge) => badge.metadataBadgeRenderer.tooltip) || 'N/A'
          }
        };

        subscriptions_feed[key.toLowerCase().replace(/ +/g, '_')].push(content);
      });
    });

    return subscriptions_feed;
  }

  /**
   * Returns your notifications.
   * @returns {Promise<object>} notifications.
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
   * Returns the amount of notifications you haven't seen.
   * @returns {Promise<number>} unseen notifications count.
   */
  async getUnseenNotificationsCount() {
    const response = await Actions.notifications(this, 'get_unseen_count');
    if (!response.success) throw new Error('Could not get unseen notifications count');
    return response.data.unseenCount;
  }

  /**
   * Downloads a video from YouTube.
   * 
   * @param {string} id The id of the video.
   * @param {object} options Download options: { quality?: string, type?: string, format?: string }
   */
  download(id, options = {}) {
    if (!id) throw new Error('Missing video id');

    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    let cancel;
    let cancelled = false;

    const stream = new Stream.PassThrough();
    Actions.getVideoInfo(this, { id, is_desktop: true }).then(async (video_data) => {
      let formats = [];

      if (video_data.playabilityStatus.status === 'LOGIN_REQUIRED') return stream.emit('error', { message: 'You must login to download age-restricted videos.', error_type: 'LOGIN_REQUIRED', playability_status: video_data.playabilityStatus.status });
      if (!video_data.streamingData) return stream.emit('error', { message: 'Streaming data not available.', error_type: 'NO_STREAMING_DATA', playability_status: video_data.playabilityStatus.status });

      formats = formats.concat(video_data.streamingData.formats || []).concat(video_data.streamingData.adaptiveFormats || []);
      formats.forEach((format) => {
        format.url = format.url || format.signatureCipher || format.cipher;

        if (format.signatureCipher || format.cipher) {
          format.url = new SigDecipher(format.url, this.context.client.clientVersion, this.player).decipher();
        } else {
          const url_components = new URL(format.url);
          url_components.searchParams.set('cver', this.context.client.clientVersion);
          url_components.searchParams.set('ratebypass', 'yes');
          url_components.searchParams.set('n', new NToken(this.player.ntoken_sc).transform(url_components.searchParams.get('n')));
          format.url = url_components.toString();
        }

        format.has_audio = !!format.audioBitrate || !!format.audioQuality;
        format.has_video = !!format.qualityLabel;

        delete format.cipher;
        delete format.signatureCipher;
      });

      formats.hls_manifest_url = video_data.streamingData.hlsManifestUrl || undefined;
      formats.dash_manifest_url = video_data.streamingData.dashManifestUrl || undefined;

      let url;
      let bitrates;
      let filtered_streams;

      switch (options.type) {
        case 'video':
          filtered_streams = formats.filter((format) => format.has_video && !format.has_audio);
          break;
        case 'audio':
          filtered_streams = formats.filter((format) => format.has_audio && !format.has_video);
          break;
        case 'videoandaudio':
          filtered_streams = formats.filter((format) => format.has_video && format.has_audio);
          break;
        default:
          filtered_streams = formats.filter((format) => format.has_video && format.has_audio);
          break;
      }

      if (options.type != 'videoandaudio') {
        let streams;

        options.type != 'audio' && (streams = filtered_streams.filter((format) => format.mimeType.includes(options.format || 'mp4') && format.qualityLabel == options.quality)) ||
          (streams = filtered_streams.filter((format) => format.mimeType.includes(options.format || 'mp4')));

        streams == undefined || streams.length == 0 && (streams = filtered_streams.filter((format) => format.quality == 'medium'));

        bitrates = streams.map((format) => format.bitrate);
        url = streams.filter((format) => format.bitrate === Math.max(...bitrates))[0];
      }

      const selected_format = options.type == 'videoandaudio' ? filtered_streams[0] : url;
      if (!selected_format) {
        return stream.emit('error', { message: 'Could not find any suitable format.', type: 'FORMAT_UNAVAILABLE' });
      } else {
        const refined_data = new Parser(this, video_data, { client: 'YOUTUBE', data_type: 'VIDEO_INFO', desktop_v: true }).parse();
        stream.emit('info', { video_details: refined_data, selected_format, formats });
      }

      if (options.type == 'videoandaudio' && !options.range) {
        const response = await Axios.get(selected_format.url, {
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
          stream.emit('progress', { chunk_size: chunk.length, downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2), percentage, size, raw_data: { chunk_size: chunk.length, downloaded: downloaded_size, size: response.headers['content-length'] } });
        });

        response.data.on('error', (err) => {
          cancelled && stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' })
            || stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
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
          (chunk_end >= selected_format.contentLength || options.range) && (must_end = true);
          options.range && (selected_format.contentLength = options.range.end);

          const response = await Axios.get(`${selected_format.url}&range=${chunk_start}-${chunk_end || ''}`, {
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
            let size = (selected_format.contentLength / 1024 / 1024).toFixed(2);
            let percentage = Math.floor((downloaded_size / selected_format.contentLength) * 100);
            stream.emit('progress', { chunk_size: chunk.length, downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2), percentage, size, raw_data: { chunk_size: chunk.length, downloaded: downloaded_size, size: response.headers['content-length'] } });
          });

          response.data.on('error', (err) => {
            if (cancelled) {
              stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' });
            } else {
              stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
            }
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