'use strict';

const Utils = require('./Utils');

module.exports = {
  URLS: {
    YT_BASE_URL: 'https://www.youtube.com',
    YT_MUSIC_URL: 'https://music.youtube.com',
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
    const origin = info.ytmusic && 'https://music.youtube.com' ||
      info.desktop && 'https://www.youtube.com' || 'https://m.youtube.com';

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
        'x-origin': origin,
        'origin': origin,
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
  METADATA_KEYS: [
    'embed', 'view_count', 'average_rating',
    'length_seconds', 'channel_id', 'channel_url',
    'external_channel_id', 'is_live_content', 'is_family_safe',
    'is_unlisted', 'is_private', 'has_ypc_metadata',
    'category', 'owner_channel_name', 'publish_date',
    'upload_date', 'keywords', 'available_countries',
    'owner_profile_url'
  ],
  BLACKLISTED_KEYS: [
    'is_owner_viewing', 'is_unplugged_corpus',
    'is_crawlable', 'allow_ratings', 'author'
  ],
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
  }
};