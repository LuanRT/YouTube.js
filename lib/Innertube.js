'use strict';

const Axios = require('axios');
const Stream = require('stream');
const OAuth = require('./OAuth');
const Utils = require('./Utils');
const Player = require('./Player');
const Actions = require('./Actions');
const Livechat = require('./Livechat');
const Constants = require('./Constants');
const SigDecipher = require('./SigDecipher');
const EventEmitter = require('events');
const TimeToSeconds = require('time-to-seconds');
const CancelToken = Axios.CancelToken;

class Innertube extends EventEmitter {
  constructor(cookie) {
    super();
    this.cookie = cookie || '';
    return this.init();
  }

  async init() {
    const response = await Axios.get(Constants.urls.YT_BASE_URL, Constants.default_headers(this)).catch((error) => error);
    if (response instanceof Error) throw new Error('Could not retrieve Innertube configuration data: ' + response.message);
    let innertube_data = JSON.parse('{' + Utils.getStringBetweenStrings(response.data, 'ytcfg.set({', '});') + '}');
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

      this.initialized = true;
    } else {
      this.initialized = false;
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
    if (!this.initialized) throw new Error('Missing Innertube data.');

    const yt_response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/search${this.logged_in && this.cookie.length < 1 ? '' : `?key=${this.key}`}`, JSON.stringify({ context: this.context, params: Constants.filters(options.period + ',' + options.duration + ',' + options.order), query }), Constants.innertube_request_opts({ session: this })).catch((error) => error);
    if (yt_response instanceof Error) throw new Error('Could not search on YouTube: ' + yt_response.message);

    let content = yt_response.data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
    let search_response = {};

    search_response.search_metadata = {};
    search_response.search_metadata.query = content[0].showingResultsForRenderer ? content[0].showingResultsForRenderer.originalQuery.simpleText : query;
    search_response.search_metadata.corrected_query = content[0].showingResultsForRenderer ? content[0].showingResultsForRenderer.correctedQueryEndpoint.searchEndpoint.query : query;
    search_response.search_metadata.estimated_results = parseInt(yt_response.data.estimatedResults);
    search_response.videos = content.map((data) => {
      if (!data.videoRenderer) return;
      let video = data.videoRenderer;
      return {
        title: video.title.runs[0].text,
        description: video.detailedMetadataSnippets ? video.detailedMetadataSnippets[0].snippetText.runs.map((item) => item.text).join('') : 'N/A',
        author: video.ownerText.runs[0].text,
        id: video.videoId,
        url: 'https://youtu.be/' + video.videoId,
        channel_url: Constants.urls.YT_BASE_URL + video.ownerText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url,
        metadata: {
          view_count: video.viewCountText ? video.viewCountText.simpleText : 'N/A',
          short_view_count_text: {
            simple_text: video.shortViewCountText ? video.shortViewCountText.simpleText : 'N/A',
            accessibility_label: video.shortViewCountText ? (video.shortViewCountText.accessibility ? video.shortViewCountText.accessibility.accessibilityData.label : 'N/A') : 'N/A',
          },
          thumbnails: video.thumbnail.thumbnails,
          duration: {
            seconds: TimeToSeconds(video.lengthText ? video.lengthText.simpleText : '0'),
            simple_text: video.lengthText ? video.lengthText.simpleText : 'N/A',
            accessibility_label: video.lengthText ? video.lengthText.accessibility.accessibilityData.label : 'N/A'
          },
          published: video.publishedTimeText ? video.publishedTimeText.simpleText : 'N/A',
          badges: video.badges ? video.badges.map((item) => item.metadataBadgeRenderer.label) : 'N/A',
          owner_badges: video.ownerBadges ? video.ownerBadges.map((item) => item.metadataBadgeRenderer.tooltip) : 'N/A '
        }
      };
    }).filter((video_block) => video_block !== undefined);
    return search_response;
  }

  async getDetails(id) {
    const data = await this.requestVideoInfo(id, false);
    const video_data = Constants.formatVideoData(data, this, false);
    
    if (video_data.metadata.is_live_content) {
      const data_continuation = await Actions.getContinuation(this, { video_id: id });
      video_data.getLivechat = () => new Livechat(this, data_continuation.data.contents.twoColumnWatchNextResults.conversationBar.liveChatRenderer.continuations[0].reloadContinuationData.continuation, video_data.metadata.channel_id, id);
    }
    
    video_data.like = () => Actions.engage(this, 'like/like', { video_id: id });
    video_data.dislike = () => Actions.engage(this, 'like/dislike', { video_id: id });
    video_data.removeLike = () => Actions.engage(this, 'like/removelike', { video_id: id });
    video_data.subscribe = () => Actions.engage(this, 'subscription/subscribe', { video_id: id, channel_id: video_data.metadata.channel_id });
    video_data.unsubscribe = () => Actions.engage(this, 'subscription/unsubscribe', { video_id: id, channel_id: video_data.metadata.channel_id });
    video_data.comment = text => Actions.engage(this, 'comment/create_comment', { video_id: id, text });
    video_data.setNotificationPref = pref => Actions.notifications(this, 'modify_channel_preference', { channel_id: video_data.metadata.channel_id, pref: pref || 'NONE'});

    return video_data;
  }

  async getNotifications() {
    const response = await Actions.notifications(this, 'get_notification_menu');
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
    return response.data.unseenCount;
  }

  async requestVideoInfo(id, desktop) {
    let response;
    if (!desktop) {
      response = await Axios.get(`${Constants.urls.YT_WATCH_PAGE}?v=${id}&t=8s&pbj=1`, Constants.innertube_request_opts({ session: this, id, desktop: false })).catch((error) => error);
    } else {
      response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/player${this.logged_in && this.cookie.length < 1 ? '' : `?key=${this.key}`}`, JSON.stringify(Constants.video_details_reqbody(id, this.sts, this.context)), Constants.innertube_request_opts({ session: this, id, desktop: true })).catch((error) => error);
    }
    if (response instanceof Error) throw new Error('Could not retrieve watch page info: ' + response.message);
    return response.data;
  }

  download(id, options = {}) {
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
          format.url = new SigDecipher(format.url, this.context.client.clientVersion, this.player.sig_decipher_sc, this.player.encodeN).decipher();
        } else {
          const url_components = new URL(format.url);
          url_components.searchParams.set('cver', this.context.client.clientVersion);
          url_components.searchParams.set('ratebypass', 'yes');
          url_components.searchParams.set('n', this.player.encodeN(url_components.searchParams.get('n')));
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

        if (options.type != 'audio') {
          streams = filtered_streams.filter((format) => format.mimeType.includes(options.format || 'mp4') && format.qualityLabel == options.quality);
        } else {
          streams = filtered_streams.filter((format) => format.mimeType.includes(options.format || 'mp4'));
        }

        if (streams == undefined || streams.length == 0) {
          streams = filtered_streams.filter((format) => format.quality == 'medium');
        }

        bitrates = streams.map((format) => format.bitrate);
        url = streams.filter((format) => format.bitrate === Math.max(...bitrates))[0];
      }

      const selected_format = options.type == 'videoandaudio' ? filtered_streams[0] : url;
      if (!selected_format) {
        return stream.emit('error', { message: 'Could not find any suitable format.', type: 'FORMATS_UNAVAILABLE' });
      } else {
        stream.emit('info', { video_details, selected_format, formats });
      }

      if (options.type == 'videoandaudio') {
        const response = await Axios.get(selected_format.url, { cancelToken: new CancelToken(function executor(c) { cancel = c; }), responseType: 'stream', reponseEncoding: 'binary', headers: Constants.stream_headers() }).catch((error) => error);
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

        response.data.pipe(stream, true);
      } else {
        const chunk_size = 1048576 * 10; // 10MB

        let chunk_start = 0;
        let chunk_end = chunk_size;
        let downloaded_size = 0;

        stream.emit('start');

        const downloadChunk = async () => {
          const response = await Axios.get(selected_format.url, { cancelToken: new CancelToken(function executor(c) { cancel = c; }), responseType: 'stream', headers: Constants.stream_headers(`bytes=${chunk_start}-${chunk_end || ''}`) }).catch((error) => error);
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

          response.data.on('end', () => {
            chunk_start = chunk_end + 1;
            chunk_end += chunk_size;

            if (downloaded_size < selected_format.contentLength) {
              downloadChunk();
            } else {
              stream.emit('end');
            }
          });

          response.data.on('error', (err) => {
            if (cancelled) {
              stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' });
            } else {
              stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
            }
          });

          response.data.pipe(stream, { end: false });
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