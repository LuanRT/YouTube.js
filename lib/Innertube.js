'use strict';

const Axios = require('axios');
const Stream = require('stream');
const OAuth = require('./OAuth');
const Utils = require('./Utils');
const Player = require('./Player');
const NToken = require('./NToken');
const Actions = require('./Actions');
const Livechat = require('./Livechat');
const Constants = require('./Constants');
const SigDecipher = require('./Sig');
const EventEmitter = require('events');
const TimeToSeconds = require('time-to-seconds');
const CancelToken = Axios.CancelToken;

class Innertube extends EventEmitter {
  constructor(cookie) {
    super();
    this.cookie = cookie || '';
    this.retry_count = 0;
    return this.init();
  }

  async init() {
    const response = await Axios.get(Constants.URLS.YT_BASE_URL, Constants.DEFAULT_HEADERS(this)).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not extract Innertube data: ${response.message}`);

    try {
      const innertube_data = JSON.parse(`{${Utils.getStringBetweenStrings(response.data, 'ytcfg.set({', '});')}}`);
      if (innertube_data.INNERTUBE_CONTEXT) {
        this.context = innertube_data.INNERTUBE_CONTEXT;
        this.key = innertube_data.INNERTUBE_API_KEY;
        this.id_token = innertube_data.ID_TOKEN;
        this.session_token = innertube_data.XSRF_TOKEN;
        this.player_url = innertube_data.PLAYER_JS_URL;
        this.logged_in = innertube_data.LOGGED_IN;
        this.sts = innertube_data.STS;
        this.context.client.hl = 'en';
        this.context.client.gl = 'US';

        this.player = new Player(this);
        await this.player.init();

        if (this.logged_in && this.cookie.length > 1) {
          this.auth_apisid = Utils.getStringBetweenStrings(this.cookie, 'PAPISID=', ';');
          this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
        }
      } else {
        this.retry_count += 1;
        if (this.retry_count >= 10) throw new Error('Could not retrieve Innertube data');
        return this.init();
      }
    } catch (err) {
      this.retry_count += 1;
      if (this.retry_count >= 10) throw new Error('Could not retrieve Innertube data');
      return this.init();
    }
    return this;
  }

  signIn(credentials = {}) {
    return new Promise(async (resolve, reject) => {
      const oauth = new OAuth(credentials);
      if (credentials.access_token && credentials.refresh_token) {
        let token_validity = await oauth.checkTokenValidity(credentials.access_token, this);
        if (token_validity === 'VALID') {
          this.access_token = credentials.access_token;
          this.refresh_token = credentials.refresh_token;
          this.logged_in = true;
          resolve();
        } else {
          oauth.refreshAccessToken(credentials.refresh_token);
          oauth.on('refresh-token', (data) => {
            this.access_token = data.access_token;
            this.refresh_token = credentials.refresh_token;
            this.logged_in = true;
            this.emit('update-credentials', {
              access_token: data.access_token,
              refresh_token: credentials.refresh_token,
              status: data.status
            });
            resolve();
          });
        }
      } else {
        oauth.on('auth', (data) => {
          if (data.status === 'SUCCESS') {
            this.emit('auth', data);
            this.access_token = data.access_token;
            this.refresh_token = data.refresh_token;
            this.logged_in = true;
            resolve();
          } else {
            this.emit('auth', data);
          }
        });
      }
    });
  }

  async search(query, options = { period: 'any', order: 'relevance', duration: 'any' }) {
    if (!query) throw new Error('No query was provided');

    const response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/search${this.logged_in && this.cookie.length < 1 ? '' : `?key=${this.key}`}`, JSON.stringify({ context: this.context, params: Constants.filters(options.period + ',' + options.duration + ',' + options.order), query }), Constants.INNERTUBE_REQOPTS({ session: this })).catch((error) => error);
    if (response instanceof Error) throw new Error(`Could not search on YouTube: ${response.message}`);

    let content = response.data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
    let search_response = {};

    search_response.search_metadata = {};
    search_response.search_metadata.query = content[0].showingResultsForRenderer ? content[0].showingResultsForRenderer.originalQuery.simpleText : query;
    search_response.search_metadata.corrected_query = content[0].showingResultsForRenderer ? content[0].showingResultsForRenderer.correctedQueryEndpoint.searchEndpoint.query : query;
    search_response.search_metadata.estimated_results = parseInt(response.data.estimatedResults);
    search_response.videos = content.map((data) => {
      if (!data.videoRenderer) return;
      let video = data.videoRenderer;
      return {
        title: video.title.runs[0].text,
        description: video.detailedMetadataSnippets && video.detailedMetadataSnippets[0].snippetText.runs.map((item) => item.text).join('') || 'N/A',
        author: video.ownerText.runs[0].text,
        id: video.videoId,
        url: `https://youtu.be/${video.videoId}`,
        channel_url: `${Constants.URLS.YT_BASE_URL}${video.ownerText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
        metadata: {
          view_count: video.viewCountText && video.viewCountText.simpleText || 'N/A',
          short_view_count_text: {
            simple_text: video.shortViewCountText && video.shortViewCountText.simpleText || 'N/A',
            accessibility_label: video.shortViewCountText && (video.shortViewCountText.accessibility && video.shortViewCountText.accessibility.accessibilityData.label || 'N/A') || 'N/A',
          },
          thumbnails: video.thumbnail.thumbnails,
          duration: {
            seconds: TimeToSeconds(video.lengthText && video.lengthText.simpleText || '0'),
            simple_text: video.lengthText && video.lengthText.simpleText || 'N/A',
            accessibility_label: video.lengthText && video.lengthText.accessibility.accessibilityData.label || 'N/A'
          },
          published: video.publishedTimeText && video.publishedTimeText.simpleText || 'N/A',
          badges: video.badges && video.badges.map((item) => item.metadataBadgeRenderer.label) || 'N/A',
          owner_badges: video.ownerBadges && video.ownerBadges.map((item) => item.metadataBadgeRenderer.tooltip) || 'N/A '
        }
      };
    }).filter((video_block) => video_block !== undefined);
    return search_response;
  }

  async getDetails(id) {
    if (!id) return { error: 'Missing video id' };

    const data = await this.requestVideoInfo(id, false);
    const video_data = Constants.formatVideoData(data, this, false);

    if (video_data.metadata.is_live_content) {
      const data_continuation = await Actions.getContinuation(this, { video_id: id });
      if (!data_continuation.data.contents.twoColumnWatchNextResults.conversationBar) return;
      video_data.getLivechat = () => new Livechat(this, data_continuation.data.contents.twoColumnWatchNextResults.conversationBar.liveChatRenderer.continuations[0].reloadContinuationData.continuation, video_data.metadata.channel_id, id);
    } else {
      video_data.getLivechat = () => {};
    }

    video_data.like = () => Actions.engage(this, 'like/like', { video_id: id });
    video_data.dislike = () => Actions.engage(this, 'like/dislike', { video_id: id });
    video_data.removeLike = () => Actions.engage(this, 'like/removelike', { video_id: id });
    video_data.subscribe = () => Actions.engage(this, 'subscription/subscribe', { video_id: id, channel_id: video_data.metadata.channel_id });
    video_data.unsubscribe = () => Actions.engage(this, 'subscription/unsubscribe', { video_id: id, channel_id: video_data.metadata.channel_id });
    video_data.comment = text => Actions.engage(this, 'comment/create_comment', { video_id: id, text });
    video_data.getComments = () => this.getComments(id);
    video_data.setNotificationPref = pref => Actions.notifications(this, 'modify_channel_preference', { channel_id: video_data.metadata.channel_id, pref: pref || 'NONE' });

    return video_data;
  }

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

  async getSubscriptionsFeed() {
    const response = await Actions.browse(this, 'subscriptions_feed');
    if (!response.success) throw new Error('Could not fetch subscriptions feed');

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
          title: item.gridVideoRenderer.title.runs.map((run) => run.text).join(' '),
          id: item.gridVideoRenderer.videoId,
          channel: item.gridVideoRenderer.shortBylineText && item.gridVideoRenderer.shortBylineText.runs[0].text || 'N/A',
          metadata: {
            view_count: item.gridVideoRenderer.viewCountText && item.gridVideoRenderer.viewCountText.simpleText || 'N/A',
            thumbnail: item.gridVideoRenderer.thumbnail && item.gridVideoRenderer.thumbnail.thumbnails || [],
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

  async getUnseenNotificationsCount() {
    const response = await Actions.notifications(this, 'get_unseen_count');
    if (!response.success) throw new Error('Could not fetch unseen notifications count');
    return response.data.unseenCount;
  }

  async requestVideoInfo(id, desktop) {
    let response;
    !desktop && (response = await Axios.get(`${Constants.URLS.YT_WATCH_PAGE}?v=${id}&t=8s&pbj=1`, Constants.INNERTUBE_REQOPTS({ session: this, id, desktop: false })).catch((error) => error)) ||
      (response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/player${this.logged_in && this.cookie.length < 1 ? '' : `?key=${this.key}`}`, JSON.stringify(Constants.VIDEO_INFO_REQBODY(id, this.sts, this.context)), Constants.INNERTUBE_REQOPTS({ session: this, id, desktop: true })).catch((error) => error));
    if (response instanceof Error) throw new Error('Could not retrieve watch page info: ' + response.message);
    return response.data;
  }

  download(id, options = {}) {
    if (!id) throw new Error('Missing video id');

    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    let cancel;
    let cancelled = false;

    const stream = new Stream.PassThrough();
    this.requestVideoInfo(id, true).then(async (video_data) => {
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

      const video_details = Constants.formatVideoData(video_data, this, true);

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
        stream.emit('info', { video_details, selected_format, formats });
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
          if (cancelled) {
            stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' });
          } else {
            stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
          }
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