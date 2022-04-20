'use strict';

const Utils = require('./Utils');

module.exports = {
  URLS: {
    YT_BASE: 'https://www.youtube.com',
    YT_BASE_API: 'https://www.youtube.com/youtubei/',
    YT_STUDIO_BASE_API: 'https://studio.youtube.com/youtubei/',
    YT_SUGGESTIONS: 'https://suggestqueries.google.com/complete/',
    YT_MUSIC: 'https://music.youtube.com',
    YT_MUSIC_BASE_API: 'https://music.youtube.com/youtubei/'
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
    },
    REGEX: {
      AUTH_SCRIPT: /<script id=\"base-js\" src=\"(.*?)\" nonce=".*?"><\/script>/,
      CLIENT_IDENTITY: /.+?={};var .+?={clientId:\"(?<id>.+?)\",.+?:\"(?<secret>.+?)\"},/
    }
  },
  DEFAULT_HEADERS: (config) => {
    return {
      headers: {
        'Cookie': config?.cookie || '',
        'user-agent': Utils.getRandomUserAgent('desktop').userAgent,
        'Referer': 'https://www.google.com/',
        'Accept': 'text/html',
        'Accept-Language': `en-${config?.gl || 'US'}`,
        'Accept-Encoding': 'gzip'
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
  INNERTUBE_HEADERS_BASE: {
    'accept': '*/*',
    'content-type': 'application/json',
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
  YTMUSIC_VERSION: '1.20211213.00.00',
  METADATA_KEYS: [
    'embed', 'view_count', 'average_rating', 'allow_ratings',
    'length_seconds', 'channel_id', 'channel_url',
    'external_channel_id', 'is_live_content', 'is_family_safe',
    'is_unlisted', 'is_private', 'has_ypc_metadata',
    'category', 'owner_channel_name', 'publish_date',
    'upload_date', 'keywords', 'available_countries',
    'owner_profile_url'
  ],
  BLACKLISTED_KEYS: [
    'is_owner_viewing', 'is_unplugged_corpus',
    'is_crawlable', 'author'
  ],
  ACCOUNT_SETTINGS: {
    // Notifications
    SUBSCRIPTIONS: 'NOTIFICATION_SUBSCRIPTION_NOTIFICATIONS',
    RECOMMENDED_VIDEOS: 'NOTIFICATION_RECOMMENDATION_WEB_CONTROL',
    CHANNEL_ACTIVITY: 'NOTIFICATION_COMMENT_WEB_CONTROL',
    COMMENT_REPLIES: 'NOTIFICATION_COMMENT_REPLY_OTHER_WEB_CONTROL',
    USER_MENTION: 'NOTIFICATION_USER_MENTION_WEB_CONTROL',
    SHARED_CONTENT: 'NOTIFICATION_RETUBING_WEB_CONTROL',

    // Privacy 
    PLAYLISTS_PRIVACY: 'PRIVACY_DISCOVERABLE_SAVED_PLAYLISTS',
    SUBSCRIPTIONS_PRIVACY: 'PRIVACY_DISCOVERABLE_SUBSCRIPTIONS'
  },
  BASE64_DIALECT: {
    NORMAL: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.split(''),
    REVERSE: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('')
  },
  NTOKEN_REGEX: {
    CALLS: /c\[(.*?)\]\((.+?)\)/g,
    PLACEHOLDERS: /c\[(.*?)\]=c/g,
  },
  FUNCS_REGEX: /d\.push\(e\)|d\.reverse\(\)|d\[0\]\)\[0\]\)|f=d\[0];d\[0\]|d\.length;d\.splice\(e,1\)|function\(\){for\(var|function\(d,e,f\){var|function\(d\){for\(var|reverse\(\)\.forEach|unshift\(d\.pop\(\)\)|function\(d,e\){for\(var f/,
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
    TRANSLATE_2: 'function(d,e,f){var'
  }
};
