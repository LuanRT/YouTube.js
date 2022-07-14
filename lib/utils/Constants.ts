
export const URLS = {
    YT_BASE: 'https://www.youtube.com',
    YT_MUSIC_BASE: 'https://music.youtube.com',
    YT_SUGGESTIONS: 'https://suggestqueries.google.com/complete/',
    API: {
        BASE: 'https://youtubei.googleapis.com',
        PRODUCTION: 'https://youtubei.googleapis.com/youtubei/',
        STAGING: 'https://green-youtubei.sandbox.googleapis.com/youtubei/',
        RELEASE: 'https://release-youtubei.sandbox.googleapis.com/youtubei/',
        TEST: 'https://test-youtubei.sandbox.googleapis.com/youtubei/',
        CAMI: 'http://cami-youtubei.sandbox.googleapis.com/youtubei/',
        UYTFE: 'https://uytfe.sandbox.google.com/youtubei/'
    }
};
export const OAUTH = {
    SCOPE: 'http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content',
    GRANT_TYPE: 'http://oauth.net/grant_type/device/1.0',
    MODEL_NAME: 'ytlr::',
    HEADERS: {
        'accept': '*/*',
        'origin': 'https://www.youtube.com',
        'user-agent': 'Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version',
        'content-type': 'application/json',
        'referer': 'https://www.youtube.com/tv',
        'accept-language': 'en-US'
    },
    REGEX: {
        AUTH_SCRIPT: /<script id="base-js" src="(.*?)" nonce=".*?"><\/script>/,
        CLIENT_IDENTITY: /.+?={};var .+?={clientId:"(?<client_id>.+?)",.+?:"(?<client_secret>.+?)"},/
    }
};
export const CLIENTS = {
    WEB: {
        NAME: 'WEB'
    },
    YTMUSIC: {
        NAME: 'WEB_REMIX',
        VERSION: '1.20211213.00.00'
    },
    ANDROID: {
        NAME: 'ANDROID',
        VERSION: '17.17.32'
    }
};
export const STREAM_HEADERS = {
    'accept': '*/*',
    // XXX: undici doesnt like this, 'connection': 'keep-alive',
    'origin': 'https://www.youtube.com',
    'referer': 'https://www.youtube.com',
    'DNT': '?1'
};
export const INNERTUBE_HEADERS_BASE = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate',
    'content-type': 'application/json'
};
export const METADATA_KEYS = [
    'embed', 'view_count', 'average_rating', 'allow_ratings',
    'length_seconds', 'channel_id', 'channel_url',
    'external_channel_id', 'is_live_content', 'is_family_safe',
    'is_unlisted', 'is_private', 'has_ypc_metadata',
    'category', 'owner_channel_name', 'publish_date',
    'upload_date', 'keywords', 'available_countries',
    'owner_profile_url'
];
export const BLACKLISTED_KEYS = [
    'is_owner_viewing', 'is_unplugged_corpus',
    'is_crawlable', 'author'
];
export const ACCOUNT_SETTINGS = {
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
};
export const BASE64_DIALECT = {
    NORMAL: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.split(''),
    REVERSE: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('')
};
export const SIG_REGEX = {
    ACTIONS: /;.{2}\.(?<name>.{2})\(.*?,(?<param>.*?)\)/g,
    FUNCTIONS: /(?<name>.{2}):function\(.*?\){(.*?)}/g
};
export const NTOKEN_REGEX = {
    CALLS: /c\[(.*?)\]\((.+?)\)/g,
    PLACEHOLDERS: /c\[(.*?)\]=c/g,
    FUNCTIONS: /d\.push\(e\)|d\.reverse\(\)|d\[0\]\)\[0\]\)|f=d\[0];d\[0\]|d\.length;d\.splice\(e,1\)|function\(\){for\(var|function\(d,e,f\){var|function\(d\){for\(var|reverse\(\)\.forEach|unshift\(d\.pop\(\)\)|function\(d,e\){for\(var f/
};
export const FUNCS = {
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
};
export default {
    URLS,
    OAUTH,
    CLIENTS,
    STREAM_HEADERS,
    INNERTUBE_HEADERS_BASE,
    METADATA_KEYS,
    BLACKLISTED_KEYS,
    ACCOUNT_SETTINGS,
    BASE64_DIALECT,
    SIG_REGEX,
    NTOKEN_REGEX,
    FUNCS
};
