'use strict';

const Utils = require('./Utils');

module.exports = {
  URLS: {
    YT_BASE_URL: 'https://www.youtube.com',
    YT_MOBILE_URL: 'https://m.youtube.com',
    YT_WATCH_PAGE: 'https://m.youtube.com/watch'
  },
  OAUTH: {
    SCOPE: 'http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content',
    GRANT_TYPE: 'http://oauth.net/grant_type/device/1.0',
    MODEL_NAME: 'ytlr::',
    HEADERS: {
      headers: {
        'accept': '*/*',
        'origin': 'https://www.youtube.com',
        'user-agent': 'Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version',
        'content-type': 'application/json',
        'referer': `https://www.youtube.com/tv`,
        'accept-language': 'en-US'
      }
    }
  },
  DEFAULT_HEADERS: (session) => {
    return {
      headers: {
        'Cookie': session.cookie,
        'user-agent': Utils.getRandomUserAgent('desktop').userAgent,
        'Referer': 'https://www.google.com/',
        'Accept': 'text/html',
        'Accept-Language': 'en-US,en',
        'Accept-Encoding': 'gzip',
        'Upgrade-Insecure-Requests': 1
      }
    };
  },
  STREAM_HEADERS: {
    'Accept': '*/*',
    'User-Agent': Utils.getRandomUserAgent('desktop').userAgent,
    'Connection': 'keep-alive',
    'Origin': 'https://www.youtube.com',
    'Referer': 'https://www.youtube.com',
    'DNT': '?1'
  },
  INNERTUBE_REQOPTS: (info) => {
    info.desktop === undefined && (info.desktop = true);
    let req_opts = {
      params: info.params || {},
      headers: {
        'accept': '*/*',
        'user-agent': Utils.getRandomUserAgent(info.desktop ? 'desktop' : 'mobile').userAgent,
        'content-type': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'x-goog-authuser': 0,
        'x-goog-visitor-id': info.session.context.client.visitorData || '',
        'x-youtube-client-name': info.desktop ? 1 : 2,
        'x-youtube-client-version': info.session.context.client.clientVersion,
        'x-youtube-chrome-connected': 'source=Chrome,mode=0,enable_account_consistency=true,supervised=false,consistency_enabled_by_default=false',
        'x-origin': info.desktop ? 'https://www.youtube.com' : 'https://m.youtube.com',
        'origin': info.desktop ? 'https://www.youtube.com' : 'https://m.youtube.com',
      }
    };

    info.id && (req_opts.headers.referer = (info.desktop ? 'https://www.youtube.com' : 'https://m.youtube.com') + '/watch?v=' + info.id);

    if (info.session.logged_in && info.desktop) {
      req_opts.headers.Cookie = info.session.cookie;
      req_opts.headers.authorization = info.session.cookie.length < 1 ? `Bearer ${info.session.access_token}` : info.session.auth_apisid;
    }

    return req_opts;
  },
  VIDEO_INFO_REQBODY: (id, sts, context) => {
    return {
      playbackContext: {
        contentPlaybackContext: {
          'currentUrl': '/watch?v=' + id,
          'vis': 0,
          'splay': false,
          'autoCaptionsDefaultOn': false,
          'autonavState': 'STATE_OFF',
          'html5Preference': 'HTML5_PREF_WANTS',
          'signatureTimestamp': sts,
          'referer': 'https://www.youtube.com',
          'lactMilliseconds': '-1'
        }
      },
      context: context,
      videoId: id
    };
  },
  BASE64_DIALECT: {
    NORMAL: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.split(''),
    REVERSE: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('')
  },
  FUNCS_REGEX: /d\.push\(e\)|d\.reverse\(\)|d\[0\]\)\[0\]\)|f=d\[0];d\[0\]|d\.length;d\.splice\(e,1\)|function\(\){for\(var|function\(d,e,f\){var h=f|function\(d\){for\(var|reverse\(\)\.forEach|unshift\(d\.pop\(\)\)|function\(d,e\){for\(var f/,
  FUNCS: {
    PUSH: 'd.push(e)',
    REVERSE_1: 'd.reverse()',
    REVERSE_2: 'function(d){for(var',
    SPLICE: 'd.length;d.splice(e,1)',
    SWAP0_1: 'd[0])[0])',
    SWAP0_2: 'f=d[0];d[0]',
    ROTATE_1: 'reverse().forEach',
    ROTATE_2: 'unshift(d.pop())',
    BASE64_DIA: 'function(){for(var',
    TRANSLATE_1: 'function(d,e){for(var f',
    TRANSLATE_2: 'function(d,e,f){var h=f'
  },
  // Helper functions, felt like Utils.js wasn't the right place for them:
  formatNTransformData: (data) => {
    return data
      .replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)')
      .replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)')
      .replace(/\[function\(d,e,f\)/g, '["function(d,e,f)')
      .replace(/,b,/g, ',"b",').replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]')
      .replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",').replace(/""/g, '')
      .replace(/length]\)}"/g, 'length])}');
  },
  formatVideoData: (data, context, is_desktop) => {
    let video_details = {};
    let metadata = {};

    if (is_desktop) {
      metadata.embed = data.microformat.playerMicroformatRenderer.embed;
      metadata.view_count = parseInt(data.videoDetails.viewCount);
      metadata.average_rating = data.videoDetails.averageRating;
      metadata.length_seconds = data.microformat.playerMicroformatRenderer.lengthSeconds;
      metadata.channel_id = data.videoDetails.channelId;
      metadata.channel_url = data.microformat.playerMicroformatRenderer.ownerProfileUrl;
      metadata.external_channel_id = data.microformat.playerMicroformatRenderer.externalChannelId;
      metadata.is_live_content = data.videoDetails.isLiveContent;
      metadata.is_family_safe = data.microformat.playerMicroformatRenderer.isFamilySafe;
      metadata.is_unlisted = data.microformat.playerMicroformatRenderer.isUnlisted;
      metadata.is_private = data.videoDetails.isPrivate;
      metadata.has_ypc_metadata = data.microformat.playerMicroformatRenderer.hasYpcMetadata;
      metadata.category = data.microformat.playerMicroformatRenderer.category;
      metadata.channel_name = data.microformat.playerMicroformatRenderer.ownerChannelName;
      metadata.publish_date = data.microformat.playerMicroformatRenderer.publishDate || 'N/A';
      metadata.upload_date = data.microformat.playerMicroformatRenderer.uploadDate || 'N/A';
      metadata.keywords = data.videoDetails.keywords || [];
      metadata.available_qualities = [...new Set(data.streamingData.adaptiveFormats.filter(v => v.qualityLabel).map(v => v.qualityLabel).sort((a, b) => +a.replace(/\D/gi, '') - +b.replace(/\D/gi, '')))];

      video_details.id = data.videoDetails.videoId;
      video_details.title = data.videoDetails.title;
      video_details.description = data.videoDetails.shortDescription;
      video_details.thumbnail = data.videoDetails.thumbnail.thumbnails.slice(-1)[0];
      video_details.metadata = metadata;
    } else {
      const is_dislike_available = data[3].response.contents.singleColumnWatchNextResults.results.results.contents[1].slimVideoMetadataSectionRenderer.contents[1].slimVideoActionBarRenderer.buttons[1].slimMetadataToggleButtonRenderer.button.toggleButtonRenderer.defaultText.accessibility && true || false;

      metadata.embed = data[2].playerResponse.microformat.playerMicroformatRenderer.embed;
      metadata.likes = parseInt(data[3].response.contents.singleColumnWatchNextResults.results.results.contents[1].slimVideoMetadataSectionRenderer.contents[1].slimVideoActionBarRenderer.buttons[0].slimMetadataToggleButtonRenderer.button.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D/g, ''));
      metadata.dislikes = is_dislike_available && parseInt(data[3].response.contents.singleColumnWatchNextResults.results.results.contents[1].slimVideoMetadataSectionRenderer.contents[1].slimVideoActionBarRenderer.buttons[1].slimMetadataToggleButtonRenderer.button.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D/g, '')) || 0;
      metadata.view_count = parseInt(data[2].playerResponse.videoDetails.viewCount);
      metadata.average_rating = data[2].playerResponse.videoDetails.averageRating;
      metadata.length_seconds = data[2].playerResponse.microformat.playerMicroformatRenderer.lengthSeconds;
      metadata.channel_id = data[2].playerResponse.videoDetails.channelId;
      metadata.channel_url = data[2].playerResponse.microformat.playerMicroformatRenderer.ownerProfileUrl;
      metadata.external_channel_id = data[2].playerResponse.microformat.playerMicroformatRenderer.externalChannelId;
      metadata.is_live_content = data[2].playerResponse.videoDetails.isLiveContent;
      metadata.is_family_safe = data[2].playerResponse.microformat.playerMicroformatRenderer.isFamilySafe;
      metadata.is_unlisted = data[2].playerResponse.microformat.playerMicroformatRenderer.isUnlisted;
      metadata.is_private = data[2].playerResponse.videoDetails.isPrivate;
      metadata.has_ypc_metadata = data[2].playerResponse.microformat.playerMicroformatRenderer.hasYpcMetadata;
      metadata.category = data[2].playerResponse.microformat.playerMicroformatRenderer.category;
      metadata.channel_name = data[2].playerResponse.microformat.playerMicroformatRenderer.ownerChannelName;
      metadata.publish_date = data[2].playerResponse.microformat.playerMicroformatRenderer.publishDate;
      metadata.upload_date = data[2].playerResponse.microformat.playerMicroformatRenderer.uploadDate;
      metadata.keywords = data[2].playerResponse.videoDetails.keywords;
      metadata.available_qualities = [...new Set(data[2].playerResponse.streamingData.adaptiveFormats.filter(v => v.qualityLabel).map(v => v.qualityLabel).sort((a, b) => +a.replace(/\D/gi, '') - +b.replace(/\D/gi, '')))];

      video_details.id = data[2].playerResponse.videoDetails.videoId;
      video_details.title = data[2].playerResponse.videoDetails.title;
      video_details.description = data[2].playerResponse.videoDetails.shortDescription;
      video_details.thumbnail = data[2].playerResponse.videoDetails.thumbnail.thumbnails.slice(-1)[0];

      // Placeholders for functions
      video_details.like = () => {};
      video_details.dislike = () => {};
      video_details.removeLike = () => {};
      video_details.subscribe = () => {};
      video_details.unsubscribe = () => {};
      video_details.comment = () => {};
      video_details.getComments = () => {};
      video_details.setNotificationPref = () => {};
      video_details.getLivechat = () => {};

      // Additional metadata
      video_details.metadata = metadata;
    }
    return video_details;
  }
};