'use strict';

const axios = require('axios');
const Stream = require('stream');
const Utils = require('./Utils');
const Player = require('./Player');
const Actions = require('./Actions');
const Constants = require('./Constants');
const SigDecipher = require('./SigDecipher');

class InnerTube {
  constructor(cookie) {
    this.cookie = cookie || '';
    return new Promise(async (resolve, reject) => resolve(await this.init()));
  }

  async init() {
    const response = await axios.get(Constants.urls.YT_BASE_URL, Constants.default_headers(this)).catch((error) => error);
    if (response instanceof Error) throw new Error('Could not retrieve InnerTube configuration data: ' + response.message);
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

      if (this.logged_in) {
        this.auth_apisid = Utils.getStringBetweenStrings(this.cookie, 'PAPISID=', ';');
        this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
      }

      this.initialized = true;
    } else {
      this.initialized = false;
    }
    return this;
  }

  async search(query, options = { period: 'any', order: 'relevance', duration: 'any', quantity: 100 }) {
    if (!this.initialized) throw new Error('Missing Innertube data.');

    const yt_response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/search?key=' + this.key, JSON.stringify({ context: this.context, params: Constants.filters(options.period + ',' + options.duration + ',' + options.order), query }), Constants.search_headers(this)).catch((error) => error);
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
          durarion: {
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

  download(id, options) {
    const stream = new Stream.PassThrough();
    this.requestVideoInfo(id, true).then(async (video_data) => {
      let formats = [];

      if (video_data.playabilityStatus.status === 'LOGIN_REQUIRED') return stream.emit('error', { message: 'You must login to download age-restricted videos.', error_type: 'LOGIN_REQUIRED', playability_status: video_data.playabilityStatus.status });
      if (!video_data.streamingData) return stream.emit('error', { message: 'Streaming data not available.', error_type: 'NO_STREAMING_DATA', playability_status: video_data.playabilityStatus.status });

      formats = formats.concat(video_data.streamingData.formats || []).concat(video_data.streamingData.adaptiveFormats || []);
      formats.forEach((format) => {
        format.url = format.url || format.signatureCipher || format.cipher;

        if (format.signatureCipher || format.cipher) {
          format.url = new SigDecipher(format.url, this.player.dec_func).decipher();
        }

        format.has_audio = !!format.audioBitrate || !!format.audioQuality;
        format.has_video = !!format.qualityLabel;

        delete format.cipher;
        delete format.signatureCipher;
      });

      formats.hls_manifest_url = video_data.streamingData.hlsManifestUrl || undefined;
      formats.dash_manifest_url = video_data.streamingData.dashManifestUrl || undefined;

      const video_details = Constants.formatVideoData(video_data, this, true);
      stream.emit('video_details', { video_details, formats });

      const video_url = formats[0].url;

      const response = await axios.get(video_url, { responseType: 'stream', headers: Constants.req_opts.stream_headers }).catch((error) => error);
      if (response instanceof Error) {
        stream.emit('error', { message: response.message, type: 'REQUEST_FAILED' });
        return stream;
      } else {
        stream.emit('start');
      }

      let downloaded_size = 0;
      response.data.on('data', (chunk) => {
        stream.write(new Buffer.from(chunk));
        downloaded_size += chunk.length;
        let size = (response.headers['content-length'] / 1024 / 1024).toFixed(2);
        let percentage = Math.floor((downloaded_size / response.headers['content-length']) * 100);
        stream.emit('progress', { chunk_size: chunk.length, downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2), percentage, size });
      });

      response.data.on('error', (err) => stream.emit('error', { message: err.message, type: 'ABORTED' }));
      response.data.on('end', () => stream.emit('end'));
    });
    return stream;
  }

  async getExtendedInfo(id) {
    const data = await this.requestVideoInfo(id, false);
    const video_data = Constants.formatVideoData(data, this, false);

    video_data.like = like => Actions.likeVideo(this, id);
    video_data.dislike = dislike => Actions.dislikeVideo(this, id);
    video_data.removeLike = remove_like => Actions.removeLike(this, id);
    video_data.comment = comment => Actions.commentVideo(this, id, comment);

    return video_data;
  }

  async requestVideoInfo(id, desktop) {
    let response;
    if (!desktop) {
      response = await axios.get(Constants.urls.YT_WATCH_PAGE + '?v=' + id + 't=8s&pbj=1&bpctr=9999999999&has_verified=1&', Constants.req_opts.videoinf_headers(this, id, false)).catch((error) => error);
    } else {
      response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/player?key=' + this.key, JSON.stringify(Constants.req_opts.video_data_req_body(id, this.sts, this.context)), Constants.req_opts.videoinf_headers(this, id, true)).catch((error) => error);
    }
    if (response instanceof Error) throw new Error('Could not retrieve watch page info: ' + response.message);
    return response.data;
  }
}

module.exports = InnerTube;