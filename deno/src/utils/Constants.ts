
export const URLS = Object.freeze({
  YT_BASE: 'https://www.youtube.com',
  YT_MUSIC_BASE: 'https://music.youtube.com',
  YT_SUGGESTIONS: 'https://suggestqueries.google.com/complete/',
  YT_UPLOAD: 'https://upload.youtube.com/',
  API: Object.freeze({
    BASE: 'https://youtubei.googleapis.com',
    PRODUCTION_1: 'https://www.youtube.com/youtubei/',
    PRODUCTION_2: 'https://youtubei.googleapis.com/youtubei/',
    STAGING: 'https://green-youtubei.sandbox.googleapis.com/youtubei/',
    RELEASE: 'https://release-youtubei.sandbox.googleapis.com/youtubei/',
    TEST: 'https://test-youtubei.sandbox.googleapis.com/youtubei/',
    CAMI: 'http://cami-youtubei.sandbox.googleapis.com/youtubei/',
    UYTFE: 'https://uytfe.sandbox.google.com/youtubei/'
  })
});
export const OAUTH = Object.freeze({
  SCOPE: 'http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content',
  GRANT_TYPE: 'http://oauth.net/grant_type/device/1.0',
  MODEL_NAME: 'ytlr::',
  HEADERS: Object.freeze({
    'accept': '*/*',
    'origin': 'https://www.youtube.com',
    'user-agent': 'Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version',
    'content-type': 'application/json',
    'referer': 'https://www.youtube.com/tv',
    'accept-language': 'en-US'
  }),
  REGEX: Object.freeze({
    AUTH_SCRIPT: /<script id="base-js" src="(.*?)" nonce=".*?"><\/script>/,
    CLIENT_IDENTITY: /var .+?={clientId:"(?<client_id>.+?)",.+?:"(?<client_secret>.+?)".+?}/
  })
});
export const CLIENTS = Object.freeze({
  iOS: {
    NAME: 'iOS',
    VERSION: '18.06.35',
    USER_AGENT: 'com.google.ios.youtube/18.06.35 (iPhone; CPU iPhone OS 14_4 like Mac OS X; en_US)',
    DEVICE_MODEL: 'iPhone10,6'
  },
  WEB: {
    NAME: 'WEB',
    VERSION: '2.20230622.06.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco'
  },
  WEB_KIDS: {
    NAME: 'WEB_KIDS',
    VERSION: '2.20230111.00.00'
  },
  YTMUSIC: {
    NAME: 'WEB_REMIX',
    VERSION: '1.20211213.00.00'
  },
  ANDROID: {
    NAME: 'ANDROID',
    VERSION: '18.06.35',
    SDK_VERSION: '29',
    USER_AGENT: 'com.google.android.youtube/18.06.35 (Linux; U; Android 10; US)'
  },
  YTSTUDIO_ANDROID: {
    NAME: 'ANDROID_CREATOR',
    VERSION: '22.43.101'
  },
  YTMUSIC_ANDROID: {
    NAME: 'ANDROID_MUSIC',
    VERSION: '5.34.51'
  },
  TV_EMBEDDED: {
    NAME: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
    VERSION: '2.0'
  }
});
export const STREAM_HEADERS = Object.freeze({
  'accept': '*/*',
  'origin': 'https://www.youtube.com',
  'referer': 'https://www.youtube.com',
  'DNT': '?1'
});
export const INNERTUBE_HEADERS_BASE = Object.freeze({
  'accept': '*/*',
  'accept-encoding': 'gzip, deflate',
  'content-type': 'application/json'
});
