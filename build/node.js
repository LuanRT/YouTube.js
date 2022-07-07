"use strict";
/* eslint-disable */
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// lib/utils/Constants.js
var require_Constants = __commonJS({
  "lib/utils/Constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      URLS: {
        YT_BASE: "https://www.youtube.com",
        YT_MUSIC_BASE: "https://music.youtube.com",
        YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/",
        API: {
          BASE: "https://youtubei.googleapis.com",
          PRODUCTION: "https://youtubei.googleapis.com/youtubei/",
          STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/",
          RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/",
          TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/",
          CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/",
          UYTFE: "https://uytfe.sandbox.google.com/youtubei/"
        }
      },
      OAUTH: {
        SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content",
        GRANT_TYPE: "http://oauth.net/grant_type/device/1.0",
        MODEL_NAME: "ytlr::",
        HEADERS: {
          "accept": "*/*",
          "origin": "https://www.youtube.com",
          "user-agent": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version",
          "content-type": "application/json",
          "referer": "https://www.youtube.com/tv",
          "accept-language": "en-US"
        },
        REGEX: {
          AUTH_SCRIPT: /<script id="base-js" src="(.*?)" nonce=".*?"><\/script>/,
          CLIENT_IDENTITY: /.+?={};var .+?={clientId:"(?<client_id>.+?)",.+?:"(?<client_secret>.+?)"},/
        }
      },
      CLIENTS: {
        WEB: {
          NAME: "WEB"
        },
        YTMUSIC: {
          NAME: "WEB_REMIX",
          VERSION: "1.20211213.00.00"
        },
        ANDROID: {
          NAME: "ANDROID",
          VERSION: "17.17.32"
        }
      },
      STREAM_HEADERS: {
        "accept": "*/*",
        "connection": "keep-alive",
        "origin": "https://www.youtube.com",
        "referer": "https://www.youtube.com",
        "DNT": "?1"
      },
      INNERTUBE_HEADERS_BASE: {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate",
        "content-type": "application/json"
      },
      METADATA_KEYS: [
        "embed",
        "view_count",
        "average_rating",
        "allow_ratings",
        "length_seconds",
        "channel_id",
        "channel_url",
        "external_channel_id",
        "is_live_content",
        "is_family_safe",
        "is_unlisted",
        "is_private",
        "has_ypc_metadata",
        "category",
        "owner_channel_name",
        "publish_date",
        "upload_date",
        "keywords",
        "available_countries",
        "owner_profile_url"
      ],
      BLACKLISTED_KEYS: [
        "is_owner_viewing",
        "is_unplugged_corpus",
        "is_crawlable",
        "author"
      ],
      ACCOUNT_SETTINGS: {
        SUBSCRIPTIONS: "NOTIFICATION_SUBSCRIPTION_NOTIFICATIONS",
        RECOMMENDED_VIDEOS: "NOTIFICATION_RECOMMENDATION_WEB_CONTROL",
        CHANNEL_ACTIVITY: "NOTIFICATION_COMMENT_WEB_CONTROL",
        COMMENT_REPLIES: "NOTIFICATION_COMMENT_REPLY_OTHER_WEB_CONTROL",
        USER_MENTION: "NOTIFICATION_USER_MENTION_WEB_CONTROL",
        SHARED_CONTENT: "NOTIFICATION_RETUBING_WEB_CONTROL",
        PLAYLISTS_PRIVACY: "PRIVACY_DISCOVERABLE_SAVED_PLAYLISTS",
        SUBSCRIPTIONS_PRIVACY: "PRIVACY_DISCOVERABLE_SUBSCRIPTIONS"
      },
      BASE64_DIALECT: {
        NORMAL: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
        REVERSE: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("")
      },
      SIG_REGEX: {
        ACTIONS: /;.{2}\.(?<name>.{2})\(.*?,(?<param>.*?)\)/g,
        FUNCTIONS: /(?<name>.{2}):function\(.*?\){(.*?)}/g
      },
      NTOKEN_REGEX: {
        CALLS: /c\[(.*?)\]\((.+?)\)/g,
        PLACEHOLDERS: /c\[(.*?)\]=c/g,
        FUNCTIONS: /d\.push\(e\)|d\.reverse\(\)|d\[0\]\)\[0\]\)|f=d\[0];d\[0\]|d\.length;d\.splice\(e,1\)|function\(\){for\(var|function\(d,e,f\){var|function\(d\){for\(var|reverse\(\)\.forEach|unshift\(d\.pop\(\)\)|function\(d,e\){for\(var f/
      },
      FUNCS: {
        PUSH: "d.push(e)",
        REVERSE_1: "d.reverse()",
        REVERSE_2: "function(d){for(var",
        SPLICE: "d.length;d.splice(e,1)",
        SWAP0_1: "d[0])[0])",
        SWAP0_2: "f=d[0];d[0]",
        ROTATE_1: "reverse().forEach",
        ROTATE_2: "unshift(d.pop())",
        BASE64_DIA: "function(){for(var",
        TRANSLATE_1: "function(d,e){for(var f",
        TRANSLATE_2: "function(d,e,f){var"
      }
    };
  }
});

// package.json
var require_package = __commonJS({
  "package.json"(exports2, module2) {
    module2.exports = {
      name: "youtubei.js",
      version: "2.0.0",
      description: "A full-featured wrapper around YouTube's private API. Allows you to retrieve info about any video, subscribe, unsubscribe, like, dislike, comment, search, download videos/music and much more!",
      author: "LuanRT <luan.lrt4@gmail.com> (https://github.com/LuanRT)",
      contributors: [
        "Wykerd (https://github.com/wykerd/)",
        "MasterOfBob777 (https://github.com/MasterOfBob777)"
      ],
      funding: "https://ko-fi.com/luanrt",
      license: "MIT",
      scripts: {
        test: "npx jest",
        "test:node": "npm run build:node && npx jest node",
        "test:browser": "npm run build:browser && npx jest browser",
        lint: "npx eslint ./lib",
        "lint:fix": "npx eslint --fix ./lib",
        "build:types": "npx tsc",
        "build:parser-map": "node ./scripts/build-parser-json.js",
        "build:general": 'npm run build:parser-map && npx esbuild ./lib/Innertube.js --banner:js="/* eslint-disable */" --bundle --target=esnext --format=cjs --sourcemap',
        "build:node": "npm run build:general -- --outfile=./build/node.js --platform=node --external:./node_modules/* --target=node12 --define:BROWSER=false",
        "build:node:prod": "npm run build:node -- --minify",
        "build:browser": "npm run build:general -- --outfile=./build/browser.js --platform=browser --define:BROWSER=true",
        "build:browser:prod": "npm run build:browser -- --minify"
      },
      types: "./typings/lib/Innertube.d.ts",
      main: "./build/node.js",
      browser: "./build/browser.js",
      directories: {
        test: "./test",
        typings: "./typings",
        examples: "./examples",
        lib: "./lib"
      },
      dependencies: {
        axios: "^0.21.4",
        buffer: "^6.0.3",
        events: "^3.3.0",
        flat: "^5.0.2",
        idb: "^7.0.2",
        "node-forge": "^1.3.1",
        "protocol-buffers-encodings": "^1.1.1",
        "stream-browserify": "^3.0.0",
        "user-agents": "^1.0.778",
        uuid: "^8.3.2"
      },
      devDependencies: {
        "@types/node": "^17.0.31",
        esbuild: "^0.14.48",
        eslint: "^8.15.0",
        "eslint-plugin-jsdoc": "^39.3.2",
        "fake-dom": "^1.0.4",
        "fake-indexeddb": "^4.0.0",
        jest: "^28.1.0",
        typescript: "^4.6.4",
        xhr2: "^0.2.1",
        "xmlhttprequest-ssl": "^2.0.0"
      },
      repository: {
        type: "git",
        url: "git+https://github.com/LuanRT/YouTube.js.git"
      },
      bugs: {
        url: "https://github.com/LuanRT/YouTube.js/issues"
      },
      homepage: "https://github.com/LuanRT/YouTube.js#readme",
      keywords: [
        "yt",
        "dl",
        "ytdl",
        "youtube",
        "youtubedl",
        "youtube-dl",
        "youtube-downloader",
        "innertube",
        "innertubeapi",
        "unofficial",
        "downloader",
        "livechat",
        "ytmusic",
        "dislike",
        "search",
        "comment",
        "music",
        "like",
        "api"
      ]
    };
  }
});

// lib/utils/Utils.js
var require_Utils = __commonJS({
  "lib/utils/Utils.js"(exports2, module2) {
    "use strict";
    var Crypto = false ? null : require("crypto");
    var UserAgent = require("../node_modules/user-agents/dist/index.js");
    var Flatten = require("../node_modules/flat/index.js");
    var InnertubeError2 = class extends Error {
      constructor(message, info) {
        super(message);
        if (info) {
          this.info = info;
        }
        this.date = new Date();
        this.version = require_package().version;
      }
    };
    var ParsingError = class extends InnertubeError2 {
    };
    var DownloadError = class extends InnertubeError2 {
    };
    var MissingParamError = class extends InnertubeError2 {
    };
    var UnavailableContentError = class extends InnertubeError2 {
    };
    var NoStreamingDataError = class extends InnertubeError2 {
    };
    var OAuthError = class extends InnertubeError2 {
    };
    function findNode(obj, key, target, depth, safe = true) {
      const flat_obj = Flatten(obj, { safe, maxDepth: depth || 2 });
      const result = Object.keys(flat_obj).find((entry) => entry.includes(key) && JSON.stringify(flat_obj[entry] || "{}").includes(target));
      if (!result)
        throw new ParsingError(`Expected to find "${key}" with content "${target}" but got ${result}`, { key, target, data_snippet: `${JSON.stringify(flat_obj, null, 4).slice(0, 300)}..` });
      return flat_obj[result];
    }
    function observe(obj) {
      return new Proxy(obj, {
        get(target, prop) {
          if (prop == "get") {
            return (rule, del_item) => target.find((obj2, index) => {
              const match = deepCompare(rule, obj2);
              if (match && del_item) {
                target.splice(index, 1);
              }
              return match;
            });
          }
          if (prop == "findAll") {
            return (rule, del_items) => target.filter((obj2, index) => {
              const match = deepCompare(rule, obj2);
              if (match && del_items) {
                target.splice(index, 1);
              }
              return match;
            });
          }
          if (prop == "remove") {
            return (index) => target.splice(index, 1);
          }
          return Reflect.get(...arguments);
        }
      });
    }
    function deepCompare(obj1, obj2) {
      const keys = Reflect.ownKeys(obj1);
      return keys.some((key) => {
        var _a;
        const is_text = ((_a = obj2[key]) == null ? void 0 : _a.constructor.name) === "Text";
        if (!is_text && typeof obj2[key] === "object") {
          return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
        }
        return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
      });
    }
    function getTmpdir() {
      const env = false ? {} : process.env;
      const is_windows = process.platform === "win32";
      const trailing_slash_re = is_windows ? /[^:]\\$/ : /.\/$/;
      let path;
      if (is_windows) {
        path = env.TEMP || env.TMP || (env.SystemRoot || env.windir) + "\\temp";
      } else {
        path = env.TMPDIR || env.TMP || env.TEMP || "/tmp";
      }
      if (trailing_slash_re.test(path)) {
        path = path.slice(0, -1);
      }
      return path;
    }
    function getStringBetweenStrings(data, start_string, end_string) {
      const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
      const match = data.match(regex);
      return match ? match[1] : void 0;
    }
    function escapeStringRegexp(input) {
      return input.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    function getRandomUserAgent(type) {
      switch (type) {
        case "mobile":
          return new UserAgent(/Android/).data;
        case "desktop":
          return new UserAgent({ deviceCategory: "desktop" }).data;
        default:
      }
    }
    function generateSidAuth(sid) {
      const youtube = "https://www.youtube.com";
      const timestamp = Math.floor(new Date().getTime() / 1e3);
      const input = [timestamp, sid, youtube].join(" ");
      let gen_hash;
      if (false) {
        const hash = Crypto.md.sha1.create();
        hash.update(input);
        gen_hash = hash.digest().toHex();
      } else {
        const hash = Crypto.createHash("sha1");
        const data = hash.update(input, "utf-8");
        gen_hash = data.digest("hex");
      }
      return ["SAPISIDHASH", [timestamp, gen_hash].join("_")].join(" ");
    }
    function generateRandomString2(length) {
      const result = [];
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
      for (let i = 0; i < length; i++) {
        result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
      }
      return result.join("");
    }
    function timeToSeconds(time) {
      const params = time.split(":");
      switch (params.length) {
        case 1:
          return parseInt(+params[0]);
        case 2:
          return parseInt(+params[0] * 60 + +params[1]);
        case 3:
          return parseInt(+params[0] * 3600 + +params[1] * 60 + +params[2]);
        default:
          break;
      }
    }
    function camelToSnake(string) {
      return string[0].toLowerCase() + string.slice(1, string.length).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    }
    function isValidClient(client) {
      return ["YOUTUBE", "YTMUSIC"].includes(client);
    }
    function throwIfMissing2(params) {
      for (const [key, value] of Object.entries(params)) {
        if (!value)
          throw new MissingParamError(`${key} is missing`);
      }
    }
    function refineNTokenData(data) {
      return data.replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)').replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)').replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",').replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]').replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",').replace(/""/g, "").replace(/length]\)}"/g, "length])}");
    }
    var errors = { InnertubeError: InnertubeError2, UnavailableContentError, ParsingError, DownloadError, MissingParamError, NoStreamingDataError, OAuthError };
    var functions = {
      findNode,
      observe,
      getTmpdir,
      getRandomUserAgent,
      generateSidAuth,
      generateRandomString: generateRandomString2,
      getStringBetweenStrings,
      camelToSnake,
      isValidClient,
      throwIfMissing: throwIfMissing2,
      timeToSeconds,
      refineNTokenData
    };
    module2.exports = { ...functions, ...errors };
  }
});

// lib/core/OAuth.js
var require_OAuth = __commonJS({
  "lib/core/OAuth.js"(exports2, module2) {
    "use strict";
    var Uuid = require("../node_modules/uuid/dist/index.js");
    var Constants = require_Constants();
    var { OAuthError } = require_Utils();
    var _request2, _identity, _credentials, _polling_interval, _ev, _getUserCode, getUserCode_fn, _startPolling, startPolling_fn, _refreshAccessToken, refreshAccessToken_fn, _getClientIdentity, getClientIdentity_fn;
    var OAuth2 = class {
      constructor(ev, request) {
        __privateAdd(this, _getUserCode);
        __privateAdd(this, _startPolling);
        __privateAdd(this, _refreshAccessToken);
        __privateAdd(this, _getClientIdentity);
        __privateAdd(this, _request2, void 0);
        __privateAdd(this, _identity, void 0);
        __privateAdd(this, _credentials, {});
        __privateAdd(this, _polling_interval, 5);
        __privateAdd(this, _ev, null);
        __privateSet(this, _ev, ev);
        __privateSet(this, _request2, request);
      }
      init(credentials) {
        __privateSet(this, _credentials, credentials);
        if (!credentials.access_token) {
          __privateMethod(this, _getUserCode, getUserCode_fn).call(this);
        }
      }
      async checkAccessTokenValidity() {
        const timestamp = new Date(__privateGet(this, _credentials).expires).getTime();
        if (new Date().getTime() > timestamp) {
          await __privateMethod(this, _refreshAccessToken, refreshAccessToken_fn).call(this);
        }
      }
      revokeCredentials() {
        return __privateGet(this, _request2).call(this, {
          url: "/o/oauth2/revoke",
          baseURL: Constants.URLS.YT_BASE,
          params: { token: this.getAccessToken() },
          method: "post"
        });
      }
      get credentials() {
        return __privateGet(this, _credentials);
      }
      validateCredentials() {
        return __privateGet(this, _credentials).hasOwnProperty("access_token") && __privateGet(this, _credentials).hasOwnProperty("refresh_token") && __privateGet(this, _credentials).hasOwnProperty("expires");
      }
    };
    _request2 = new WeakMap();
    _identity = new WeakMap();
    _credentials = new WeakMap();
    _polling_interval = new WeakMap();
    _ev = new WeakMap();
    _getUserCode = new WeakSet();
    getUserCode_fn = async function() {
      __privateSet(this, _identity, await __privateMethod(this, _getClientIdentity, getClientIdentity_fn).call(this));
      const data = {
        client_id: __privateGet(this, _identity).client_id,
        scope: Constants.OAUTH.SCOPE,
        device_id: Uuid.v4(),
        model_name: Constants.OAUTH.MODEL_NAME
      };
      const response = await __privateGet(this, _request2).call(this, {
        data,
        url: "/o/oauth2/device/code",
        baseURL: Constants.URLS.YT_BASE,
        method: "post"
      }).catch((err) => err);
      if (response instanceof Error)
        return __privateGet(this, _ev).emit("auth", new OAuthError("Could not obtain user code.", response.message));
      __privateGet(this, _ev).emit("auth", {
        ...response.data,
        status: "AUTHORIZATION_PENDING"
      });
      __privateSet(this, _polling_interval, response.data.interval);
      __privateMethod(this, _startPolling, startPolling_fn).call(this, response.data.device_code);
    };
    _startPolling = new WeakSet();
    startPolling_fn = function(device_code) {
      const poller = setInterval(async () => {
        const data = {
          ...__privateGet(this, _identity),
          code: device_code,
          grant_type: Constants.OAUTH.GRANT_TYPE
        };
        const response = await __privateGet(this, _request2).call(this, {
          data,
          url: "/o/oauth2/token",
          baseURL: Constants.URLS.YT_BASE,
          method: "post"
        }).catch((err) => err);
        if (response instanceof Error)
          return __privateGet(this, _ev).emit("auth", new OAuthError("Could not obtain user code.", { status: "FAILED", message: response.message }));
        if (response.data.error) {
          switch (response.data.error) {
            case "access_denied":
              __privateGet(this, _ev).emit("auth", new OAuthError("Access was denied.", { status: "ACCESS_DENIED" }));
              break;
            case "expired_token":
              __privateGet(this, _ev).emit("auth", new OAuthError("The device code has expired, restarting auth flow.", { status: "DEVICE_CODE_EXPIRED" }));
              clearInterval(poller);
              __privateMethod(this, _getUserCode, getUserCode_fn).call(this);
              break;
            default:
              break;
          }
          return;
        }
        const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1e3);
        __privateSet(this, _credentials, {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
          expires: expiration_date
        });
        __privateGet(this, _ev).emit("auth", {
          credentials: __privateGet(this, _credentials),
          status: "SUCCESS"
        });
        clearInterval(poller);
      }, __privateGet(this, _polling_interval) * 1e3);
    };
    _refreshAccessToken = new WeakSet();
    refreshAccessToken_fn = async function() {
      __privateSet(this, _identity, await __privateMethod(this, _getClientIdentity, getClientIdentity_fn).call(this));
      const data = {
        ...__privateGet(this, _identity),
        refresh_token: __privateGet(this, _credentials).refresh_token,
        grant_type: "refresh_token"
      };
      const response = await __privateGet(this, _request2).call(this, {
        data,
        url: "/o/oauth2/token",
        baseURL: Constants.URLS.YT_BASE,
        method: "post"
      }).catch((err) => err);
      if (response instanceof Error)
        return __privateGet(this, _ev).emit("update-credentials", new OAuthError("Could not refresh access token.", { status: "FAILED" }));
      const expiration_date = new Date(new Date().getTime() + response.data.expires_in * 1e3);
      __privateSet(this, _credentials, {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token || this.credentials.refresh_token,
        expires: expiration_date
      });
      __privateGet(this, _ev).emit("update-credentials", {
        credentials: __privateGet(this, _credentials),
        status: "SUCCESS"
      });
    };
    _getClientIdentity = new WeakSet();
    getClientIdentity_fn = async function() {
      const response = await __privateGet(this, _request2).call(this, {
        url: "/tv",
        baseURL: Constants.URLS.YT_BASE,
        headers: Constants.OAUTH.HEADERS
      });
      const url_body = Constants.OAUTH.REGEX.AUTH_SCRIPT.exec(response.data)[1];
      const script = await __privateGet(this, _request2).call(this, { url: url_body, baseURL: Constants.URLS.YT_BASE });
      const client_identity = script.data.replace(/\n/g, "").match(Constants.OAUTH.REGEX.CLIENT_IDENTITY);
      return client_identity.groups;
    };
    module2.exports = OAuth2;
  }
});

// lib/proto/messages.js
var require_messages = __commonJS({
  "lib/proto/messages.js"(exports2) {
    var encodings = require("../node_modules/protocol-buffers-encodings/index.js");
    var varint = encodings.varint;
    var skip = encodings.skip;
    var VisitorData = exports2.VisitorData = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var ChannelAnalytics = exports2.ChannelAnalytics = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var InnertubePayload = exports2.InnertubePayload = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var SoundInfoParams = exports2.SoundInfoParams = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var NotificationPreferences = exports2.NotificationPreferences = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var LiveMessageParams = exports2.LiveMessageParams = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var GetCommentsSectionParams = exports2.GetCommentsSectionParams = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var CreateCommentParams = exports2.CreateCommentParams = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var CreateCommentReplyParams = exports2.CreateCommentReplyParams = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var PeformCommentActionParams = exports2.PeformCommentActionParams = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var MusicSearchFilter = exports2.MusicSearchFilter = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    var SearchFilter = exports2.SearchFilter = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    };
    defineVisitorData();
    defineChannelAnalytics();
    defineInnertubePayload();
    defineSoundInfoParams();
    defineNotificationPreferences();
    defineLiveMessageParams();
    defineGetCommentsSectionParams();
    defineCreateCommentParams();
    defineCreateCommentReplyParams();
    definePeformCommentActionParams();
    defineMusicSearchFilter();
    defineSearchFilter();
    function defineVisitorData() {
      VisitorData.encodingLength = encodingLength;
      VisitorData.encode = encode;
      VisitorData.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.id)) {
          var len = encodings.string.encodingLength(obj.id);
          length += 1 + len;
        }
        if (defined(obj.timestamp)) {
          var len = encodings.int32.encodingLength(obj.timestamp);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.id)) {
          buf[offset++] = 10;
          encodings.string.encode(obj.id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.timestamp)) {
          buf[offset++] = 40;
          encodings.int32.encode(obj.timestamp, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          id: "",
          timestamp: 0
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 1:
              obj.id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 5:
              obj.timestamp = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineChannelAnalytics() {
      var Params = ChannelAnalytics.Params = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineParams();
      function defineParams() {
        Params.encodingLength = encodingLength2;
        Params.encode = encode2;
        Params.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.channel_id)) {
            var len = encodings.string.encodingLength(obj.channel_id);
            length += 2 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.channel_id)) {
            buf[offset++] = 202;
            buf[offset++] = 62;
            encodings.string.encode(obj.channel_id, buf, offset);
            offset += encodings.string.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            channel_id: ""
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1001:
                obj.channel_id = encodings.string.decode(buf, offset);
                offset += encodings.string.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      ChannelAnalytics.encodingLength = encodingLength;
      ChannelAnalytics.encode = encode;
      ChannelAnalytics.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.params)) {
          var len = Params.encodingLength(obj.params);
          length += varint.encodingLength(len);
          length += 2 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.params)) {
          buf[offset++] = 130;
          buf[offset++] = 2;
          varint.encode(Params.encodingLength(obj.params), buf, offset);
          offset += varint.encode.bytes;
          Params.encode(obj.params, buf, offset);
          offset += Params.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          params: null
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 32:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.params = Params.decode(buf, offset, offset + len);
              offset += Params.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineInnertubePayload() {
      var Context = InnertubePayload.Context = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineContext();
      function defineContext() {
        var Client = Context.Client = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        defineClient();
        function defineClient() {
          Client.encodingLength = encodingLength3;
          Client.encode = encode3;
          Client.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.unkparam)) {
              var len = encodings.int32.encodingLength(obj.unkparam);
              length += 2 + len;
            }
            if (defined(obj.client_version)) {
              var len = encodings.string.encodingLength(obj.client_version);
              length += 2 + len;
            }
            if (defined(obj.client_name)) {
              var len = encodings.string.encodingLength(obj.client_name);
              length += 2 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.unkparam)) {
              buf[offset++] = 128;
              buf[offset++] = 1;
              encodings.int32.encode(obj.unkparam, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.client_version)) {
              buf[offset++] = 138;
              buf[offset++] = 1;
              encodings.string.encode(obj.client_version, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            if (defined(obj.client_name)) {
              buf[offset++] = 146;
              buf[offset++] = 1;
              encodings.string.encode(obj.client_name, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              unkparam: 0,
              client_version: "",
              client_name: ""
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 16:
                  obj.unkparam = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 17:
                  obj.client_version = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                case 18:
                  obj.client_name = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        Context.encodingLength = encodingLength2;
        Context.encode = encode2;
        Context.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.client)) {
            var len = Client.encodingLength(obj.client);
            length += varint.encodingLength(len);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.client)) {
            buf[offset++] = 10;
            varint.encode(Client.encodingLength(obj.client), buf, offset);
            offset += varint.encode.bytes;
            Client.encode(obj.client, buf, offset);
            offset += Client.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            client: null
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.client = Client.decode(buf, offset, offset + len);
                offset += Client.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      InnertubePayload.encodingLength = encodingLength;
      InnertubePayload.encode = encode;
      InnertubePayload.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.context)) {
          var len = Context.encodingLength(obj.context);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        if (defined(obj.target)) {
          var len = encodings.string.encodingLength(obj.target);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.context)) {
          buf[offset++] = 10;
          varint.encode(Context.encodingLength(obj.context), buf, offset);
          offset += varint.encode.bytes;
          Context.encode(obj.context, buf, offset);
          offset += Context.encode.bytes;
        }
        if (defined(obj.target)) {
          buf[offset++] = 18;
          encodings.string.encode(obj.target, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          context: null,
          target: ""
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 1:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.context = Context.decode(buf, offset, offset + len);
              offset += Context.decode.bytes;
              break;
            case 2:
              obj.target = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineSoundInfoParams() {
      var Sound = SoundInfoParams.Sound = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineSound();
      function defineSound() {
        var Params = Sound.Params = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        defineParams();
        function defineParams() {
          var Ids = Params.Ids = {
            buffer: true,
            encodingLength: null,
            encode: null,
            decode: null
          };
          defineIds();
          function defineIds() {
            Ids.encodingLength = encodingLength4;
            Ids.encode = encode4;
            Ids.decode = decode4;
            function encodingLength4(obj) {
              var length = 0;
              if (defined(obj.id_1)) {
                var len = encodings.string.encodingLength(obj.id_1);
                length += 1 + len;
              }
              if (defined(obj.id_2)) {
                var len = encodings.string.encodingLength(obj.id_2);
                length += 1 + len;
              }
              if (defined(obj.id_3)) {
                var len = encodings.string.encodingLength(obj.id_3);
                length += 1 + len;
              }
              return length;
            }
            function encode4(obj, buf, offset) {
              if (!offset)
                offset = 0;
              if (!buf)
                buf = Buffer.allocUnsafe(encodingLength4(obj));
              var oldOffset = offset;
              if (defined(obj.id_1)) {
                buf[offset++] = 10;
                encodings.string.encode(obj.id_1, buf, offset);
                offset += encodings.string.encode.bytes;
              }
              if (defined(obj.id_2)) {
                buf[offset++] = 18;
                encodings.string.encode(obj.id_2, buf, offset);
                offset += encodings.string.encode.bytes;
              }
              if (defined(obj.id_3)) {
                buf[offset++] = 26;
                encodings.string.encode(obj.id_3, buf, offset);
                offset += encodings.string.encode.bytes;
              }
              encode4.bytes = offset - oldOffset;
              return buf;
            }
            function decode4(buf, offset, end) {
              if (!offset)
                offset = 0;
              if (!end)
                end = buf.length;
              if (!(end <= buf.length && offset <= buf.length))
                throw new Error("Decoded message is not valid");
              var oldOffset = offset;
              var obj = {
                id_1: "",
                id_2: "",
                id_3: ""
              };
              while (true) {
                if (end <= offset) {
                  decode4.bytes = offset - oldOffset;
                  return obj;
                }
                var prefix = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                var tag = prefix >> 3;
                switch (tag) {
                  case 1:
                    obj.id_1 = encodings.string.decode(buf, offset);
                    offset += encodings.string.decode.bytes;
                    break;
                  case 2:
                    obj.id_2 = encodings.string.decode(buf, offset);
                    offset += encodings.string.decode.bytes;
                    break;
                  case 3:
                    obj.id_3 = encodings.string.decode(buf, offset);
                    offset += encodings.string.decode.bytes;
                    break;
                  default:
                    offset = skip(prefix & 7, buf, offset);
                }
              }
            }
          }
          Params.encodingLength = encodingLength3;
          Params.encode = encode3;
          Params.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.ids)) {
              var len = Ids.encodingLength(obj.ids);
              length += varint.encodingLength(len);
              length += 1 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.ids)) {
              buf[offset++] = 18;
              varint.encode(Ids.encodingLength(obj.ids), buf, offset);
              offset += varint.encode.bytes;
              Ids.encode(obj.ids, buf, offset);
              offset += Ids.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              ids: null
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 2:
                  var len = varint.decode(buf, offset);
                  offset += varint.decode.bytes;
                  obj.ids = Ids.decode(buf, offset, offset + len);
                  offset += Ids.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        Sound.encodingLength = encodingLength2;
        Sound.encode = encode2;
        Sound.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.params)) {
            var len = Params.encodingLength(obj.params);
            length += varint.encodingLength(len);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.params)) {
            buf[offset++] = 10;
            varint.encode(Params.encodingLength(obj.params), buf, offset);
            offset += varint.encode.bytes;
            Params.encode(obj.params, buf, offset);
            offset += Params.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            params: null
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.params = Params.decode(buf, offset, offset + len);
                offset += Params.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      SoundInfoParams.encodingLength = encodingLength;
      SoundInfoParams.encode = encode;
      SoundInfoParams.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.sound)) {
          var len = Sound.encodingLength(obj.sound);
          length += varint.encodingLength(len);
          length += 2 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.sound)) {
          buf[offset++] = 242;
          buf[offset++] = 5;
          varint.encode(Sound.encodingLength(obj.sound), buf, offset);
          offset += varint.encode.bytes;
          Sound.encode(obj.sound, buf, offset);
          offset += Sound.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          sound: null
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 94:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.sound = Sound.decode(buf, offset, offset + len);
              offset += Sound.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineNotificationPreferences() {
      var Preference = NotificationPreferences.Preference = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      definePreference();
      function definePreference() {
        Preference.encodingLength = encodingLength2;
        Preference.encode = encode2;
        Preference.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.index)) {
            var len = encodings.int32.encodingLength(obj.index);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.index)) {
            buf[offset++] = 8;
            encodings.int32.encode(obj.index, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            index: 0
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                obj.index = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      NotificationPreferences.encodingLength = encodingLength;
      NotificationPreferences.encode = encode;
      NotificationPreferences.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.channel_id)) {
          var len = encodings.string.encodingLength(obj.channel_id);
          length += 1 + len;
        }
        if (defined(obj.pref_id)) {
          var len = Preference.encodingLength(obj.pref_id);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        if (defined(obj.number_0)) {
          var len = encodings.int32.encodingLength(obj.number_0);
          length += 1 + len;
        }
        if (defined(obj.number_1)) {
          var len = encodings.int32.encodingLength(obj.number_1);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.channel_id)) {
          buf[offset++] = 10;
          encodings.string.encode(obj.channel_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.pref_id)) {
          buf[offset++] = 18;
          varint.encode(Preference.encodingLength(obj.pref_id), buf, offset);
          offset += varint.encode.bytes;
          Preference.encode(obj.pref_id, buf, offset);
          offset += Preference.encode.bytes;
        }
        if (defined(obj.number_0)) {
          buf[offset++] = 24;
          encodings.int32.encode(obj.number_0, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.number_1)) {
          buf[offset++] = 32;
          encodings.int32.encode(obj.number_1, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          channel_id: "",
          pref_id: null,
          number_0: 0,
          number_1: 0
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 1:
              obj.channel_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 2:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.pref_id = Preference.decode(buf, offset, offset + len);
              offset += Preference.decode.bytes;
              break;
            case 3:
              obj.number_0 = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 4:
              obj.number_1 = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineLiveMessageParams() {
      var Params = LiveMessageParams.Params = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineParams();
      function defineParams() {
        var Ids = Params.Ids = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        defineIds();
        function defineIds() {
          Ids.encodingLength = encodingLength3;
          Ids.encode = encode3;
          Ids.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.channel_id)) {
              var len = encodings.string.encodingLength(obj.channel_id);
              length += 1 + len;
            }
            if (defined(obj.video_id)) {
              var len = encodings.string.encodingLength(obj.video_id);
              length += 1 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.channel_id)) {
              buf[offset++] = 10;
              encodings.string.encode(obj.channel_id, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            if (defined(obj.video_id)) {
              buf[offset++] = 18;
              encodings.string.encode(obj.video_id, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              channel_id: "",
              video_id: ""
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 1:
                  obj.channel_id = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                case 2:
                  obj.video_id = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        Params.encodingLength = encodingLength2;
        Params.encode = encode2;
        Params.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.ids)) {
            var len = Ids.encodingLength(obj.ids);
            length += varint.encodingLength(len);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.ids)) {
            buf[offset++] = 42;
            varint.encode(Ids.encodingLength(obj.ids), buf, offset);
            offset += varint.encode.bytes;
            Ids.encode(obj.ids, buf, offset);
            offset += Ids.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            ids: null
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 5:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.ids = Ids.decode(buf, offset, offset + len);
                offset += Ids.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      LiveMessageParams.encodingLength = encodingLength;
      LiveMessageParams.encode = encode;
      LiveMessageParams.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.params)) {
          var len = Params.encodingLength(obj.params);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        if (defined(obj.number_0)) {
          var len = encodings.int32.encodingLength(obj.number_0);
          length += 1 + len;
        }
        if (defined(obj.number_1)) {
          var len = encodings.int32.encodingLength(obj.number_1);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.params)) {
          buf[offset++] = 10;
          varint.encode(Params.encodingLength(obj.params), buf, offset);
          offset += varint.encode.bytes;
          Params.encode(obj.params, buf, offset);
          offset += Params.encode.bytes;
        }
        if (defined(obj.number_0)) {
          buf[offset++] = 16;
          encodings.int32.encode(obj.number_0, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.number_1)) {
          buf[offset++] = 24;
          encodings.int32.encode(obj.number_1, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          params: null,
          number_0: 0,
          number_1: 0
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 1:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.params = Params.decode(buf, offset, offset + len);
              offset += Params.decode.bytes;
              break;
            case 2:
              obj.number_0 = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 3:
              obj.number_1 = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineGetCommentsSectionParams() {
      var Context = GetCommentsSectionParams.Context = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      var Params = GetCommentsSectionParams.Params = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineContext();
      defineParams();
      function defineContext() {
        Context.encodingLength = encodingLength2;
        Context.encode = encode2;
        Context.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.video_id)) {
            var len = encodings.string.encodingLength(obj.video_id);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.video_id)) {
            buf[offset++] = 18;
            encodings.string.encode(obj.video_id, buf, offset);
            offset += encodings.string.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            video_id: ""
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 2:
                obj.video_id = encodings.string.decode(buf, offset);
                offset += encodings.string.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      function defineParams() {
        var Options = Params.Options = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        var RepliesOptions = Params.RepliesOptions = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        defineOptions();
        defineRepliesOptions();
        function defineOptions() {
          Options.encodingLength = encodingLength3;
          Options.encode = encode3;
          Options.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.video_id)) {
              var len = encodings.string.encodingLength(obj.video_id);
              length += 1 + len;
            }
            if (defined(obj.sort_by)) {
              var len = encodings.int32.encodingLength(obj.sort_by);
              length += 1 + len;
            }
            if (defined(obj.type)) {
              var len = encodings.int32.encodingLength(obj.type);
              length += 1 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.video_id)) {
              buf[offset++] = 34;
              encodings.string.encode(obj.video_id, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            if (defined(obj.sort_by)) {
              buf[offset++] = 48;
              encodings.int32.encode(obj.sort_by, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.type)) {
              buf[offset++] = 120;
              encodings.int32.encode(obj.type, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              video_id: "",
              sort_by: 0,
              type: 0
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 4:
                  obj.video_id = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                case 6:
                  obj.sort_by = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 15:
                  obj.type = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        function defineRepliesOptions() {
          var UnkOpts = RepliesOptions.UnkOpts = {
            buffer: true,
            encodingLength: null,
            encode: null,
            decode: null
          };
          defineUnkOpts();
          function defineUnkOpts() {
            UnkOpts.encodingLength = encodingLength4;
            UnkOpts.encode = encode4;
            UnkOpts.decode = decode4;
            function encodingLength4(obj) {
              var length = 0;
              if (defined(obj.unk_param)) {
                var len = encodings.int32.encodingLength(obj.unk_param);
                length += 1 + len;
              }
              return length;
            }
            function encode4(obj, buf, offset) {
              if (!offset)
                offset = 0;
              if (!buf)
                buf = Buffer.allocUnsafe(encodingLength4(obj));
              var oldOffset = offset;
              if (defined(obj.unk_param)) {
                buf[offset++] = 8;
                encodings.int32.encode(obj.unk_param, buf, offset);
                offset += encodings.int32.encode.bytes;
              }
              encode4.bytes = offset - oldOffset;
              return buf;
            }
            function decode4(buf, offset, end) {
              if (!offset)
                offset = 0;
              if (!end)
                end = buf.length;
              if (!(end <= buf.length && offset <= buf.length))
                throw new Error("Decoded message is not valid");
              var oldOffset = offset;
              var obj = {
                unk_param: 0
              };
              while (true) {
                if (end <= offset) {
                  decode4.bytes = offset - oldOffset;
                  return obj;
                }
                var prefix = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                var tag = prefix >> 3;
                switch (tag) {
                  case 1:
                    obj.unk_param = encodings.int32.decode(buf, offset);
                    offset += encodings.int32.decode.bytes;
                    break;
                  default:
                    offset = skip(prefix & 7, buf, offset);
                }
              }
            }
          }
          RepliesOptions.encodingLength = encodingLength3;
          RepliesOptions.encode = encode3;
          RepliesOptions.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.comment_id)) {
              var len = encodings.string.encodingLength(obj.comment_id);
              length += 1 + len;
            }
            if (defined(obj.unkopts)) {
              var len = UnkOpts.encodingLength(obj.unkopts);
              length += varint.encodingLength(len);
              length += 1 + len;
            }
            if (defined(obj.channel_id)) {
              var len = encodings.string.encodingLength(obj.channel_id);
              length += 1 + len;
            }
            if (defined(obj.video_id)) {
              var len = encodings.string.encodingLength(obj.video_id);
              length += 1 + len;
            }
            if (defined(obj.unk_param_1)) {
              var len = encodings.int32.encodingLength(obj.unk_param_1);
              length += 1 + len;
            }
            if (defined(obj.unk_param_2)) {
              var len = encodings.int32.encodingLength(obj.unk_param_2);
              length += 1 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.comment_id)) {
              buf[offset++] = 18;
              encodings.string.encode(obj.comment_id, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            if (defined(obj.unkopts)) {
              buf[offset++] = 34;
              varint.encode(UnkOpts.encodingLength(obj.unkopts), buf, offset);
              offset += varint.encode.bytes;
              UnkOpts.encode(obj.unkopts, buf, offset);
              offset += UnkOpts.encode.bytes;
            }
            if (defined(obj.channel_id)) {
              buf[offset++] = 42;
              encodings.string.encode(obj.channel_id, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            if (defined(obj.video_id)) {
              buf[offset++] = 50;
              encodings.string.encode(obj.video_id, buf, offset);
              offset += encodings.string.encode.bytes;
            }
            if (defined(obj.unk_param_1)) {
              buf[offset++] = 64;
              encodings.int32.encode(obj.unk_param_1, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.unk_param_2)) {
              buf[offset++] = 72;
              encodings.int32.encode(obj.unk_param_2, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              comment_id: "",
              unkopts: null,
              channel_id: "",
              video_id: "",
              unk_param_1: 0,
              unk_param_2: 0
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 2:
                  obj.comment_id = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                case 4:
                  var len = varint.decode(buf, offset);
                  offset += varint.decode.bytes;
                  obj.unkopts = UnkOpts.decode(buf, offset, offset + len);
                  offset += UnkOpts.decode.bytes;
                  break;
                case 5:
                  obj.channel_id = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                case 6:
                  obj.video_id = encodings.string.decode(buf, offset);
                  offset += encodings.string.decode.bytes;
                  break;
                case 8:
                  obj.unk_param_1 = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 9:
                  obj.unk_param_2 = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        Params.encodingLength = encodingLength2;
        Params.encode = encode2;
        Params.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.unk_token)) {
            var len = encodings.string.encodingLength(obj.unk_token);
            length += 1 + len;
          }
          if (defined(obj.opts)) {
            var len = Options.encodingLength(obj.opts);
            length += varint.encodingLength(len);
            length += 1 + len;
          }
          if (defined(obj.replies_opts)) {
            var len = RepliesOptions.encodingLength(obj.replies_opts);
            length += varint.encodingLength(len);
            length += 1 + len;
          }
          if (defined(obj.page)) {
            var len = encodings.int32.encodingLength(obj.page);
            length += 1 + len;
          }
          if (defined(obj.target)) {
            var len = encodings.string.encodingLength(obj.target);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.unk_token)) {
            buf[offset++] = 10;
            encodings.string.encode(obj.unk_token, buf, offset);
            offset += encodings.string.encode.bytes;
          }
          if (defined(obj.opts)) {
            buf[offset++] = 34;
            varint.encode(Options.encodingLength(obj.opts), buf, offset);
            offset += varint.encode.bytes;
            Options.encode(obj.opts, buf, offset);
            offset += Options.encode.bytes;
          }
          if (defined(obj.replies_opts)) {
            buf[offset++] = 26;
            varint.encode(RepliesOptions.encodingLength(obj.replies_opts), buf, offset);
            offset += varint.encode.bytes;
            RepliesOptions.encode(obj.replies_opts, buf, offset);
            offset += RepliesOptions.encode.bytes;
          }
          if (defined(obj.page)) {
            buf[offset++] = 40;
            encodings.int32.encode(obj.page, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          if (defined(obj.target)) {
            buf[offset++] = 66;
            encodings.string.encode(obj.target, buf, offset);
            offset += encodings.string.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            unk_token: "",
            opts: null,
            replies_opts: null,
            page: 0,
            target: ""
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                obj.unk_token = encodings.string.decode(buf, offset);
                offset += encodings.string.decode.bytes;
                break;
              case 4:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.opts = Options.decode(buf, offset, offset + len);
                offset += Options.decode.bytes;
                break;
              case 3:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.replies_opts = RepliesOptions.decode(buf, offset, offset + len);
                offset += RepliesOptions.decode.bytes;
                break;
              case 5:
                obj.page = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              case 8:
                obj.target = encodings.string.decode(buf, offset);
                offset += encodings.string.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      GetCommentsSectionParams.encodingLength = encodingLength;
      GetCommentsSectionParams.encode = encode;
      GetCommentsSectionParams.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.ctx)) {
          var len = Context.encodingLength(obj.ctx);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        if (defined(obj.unk_param)) {
          var len = encodings.int32.encodingLength(obj.unk_param);
          length += 1 + len;
        }
        if (defined(obj.params)) {
          var len = Params.encodingLength(obj.params);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.ctx)) {
          buf[offset++] = 18;
          varint.encode(Context.encodingLength(obj.ctx), buf, offset);
          offset += varint.encode.bytes;
          Context.encode(obj.ctx, buf, offset);
          offset += Context.encode.bytes;
        }
        if (defined(obj.unk_param)) {
          buf[offset++] = 24;
          encodings.int32.encode(obj.unk_param, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.params)) {
          buf[offset++] = 50;
          varint.encode(Params.encodingLength(obj.params), buf, offset);
          offset += varint.encode.bytes;
          Params.encode(obj.params, buf, offset);
          offset += Params.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          ctx: null,
          unk_param: 0,
          params: null
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 2:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.ctx = Context.decode(buf, offset, offset + len);
              offset += Context.decode.bytes;
              break;
            case 3:
              obj.unk_param = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 6:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.params = Params.decode(buf, offset, offset + len);
              offset += Params.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineCreateCommentParams() {
      var Params = CreateCommentParams.Params = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineParams();
      function defineParams() {
        Params.encodingLength = encodingLength2;
        Params.encode = encode2;
        Params.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.index)) {
            var len = encodings.int32.encodingLength(obj.index);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.index)) {
            buf[offset++] = 8;
            encodings.int32.encode(obj.index, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            index: 0
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                obj.index = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      CreateCommentParams.encodingLength = encodingLength;
      CreateCommentParams.encode = encode;
      CreateCommentParams.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.video_id)) {
          var len = encodings.string.encodingLength(obj.video_id);
          length += 1 + len;
        }
        if (defined(obj.params)) {
          var len = Params.encodingLength(obj.params);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        if (defined(obj.number)) {
          var len = encodings.int32.encodingLength(obj.number);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.video_id)) {
          buf[offset++] = 18;
          encodings.string.encode(obj.video_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.params)) {
          buf[offset++] = 42;
          varint.encode(Params.encodingLength(obj.params), buf, offset);
          offset += varint.encode.bytes;
          Params.encode(obj.params, buf, offset);
          offset += Params.encode.bytes;
        }
        if (defined(obj.number)) {
          buf[offset++] = 80;
          encodings.int32.encode(obj.number, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          video_id: "",
          params: null,
          number: 0
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 2:
              obj.video_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 5:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.params = Params.decode(buf, offset, offset + len);
              offset += Params.decode.bytes;
              break;
            case 10:
              obj.number = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineCreateCommentReplyParams() {
      var UnknownParams = CreateCommentReplyParams.UnknownParams = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineUnknownParams();
      function defineUnknownParams() {
        UnknownParams.encodingLength = encodingLength2;
        UnknownParams.encode = encode2;
        UnknownParams.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.unk_num)) {
            var len = encodings.int32.encodingLength(obj.unk_num);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.unk_num)) {
            buf[offset++] = 8;
            encodings.int32.encode(obj.unk_num, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            unk_num: 0
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                obj.unk_num = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      CreateCommentReplyParams.encodingLength = encodingLength;
      CreateCommentReplyParams.encode = encode;
      CreateCommentReplyParams.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.video_id)) {
          var len = encodings.string.encodingLength(obj.video_id);
          length += 1 + len;
        }
        if (defined(obj.comment_id)) {
          var len = encodings.string.encodingLength(obj.comment_id);
          length += 1 + len;
        }
        if (defined(obj.params)) {
          var len = UnknownParams.encodingLength(obj.params);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        if (defined(obj.unk_num)) {
          var len = encodings.int32.encodingLength(obj.unk_num);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.video_id)) {
          buf[offset++] = 18;
          encodings.string.encode(obj.video_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.comment_id)) {
          buf[offset++] = 34;
          encodings.string.encode(obj.comment_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.params)) {
          buf[offset++] = 42;
          varint.encode(UnknownParams.encodingLength(obj.params), buf, offset);
          offset += varint.encode.bytes;
          UnknownParams.encode(obj.params, buf, offset);
          offset += UnknownParams.encode.bytes;
        }
        if (defined(obj.unk_num)) {
          buf[offset++] = 80;
          encodings.int32.encode(obj.unk_num, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          video_id: "",
          comment_id: "",
          params: null,
          unk_num: 0
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 2:
              obj.video_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 4:
              obj.comment_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 5:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.params = UnknownParams.decode(buf, offset, offset + len);
              offset += UnknownParams.decode.bytes;
              break;
            case 10:
              obj.unk_num = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function definePeformCommentActionParams() {
      var TranslateCommentParams = PeformCommentActionParams.TranslateCommentParams = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineTranslateCommentParams();
      function defineTranslateCommentParams() {
        var Params = TranslateCommentParams.Params = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        defineParams();
        function defineParams() {
          var Comment = Params.Comment = {
            buffer: true,
            encodingLength: null,
            encode: null,
            decode: null
          };
          defineComment();
          function defineComment() {
            Comment.encodingLength = encodingLength4;
            Comment.encode = encode4;
            Comment.decode = decode4;
            function encodingLength4(obj) {
              var length = 0;
              if (defined(obj.text)) {
                var len = encodings.string.encodingLength(obj.text);
                length += 1 + len;
              }
              return length;
            }
            function encode4(obj, buf, offset) {
              if (!offset)
                offset = 0;
              if (!buf)
                buf = Buffer.allocUnsafe(encodingLength4(obj));
              var oldOffset = offset;
              if (defined(obj.text)) {
                buf[offset++] = 10;
                encodings.string.encode(obj.text, buf, offset);
                offset += encodings.string.encode.bytes;
              }
              encode4.bytes = offset - oldOffset;
              return buf;
            }
            function decode4(buf, offset, end) {
              if (!offset)
                offset = 0;
              if (!end)
                end = buf.length;
              if (!(end <= buf.length && offset <= buf.length))
                throw new Error("Decoded message is not valid");
              var oldOffset = offset;
              var obj = {
                text: ""
              };
              while (true) {
                if (end <= offset) {
                  decode4.bytes = offset - oldOffset;
                  return obj;
                }
                var prefix = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                var tag = prefix >> 3;
                switch (tag) {
                  case 1:
                    obj.text = encodings.string.decode(buf, offset);
                    offset += encodings.string.decode.bytes;
                    break;
                  default:
                    offset = skip(prefix & 7, buf, offset);
                }
              }
            }
          }
          Params.encodingLength = encodingLength3;
          Params.encode = encode3;
          Params.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.comment)) {
              var len = Comment.encodingLength(obj.comment);
              length += varint.encodingLength(len);
              length += 1 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.comment)) {
              buf[offset++] = 10;
              varint.encode(Comment.encodingLength(obj.comment), buf, offset);
              offset += varint.encode.bytes;
              Comment.encode(obj.comment, buf, offset);
              offset += Comment.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              comment: null
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 1:
                  var len = varint.decode(buf, offset);
                  offset += varint.decode.bytes;
                  obj.comment = Comment.decode(buf, offset, offset + len);
                  offset += Comment.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        TranslateCommentParams.encodingLength = encodingLength2;
        TranslateCommentParams.encode = encode2;
        TranslateCommentParams.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.params)) {
            var len = Params.encodingLength(obj.params);
            length += varint.encodingLength(len);
            length += 1 + len;
          }
          if (defined(obj.comment_id)) {
            var len = encodings.string.encodingLength(obj.comment_id);
            length += 1 + len;
          }
          if (defined(obj.target_language)) {
            var len = encodings.string.encodingLength(obj.target_language);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.params)) {
            buf[offset++] = 26;
            varint.encode(Params.encodingLength(obj.params), buf, offset);
            offset += varint.encode.bytes;
            Params.encode(obj.params, buf, offset);
            offset += Params.encode.bytes;
          }
          if (defined(obj.comment_id)) {
            buf[offset++] = 18;
            encodings.string.encode(obj.comment_id, buf, offset);
            offset += encodings.string.encode.bytes;
          }
          if (defined(obj.target_language)) {
            buf[offset++] = 34;
            encodings.string.encode(obj.target_language, buf, offset);
            offset += encodings.string.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            params: null,
            comment_id: "",
            target_language: ""
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 3:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.params = Params.decode(buf, offset, offset + len);
                offset += Params.decode.bytes;
                break;
              case 2:
                obj.comment_id = encodings.string.decode(buf, offset);
                offset += encodings.string.decode.bytes;
                break;
              case 4:
                obj.target_language = encodings.string.decode(buf, offset);
                offset += encodings.string.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      PeformCommentActionParams.encodingLength = encodingLength;
      PeformCommentActionParams.encode = encode;
      PeformCommentActionParams.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.type)) {
          var len = encodings.int32.encodingLength(obj.type);
          length += 1 + len;
        }
        if (defined(obj.comment_id)) {
          var len = encodings.string.encodingLength(obj.comment_id);
          length += 1 + len;
        }
        if (defined(obj.video_id)) {
          var len = encodings.string.encodingLength(obj.video_id);
          length += 1 + len;
        }
        if (defined(obj.unk_num)) {
          var len = encodings.int32.encodingLength(obj.unk_num);
          length += 1 + len;
        }
        if (defined(obj.channel_id)) {
          var len = encodings.string.encodingLength(obj.channel_id);
          length += 2 + len;
        }
        if (defined(obj.translate_comment_params)) {
          var len = TranslateCommentParams.encodingLength(obj.translate_comment_params);
          length += varint.encodingLength(len);
          length += 2 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.type)) {
          buf[offset++] = 8;
          encodings.int32.encode(obj.type, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.comment_id)) {
          buf[offset++] = 26;
          encodings.string.encode(obj.comment_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.video_id)) {
          buf[offset++] = 42;
          encodings.string.encode(obj.video_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.unk_num)) {
          buf[offset++] = 16;
          encodings.int32.encode(obj.unk_num, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.channel_id)) {
          buf[offset++] = 186;
          buf[offset++] = 1;
          encodings.string.encode(obj.channel_id, buf, offset);
          offset += encodings.string.encode.bytes;
        }
        if (defined(obj.translate_comment_params)) {
          buf[offset++] = 250;
          buf[offset++] = 1;
          varint.encode(TranslateCommentParams.encodingLength(obj.translate_comment_params), buf, offset);
          offset += varint.encode.bytes;
          TranslateCommentParams.encode(obj.translate_comment_params, buf, offset);
          offset += TranslateCommentParams.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          type: 0,
          comment_id: "",
          video_id: "",
          unk_num: 0,
          channel_id: "",
          translate_comment_params: null
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 1:
              obj.type = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 3:
              obj.comment_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 5:
              obj.video_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 2:
              obj.unk_num = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 23:
              obj.channel_id = encodings.string.decode(buf, offset);
              offset += encodings.string.decode.bytes;
              break;
            case 31:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.translate_comment_params = TranslateCommentParams.decode(buf, offset, offset + len);
              offset += TranslateCommentParams.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineMusicSearchFilter() {
      var Filters = MusicSearchFilter.Filters = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineFilters();
      function defineFilters() {
        var Type = Filters.Type = {
          buffer: true,
          encodingLength: null,
          encode: null,
          decode: null
        };
        defineType();
        function defineType() {
          Type.encodingLength = encodingLength3;
          Type.encode = encode3;
          Type.decode = decode3;
          function encodingLength3(obj) {
            var length = 0;
            if (defined(obj.all)) {
              var len = encodings.int32.encodingLength(obj.all);
              length += 1 + len;
            }
            if (defined(obj.song)) {
              var len = encodings.int32.encodingLength(obj.song);
              length += 1 + len;
            }
            if (defined(obj.video)) {
              var len = encodings.int32.encodingLength(obj.video);
              length += 1 + len;
            }
            if (defined(obj.album)) {
              var len = encodings.int32.encodingLength(obj.album);
              length += 1 + len;
            }
            if (defined(obj.artist)) {
              var len = encodings.int32.encodingLength(obj.artist);
              length += 1 + len;
            }
            if (defined(obj.playlist)) {
              var len = encodings.int32.encodingLength(obj.playlist);
              length += 1 + len;
            }
            return length;
          }
          function encode3(obj, buf, offset) {
            if (!offset)
              offset = 0;
            if (!buf)
              buf = Buffer.allocUnsafe(encodingLength3(obj));
            var oldOffset = offset;
            if (defined(obj.all)) {
              buf[offset++] = 0;
              encodings.int32.encode(obj.all, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.song)) {
              buf[offset++] = 8;
              encodings.int32.encode(obj.song, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.video)) {
              buf[offset++] = 16;
              encodings.int32.encode(obj.video, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.album)) {
              buf[offset++] = 24;
              encodings.int32.encode(obj.album, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.artist)) {
              buf[offset++] = 32;
              encodings.int32.encode(obj.artist, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            if (defined(obj.playlist)) {
              buf[offset++] = 40;
              encodings.int32.encode(obj.playlist, buf, offset);
              offset += encodings.int32.encode.bytes;
            }
            encode3.bytes = offset - oldOffset;
            return buf;
          }
          function decode3(buf, offset, end) {
            if (!offset)
              offset = 0;
            if (!end)
              end = buf.length;
            if (!(end <= buf.length && offset <= buf.length))
              throw new Error("Decoded message is not valid");
            var oldOffset = offset;
            var obj = {
              all: 0,
              song: 0,
              video: 0,
              album: 0,
              artist: 0,
              playlist: 0
            };
            while (true) {
              if (end <= offset) {
                decode3.bytes = offset - oldOffset;
                return obj;
              }
              var prefix = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              var tag = prefix >> 3;
              switch (tag) {
                case 0:
                  obj.all = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 1:
                  obj.song = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 2:
                  obj.video = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 3:
                  obj.album = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 4:
                  obj.artist = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                case 5:
                  obj.playlist = encodings.int32.decode(buf, offset);
                  offset += encodings.int32.decode.bytes;
                  break;
                default:
                  offset = skip(prefix & 7, buf, offset);
              }
            }
          }
        }
        Filters.encodingLength = encodingLength2;
        Filters.encode = encode2;
        Filters.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.type)) {
            var len = Type.encodingLength(obj.type);
            length += varint.encodingLength(len);
            length += 2 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.type)) {
            buf[offset++] = 138;
            buf[offset++] = 1;
            varint.encode(Type.encodingLength(obj.type), buf, offset);
            offset += varint.encode.bytes;
            Type.encode(obj.type, buf, offset);
            offset += Type.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            type: null
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 17:
                var len = varint.decode(buf, offset);
                offset += varint.decode.bytes;
                obj.type = Type.decode(buf, offset, offset + len);
                offset += Type.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      MusicSearchFilter.encodingLength = encodingLength;
      MusicSearchFilter.encode = encode;
      MusicSearchFilter.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.filters)) {
          var len = Filters.encodingLength(obj.filters);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.filters)) {
          buf[offset++] = 18;
          varint.encode(Filters.encodingLength(obj.filters), buf, offset);
          offset += varint.encode.bytes;
          Filters.encode(obj.filters, buf, offset);
          offset += Filters.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          filters: null
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 2:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.filters = Filters.decode(buf, offset, offset + len);
              offset += Filters.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defineSearchFilter() {
      var Filters = SearchFilter.Filters = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      };
      defineFilters();
      function defineFilters() {
        Filters.encodingLength = encodingLength2;
        Filters.encode = encode2;
        Filters.decode = decode2;
        function encodingLength2(obj) {
          var length = 0;
          if (defined(obj.upload_date)) {
            var len = encodings.int32.encodingLength(obj.upload_date);
            length += 1 + len;
          }
          if (defined(obj.type)) {
            var len = encodings.int32.encodingLength(obj.type);
            length += 1 + len;
          }
          if (defined(obj.duration)) {
            var len = encodings.int32.encodingLength(obj.duration);
            length += 1 + len;
          }
          return length;
        }
        function encode2(obj, buf, offset) {
          if (!offset)
            offset = 0;
          if (!buf)
            buf = Buffer.allocUnsafe(encodingLength2(obj));
          var oldOffset = offset;
          if (defined(obj.upload_date)) {
            buf[offset++] = 8;
            encodings.int32.encode(obj.upload_date, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          if (defined(obj.type)) {
            buf[offset++] = 16;
            encodings.int32.encode(obj.type, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          if (defined(obj.duration)) {
            buf[offset++] = 24;
            encodings.int32.encode(obj.duration, buf, offset);
            offset += encodings.int32.encode.bytes;
          }
          encode2.bytes = offset - oldOffset;
          return buf;
        }
        function decode2(buf, offset, end) {
          if (!offset)
            offset = 0;
          if (!end)
            end = buf.length;
          if (!(end <= buf.length && offset <= buf.length))
            throw new Error("Decoded message is not valid");
          var oldOffset = offset;
          var obj = {
            upload_date: 0,
            type: 0,
            duration: 0
          };
          while (true) {
            if (end <= offset) {
              decode2.bytes = offset - oldOffset;
              return obj;
            }
            var prefix = varint.decode(buf, offset);
            offset += varint.decode.bytes;
            var tag = prefix >> 3;
            switch (tag) {
              case 1:
                obj.upload_date = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              case 2:
                obj.type = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              case 3:
                obj.duration = encodings.int32.decode(buf, offset);
                offset += encodings.int32.decode.bytes;
                break;
              default:
                offset = skip(prefix & 7, buf, offset);
            }
          }
        }
      }
      SearchFilter.encodingLength = encodingLength;
      SearchFilter.encode = encode;
      SearchFilter.decode = decode;
      function encodingLength(obj) {
        var length = 0;
        if (defined(obj.sort_by)) {
          var len = encodings.int32.encodingLength(obj.sort_by);
          length += 1 + len;
        }
        if (defined(obj.no_filter)) {
          var len = encodings.int32.encodingLength(obj.no_filter);
          length += 2 + len;
        }
        if (defined(obj.filters)) {
          var len = Filters.encodingLength(obj.filters);
          length += varint.encodingLength(len);
          length += 1 + len;
        }
        return length;
      }
      function encode(obj, buf, offset) {
        if (!offset)
          offset = 0;
        if (!buf)
          buf = Buffer.allocUnsafe(encodingLength(obj));
        var oldOffset = offset;
        if (defined(obj.sort_by)) {
          buf[offset++] = 8;
          encodings.int32.encode(obj.sort_by, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.no_filter)) {
          buf[offset++] = 152;
          buf[offset++] = 1;
          encodings.int32.encode(obj.no_filter, buf, offset);
          offset += encodings.int32.encode.bytes;
        }
        if (defined(obj.filters)) {
          buf[offset++] = 18;
          varint.encode(Filters.encodingLength(obj.filters), buf, offset);
          offset += varint.encode.bytes;
          Filters.encode(obj.filters, buf, offset);
          offset += Filters.encode.bytes;
        }
        encode.bytes = offset - oldOffset;
        return buf;
      }
      function decode(buf, offset, end) {
        if (!offset)
          offset = 0;
        if (!end)
          end = buf.length;
        if (!(end <= buf.length && offset <= buf.length))
          throw new Error("Decoded message is not valid");
        var oldOffset = offset;
        var obj = {
          sort_by: 0,
          no_filter: 0,
          filters: null
        };
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset;
            return obj;
          }
          var prefix = varint.decode(buf, offset);
          offset += varint.decode.bytes;
          var tag = prefix >> 3;
          switch (tag) {
            case 1:
              obj.sort_by = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 19:
              obj.no_filter = encodings.int32.decode(buf, offset);
              offset += encodings.int32.decode.bytes;
              break;
            case 2:
              var len = varint.decode(buf, offset);
              offset += varint.decode.bytes;
              obj.filters = Filters.decode(buf, offset, offset + len);
              offset += Filters.decode.bytes;
              break;
            default:
              offset = skip(prefix & 7, buf, offset);
          }
        }
      }
    }
    function defined(val) {
      return val !== null && val !== void 0 && (typeof val !== "number" || !isNaN(val));
    }
  }
});

// lib/proto/index.js
var require_proto = __commonJS({
  "lib/proto/index.js"(exports2, module2) {
    "use strict";
    var messages = require_messages();
    var Proto2 = class {
      static encodeVisitorData(id, timestamp) {
        const buf = messages.VisitorData.encode({ id, timestamp });
        return encodeURIComponent(Buffer.from(buf).toString("base64").replace(/\/|\+/g, "_"));
      }
      static encodeChannelAnalyticsParams(channel_id) {
        const buf = messages.ChannelAnalytics.encode({
          params: {
            channel_id
          }
        });
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeSearchFilters(filters) {
        const upload_date = {
          all: null,
          hour: 1,
          today: 2,
          week: 3,
          month: 4,
          year: 5
        };
        const type = {
          all: null,
          video: 1,
          channel: 2,
          playlist: 3,
          movie: 4
        };
        const duration = {
          all: null,
          short: 1,
          long: 2,
          medium: 3
        };
        const order = {
          relevance: null,
          rating: 1,
          upload_date: 2,
          view_count: 3
        };
        const data = {};
        if (filters)
          data.filters = {};
        else
          data.no_filter = 0;
        if (filters) {
          if (filters.upload_date && filters.type !== "video")
            throw new Error(`Upload date filter cannot be used with type ${filters.type}`);
          if (filters.upload_date) {
            data.filters.upload_date = upload_date[filters.upload_date];
          }
          if (filters.type) {
            data.filters.type = type[filters.type];
          }
          if (filters.duration) {
            data.filters.duration = duration[filters.duration];
          }
          if (filters.sort_by && filters.sort_by !== "relevance") {
            data.sort_by = order[filters.sort_by];
          }
        }
        const buf = messages.SearchFilter.encode(data);
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeMusicSearchFilters(filters = {}) {
        const data = {
          filters: {
            type: {}
          }
        };
        data.filters.type[filters.type || "all"] = 1;
        const buf = messages.MusicSearchFilter.encode(data);
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeMessageParams(channel_id, video_id) {
        const buf = messages.LiveMessageParams.encode({
          params: {
            ids: {
              channel_id,
              video_id
            }
          },
          number_0: 1,
          number_1: 4
        });
        return Buffer.from(encodeURIComponent(Buffer.from(buf).toString("base64"))).toString("base64");
      }
      static encodeCommentsSectionParams(video_id, options = {}) {
        const sort_options = {
          TOP_COMMENTS: 0,
          NEWEST_FIRST: 1
        };
        const buf = messages.GetCommentsSectionParams.encode({
          ctx: {
            video_id
          },
          unk_param: 6,
          params: {
            opts: {
              video_id,
              sort_by: sort_options[options.sort_by || "TOP_COMMENTS"],
              type: options.type || 2
            },
            target: "comments-section"
          }
        });
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeCommentRepliesParams(video_id, comment_id) {
        const buf = messages.GetCommentsSectionParams.encode({
          ctx: {
            video_id
          },
          unk_param: 6,
          params: {
            replies_opts: {
              video_id,
              comment_id,
              unkopts: {
                unk_param: 0
              },
              unk_param_1: 1,
              unk_param_2: 10,
              channel_id: " "
            },
            target: `comment-replies-item-${comment_id}`
          }
        });
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeCommentParams(video_id) {
        const buf = messages.CreateCommentParams.encode({
          video_id,
          params: {
            index: 0
          },
          number: 7
        });
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeCommentReplyParams(comment_id, video_id) {
        const buf = messages.CreateCommentReplyParams.encode({
          video_id,
          comment_id,
          params: {
            unk_num: 0
          },
          unk_num: 7
        });
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeCommentActionParams(type, args = {}) {
        const data = {};
        data.type = type;
        data.video_id = args.video_id || "";
        data.comment_id = args.comment_id || "";
        data.unk_num = 2;
        if (args.hasOwnProperty("text")) {
          args.comment_id && delete data.unk_num;
          data.translate_comment_params = {
            params: {
              comment: {
                text: args.text
              }
            },
            comment_id: args.comment_id || "",
            target_language: args.target_language
          };
        }
        const buf = messages.PeformCommentActionParams.encode(data);
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeNotificationPref(channel_id, index) {
        const buf = messages.NotificationPreferences.encode({
          channel_id,
          pref_id: {
            index
          },
          number_0: 0,
          number_1: 4
        });
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
      static encodeSoundInfoParams(id) {
        const data = {
          sound: {
            params: {
              ids: {
                id_1: id,
                id_2: id,
                id_3: id
              }
            }
          }
        };
        const buf = messages.SoundInfoParams.encode(data);
        return encodeURIComponent(Buffer.from(buf).toString("base64"));
      }
    };
    module2.exports = Proto2;
  }
});

// lib/core/Actions.js
var require_Actions = __commonJS({
  "lib/core/Actions.js"(exports2, module2) {
    "use strict";
    var Uuid = require("../node_modules/uuid/dist/index.js");
    var Proto2 = require_proto();
    var Utils = require_Utils();
    var Constants = require_Constants();
    var _session, _request2, _needsLogin, needsLogin_fn;
    var Actions2 = class {
      constructor(session) {
        __privateAdd(this, _needsLogin);
        __privateAdd(this, _session, void 0);
        __privateAdd(this, _request2, void 0);
        __privateSet(this, _session, session);
        __privateSet(this, _request2, session.request);
      }
      async browse(id, args = {}) {
        if (__privateMethod(this, _needsLogin, needsLogin_fn).call(this, id) && !__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {};
        if (args.params)
          data.params = args.params;
        if (args.is_ctoken) {
          data.continuation = id;
        } else {
          data.browseId = id;
        }
        if (args.client) {
          data.client = args.client;
        }
        const response = await __privateGet(this, _request2).post("/browse", data);
        return response;
      }
      async engage(action, args = {}) {
        if (!__privateGet(this, _session).logged_in && !args.hasOwnProperty("text"))
          throw new Utils.InnertubeError("You are not signed in");
        const data = {};
        switch (action) {
          case "like/like":
          case "like/dislike":
          case "like/removelike":
            data.target = {};
            data.target.videoId = args.video_id;
            if (args.params) {
              data.params = args.params;
            }
            break;
          case "subscription/subscribe":
          case "subscription/unsubscribe":
            data.channelIds = [args.channel_id];
            data.params = action === "subscription/subscribe" ? "EgIIAhgA" : "CgIIAhgA";
            break;
          case "comment/create_comment":
            data.commentText = args.text;
            data.createCommentParams = Proto2.encodeCommentParams(args.video_id);
            break;
          case "comment/create_comment_reply":
            data.createReplyParams = Proto2.encodeCommentReplyParams(args.comment_id, args.video_id);
            data.commentText = args.text;
            break;
          case "comment/perform_comment_action":
            const target_action = (() => {
              switch (args.comment_action) {
                case "like":
                  return Proto2.encodeCommentActionParams(5, args);
                case "dislike":
                  return Proto2.encodeCommentActionParams(4, args);
                case "translate":
                  return Proto2.encodeCommentActionParams(22, args);
                default:
                  break;
              }
            })();
            data.actions = [target_action];
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/${action}`, data);
        return response;
      }
      async account(action, args = {}) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {
          client: args.client
        };
        switch (action) {
          case "account/set_setting":
            data.newValue = {
              boolValue: args.new_value
            };
            data.settingItemId = args.setting_item_id;
            break;
          case "account/accounts_list":
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/${action}`, data);
        return response;
      }
      async search(args = {}) {
        const data = { client: args.client };
        if (args.query) {
          data.query = args.query;
        }
        if (args.ctoken) {
          data.continuation = args.ctoken;
        }
        if (args.params) {
          data.params = args.params;
        }
        if (args.filters) {
          if (args.client == "YTMUSIC") {
            data.params = Proto2.encodeMusicSearchFilters(args.filters);
          } else {
            data.params = Proto2.encodeSearchFilters(args.filters);
          }
        }
        const response = await __privateGet(this, _request2).post("/search", data);
        return response;
      }
      async searchSound(args = {}) {
        const data = {
          query: args.query,
          client: "ANDROID"
        };
        const response = await __privateGet(this, _request2).post("/sfv/search", data);
        return response;
      }
      async channel(action, args = {}) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {
          client: args.client || "ANDROID"
        };
        switch (action) {
          case "channel/edit_name":
            data.givenName = args.new_name;
            break;
          case "channel/edit_description":
            data.description = args.new_description;
            break;
          case "channel/get_profile_editor":
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/${action}`, data);
        return response;
      }
      async playlist(action, args = {}) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {};
        switch (action) {
          case "playlist/create":
            data.title = args.title;
            data.videoIds = args.ids;
            break;
          case "playlist/delete":
            data.playlistId = args.playlist_id;
            break;
          case "browse/edit_playlist":
            data.playlistId = args.playlist_id;
            data.actions = args.ids.map((id) => {
              switch (args.action) {
                case "ACTION_ADD_VIDEO":
                  return {
                    action: args.action,
                    addedVideoId: id
                  };
                case "ACTION_REMOVE_VIDEO":
                  return {
                    action: args.action,
                    setVideoId: id
                  };
                default:
                  break;
              }
            });
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/${action}`, data);
        return response;
      }
      async notifications(action, args = {}) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {};
        switch (action) {
          case "modify_channel_preference":
            const pref_types = {
              PERSONALIZED: 1,
              ALL: 2,
              NONE: 3
            };
            data.params = Proto2.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase()]);
            break;
          case "get_notification_menu":
            data.notificationsMenuRequestType = "NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX";
            if (args.ctoken)
              data.ctoken = args.ctoken;
            break;
          case "record_interactions":
            data.serializedRecordNotificationInteractionsRequest = args.params;
            break;
          case "get_unseen_count":
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/notification/${action}`, data);
        return response;
      }
      async livechat(action, args = {}) {
        const data = { client: args.client };
        switch (action) {
          case "live_chat/get_live_chat":
          case "live_chat/get_live_chat_replay":
            data.continuation = args.ctoken;
            break;
          case "live_chat/send_message":
            data.params = Proto2.encodeMessageParams(args.channel_id, args.video_id);
            data.clientMessageId = Uuid.v4();
            data.richMessage = {
              textSegments: [{
                text: args.text
              }]
            };
            break;
          case "live_chat/get_item_context_menu":
            break;
          case "live_chat/moderate":
            data.params = args.params;
            break;
          case "updated_metadata":
            data.videoId = args.video_id;
            if (args.ctoken)
              data.continuation = args.ctoken;
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/${action}`, data);
        return response;
      }
      async thumbnails(args = {}) {
        const data = {
          client: "ANDROID",
          videoId: args.video_id
        };
        const response = await __privateGet(this, _request2).post("/thumbnails", data);
        return response;
      }
      async geo(action, args = {}) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {
          input: args.input,
          client: "ANDROID"
        };
        const response = await __privateGet(this, _request2).post(`/geo/${action}`, data);
        return response;
      }
      async flag(action, args) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {};
        switch (action) {
          case "flag/flag":
            data.action = args.action;
            break;
          case "flag/get_form":
            data.params = args.params;
            break;
          default:
            throw new Utils.InnertubeError("Action not implemented", action);
        }
        const response = await __privateGet(this, _request2).post(`/${action}`, data);
        return response;
      }
      async music(action, args) {
        const data = {
          input: args.input || "",
          client: "YTMUSIC"
        };
        const response = await __privateGet(this, _request2).post(`/music/${action}`, data);
        return response;
      }
      async next(args = {}) {
        const data = { client: args.client };
        if (args.ctoken) {
          data.continuation = args.ctoken;
        }
        if (args.video_id) {
          data.videoId = args.video_id;
        }
        const response = await __privateGet(this, _request2).post("/next", data);
        return response;
      }
      async getVideoInfo(id, cpn, client) {
        const data = {
          playbackContext: {
            contentPlaybackContext: {
              vis: 0,
              splay: false,
              referer: "https://www.youtube.com",
              currentUrl: `/watch?v=${id}`,
              autonavState: "STATE_OFF",
              signatureTimestamp: __privateGet(this, _session).sts,
              autoCaptionsDefaultOn: false,
              html5Preference: "HTML5_PREF_WANTS",
              lactMilliseconds: "-1"
            }
          },
          attestationRequest: {
            omitBotguardData: true
          },
          videoId: id
        };
        if (client) {
          data.client = client;
        }
        if (cpn) {
          data.cpn = cpn;
        }
        const response = await __privateGet(this, _request2).post("/player", data);
        return response.data;
      }
      async getSearchSuggestions(client, query) {
        if (!["YOUTUBE", "YTMUSIC"].includes(client))
          throw new Utils.InnertubeError("Invalid client", client);
        const response = await {
          YOUTUBE: () => __privateGet(this, _request2).call(this, {
            url: "search",
            baseURL: Constants.URLS.YT_SUGGESTIONS,
            params: {
              q: query,
              ds: "yt",
              client: "youtube",
              xssi: "t",
              oe: "UTF",
              gl: __privateGet(this, _session).context.client.gl,
              hl: __privateGet(this, _session).context.client.hl
            }
          }),
          YTMUSIC: () => this.music("get_search_suggestions", {
            input: query
          })
        }[client]();
        return response;
      }
      async getUserMentionSuggestions(args = {}) {
        if (!__privateGet(this, _session).logged_in)
          throw new Utils.InnertubeError("You are not signed in");
        const data = {
          input: args.input,
          client: "ANDROID"
        };
        const response = await __privateGet(this, _request2).post("get_user_mention_suggestions", data);
        return response;
      }
      async execute(action, args) {
        const data = { ...args };
        if (Reflect.has(data, "request"))
          delete data.request;
        if (Reflect.has(data, "clientActions"))
          delete data.clientActions;
        if (Reflect.has(data, "action")) {
          data.actions = [data.action];
          delete data.action;
        }
        if (Reflect.has(data, "token")) {
          data.continuation = data.token;
          delete data.token;
        }
        return __privateGet(this, _request2).post(action, data);
      }
    };
    _session = new WeakMap();
    _request2 = new WeakMap();
    _needsLogin = new WeakSet();
    needsLogin_fn = function(id) {
      return [
        "FElibrary",
        "FEhistory",
        "FEsubscriptions",
        "SPaccount_notifications",
        "SPaccount_privacy",
        "SPtime_watched"
      ].includes(id);
    };
    module2.exports = Actions2;
  }
});

// lib/utils/wrappers/NodeCache.js
var require_NodeCache = __commonJS({
  "lib/utils/wrappers/NodeCache.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var NodeCache = class {
      async read(key) {
        return (await fs.promises.readFile(key)).buffer;
      }
      async write(key, data) {
        const parts = key.split("/").slice(0, -1);
        let current = "";
        for (const part of parts) {
          current += `${part}/`;
          if (!await this.exists(current)) {
            await fs.promises.mkdir(current);
          }
        }
        return await fs.promises.writeFile(key, data);
      }
      async exists(key) {
        return await fs.promises.stat(key).then(() => true).catch(() => false);
      }
      async remove(key) {
        return await fs.promises.rm(key);
      }
    };
    module2.exports = new NodeCache();
  }
});

// lib/deciphers/Signature.js
var require_Signature = __commonJS({
  "lib/deciphers/Signature.js"(exports2) {
    "use strict";
    var { SIG_REGEX } = require_Constants();
    var SignatureOperation = exports2.SignatureOperation = {
      REVERSE: 0,
      SPLICE: 1,
      SWAP: 2
    };
    var Signature = class {
      constructor(action_sequence) {
        this.action_sequence = action_sequence;
      }
      static fromSourceCode(sig_decipher_sc) {
        let actions;
        const action_sequence = [];
        const functions = Signature.getFunctions(sig_decipher_sc);
        while ((actions = SIG_REGEX.ACTIONS.exec(sig_decipher_sc)) !== null) {
          const action = actions.groups;
          if (!action)
            continue;
          switch (action.name) {
            case functions[0]:
              action_sequence.push([SignatureOperation.REVERSE, 0]);
              break;
            case functions[1]:
              action_sequence.push([SignatureOperation.SPLICE, parseInt(action.param)]);
              break;
            case functions[2]:
              action_sequence.push([SignatureOperation.SWAP, parseInt(action.param)]);
              break;
            default:
          }
        }
        return new Signature(action_sequence);
      }
      decipher(url) {
        var _a;
        const args = new URLSearchParams(url);
        const signature = (_a = args.get("s")) == null ? void 0 : _a.split("");
        if (!signature)
          throw new TypeError("Invalid signature");
        for (const action of this.action_sequence) {
          switch (action[0]) {
            case SignatureOperation.REVERSE:
              signature.reverse();
              break;
            case SignatureOperation.SPLICE:
              signature.splice(0, action[1]);
              break;
            case SignatureOperation.SWAP:
              {
                const index = action[1];
                const orig_arr = signature[0];
                signature[0] = signature[index % signature.length];
                signature[index % signature.length] = orig_arr;
              }
              break;
            default:
              break;
          }
        }
        return signature.join("");
      }
      toJSON() {
        return [...this.action_sequence];
      }
      toArrayBuffer() {
        const buffer = new ArrayBuffer(4 + 4 + this.action_sequence.length * (1 + 2));
        const view = new DataView(buffer);
        let offset = 0;
        view.setUint32(offset, Signature.LIBRARY_VERSION, true);
        offset += 4;
        view.setUint32(offset, this.action_sequence.length, true);
        offset += 4;
        for (let i = 0; i < this.action_sequence.length; i++) {
          view.setUint8(offset, this.action_sequence[i][0]);
          offset += 1;
          view.setUint16(offset, this.action_sequence[i][1], true);
          offset += 2;
        }
        return buffer;
      }
      static fromArrayBuffer(buffer) {
        const view = new DataView(buffer);
        let offset = 0;
        const version = view.getUint32(offset, true);
        offset += 4;
        if (version !== Signature.LIBRARY_VERSION)
          throw new TypeError("Invalid library version");
        const action_sequence_length = view.getUint32(offset, true);
        offset += 4;
        const action_sequence = new Array(action_sequence_length);
        for (let i = 0; i < action_sequence_length; i++) {
          action_sequence[i] = [
            view.getUint8(offset),
            view.getUint16(offset + 1, true)
          ];
          offset += 3;
        }
        return new Signature(action_sequence);
      }
      static getFunctions(sc) {
        let func;
        const functions = [];
        while ((func = SIG_REGEX.FUNCTIONS.exec(sc)) !== null) {
          if (func[0].includes("reverse")) {
            functions[0] = func[1];
          } else if (func[0].includes("splice")) {
            functions[1] = func[1];
          } else {
            functions[2] = func[1];
          }
        }
        return functions;
      }
      static get LIBRARY_VERSION() {
        return 1;
      }
    };
    exports2.default = Signature;
  }
});

// lib/deciphers/NToken.js
var require_NToken = __commonJS({
  "lib/deciphers/NToken.js"(exports2) {
    "use strict";
    var { NTOKEN_REGEX, BASE64_DIALECT } = require_Constants();
    var NTokenTransformOperation = exports2.NTokenTransformOperation = {
      NO_OP: 0,
      PUSH: 1,
      REVERSE_1: 2,
      REVERSE_2: 3,
      SPLICE: 4,
      SWAP0_1: 5,
      SWAP0_2: 6,
      ROTATE_1: 7,
      ROTATE_2: 8,
      BASE64_DIA: 9,
      TRANSLATE_1: 10,
      TRANSLATE_2: 11
    };
    var NTokenTransformOpType = exports2.NTokenTransformOpType = {
      FUNC: 0,
      N_ARR: 1,
      LITERAL: 2,
      REF: 3
    };
    var OP_LOOKUP = {
      "d.push(e)": NTokenTransformOperation.PUSH,
      "d.reverse()": NTokenTransformOperation.REVERSE_1,
      "function(d){for(var": NTokenTransformOperation.REVERSE_2,
      "d.length;d.splice(e,1)": NTokenTransformOperation.SPLICE,
      "d[0])[0])": NTokenTransformOperation.SWAP0_1,
      "f=d[0];d[0]": NTokenTransformOperation.SWAP0_2,
      "reverse().forEach": NTokenTransformOperation.ROTATE_1,
      "unshift(d.pop())": NTokenTransformOperation.ROTATE_2,
      "function(){for(var": NTokenTransformOperation.BASE64_DIA,
      "function(d,e){for(var f": NTokenTransformOperation.TRANSLATE_1,
      "function(d,e,f){var": NTokenTransformOperation.TRANSLATE_2
    };
    var NTokenTransforms = class {
      static translate1(arr, token, is_reverse_base64) {
        const characters = is_reverse_base64 ? BASE64_DIALECT.REVERSE : BASE64_DIALECT.NORMAL;
        const token_chars = token.split("");
        arr.forEach((char, index, loc) => {
          token_chars.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(token_chars[index]) + 64) % characters.length]);
        });
      }
      static translate2(arr, token, characters) {
        let chars_length = characters.length;
        const token_chars = token.split("");
        arr.forEach((char, index, loc) => {
          token_chars.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(token_chars[index]) + index + chars_length--) % characters.length]);
        });
      }
      static getBase64Dia(is_reverse_base64) {
        const characters = is_reverse_base64 ? BASE64_DIALECT.REVERSE : BASE64_DIALECT.NORMAL;
        return characters;
      }
      static swap0(arr, index) {
        const old_elem = arr[0];
        index = (index % arr.length + arr.length) % arr.length;
        arr[0] = arr[index];
        arr[index] = old_elem;
      }
      static rotate(arr, index) {
        index = (index % arr.length + arr.length) % arr.length;
        arr.splice(-index).reverse().forEach((el) => arr.unshift(el));
      }
      static splice(arr, index) {
        index = (index % arr.length + arr.length) % arr.length;
        arr.splice(index, 1);
      }
      static reverse(arr) {
        arr.reverse();
      }
      static push(arr, item) {
        if (Array.isArray(arr == null ? void 0 : arr[0]))
          arr.push([NTokenTransformOpType.LITERAL, item]);
        else
          arr.push(item);
      }
    };
    exports2.NTokenTransforms = NTokenTransforms;
    var TRANSFORM_FUNCTIONS = [{
      [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
      [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
      [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
      [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
      [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
      [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
      [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
      [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
      [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(false),
      [NTokenTransformOperation.TRANSLATE_1]: (...args) => NTokenTransforms.translate1.apply(null, [...args, false]),
      [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
    }, {
      [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
      [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
      [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
      [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
      [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
      [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
      [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
      [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
      [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(true),
      [NTokenTransformOperation.TRANSLATE_1]: (...args) => NTokenTransforms.translate1.apply(null, [...args, true]),
      [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
    }];
    var NToken = class {
      constructor(transformer) {
        this.transformer = transformer;
      }
      static fromSourceCode(raw) {
        const transformation_data = NToken.getTransformationData(raw);
        const transformations = transformation_data.map((el) => {
          var _a;
          if (el != null && typeof el != "number") {
            const is_reverse_base64 = el.includes("case 65:");
            const opcode = OP_LOOKUP[(_a = NToken.getFunc(el)) == null ? void 0 : _a[0]];
            if (opcode) {
              el = [
                NTokenTransformOpType.FUNC,
                opcode,
                0 + is_reverse_base64
              ];
            } else if (el == "b") {
              el = [NTokenTransformOpType.N_ARR];
            } else {
              el = [NTokenTransformOpType.LITERAL, el];
            }
          } else if (el != null) {
            el = [NTokenTransformOpType.LITERAL, el];
          }
          return el;
        });
        const placeholder_indexes = [...raw.matchAll(NTOKEN_REGEX.PLACEHOLDERS)].map((item) => parseInt(item[1]));
        placeholder_indexes.forEach((i) => transformations[i] = [NTokenTransformOpType.REF]);
        const function_calls = [...raw.replace(/\n/g, "").match(/try\{(.*?)\}catch/s)[1].matchAll(NTOKEN_REGEX.CALLS)].map((params) => [
          parseInt(params[1]),
          params[2].split(",").map((param) => {
            var _a;
            return parseInt((_a = param.match(/c\[(.*?)\]/)) == null ? void 0 : _a[1]);
          })
        ]);
        return new NToken([transformations, function_calls]);
      }
      evaluate(i, n_token, transformer) {
        switch (i[0]) {
          case NTokenTransformOpType.FUNC:
            return TRANSFORM_FUNCTIONS[i[2]][i[1]];
          case NTokenTransformOpType.N_ARR:
            return n_token;
          case NTokenTransformOpType.LITERAL:
            return i[1];
          case NTokenTransformOpType.REF:
            return transformer[0];
        }
      }
      transform(n) {
        const n_token = n.split("");
        const transformer = this.getTransformerClone();
        try {
          transformer[1].forEach(([index, param_index]) => {
            const base64_dia = param_index[2] && this.evaluate(transformer[0][param_index[2]], n_token, transformer)();
            this.evaluate(transformer[0][index], n_token, transformer)(param_index[0] !== void 0 && this.evaluate(transformer[0][param_index[0]], n_token, transformer), param_index[1] !== void 0 && this.evaluate(transformer[0][param_index[1]], n_token, transformer), base64_dia);
          });
        } catch (err) {
          console.error(new Error(`Could not transform n-token, download may be throttled.
Original Token:${n}Error:
${err}`));
          return n;
        }
        return n_token.join("");
      }
      getTransformerClone() {
        return [
          [...this.transformer[0]],
          [...this.transformer[1]]
        ];
      }
      toJSON() {
        return this.getTransformerClone();
      }
      toArrayBuffer() {
        let size = 4 * 3;
        for (const instruction of this.transformer[0]) {
          switch (instruction[0]) {
            case NTokenTransformOpType.FUNC:
              size += 2;
              break;
            case NTokenTransformOpType.N_ARR:
            case NTokenTransformOpType.REF:
              size += 1;
              break;
            case NTokenTransformOpType.LITERAL:
              if (typeof instruction[1] === "string")
                size += 1 + 4 + new TextEncoder().encode(instruction[1]).byteLength;
              size += 4 + 1;
              break;
          }
        }
        for (const call of this.transformer[1]) {
          size += 2 + call[1].length;
        }
        const buffer = new ArrayBuffer(size);
        const view = new DataView(buffer);
        let offset = 0;
        view.setUint32(offset, NToken.LIBRARY_VERSION, true);
        offset += 4;
        view.setUint32(offset, this.transformer[0].length, true);
        offset += 4;
        view.setUint32(offset, this.transformer[1].length, true);
        offset += 4;
        for (const instruction of this.transformer[0]) {
          switch (instruction[0]) {
            case NTokenTransformOpType.FUNC:
              {
                const opcode = instruction[0] << 6 | instruction[2];
                view.setUint8(offset, opcode);
                offset += 1;
                view.setUint8(offset, instruction[1]);
                offset += 1;
              }
              break;
            case NTokenTransformOpType.N_ARR:
            case NTokenTransformOpType.REF:
              {
                const opcode = instruction[0] << 6;
                view.setUint8(offset, opcode);
                offset += 1;
              }
              break;
            case NTokenTransformOpType.LITERAL:
              {
                const type = typeof instruction[1] === "string" ? 1 : 0;
                const opcode = instruction[0] << 6 | type;
                view.setUint8(offset, opcode);
                offset += 1;
                if (type === 0) {
                  view.setInt32(offset, instruction[1], true);
                  offset += 4;
                } else {
                  const encoded = new TextEncoder().encode(instruction[1]);
                  view.setUint32(offset, encoded.byteLength, true);
                  offset += 4;
                  for (let i = 0; i < encoded.byteLength; i++) {
                    view.setUint8(offset, encoded[i]);
                    offset += 1;
                  }
                }
              }
              break;
          }
        }
        for (const call of this.transformer[1]) {
          view.setUint8(offset, call[0]);
          offset += 1;
          view.setUint8(offset, call[1].length);
          offset += 1;
          for (const param of call[1]) {
            view.setUint8(offset, param);
            offset += 1;
          }
        }
        return buffer;
      }
      static fromArrayBuffer(buffer) {
        const view = new DataView(buffer);
        let offset = 0;
        const version = view.getUint32(offset, true);
        offset += 4;
        if (version !== NToken.LIBRARY_VERSION)
          throw new TypeError("Invalid library version");
        const transformations_length = view.getUint32(offset, true);
        offset += 4;
        const function_calls_length = view.getUint32(offset, true);
        offset += 4;
        const transformations = new Array(transformations_length);
        for (let i = 0; i < transformations_length; i++) {
          const opcode = view.getUint8(offset++);
          const op = opcode >> 6;
          switch (op) {
            case NTokenTransformOpType.FUNC:
              {
                const is_reverse_base64 = opcode & 1;
                const operation = view.getUint8(offset++);
                transformations[i] = [op, operation, is_reverse_base64];
              }
              break;
            case NTokenTransformOpType.N_ARR:
            case NTokenTransformOpType.REF:
              transformations[i] = [op];
              break;
            case NTokenTransformOpType.LITERAL:
              {
                const type = opcode & 1;
                if (type === 0) {
                  const literal = view.getInt32(offset, true);
                  offset += 4;
                  transformations[i] = [op, literal];
                } else {
                  const length = view.getUint32(offset, true);
                  offset += 4;
                  const literal = new Uint8Array(length);
                  for (let i2 = 0; i2 < length; i2++) {
                    literal[i2] = view.getUint8(offset++);
                  }
                  transformations[i] = [op, new TextDecoder().decode(literal)];
                }
              }
              break;
            default:
              throw new Error("Invalid opcode");
          }
        }
        const function_calls = new Array(function_calls_length);
        for (let i = 0; i < function_calls_length; i++) {
          const index = view.getUint8(offset++);
          const num_params = view.getUint8(offset++);
          const params = new Array(num_params);
          for (let j = 0; j < num_params; j++) {
            params[j] = view.getUint8(offset++);
          }
          function_calls[i] = [index, params];
        }
        return new NToken([transformations, function_calls]);
      }
      static get LIBRARY_VERSION() {
        return 1;
      }
      static getFunc(el) {
        return el.match(NTOKEN_REGEX.FUNCTIONS);
      }
      static getTransformationData(raw) {
        var _a;
        const data = `[${(_a = raw.replace(/\n/g, "").match(/c=\[(.*?)\];c/s)) == null ? void 0 : _a[1]}]`;
        return JSON.parse(this.refineNTokenData(data));
      }
      static refineNTokenData(data) {
        return data.replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)').replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)').replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",').replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]').replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",').replace(/""/g, "").replace(/length]\)}"/g, "length])}");
      }
    };
    exports2.default = NToken;
  }
});

// lib/core/Player.js
var require_Player = __commonJS({
  "lib/core/Player.js"(exports2, module2) {
    "use strict";
    var Cache = false ? null : require_NodeCache();
    var Utils = require_Utils();
    var Constants = require_Constants();
    var { default: Signature } = require_Signature();
    var { default: NToken } = require_NToken();
    var _request2, _player_id, _player_url, _player_path, _ntoken, _signature, _signature_timestamp, _cache_dir, _extractSigTimestamp, extractSigTimestamp_fn, _extractSigDecipherSc, extractSigDecipherSc_fn, _extractNTokenSc, extractNTokenSc_fn;
    var _Player = class {
      constructor(id, request) {
        __privateAdd(this, _extractSigTimestamp);
        __privateAdd(this, _extractSigDecipherSc);
        __privateAdd(this, _extractNTokenSc);
        __privateAdd(this, _request2, void 0);
        __privateAdd(this, _player_id, void 0);
        __privateAdd(this, _player_url, void 0);
        __privateAdd(this, _player_path, void 0);
        __privateAdd(this, _ntoken, void 0);
        __privateAdd(this, _signature, void 0);
        __privateAdd(this, _signature_timestamp, void 0);
        __privateAdd(this, _cache_dir, void 0);
        __privateSet(this, _player_id, id);
        __privateSet(this, _request2, request);
        __privateSet(this, _cache_dir, `${Utils.getTmpdir()}/yt-cache`);
        __privateSet(this, _player_url, `${Constants.URLS.YT_BASE}/s/player/${__privateGet(this, _player_id)}/player_ias.vflset/en_US/base.js`);
        __privateSet(this, _player_path, `${__privateGet(this, _cache_dir)}/${__privateGet(this, _player_id)}.bin`);
      }
      async init() {
        if (await this.isCached()) {
          const buffer = await Cache.read(__privateGet(this, _player_path));
          const view = new DataView(buffer);
          const version = view.getUint32(0, true);
          if (version == _Player.LIBRARY_VERSION) {
            const sig_decipher_len = view.getUint32(8, true);
            const sig_decipher_buf = buffer.slice(12, 12 + sig_decipher_len);
            const ntoken_transform_buf = buffer.slice(12 + sig_decipher_len);
            __privateSet(this, _ntoken, NToken.fromArrayBuffer(ntoken_transform_buf));
            __privateSet(this, _signature, Signature.fromArrayBuffer(sig_decipher_buf));
            __privateSet(this, _signature_timestamp, view.getUint32(4, true));
            return this;
          }
        }
        const response = await __privateGet(this, _request2).get(__privateGet(this, _player_url), { headers: { "content-type": "text/javascript" } });
        __privateSet(this, _signature_timestamp, __privateMethod(this, _extractSigTimestamp, extractSigTimestamp_fn).call(this, response.data));
        const signature_decipher_sc = __privateMethod(this, _extractSigDecipherSc, extractSigDecipherSc_fn).call(this, response.data);
        const ntoken_decipher_sc = __privateMethod(this, _extractNTokenSc, extractNTokenSc_fn).call(this, response.data);
        __privateSet(this, _signature, Signature.fromSourceCode(signature_decipher_sc));
        __privateSet(this, _ntoken, NToken.fromSourceCode(ntoken_decipher_sc));
        try {
          await Cache.exists(__privateGet(this, _cache_dir)) && await Cache.remove(__privateGet(this, _cache_dir), { recursive: true });
          const ntoken_buf = __privateGet(this, _ntoken).toArrayBuffer();
          const sig_decipher_buf = __privateGet(this, _signature).toArrayBuffer();
          const buffer = new ArrayBuffer(12 + sig_decipher_buf.byteLength + ntoken_buf.byteLength);
          const view = new DataView(buffer);
          view.setUint32(0, _Player.LIBRARY_VERSION, true);
          view.setUint32(4, __privateGet(this, _signature_timestamp), true);
          view.setUint32(8, sig_decipher_buf.byteLength, true);
          new Uint8Array(buffer).set(new Uint8Array(sig_decipher_buf), 12);
          new Uint8Array(buffer).set(new Uint8Array(ntoken_buf), 12 + sig_decipher_buf.byteLength);
          await Cache.write(__privateGet(this, _player_path), new Uint8Array(buffer));
        } finally {
        }
        return this;
      }
      decipher(url, signature_cipher, cipher) {
        url = url || signature_cipher || cipher;
        Utils.throwIfMissing({ url });
        const args = new URLSearchParams(url);
        const url_components = new URL(args.get("url") || url);
        url_components.searchParams.set("ratebypass", "yes");
        if (signature_cipher || cipher) {
          const signature = __privateGet(this, _signature).decipher(url);
          args.get("sp") ? url_components.searchParams.set(args.get("sp"), signature) : url_components.searchParams.set("signature", signature);
        }
        if (url_components.searchParams.get("n")) {
          const ntoken = __privateGet(this, _ntoken).transform(url_components.searchParams.get("n"));
          url_components.searchParams.set("n", ntoken);
        }
        return url_components.toString();
      }
      get url() {
        return __privateGet(this, _player_url);
      }
      get sts() {
        return __privateGet(this, _signature_timestamp);
      }
      static get LIBRARY_VERSION() {
        return 1;
      }
      async isCached() {
        return await Cache.exists(__privateGet(this, _player_path));
      }
    };
    var Player = _Player;
    _request2 = new WeakMap();
    _player_id = new WeakMap();
    _player_url = new WeakMap();
    _player_path = new WeakMap();
    _ntoken = new WeakMap();
    _signature = new WeakMap();
    _signature_timestamp = new WeakMap();
    _cache_dir = new WeakMap();
    _extractSigTimestamp = new WeakSet();
    extractSigTimestamp_fn = function(data) {
      return parseInt(Utils.getStringBetweenStrings(data, "signatureTimestamp:", ","));
    };
    _extractSigDecipherSc = new WeakSet();
    extractSigDecipherSc_fn = function(data) {
      const sig_alg_sc = Utils.getStringBetweenStrings(data, "this.audioTracks};var", "};");
      const sig_data = Utils.getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
      return sig_alg_sc + sig_data;
    };
    _extractNTokenSc = new WeakSet();
    extractNTokenSc_fn = function(data) {
      return `var b=a.split("")${Utils.getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
    };
    module2.exports = Player;
  }
});

// lib/core/SessionBuilder.js
var require_SessionBuilder = __commonJS({
  "lib/core/SessionBuilder.js"(exports2, module2) {
    "use strict";
    var Player = require_Player();
    var Proto2 = require_proto();
    var Utils = require_Utils();
    var Constants = require_Constants();
    var UserAgent = require("../node_modules/user-agents/dist/index.js");
    var _config, _request2, _key, _client_name, _client_version, _api_version, _remote_host, _context, _player2, _buildContext, buildContext_fn, _getYtConfig, getYtConfig_fn, _getPlayerId, getPlayerId_fn;
    var SessionBuilder2 = class {
      constructor(config, request) {
        __privateAdd(this, _buildContext);
        __privateAdd(this, _getYtConfig);
        __privateAdd(this, _getPlayerId);
        __privateAdd(this, _config, void 0);
        __privateAdd(this, _request2, void 0);
        __privateAdd(this, _key, void 0);
        __privateAdd(this, _client_name, void 0);
        __privateAdd(this, _client_version, void 0);
        __privateAdd(this, _api_version, void 0);
        __privateAdd(this, _remote_host, void 0);
        __privateAdd(this, _context, void 0);
        __privateAdd(this, _player2, void 0);
        __privateSet(this, _config, config);
        __privateSet(this, _request2, request);
      }
      async build() {
        const data = await Promise.all([
          __privateMethod(this, _getYtConfig, getYtConfig_fn).call(this),
          __privateMethod(this, _getPlayerId, getPlayerId_fn).call(this)
        ]);
        const ytcfg = data[0][0][2];
        __privateSet(this, _key, ytcfg[1]);
        __privateSet(this, _api_version, `v${ytcfg[0][0][6]}`);
        __privateSet(this, _client_name, Constants.CLIENTS.WEB.NAME);
        __privateSet(this, _client_version, ytcfg[0][0][16]);
        __privateSet(this, _remote_host, ytcfg[0][0][3]);
        __privateSet(this, _player2, await new Player(data[1], __privateGet(this, _request2)).init());
        __privateSet(this, _context, __privateMethod(this, _buildContext, buildContext_fn).call(this));
        return this;
      }
      get key() {
        return __privateGet(this, _key);
      }
      get context() {
        return __privateGet(this, _context);
      }
      get api_version() {
        return __privateGet(this, _api_version);
      }
      get client_version() {
        return __privateGet(this, _client_version);
      }
      get client_name() {
        return __privateGet(this, _client_name);
      }
      get player() {
        return __privateGet(this, _player2);
      }
    };
    _config = new WeakMap();
    _request2 = new WeakMap();
    _key = new WeakMap();
    _client_name = new WeakMap();
    _client_version = new WeakMap();
    _api_version = new WeakMap();
    _remote_host = new WeakMap();
    _context = new WeakMap();
    _player2 = new WeakMap();
    _buildContext = new WeakSet();
    buildContext_fn = function() {
      const user_agent = new UserAgent({ deviceCategory: "desktop" });
      const id = Utils.generateRandomString(11);
      const timestamp = Math.floor(Date.now() / 1e3);
      const visitor_data = Proto2.encodeVisitorData(id, timestamp);
      const context = {
        client: {
          hl: "en",
          gl: __privateGet(this, _config).gl || "US",
          remoteHost: __privateGet(this, _remote_host),
          deviceMake: user_agent.vendor,
          deviceModel: user_agent.platform,
          visitorData: visitor_data,
          userAgent: user_agent.toString(),
          clientName: __privateGet(this, _client_name),
          clientVersion: __privateGet(this, _client_version),
          originalUrl: Constants.URLS.API.BASE
        },
        user: { lockedSafetyMode: false },
        request: { useSsl: true }
      };
      return context;
    };
    _getYtConfig = new WeakSet();
    getYtConfig_fn = async function() {
      const response = await __privateGet(this, _request2).get(`${Constants.URLS.YT_BASE}/sw.js_data`);
      return JSON.parse(response.data.replace(")]}'", ""));
    };
    _getPlayerId = new WeakSet();
    getPlayerId_fn = async function() {
      const response = await __privateGet(this, _request2).get(`${Constants.URLS.YT_BASE}/iframe_api`);
      return Utils.getStringBetweenStrings(response.data, "player\\/", "\\/");
    };
    module2.exports = SessionBuilder2;
  }
});

// lib/parser/contents/classes/Format.js
var require_Format = __commonJS({
  "lib/parser/contents/classes/Format.js"(exports2, module2) {
    "use strict";
    var Format = class {
      constructor(data) {
        this.itag = data.itag;
        this.mime_type = data.mimeType;
        this.bitrate = data.bitrate;
        this.average_bitrate = data.averageBitrate;
        this.width = data.width || null;
        this.height = data.height || null;
        this.init_range = data.initRange && {
          start: parseInt(data.initRange.start),
          end: parseInt(data.initRange.end)
        };
        this.index_range = data.indexRange && {
          start: parseInt(data.indexRange.start),
          end: parseInt(data.indexRange.end)
        };
        this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1e3));
        this.content_length = parseInt(data.contentLength);
        this.quality = data.quality;
        this.quality_label = data.qualityLabel || null;
        this.fps = data.fps || null;
        this.url = data.url || null;
        this.cipher = data.cipher || null;
        this.signature_cipher = data.signatureCipher || null;
        this.audio_quality = data.audioQuality;
        this.approx_duration_ms = parseInt(data.approxDurationMs);
        this.audio_sample_rate = parseInt(data.audioSampleRate);
        this.audio_channels = data.audioChannels;
        this.loudness_db = data.loudnessDb;
        this.has_audio = !!data.audioBitrate || !!data.audioQuality;
        this.has_video = !!data.qualityLabel;
      }
      decipher(player) {
        return player.decipher(this.url, this.signature_cipher, this.cipher);
      }
    };
    module2.exports = Format;
  }
});

// lib/parser/contents/classes/Thumbnail.js
var require_Thumbnail = __commonJS({
  "lib/parser/contents/classes/Thumbnail.js"(exports2, module2) {
    "use strict";
    var Thumbnail = class {
      url;
      width;
      height;
      constructor({ url, width, height }) {
        this.url = url;
        this.width = width;
        this.height = height;
      }
      static fromResponse(data) {
        if (!data || !data.thumbnails)
          return;
        return data.thumbnails.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
      }
    };
    module2.exports = Thumbnail;
  }
});

// lib/parser/contents/classes/VideoDetails.js
var require_VideoDetails = __commonJS({
  "lib/parser/contents/classes/VideoDetails.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var VideoDetails = class {
      id;
      channel_id;
      title;
      keywords;
      short_description;
      author;
      constructor(data) {
        this.id = data.videoId;
        this.channel_id = data.channelId;
        this.title = data.title;
        this.duration = parseInt(data.lengthSeconds);
        this.keywords = data.keywords;
        this.is_owner_viewing = !!data.isOwnerViewing;
        this.short_description = data.shortDescription;
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.allow_ratings = !!data.allowRatings;
        this.view_count = parseInt(data.viewCount);
        this.author = data.author;
        this.is_private = !!data.isPrivate;
        this.is_live_content = !!data.isLiveContent;
        this.is_crawlable = !!data.isCrawlable;
      }
    };
    module2.exports = VideoDetails;
  }
});

// lib/parser/contents/classes/DataModelSection.js
var require_DataModelSection = __commonJS({
  "lib/parser/contents/classes/DataModelSection.js"(exports2, module2) {
    "use strict";
    var DataModelSection = class {
      type = "DataModelSection";
      constructor(data) {
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.metric_value = data.metricValue;
        this.comparison_indicator = data.comparisonIndicator;
        this.series_configuration = {
          line_series: {
            lines_data: data.seriesConfiguration.lineSeries.linesData,
            domain_axis: data.seriesConfiguration.lineSeries.domainAxis,
            measure_axis: data.seriesConfiguration.lineSeries.measureAxis
          }
        };
      }
    };
    module2.exports = DataModelSection;
  }
});

// lib/parser/contents/classes/AnalyticsMainAppKeyMetrics.js
var require_AnalyticsMainAppKeyMetrics = __commonJS({
  "lib/parser/contents/classes/AnalyticsMainAppKeyMetrics.js"(exports2, module2) {
    "use strict";
    var DataModelSection = require_DataModelSection();
    var AnalyticsMainAppKeyMetrics = class {
      type = "AnalyticsMainAppKeyMetrics";
      constructor(data) {
        this.period = data.cardData.periodLabel;
        const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
        this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection(section));
      }
    };
    module2.exports = AnalyticsMainAppKeyMetrics;
  }
});

// lib/parser/contents/classes/AnalyticsVideo.js
var require_AnalyticsVideo = __commonJS({
  "lib/parser/contents/classes/AnalyticsVideo.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var AnalyticsVideo = class {
      type = "AnalyticsVideo";
      constructor(data) {
        this.title = data.videoTitle;
        this.metadata = {
          views: data.videoDescription.split("\xB7")[0].trim(),
          published: data.videoDescription.split("\xB7")[1].trim(),
          thumbnails: Thumbnail.fromResponse(data.thumbnailDetails),
          duration: data.formattedLength,
          is_short: data.isShort
        };
      }
    };
    module2.exports = AnalyticsVideo;
  }
});

// lib/parser/contents/classes/AnalyticsVodCarouselCard.js
var require_AnalyticsVodCarouselCard = __commonJS({
  "lib/parser/contents/classes/AnalyticsVodCarouselCard.js"(exports2, module2) {
    "use strict";
    var Video = require_AnalyticsVideo();
    var AnalyticsVodCarouselCard = class {
      type = "AnalyticsVodCarouselCard";
      constructor(data) {
        this.title = data.title;
        this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
      }
    };
    module2.exports = AnalyticsVodCarouselCard;
  }
});

// lib/parser/contents/classes/NavigationEndpoint.js
var require_NavigationEndpoint = __commonJS({
  "lib/parser/contents/classes/NavigationEndpoint.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = class {
      type = "NavigationEndpoint";
      constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const name = Object.keys(data || {}).find((item) => item.endsWith("Endpoint") || item.endsWith("Command"));
        this.payload = (data == null ? void 0 : data[name]) || {};
        if (Reflect.has(this.payload, "dialog")) {
          this.dialog = Parser.parse(this.payload.dialog);
        }
        if (data == null ? void 0 : data.serviceEndpoint) {
          data = data.serviceEndpoint;
        }
        this.metadata = {};
        if ((_b = (_a = data == null ? void 0 : data.commandMetadata) == null ? void 0 : _a.webCommandMetadata) == null ? void 0 : _b.url) {
          this.metadata.url = data.commandMetadata.webCommandMetadata.url;
        }
        if ((_d = (_c = data == null ? void 0 : data.commandMetadata) == null ? void 0 : _c.webCommandMetadata) == null ? void 0 : _d.webPageType) {
          this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
        }
        if ((_f = (_e = data == null ? void 0 : data.commandMetadata) == null ? void 0 : _e.webCommandMetadata) == null ? void 0 : _f.apiUrl) {
          this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace("/youtubei/v1/", "");
        }
        if ((_h = (_g = data == null ? void 0 : data.commandMetadata) == null ? void 0 : _g.webCommandMetadata) == null ? void 0 : _h.sendPost) {
          this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
        }
        if (data == null ? void 0 : data.browseEndpoint) {
          const configs = (_j = (_i = data == null ? void 0 : data.browseEndpoint) == null ? void 0 : _i.browseEndpointContextSupportedConfigs) == null ? void 0 : _j.browseEndpointContextMusicConfig;
          this.browse = {
            id: ((_k = data == null ? void 0 : data.browseEndpoint) == null ? void 0 : _k.browseId) || null,
            params: (data == null ? void 0 : data.browseEndpoint.params) || null,
            base_url: ((_l = data == null ? void 0 : data.browseEndpoint) == null ? void 0 : _l.canonicalBaseUrl) || null,
            page_type: (configs == null ? void 0 : configs.pageType) || null
          };
        }
        if (data == null ? void 0 : data.watchEndpoint) {
          const configs = (_n = (_m = data == null ? void 0 : data.watchEndpoint) == null ? void 0 : _m.watchEndpointMusicSupportedConfigs) == null ? void 0 : _n.watchEndpointMusicConfig;
          this.watch = {
            video_id: (_o = data == null ? void 0 : data.watchEndpoint) == null ? void 0 : _o.videoId,
            playlist_id: (data == null ? void 0 : data.watchEndpoint.playlistId) || null,
            params: (data == null ? void 0 : data.watchEndpoint.params) || null,
            index: (data == null ? void 0 : data.watchEndpoint.index) || null,
            supported_onesie_config: (_p = data == null ? void 0 : data.watchEndpoint) == null ? void 0 : _p.watchEndpointSupportedOnesieConfig,
            music_video_type: (configs == null ? void 0 : configs.musicVideoType) || null
          };
        }
        if (data == null ? void 0 : data.searchEndpoint) {
          this.search = {
            query: data.searchEndpoint.query,
            params: data.searchEndpoint.params
          };
        }
        if (data == null ? void 0 : data.subscribeEndpoint) {
          this.subscribe = {
            channel_ids: data.subscribeEndpoint.channelIds,
            params: data.subscribeEndpoint.params
          };
        }
        if (data == null ? void 0 : data.unsubscribeEndpoint) {
          this.unsubscribe = {
            channel_ids: data.unsubscribeEndpoint.channelIds,
            params: data.unsubscribeEndpoint.params
          };
        }
        if (data == null ? void 0 : data.likeEndpoint) {
          this.like = {
            status: data.likeEndpoint.status,
            target: {
              video_id: data.likeEndpoint.target.videoId,
              playlist_id: data.likeEndpoint.target.playlistId
            },
            params: ((_q = data.likeEndpoint) == null ? void 0 : _q.removeLikeParams) || ((_r = data.likeEndpoint) == null ? void 0 : _r.likeParams) || ((_s = data.likeEndpoint) == null ? void 0 : _s.dislikeParams)
          };
        }
        if (data == null ? void 0 : data.performCommentActionEndpoint) {
          this.perform_comment_action = {
            action: data == null ? void 0 : data.performCommentActionEndpoint.action
          };
        }
        if (data == null ? void 0 : data.offlineVideoEndpoint) {
          this.offline_video = {
            video_id: data.offlineVideoEndpoint.videoId,
            on_add_command: {
              get_download_action: {
                video_id: data.offlineVideoEndpoint.videoId,
                params: data.offlineVideoEndpoint.onAddCommand.getDownloadActionCommand.params
              }
            }
          };
        }
        if (data == null ? void 0 : data.continuationCommand) {
          this.continuation = {
            request: ((_t = data == null ? void 0 : data.continuationCommand) == null ? void 0 : _t.request) || null,
            token: ((_u = data == null ? void 0 : data.continuationCommand) == null ? void 0 : _u.token) || null
          };
        }
        if (data == null ? void 0 : data.feedbackEndpoint) {
          this.feedback = {
            token: data.feedbackEndpoint.feedbackToken
          };
        }
        if (data == null ? void 0 : data.watchPlaylistEndpoint) {
          this.watch_playlist = {
            playlist_id: (_v = data.watchPlaylistEndpoint) == null ? void 0 : _v.playlistId
          };
        }
        if (data == null ? void 0 : data.playlistEditEndpoint) {
          this.playlist_edit = {
            playlist_id: data.playlistEditEndpoint.playlistId,
            actions: data.playlistEditEndpoint.actions.map((item) => ({
              action: item.action,
              removed_video_id: item.removedVideoId
            }))
          };
        }
        if (data == null ? void 0 : data.addToPlaylistEndpoint) {
          this.add_to_playlist = {
            video_id: data.addToPlaylistEndpoint.videoId
          };
        }
        if (data == null ? void 0 : data.addToPlaylistServiceEndpoint) {
          this.add_to_playlist = {
            video_id: data.addToPlaylistServiceEndpoint.videoId
          };
        }
        if (data == null ? void 0 : data.getReportFormEndpoint) {
          this.get_report_form = {
            params: data.getReportFormEndpoint.params
          };
        }
        if (data == null ? void 0 : data.liveChatItemContextMenuEndpoint) {
          this.live_chat_item_context_menu = {
            params: (_w = data == null ? void 0 : data.liveChatItemContextMenuEndpoint) == null ? void 0 : _w.params
          };
        }
        if (data == null ? void 0 : data.sendLiveChatVoteEndpoint) {
          this.send_live_chat_vote = {
            params: data.sendLiveChatVoteEndpoint.params
          };
        }
        if (data == null ? void 0 : data.liveChatItemContextMenuEndpoint) {
          this.live_chat_item_context_menu = {
            params: data.liveChatItemContextMenuEndpoint.params
          };
        }
      }
      async callTest(actions, args = { parse: true, params: {} }) {
        if (!actions)
          throw new Error("An active caller must be provided");
        const response = await actions.execute(this.metadata.api_url, { ...this.payload, ...args.params });
        if (args.parse) {
          return Parser.parseResponse(response.data);
        }
        return response;
      }
      async call(actions, client) {
        if (!actions)
          throw new Error("An active caller must be provided");
        if (this.continuation) {
          switch (this.continuation.request) {
            case "CONTINUATION_REQUEST_TYPE_BROWSE": {
              const response = await actions.browse(this.continuation.token, { is_ctoken: true });
              return Parser.parseResponse(response.data);
            }
            case "CONTINUATION_REQUEST_TYPE_SEARCH": {
              const response = await actions.search({ ctoken: this.continuation.token });
              return Parser.parseResponse(response.data);
            }
            case "CONTINUATION_REQUEST_TYPE_WATCH_NEXT": {
              const response = await actions.next({ ctoken: this.continuation.token });
              return Parser.parseResponse(response.data);
            }
            default:
              throw new Error(`${this.continuation.request} not implemented`);
          }
        }
        if (this.search) {
          const response = await actions.search({ query: this.search.query, params: this.search.params, client });
          return Parser.parseResponse(response.data);
        }
        if (this.browse) {
          const response = await actions.browse(this.browse.id, { ...this.browse, client });
          return Parser.parseResponse(response.data);
        }
        if (this.like) {
          const response = await actions.engage(this.metadata.api_url, { video_id: this.like.target.video_id, params: this.like.params });
          return response;
        }
      }
    };
    module2.exports = NavigationEndpoint;
  }
});

// lib/parser/contents/classes/TextRun.js
var require_TextRun = __commonJS({
  "lib/parser/contents/classes/TextRun.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var TextRun = class {
      constructor(data) {
        this.text = data.text;
        this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : {};
      }
    };
    module2.exports = TextRun;
  }
});

// lib/parser/contents/classes/EmojiRun.js
var require_EmojiRun = __commonJS({
  "lib/parser/contents/classes/EmojiRun.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var EmojiRun = class {
      constructor(data) {
        var _a, _b, _c;
        this.text = ((_a = data.emoji) == null ? void 0 : _a.emojiId) || ((_c = (_b = data.emoji) == null ? void 0 : _b.shortcuts) == null ? void 0 : _c[0]) || null;
        this.emoji = {
          emoji_id: data.emoji.emojiId,
          shortcuts: data.emoji.shortcuts,
          search_terms: data.emoji.searchTerms,
          image: Thumbnail.fromResponse(data.emoji.image)
        };
      }
    };
    module2.exports = EmojiRun;
  }
});

// lib/parser/contents/classes/Text.js
var require_Text = __commonJS({
  "lib/parser/contents/classes/Text.js"(exports2, module2) {
    "use strict";
    var TextRun = require_TextRun();
    var EmojiRun = require_EmojiRun();
    var Text = class {
      text;
      constructor(data) {
        if (data == null ? void 0 : data.hasOwnProperty("runs")) {
          this.runs = data.runs.map((run) => run.emoji && new EmojiRun(run) || new TextRun(run));
          this.text = this.runs.map((run) => run.text).join("");
        } else {
          this.text = (data == null ? void 0 : data.simpleText) || "N/A";
        }
      }
      toString() {
        return this.text;
      }
    };
    module2.exports = Text;
  }
});

// lib/parser/contents/classes/NavigatableText.js
var require_NavigatableText = __commonJS({
  "lib/parser/contents/classes/NavigatableText.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var NavigatableText = class extends Text {
      type = "NavigatableText";
      endpoint;
      constructor(node) {
        var _a, _b;
        super(node);
        this.endpoint = ((_b = (_a = node.runs) == null ? void 0 : _a[0]) == null ? void 0 : _b.navigationEndpoint) ? new NavigationEndpoint(node.runs[0].navigationEndpoint) : node.navigationEndpoint ? new NavigationEndpoint(node.navigationEndpoint) : node.titleNavigationEndpoint ? new NavigationEndpoint(node.titleNavigationEndpoint) : null;
      }
      toJSON() {
        return this;
      }
    };
    module2.exports = NavigatableText;
  }
});

// lib/parser/contents/classes/Author.js
var require_Author = __commonJS({
  "lib/parser/contents/classes/Author.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigatableText = require_NavigatableText();
    var Thumbnail = require_Thumbnail();
    var Constants = require_Constants();
    var _nav_text;
    var Author = class {
      constructor(item, badges, thumbs) {
        __privateAdd(this, _nav_text, void 0);
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        __privateSet(this, _nav_text, new NavigatableText(item));
        this.id = ((_b = (_a = __privateGet(this, _nav_text).runs) == null ? void 0 : _a[0].endpoint.browse) == null ? void 0 : _b.id) || ((_d = (_c = __privateGet(this, _nav_text).endpoint) == null ? void 0 : _c.browse) == null ? void 0 : _d.id) || "N/A";
        this.name = __privateGet(this, _nav_text).text || "N/A";
        this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
        this.endpoint = ((_e = __privateGet(this, _nav_text).runs) == null ? void 0 : _e[0].endpoint) || __privateGet(this, _nav_text).endpoint;
        this.badges = Array.isArray(badges) ? Parser.parse(badges) : [];
        this.is_verified = ((_f = this.badges) == null ? void 0 : _f.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED")) || null;
        this.is_verified_artist = ((_g = this.badges) == null ? void 0 : _g.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST")) || null;
        this.url = ((_h = __privateGet(this, _nav_text).runs) == null ? void 0 : _h[0].endpoint.browse) && `${Constants.URLS.YT_BASE}${((_i = __privateGet(this, _nav_text).runs[0].endpoint.browse) == null ? void 0 : _i.base_url) || `/u/${(_j = __privateGet(this, _nav_text).runs[0].endpoint.browse) == null ? void 0 : _j.id}`}` || `${Constants.URLS.YT_BASE}${((_l = (_k = __privateGet(this, _nav_text).endpoint) == null ? void 0 : _k.browse) == null ? void 0 : _l.base_url) || `/u/${(_n = (_m = __privateGet(this, _nav_text).endpoint) == null ? void 0 : _m.browse) == null ? void 0 : _n.id}`}` || null;
      }
      get best_thumbnail() {
        return this.thumbnails[0];
      }
    };
    _nav_text = new WeakMap();
    module2.exports = Author;
  }
});

// lib/parser/contents/classes/BackstageImage.js
var require_BackstageImage = __commonJS({
  "lib/parser/contents/classes/BackstageImage.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var BackstageImage = class {
      type = "BackstageImage";
      constructor(data) {
        this.image = Thumbnail.fromResponse(data.image);
      }
    };
    module2.exports = BackstageImage;
  }
});

// lib/parser/contents/classes/BackstagePost.js
var require_BackstagePost = __commonJS({
  "lib/parser/contents/classes/BackstagePost.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Author = require_Author();
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var BackstagePost = class {
      type = "BackstagePost";
      constructor(data) {
        this.id = data.postId;
        this.author = new Author({
          ...data.authorText,
          navigationEndpoint: data.authorEndpoint
        }, null, data.authorThumbnail);
        this.content = new Text(data.contentText, "");
        this.published = new Text(data.publishedTimeText);
        this.poll_status = data.pollStatus;
        this.vote_status = data.voteStatus;
        this.likes = new Text(data.voteCount);
        this.menu = Parser.parse(data.actionMenu) || null;
        this.actions = Parser.parse(data.actionButtons);
        this.vote_button = Parser.parse(data.voteButton);
        this.surface = data.surface;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.attachment = Parser.parse(data.backstageAttachment) || null;
      }
    };
    module2.exports = BackstagePost;
  }
});

// lib/parser/contents/classes/BackstagePostThread.js
var require_BackstagePostThread = __commonJS({
  "lib/parser/contents/classes/BackstagePostThread.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var BackstagePostThread = class {
      type = "BackstagePostThread";
      constructor(data) {
        this.post = Parser.parse(data.post);
      }
    };
    module2.exports = BackstagePostThread;
  }
});

// lib/parser/contents/classes/BrowseFeedActions.js
var require_BrowseFeedActions = __commonJS({
  "lib/parser/contents/classes/BrowseFeedActions.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var BrowseFeedActions = class {
      type = "BrowseFeedActions";
      constructor(data) {
        this.contents = Parser.parse(data.contents);
      }
    };
    module2.exports = BrowseFeedActions;
  }
});

// lib/parser/contents/classes/Button.js
var require_Button = __commonJS({
  "lib/parser/contents/classes/Button.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Button = class {
      type = "Button";
      constructor(data) {
        var _a, _b, _c, _d;
        this.text = new Text(data.text).toString();
        if ((_a = data.accessibility) == null ? void 0 : _a.label) {
          this.label = (_b = data.accessibility) == null ? void 0 : _b.label;
        }
        if (data.tooltip) {
          this.tooltip = data.tooltip;
        }
        if ((_c = data.icon) == null ? void 0 : _c.iconType) {
          this.iconType = (_d = data.icon) == null ? void 0 : _d.iconType;
        }
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint || data.command);
      }
    };
    module2.exports = Button;
  }
});

// lib/parser/contents/classes/C4TabbedHeader.js
var require_C4TabbedHeader = __commonJS({
  "lib/parser/contents/classes/C4TabbedHeader.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Author = require_Author();
    var Thumbnail = require_Thumbnail();
    var Text = require_Text();
    var C4TabbedHeader = class {
      type = "C4TabbedHeader";
      constructor(data) {
        this.author = new Author({
          simpleText: data.title,
          navigationEndpoint: data.navigationEndpoint
        }, data.badges, data.avatar);
        this.banner = data.banner ? Thumbnail.fromResponse(data.banner) : [];
        this.tv_banner = data.tvBanner ? Thumbnail.fromResponse(data.tvBanner) : [];
        this.mobile_banner = data.mobileBanner ? Thumbnail.fromResponse(data.mobileBanner) : [];
        this.subscribers = new Text(data.subscriberCountText);
        this.sponsor_button = data.sponsorButton && Parser.parse(data.sponsorButton);
        this.subscribe_button = data.subscribeButton && Parser.parse(data.subscribeButton);
        this.header_links = data.headerLinks && Parser.parse(data.headerLinks);
      }
    };
    module2.exports = C4TabbedHeader;
  }
});

// lib/parser/contents/classes/CallToActionButton.js
var require_CallToActionButton = __commonJS({
  "lib/parser/contents/classes/CallToActionButton.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var CallToActionButton = class {
      type = "CallToActionButton";
      constructor(data) {
        this.label = new Text(data.label);
        this.icon_type = data.icon.iconType;
        this.style = data.style;
      }
    };
    module2.exports = CallToActionButton;
  }
});

// lib/parser/contents/classes/Card.js
var require_Card = __commonJS({
  "lib/parser/contents/classes/Card.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Card = class {
      type = "Card";
      constructor(data) {
        this.teaser = Parser.parse(data.teaser);
        this.content = Parser.parse(data.content);
        this.card_id = data.cardId;
        this.feature = data.feature;
        this.cue_ranges = data.cueRanges.map((cr) => ({
          start_card_active_ms: cr.startCardActiveMs,
          end_card_active_ms: cr.endCardActiveMs,
          teaser_duration_ms: cr.teaserDurationMs,
          icon_after_teaser_ms: cr.iconAfterTeaserMs
        }));
      }
    };
    module2.exports = Card;
  }
});

// lib/parser/contents/classes/CardCollection.js
var require_CardCollection = __commonJS({
  "lib/parser/contents/classes/CardCollection.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var CardCollection = class {
      type = "CardCollection";
      constructor(data) {
        this.cards = Parser.parse(data.cards);
        this.header = new Text(data.headerText);
        this.allow_teaser_dismiss = data.allowTeaserDismiss;
      }
    };
    module2.exports = CardCollection;
  }
});

// lib/parser/contents/classes/Channel.js
var require_Channel = __commonJS({
  "lib/parser/contents/classes/Channel.js"(exports2, module2) {
    "use strict";
    var Author = require_Author();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var Channel2 = class {
      type = "Channel";
      constructor(data) {
        this.id = data.channelId;
        this.author = new Author({
          ...data.title,
          navigationEndpoint: data.navigationEndpoint
        }, data.ownerBadges, data.thumbnail);
        this.subscribers = new Text(data.subscriberCountText);
        this.videos = new Text(data.videoCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.description_snippet = new Text(data.descriptionSnippet);
      }
    };
    module2.exports = Channel2;
  }
});

// lib/parser/contents/classes/ChannelAboutFullMetadata.js
var require_ChannelAboutFullMetadata = __commonJS({
  "lib/parser/contents/classes/ChannelAboutFullMetadata.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var Parser = require_contents();
    var ChannelAboutFullMetadata = class {
      type = "ChannelAboutFullMetadata";
      constructor(data) {
        this.id = data.channelId;
        this.name = new Text(data.title);
        this.avatar = Thumbnail.fromResponse(data.avatar);
        this.canonical_channel_url = data.canonicalChannelUrl;
        this.views = new Text(data.viewCountText);
        this.joined = new Text(data.joinedDateText);
        this.description = new Text(data.description);
        this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
        this.can_reveal_email = !data.signInForBusinessEmail;
        this.country = new Text(data.country);
        this.buttons = Parser.parse(data.actionButtons);
      }
    };
    module2.exports = ChannelAboutFullMetadata;
  }
});

// lib/parser/contents/classes/ChannelFeaturedContent.js
var require_ChannelFeaturedContent = __commonJS({
  "lib/parser/contents/classes/ChannelFeaturedContent.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var ChannelFeaturedContent = class {
      type = "ChannelFeaturedContent";
      constructor(data) {
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
      }
    };
    module2.exports = ChannelFeaturedContent;
  }
});

// lib/parser/contents/classes/ChannelHeaderLinks.js
var require_ChannelHeaderLinks = __commonJS({
  "lib/parser/contents/classes/ChannelHeaderLinks.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var HeaderLink = class {
      constructor(data) {
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.icon = Thumbnail.fromResponse(data.icon);
        this.title = new Text(data.title);
      }
    };
    var ChannelHeaderLinks = class {
      type = "ChannelHeaderLinks";
      constructor(data) {
        var _a, _b;
        this.primary = ((_a = data.primaryLinks) == null ? void 0 : _a.map((link) => new HeaderLink(link))) || [];
        this.secondary = ((_b = data.secondaryLinks) == null ? void 0 : _b.map((link) => new HeaderLink(link))) || [];
      }
    };
    module2.exports = ChannelHeaderLinks;
  }
});

// lib/parser/contents/classes/ChannelMetadata.js
var require_ChannelMetadata = __commonJS({
  "lib/parser/contents/classes/ChannelMetadata.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var ChannelMetadata = class {
      type = "ChannelMetadata";
      constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.url = data.channelUrl;
        this.rss_urls = data.rssUrl;
        this.vanity_channel_url = data.vanityChannelUrl;
        this.external_id = data.externalId;
        this.is_family_safe = data.isFamilySafe;
        this.keywords = data.keywords;
        this.avatar = Thumbnail.fromResponse(data.avatar);
        this.available_countries = data.availableCountryCodes;
        this.android_deep_link = data.androidDeepLink;
        this.android_appindexing_link = data.androidAppindexingLink;
        this.ios_appindexing_link = data.iosAppindexingLink;
      }
    };
    module2.exports = ChannelMetadata;
  }
});

// lib/parser/contents/classes/ChannelMobileHeader.js
var require_ChannelMobileHeader = __commonJS({
  "lib/parser/contents/classes/ChannelMobileHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ChannelMobileHeader = class {
      constructor(data) {
        this.title = new Text(data.title);
      }
    };
    module2.exports = ChannelMobileHeader;
  }
});

// lib/parser/contents/classes/ChannelThumbnailWithLink.js
var require_ChannelThumbnailWithLink = __commonJS({
  "lib/parser/contents/classes/ChannelThumbnailWithLink.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ChannelThumbnailWithLink = class {
      type = "ChannelThumbnailWithLink";
      constructor(data) {
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.label = data.accessibility.accessibilityData.label;
      }
    };
    module2.exports = ChannelThumbnailWithLink;
  }
});

// lib/parser/contents/classes/ChannelVideoPlayer.js
var require_ChannelVideoPlayer = __commonJS({
  "lib/parser/contents/classes/ChannelVideoPlayer.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ChannelVideoPlayer = class {
      type = "ChannelVideoPlayer";
      constructor(data) {
        this.id = data.videoId;
        this.title = new Text(data.title, "");
        this.description = new Text(data.description, "");
        this.views = new Text(data.viewCountText, "");
        this.published_at = new Text(data.publishedTimeText, "");
      }
    };
    module2.exports = ChannelVideoPlayer;
  }
});

// lib/parser/contents/classes/ChildVideo.js
var require_ChildVideo = __commonJS({
  "lib/parser/contents/classes/ChildVideo.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var Utils = require_Utils();
    var Text = require_Text();
    var ChildVideo = class {
      type = "ChildVideo";
      constructor(data) {
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.duration = {
          text: data.lengthText.simpleText,
          seconds: Utils.timeToSeconds(data.lengthText.simpleText)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = ChildVideo;
  }
});

// lib/parser/contents/classes/ChipCloud.js
var require_ChipCloud = __commonJS({
  "lib/parser/contents/classes/ChipCloud.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ChipCloud = class {
      type = "ChipCloud";
      constructor(data) {
        this.chips = Parser.parse(data.chips);
        this.next_button = Parser.parse(data.nextButton);
        this.previous_button = Parser.parse(data.previousButton);
        this.horizontal_scrollable = data.horizontalScrollable;
      }
    };
    module2.exports = ChipCloud;
  }
});

// lib/parser/contents/classes/ChipCloudChip.js
var require_ChipCloudChip = __commonJS({
  "lib/parser/contents/classes/ChipCloudChip.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ChipCloudChip = class {
      type = "ChipCloudChip";
      constructor(data) {
        this.is_selected = data.isSelected;
        this.endpoint = data.navigationEndpoint && new NavigationEndpoint(data.navigationEndpoint);
        this.text = new Text(data.text).toString();
      }
    };
    module2.exports = ChipCloudChip;
  }
});

// lib/parser/contents/classes/CollageHeroImage.js
var require_CollageHeroImage = __commonJS({
  "lib/parser/contents/classes/CollageHeroImage.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var Thumbnail = require_Thumbnail();
    var CollageHeroImage = class {
      type = "CollageHeroImage";
      constructor(data) {
        this.left = Thumbnail.fromResponse(data.leftThumbnail);
        this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
        this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = CollageHeroImage;
  }
});

// lib/parser/contents/classes/Comment.js
var require_Comment = __commonJS({
  "lib/parser/contents/classes/Comment.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var Author = require_Author();
    var Proto2 = require_proto();
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var _actions;
    var Comment = class {
      constructor(data) {
        __publicField(this, "type", "Comment");
        __privateAdd(this, _actions, void 0);
        var _a, _b;
        this.content = new Text(data.contentText);
        this.published = new Text(data.publishedTimeText);
        this.author_is_channel_owner = data.authorIsChannelOwner;
        this.current_user_reply_thumbnail = Thumbnail.fromResponse(data.currentUserReplyThumbnail);
        this.author_badge = Parser.parse(data.authorCommentBadge, "comments");
        this.author = new Author({
          ...data.authorText,
          navigationEndpoint: data.authorEndpoint
        }, this.author_badge ? [{
          metadataBadgeRenderer: (_a = this.author_badge) == null ? void 0 : _a.orig_badge
        }] : null, data.authorThumbnail);
        this.action_menu = Parser.parse(data.actionMenu);
        this.action_buttons = Parser.parse(data.actionButtons, "comments");
        this.comment_id = data.commentId;
        this.vote_status = data.voteStatus;
        this.vote_count = {
          text: data.voteCount ? (_b = data.voteCount.accessibility.accessibilityData) == null ? void 0 : _b.label.replace(/\D/g, "") : "0",
          short_text: data.voteCount ? new Text(data.voteCount).toString() : "0"
        };
        this.reply_count = data.replyCount || 0;
        this.is_liked = this.action_buttons.like_button.is_toggled;
        this.is_disliked = this.action_buttons.dislike_button.is_toggled;
        this.is_pinned = !!data.pinnedCommentBadge;
      }
      async like() {
        const button = this.action_buttons.like_button;
        if (button.is_toggled)
          throw new InnertubeError2("This comment is already liked", { comment_id: this.comment_id });
        const response = await button.endpoint.callTest(__privateGet(this, _actions), { parse: false });
        return response;
      }
      async dislike() {
        const button = this.action_buttons.dislike_button;
        if (button.is_toggled)
          throw new InnertubeError2("This comment is already disliked", { comment_id: this.comment_id });
        const response = await button.endpoint.callTest(__privateGet(this, _actions), { parse: false });
        return response;
      }
      async reply(text) {
        if (!this.action_buttons.reply_button)
          throw new InnertubeError2("Cannot reply to another reply. Try mentioning the user instead.", { comment_id: this.comment_id });
        const button = this.action_buttons.reply_button;
        const dialog_button = button.endpoint.dialog.reply_button;
        const payload = {
          params: {
            commentText: text
          }
        };
        const response = await dialog_button.endpoint.callTest(__privateGet(this, _actions), payload);
        return response;
      }
      async translate(target_language) {
        const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, "");
        const payload = {
          text,
          target_language,
          comment_id: this.comment_id
        };
        const action = Proto2.encodeCommentActionParams(22, payload);
        const response = await __privateGet(this, _actions).execute("comment/perform_comment_action", { action, client: "ANDROID" });
        const mutations = response.data.frameworkUpdates.entityBatchUpdate.mutations;
        const content = mutations[0].payload.commentEntityPayload.translatedContent.content;
        return { ...response, content };
      }
      setActions(actions) {
        __privateSet(this, _actions, actions);
      }
    };
    _actions = new WeakMap();
    module2.exports = Comment;
  }
});

// lib/parser/contents/classes/CommentReplyDialog.js
var require_CommentReplyDialog = __commonJS({
  "lib/parser/contents/classes/CommentReplyDialog.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var Text = require_Text();
    var CommentReplyDialog = class {
      type = "CommentReplyDialog";
      constructor(data) {
        this.reply_button = Parser.parse(data.replyButton);
        this.cancel_button = Parser.parse(data.cancelButton);
        this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.error_message = new Text(data.errorMessage);
      }
    };
    module2.exports = CommentReplyDialog;
  }
});

// lib/parser/contents/classes/comments/AuthorCommentBadge.js
var require_AuthorCommentBadge = __commonJS({
  "lib/parser/contents/classes/comments/AuthorCommentBadge.js"(exports2, module2) {
    "use strict";
    var _data;
    var AuthorCommentBadge = class {
      constructor(data) {
        __publicField(this, "type", "AuthorCommentBadge");
        __privateAdd(this, _data, void 0);
        this.icon_type = data.icon.iconType;
        this.tooltip = data.iconTooltip;
        this.tooltip === "Verified" && (this.style = "BADGE_STYLE_TYPE_VERIFIED") && (data.style = "BADGE_STYLE_TYPE_VERIFIED");
        __privateSet(this, _data, data);
      }
      get orig_badge() {
        return __privateGet(this, _data);
      }
    };
    _data = new WeakMap();
    module2.exports = AuthorCommentBadge;
  }
});

// lib/parser/contents/classes/comments/CommentActionButtons.js
var require_CommentActionButtons = __commonJS({
  "lib/parser/contents/classes/comments/CommentActionButtons.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var CommentActionButtons = class {
      type = "CommentActionButtons";
      constructor(data) {
        this.like_button = Parser.parse(data.likeButton);
        this.dislike_button = Parser.parse(data.dislikeButton);
        this.reply_button = Parser.parse(data.replyButton);
      }
    };
    module2.exports = CommentActionButtons;
  }
});

// lib/parser/contents/classes/comments/CommentReplies.js
var require_CommentReplies = __commonJS({
  "lib/parser/contents/classes/comments/CommentReplies.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var CommentReplies = class {
      type = "CommentReplies";
      constructor(data) {
        this.contents = Parser.parse(data.contents);
        this.view_replies = Parser.parse(data.viewReplies);
        this.hide_replies = Parser.parse(data.hideReplies);
      }
    };
    module2.exports = CommentReplies;
  }
});

// lib/parser/contents/classes/comments/CommentSimplebox.js
var require_CommentSimplebox = __commonJS({
  "lib/parser/contents/classes/comments/CommentSimplebox.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var Text = require_Text();
    var CommentSimplebox = class {
      type = "CommentSimplebox";
      constructor(data) {
        this.submit_button = Parser.parse(data.submitButton);
        this.cancel_button = Parser.parse(data.cancelButton);
        this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.avatar_size = data.avatarSize;
      }
    };
    module2.exports = CommentSimplebox;
  }
});

// lib/parser/contents/classes/CommentsEntryPointHeader.js
var require_CommentsEntryPointHeader = __commonJS({
  "lib/parser/contents/classes/CommentsEntryPointHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var CommentsEntryPointHeader = class {
      type = "CommentsEntryPointHeader";
      constructor(data) {
        this.header = new Text(data.headerText);
        this.comment_count = new Text(data.commentCount);
        this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
        this.teaser_content = new Text(data.teaserContent);
        this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
      }
    };
    module2.exports = CommentsEntryPointHeader;
  }
});

// lib/parser/contents/classes/CommentsHeader.js
var require_CommentsHeader = __commonJS({
  "lib/parser/contents/classes/CommentsHeader.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var CommentsHeader = class {
      type = "CommentsHeader";
      constructor(data) {
        var _a;
        this.title = new Text(data.titleText);
        this.count = new Text(data.countText);
        this.comments_count = new Text(data.commentsCount);
        this.create_renderer = Parser.parse(data.createRenderer, "comments");
        this.sort_menu = Parser.parse(data.sortMenu);
        this.custom_emojis = ((_a = data.customEmojis) == null ? void 0 : _a.map((emoji) => ({
          emoji_id: emoji.emojiId,
          shortcuts: emoji.shortcuts,
          search_terms: emoji.searchTerms,
          image: Thumbnail.fromResponse(emoji.image),
          is_custom_emoji: emoji.isCustomEmoji
        }))) || null;
      }
    };
    module2.exports = CommentsHeader;
  }
});

// lib/parser/contents/classes/CommentThread.js
var require_CommentThread = __commonJS({
  "lib/parser/contents/classes/CommentThread.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var _replies, _actions, _continuation;
    var CommentThread = class {
      constructor(data) {
        __publicField(this, "type", "CommentThread");
        __privateAdd(this, _replies, void 0);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _continuation, void 0);
        this.comment = Parser.parse(data.comment);
        __privateSet(this, _replies, Parser.parse(data.replies, "comments"));
        this.is_moderated_elq_comment = data.isModeratedElqComment;
      }
      async getReplies() {
        var _a;
        if (!__privateGet(this, _replies))
          throw new InnertubeError2("This comment has no replies.", { comment_id: this.comment.comment_id });
        const continuation = __privateGet(this, _replies).contents.get({ type: "ContinuationItem" });
        const response = await continuation.endpoint.callTest(__privateGet(this, _actions));
        this.replies = response.on_response_received_endpoints_memo.get("Comment").map((comment) => {
          comment.setActions(__privateGet(this, _actions));
          return comment;
        });
        __privateSet(this, _continuation, (_a = response.on_response_received_endpoints_memo.get("ContinuationItem")) == null ? void 0 : _a[0]);
        return this;
      }
      async getContinuation() {
        var _a;
        if (!this.replies)
          throw new InnertubeError2("Continuation not available.");
        if (!__privateGet(this, _continuation))
          throw new InnertubeError2("Continuation not found.");
        const response = await __privateGet(this, _continuation).button.endpoint.callTest(__privateGet(this, _actions));
        this.replies = response.on_response_received_endpoints_memo.get("Comment").map((comment) => {
          comment.setActions(__privateGet(this, _actions));
          return comment;
        });
        __privateSet(this, _continuation, (_a = response.on_response_received_endpoints_memo.get("ContinuationItem")) == null ? void 0 : _a[0]);
        return this;
      }
      setActions(actions) {
        __privateSet(this, _actions, actions);
      }
    };
    _replies = new WeakMap();
    _actions = new WeakMap();
    _continuation = new WeakMap();
    module2.exports = CommentThread;
  }
});

// lib/parser/contents/classes/CompactLink.js
var require_CompactLink = __commonJS({
  "lib/parser/contents/classes/CompactLink.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var CompactLink = class {
      type = "CompactLink";
      constructor(data) {
        this.title = new Text(data.title).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.style = data.style;
      }
    };
    module2.exports = CompactLink;
  }
});

// lib/parser/contents/classes/PlaylistAuthor.js
var require_PlaylistAuthor = __commonJS({
  "lib/parser/contents/classes/PlaylistAuthor.js"(exports2, module2) {
    "use strict";
    var Author = require_Author();
    var PlaylistAuthor = class extends Author {
      constructor(data) {
        super(data);
        delete this.badges;
        delete this.is_verified;
        delete this.is_verified_artist;
      }
    };
    module2.exports = PlaylistAuthor;
  }
});

// lib/parser/contents/classes/Playlist.js
var require_Playlist = __commonJS({
  "lib/parser/contents/classes/Playlist.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var PlaylistAuthor = require_PlaylistAuthor();
    var Playlist2 = class {
      type = "Playlist";
      constructor(data) {
        var _a;
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.author = ((_a = data.shortBylineText) == null ? void 0 : _a.simpleText) ? new Text(data.shortBylineText) : new PlaylistAuthor(data.longBylineText, data.ownerBadges, null);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th) => th.thumbnails).flat(1) });
        this.video_count = new Text(data.thumbnailText);
        this.video_count_short = new Text(data.videoCountShortText);
        this.first_videos = Parser.parse(data.videos) || [];
        this.share_url = data.shareUrl || null;
        this.menu = Parser.parse(data.menu);
        this.badges = Parser.parse(data.ownerBadges);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays) || [];
      }
    };
    module2.exports = Playlist2;
  }
});

// lib/parser/contents/classes/CompactMix.js
var require_CompactMix = __commonJS({
  "lib/parser/contents/classes/CompactMix.js"(exports2, module2) {
    "use strict";
    var Playlist2 = require_Playlist();
    var CompactMix = class extends Playlist2 {
      type = "CompactMix";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = CompactMix;
  }
});

// lib/parser/contents/classes/CompactPlaylist.js
var require_CompactPlaylist = __commonJS({
  "lib/parser/contents/classes/CompactPlaylist.js"(exports2, module2) {
    "use strict";
    var Playlist2 = require_Playlist();
    var CompactPlaylist = class extends Playlist2 {
      type = "CompactPlaylist";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = CompactPlaylist;
  }
});

// lib/parser/contents/classes/CompactVideo.js
var require_CompactVideo = __commonJS({
  "lib/parser/contents/classes/CompactVideo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Author = require_Author();
    var Utils = require_Utils();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var CompactVideo = class {
      type = "CompactVideo";
      constructor(data) {
        this.id = data.videoId;
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
        this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
        this.title = new Text(data.title);
        this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
        this.view_count = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.published = new Text(data.publishedTimeText);
        this.duration = {
          text: new Text(data.lengthText).toString(),
          seconds: Utils.timeToSeconds(new Text(data.lengthText).toString())
        };
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parse(data.menu);
      }
      get best_thumbnail() {
        return this.thumbnails[0];
      }
    };
    module2.exports = CompactVideo;
  }
});

// lib/parser/contents/classes/ContinuationItem.js
var require_ContinuationItem = __commonJS({
  "lib/parser/contents/classes/ContinuationItem.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ContinuationItem = class {
      type = "ContinuationItem";
      constructor(data) {
        this.trigger = data.trigger;
        data.button && (this.button = Parser.parse(data.button));
        this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
      }
    };
    module2.exports = ContinuationItem;
  }
});

// lib/parser/contents/classes/CtaGoToCreatorStudio.js
var require_CtaGoToCreatorStudio = __commonJS({
  "lib/parser/contents/classes/CtaGoToCreatorStudio.js"(exports2, module2) {
    "use strict";
    var CtaGoToCreatorStudio = class {
      type = "CtaGoToCreatorStudio";
      constructor(data) {
        this.title = data.buttonLabel;
        this.use_new_specs = data.useNewSpecs;
      }
    };
    module2.exports = CtaGoToCreatorStudio;
  }
});

// lib/parser/contents/classes/DidYouMean.js
var require_DidYouMean = __commonJS({
  "lib/parser/contents/classes/DidYouMean.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var DidYouMean = class {
      type = "DidYouMean";
      constructor(data) {
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = DidYouMean;
  }
});

// lib/parser/contents/classes/DownloadButton.js
var require_DownloadButton = __commonJS({
  "lib/parser/contents/classes/DownloadButton.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var DownloadButton = class {
      type = "DownloadButton";
      constructor(data) {
        this.style = data.style;
        this.size = data.size;
        this.endpoint = new NavigationEndpoint(data.command);
        this.target_id = data.targetId;
      }
    };
    module2.exports = DownloadButton;
  }
});

// lib/parser/contents/classes/Element.js
var require_Element = __commonJS({
  "lib/parser/contents/classes/Element.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Element = class {
      type = "Element";
      constructor(data) {
        const type = data.newElement.type.componentType;
        return Parser.parse(type.model);
      }
    };
    module2.exports = Element;
  }
});

// lib/parser/contents/classes/EmergencyOnebox.js
var require_EmergencyOnebox = __commonJS({
  "lib/parser/contents/classes/EmergencyOnebox.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var EmergencyOnebox = class {
      type = "EmergencyOnebox";
      constructor(data) {
        this.title = new Text(data.title);
        this.first_option = Parser.parse(data.firstOption);
        this.menu = Parser.parse(data.menu);
      }
    };
    module2.exports = EmergencyOnebox;
  }
});

// lib/parser/contents/classes/Endscreen.js
var require_Endscreen = __commonJS({
  "lib/parser/contents/classes/Endscreen.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Endscreen = class {
      type = "Endscreen";
      constructor(data) {
        this.elements = Parser.parse(data.elements);
        this.start_ms = data.startMs;
      }
    };
    module2.exports = Endscreen;
  }
});

// lib/parser/contents/classes/EndscreenElement.js
var require_EndscreenElement = __commonJS({
  "lib/parser/contents/classes/EndscreenElement.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var EndscreenElement = class {
      type = "EndscreenElement";
      constructor(data) {
        this.style = data.style;
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.endpoint);
        if (data.image) {
          this.image = Thumbnail.fromResponse(data.image);
        }
        if (data.icon) {
          this.icon = Thumbnail.fromResponse(data.icon);
        }
        if (data.metadata) {
          this.metadata = new Text(data.metadata);
        }
        if (data.callToAction) {
          this.call_to_action = new Text(data.callToAction);
        }
        if (data.hovercardButton) {
          this.hovercard_button = Parser.parse(data.hovercardButton);
        }
        if (data.isSubscribe) {
          this.is_subscribe = data.isSubscribe;
        }
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.left = data.left;
        this.width = data.width;
        this.top = data.top;
        this.aspect_ratio = data.aspectRatio;
        this.start_ms = data.startMs;
        this.end_ms = data.endMs;
        this.id = data.id;
      }
    };
    module2.exports = EndscreenElement;
  }
});

// lib/parser/contents/classes/EndScreenPlaylist.js
var require_EndScreenPlaylist = __commonJS({
  "lib/parser/contents/classes/EndScreenPlaylist.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var EndScreenPlaylist = class {
      type = "EndScreenPlaylist";
      constructor(data) {
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.author = new Text(data.longBylineText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_count = new Text(data.videoCountText);
      }
    };
    module2.exports = EndScreenPlaylist;
  }
});

// lib/parser/contents/classes/EndScreenVideo.js
var require_EndScreenVideo = __commonJS({
  "lib/parser/contents/classes/EndScreenVideo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Author = require_Author();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var EndScreenVideo = class {
      type = "EndScreenVideo";
      constructor(data) {
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.author = new Author(data.shortBylineText, data.ownerBadges);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.short_view_count_text = new Text(data.shortViewCountText);
        this.badges = Parser.parse(data.badges);
        this.duration = {
          text: new Text(data.lengthText).toString(),
          seconds: data.lengthInSeconds
        };
      }
    };
    module2.exports = EndScreenVideo;
  }
});

// lib/parser/contents/classes/ExpandableTab.js
var require_ExpandableTab = __commonJS({
  "lib/parser/contents/classes/ExpandableTab.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ExpandableTab = class {
      type = "ExpandableTab";
      constructor(data) {
        this.title = data.title;
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.selected = data.selected;
        this.content = data.content ? Parser.parse(data.content) : null;
      }
    };
    module2.exports = ExpandableTab;
  }
});

// lib/parser/contents/classes/ExpandedShelfContents.js
var require_ExpandedShelfContents = __commonJS({
  "lib/parser/contents/classes/ExpandedShelfContents.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ExpandedShelfContents = class {
      type = "ExpandedShelfContents";
      constructor(data) {
        this.items = Parser.parse(data.items);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = ExpandedShelfContents;
  }
});

// lib/parser/contents/classes/FeedFilterChipBar.js
var require_FeedFilterChipBar = __commonJS({
  "lib/parser/contents/classes/FeedFilterChipBar.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var FeedFilterChipBar = class {
      type = "FeedFilterChipBar";
      constructor(data) {
        this.contents = Parser.parse(data.contents);
      }
    };
    module2.exports = FeedFilterChipBar;
  }
});

// lib/parser/contents/classes/FeedTabbedHeader.js
var require_FeedTabbedHeader = __commonJS({
  "lib/parser/contents/classes/FeedTabbedHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var FeedTabbedHeader = class {
      constructor(data) {
        this.title = new Text(data.title);
      }
    };
    module2.exports = FeedTabbedHeader;
  }
});

// lib/parser/contents/classes/Grid.js
var require_Grid = __commonJS({
  "lib/parser/contents/classes/Grid.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Grid = class {
      type = "Grid";
      constructor(data) {
        this.items = Parser.parse(data.items);
        this.is_collapsible = data.isCollapsible;
        this.visible_row_count = data.visibleRowCount;
        this.target_id = data.targetId;
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = Grid;
  }
});

// lib/parser/contents/classes/GridChannel.js
var require_GridChannel = __commonJS({
  "lib/parser/contents/classes/GridChannel.js"(exports2, module2) {
    "use strict";
    var Author = require_Author();
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var GridChannel = class {
      type = "GridChannel";
      constructor(data) {
        this.id = data.channelId;
        this.author = new Author({
          ...data.title,
          navigationEndpoint: data.navigationEndpoint
        }, data.ownerBadges, data.thumbnail);
        this.subscribers = new Text(data.subscriberCountText);
        this.video_count = new Text(data.videoCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.subscribe_button = Parser.parse(data.subscribeButton);
      }
    };
    module2.exports = GridChannel;
  }
});

// lib/parser/contents/classes/GridPlaylist.js
var require_GridPlaylist = __commonJS({
  "lib/parser/contents/classes/GridPlaylist.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var PlaylistAuthor = require_PlaylistAuthor();
    var NavigationEndpoint = require_NavigationEndpoint();
    var NavigatableText = require_NavigatableText();
    var GridPlaylist = class {
      type = "GridPlaylist";
      constructor(data) {
        var _a;
        this.id = data.playlistId;
        this.title = new Text(data.title);
        if (data.shortBylineText) {
          this.author = new PlaylistAuthor(data.shortBylineText, data.ownerBadges);
        }
        this.badges = Parser.parse(data.ownerBadges);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.view_playlist = new NavigatableText(data.viewPlaylistText);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
        this.sidebar_thumbnails = [].concat(...((_a = data.sidebarThumbnails) == null ? void 0 : _a.map((thumbnail) => Thumbnail.fromResponse(thumbnail))) || []) || null;
        this.video_count = new Text(data.thumbnailText);
        this.video_count_short_text = new Text(data.videoCountShortText);
      }
    };
    module2.exports = GridPlaylist;
  }
});

// lib/parser/contents/classes/GridVideo.js
var require_GridVideo = __commonJS({
  "lib/parser/contents/classes/GridVideo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Author = require_Author();
    var GridVideo = class {
      type = "GridVideo";
      constructor(data) {
        var _a;
        const length_alt = (_a = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty("thumbnailOverlayTimeStatusRenderer"))) == null ? void 0 : _a.thumbnailOverlayTimeStatusRenderer;
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
        this.published = new Text(data.publishedTimeText);
        this.duration = data.lengthText ? new Text(data.lengthText) : (length_alt == null ? void 0 : length_alt.text) ? new Text(length_alt.text) : "";
        this.author = data.shortBylineText && new Author(data.shortBylineText, data.ownerBadges);
        this.views = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parse(data.menu);
      }
    };
    module2.exports = GridVideo;
  }
});

// lib/parser/contents/classes/HorizontalCardList.js
var require_HorizontalCardList = __commonJS({
  "lib/parser/contents/classes/HorizontalCardList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var HorizontalCardList = class {
      type = "HorizontalCardList";
      constructor(data) {
        this.cards = Parser.parse(data.cards);
        this.header = Parser.parse(data.header);
        this.previous_button = Parser.parse(data.previousButton);
        this.next_button = Parser.parse(data.nextButton);
      }
    };
    module2.exports = HorizontalCardList;
  }
});

// lib/parser/contents/classes/HorizontalList.js
var require_HorizontalList = __commonJS({
  "lib/parser/contents/classes/HorizontalList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var HorizontalList = class {
      type = "HorizontalList";
      constructor(data) {
        this.visible_item_count = data.visibleItemCount;
        this.items = Parser.parse(data.items);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = HorizontalList;
  }
});

// lib/parser/contents/classes/ItemSection.js
var require_ItemSection = __commonJS({
  "lib/parser/contents/classes/ItemSection.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ItemSection = class {
      type = "ItemSection";
      constructor(data) {
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
        if (data.targetId || data.sectionIdentifier) {
          this.target_id = (data == null ? void 0 : data.target_id) || (data == null ? void 0 : data.sectionIdentifier);
        }
      }
    };
    module2.exports = ItemSection;
  }
});

// lib/parser/contents/classes/ItemSectionHeader.js
var require_ItemSectionHeader = __commonJS({
  "lib/parser/contents/classes/ItemSectionHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ItemSectionHeader = class {
      constructor(data) {
        this.title = new Text(data.title);
      }
    };
    module2.exports = ItemSectionHeader;
  }
});

// lib/parser/contents/classes/LikeButton.js
var require_LikeButton = __commonJS({
  "lib/parser/contents/classes/LikeButton.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var LikeButton = class {
      type = "LikeButton";
      constructor(data) {
        var _a;
        this.target = {
          video_id: data.target.videoId
        };
        this.like_status = data.likeStatus;
        this.likes_allowed = data.likesAllowed;
        if (data.serviceEndpoints) {
          this.endpoints = (_a = data.serviceEndpoints) == null ? void 0 : _a.map((endpoint) => new NavigationEndpoint(endpoint));
        }
      }
    };
    module2.exports = LikeButton;
  }
});

// lib/parser/contents/classes/LiveChat.js
var require_LiveChat = __commonJS({
  "lib/parser/contents/classes/LiveChat.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var LiveChat = class {
      type = "LiveChat";
      constructor(data) {
        var _a, _b;
        this.header = Parser.parse(data.header);
        this.initial_display_state = data.initialDisplayState;
        this.continuation = (_b = (_a = data.continuations[0]) == null ? void 0 : _a.reloadContinuationData) == null ? void 0 : _b.continuation;
        this.client_messages = {
          reconnect_message: new Text(data.clientMessages.reconnectMessage),
          unable_to_reconnect_message: new Text(data.clientMessages.unableToReconnectMessage),
          fatal_error: new Text(data.clientMessages.fatalError),
          reconnected_message: new Text(data.clientMessages.reconnectedMessage),
          generic_error: new Text(data.clientMessages.genericError)
        };
        this.is_replay = data.isReplay || false;
      }
    };
    module2.exports = LiveChat;
  }
});

// lib/parser/contents/classes/livechat/AddBannerToLiveChatCommand.js
var require_AddBannerToLiveChatCommand = __commonJS({
  "lib/parser/contents/classes/livechat/AddBannerToLiveChatCommand.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var AddBannerToLiveChatCommand = class {
      constructor(data) {
        return Parser.parse(data.bannerRenderer, "livechat/items");
      }
    };
    module2.exports = AddBannerToLiveChatCommand;
  }
});

// lib/parser/contents/classes/livechat/AddChatItemAction.js
var require_AddChatItemAction = __commonJS({
  "lib/parser/contents/classes/livechat/AddChatItemAction.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var AddChatItemAction = class {
      type = "AddChatItemAction";
      constructor(data) {
        this.item = Parser.parse(data.item, "livechat/items");
        this.client_id = data.clientId || null;
      }
    };
    module2.exports = AddChatItemAction;
  }
});

// lib/parser/contents/classes/livechat/AddLiveChatTickerItemAction.js
var require_AddLiveChatTickerItemAction = __commonJS({
  "lib/parser/contents/classes/livechat/AddLiveChatTickerItemAction.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var AddLiveChatTickerItemAction = class {
      type = "AddLiveChatTickerItemAction";
      constructor(data) {
        this.item = Parser.parse(data.item, "livechat/items");
        this.duration_sec = data.durationSec;
      }
    };
    module2.exports = AddLiveChatTickerItemAction;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatBanner.js
var require_LiveChatBanner = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatBanner.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var LiveChatBanner = class {
      type = "LiveChatBanner";
      constructor(data) {
        this.header = Parser.parse(data.header, "livechat/items");
        this.contents = Parser.parse(data.contents, "livechat/items");
        this.action_id = data.actionId;
        this.viewer_is_creator = data.viewerIsCreator;
        this.target_id = data.targetId;
        this.is_stackable = data.isStackable;
        this.background_type = data.backgroundType;
      }
    };
    module2.exports = LiveChatBanner;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatBannerHeader.js
var require_LiveChatBannerHeader = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatBannerHeader.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var LiveChatBannerHeader = class {
      type = "LiveChatBannerHeader";
      constructor(data) {
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
      }
    };
    module2.exports = LiveChatBannerHeader;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatBannerPoll.js
var require_LiveChatBannerPoll = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatBannerPoll.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var LiveChatBannerPoll = class {
      type = "LiveChatBannerPoll";
      constructor(data) {
        this.poll_question = new Text(data.pollQuestion);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.choices = data.pollChoices.map((choice) => ({
          option_id: choice.pollOptionId,
          text: new Text(choice.text).toString()
        }));
        this.collapsed_state_entity_key = data.collapsedStateEntityKey;
        this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
      }
    };
    module2.exports = LiveChatBannerPoll;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatMembershipItem.js
var require_LiveChatMembershipItem = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatMembershipItem.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var LiveChatMembershipItem = class {
      type = "LiveChatMembershipItem";
      constructor(data) {
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
        this.header_subtext = new Text(data.headerSubtext);
        this.author = {
          id: data.authorExternalChannelId,
          name: new Text(data == null ? void 0 : data.authorName),
          thumbnails: Thumbnail.fromResponse(data.authorPhoto),
          badges: Parser.parse(data.authorBadges)
        };
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
      }
    };
    module2.exports = LiveChatMembershipItem;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatPaidMessage.js
var require_LiveChatPaidMessage = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatPaidMessage.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Parser = require_contents();
    var LiveChatPaidMessage = class {
      type = "LiveChatPaidMessage";
      constructor(data) {
        this.message = new Text(data.message);
        this.author = {
          id: data.authorExternalChannelId,
          name: new Text(data.authorName),
          thumbnails: Thumbnail.fromResponse(data.authorPhoto),
          badges: Parser.parse(data.authorBadges)
        };
        const badges = Parser.parse(data.authorBadges);
        this.author.badges = badges;
        this.author.is_moderator = (badges == null ? void 0 : badges.some((badge) => badge.icon_type == "MODERATOR")) || null;
        this.author.is_verified = (badges == null ? void 0 : badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED")) || null;
        this.author.is_verified_artist = (badges == null ? void 0 : badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST")) || null;
        this.purchase_amount = new Text(data.purchaseAmountText).toString();
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
        this.timestamp_text = new Text(data.timestampText).toString();
        this.id = data.id;
      }
    };
    module2.exports = LiveChatPaidMessage;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatPaidSticker.js
var require_LiveChatPaidSticker = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatPaidSticker.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Thumbnail = require_Thumbnail();
    var Text = require_Text();
    var LiveChatPaidSticker = class {
      type = "LiveChatPaidSticker";
      constructor(data) {
        this.id = data.id;
        this.author = {
          id: data.authorExternalChannelId,
          name: new Text(data.authorName),
          thumbnails: Thumbnail.fromResponse(data.authorPhoto),
          badges: Parser.parse(data.authorBadges)
        };
        this.sticker = Thumbnail.fromResponse(data.sticker);
        this.purchase_amount = new Text(data.purchaseAmountText).toString();
        this.context_menu = new NavigationEndpoint(data.contextMenuEndpoint);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
      }
    };
    module2.exports = LiveChatPaidSticker;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatPlaceholderItem.js
var require_LiveChatPlaceholderItem = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatPlaceholderItem.js"(exports2, module2) {
    "use strict";
    var LiveChatPlaceholderItem = class {
      type = "LiveChatPlaceholderItem";
      constructor(data) {
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
      }
    };
    module2.exports = LiveChatPlaceholderItem;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatTextMessage.js
var require_LiveChatTextMessage = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatTextMessage.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Parser = require_contents();
    var LiveChatTextMessage = class {
      type = "LiveChatTextMessage";
      constructor(data) {
        this.message = new Text(data.message);
        this.author = {
          id: data.authorExternalChannelId,
          name: new Text(data.authorName),
          thumbnails: Thumbnail.fromResponse(data.authorPhoto)
        };
        const badges = Parser.parse(data.authorBadges);
        this.author.badges = badges;
        this.author.is_moderator = (badges == null ? void 0 : badges.some((badge) => badge.icon_type == "MODERATOR")) || null;
        this.author.is_verified = (badges == null ? void 0 : badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED")) || null;
        this.author.is_verified_artist = (badges == null ? void 0 : badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST")) || null;
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
        this.id = data.id;
      }
    };
    module2.exports = LiveChatTextMessage;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatTickerPaidMessageItem.js
var require_LiveChatTickerPaidMessageItem = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatTickerPaidMessageItem.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Parser = require_contents();
    var LiveChatTickerPaidMessageItem = class {
      type = "LiveChatTickerPaidMessageItem";
      constructor(data) {
        this.author = {
          id: data.authorExternalChannelId,
          thumbnails: Thumbnail.fromResponse(data.authorPhoto),
          badges: Parser.parse(data.authorBadges)
        };
        const badges = Parser.parse(data.authorBadges);
        this.author.badges = badges;
        this.author.is_moderator = (badges == null ? void 0 : badges.some((badge) => badge.icon_type == "MODERATOR")) || null;
        this.author.is_verified = (badges == null ? void 0 : badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED")) || null;
        this.author.is_verified_artist = (badges == null ? void 0 : badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST")) || null;
        this.amount = new Text(data.amount);
        this.duration_sec = data.durationSec;
        this.full_duration_sec = data.fullDurationSec;
        this.show_item = Parser.parse(data.showItemEndpoint.showLiveChatItemEndpoint.renderer, "livechat/items");
        this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
        this.id = data.id;
      }
    };
    module2.exports = LiveChatTickerPaidMessageItem;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatTickerSponsorItem.js
var require_LiveChatTickerSponsorItem = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatTickerSponsorItem.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var LiveChatTickerSponsorItem = class {
      type = "LiveChatTickerSponsorItem";
      constructor(data) {
        this.id = data.id;
        this.detail_text = new Text(data.detailText).toString();
        this.author = {
          id: data.authorExternalChannelId,
          name: new Text(data == null ? void 0 : data.authorName),
          thumbnails: Thumbnail.fromResponse(data.sponsorPhoto)
        };
        this.duration_sec = data.durationSec;
      }
    };
    module2.exports = LiveChatTickerSponsorItem;
  }
});

// lib/parser/contents/classes/livechat/items/LiveChatViewerEngagementMessage.js
var require_LiveChatViewerEngagementMessage = __commonJS({
  "lib/parser/contents/classes/livechat/items/LiveChatViewerEngagementMessage.js"(exports2, module2) {
    "use strict";
    var LiveChatTextMessage = require_LiveChatTextMessage();
    var Parser = require_contents();
    var LiveChatViewerEngagementMessage = class extends LiveChatTextMessage {
      type = "LiveChatViewerEngagementMessage";
      constructor(data) {
        super(data);
        delete this.author;
        delete this.menu_endpoint;
        this.icon_type = data.icon.iconType;
        this.action_button = Parser.parse(data.actionButton);
      }
    };
    module2.exports = LiveChatViewerEngagementMessage;
  }
});

// lib/parser/contents/classes/livechat/items/Poll.js
var require_Poll = __commonJS({
  "lib/parser/contents/classes/livechat/items/Poll.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Poll = class {
      type = "Poll";
      constructor(data) {
        this.header = Parser.parse(data.header, "livechat/items");
        this.choices = data.choices.map((choice) => ({
          text: new Text(choice.text).toString(),
          selected: choice.selected,
          vote_ratio: choice.voteRatio,
          vote_percentage: new Text(choice.votePercentage).toString(),
          select_endpoint: new NavigationEndpoint(choice.selectServiceEndpoint)
        }));
        this.live_chat_poll_id = data.liveChatPollId;
      }
    };
    module2.exports = Poll;
  }
});

// lib/parser/contents/classes/livechat/items/PollHeader.js
var require_PollHeader = __commonJS({
  "lib/parser/contents/classes/livechat/items/PollHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var Parser = require_contents();
    var PollHeader = class {
      type = "PollHeader";
      constructor(data) {
        this.poll_question = new Text(data.pollQuestion);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.metadata = new Text(data.metadataText);
        this.live_chat_poll_type = data.liveChatPollType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
      }
    };
    module2.exports = PollHeader;
  }
});

// lib/parser/contents/classes/livechat/LiveChatActionPanel.js
var require_LiveChatActionPanel = __commonJS({
  "lib/parser/contents/classes/livechat/LiveChatActionPanel.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var LiveChatActionPanel = class {
      type = "LiveChatActionPanel";
      constructor(data) {
        this.id = data.id;
        this.contents = Parser.parse(data.contents, "livechat/items");
        this.target_id = data.targetId;
      }
    };
    module2.exports = LiveChatActionPanel;
  }
});

// lib/parser/contents/classes/livechat/MarkChatItemAsDeletedAction.js
var require_MarkChatItemAsDeletedAction = __commonJS({
  "lib/parser/contents/classes/livechat/MarkChatItemAsDeletedAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MarkChatItemAsDeletedAction = class {
      type = "MarkChatItemAsDeletedAction";
      constructor(data) {
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.target_item_id = data.targetItemId;
      }
    };
    module2.exports = MarkChatItemAsDeletedAction;
  }
});

// lib/parser/contents/classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js
var require_MarkChatItemsByAuthorAsDeletedAction = __commonJS({
  "lib/parser/contents/classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MarkChatItemsByAuthorAsDeletedAction = class {
      type = "MarkChatItemsByAuthorAsDeletedAction";
      constructor(data) {
        this.deleted_state_message = new Text(data.deletedStateMessage);
        this.channel_id = data.externalChannelId;
      }
    };
    module2.exports = MarkChatItemsByAuthorAsDeletedAction;
  }
});

// lib/parser/contents/classes/livechat/RemoveBannerForLiveChatCommand.js
var require_RemoveBannerForLiveChatCommand = __commonJS({
  "lib/parser/contents/classes/livechat/RemoveBannerForLiveChatCommand.js"(exports2, module2) {
    "use strict";
    var RemoveBannerForLiveChatCommand = class {
      type = "RemoveBannerForLiveChatCommand";
      constructor(data) {
        this.target_action_id = data.targetActionId;
      }
    };
    module2.exports = RemoveBannerForLiveChatCommand;
  }
});

// lib/parser/contents/classes/livechat/ReplaceChatItemAction.js
var require_ReplaceChatItemAction = __commonJS({
  "lib/parser/contents/classes/livechat/ReplaceChatItemAction.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ReplaceChatItemAction = class {
      constructor(data) {
        this.target_item_id = data.targetItemId;
        this.replacement_item = Parser.parse(data.replacementItem, "livechat/items");
      }
    };
    module2.exports = ReplaceChatItemAction;
  }
});

// lib/parser/contents/classes/livechat/ReplayChatItemAction.js
var require_ReplayChatItemAction = __commonJS({
  "lib/parser/contents/classes/livechat/ReplayChatItemAction.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ReplayChatItemAction = class {
      type = "ReplayChatItemAction";
      constructor(data) {
        var _a;
        this.actions = Parser.parse((_a = data.actions) == null ? void 0 : _a.map((action) => {
          delete action.clickTrackingParams;
          return action;
        }), "livechat") || [];
        this.video_offset_time_msec = data.videoOffsetTimeMsec;
      }
    };
    module2.exports = ReplayChatItemAction;
  }
});

// lib/parser/contents/classes/livechat/ShowLiveChatActionPanelAction.js
var require_ShowLiveChatActionPanelAction = __commonJS({
  "lib/parser/contents/classes/livechat/ShowLiveChatActionPanelAction.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ShowLiveChatActionPanelAction = class {
      type = "ShowLiveChatActionPanelAction";
      constructor(data) {
        this.panel_to_show = Parser.parse(data.panelToShow, "livechat");
      }
    };
    module2.exports = ShowLiveChatActionPanelAction;
  }
});

// lib/parser/contents/classes/livechat/ShowLiveChatTooltipCommand.js
var require_ShowLiveChatTooltipCommand = __commonJS({
  "lib/parser/contents/classes/livechat/ShowLiveChatTooltipCommand.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ShowLiveChatTooltipCommand = class {
      type = "ShowLiveChatTooltipCommand";
      constructor(data) {
        this.tooltip = Parser.parse(data.tooltip);
      }
    };
    module2.exports = ShowLiveChatTooltipCommand;
  }
});

// lib/parser/contents/classes/livechat/UpdateDateTextAction.js
var require_UpdateDateTextAction = __commonJS({
  "lib/parser/contents/classes/livechat/UpdateDateTextAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var UpdateDateTextAction = class {
      type = "UpdateDateTextAction";
      constructor(data) {
        this.date_text = new Text(data.dateText).toString();
      }
    };
    module2.exports = UpdateDateTextAction;
  }
});

// lib/parser/contents/classes/livechat/UpdateDescriptionAction.js
var require_UpdateDescriptionAction = __commonJS({
  "lib/parser/contents/classes/livechat/UpdateDescriptionAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var UpdateDescriptionAction = class {
      type = "UpdateDescriptionAction";
      constructor(data) {
        this.description = new Text(data.description);
      }
    };
    module2.exports = UpdateDescriptionAction;
  }
});

// lib/parser/contents/classes/livechat/UpdateLiveChatPollAction.js
var require_UpdateLiveChatPollAction = __commonJS({
  "lib/parser/contents/classes/livechat/UpdateLiveChatPollAction.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var UpdateLiveChatPollAction = class {
      type = "UpdateLiveChatPollAction";
      constructor(data) {
        this.poll_to_update = Parser.parse(data.pollToUpdate, "livechat/items");
      }
    };
    module2.exports = UpdateLiveChatPollAction;
  }
});

// lib/parser/contents/classes/livechat/UpdateTitleAction.js
var require_UpdateTitleAction = __commonJS({
  "lib/parser/contents/classes/livechat/UpdateTitleAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var UpdateTitleAction = class {
      type = "UpdateTitleAction";
      constructor(data) {
        this.title = new Text(data.title);
      }
    };
    module2.exports = UpdateTitleAction;
  }
});

// lib/parser/contents/classes/livechat/UpdateToggleButtonTextAction.js
var require_UpdateToggleButtonTextAction = __commonJS({
  "lib/parser/contents/classes/livechat/UpdateToggleButtonTextAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var UpdateToggleButtonTextAction = class {
      type = "UpdateToggleButtonTextAction";
      constructor(data) {
        this.default_text = new Text(data.defaultText).toString();
        this.toggled_text = new Text(data.toggledText).toString();
        this.button_id = data.buttonId;
      }
    };
    module2.exports = UpdateToggleButtonTextAction;
  }
});

// lib/parser/contents/classes/livechat/UpdateViewershipAction.js
var require_UpdateViewershipAction = __commonJS({
  "lib/parser/contents/classes/livechat/UpdateViewershipAction.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var UpdateViewershipAction = class {
      type = "UpdateViewershipAction";
      constructor(data) {
        const view_count_renderer = data.viewCount.videoViewCountRenderer;
        this.view_count = new Text(view_count_renderer.viewCount);
        this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
        this.is_live = view_count_renderer.isLive;
      }
    };
    module2.exports = UpdateViewershipAction;
  }
});

// lib/parser/contents/classes/MetadataBadge.js
var require_MetadataBadge = __commonJS({
  "lib/parser/contents/classes/MetadataBadge.js"(exports2, module2) {
    "use strict";
    var MetadataBadge = class {
      constructor(data) {
        data.icon && (this.icon_type = data.icon.iconType);
        data.style && (this.style = data.style);
        this.tooltip = data.tooltip || data.iconTooltip || null;
      }
    };
    module2.exports = MetadataBadge;
  }
});

// lib/parser/contents/classes/LiveChatAuthorBadge.js
var require_LiveChatAuthorBadge = __commonJS({
  "lib/parser/contents/classes/LiveChatAuthorBadge.js"(exports2, module2) {
    "use strict";
    var MetadataBadge = require_MetadataBadge();
    var Thumbnail = require_Thumbnail();
    var LiveChatAuthorBadge = class extends MetadataBadge {
      constructor(data) {
        super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
      }
    };
    module2.exports = LiveChatAuthorBadge;
  }
});

// lib/parser/contents/classes/LiveChatHeader.js
var require_LiveChatHeader = __commonJS({
  "lib/parser/contents/classes/LiveChatHeader.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var LiveChatHeader = class {
      type = "LiveChatHeader";
      constructor(data) {
        this.overflow_menu = Parser.parse(data.overflowMenu);
        this.collapse_button = Parser.parse(data.collapseButton);
        this.view_selector = Parser.parse(data.viewSelector);
      }
    };
    module2.exports = LiveChatHeader;
  }
});

// lib/parser/contents/classes/LiveChatItemList.js
var require_LiveChatItemList = __commonJS({
  "lib/parser/contents/classes/LiveChatItemList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var LiveChatItemList = class {
      type = "LiveChatItemList";
      constructor(data) {
        this.max_items_to_display = data.maxItemsToDisplay;
        this.more_comments_below_button = Parser.parse(data.moreCommentsBelowButton);
      }
    };
    module2.exports = LiveChatItemList;
  }
});

// lib/parser/contents/classes/LiveChatMessageInput.js
var require_LiveChatMessageInput = __commonJS({
  "lib/parser/contents/classes/LiveChatMessageInput.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var LiveChatMessageInput = class {
      constructor(data) {
        this.author_name = new Text(data.authorName);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.send_button = Parser.parse(data.sendButton);
        this.target_id = data.targetId;
      }
    };
    module2.exports = LiveChatMessageInput;
  }
});

// lib/parser/contents/classes/LiveChatParticipant.js
var require_LiveChatParticipant = __commonJS({
  "lib/parser/contents/classes/LiveChatParticipant.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var LiveChatParticipant = class {
      type = "LiveChatParticipant";
      constructor(data) {
        this.name = new Text(data.authorName);
        this.photo = Thumbnail.fromResponse(data.authorPhoto);
        this.badges = Parser.parse(data.authorBadges);
      }
    };
    module2.exports = LiveChatParticipant;
  }
});

// lib/parser/contents/classes/LiveChatParticipantsList.js
var require_LiveChatParticipantsList = __commonJS({
  "lib/parser/contents/classes/LiveChatParticipantsList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var LiveChatParticipantsList = class {
      type = "LiveChatParticipantsList";
      constructor(data) {
        this.title = new Text(data.title);
        this.participants = Parser.parse(data.participants);
      }
    };
    module2.exports = LiveChatParticipantsList;
  }
});

// lib/parser/contents/classes/Menu.js
var require_Menu = __commonJS({
  "lib/parser/contents/classes/Menu.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Menu = class {
      type = "Menu";
      constructor(data) {
        var _a, _b;
        this.items = Parser.parse(data.items) || [];
        this.top_level_buttons = Parser.parse(data.topLevelButtons) || [];
        this.label = ((_b = (_a = data.accessibility) == null ? void 0 : _a.accessibilityData) == null ? void 0 : _b.label) || null;
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = Menu;
  }
});

// lib/parser/contents/classes/MenuNavigationItem.js
var require_MenuNavigationItem = __commonJS({
  "lib/parser/contents/classes/MenuNavigationItem.js"(exports2, module2) {
    "use strict";
    var Button = require_Button();
    var MenuNavigationItem = class extends Button {
      type = "MenuNavigationItem";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = MenuNavigationItem;
  }
});

// lib/parser/contents/classes/MenuServiceItem.js
var require_MenuServiceItem = __commonJS({
  "lib/parser/contents/classes/MenuServiceItem.js"(exports2, module2) {
    "use strict";
    var Button = require_Button();
    var MenuServiceItem = class extends Button {
      type = "MenuServiceItem";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = MenuServiceItem;
  }
});

// lib/parser/contents/classes/MenuServiceItemDownload.js
var require_MenuServiceItemDownload = __commonJS({
  "lib/parser/contents/classes/MenuServiceItemDownload.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var MenuServiceItemDownload = class {
      type = "MenuServiceItemDownload";
      constructor(data) {
        this.has_separator = data.hasSeparator;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
      }
    };
    module2.exports = MenuServiceItemDownload;
  }
});

// lib/parser/contents/classes/MerchandiseItem.js
var require_MerchandiseItem = __commonJS({
  "lib/parser/contents/classes/MerchandiseItem.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var MerchandiseItem = class {
      type = "MerchandiseItem";
      constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.price = data.price;
        this.vendor_name = data.vendorName;
        this.button_text = data.buttonText;
        this.button_accessibility_text = data.buttonAccessibilityText;
        this.from_vendor_text = data.fromVendorText;
        this.additional_fees_text = data.additionalFeesText;
        this.region_format = data.regionFormat;
        this.endpoint = new NavigationEndpoint(data.buttonCommand);
      }
    };
    module2.exports = MerchandiseItem;
  }
});

// lib/parser/contents/classes/MerchandiseShelf.js
var require_MerchandiseShelf = __commonJS({
  "lib/parser/contents/classes/MerchandiseShelf.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var MerchandiseShelf = class {
      type = "MerchandiseShelf";
      constructor(data) {
        this.title = data.title;
        this.menu = Parser.parse(data.actionButton);
        this.items = Parser.parse(data.items);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = MerchandiseShelf;
  }
});

// lib/parser/contents/classes/Message.js
var require_Message = __commonJS({
  "lib/parser/contents/classes/Message.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Message = class {
      type = "Message";
      constructor(data) {
        this.text = new Text(data.text).toString();
      }
    };
    module2.exports = Message;
  }
});

// lib/parser/contents/classes/MetadataRow.js
var require_MetadataRow = __commonJS({
  "lib/parser/contents/classes/MetadataRow.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MetadataRow = class {
      type = "MetadataRow";
      constructor(data) {
        this.title = new Text(data.title);
        this.contents = data.contents.map((content) => new Text(content));
      }
    };
    module2.exports = MetadataRow;
  }
});

// lib/parser/contents/classes/MetadataRowContainer.js
var require_MetadataRowContainer = __commonJS({
  "lib/parser/contents/classes/MetadataRowContainer.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var MetadataRowContainer = class {
      type = "MetadataRowContainer";
      constructor(data) {
        this.rows = Parser.parse(data.rows);
        this.collapsed_item_count = data.collapsedItemCount;
      }
    };
    module2.exports = MetadataRowContainer;
  }
});

// lib/parser/contents/classes/MetadataRowHeader.js
var require_MetadataRowHeader = __commonJS({
  "lib/parser/contents/classes/MetadataRowHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MetadataRowHeader = class {
      type = "MetadataRowHeader";
      constructor(data) {
        this.content = new Text(data.content);
        this.has_divider_line = data.hasDividerLine;
      }
    };
    module2.exports = MetadataRowHeader;
  }
});

// lib/parser/contents/classes/MicroformatData.js
var require_MicroformatData = __commonJS({
  "lib/parser/contents/classes/MicroformatData.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var MicroformatData = class {
      type = "MicroformatData";
      constructor(data) {
        this.url_canonical = data.urlCanonical;
        this.title = data.title;
        this.description = data.description;
        this.thumbnail = data.thumbnail && Thumbnail.fromResponse(data.thumbnail);
        this.site_name = data.siteName;
        this.app_name = data.appName;
        this.android_package = data.androidPackage;
        this.ios_app_store_id = data.iosAppStoreId;
        this.ios_app_arguments = data.iosAppArguments;
        this.og_type = data.ogType;
        this.url_applinks_web = data.urlApplinksWeb;
        this.url_applinks_ios = data.urlApplinksIos;
        this.url_applinks_android = data.urlApplinksAndroid;
        this.url_twitter_ios = data.urlTwitterIos;
        this.url_twitter_android = data.urlTwitterAndroid;
        this.twitter_card_type = data.twitterCardType;
        this.twitter_site_handle = data.twitterSiteHandle;
        this.schema_dot_org_type = data.schemaDotOrgType;
        this.noindex = data.noindex;
        this.is_unlisted = data.unlisted;
        this.is_family_safe = data.familySafe;
        this.tags = data.tags;
        this.available_countries = data.availableCountries;
      }
    };
    module2.exports = MicroformatData;
  }
});

// lib/parser/contents/classes/Mix.js
var require_Mix = __commonJS({
  "lib/parser/contents/classes/Mix.js"(exports2, module2) {
    "use strict";
    var Playlist2 = require_Playlist();
    var Mix = class extends Playlist2 {
      type = "Mix";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = Mix;
  }
});

// lib/parser/contents/classes/Movie.js
var require_Movie = __commonJS({
  "lib/parser/contents/classes/Movie.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Author = require_Author();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Utils = require_Utils();
    var Text = require_Text();
    var Movie = class {
      type = "Movie";
      constructor(data) {
        var _a, _b, _c;
        const overlay_time_status = ((_a = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) == null ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet, "") : null;
        this.top_metadata_items = new Text(data.topMetadataItems);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.author = new Author(data.longBylineText, data.ownerBadges, (_c = (_b = data.channelThumbnailSupportedRenderers) == null ? void 0 : _b.channelThumbnailWithLinkRenderer) == null ? void 0 : _c.thumbnail);
        this.duration = {
          text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
          seconds: Utils.timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.badges = Parser.parse(data.badges);
        this.use_vertical_poster = data.useVerticalPoster;
        this.show_action_menu = data.showActionMenu;
        this.menu = Parser.parse(data.menu);
      }
    };
    module2.exports = Movie;
  }
});

// lib/parser/contents/classes/MovingThumbnail.js
var require_MovingThumbnail = __commonJS({
  "lib/parser/contents/classes/MovingThumbnail.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var MovingThumbnail = class {
      type = "MovingThumbnail";
      constructor(data) {
        var _a;
        return (_a = data.movingThumbnailDetails) == null ? void 0 : _a.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
      }
    };
    module2.exports = MovingThumbnail;
  }
});

// lib/parser/contents/classes/MusicCarouselShelf.js
var require_MusicCarouselShelf = __commonJS({
  "lib/parser/contents/classes/MusicCarouselShelf.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var MusicCarouselShelf = class {
      type = "MusicCarouselShelf";
      constructor(data) {
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
        if (data.numItemsPerColumn) {
          this.num_items_per_column = data.numItemsPerColumn;
        }
      }
    };
    module2.exports = MusicCarouselShelf;
  }
});

// lib/parser/contents/classes/MusicCarouselShelfBasicHeader.js
var require_MusicCarouselShelfBasicHeader = __commonJS({
  "lib/parser/contents/classes/MusicCarouselShelfBasicHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var MusicCarouselShelfBasicHeader = class {
      type = "MusicCarouselShelfBasicHeader";
      constructor(data) {
        if (data.strapline) {
          this.strapline = new Text(data.strapline).toString();
        }
        this.title = new Text(data.title).toString();
        if (data.thumbnail) {
          this.thumbnail = Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer.thumbnail);
        }
      }
    };
    module2.exports = MusicCarouselShelfBasicHeader;
  }
});

// lib/parser/contents/classes/MusicDescriptionShelf.js
var require_MusicDescriptionShelf = __commonJS({
  "lib/parser/contents/classes/MusicDescriptionShelf.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MusicDescriptionShelf = class {
      type = "MusicDescriptionShelf";
      constructor(data) {
        this.description = new Text(data.description);
        if (this.max_collapsed_lines) {
          this.max_collapsed_lines = data.maxCollapsedLines;
        }
        if (this.max_expanded_lines) {
          this.max_expanded_lines = data.maxExpandedLines;
        }
        this.footer = new Text(data.footer);
      }
    };
    module2.exports = MusicDescriptionShelf;
  }
});

// lib/parser/contents/classes/MusicDetailHeader.js
var require_MusicDetailHeader = __commonJS({
  "lib/parser/contents/classes/MusicDetailHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var Parser = require_contents();
    var MusicDetailHeader = class {
      type = "MusicDetailHeader";
      constructor(data) {
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.subtitle = new Text(data.subtitle);
        this.second_subtitle = new Text(data.secondSubtitle);
        this.year = this.subtitle.runs.find((run) => /^[12][0-9]{3}$/.test(run.text)).text;
        this.song_count = this.second_subtitle.runs[0].text;
        this.total_duration = this.second_subtitle.runs[2].text;
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
        this.badges = Parser.parse(data.subtitleBadges);
        const author = this.subtitle.runs.find((run) => {
          var _a;
          return (_a = run.endpoint.browse) == null ? void 0 : _a.id.startsWith("UC");
        });
        if (author) {
          this.author = {
            name: author.text,
            channel_id: author.endpoint.browse.id,
            endpoint: author.endpoint
          };
        }
        this.menu = Parser.parse(data.menu);
      }
    };
    module2.exports = MusicDetailHeader;
  }
});

// lib/parser/contents/classes/MusicHeader.js
var require_MusicHeader = __commonJS({
  "lib/parser/contents/classes/MusicHeader.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var MusicHeader = class {
      type = "MusicHeader";
      constructor(data) {
        this.header = Parser.parse(data.header);
      }
    };
    module2.exports = MusicHeader;
  }
});

// lib/parser/contents/classes/MusicImmersiveHeader.js
var require_MusicImmersiveHeader = __commonJS({
  "lib/parser/contents/classes/MusicImmersiveHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var MusicImmersiveHeader = class {
      type = "MusicImmersiveHeader";
      constructor(data) {
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.thumbnails = Parser.parse(data.thumbnail);
      }
    };
    module2.exports = MusicImmersiveHeader;
  }
});

// lib/parser/contents/classes/MusicInlineBadge.js
var require_MusicInlineBadge = __commonJS({
  "lib/parser/contents/classes/MusicInlineBadge.js"(exports2, module2) {
    "use strict";
    var MusicInlineBadge = class {
      type = "MusicInlineBadge";
      constructor(data) {
        this.icon_type = data.icon.iconType;
        this.label = data.accessibilityData.accessibilityData.label;
      }
    };
    module2.exports = MusicInlineBadge;
  }
});

// lib/parser/contents/classes/MusicItemThumbnailOverlay.js
var require_MusicItemThumbnailOverlay = __commonJS({
  "lib/parser/contents/classes/MusicItemThumbnailOverlay.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var MusicItemThumbnailOverlay = class {
      type = "MusicItemThumbnailOverlay";
      constructor(data) {
        this.content = Parser.parse(data.content);
        this.content_position = data.contentPosition;
        this.display_style = data.displayStyle;
      }
    };
    module2.exports = MusicItemThumbnailOverlay;
  }
});

// lib/parser/contents/classes/MusicNavigationButton.js
var require_MusicNavigationButton = __commonJS({
  "lib/parser/contents/classes/MusicNavigationButton.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var MusicNavigationButton = class {
      type = "MusicNavigationButton";
      constructor(data) {
        this.button_text = new Text(data.buttonText).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = MusicNavigationButton;
  }
});

// lib/parser/contents/classes/MusicPlayButton.js
var require_MusicPlayButton = __commonJS({
  "lib/parser/contents/classes/MusicPlayButton.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var MusicPlayButton = class {
      type = "MusicPlayButton";
      constructor(data) {
        var _a;
        this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
        this.play_icon_type = data.playIcon.iconType;
        this.pause_icon_type = data.pauseIcon.iconType;
        if (data.accessibilityPlayData) {
          this.play_label = data.accessibilityPlayData.accessibilityData.label;
        }
        if (data.accessibilityPlayData) {
          this.pause_label = (_a = data.accessibilityPauseData) == null ? void 0 : _a.accessibilityData.label;
        }
        this.icon_color = data.iconColor;
      }
    };
    module2.exports = MusicPlayButton;
  }
});

// lib/parser/contents/classes/MusicPlaylistShelf.js
var require_MusicPlaylistShelf = __commonJS({
  "lib/parser/contents/classes/MusicPlaylistShelf.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _continuations;
    var MusicPlaylistShelf = class {
      constructor(data) {
        __publicField(this, "type", "MusicPlaylistShelf");
        __privateAdd(this, _continuations, void 0);
        this.playlist_id = data.playlistId;
        this.contents = Parser.parse(data.contents);
        this.collapsed_item_count = data.collapsedItemCount;
        __privateSet(this, _continuations, data.continuations);
      }
      get continuation() {
        var _a, _b;
        return (_b = (_a = __privateGet(this, _continuations)) == null ? void 0 : _a[0]) == null ? void 0 : _b.nextContinuationData;
      }
    };
    _continuations = new WeakMap();
    module2.exports = MusicPlaylistShelf;
  }
});

// lib/parser/contents/classes/MusicQueue.js
var require_MusicQueue = __commonJS({
  "lib/parser/contents/classes/MusicQueue.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var MusicQueue = class {
      type = "MusicQueue";
      constructor(data) {
        this.content = Parser.parse(data.content);
      }
    };
    module2.exports = MusicQueue;
  }
});

// lib/parser/contents/classes/MusicResponsiveListItem.js
var require_MusicResponsiveListItem = __commonJS({
  "lib/parser/contents/classes/MusicResponsiveListItem.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Utils = require_Utils();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var _flex_columns, _fixed_columns, _playlist_item_data, _parseVideoOrSong, parseVideoOrSong_fn, _parseSong, parseSong_fn, _parseVideo, parseVideo_fn, _parseArtist, parseArtist_fn, _parseAlbum, parseAlbum_fn, _parsePlaylist, parsePlaylist_fn;
    var MusicResponsiveListItem = class {
      constructor(data) {
        __privateAdd(this, _parseVideoOrSong);
        __privateAdd(this, _parseSong);
        __privateAdd(this, _parseVideo);
        __privateAdd(this, _parseArtist);
        __privateAdd(this, _parseAlbum);
        __privateAdd(this, _parsePlaylist);
        __privateAdd(this, _flex_columns, void 0);
        __privateAdd(this, _fixed_columns, void 0);
        __privateAdd(this, _playlist_item_data, void 0);
        var _a, _b, _c, _d;
        this.type = null;
        __privateSet(this, _flex_columns, Parser.parse(data.flexColumns));
        __privateSet(this, _fixed_columns, Parser.parse(data.fixedColumns));
        __privateSet(this, _playlist_item_data, {
          video_id: ((_a = data == null ? void 0 : data.playlistItemData) == null ? void 0 : _a.videoId) || null,
          playlist_set_video_id: ((_b = data == null ? void 0 : data.playlistItemData) == null ? void 0 : _b.playlistSetVideoId) || null
        });
        this.endpoint = data.navigationEndpoint && new NavigationEndpoint(data.navigationEndpoint) || null;
        switch ((_d = (_c = this.endpoint) == null ? void 0 : _c.browse) == null ? void 0 : _d.page_type) {
          case "MUSIC_PAGE_TYPE_ALBUM":
            this.type = "album";
            __privateMethod(this, _parseAlbum, parseAlbum_fn).call(this);
            break;
          case "MUSIC_PAGE_TYPE_PLAYLIST":
            this.type = "playlist";
            __privateMethod(this, _parsePlaylist, parsePlaylist_fn).call(this);
            break;
          case "MUSIC_PAGE_TYPE_ARTIST":
          case "MUSIC_PAGE_TYPE_USER_CHANNEL":
            this.type = "artist";
            __privateMethod(this, _parseArtist, parseArtist_fn).call(this);
            break;
          default:
            __privateMethod(this, _parseVideoOrSong, parseVideoOrSong_fn).call(this);
            break;
        }
        if (data.index) {
          this.index = new Text(data.index);
        }
        this.thumbnails = data.thumbnail ? Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer.thumbnail) : [];
        this.badges = Parser.parse(data.badges) || [];
        this.menu = Parser.parse(data.menu);
        this.overlay = Parser.parse(data.overlay);
      }
    };
    _flex_columns = new WeakMap();
    _fixed_columns = new WeakMap();
    _playlist_item_data = new WeakMap();
    _parseVideoOrSong = new WeakSet();
    parseVideoOrSong_fn = function() {
      var _a;
      const is_video = (_a = __privateGet(this, _flex_columns)[1].title.runs) == null ? void 0 : _a.some((run) => run.text.match(/(.*?) views/));
      if (is_video) {
        this.type = "video";
        __privateMethod(this, _parseVideo, parseVideo_fn).call(this);
      } else {
        this.type = "song";
        __privateMethod(this, _parseSong, parseSong_fn).call(this);
      }
    };
    _parseSong = new WeakSet();
    parseSong_fn = function() {
      var _a, _b, _c, _d, _e, _f, _g;
      this.id = __privateGet(this, _playlist_item_data).video_id || this.endpoint.watch.video_id;
      this.title = __privateGet(this, _flex_columns)[0].title.toString();
      const duration_text = ((_b = (_a = __privateGet(this, _flex_columns)[1].title.runs) == null ? void 0 : _a.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) == null ? void 0 : _b.text) || ((_e = (_d = (_c = __privateGet(this, _fixed_columns)) == null ? void 0 : _c[0]) == null ? void 0 : _d.title) == null ? void 0 : _e.text);
      duration_text && (this.duration = {
        text: duration_text,
        seconds: Utils.timeToSeconds(duration_text)
      });
      const album = (_f = __privateGet(this, _flex_columns)[1].title.runs) == null ? void 0 : _f.find((run) => {
        var _a2;
        return (_a2 = run.endpoint.browse) == null ? void 0 : _a2.id.startsWith("MPR");
      });
      if (album) {
        this.album = {
          id: album.endpoint.browse.id,
          name: album.text,
          endpoint: album.endpoint
        };
      }
      const artists = (_g = __privateGet(this, _flex_columns)[1].title.runs) == null ? void 0 : _g.filter((run) => {
        var _a2;
        return (_a2 = run.endpoint.browse) == null ? void 0 : _a2.id.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => ({
          name: artist.text,
          channel_id: artist.endpoint.browse.id,
          endpoint: artist.endpoint
        }));
      }
    };
    _parseVideo = new WeakSet();
    parseVideo_fn = function() {
      var _a, _b;
      this.id = __privateGet(this, _playlist_item_data).video_id;
      this.title = __privateGet(this, _flex_columns)[0].title.toString();
      this.views = __privateGet(this, _flex_columns)[1].title.runs.find((run) => run.text.match(/(.*?) views/)).text;
      const authors = (_a = __privateGet(this, _flex_columns)[1].title.runs) == null ? void 0 : _a.filter((run) => {
        var _a2;
        return (_a2 = run.endpoint.browse) == null ? void 0 : _a2.id.startsWith("UC");
      });
      if (authors) {
        this.authors = authors.map((author) => ({
          name: author.text,
          channel_id: author.endpoint.browse.id,
          endpoint: author.endpoint
        }));
      }
      const duration_text = (_b = __privateGet(this, _flex_columns)[1].title.runs.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) == null ? void 0 : _b.text;
      duration_text && (this.duration = {
        text: duration_text,
        seconds: Utils.timeToSeconds(duration_text)
      });
    };
    _parseArtist = new WeakSet();
    parseArtist_fn = function() {
      var _a;
      this.id = this.endpoint.browse.id;
      this.name = __privateGet(this, _flex_columns)[0].title.toString();
      this.subscribers = ((_a = __privateGet(this, _flex_columns)[1].title.runs[2]) == null ? void 0 : _a.text) || "";
    };
    _parseAlbum = new WeakSet();
    parseAlbum_fn = function() {
      this.id = this.endpoint.browse.id;
      this.title = __privateGet(this, _flex_columns)[0].title.toString();
      const author = __privateGet(this, _flex_columns)[1].title.runs.find((run) => {
        var _a;
        return (_a = run.endpoint.browse) == null ? void 0 : _a.id.startsWith("UC");
      });
      author && (this.author = {
        name: author.text,
        channel_id: author.endpoint.browse.id,
        endpoint: author.endpoint
      });
      this.year = __privateGet(this, _flex_columns)[1].title.runs.find((run) => /^[12][0-9]{3}$/.test(run.text)).text;
    };
    _parsePlaylist = new WeakSet();
    parsePlaylist_fn = function() {
      this.id = this.endpoint.browse.id;
      this.title = __privateGet(this, _flex_columns)[0].title.toString();
      this.item_count = parseInt(__privateGet(this, _flex_columns)[1].title.runs.find((run) => run.text.match(/\d+ (song|songs)/)).text.match(/\d+/g));
      const author = __privateGet(this, _flex_columns)[1].title.runs.find((run) => {
        var _a;
        return (_a = run.endpoint.browse) == null ? void 0 : _a.id.startsWith("UC");
      });
      author && (this.author = {
        name: author.text,
        channel_id: author.endpoint.browse.id,
        endpoint: author.endpoint
      });
    };
    module2.exports = MusicResponsiveListItem;
  }
});

// lib/parser/contents/classes/MusicResponsiveListItemFixedColumn.js
var require_MusicResponsiveListItemFixedColumn = __commonJS({
  "lib/parser/contents/classes/MusicResponsiveListItemFixedColumn.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MusicResponsiveListItemFixedColumn = class {
      type = "musicResponsiveListItemFlexColumnRenderer";
      constructor(data) {
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
      }
    };
    module2.exports = MusicResponsiveListItemFixedColumn;
  }
});

// lib/parser/contents/classes/MusicResponsiveListItemFlexColumn.js
var require_MusicResponsiveListItemFlexColumn = __commonJS({
  "lib/parser/contents/classes/MusicResponsiveListItemFlexColumn.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var MusicResponsiveListItemFlexColumn = class {
      type = "musicResponsiveListItemFlexColumnRenderer";
      constructor(data) {
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
      }
    };
    module2.exports = MusicResponsiveListItemFlexColumn;
  }
});

// lib/parser/contents/classes/MusicShelf.js
var require_MusicShelf = __commonJS({
  "lib/parser/contents/classes/MusicShelf.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var MusicShelf = class {
      type = "MusicShelf";
      constructor(data) {
        var _a;
        this.title = new Text(data.title).toString();
        this.contents = Parser.parse(data.contents);
        if (data.bottomEndpoint) {
          this.endpoint = new NavigationEndpoint(data.bottomEndpoint);
        }
        if (this.continuation) {
          this.continuation = (_a = data.continuations) == null ? void 0 : _a[0].nextContinuationData.continuation;
        }
        if (data.bottomText) {
          this.bottom_text = new Text(data.bottomText);
        }
      }
    };
    module2.exports = MusicShelf;
  }
});

// lib/parser/contents/classes/MusicThumbnail.js
var require_MusicThumbnail = __commonJS({
  "lib/parser/contents/classes/MusicThumbnail.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var MusicThumbnail = class {
      type = "MusicThumbnail";
      constructor(data) {
        return Thumbnail.fromResponse(data.thumbnail);
      }
    };
    module2.exports = MusicThumbnail;
  }
});

// lib/parser/contents/classes/MusicTwoRowItem.js
var require_MusicTwoRowItem = __commonJS({
  "lib/parser/contents/classes/MusicTwoRowItem.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var MusicTwoRowItem = class {
      type = "MusicTwoRowItem";
      constructor(data) {
        var _a, _b, _c;
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.id = ((_a = this.endpoint.browse) == null ? void 0 : _a.id) || this.endpoint.watch.video_id;
        this.subtitle = new Text(data.subtitle);
        this.badges = Parser.parse(data.subtitleBadges);
        switch ((_b = this.endpoint.browse) == null ? void 0 : _b.page_type) {
          case "MUSIC_PAGE_TYPE_ARTIST":
            this.type = "artist";
            this.subscribers = this.subtitle.toString();
            break;
          case "MUSIC_PAGE_TYPE_PLAYLIST":
            this.type = "playlist";
            this.item_count = parseInt((_c = this.subtitle.runs.find((run) => run.text.match(/\d+ (songs|song)/))) == null ? void 0 : _c.text.match(/\d+/g)) || null;
            break;
          case "MUSIC_PAGE_TYPE_ALBUM":
            this.type = "album";
            const artists = this.subtitle.runs.filter((run) => {
              var _a2;
              return (_a2 = run.endpoint.browse) == null ? void 0 : _a2.id.startsWith("UC");
            });
            if (artists) {
              this.artists = artists.map((artist) => ({
                name: artist.text,
                channel_id: artist.endpoint.browse.id,
                endpoint: artist.endpoint
              }));
            }
            this.year = this.subtitle.runs.slice(-1)[0].text;
            if (isNaN(this.year))
              delete this.year;
            break;
          default:
            if (this.subtitle.runs[0].text !== "Song") {
              this.type = "video";
            } else {
              this.type = "song";
            }
            if (this.type == "video") {
              this.views = this.subtitle.runs.find((run) => run.text.match(/(.*?) views/)).text;
              const author = this.subtitle.runs.find((run) => {
                var _a2;
                return (_a2 = run.endpoint.browse) == null ? void 0 : _a2.id.startsWith("UC");
              });
              if (author) {
                this.author = {
                  name: author.text,
                  channel_id: author.endpoint.browse.id,
                  endpoint: author.endpoint
                };
              }
            } else {
              const artists2 = this.subtitle.runs.filter((run) => {
                var _a2;
                return (_a2 = run.endpoint.browse) == null ? void 0 : _a2.id.startsWith("UC");
              });
              if (artists2) {
                this.artists = artists2.map((artist) => ({
                  name: artist.text,
                  channel_id: artist.endpoint.browse.id,
                  endpoint: artist.endpoint
                }));
              }
            }
            break;
        }
        this.thumbnail = Thumbnail.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
        this.thumbnail_overlay = Parser.parse(data.thumbnailOverlay);
        this.menu = Parser.parse(data.menu);
      }
    };
    module2.exports = MusicTwoRowItem;
  }
});

// lib/parser/contents/classes/PlayerAnnotationsExpanded.js
var require_PlayerAnnotationsExpanded = __commonJS({
  "lib/parser/contents/classes/PlayerAnnotationsExpanded.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var PlayerAnnotationsExpanded = class {
      type = "PlayerAnnotationsExpanded";
      constructor(data) {
        this.featured_channel = {
          start_time_ms: data.featuredChannel.startTimeMs,
          end_time_ms: data.featuredChannel.endTimeMs,
          watermark: Thumbnail.fromResponse(data.featuredChannel.watermark),
          channel_name: data.featuredChannel.channelName,
          endpoint: new NavigationEndpoint(data.featuredChannel.navigationEndpoint),
          subscribe_button: Parser.parse(data.featuredChannel.subscribeButton)
        };
        this.allow_swipe_dismiss = data.allowSwipeDismiss;
        this.annotation_id = data.annotationId;
      }
    };
    module2.exports = PlayerAnnotationsExpanded;
  }
});

// lib/parser/contents/classes/PlayerCaptionsTracklist.js
var require_PlayerCaptionsTracklist = __commonJS({
  "lib/parser/contents/classes/PlayerCaptionsTracklist.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var PlayerCaptionsTracklist = class {
      type = "PlayerCaptionsTracklist";
      constructor(data) {
        this.caption_tracks = data.captionTracks.map((ct) => ({
          base_url: ct.baseUrl,
          name: new Text(ct.name),
          vss_id: ct.vssId,
          language_code: ct.languageCode,
          kind: ct.kind,
          is_translatable: ct.isTranslatable
        }));
        this.audio_tracks = data.audioTracks.map((at) => ({
          caption_track_indices: at.captionTrackIndices
        }));
        this.translation_languages = data.translationLanguages.map((tl) => ({
          language_code: tl.languageCode,
          language_name: new Text(tl.languageName)
        }));
      }
    };
    module2.exports = PlayerCaptionsTracklist;
  }
});

// lib/parser/contents/classes/PlayerErrorMessage.js
var require_PlayerErrorMessage = __commonJS({
  "lib/parser/contents/classes/PlayerErrorMessage.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var PlayerErrorMessage = class {
      type = "PlayerErrorMessage";
      constructor(data) {
        this.subreason = new Text(data.subreason);
        this.reason = new Text(data.reason);
        this.proceed_button = Parser.parse(data.proceedButton);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.icon_type = data.icon.iconType;
      }
    };
    module2.exports = PlayerErrorMessage;
  }
});

// lib/parser/contents/classes/PlayerLiveStoryboardSpec.js
var require_PlayerLiveStoryboardSpec = __commonJS({
  "lib/parser/contents/classes/PlayerLiveStoryboardSpec.js"(exports2, module2) {
    "use strict";
    var PlayerLiveStoryboardSpec = class {
      type = "PlayerLiveStoryboardSpec";
      constructor() {
      }
    };
    module2.exports = PlayerLiveStoryboardSpec;
  }
});

// lib/parser/contents/classes/PlayerMicroformat.js
var require_PlayerMicroformat = __commonJS({
  "lib/parser/contents/classes/PlayerMicroformat.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var PlayerMicroformat = class {
      type = "PlayerMicroformat";
      constructor(data) {
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.embed = {
          iframe_url: data.embed.iframeUrl,
          flash_url: data.embed.flashUrl,
          flash_secure_url: data.embed.flashSecureUrl,
          width: data.embed.width,
          height: data.embed.height
        };
        this.length_seconds = parseInt(data.lengthSeconds);
        this.channel = {
          id: data.externalChannelId,
          name: data.ownerChannelName,
          url: data.ownerProfileUrl
        };
        this.is_family_safe = data.isFamilySafe;
        this.is_unlisted = data.isUnlisted;
        this.has_ypc_metadata = data.hasYpcMetadata;
        this.view_count = parseInt(data.viewCount);
        this.category = data.category;
        this.publish_date = data.publishDate;
        this.upload_date = data.uploadDate;
        this.available_countries = data.availableCountries;
      }
    };
    module2.exports = PlayerMicroformat;
  }
});

// lib/parser/contents/classes/PlayerOverlay.js
var require_PlayerOverlay = __commonJS({
  "lib/parser/contents/classes/PlayerOverlay.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var PlayerOverlay = class {
      type = "PlayerOverlay";
      constructor(data) {
        this.end_screen = Parser.parse(data.endScreen);
        this.autoplay = Parser.parse(data.autoplay);
        this.share_button = Parser.parse(data.shareButton);
        this.add_to_menu = Parser.parse(data.addToMenu);
        this.fullscreen_engagement = Parser.parse(data.fullscreenEngagement);
      }
    };
    module2.exports = PlayerOverlay;
  }
});

// lib/parser/contents/classes/PlayerOverlayAutoplay.js
var require_PlayerOverlayAutoplay = __commonJS({
  "lib/parser/contents/classes/PlayerOverlayAutoplay.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Author = require_Author();
    var Thumbnail = require_Thumbnail();
    var PlayerOverlayAutoplay = class {
      type = "PlayerOverlayAutoplay";
      constructor(data) {
        this.title = new Text(data.title);
        this.video_id = data.videoId;
        this.video_title = new Text(data.videoTitle);
        this.short_view_count = new Text(data.shortViewCountText);
        this.prefer_immediate_redirect = data.preferImmediateRedirect;
        this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
        this.published = new Text(data.publishedTimeText);
        this.background = Thumbnail.fromResponse(data.background);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.author = new Author(data.byline);
        this.cancel_button = Parser.parse(data.cancelButton);
        this.next_button = Parser.parse(data.nextButton);
        this.close_button = Parser.parse(data.closeButton);
      }
    };
    module2.exports = PlayerOverlayAutoplay;
  }
});

// lib/parser/contents/classes/PlayerStoryboardSpec.js
var require_PlayerStoryboardSpec = __commonJS({
  "lib/parser/contents/classes/PlayerStoryboardSpec.js"(exports2, module2) {
    "use strict";
    var PlayerStoryboardSpec = class {
      type = "PlayerStoryboardSpec";
      constructor(data) {
        const parts = data.spec.split("|");
        const url = new URL(parts.shift());
        this.boards = parts.map((part, i) => {
          let [
            thumbnail_width,
            thumbnail_height,
            thumbnail_count,
            columns,
            rows,
            interval,
            name,
            sigh
          ] = part.split("#");
          url.searchParams.set("sigh", sigh);
          thumbnail_count = parseInt(thumbnail_count, 10);
          columns = parseInt(columns, 10);
          rows = parseInt(rows, 10);
          const storyboard_count = Math.ceil(thumbnail_count / (columns * rows));
          return {
            template_url: url.toString().replace("$L", i).replace("$N", name),
            thumbnail_width: parseInt(thumbnail_width, 10),
            thumbnail_height: parseInt(thumbnail_height, 10),
            thumbnail_count,
            interval: parseInt(interval, 10),
            columns,
            rows,
            storyboard_count
          };
        });
      }
    };
    module2.exports = PlayerStoryboardSpec;
  }
});

// lib/parser/contents/classes/PlaylistHeader.js
var require_PlaylistHeader = __commonJS({
  "lib/parser/contents/classes/PlaylistHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var PlaylistAuthor = require_PlaylistAuthor();
    var Parser = require_contents();
    var PlaylistHeader = class {
      type = "PlaylistHeader";
      constructor(data) {
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.stats = data.stats.map((stat) => new Text(stat));
        this.brief_stats = data.briefStats.map((stat) => new Text(stat));
        this.author = new PlaylistAuthor({ ...data.ownerText, navigationEndpoint: data.ownerEndpoint }, data.ownerBadges, null);
        this.description = new Text(data.descriptionText);
        this.num_videos = new Text(data.numVideosText);
        this.view_count = new Text(data.viewCountText);
        this.can_share = data.shareData.canShare;
        this.can_delete = data.editableDetails.canDelete;
        this.is_editable = data.isEditable;
        this.privacy = data.privacy;
        this.save_button = Parser.parse(data.saveButton);
        this.shuffle_play_button = Parser.parse(data.shufflePlayButton);
        this.menu = Parser.parse(data.moreActionsMenu);
      }
    };
    module2.exports = PlaylistHeader;
  }
});

// lib/parser/contents/classes/PlaylistMetadata.js
var require_PlaylistMetadata = __commonJS({
  "lib/parser/contents/classes/PlaylistMetadata.js"(exports2, module2) {
    "use strict";
    var PlaylistMetadata = class {
      type = "PlaylistMetadata";
      constructor(data) {
        this.title = data.title;
        this.description = data.description || null;
      }
    };
    module2.exports = PlaylistMetadata;
  }
});

// lib/parser/contents/classes/PlaylistPanel.js
var require_PlaylistPanel = __commonJS({
  "lib/parser/contents/classes/PlaylistPanel.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var PlaylistPanel = class {
      type = "PlaylistPanel";
      constructor(data) {
        var _a, _b;
        this.title = data.title;
        this.title_text = new Text(data.titleText);
        this.contents = Parser.parse(data.contents);
        this.playlist_id = data.playlistId;
        this.is_infinite = data.isInfinite;
        this.continuation = (_b = (_a = data.continuations[0]) == null ? void 0 : _a.nextRadioContinuationData) == null ? void 0 : _b.continuation;
        this.is_editable = data.isEditable;
        this.preview_description = data.previewDescription;
        this.num_items_to_show = data.numItemsToShow;
      }
    };
    module2.exports = PlaylistPanel;
  }
});

// lib/parser/contents/classes/PlaylistPanelVideo.js
var require_PlaylistPanelVideo = __commonJS({
  "lib/parser/contents/classes/PlaylistPanelVideo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Utils = require_Utils();
    var PlaylistPanelVideo = class {
      type = "PlaylistPanelVideo";
      constructor(data) {
        this.title = new Text(data.title);
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.selected = data.selected;
        this.video_id = data.videoId;
        this.duration = {
          text: new Text(data.lengthText).toString(),
          seconds: Utils.timeToSeconds(new Text(data.lengthText).toString())
        };
        const album = new Text(data.longBylineText).runs.find((run) => {
          var _a;
          return (_a = run.endpoint.browse) == null ? void 0 : _a.id.startsWith("MPR");
        });
        const artists = new Text(data.longBylineText).runs.filter((run) => {
          var _a;
          return (_a = run.endpoint.browse) == null ? void 0 : _a.id.startsWith("UC");
        });
        this.author = new Text(data.shortBylineText).toString();
        album && (this.album = {
          id: album.endpoint.browse.id,
          name: album.text,
          year: new Text(data.longBylineText).runs.slice(-1)[0].text,
          endpoint: album.endpoint
        });
        this.artists = artists.map((artist) => ({
          name: artist.text,
          channel_id: artist.endpoint.browse.id,
          endpoint: artist.endpoint
        }));
        this.badges = Parser.parse(data.badges);
        this.menu = Parser.parse(data.menu);
        this.set_video_id = data.playlistSetVideoId;
      }
    };
    module2.exports = PlaylistPanelVideo;
  }
});

// lib/parser/contents/classes/PlaylistSidebar.js
var require_PlaylistSidebar = __commonJS({
  "lib/parser/contents/classes/PlaylistSidebar.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var PlaylistSidebar = class {
      type = "PlaylistSidebar";
      constructor(data) {
        this.items = Parser.parse(data.items);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = PlaylistSidebar;
  }
});

// lib/parser/contents/classes/PlaylistSidebarPrimaryInfo.js
var require_PlaylistSidebarPrimaryInfo = __commonJS({
  "lib/parser/contents/classes/PlaylistSidebarPrimaryInfo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var PlaylistSidebarPrimaryInfo = class {
      type = "PlaylistSidebarPrimaryInfo";
      constructor(data) {
        this.stats = data.stats.map((stat) => new Text(stat));
        this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
        this.title = new Text(data.title);
        this.menu = data.menu && Parser.parse(data.menu);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.description = new Text(data.description);
      }
    };
    module2.exports = PlaylistSidebarPrimaryInfo;
  }
});

// lib/parser/contents/classes/PlaylistSidebarSecondaryInfo.js
var require_PlaylistSidebarSecondaryInfo = __commonJS({
  "lib/parser/contents/classes/PlaylistSidebarSecondaryInfo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var PlaylistSidebarSecondaryInfo = class {
      type = "PlaylistSidebarSecondaryInfo";
      constructor(data) {
        this.owner = Parser.parse(data.videoOwner) || null;
        this.button = Parser.parse(data.button) || null;
      }
    };
    module2.exports = PlaylistSidebarSecondaryInfo;
  }
});

// lib/parser/contents/classes/PlaylistVideo.js
var require_PlaylistVideo = __commonJS({
  "lib/parser/contents/classes/PlaylistVideo.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var Thumbnail = require_Thumbnail();
    var PlaylistAuthor = require_PlaylistAuthor();
    var NavigationEndpoint = require_NavigationEndpoint();
    var PlaylistVideo = class {
      type = "PlaylistVideo";
      constructor(data) {
        this.id = data.videoId;
        this.index = new Text(data.index);
        this.title = new Text(data.title);
        this.author = new PlaylistAuthor(data.shortBylineText);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.set_video_id = data == null ? void 0 : data.setVideoId;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.is_playable = data.isPlayable;
        this.menu = Parser.parse(data.menu);
        this.duration = {
          text: new Text(data.lengthText).text,
          seconds: parseInt(data.lengthSeconds)
        };
      }
    };
    module2.exports = PlaylistVideo;
  }
});

// lib/parser/contents/classes/PlaylistVideoList.js
var require_PlaylistVideoList = __commonJS({
  "lib/parser/contents/classes/PlaylistVideoList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var PlaylistVideoList = class {
      type = "PlaylistVideoList";
      constructor(data) {
        this.id = data.playlistId;
        this.is_editable = data.isEditable;
        this.can_reorder = data.canReorder;
        this.videos = Parser.parse(data.contents);
      }
    };
    module2.exports = PlaylistVideoList;
  }
});

// lib/parser/contents/classes/PlaylistVideoThumbnail.js
var require_PlaylistVideoThumbnail = __commonJS({
  "lib/parser/contents/classes/PlaylistVideoThumbnail.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var PlaylistVideoThumbnail = class {
      type = "PlaylistVideoThumbnail";
      constructor(data) {
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
      }
    };
    module2.exports = PlaylistVideoThumbnail;
  }
});

// lib/parser/contents/classes/Poll.js
var require_Poll2 = __commonJS({
  "lib/parser/contents/classes/Poll.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Poll = class {
      type = "Poll";
      constructor(data) {
        this.choices = data.choices.map((choice) => ({
          text: new Text(choice.text).toString(),
          select_endpoint: new NavigationEndpoint(choice.selectServiceEndpoint),
          deselect_endpoint: new NavigationEndpoint(choice.deselectServiceEndpoint),
          vote_ratio_if_selected: choice.voteRatioIfSelected,
          vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
          vote_ratio_if_not_selected: choice.voteRatioIfSelected,
          vote_percentage_if_not_selected: new Text(choice.votePercentageIfSelected),
          image: Thumbnail.fromResponse(choice.image)
        }));
        this.total_votes = new Text(data.totalVotes);
        this.poll_type = data.type;
      }
    };
    module2.exports = Poll;
  }
});

// lib/parser/contents/classes/Post.js
var require_Post = __commonJS({
  "lib/parser/contents/classes/Post.js"(exports2, module2) {
    "use strict";
    var BackstagePost = require_BackstagePost();
    var Post = class extends BackstagePost {
      type = "Post";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = Post;
  }
});

// lib/parser/contents/classes/ProfileColumn.js
var require_ProfileColumn = __commonJS({
  "lib/parser/contents/classes/ProfileColumn.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ProfileColumn = class {
      type = "ProfileColumn";
      constructor(data) {
        this.items = Parser.parse(data.items);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = ProfileColumn;
  }
});

// lib/parser/contents/classes/ProfileColumnStats.js
var require_ProfileColumnStats = __commonJS({
  "lib/parser/contents/classes/ProfileColumnStats.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var ProfileColumnStats = class {
      type = "ProfileColumnStats";
      constructor(data) {
        this.items = Parser.parse(data.items);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = ProfileColumnStats;
  }
});

// lib/parser/contents/classes/ProfileColumnStatsEntry.js
var require_ProfileColumnStatsEntry = __commonJS({
  "lib/parser/contents/classes/ProfileColumnStatsEntry.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ProfileColumnStatsEntry = class {
      type = "ProfileColumnStatsEntry";
      constructor(data) {
        this.label = new Text(data.label);
        this.value = new Text(data.value);
      }
    };
    module2.exports = ProfileColumnStatsEntry;
  }
});

// lib/parser/contents/classes/ProfileColumnUserInfo.js
var require_ProfileColumnUserInfo = __commonJS({
  "lib/parser/contents/classes/ProfileColumnUserInfo.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var ProfileColumnUserInfo = class {
      type = "ProfileColumnUserInfo";
      constructor(data) {
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
      }
    };
    module2.exports = ProfileColumnUserInfo;
  }
});

// lib/parser/contents/classes/ReelItem.js
var require_ReelItem = __commonJS({
  "lib/parser/contents/classes/ReelItem.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var ReelItem = class {
      type = "ReelItem";
      constructor(data) {
        this.id = data.videoId;
        this.title = new Text(data.headline, "");
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.views = new Text(data.viewCountText, "");
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = ReelItem;
  }
});

// lib/parser/contents/classes/ReelShelf.js
var require_ReelShelf = __commonJS({
  "lib/parser/contents/classes/ReelShelf.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var ReelShelf = class {
      type = "ReelShelf";
      constructor(data) {
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
        this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = ReelShelf;
  }
});

// lib/parser/contents/classes/RelatedChipCloud.js
var require_RelatedChipCloud = __commonJS({
  "lib/parser/contents/classes/RelatedChipCloud.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var RelatedChipCloud = class {
      type = "RelatedChipCloud";
      constructor(data) {
        this.content = Parser.parse(data.content);
      }
    };
    module2.exports = RelatedChipCloud;
  }
});

// lib/parser/contents/classes/RichGrid.js
var require_RichGrid = __commonJS({
  "lib/parser/contents/classes/RichGrid.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var RichGrid = class {
      type = "RichGrid";
      constructor(data) {
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
      }
    };
    module2.exports = RichGrid;
  }
});

// lib/parser/contents/classes/RichItem.js
var require_RichItem = __commonJS({
  "lib/parser/contents/classes/RichItem.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var RichItem = class {
      type = "RichItem";
      constructor(data) {
        return Parser.parse(data.content);
      }
    };
    module2.exports = RichItem;
  }
});

// lib/parser/contents/classes/RichListHeader.js
var require_RichListHeader = __commonJS({
  "lib/parser/contents/classes/RichListHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var RichListHeader = class {
      constructor(data) {
        this.title = new Text(data.title);
        this.icon_type = data.icon.iconType;
      }
    };
    module2.exports = RichListHeader;
  }
});

// lib/parser/contents/classes/RichSection.js
var require_RichSection = __commonJS({
  "lib/parser/contents/classes/RichSection.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var RichSection = class {
      type = "RichSection";
      constructor(data) {
        this.contents = Parser.parse(data.content);
      }
    };
    module2.exports = RichSection;
  }
});

// lib/parser/contents/classes/RichShelf.js
var require_RichShelf = __commonJS({
  "lib/parser/contents/classes/RichShelf.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var RichShelf = class {
      type = "RichShelf";
      constructor(data) {
        this.title = new Text(data.title);
        this.contents = Parser.parse(data.contents);
        this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
      }
    };
    module2.exports = RichShelf;
  }
});

// lib/parser/contents/classes/SearchBox.js
var require_SearchBox = __commonJS({
  "lib/parser/contents/classes/SearchBox.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var SearchBox = class {
      type = "SearchBox";
      constructor(data) {
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.search_button = Parser.parse(data.searchButton);
        this.clear_button = Parser.parse(data.clearButton);
        this.placeholder_text = new Text(data.placeholderText);
      }
    };
    module2.exports = SearchBox;
  }
});

// lib/parser/contents/classes/SearchRefinementCard.js
var require_SearchRefinementCard = __commonJS({
  "lib/parser/contents/classes/SearchRefinementCard.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var Thumbnail = require_Thumbnail();
    var Text = require_Text();
    var SearchRefinementCard = class {
      type = "SearchRefinementCard";
      constructor(data) {
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.searchEndpoint);
        this.query = new Text(data.query).toString();
      }
    };
    module2.exports = SearchRefinementCard;
  }
});

// lib/parser/contents/classes/SecondarySearchContainer.js
var require_SecondarySearchContainer = __commonJS({
  "lib/parser/contents/classes/SecondarySearchContainer.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var SecondarySearchContainer = class {
      type = "SecondarySearchContainer";
      constructor(data) {
        this.contents = Parser.parse(data.contents);
      }
    };
    module2.exports = SecondarySearchContainer;
  }
});

// lib/parser/contents/classes/SectionList.js
var require_SectionList = __commonJS({
  "lib/parser/contents/classes/SectionList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var SectionList = class {
      type = "SectionList";
      constructor(data) {
        if (data.targetId) {
          this.target_id = data.targetId;
        }
        this.contents = Parser.parse(data.contents);
        if (data.continuations) {
          if (data.continuations[0].nextContinuationData) {
            this.continuation = data.continuations[0].nextContinuationData.continuation;
          } else if (data.continuations[0].reloadContinuationData) {
            this.continuation = data.continuations[0].reloadContinuationData.continuation;
          }
        }
        if (data.header) {
          this.header = Parser.parse(data.header);
        }
      }
    };
    module2.exports = SectionList;
  }
});

// lib/parser/contents/classes/Shelf.js
var require_Shelf = __commonJS({
  "lib/parser/contents/classes/Shelf.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Shelf = class {
      type = "Shelf";
      constructor(data) {
        var _a, _b;
        this.title = new Text(data.title);
        if (data.endpoint) {
          this.endpoint = new NavigationEndpoint(data.endpoint);
        }
        this.content = Parser.parse(data.content) || [];
        if ((_a = data.icon) == null ? void 0 : _a.iconType) {
          this.icon_type = (_b = data.icon) == null ? void 0 : _b.iconType;
        }
        if (data.menu) {
          this.menu = Parser.parse(data.menu);
        }
      }
    };
    module2.exports = Shelf;
  }
});

// lib/parser/contents/classes/ShowingResultsFor.js
var require_ShowingResultsFor = __commonJS({
  "lib/parser/contents/classes/ShowingResultsFor.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ShowingResultsFor = class {
      type = "ShowingResultsFor";
      constructor(data) {
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
        this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
      }
    };
    module2.exports = ShowingResultsFor;
  }
});

// lib/parser/contents/classes/SimpleCardTeaser.js
var require_SimpleCardTeaser = __commonJS({
  "lib/parser/contents/classes/SimpleCardTeaser.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var SimpleCardTeaser = class {
      type = "SimpleCardTeaser";
      constructor(data) {
        this.message = new Text(data.message);
        this.prominent = data.prominent;
      }
    };
    module2.exports = SimpleCardTeaser;
  }
});

// lib/parser/contents/classes/SingleActionEmergencySupport.js
var require_SingleActionEmergencySupport = __commonJS({
  "lib/parser/contents/classes/SingleActionEmergencySupport.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var SingleActionEmergencySupport = class {
      type = "SingleActionEmergencySupport";
      constructor(data) {
        this.action_text = new Text(data.actionText);
        this.nav_text = new Text(data.navigationText);
        this.details = new Text(data.detailsText);
        this.icon_type = data.icon.iconType;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = SingleActionEmergencySupport;
  }
});

// lib/parser/contents/classes/SingleColumnBrowseResults.js
var require_SingleColumnBrowseResults = __commonJS({
  "lib/parser/contents/classes/SingleColumnBrowseResults.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var SingleColumnBrowseResults = class {
      type = "SingleColumnBrowseResults";
      constructor(data) {
        this.tabs = Parser.parse(data.tabs);
      }
    };
    module2.exports = SingleColumnBrowseResults;
  }
});

// lib/parser/contents/classes/SingleColumnMusicWatchNextResults.js
var require_SingleColumnMusicWatchNextResults = __commonJS({
  "lib/parser/contents/classes/SingleColumnMusicWatchNextResults.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var SingleColumnMusicWatchNextResults = class {
      type = "SingleColumnMusicWatchNextResults";
      constructor(data) {
        return Parser.parse(data);
      }
    };
    module2.exports = SingleColumnMusicWatchNextResults;
  }
});

// lib/parser/contents/classes/SingleHeroImage.js
var require_SingleHeroImage = __commonJS({
  "lib/parser/contents/classes/SingleHeroImage.js"(exports2, module2) {
    "use strict";
    var Thumbnail = require_Thumbnail();
    var SingleHeroImage = class {
      type = "SingleHeroImage";
      constructor(data) {
        this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
        this.style = data.style;
      }
    };
    module2.exports = SingleHeroImage;
  }
});

// lib/parser/contents/classes/SortFilterSubMenu.js
var require_SortFilterSubMenu = __commonJS({
  "lib/parser/contents/classes/SortFilterSubMenu.js"(exports2, module2) {
    "use strict";
    var { observe } = require_Utils();
    var SortFilterSubMenu = class {
      type = "SortFilterSubMenu";
      constructor(data) {
        this.sub_menu_items = observe(data.subMenuItems.map((item) => {
          var _a;
          return {
            title: item.title,
            selected: item.selected,
            continuation: (_a = item.continuation) == null ? void 0 : _a.reloadContinuationData.continuation,
            subtitle: item.subtitle
          };
        }));
        this.label = data.accessibility.accessibilityData.label;
      }
    };
    module2.exports = SortFilterSubMenu;
  }
});

// lib/parser/contents/classes/SubFeedOption.js
var require_SubFeedOption = __commonJS({
  "lib/parser/contents/classes/SubFeedOption.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var SubFeedOption = class {
      type = "SubFeedOption";
      constructor(data) {
        this.name = new Text(data.name);
        this.is_selected = data.isSelected;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
      }
    };
    module2.exports = SubFeedOption;
  }
});

// lib/parser/contents/classes/SubFeedSelector.js
var require_SubFeedSelector = __commonJS({
  "lib/parser/contents/classes/SubFeedSelector.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var SubFeedSelector = class {
      type = "SubFeedSelector";
      constructor(data) {
        this.title = new Text(data.title);
        this.options = Parser.parse(data.options);
      }
    };
    module2.exports = SubFeedSelector;
  }
});

// lib/parser/contents/classes/SubscribeButton.js
var require_SubscribeButton = __commonJS({
  "lib/parser/contents/classes/SubscribeButton.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var SubscribeButton = class {
      type = "SubscribeButton";
      constructor(data) {
        var _a, _b;
        this.title = new Text(data.buttonText);
        this.subscribed = data.subscribed;
        this.enabled = data.enabled;
        this.type = data.type;
        this.channel_id = data.channelId;
        this.show_preferences = data.showPreferences;
        this.subscribed_text = new Text(data.subscribedButtonText);
        this.unsubscribed_text = new Text(data.unsubscribedButtonText);
        this.notification_preference_button = Parser.parse(data.notificationPreferenceButton);
        this.endpoint = new NavigationEndpoint(((_a = data.serviceEndpoints) == null ? void 0 : _a[0]) || ((_b = data.onSubscribeEndpoints) == null ? void 0 : _b[0]));
      }
    };
    module2.exports = SubscribeButton;
  }
});

// lib/parser/contents/classes/SubscriptionNotificationToggleButton.js
var require_SubscriptionNotificationToggleButton = __commonJS({
  "lib/parser/contents/classes/SubscriptionNotificationToggleButton.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var SubscriptionNotificationToggleButton = class {
      type = "SubscriptionNotificationToggleButton";
      constructor(data) {
        this.states = data.states.map((state) => ({
          id: state.stateId,
          next_id: state.nextStateId,
          state: Parser.parse(state.state)
        }));
        this.current_state_id = data.currentStateId;
        this.target_id = data.targetId;
      }
    };
    module2.exports = SubscriptionNotificationToggleButton;
  }
});

// lib/parser/contents/classes/Tab.js
var require_Tab = __commonJS({
  "lib/parser/contents/classes/Tab.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Tab = class {
      type = "Tab";
      constructor(data) {
        this.title = data.title || "N/A";
        this.selected = data.selected || false;
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.content = Parser.parse(data.content);
      }
    };
    module2.exports = Tab;
  }
});

// lib/parser/contents/classes/Tabbed.js
var require_Tabbed = __commonJS({
  "lib/parser/contents/classes/Tabbed.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Tabbed = class {
      type = "Tabbed";
      constructor(data) {
        return Parser.parse(data);
      }
    };
    module2.exports = Tabbed;
  }
});

// lib/parser/contents/classes/TabbedSearchResults.js
var require_TabbedSearchResults = __commonJS({
  "lib/parser/contents/classes/TabbedSearchResults.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _data;
    var TabbedSearchResults = class {
      constructor(data) {
        __publicField(this, "type", "TabbedSearchResults");
        __privateAdd(this, _data, void 0);
        __privateSet(this, _data, data);
      }
      get tabs() {
        return Parser.parse(__privateGet(this, _data).tabs);
      }
    };
    _data = new WeakMap();
    module2.exports = TabbedSearchResults;
  }
});

// lib/parser/contents/classes/TextHeader.js
var require_TextHeader = __commonJS({
  "lib/parser/contents/classes/TextHeader.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var TextHeader = class {
      type = "TextHeader";
      constructor(data) {
        this.title = new Text(data.title);
        this.style = data.style;
      }
    };
    module2.exports = TextHeader;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayBottomPanel.js
var require_ThumbnailOverlayBottomPanel = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayBottomPanel.js"(exports2, module2) {
    "use strict";
    var ThumbnailOverlayBottomPanel = class {
      type = "ThumbnailOverlayBottomPanel";
      constructor(data) {
        this.type = data.icon.iconType;
      }
    };
    module2.exports = ThumbnailOverlayBottomPanel;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayEndorsement.js
var require_ThumbnailOverlayEndorsement = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayEndorsement.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayEndorsement = class {
      type = "ThumbnailOverlayEndorsement";
      constructor(data) {
        this.text = new Text(data.text).toString();
      }
    };
    module2.exports = ThumbnailOverlayEndorsement;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayHoverText.js
var require_ThumbnailOverlayHoverText = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayHoverText.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayHoverText = class {
      type = "ThumbnailOverlayHoverText";
      constructor(data) {
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
      }
    };
    module2.exports = ThumbnailOverlayHoverText;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayInlineUnplayable.js
var require_ThumbnailOverlayInlineUnplayable = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayInlineUnplayable.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayInlineUnplayable = class {
      type = "ThumbnailOverlayInlineUnplayable";
      constructor(data) {
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
      }
    };
    module2.exports = ThumbnailOverlayInlineUnplayable;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayLoadingPreview.js
var require_ThumbnailOverlayLoadingPreview = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayLoadingPreview.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayLoadingPreview = class {
      type = "ThumbnailOverlayLoadingPreview";
      constructor(data) {
        this.text = new Text(data.text);
      }
    };
    module2.exports = ThumbnailOverlayLoadingPreview;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayNowPlaying.js
var require_ThumbnailOverlayNowPlaying = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayNowPlaying.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayNowPlaying = class {
      type = "ThumbnailOverlayNowPlaying";
      constructor(data) {
        this.text = new Text(data.text).text;
      }
    };
    module2.exports = ThumbnailOverlayNowPlaying;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayPinking.js
var require_ThumbnailOverlayPinking = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayPinking.js"(exports2, module2) {
    "use strict";
    var ThumbnailOverlayPinking = class {
      type = "ThumbnailOverlayPinking";
      constructor(data) {
        this.hack = data.hack;
      }
    };
    module2.exports = ThumbnailOverlayPinking;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayPlaybackStatus.js
var require_ThumbnailOverlayPlaybackStatus = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayPlaybackStatus.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayPlaybackStatus = class {
      type = "ThumbnailOverlayPlaybackStatus";
      constructor(data) {
        this.text = data.texts.map((text) => new Text(text))[0].toString();
      }
    };
    module2.exports = ThumbnailOverlayPlaybackStatus;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayResumePlayback.js
var require_ThumbnailOverlayResumePlayback = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayResumePlayback.js"(exports2, module2) {
    "use strict";
    var ThumbnailOverlayResumePlayback = class {
      type = "ThumbnailOverlayResumePlayback";
      constructor(data) {
        this.percent_duration_watched = data.percentDurationWatched;
      }
    };
    module2.exports = ThumbnailOverlayResumePlayback;
  }
});

// lib/parser/contents/classes/ThumbnailOverlaySidePanel.js
var require_ThumbnailOverlaySidePanel = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlaySidePanel.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlaySidePanel = class {
      type = "ThumbnailOverlaySidePanel";
      constructor(data) {
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
      }
    };
    module2.exports = ThumbnailOverlaySidePanel;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayTimeStatus.js
var require_ThumbnailOverlayTimeStatus = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayTimeStatus.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var ThumbnailOverlayTimeStatus = class {
      type = "ThumbnailOverlayTimeStatus";
      constructor(data) {
        this.text = new Text(data.text).text;
      }
    };
    module2.exports = ThumbnailOverlayTimeStatus;
  }
});

// lib/parser/contents/classes/ThumbnailOverlayToggleButton.js
var require_ThumbnailOverlayToggleButton = __commonJS({
  "lib/parser/contents/classes/ThumbnailOverlayToggleButton.js"(exports2, module2) {
    "use strict";
    var NavigationEndpoint = require_NavigationEndpoint();
    var ThumbnailOverlayToggleButton = class {
      type = "ThumbnailOverlayToggleButton";
      constructor(data) {
        this.is_toggled = data.isToggled || null;
        this.icon_type = {
          toggled: data.toggledIcon.iconType,
          untoggled: data.untoggledIcon.iconType
        };
        this.tooltip = {
          toggled: data.toggledTooltip,
          untoggled: data.untoggledTooltip
        };
        this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
        this.untoggled_endpoint = new NavigationEndpoint(data.untoggledServiceEndpoint);
      }
    };
    module2.exports = ThumbnailOverlayToggleButton;
  }
});

// lib/parser/contents/classes/ToggleButton.js
var require_ToggleButton = __commonJS({
  "lib/parser/contents/classes/ToggleButton.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ToggleButton = class {
      type = "ToggleButton";
      constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.text = new Text(data.defaultText);
        this.toggled_text = new Text(data.toggledText);
        this.tooltip = data.defaultTooltip;
        this.toggled_tooltip = data.toggledTooltip;
        this.is_toggled = data.isToggled;
        this.is_disabled = data.isDisabled;
        this.icon_type = data.defaultIcon.iconType;
        const acc_label = ((_b = (_a = data == null ? void 0 : data.defaultText) == null ? void 0 : _a.accessibility) == null ? void 0 : _b.accessibilityData.label) || ((_c = data == null ? void 0 : data.accessibilityData) == null ? void 0 : _c.accessibilityData.label) || ((_d = data == null ? void 0 : data.accessibility) == null ? void 0 : _d.label);
        if (this.icon_type == "LIKE") {
          this.like_count = parseInt(acc_label.replace(/\D/g, ""));
          this.short_like_count = new Text(data.defaultText).toString();
        }
        this.endpoint = ((_f = (_e = data.defaultServiceEndpoint) == null ? void 0 : _e.commandExecutorCommand) == null ? void 0 : _f.commands) && new NavigationEndpoint(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) || new NavigationEndpoint(data.defaultServiceEndpoint);
        this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
        this.button_id = ((_h = (_g = data.toggleButtonSupportedData) == null ? void 0 : _g.toggleButtonIdData) == null ? void 0 : _h.id) || null;
        this.target_id = data.targetId || null;
      }
    };
    module2.exports = ToggleButton;
  }
});

// lib/parser/contents/classes/ToggleMenuServiceItem.js
var require_ToggleMenuServiceItem = __commonJS({
  "lib/parser/contents/classes/ToggleMenuServiceItem.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var ToggleMenuServiceItem = class {
      type = "ToggleMenuServiceItem";
      constructor(data) {
        this.text = new Text(data.defaultText);
        this.toggled_text = new Text(data.toggledText);
        this.icon_type = data.defaultIcon.iconType;
        this.toggled_icon_type = data.toggledIcon.iconType;
        this.endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
      }
    };
    module2.exports = ToggleMenuServiceItem;
  }
});

// lib/parser/contents/classes/Tooltip.js
var require_Tooltip = __commonJS({
  "lib/parser/contents/classes/Tooltip.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Tooltip = class {
      type = "Tooltip";
      constructor(data) {
        this.promo_config = {
          promo_id: data.promoConfig.promoId,
          impression_endpoints: data.promoConfig.impressionEndpoints.map((endpoint) => new NavigationEndpoint(endpoint)),
          accept: new NavigationEndpoint(data.promoConfig.acceptCommand),
          dismiss: new NavigationEndpoint(data.promoConfig.dismissCommand)
        };
        this.target_id = data.targetId;
        this.details = new Text(data.detailsText);
        this.suggested_position = data.suggestedPosition.type;
        this.dismiss_stratedy = data.dismissStrategy.type;
        this.dwell_time_ms = parseInt(data.dwellTimeMs);
      }
    };
    module2.exports = Tooltip;
  }
});

// lib/parser/contents/classes/TwoColumnBrowseResults.js
var require_TwoColumnBrowseResults = __commonJS({
  "lib/parser/contents/classes/TwoColumnBrowseResults.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var TwoColumnBrowseResults = class {
      type = "TwoColumnBrowseResults";
      constructor(data) {
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
      }
    };
    module2.exports = TwoColumnBrowseResults;
  }
});

// lib/parser/contents/classes/TwoColumnSearchResults.js
var require_TwoColumnSearchResults = __commonJS({
  "lib/parser/contents/classes/TwoColumnSearchResults.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var TwoColumnSearchResults = class {
      type = "TwoColumnSearchResults";
      constructor(data) {
        this.primary_contents = Parser.parse(data.primaryContents);
        this.secondary_contents = Parser.parse(data.secondaryContents);
      }
    };
    module2.exports = TwoColumnSearchResults;
  }
});

// lib/parser/contents/classes/TwoColumnWatchNextResults.js
var require_TwoColumnWatchNextResults = __commonJS({
  "lib/parser/contents/classes/TwoColumnWatchNextResults.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var TwoColumnWatchNextResults = class {
      type = "TwoColumnWatchNextResults";
      constructor(data) {
        var _a, _b;
        this.results = Parser.parse((_a = data.results) == null ? void 0 : _a.results.contents);
        this.secondary_results = Parser.parse((_b = data.secondaryResults) == null ? void 0 : _b.secondaryResults.results);
        this.conversation_bar = Parser.parse(data == null ? void 0 : data.conversationBar);
      }
    };
    module2.exports = TwoColumnWatchNextResults;
  }
});

// lib/parser/contents/classes/UniversalWatchCard.js
var require_UniversalWatchCard = __commonJS({
  "lib/parser/contents/classes/UniversalWatchCard.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var UniversalWatchCard = class {
      type = "UniversalWatchCard";
      constructor(data) {
        this.header = Parser.parse(data.header);
        this.call_to_action = Parser.parse(data.callToAction);
        this.sections = Parser.parse(data.sections);
      }
    };
    module2.exports = UniversalWatchCard;
  }
});

// lib/parser/contents/classes/VerticalList.js
var require_VerticalList = __commonJS({
  "lib/parser/contents/classes/VerticalList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var VerticalList = class {
      type = "VerticalList";
      constructor(data) {
        this.items = Parser.parse(data.items);
        this.collapsed_item_count = data.collapsedItemCount;
        this.collapsed_state_button_text = new Text(data.collapsedStateButtonText);
      }
      get contents() {
        return this.items;
      }
    };
    module2.exports = VerticalList;
  }
});

// lib/parser/contents/classes/VerticalWatchCardList.js
var require_VerticalWatchCardList = __commonJS({
  "lib/parser/contents/classes/VerticalWatchCardList.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var NavigationEndpoint = require_NavigationEndpoint();
    var VerticalWatchCardList = class {
      type = "VerticalWatchCardList";
      constructor(data) {
        this.items = Parser.parse(data.items);
        this.contents = this.items;
        this.view_all_text = new Text(data.viewAllText);
        this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
      }
    };
    module2.exports = VerticalWatchCardList;
  }
});

// lib/parser/contents/classes/Video.js
var require_Video = __commonJS({
  "lib/parser/contents/classes/Video.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var Author = require_Author();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Utils = require_Utils();
    var Video = class {
      type = "Video";
      constructor(data) {
        var _a, _b, _c, _d;
        const overlay_time_status = ((_a = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) == null ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet, "") : null;
        this.snippets = ((_b = data.detailedMetadataSnippets) == null ? void 0 : _b.map((snippet) => ({
          text: new Text(snippet.snippetText),
          hover_text: new Text(snippet.snippetHoverText)
        }))) || [];
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
        this.author = new Author(data.ownerText, data.ownerBadges, (_d = (_c = data.channelThumbnailSupportedRenderers) == null ? void 0 : _c.channelThumbnailWithLinkRenderer) == null ? void 0 : _d.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.published = new Text(data.publishedTimeText);
        this.view_count_text = new Text(data.viewCountText);
        this.short_view_count_text = new Text(data.shortViewCountText);
        const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
        if (upcoming)
          this.upcoming = new Date(upcoming);
        this.duration = {
          text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
          seconds: Utils.timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
        };
        this.show_action_menu = data.showActionMenu;
        this.is_watched = data.isWatched || false;
        this.menu = Parser.parse(data.menu);
      }
      get description() {
        var _a;
        if (this.snippets.length > 0) {
          return this.snippets.map((snip) => snip.text.toString()).join("");
        }
        return ((_a = this.description_snippet) == null ? void 0 : _a.toString()) || "";
      }
      get is_live() {
        return this.badges.some((badge) => badge.style === "BADGE_STYLE_TYPE_LIVE_NOW");
      }
      get is_upcoming() {
        return this.upcoming && this.upcoming > new Date();
      }
      get has_captions() {
        return this.badges.some((badge) => badge.label === "CC");
      }
      get best_thumbnail() {
        return this.thumbnails[0];
      }
    };
    module2.exports = Video;
  }
});

// lib/parser/contents/classes/VideoInfoCardContent.js
var require_VideoInfoCardContent = __commonJS({
  "lib/parser/contents/classes/VideoInfoCardContent.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Thumbnail = require_Thumbnail();
    var NavigationEndpoint = require_NavigationEndpoint();
    var VideoInfoCardContent = class {
      type = "VideoInfoCardContent";
      constructor(data) {
        this.title = new Text(data.videoTitle);
        this.channel_name = new Text(data.channelName);
        this.view_count = new Text(data.viewCountText);
        this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
        this.duration = new Text(data.lengthString);
        this.endpoint = new NavigationEndpoint(data.action);
      }
    };
    module2.exports = VideoInfoCardContent;
  }
});

// lib/parser/contents/classes/VideoOwner.js
var require_VideoOwner = __commonJS({
  "lib/parser/contents/classes/VideoOwner.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var Author = require_Author();
    var VideoOwner = class {
      type = "VideoOwner";
      constructor(data) {
        this.subscription_button = data.subscriptionButton || null;
        this.subscriber_count = new Text(data.subscriberCountText);
        this.author = new Author({
          ...data.title,
          navigationEndpoint: data.navigationEndpoint
        }, data.badges, data.thumbnail);
      }
    };
    module2.exports = VideoOwner;
  }
});

// lib/parser/contents/classes/VideoPrimaryInfo.js
var require_VideoPrimaryInfo = __commonJS({
  "lib/parser/contents/classes/VideoPrimaryInfo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var VideoPrimaryInfo = class {
      type = "VideoPrimaryInfo";
      constructor(data) {
        this.title = new Text(data.title);
        this.super_title_link = new Text(data.superTitleLink);
        this.view_count = new Text(data.viewCount.videoViewCountRenderer.viewCount);
        this.short_view_count = new Text(data.viewCount.videoViewCountRenderer.shortViewCount);
        this.published = new Text(data.dateText);
        this.menu = Parser.parse(data.videoActions);
      }
    };
    module2.exports = VideoPrimaryInfo;
  }
});

// lib/parser/contents/classes/VideoSecondaryInfo.js
var require_VideoSecondaryInfo = __commonJS({
  "lib/parser/contents/classes/VideoSecondaryInfo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var VideoSecondaryInfo = class {
      type = "VideoSecondaryInfo";
      constructor(data) {
        this.owner = Parser.parse(data.owner);
        this.description = new Text(data.description);
        this.subscribe_button = Parser.parse(data.subscribeButton);
        this.metadata = Parser.parse(data.metadataRowContainer);
        this.show_more_text = data.showMoreText;
        this.show_less_text = data.showLessText;
        this.default_expanded = data.defaultExpanded;
        this.description_collapsed_lines = data.descriptionCollapsedLines;
      }
    };
    module2.exports = VideoSecondaryInfo;
  }
});

// lib/parser/contents/classes/WatchCardCompactVideo.js
var require_WatchCardCompactVideo = __commonJS({
  "lib/parser/contents/classes/WatchCardCompactVideo.js"(exports2, module2) {
    "use strict";
    var Text = require_Text();
    var { timeToSeconds } = require_Utils();
    var WatchCardCompactVideo = class {
      type = "WatchCardCompactVideo";
      constructor(data) {
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.duration = {
          text: new Text(data.lengthText).toString(),
          seconds: timeToSeconds(data.lengthText.simpleText)
        };
        this.style = data.style;
      }
    };
    module2.exports = WatchCardCompactVideo;
  }
});

// lib/parser/contents/classes/WatchCardHeroVideo.js
var require_WatchCardHeroVideo = __commonJS({
  "lib/parser/contents/classes/WatchCardHeroVideo.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var NavigationEndpoint = require_NavigationEndpoint();
    var WatchCardHeroVideo = class {
      type = "WatchCardHeroVideo";
      constructor(data) {
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.call_to_action_button = Parser.parse(data.callToActionButton);
        this.hero_image = Parser.parse(data.heroImage);
        this.label = data.accessibility.accessibilityData.label;
      }
    };
    module2.exports = WatchCardHeroVideo;
  }
});

// lib/parser/contents/classes/WatchCardRichHeader.js
var require_WatchCardRichHeader = __commonJS({
  "lib/parser/contents/classes/WatchCardRichHeader.js"(exports2, module2) {
    "use strict";
    var Author = require_Author();
    var NavigationEndpoint = require_NavigationEndpoint();
    var Text = require_Text();
    var WatchCardRichHeader = class {
      type = "WatchCardRichHeader";
      constructor(data) {
        this.title = new Text(data.title);
        this.title_endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
        this.subtitle = new Text(data.subtitle);
        this.author = new Author(data, data.titleBadge ? [data.titleBadge] : null, data.avatar);
        this.author.name = this.title;
        this.style = data.style;
      }
    };
    module2.exports = WatchCardRichHeader;
  }
});

// lib/parser/contents/classes/WatchCardSectionSequence.js
var require_WatchCardSectionSequence = __commonJS({
  "lib/parser/contents/classes/WatchCardSectionSequence.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var WatchCardSectionSequence = class {
      type = "WatchCardSectionSequence";
      constructor(data) {
        this.lists = Parser.parse(data.lists);
      }
    };
    module2.exports = WatchCardSectionSequence;
  }
});

// lib/parser/contents/classes/WatchNextEndScreen.js
var require_WatchNextEndScreen = __commonJS({
  "lib/parser/contents/classes/WatchNextEndScreen.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Text = require_Text();
    var WatchNextEndScreen = class {
      constructor(data) {
        this.results = Parser.parse(data.results);
        this.title = new Text(data.title).toString();
      }
    };
    module2.exports = WatchNextEndScreen;
  }
});

// lib/parser/contents/classes/WatchNextTabbedResults.js
var require_WatchNextTabbedResults = __commonJS({
  "lib/parser/contents/classes/WatchNextTabbedResults.js"(exports2, module2) {
    "use strict";
    var TwoColumnBrowseResults = require_TwoColumnBrowseResults();
    var WatchNextTabbedResults = class extends TwoColumnBrowseResults {
      type = "WatchNextTabbedResults";
      constructor(data) {
        super(data);
      }
    };
    module2.exports = WatchNextTabbedResults;
  }
});

// lib/parser/contents/map.js
var require_map = __commonJS({
  "lib/parser/contents/map.js"(exports2, module2) {
    var map = { "AnalyticsMainAppKeyMetrics": () => require_AnalyticsMainAppKeyMetrics(), "AnalyticsVideo": () => require_AnalyticsVideo(), "AnalyticsVodCarouselCard": () => require_AnalyticsVodCarouselCard(), "Author": () => require_Author(), "BackstageImage": () => require_BackstageImage(), "BackstagePost": () => require_BackstagePost(), "BackstagePostThread": () => require_BackstagePostThread(), "BrowseFeedActions": () => require_BrowseFeedActions(), "Button": () => require_Button(), "C4TabbedHeader": () => require_C4TabbedHeader(), "CallToActionButton": () => require_CallToActionButton(), "Card": () => require_Card(), "CardCollection": () => require_CardCollection(), "Channel": () => require_Channel(), "ChannelAboutFullMetadata": () => require_ChannelAboutFullMetadata(), "ChannelFeaturedContent": () => require_ChannelFeaturedContent(), "ChannelHeaderLinks": () => require_ChannelHeaderLinks(), "ChannelMetadata": () => require_ChannelMetadata(), "ChannelMobileHeader": () => require_ChannelMobileHeader(), "ChannelThumbnailWithLink": () => require_ChannelThumbnailWithLink(), "ChannelVideoPlayer": () => require_ChannelVideoPlayer(), "ChildVideo": () => require_ChildVideo(), "ChipCloud": () => require_ChipCloud(), "ChipCloudChip": () => require_ChipCloudChip(), "CollageHeroImage": () => require_CollageHeroImage(), "Comment": () => require_Comment(), "CommentReplyDialog": () => require_CommentReplyDialog(), "comments/AuthorCommentBadge": () => require_AuthorCommentBadge(), "comments/CommentActionButtons": () => require_CommentActionButtons(), "comments/CommentReplies": () => require_CommentReplies(), "comments/CommentSimplebox": () => require_CommentSimplebox(), "CommentsEntryPointHeader": () => require_CommentsEntryPointHeader(), "CommentsHeader": () => require_CommentsHeader(), "CommentThread": () => require_CommentThread(), "CompactLink": () => require_CompactLink(), "CompactMix": () => require_CompactMix(), "CompactPlaylist": () => require_CompactPlaylist(), "CompactVideo": () => require_CompactVideo(), "ContinuationItem": () => require_ContinuationItem(), "CtaGoToCreatorStudio": () => require_CtaGoToCreatorStudio(), "DataModelSection": () => require_DataModelSection(), "DidYouMean": () => require_DidYouMean(), "DownloadButton": () => require_DownloadButton(), "Element": () => require_Element(), "EmergencyOnebox": () => require_EmergencyOnebox(), "EmojiRun": () => require_EmojiRun(), "Endscreen": () => require_Endscreen(), "EndscreenElement": () => require_EndscreenElement(), "EndScreenPlaylist": () => require_EndScreenPlaylist(), "EndScreenVideo": () => require_EndScreenVideo(), "ExpandableTab": () => require_ExpandableTab(), "ExpandedShelfContents": () => require_ExpandedShelfContents(), "FeedFilterChipBar": () => require_FeedFilterChipBar(), "FeedTabbedHeader": () => require_FeedTabbedHeader(), "Format": () => require_Format(), "Grid": () => require_Grid(), "GridChannel": () => require_GridChannel(), "GridPlaylist": () => require_GridPlaylist(), "GridVideo": () => require_GridVideo(), "HorizontalCardList": () => require_HorizontalCardList(), "HorizontalList": () => require_HorizontalList(), "ItemSection": () => require_ItemSection(), "ItemSectionHeader": () => require_ItemSectionHeader(), "LikeButton": () => require_LikeButton(), "LiveChat": () => require_LiveChat(), "livechat/AddBannerToLiveChatCommand": () => require_AddBannerToLiveChatCommand(), "livechat/AddChatItemAction": () => require_AddChatItemAction(), "livechat/AddLiveChatTickerItemAction": () => require_AddLiveChatTickerItemAction(), "livechat/items/LiveChatBanner": () => require_LiveChatBanner(), "livechat/items/LiveChatBannerHeader": () => require_LiveChatBannerHeader(), "livechat/items/LiveChatBannerPoll": () => require_LiveChatBannerPoll(), "livechat/items/LiveChatMembershipItem": () => require_LiveChatMembershipItem(), "livechat/items/LiveChatPaidMessage": () => require_LiveChatPaidMessage(), "livechat/items/LiveChatPaidSticker": () => require_LiveChatPaidSticker(), "livechat/items/LiveChatPlaceholderItem": () => require_LiveChatPlaceholderItem(), "livechat/items/LiveChatTextMessage": () => require_LiveChatTextMessage(), "livechat/items/LiveChatTickerPaidMessageItem": () => require_LiveChatTickerPaidMessageItem(), "livechat/items/LiveChatTickerSponsorItem": () => require_LiveChatTickerSponsorItem(), "livechat/items/LiveChatViewerEngagementMessage": () => require_LiveChatViewerEngagementMessage(), "livechat/items/Poll": () => require_Poll(), "livechat/items/PollHeader": () => require_PollHeader(), "livechat/LiveChatActionPanel": () => require_LiveChatActionPanel(), "livechat/MarkChatItemAsDeletedAction": () => require_MarkChatItemAsDeletedAction(), "livechat/MarkChatItemsByAuthorAsDeletedAction": () => require_MarkChatItemsByAuthorAsDeletedAction(), "livechat/RemoveBannerForLiveChatCommand": () => require_RemoveBannerForLiveChatCommand(), "livechat/ReplaceChatItemAction": () => require_ReplaceChatItemAction(), "livechat/ReplayChatItemAction": () => require_ReplayChatItemAction(), "livechat/ShowLiveChatActionPanelAction": () => require_ShowLiveChatActionPanelAction(), "livechat/ShowLiveChatTooltipCommand": () => require_ShowLiveChatTooltipCommand(), "livechat/UpdateDateTextAction": () => require_UpdateDateTextAction(), "livechat/UpdateDescriptionAction": () => require_UpdateDescriptionAction(), "livechat/UpdateLiveChatPollAction": () => require_UpdateLiveChatPollAction(), "livechat/UpdateTitleAction": () => require_UpdateTitleAction(), "livechat/UpdateToggleButtonTextAction": () => require_UpdateToggleButtonTextAction(), "livechat/UpdateViewershipAction": () => require_UpdateViewershipAction(), "LiveChatAuthorBadge": () => require_LiveChatAuthorBadge(), "LiveChatHeader": () => require_LiveChatHeader(), "LiveChatItemList": () => require_LiveChatItemList(), "LiveChatMessageInput": () => require_LiveChatMessageInput(), "LiveChatParticipant": () => require_LiveChatParticipant(), "LiveChatParticipantsList": () => require_LiveChatParticipantsList(), "Menu": () => require_Menu(), "MenuNavigationItem": () => require_MenuNavigationItem(), "MenuServiceItem": () => require_MenuServiceItem(), "MenuServiceItemDownload": () => require_MenuServiceItemDownload(), "MerchandiseItem": () => require_MerchandiseItem(), "MerchandiseShelf": () => require_MerchandiseShelf(), "Message": () => require_Message(), "MetadataBadge": () => require_MetadataBadge(), "MetadataRow": () => require_MetadataRow(), "MetadataRowContainer": () => require_MetadataRowContainer(), "MetadataRowHeader": () => require_MetadataRowHeader(), "MicroformatData": () => require_MicroformatData(), "Mix": () => require_Mix(), "Movie": () => require_Movie(), "MovingThumbnail": () => require_MovingThumbnail(), "MusicCarouselShelf": () => require_MusicCarouselShelf(), "MusicCarouselShelfBasicHeader": () => require_MusicCarouselShelfBasicHeader(), "MusicDescriptionShelf": () => require_MusicDescriptionShelf(), "MusicDetailHeader": () => require_MusicDetailHeader(), "MusicHeader": () => require_MusicHeader(), "MusicImmersiveHeader": () => require_MusicImmersiveHeader(), "MusicInlineBadge": () => require_MusicInlineBadge(), "MusicItemThumbnailOverlay": () => require_MusicItemThumbnailOverlay(), "MusicNavigationButton": () => require_MusicNavigationButton(), "MusicPlayButton": () => require_MusicPlayButton(), "MusicPlaylistShelf": () => require_MusicPlaylistShelf(), "MusicQueue": () => require_MusicQueue(), "MusicResponsiveListItem": () => require_MusicResponsiveListItem(), "MusicResponsiveListItemFixedColumn": () => require_MusicResponsiveListItemFixedColumn(), "MusicResponsiveListItemFlexColumn": () => require_MusicResponsiveListItemFlexColumn(), "MusicShelf": () => require_MusicShelf(), "MusicThumbnail": () => require_MusicThumbnail(), "MusicTwoRowItem": () => require_MusicTwoRowItem(), "NavigatableText": () => require_NavigatableText(), "NavigationEndpoint": () => require_NavigationEndpoint(), "PlayerAnnotationsExpanded": () => require_PlayerAnnotationsExpanded(), "PlayerCaptionsTracklist": () => require_PlayerCaptionsTracklist(), "PlayerErrorMessage": () => require_PlayerErrorMessage(), "PlayerLiveStoryboardSpec": () => require_PlayerLiveStoryboardSpec(), "PlayerMicroformat": () => require_PlayerMicroformat(), "PlayerOverlay": () => require_PlayerOverlay(), "PlayerOverlayAutoplay": () => require_PlayerOverlayAutoplay(), "PlayerStoryboardSpec": () => require_PlayerStoryboardSpec(), "Playlist": () => require_Playlist(), "PlaylistAuthor": () => require_PlaylistAuthor(), "PlaylistHeader": () => require_PlaylistHeader(), "PlaylistMetadata": () => require_PlaylistMetadata(), "PlaylistPanel": () => require_PlaylistPanel(), "PlaylistPanelVideo": () => require_PlaylistPanelVideo(), "PlaylistSidebar": () => require_PlaylistSidebar(), "PlaylistSidebarPrimaryInfo": () => require_PlaylistSidebarPrimaryInfo(), "PlaylistSidebarSecondaryInfo": () => require_PlaylistSidebarSecondaryInfo(), "PlaylistVideo": () => require_PlaylistVideo(), "PlaylistVideoList": () => require_PlaylistVideoList(), "PlaylistVideoThumbnail": () => require_PlaylistVideoThumbnail(), "Poll": () => require_Poll2(), "Post": () => require_Post(), "ProfileColumn": () => require_ProfileColumn(), "ProfileColumnStats": () => require_ProfileColumnStats(), "ProfileColumnStatsEntry": () => require_ProfileColumnStatsEntry(), "ProfileColumnUserInfo": () => require_ProfileColumnUserInfo(), "ReelItem": () => require_ReelItem(), "ReelShelf": () => require_ReelShelf(), "RelatedChipCloud": () => require_RelatedChipCloud(), "RichGrid": () => require_RichGrid(), "RichItem": () => require_RichItem(), "RichListHeader": () => require_RichListHeader(), "RichSection": () => require_RichSection(), "RichShelf": () => require_RichShelf(), "SearchBox": () => require_SearchBox(), "SearchRefinementCard": () => require_SearchRefinementCard(), "SecondarySearchContainer": () => require_SecondarySearchContainer(), "SectionList": () => require_SectionList(), "Shelf": () => require_Shelf(), "ShowingResultsFor": () => require_ShowingResultsFor(), "SimpleCardTeaser": () => require_SimpleCardTeaser(), "SingleActionEmergencySupport": () => require_SingleActionEmergencySupport(), "SingleColumnBrowseResults": () => require_SingleColumnBrowseResults(), "SingleColumnMusicWatchNextResults": () => require_SingleColumnMusicWatchNextResults(), "SingleHeroImage": () => require_SingleHeroImage(), "SortFilterSubMenu": () => require_SortFilterSubMenu(), "SubFeedOption": () => require_SubFeedOption(), "SubFeedSelector": () => require_SubFeedSelector(), "SubscribeButton": () => require_SubscribeButton(), "SubscriptionNotificationToggleButton": () => require_SubscriptionNotificationToggleButton(), "Tab": () => require_Tab(), "Tabbed": () => require_Tabbed(), "TabbedSearchResults": () => require_TabbedSearchResults(), "Text": () => require_Text(), "TextHeader": () => require_TextHeader(), "TextRun": () => require_TextRun(), "Thumbnail": () => require_Thumbnail(), "ThumbnailOverlayBottomPanel": () => require_ThumbnailOverlayBottomPanel(), "ThumbnailOverlayEndorsement": () => require_ThumbnailOverlayEndorsement(), "ThumbnailOverlayHoverText": () => require_ThumbnailOverlayHoverText(), "ThumbnailOverlayInlineUnplayable": () => require_ThumbnailOverlayInlineUnplayable(), "ThumbnailOverlayLoadingPreview": () => require_ThumbnailOverlayLoadingPreview(), "ThumbnailOverlayNowPlaying": () => require_ThumbnailOverlayNowPlaying(), "ThumbnailOverlayPinking": () => require_ThumbnailOverlayPinking(), "ThumbnailOverlayPlaybackStatus": () => require_ThumbnailOverlayPlaybackStatus(), "ThumbnailOverlayResumePlayback": () => require_ThumbnailOverlayResumePlayback(), "ThumbnailOverlaySidePanel": () => require_ThumbnailOverlaySidePanel(), "ThumbnailOverlayTimeStatus": () => require_ThumbnailOverlayTimeStatus(), "ThumbnailOverlayToggleButton": () => require_ThumbnailOverlayToggleButton(), "ToggleButton": () => require_ToggleButton(), "ToggleMenuServiceItem": () => require_ToggleMenuServiceItem(), "Tooltip": () => require_Tooltip(), "TwoColumnBrowseResults": () => require_TwoColumnBrowseResults(), "TwoColumnSearchResults": () => require_TwoColumnSearchResults(), "TwoColumnWatchNextResults": () => require_TwoColumnWatchNextResults(), "UniversalWatchCard": () => require_UniversalWatchCard(), "VerticalList": () => require_VerticalList(), "VerticalWatchCardList": () => require_VerticalWatchCardList(), "Video": () => require_Video(), "VideoDetails": () => require_VideoDetails(), "VideoInfoCardContent": () => require_VideoInfoCardContent(), "VideoOwner": () => require_VideoOwner(), "VideoPrimaryInfo": () => require_VideoPrimaryInfo(), "VideoSecondaryInfo": () => require_VideoSecondaryInfo(), "WatchCardCompactVideo": () => require_WatchCardCompactVideo(), "WatchCardHeroVideo": () => require_WatchCardHeroVideo(), "WatchCardRichHeader": () => require_WatchCardRichHeader(), "WatchCardSectionSequence": () => require_WatchCardSectionSequence(), "WatchNextEndScreen": () => require_WatchNextEndScreen(), "WatchNextTabbedResults": () => require_WatchNextTabbedResults() };
    module2.exports = function req(name) {
      const func = map[name];
      if (!func) {
        const error = new Error("Module not found: " + name);
        error.code = "MODULE_NOT_FOUND";
        throw error;
      }
      return func();
    };
  }
});

// lib/parser/contents/index.js
var require_contents = __commonJS({
  "lib/parser/contents/index.js"(exports2, module2) {
    "use strict";
    var { InnertubeError: InnertubeError2, observe } = require_Utils();
    var Format = require_Format();
    var VideoDetails = require_VideoDetails();
    var requireParserClass = require_map();
    var AppendContinuationItemsAction = class {
      type = "appendContinuationItemsAction";
      constructor(data) {
        this.contents = Parser.parse(data.continuationItems);
      }
    };
    var ReloadContinuationItemsCommand = class {
      type = "reloadContinuationItemsCommand";
      constructor(data) {
        this.target_id = data.targetId;
        this.contents = Parser.parse(data.continuationItems);
      }
    };
    var SectionListContinuation = class {
      type = "sectionListContinuation";
      constructor(data) {
        this.contents = Parser.parse(data.contents);
        this.continuation = data.continuations[0].nextContinuationData.continuation;
      }
    };
    var TimedContinuation = class {
      type = "timedContinuationData";
      constructor(data) {
        this.timeout_ms = data.timeoutMs || data.timeUntilLastMessageMsec;
        this.token = data.continuation;
      }
    };
    var LiveChatContinuation = class {
      type = "liveChatContinuation";
      constructor(data) {
        var _a, _b, _c, _d, _e;
        this.actions = Parser.parse((_a = data.actions) == null ? void 0 : _a.map((action) => {
          delete action.clickTrackingParams;
          return action;
        }), "livechat") || [];
        this.action_panel = Parser.parse(data.actionPanel);
        this.item_list = Parser.parse(data.itemList);
        this.header = Parser.parse(data.header);
        this.participants_list = Parser.parse(data.participantsList);
        this.popout_message = Parser.parse(data.popoutMessage);
        this.emojis = ((_b = data.emojis) == null ? void 0 : _b.map((emoji) => ({
          emoji_id: emoji.emojiId,
          shortcuts: emoji.shortcuts,
          search_terms: emoji.searchTerms,
          image: emoji.image,
          is_custom_emoji: emoji.isCustomEmoji
        }))) || null;
        this.continuation = new TimedContinuation(((_c = data.continuations) == null ? void 0 : _c[0].timedContinuationData) || ((_d = data.continuations) == null ? void 0 : _d[0].invalidationContinuationData) || ((_e = data.continuations) == null ? void 0 : _e[0].liveChatReplayContinuationData));
        this.viewer_name = data.viewerName;
      }
    };
    var _memo, _clearMemo, clearMemo_fn, _createMemo, createMemo_fn, _addToMemo, addToMemo_fn;
    var _Parser = class {
      static parseResponse(data) {
        var _a, _b;
        __privateMethod(this, _createMemo, createMemo_fn).call(this);
        const contents = _Parser.parse(data.contents);
        const contents_memo = __privateGet(_Parser, _memo);
        __privateMethod(this, _clearMemo, clearMemo_fn).call(this);
        __privateMethod(this, _createMemo, createMemo_fn).call(this);
        const on_response_received_actions = data.onResponseReceivedActions ? _Parser.parseRR(data.onResponseReceivedActions) : null;
        const on_response_received_actions_memo = __privateGet(_Parser, _memo);
        __privateMethod(this, _clearMemo, clearMemo_fn).call(this);
        __privateMethod(this, _createMemo, createMemo_fn).call(this);
        const on_response_received_endpoints = data.onResponseReceivedEndpoints ? _Parser.parseRR(data.onResponseReceivedEndpoints) : null;
        const on_response_received_endpoints_memo = __privateGet(_Parser, _memo);
        __privateMethod(this, _clearMemo, clearMemo_fn).call(this);
        __privateMethod(this, _createMemo, createMemo_fn).call(this);
        const on_response_received_commands = data.onResponseReceivedCommands ? _Parser.parseRR(data.onResponseReceivedCommands) : null;
        const on_response_received_commands_memo = __privateGet(_Parser, _memo);
        __privateMethod(this, _clearMemo, clearMemo_fn).call(this);
        return {
          contents,
          contents_memo,
          on_response_received_actions,
          on_response_received_actions_memo,
          on_response_received_endpoints,
          on_response_received_endpoints_memo,
          on_response_received_commands,
          on_response_received_commands_memo,
          continuation: data.continuation ? _Parser.parseC(data.continuation) : null,
          continuation_contents: data.continuationContents ? _Parser.parseLC(data.continuationContents) : null,
          actions: data.actions && _Parser.parseLA(data.actions),
          metadata: _Parser.parse(data.metadata),
          header: _Parser.parse(data.header),
          microformat: data.microformat && _Parser.parse(data.microformat),
          sidebar: _Parser.parse(data.sidebar),
          overlay: _Parser.parse(data.overlay),
          refinements: data.refinements || null,
          estimated_results: data.estimatedResults || null,
          player_overlays: _Parser.parse(data.playerOverlays),
          playability_status: data.playabilityStatus && {
            status: data.playabilityStatus.status,
            error_screen: _Parser.parse(data.playabilityStatus.errorScreen),
            embeddable: data.playabilityStatus.playableInEmbed || null,
            reason: data.reason || ""
          },
          streaming_data: data.streamingData && {
            expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1e3),
            formats: _Parser.parseFormats(data.streamingData.formats),
            adaptive_formats: _Parser.parseFormats(data.streamingData.adaptiveFormats),
            dash_manifest_url: ((_a = data.streamingData) == null ? void 0 : _a.dashManifestUrl) || null,
            dls_manifest_url: ((_b = data.streamingData) == null ? void 0 : _b.dashManifestUrl) || null
          },
          captions: _Parser.parse(data.captions),
          video_details: data.videoDetails && new VideoDetails(data.videoDetails),
          annotations: _Parser.parse(data.annotations),
          storyboards: _Parser.parse(data.storyboards),
          endscreen: _Parser.parse(data.endscreen),
          cards: _Parser.parse(data.cards)
        };
      }
      static parseC(data) {
        if (data.timedContinuationData)
          return new TimedContinuation(data.timedContinuationData);
      }
      static parseLC(data) {
        if (data.sectionListContinuation)
          return new SectionListContinuation(data.sectionListContinuation);
        if (data.liveChatContinuation)
          return new LiveChatContinuation(data.liveChatContinuation);
      }
      static parseRR(actions) {
        return observe(actions.map((action) => {
          if (action.reloadContinuationItemsCommand)
            return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
          if (action.appendContinuationItemsAction)
            return new AppendContinuationItemsAction(action.appendContinuationItemsAction);
        }).filter((item) => item));
      }
      static parseLA(data) {
        if (Array.isArray(data)) {
          return _Parser.parse(data.map((action) => {
            delete action.clickTrackingParams;
            return action;
          }), "livechat");
        }
        return _Parser.parse(data) || null;
      }
      static parseFormats(formats) {
        return observe((formats == null ? void 0 : formats.map((format) => new Format(format))) || []);
      }
      static parse(data, module3) {
        if (!data)
          return null;
        if (Array.isArray(data)) {
          const results = [];
          for (const item of data) {
            const keys2 = Object.keys(item);
            const classname2 = this.sanitizeClassName(keys2[0]);
            if (!this.shouldIgnore(classname2)) {
              try {
                const path = module3 ? `${module3}/` : "";
                const TargetClass = requireParserClass(path + classname2);
                const result = new TargetClass(item[keys2[0]]);
                results.push(result);
                __privateMethod(this, _addToMemo, addToMemo_fn).call(this, classname2, result);
              } catch (err) {
                this.formatError({ classname: classname2, classdata: item[keys2[0]], err });
              }
            }
          }
          return observe(results);
        }
        const keys = Object.keys(data);
        const classname = this.sanitizeClassName(keys[0]);
        if (!this.shouldIgnore(classname)) {
          try {
            const path = module3 ? `${module3}/` : "";
            const TargetClass = requireParserClass(path + classname);
            const result = new TargetClass(data[keys[0]]);
            __privateMethod(this, _addToMemo, addToMemo_fn).call(this, classname, result);
            return result;
          } catch (err) {
            this.formatError({ classname, classdata: data[keys[0]], err });
            return null;
          }
        }
      }
      static formatError({ classname, classdata, err }) {
        if (err.code == "MODULE_NOT_FOUND") {
          return console.warn(new InnertubeError2(`${classname} not found!
This is a bug, please report it at ${require_package().bugs.url}`, classdata));
        }
        console.warn(new InnertubeError2(`Something went wrong at ${classname}!
This is a bug, please report it at ${require_package().bugs.url}`, { stack: err.stack }));
      }
      static sanitizeClassName(input) {
        return (input.charAt(0).toUpperCase() + input.slice(1)).replace(/Renderer|Model/g, "").replace(/Radio/g, "Mix").trim();
      }
      static shouldIgnore(classname) {
        return [
          "DisplayAd",
          "SearchPyv",
          "MealbarPromo",
          "BackgroundPromo",
          "PromotedSparklesWeb",
          "RunAttestationCommand"
        ].includes(classname);
      }
    };
    var Parser = _Parser;
    _memo = new WeakMap();
    _clearMemo = new WeakSet();
    clearMemo_fn = function() {
      __privateSet(_Parser, _memo, null);
    };
    _createMemo = new WeakSet();
    createMemo_fn = function() {
      __privateSet(_Parser, _memo, /* @__PURE__ */ new Map());
    };
    _addToMemo = new WeakSet();
    addToMemo_fn = function(classname, result) {
      if (!__privateGet(_Parser, _memo))
        return;
      if (!__privateGet(_Parser, _memo).has(classname))
        return __privateGet(_Parser, _memo).set(classname, [result]);
      __privateGet(_Parser, _memo).get(classname).push(result);
    };
    __privateAdd(Parser, _clearMemo);
    __privateAdd(Parser, _createMemo);
    __privateAdd(Parser, _addToMemo);
    __privateAdd(Parser, _memo, /* @__PURE__ */ new Map());
    module2.exports = Parser;
  }
});

// lib/parser/youtube/Analytics.js
var require_Analytics = __commonJS({
  "lib/parser/youtube/Analytics.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _page;
    var Analytics = class {
      constructor(response) {
        __privateAdd(this, _page, void 0);
        __privateSet(this, _page, Parser.parseResponse(response));
        this.sections = __privateGet(this, _page).contents_memo.get("Element");
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    _page = new WeakMap();
    module2.exports = Analytics;
  }
});

// lib/core/AccountManager.js
var require_AccountManager = __commonJS({
  "lib/core/AccountManager.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var Constants = require_Constants();
    var Analytics = require_Analytics();
    var Proto2 = require_proto();
    var _actions, _setSetting, setSetting_fn;
    var AccountManager2 = class {
      constructor(actions) {
        __privateAdd(this, _setSetting);
        __privateAdd(this, _actions, void 0);
        __privateSet(this, _actions, actions);
        this.channel = {
          editName: (new_name) => __privateGet(this, _actions).channel("channel/edit_name", { new_name }),
          editDescription: (new_description) => __privateGet(this, _actions).channel("channel/edit_description", { new_description }),
          getBasicAnalytics: () => this.getAnalytics()
        };
        this.settings = {
          notifications: {
            setSubscriptions: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS, "SPaccount_notifications", option),
            setRecommendedVideos: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, "SPaccount_notifications", option),
            setChannelActivity: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, "SPaccount_notifications", option),
            setCommentReplies: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.COMMENT_REPLIES, "SPaccount_notifications", option),
            setMentions: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.USER_MENTION, "SPaccount_notifications", option),
            setSharedContent: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.SHARED_CONTENT, "SPaccount_notifications", option)
          },
          privacy: {
            setSubscriptionsPrivate: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, "SPaccount_privacy", option),
            setSavedPlaylistsPrivate: (option) => __privateMethod(this, _setSetting, setSetting_fn).call(this, Constants.ACCOUNT_SETTINGS.PLAYLISTS_PRIVACY, "SPaccount_privacy", option)
          }
        };
      }
      async getInfo() {
        const response = await __privateGet(this, _actions).account("account/accounts_list", { client: "ANDROID" });
        const account_item_section_renderer = Utils.findNode(response.data, "contents", "accountItem", 8, false);
        const profile = account_item_section_renderer.accountItem.serviceEndpoint.signInEndpoint.directSigninUserProfile;
        const name = profile.accountName;
        const email = profile.email;
        const photo = profile.accountPhoto.thumbnails;
        const subscriber_count = account_item_section_renderer.accountItem.accountByline.runs.map((run) => run.text).join("");
        const channel_id = response.data.contents[0].accountSectionListRenderer.footers[0].accountChannelRenderer.navigationEndpoint.browseEndpoint.browseId;
        return { name, email, channel_id, subscriber_count, photo };
      }
      async getTimeWatched() {
        const response = await __privateGet(this, _actions).browse("SPtime_watched", { client: "ANDROID" });
        const rows = Utils.findNode(response.data, "contents", "statRowRenderer", 11, false);
        const stats = rows.map((row) => {
          const renderer = row.statRowRenderer;
          if (renderer) {
            return {
              title: renderer.title.runs.map((run) => run.text).join(""),
              time: renderer.contents.runs.map((run) => run.text).join("")
            };
          }
        }).filter((stat) => stat);
        return stats;
      }
      async getAnalytics() {
        const info = await this.getInfo();
        const params = Proto2.encodeChannelAnalyticsParams(info.channel_id);
        const response = await __privateGet(this, _actions).browse("FEanalytics_screen", { params, client: "ANDROID" });
        return new Analytics(response.data);
      }
    };
    _actions = new WeakMap();
    _setSetting = new WeakSet();
    setSetting_fn = async function(setting_id, type, new_value) {
      Utils.throwIfMissing({ setting_id, type, new_value });
      const values = { ON: true, OFF: false };
      if (!values.hasOwnProperty(new_value))
        throw new Utils.InnertubeError("Invalid option", { option: new_value, available_options: Object.keys(values) });
      const response = await __privateGet(this, _actions).browse(type);
      const contents = (() => {
        switch (type.trim()) {
          case "SPaccount_notifications":
            return Utils.findNode(response.data, "contents", "Your preferences", 13, false).options;
          case "SPaccount_privacy":
            return Utils.findNode(response.data, "contents", "settingsSwitchRenderer", 13, false).options;
          default:
            throw new TypeError("undefined is not a function");
        }
      })();
      const option = contents.find((option2) => option2.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);
      const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
      const set_setting = await __privateGet(this, _actions).account("account/set_setting", {
        new_value: type == "SPaccount_privacy" ? !values[new_value] : values[new_value],
        setting_item_id
      });
      return set_setting;
    };
    module2.exports = AccountManager2;
  }
});

// lib/core/PlaylistManager.js
var require_PlaylistManager = __commonJS({
  "lib/core/PlaylistManager.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var _actions;
    var PlaylistManager2 = class {
      constructor(actions) {
        __privateAdd(this, _actions, void 0);
        __privateSet(this, _actions, actions);
      }
      async create(title, video_ids) {
        Utils.throwIfMissing({ title, video_ids });
        const response = await __privateGet(this, _actions).playlist("playlist/create", { title, ids: video_ids });
        return {
          success: response.success,
          status_code: response.status_code,
          playlist_id: response.data.playlistId,
          data: response.data
        };
      }
      async delete(playlist_id) {
        Utils.throwIfMissing({ playlist_id });
        const response = await __privateGet(this, _actions).playlist("playlist/delete", { playlist_id });
        return {
          playlist_id,
          success: response.success,
          status_code: response.status_code,
          data: response.data
        };
      }
      async addVideos(playlist_id, video_ids) {
        Utils.throwIfMissing({ playlist_id, video_ids });
        const response = await __privateGet(this, _actions).playlist("browse/edit_playlist", {
          ids: video_ids,
          action: "ACTION_ADD_VIDEO",
          playlist_id
        });
        return {
          playlist_id,
          success: response.success,
          status_code: response.status_code,
          data: response.data
        };
      }
      async removeVideos(playlist_id, video_ids) {
        Utils.throwIfMissing({ playlist_id, video_ids });
        const plinfo = await __privateGet(this, _actions).browse(`VL${playlist_id}`);
        const list = Utils.findNode(plinfo.data, "contents", "contents", 13, false);
        if (!list.isEditable)
          throw new Utils.InnertubeError("This playlist cannot be edited.", playlist_id);
        const videos = list.contents.filter((item) => video_ids.includes(item.playlistVideoRenderer.videoId));
        const set_video_ids = videos.map((video) => video.playlistVideoRenderer.setVideoId);
        const response = await __privateGet(this, _actions).playlist("browse/edit_playlist", {
          ids: set_video_ids,
          action: "ACTION_REMOVE_VIDEO",
          playlist_id
        });
        return {
          success: response.success,
          status_code: response.status_code,
          playlist_id,
          data: response.data
        };
      }
    };
    _actions = new WeakMap();
    module2.exports = PlaylistManager2;
  }
});

// lib/core/InteractionManager.js
var require_InteractionManager = __commonJS({
  "lib/core/InteractionManager.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var _actions;
    var InteractionManager2 = class {
      constructor(actions) {
        __privateAdd(this, _actions, void 0);
        __privateSet(this, _actions, actions);
      }
      async like(video_id) {
        Utils.throwIfMissing({ video_id });
        const action = await __privateGet(this, _actions).engage("like/like", { video_id });
        return action;
      }
      async dislike(video_id) {
        Utils.throwIfMissing({ video_id });
        const action = await __privateGet(this, _actions).engage("like/dislike", { video_id });
        return action;
      }
      async removeLike(video_id) {
        Utils.throwIfMissing({ video_id });
        const action = await this.actions.engage("like/removelike", { video_id });
        return action;
      }
      async subscribe(channel_id) {
        Utils.throwIfMissing({ channel_id });
        const action = await __privateGet(this, _actions).engage("subscription/subscribe", { channel_id });
        return action;
      }
      async unsubscribe(channel_id) {
        Utils.throwIfMissing({ channel_id });
        const action = await __privateGet(this, _actions).engage("subscription/unsubscribe", { channel_id });
        return action;
      }
      async comment(video_id, text) {
        Utils.throwIfMissing({ video_id, text });
        const action = await __privateGet(this, _actions).engage("comment/create_comment", { video_id, text });
        return action;
      }
      async translate(text, target_language, args = {}) {
        Utils.throwIfMissing({ text, target_language });
        const response = await await __privateGet(this, _actions).engage("comment/perform_comment_action", {
          video_id: args.video_id,
          comment_id: args.comment_id,
          target_language,
          comment_action: "translate",
          text
        });
        const translated_content = Utils.findNode(response.data, "frameworkUpdates", "content", 7, false);
        return {
          success: response.success,
          status_code: response.status_code,
          translated_content: translated_content.content,
          data: response.data
        };
      }
      async setNotificationPreferences(channel_id, type) {
        Utils.throwIfMissing({ channel_id, type });
        const action = await __privateGet(this, _actions).notifications("modify_channel_preference", { channel_id, pref: type || "NONE" });
        return action;
      }
    };
    _actions = new WeakMap();
    module2.exports = InteractionManager2;
  }
});

// lib/core/Feed.js
var require_Feed = __commonJS({
  "lib/core/Feed.js"(exports2, module2) {
    "use strict";
    var ResultsParser = require_contents();
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var _page, _continuation, _actions, _memo;
    var _Feed = class {
      constructor(actions, data, already_parsed = false) {
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _continuation, void 0);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _memo, void 0);
        if (data.on_response_received_actions || data.on_response_received_endpoints || already_parsed) {
          __privateSet(this, _page, data);
        } else {
          __privateSet(this, _page, ResultsParser.parseResponse(data));
        }
        __privateSet(this, _memo, __privateGet(this, _page).on_response_received_commands ? __privateGet(this, _page).on_response_received_commands_memo : __privateGet(this, _page).on_response_received_endpoints ? __privateGet(this, _page).on_response_received_endpoints_memo : __privateGet(this, _page).contents ? __privateGet(this, _page).contents_memo : __privateGet(this, _page).on_response_received_actions ? __privateGet(this, _page).on_response_received_actions_memo : []);
        __privateSet(this, _actions, actions);
      }
      static getVideosFromMemo(memo) {
        const videos = memo.get("Video") || [];
        const grid_videos = memo.get("GridVideo") || [];
        const compact_videos = memo.get("CompactVideo") || [];
        const playlist_videos = memo.get("PlaylistVideo") || [];
        const playlist_panel_videos = memo.get("PlaylistPanelVideo") || [];
        const watch_card_compact_videos = memo.get("WatchCardCompactVideo") || [];
        return [
          ...videos,
          ...grid_videos,
          ...compact_videos,
          ...playlist_videos,
          ...playlist_panel_videos,
          ...watch_card_compact_videos
        ];
      }
      static getPlaylistsFromMemo(memo) {
        const playlists = memo.get("Playlist") || [];
        const grid_playlists = memo.get("GridPlaylist") || [];
        return [...playlists, ...grid_playlists];
      }
      get videos() {
        return _Feed.getVideosFromMemo(__privateGet(this, _memo));
      }
      get posts() {
        return __privateGet(this, _memo).get("BackstagePost") || __privateGet(this, _memo).get("Post") || [];
      }
      get channels() {
        const channels = __privateGet(this, _memo).get("Channel") || [];
        const grid_channels = __privateGet(this, _memo).get("GridChannel") || [];
        return [...channels, ...grid_channels];
      }
      get playlists() {
        return _Feed.getPlaylistsFromMemo(__privateGet(this, _memo));
      }
      get memo() {
        return __privateGet(this, _memo);
      }
      get contents() {
        var _a, _b, _c, _d;
        const tab_content = (_b = (_a = __privateGet(this, _memo).get("Tab")) == null ? void 0 : _a[0]) == null ? void 0 : _b.content;
        const reload_continuation_items = (_c = __privateGet(this, _memo).get("reloadContinuationItemsCommand")) == null ? void 0 : _c[0];
        const append_continuation_items = (_d = __privateGet(this, _memo).get("appendContinuationItemsAction")) == null ? void 0 : _d[0];
        return tab_content || reload_continuation_items || append_continuation_items;
      }
      get shelves() {
        const shelf = __privateGet(this, _page).contents_memo.get("Shelf") || [];
        const rich_shelf = __privateGet(this, _page).contents_memo.get("RichShelf") || [];
        const reel_shelf = __privateGet(this, _page).contents_memo.get("ReelShelf") || [];
        return [...shelf, ...rich_shelf, ...reel_shelf];
      }
      getShelf(title) {
        return this.shelves.find((shelf) => shelf.title.toString() === title);
      }
      get secondary_contents() {
        var _a;
        return (_a = this.page.contents) == null ? void 0 : _a.secondary_contents;
      }
      get actions() {
        return __privateGet(this, _actions);
      }
      get page() {
        return __privateGet(this, _page);
      }
      get has_continuation() {
        return (__privateGet(this, _memo).get("ContinuationItem") || []).length > 0;
      }
      async getContinuationData() {
        if (__privateGet(this, _continuation)) {
          if (__privateGet(this, _continuation).length > 1)
            throw new InnertubeError2("There are too many continuations, you'll need to find the correct one yourself in this.page");
          if (__privateGet(this, _continuation).length === 0)
            throw new InnertubeError2("There are no continuations");
          const response = await __privateGet(this, _continuation)[0].endpoint.call(__privateGet(this, _actions));
          return response;
        }
        __privateSet(this, _continuation, __privateGet(this, _memo).get("ContinuationItem"));
        if (__privateGet(this, _continuation))
          return this.getContinuationData();
        return null;
      }
      async getContinuation() {
        const continuation_data = await this.getContinuationData();
        return new _Feed(this.actions, continuation_data, true);
      }
    };
    var Feed = _Feed;
    _page = new WeakMap();
    _continuation = new WeakMap();
    _actions = new WeakMap();
    _memo = new WeakMap();
    module2.exports = Feed;
  }
});

// lib/parser/youtube/Search.js
var require_Search = __commonJS({
  "lib/parser/youtube/Search.js"(exports2, module2) {
    "use strict";
    var Feed = require_Feed();
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var Search2 = class extends Feed {
      constructor(actions, data, already_parsed = false) {
        var _a, _b, _c;
        super(actions, data, already_parsed);
        const contents = ((_a = this.page.contents) == null ? void 0 : _a.primary_contents.contents) || this.page.on_response_received_commands[0].contents;
        const secondary_contents = (_c = (_b = this.page.contents) == null ? void 0 : _b.secondary_contents) == null ? void 0 : _c.contents;
        this.results = contents.get({ type: "ItemSection" }).contents;
        const card_list = this.results.get({ type: "HorizontalCardList" }, true);
        const universal_watch_card = secondary_contents == null ? void 0 : secondary_contents.get({ type: "UniversalWatchCard" });
        this.refinements = this.page.refinements || [];
        this.estimated_results = this.page.estimated_results;
        this.watch_card = {
          header: (universal_watch_card == null ? void 0 : universal_watch_card.header) || null,
          call_to_action: (universal_watch_card == null ? void 0 : universal_watch_card.call_to_action) || null,
          sections: (universal_watch_card == null ? void 0 : universal_watch_card.sections) || []
        };
        this.refinement_cards = {
          header: (card_list == null ? void 0 : card_list.header) || null,
          cards: (card_list == null ? void 0 : card_list.cards) || []
        };
      }
      async selectRefinementCard(card) {
        let target_card;
        if (typeof card === "string") {
          target_card = this.refinement_cards.cards.get({ query: card });
          if (!target_card)
            throw new InnertubeError2("Refinement card not found!", { available_cards: this.refinement_card_queries });
        } else if (card.type === "SearchRefinementCard") {
          target_card = card;
        } else {
          throw new InnertubeError2("Invalid refinement card!");
        }
        const page = await target_card.endpoint.call(this.actions);
        return new Search2(this.actions, page, true);
      }
      get refinement_card_queries() {
        return this.refinement_cards.cards.map((card) => card.query);
      }
      async getContinuation() {
        const continuation = await this.getContinuationData();
        return new Search2(this.actions, continuation, true);
      }
    };
    module2.exports = Search2;
  }
});

// lib/parser/youtube/LiveChat.js
var require_LiveChat2 = __commonJS({
  "lib/parser/youtube/LiveChat.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var EventEmitter2 = require("events");
    var _actions, _video_info, _continuation, _mcontinuation, _lc_polling_interval_ms, _md_polling_interval_ms, _pollLivechat, pollLivechat_fn, _emitSmoothedActions, emitSmoothedActions_fn, _pollMetadata, pollMetadata_fn, _wait, wait_fn;
    var LiveChat = class {
      constructor(video_info) {
        __privateAdd(this, _pollLivechat);
        __privateAdd(this, _emitSmoothedActions);
        __privateAdd(this, _pollMetadata);
        __privateAdd(this, _wait);
        __publicField(this, "ev");
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _video_info, void 0);
        __privateAdd(this, _continuation, void 0);
        __privateAdd(this, _mcontinuation, void 0);
        __privateAdd(this, _lc_polling_interval_ms, 1e3);
        __privateAdd(this, _md_polling_interval_ms, 5e3);
        __publicField(this, "initial_info");
        __publicField(this, "live_metadata");
        __publicField(this, "running", false);
        __publicField(this, "is_replay", false);
        __privateSet(this, _video_info, video_info);
        __privateSet(this, _actions, video_info.actions);
        __privateSet(this, _continuation, __privateGet(this, _video_info).livechat.continuation);
        this.is_replay = __privateGet(this, _video_info).livechat.is_replay;
        this.live_metadata = {
          title: null,
          description: null,
          views: null,
          likes: null,
          date: null
        };
        this.ev = new EventEmitter2();
      }
      start() {
        if (!this.running) {
          this.running = true;
          __privateMethod(this, _pollLivechat, pollLivechat_fn).call(this);
          __privateMethod(this, _pollMetadata, pollMetadata_fn).call(this);
        }
      }
      stop() {
        this.running = false;
      }
      async sendMessage(text) {
        const response = await __privateGet(this, _actions).livechat("live_chat/send_message", {
          text,
          ...{
            video_id: __privateGet(this, _video_info).basic_info.id,
            channel_id: __privateGet(this, _video_info).basic_info.channel_id
          }
        });
        const data = Parser.parseResponse(response.data);
        return data.actions;
      }
    };
    _actions = new WeakMap();
    _video_info = new WeakMap();
    _continuation = new WeakMap();
    _mcontinuation = new WeakMap();
    _lc_polling_interval_ms = new WeakMap();
    _md_polling_interval_ms = new WeakMap();
    _pollLivechat = new WeakSet();
    pollLivechat_fn = function() {
      const lc_poller = setTimeout(() => {
        (async () => {
          const endpoint = this.is_replay ? "live_chat/get_live_chat_replay" : "live_chat/get_live_chat";
          const response = await __privateGet(this, _actions).livechat(endpoint, { ctoken: __privateGet(this, _continuation) });
          const data = Parser.parseResponse(response.data);
          const contents = data.continuation_contents;
          __privateSet(this, _continuation, contents.continuation.token);
          __privateSet(this, _lc_polling_interval_ms, contents.continuation.timeout_ms);
          if (contents.header) {
            this.initial_info = contents;
            this.ev.emit("start", contents);
          } else {
            await __privateMethod(this, _emitSmoothedActions, emitSmoothedActions_fn).call(this, contents.actions);
          }
          clearTimeout(lc_poller);
          this.running && __privateMethod(this, _pollLivechat, pollLivechat_fn).call(this);
        })().catch((err) => Promise.reject(err));
      }, __privateGet(this, _lc_polling_interval_ms));
    };
    _emitSmoothedActions = new WeakSet();
    emitSmoothedActions_fn = async function(actions) {
      const base = 1e4;
      let delay = actions.length < base / 80 ? 1 : 0;
      const emit_delay_ms = delay == 1 ? (delay = base / actions.length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
      for (const action of actions) {
        await __privateMethod(this, _wait, wait_fn).call(this, emit_delay_ms);
        this.ev.emit("chat-update", action);
      }
    };
    _pollMetadata = new WeakSet();
    pollMetadata_fn = function() {
      const md_poller = setTimeout(() => {
        (async () => {
          var _a, _b, _c, _d, _e;
          const payload = { video_id: __privateGet(this, _video_info).basic_info.id };
          if (__privateGet(this, _mcontinuation)) {
            payload.ctoken = __privateGet(this, _mcontinuation);
          }
          const response = await __privateGet(this, _actions).livechat("updated_metadata", payload);
          const data = Parser.parseResponse(response.data);
          __privateSet(this, _mcontinuation, data.continuation.token);
          __privateSet(this, _md_polling_interval_ms, data.continuation.timeout_ms);
          this.metadata = {
            title: data.actions.get({ type: "UpdateTitleAction" }) || ((_a = this.metadata) == null ? void 0 : _a.title),
            description: data.actions.get({ type: "UpdateDescriptionAction" }) || ((_b = this.metadata) == null ? void 0 : _b.description),
            views: data.actions.get({ type: "UpdateViewershipAction" }) || ((_c = this.metadata) == null ? void 0 : _c.views),
            likes: data.actions.get({ type: "UpdateToggleButtonTextAction" }) || ((_d = this.metadata) == null ? void 0 : _d.likes),
            date: data.actions.get({ type: "UpdateDateTextAction" }) || ((_e = this.metadata) == null ? void 0 : _e.date)
          };
          this.ev.emit("metadata-update", this.metadata);
          clearTimeout(md_poller);
          this.running && __privateMethod(this, _pollMetadata, pollMetadata_fn).call(this);
        })().catch((err) => Promise.reject(err));
      }, __privateGet(this, _md_polling_interval_ms));
    };
    _wait = new WeakSet();
    wait_fn = async function(ms) {
      return new Promise((resolve) => setTimeout(() => resolve(), ms));
    };
    module2.exports = LiveChat;
  }
});

// lib/parser/youtube/VideoInfo.js
var require_VideoInfo = __commonJS({
  "lib/parser/youtube/VideoInfo.js"(exports2, module2) {
    "use strict";
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var { PassThrough: PassThrough2, Readable } = false ? null : require("stream");
    var Axios = require("../node_modules/axios/index.js");
    var Parser = require_contents();
    var LiveChat = require_LiveChat2();
    var Constants = require_Constants();
    var CancelToken = Axios.CancelToken;
    var _page, _actions, _player2, _cpn, _watch_next_continuation;
    var VideoInfo2 = class {
      constructor(data, actions, player, cpn) {
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _player2, void 0);
        __privateAdd(this, _cpn, void 0);
        __privateAdd(this, _watch_next_continuation, void 0);
        var _a, _b, _c, _d, _e, _f;
        __privateSet(this, _actions, actions);
        __privateSet(this, _player2, player);
        __privateSet(this, _cpn, cpn);
        const info = Parser.parseResponse(data[0]);
        const next = Parser.parseResponse(data[1].data || {});
        __privateSet(this, _page, [info, next]);
        if (info.playability_status.status === "ERROR")
          throw new InnertubeError2("This video is unavailable", info.playability_status);
        this.basic_info = {
          ...info.video_details,
          ...{
            embed: info.microformat.embed,
            channel: info.microformat.channel,
            is_unlisted: info.microformat.is_unlisted,
            is_family_safe: info.microformat.is_family_safe,
            has_ypc_metadata: info.microformat.has_ypc_metadata
          }
        };
        this.streaming_data = info.streaming_data || null;
        this.playability_status = info.playability_status;
        this.annotations = info.annotations;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        this.captions = info.captions;
        this.cards = info.cards;
        const results = (_a = next.contents) == null ? void 0 : _a.results;
        const secondary_results = (_b = next.contents) == null ? void 0 : _b.secondary_results;
        if (results && secondary_results) {
          this.primary_info = results.get({ type: "VideoPrimaryInfo" });
          this.secondary_info = results.get({ type: "VideoSecondaryInfo" });
          this.merchandise = (results == null ? void 0 : results.get({ type: "MerchandiseShelf" })) || null;
          this.related_chip_cloud = (_c = secondary_results == null ? void 0 : secondary_results.get({ type: "RelatedChipCloud" })) == null ? void 0 : _c.content;
          this.watch_next_feed = (_d = secondary_results == null ? void 0 : secondary_results.get({ type: "ItemSection" })) == null ? void 0 : _d.contents;
          __privateSet(this, _watch_next_continuation, (_e = this.watch_next_feed) == null ? void 0 : _e.pop());
          this.player_overlays = next.player_overlays;
          this.basic_info.like_count = this.primary_info.menu.top_level_buttons.get({ icon_type: "LIKE" }).like_count;
          this.basic_info.is_liked = this.primary_info.menu.top_level_buttons.get({ icon_type: "LIKE" }).is_toggled;
          this.basic_info.is_disliked = this.primary_info.menu.top_level_buttons.get({ icon_type: "DISLIKE" }).is_toggled;
          const comments_entry_point = results.get({ target_id: "comments-entry-point" });
          this.comments_entry_point_header = (comments_entry_point == null ? void 0 : comments_entry_point.contents.get({ type: "CommentsEntryPointHeader" })) || null;
          this.livechat = ((_f = next.contents_memo.get("LiveChat")) == null ? void 0 : _f[0]) || null;
        }
      }
      async selectFilter(name) {
        if (!this.filters.includes(name))
          throw new InnertubeError2("Invalid filter", { available_filters: this.filters });
        const filter = this.related_chip_cloud.chips.get({ text: name });
        if (filter.is_selected)
          return this;
        const response = await filter.endpoint.call(__privateGet(this, _actions));
        const data = response.on_response_received_endpoints.get({ target_id: "watch-next-feed" });
        this.watch_next_feed = data.contents;
        return this;
      }
      async getWatchNextContinuation() {
        const response = await __privateGet(this, _watch_next_continuation).endpoint.call(__privateGet(this, _actions));
        const data = response.on_response_received_endpoints.get({ type: "appendContinuationItemsAction" });
        this.watch_next_feed = data.contents;
        __privateSet(this, _watch_next_continuation, this.watch_next_feed.pop());
        return this.watch_next_feed;
      }
      async like() {
        const button = this.primary_info.menu.top_level_buttons.get({ button_id: "TOGGLE_BUTTON_ID_TYPE_LIKE" });
        if (button.is_toggled)
          throw new InnertubeError2("This video is already liked", { video_id: this.basic_info.id });
        const response = await button.endpoint.call(__privateGet(this, _actions));
        return response;
      }
      async dislike() {
        const button = this.primary_info.menu.top_level_buttons.get({ button_id: "TOGGLE_BUTTON_ID_TYPE_DISLIKE" });
        if (button.is_toggled)
          throw new InnertubeError2("This video is already disliked", { video_id: this.basic_info.id });
        const response = await button.endpoint.call(__privateGet(this, _actions));
        return response;
      }
      async removeLike() {
        const button = this.primary_info.menu.top_level_buttons.get({ is_toggled: true });
        if (!button)
          throw new InnertubeError2("This video is not liked/disliked", { video_id: this.basic_info.id });
        const response = await button.toggled_endpoint.call(__privateGet(this, _actions));
        return response;
      }
      async getLiveChat(mode) {
        if (!this.livechat)
          throw new InnertubeError2("Live Chat is not available", { video_id: this.id });
        return new LiveChat(this, mode);
      }
      get filters() {
        var _a;
        return ((_a = this.related_chip_cloud) == null ? void 0 : _a.chips.map((chip) => chip.text.toString())) || [];
      }
      get actions() {
        return __privateGet(this, _actions);
      }
      get page() {
        return __privateGet(this, _page);
      }
      get music_tracks() {
        const metadata = this.secondary_info.metadata;
        if (!metadata)
          return [];
        const songs = [];
        let current_song = {};
        let is_music_section = false;
        for (let i = 0; i < metadata.rows.length; i++) {
          const row = metadata.rows[i];
          if (row.type === "MetadataRowHeader") {
            if (row.content.toString().toLowerCase().startsWith("music")) {
              is_music_section = true;
              i++;
            }
            continue;
          }
          if (!is_music_section)
            continue;
          current_song[row.title.toString().toLowerCase().replace(/ /g, "_")] = row.contents;
          if (row.has_divider_line) {
            songs.push(current_song);
            current_song = {};
          }
        }
        if (is_music_section)
          songs.push(current_song);
        return songs;
      }
      chooseFormat(options) {
        const formats = [
          ...this.streaming_data.formats || [],
          ...this.streaming_data.adaptive_formats || []
        ];
        const requires_audio = options.type.includes("audio");
        const requires_video = options.type.includes("video");
        let best_width = -1;
        const is_best = ["best", "bestefficiency"].includes(options.quality);
        const use_most_efficient = options.quality !== "best";
        let candidates = formats.filter((format) => {
          if (requires_audio && !format.has_audio)
            return false;
          if (requires_video && !format.has_video)
            return false;
          if (options.format !== "any" && !format.mime_type.includes(options.format))
            return false;
          if (!is_best && format.quality_label !== options.quality)
            return false;
          if (best_width < format.width)
            best_width = format.width;
          return true;
        });
        if (candidates.length === 0) {
          throw new InnertubeError2("No matching formats found", {
            options
          });
        }
        if (is_best && requires_video)
          candidates = candidates.filter((format) => format.width === best_width);
        if (requires_audio && !requires_video) {
          const audio_only = candidates.filter((format) => !format.has_video);
          if (audio_only.length > 0) {
            candidates = audio_only;
          }
        }
        if (use_most_efficient) {
          candidates.sort((a, b) => a.bitrate - b.bitrate);
        } else {
          candidates.sort((a, b) => b.bitrate - a.bitrate);
        }
        return candidates[0];
      }
      download(options = {}, _stream) {
        const stream = _stream ? _stream : new PassThrough2();
        let cancel;
        let cancelled = false;
        (async () => {
          if (this.playability_status === "UNPLAYABLE")
            return stream.emit("error", new InnertubeError2("Video is unplayable", { video: this, error_type: "UNPLAYABLE" }));
          if (this.playability_status === "LOGIN_REQUIRED")
            return stream.emit("error", new InnertubeError2("Video is login required", { video: this, error_type: "LOGIN_REQUIRED" }));
          if (!this.streaming_data)
            return stream.emit("error", new InnertubeError2("Streaming data not available.", { video: this, error_type: "NO_STREAMING_DATA" }));
          const opts = {
            quality: "360p",
            type: "videoandaudio",
            format: "mp4",
            range: void 0,
            ...options
          };
          const format = this.chooseFormat(opts);
          const format_url = format.decipher(__privateGet(this, _player2));
          if (opts.type === "videoandaudio" && !options.range) {
            const response = await Axios.get(`${format_url}&cpn=${__privateGet(this, _cpn)}`, {
              responseType: "stream",
              cancelToken: new CancelToken(function executor(c) {
                cancel = c;
              }),
              headers: Constants.STREAM_HEADERS
            }).catch((error) => error);
            if (response instanceof Error) {
              stream.emit("error", new InnertubeError2(response.message, { type: "REQUEST_FAILED" }));
              return stream;
            }
            stream.emit("start");
            let downloaded_size = 0;
            if (typeof response.data === "object") {
              response.data.on("data", (chunk) => {
                downloaded_size += chunk.length;
                const size = (format.content_length / 1024 / 1024).toFixed(2);
                const percentage = Math.floor(downloaded_size / format.content_length * 100);
                stream.emit("progress", {
                  size,
                  percentage,
                  chunk_size: chunk.length,
                  downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
                  raw_data: {
                    chunk_size: chunk.length,
                    downloaded: downloaded_size,
                    size: response.headers["content-length"]
                  }
                });
              });
              response.data.on("error", (err) => {
                cancelled && stream.emit("error", new InnertubeError2("The download was cancelled.", { type: "DOWNLOAD_CANCELLED" })) || stream.emit("error", new InnertubeError2(err.message, { type: "DOWNLOAD_ABORTED" }));
              });
              response.data.pipe(stream, { end: true });
            } else {
              const readable = new Readable();
              readable.push(response.data);
              readable.pipe(stream, { end: true });
            }
          } else {
            const chunk_size = 1048576 * 10;
            let chunk_start = options.range ? options.range.start : 0;
            let chunk_end = options.range ? options.range.end : chunk_size;
            let downloaded_size = 0;
            let must_end = false;
            stream.emit("start");
            const downloadChunk = async () => {
              if (chunk_end >= format.content_length || options.range) {
                must_end = true;
              }
              if (options.range) {
                format.content_length = options.range.end;
              }
              const response = await Axios.get(`${format_url}&cpn=${__privateGet(this, _cpn)}&range=${chunk_start}-${chunk_end || ""}`, {
                responseType: "stream",
                cancelToken: new CancelToken(function executor(c) {
                  cancel = c;
                }),
                headers: Constants.STREAM_HEADERS
              }).catch((error) => error);
              if (response instanceof Error) {
                stream.emit("error", { message: response.message, type: "REQUEST_FAILED" });
                return stream;
              }
              if (typeof response.data === "object") {
                response.data.on("data", (chunk) => {
                  downloaded_size += chunk.length;
                  const size = (format.content_length / 1024 / 1024).toFixed(2);
                  const percentage = Math.floor(downloaded_size / format.content_length * 100);
                  stream.emit("progress", {
                    size,
                    percentage,
                    chunk_size: chunk.length,
                    downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
                    raw_data: {
                      chunk_size: chunk.length,
                      downloaded: downloaded_size,
                      size: response.headers["content-length"]
                    }
                  });
                });
                response.data.on("error", (err) => {
                  cancelled && stream.emit("error", { message: "The download was cancelled.", type: "DOWNLOAD_CANCELLED" }) || stream.emit("error", { message: err.message, type: "DOWNLOAD_ABORTED" });
                });
                response.data.on("end", () => {
                  if (!must_end && !options.range) {
                    chunk_start = chunk_end + 1;
                    chunk_end += chunk_size;
                    downloadChunk();
                  }
                });
                response.data.pipe(stream, { end: must_end });
              } else {
                const readable = new Readable();
                readable.push(response.data);
                readable.pipe(stream, { end: must_end });
              }
            };
            downloadChunk();
          }
        })().catch((err) => {
          stream.emit("error", err);
        });
        stream.cancel = () => {
          cancelled = true;
          cancel && cancel();
        };
        return stream;
      }
    };
    _page = new WeakMap();
    _actions = new WeakMap();
    _player2 = new WeakMap();
    _cpn = new WeakMap();
    _watch_next_continuation = new WeakMap();
    module2.exports = VideoInfo2;
  }
});

// lib/core/TabbedFeed.js
var require_TabbedFeed = __commonJS({
  "lib/core/TabbedFeed.js"(exports2, module2) {
    "use strict";
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var Feed = require_Feed();
    var _tabs, _actions;
    var _TabbedFeed = class extends Feed {
      constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        __privateAdd(this, _tabs, void 0);
        __privateAdd(this, _actions, void 0);
        __privateSet(this, _actions, actions);
        __privateSet(this, _tabs, this.page.contents_memo.get("Tab"));
      }
      get tabs() {
        return __privateGet(this, _tabs).map((tab) => tab.title.toString());
      }
      async getTab(title) {
        const tab = __privateGet(this, _tabs).find((tab2) => tab2.title.toLowerCase() === title.toLowerCase());
        if (!tab)
          throw new InnertubeError2(`Tab "${title}" not found`);
        if (tab.selected)
          return this;
        const response = await tab.endpoint.call(__privateGet(this, _actions));
        return new _TabbedFeed(__privateGet(this, _actions), response, true);
      }
      get title() {
        var _a, _b;
        return (_b = (_a = this.page.contents_memo("Tab")) == null ? void 0 : _a.find((tab) => tab.selected)) == null ? void 0 : _b.title.toString();
      }
    };
    var TabbedFeed2 = _TabbedFeed;
    _tabs = new WeakMap();
    _actions = new WeakMap();
    module2.exports = TabbedFeed2;
  }
});

// lib/parser/youtube/Channel.js
var require_Channel2 = __commonJS({
  "lib/parser/youtube/Channel.js"(exports2, module2) {
    "use strict";
    var TabbedFeed2 = require_TabbedFeed();
    var _tab;
    var _Channel = class extends TabbedFeed2 {
      constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        __privateAdd(this, _tab, void 0);
        this.header = {
          author: this.page.header.author,
          subscribers: this.page.header.subscribers.toString(),
          banner: this.page.header.banner,
          tv_banner: this.page.header.tv_banner,
          mobile_banner: this.page.header.mobile_banner,
          header_links: this.page.header.header_links
        };
        this.metadata = { ...this.page.metadata, ...this.page.microformat };
        this.sponsor_button = this.page.header.sponsor_button || null;
        this.subscribe_button = this.page.header.subscribe_button || null;
        const tab = this.page.contents.tabs.get({ selected: true });
        this.current_tab = tab;
      }
      async getVideos() {
        const tab = await this.getTab("Videos");
        return new _Channel(this.actions, tab.page, true);
      }
      async getPlaylists() {
        const tab = await this.getTab("Playlists");
        return new _Channel(this.actions, tab.page, true);
      }
      async getHome() {
        const tab = await this.getTab("Home");
        return new _Channel(this.actions, tab.page, true);
      }
      async getCommunity() {
        const tab = await this.getTab("Community");
        return new _Channel(this.actions, tab.page, true);
      }
      async getChannels() {
        const tab = await this.getTab("Channels");
        return new _Channel(this.actions, tab.page, true);
      }
      async getAbout() {
        var _a;
        const tab = await this.getTab("About");
        return (_a = tab.memo.get("ChannelAboutFullMetadata")) == null ? void 0 : _a[0];
      }
    };
    var Channel2 = _Channel;
    _tab = new WeakMap();
    module2.exports = Channel2;
  }
});

// lib/parser/youtube/Playlist.js
var require_Playlist2 = __commonJS({
  "lib/parser/youtube/Playlist.js"(exports2, module2) {
    "use strict";
    var Feed = require_Feed();
    var _getStat, getStat_fn;
    var Playlist2 = class extends Feed {
      constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        __privateAdd(this, _getStat);
        const primary_info = this.page.sidebar.contents.get({ type: "PlaylistSidebarPrimaryInfo" });
        const secondary_info = this.page.sidebar.contents.get({ type: "PlaylistSidebarSecondaryInfo" });
        this.info = {
          ...this.page.metadata,
          ...{
            author: secondary_info.owner.author,
            thumbnails: primary_info.thumbnail_renderer.thumbnail,
            total_items: __privateMethod(this, _getStat, getStat_fn).call(this, 0, primary_info),
            views: __privateMethod(this, _getStat, getStat_fn).call(this, 1, primary_info),
            last_updated: __privateMethod(this, _getStat, getStat_fn).call(this, 2, primary_info),
            can_share: this.page.header.can_share,
            can_delete: this.page.header.can_delete,
            is_editable: this.page.header.is_editable,
            privacy: this.page.header.privacy
          }
        };
        this.menu = primary_info.menu;
        this.endpoint = primary_info.endpoint;
      }
      get items() {
        return this.videos;
      }
    };
    _getStat = new WeakSet();
    getStat_fn = function(index, primary_info) {
      var _a;
      if (!primary_info || !primary_info.stats)
        return "N/A";
      return ((_a = primary_info.stats[index]) == null ? void 0 : _a.toString()) || "N/A";
    };
    module2.exports = Playlist2;
  }
});

// lib/parser/youtube/History.js
var require_History = __commonJS({
  "lib/parser/youtube/History.js"(exports2, module2) {
    "use strict";
    var Feed = require_Feed();
    var History2 = class extends Feed {
      constructor(actions, data, already_parsed = false) {
        var _a;
        super(actions, data, already_parsed);
        this.sections = this.memo.get("ItemSection");
        this.feed_actions = ((_a = this.memo.get("BrowseFeedActions")) == null ? void 0 : _a[0]) || [];
      }
      async getContinuation() {
        const continuation = await this.getContinuationData();
        return new History2(this.actions, continuation, true);
      }
    };
    module2.exports = History2;
  }
});

// lib/parser/youtube/Library.js
var require_Library = __commonJS({
  "lib/parser/youtube/Library.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var History2 = require_History();
    var Playlist2 = require_Playlist2();
    var Feed = require_Feed();
    var { observe } = require_Utils();
    var _actions, _page, _getAll, getAll_fn;
    var Library2 = class {
      constructor(response, actions) {
        __privateAdd(this, _getAll);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _page, void 0);
        __privateSet(this, _actions, actions);
        __privateSet(this, _page, Parser.parseResponse(response));
        const tab = __privateGet(this, _page).contents.tabs.get({ selected: true });
        const shelves = tab.content.contents.map((section) => section.contents[0]);
        const stats = __privateGet(this, _page).contents.secondary_contents.items.get({ type: "ProfileColumnStats" }).items;
        const user_info = __privateGet(this, _page).contents.secondary_contents.items.get({ type: "ProfileColumnUserInfo" });
        this.profile = { stats, user_info };
        this.sections = observe(shelves.map((shelf) => ({
          type: shelf.icon_type,
          title: shelf.title,
          contents: shelf.content.items,
          getAll: () => __privateMethod(this, _getAll, getAll_fn).call(this, shelf)
        })));
      }
      get history() {
        return this.sections.get({ type: "WATCH_HISTORY" });
      }
      get watch_later() {
        return this.sections.get({ type: "WATCH_LATER" });
      }
      get liked_videos() {
        return this.sections.get({ type: "LIKE" });
      }
      get playlists() {
        return this.sections.get({ type: "PLAYLISTS" });
      }
      get clips() {
        return this.sections.get({ type: "CONTENT_CUT" });
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    _actions = new WeakMap();
    _page = new WeakMap();
    _getAll = new WeakSet();
    getAll_fn = async function(shelf) {
      var _a;
      if (!((_a = shelf.menu) == null ? void 0 : _a.top_level_buttons))
        throw new Error(`The ${shelf.title.text} section doesn't have more items`);
      const button = await shelf.menu.top_level_buttons.get({ text: "See all" });
      const page = await button.endpoint.call(__privateGet(this, _actions));
      switch (shelf.icon_type) {
        case "LIKE":
        case "WATCH_LATER":
          return new Playlist2(__privateGet(this, _actions), page, true);
        case "WATCH_HISTORY":
          return new History2(__privateGet(this, _actions), page, true);
        case "CONTENT_CUT":
          return new Feed(__privateGet(this, _actions), page, true);
        default:
      }
    };
    module2.exports = Library2;
  }
});

// lib/parser/youtube/Comments.js
var require_Comments = __commonJS({
  "lib/parser/youtube/Comments.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var _page, _actions, _continuation;
    var _Comments = class {
      constructor(actions, data, already_parsed = false) {
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _continuation, void 0);
        __privateSet(this, _page, already_parsed ? data : Parser.parseResponse(data));
        __privateSet(this, _actions, actions);
        const contents = __privateGet(this, _page).on_response_received_endpoints;
        this.header = contents[0].contents.get({ type: "CommentsHeader" });
        const threads = contents[1].contents.findAll({ type: "CommentThread" });
        this.contents = threads.map((thread) => {
          thread.comment.setActions(__privateGet(this, _actions));
          thread.setActions(__privateGet(this, _actions));
          return thread;
        });
        __privateSet(this, _continuation, contents[1].contents.get({ type: "ContinuationItem" }));
      }
      async comment(text) {
        const button = this.header.create_renderer.submit_button;
        const payload = {
          params: {
            commentText: text
          },
          parse: false
        };
        const response = await button.endpoint.callTest(__privateGet(this, _actions), payload);
        return response;
      }
      async getContinuation() {
        if (!__privateGet(this, _continuation))
          throw new InnertubeError2("Continuation not found");
        const data = await __privateGet(this, _continuation).endpoint.callTest(__privateGet(this, _actions));
        const page = Object.assign({}, __privateGet(this, _page));
        page.on_response_received_endpoints.pop();
        page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
        return new _Comments(__privateGet(this, _actions), page, true);
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    var Comments2 = _Comments;
    _page = new WeakMap();
    _actions = new WeakMap();
    _continuation = new WeakMap();
    module2.exports = Comments2;
  }
});

// lib/parser/ytmusic/Search.js
var require_Search2 = __commonJS({
  "lib/parser/ytmusic/Search.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var { observe, InnertubeError: InnertubeError2 } = require_Utils();
    var _page, _actions, _continuation, _header, _getMore, getMore_fn;
    var _Search = class {
      constructor(response, actions, args = {}) {
        __privateAdd(this, _getMore);
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _continuation, void 0);
        __privateAdd(this, _header, void 0);
        __privateSet(this, _actions, actions);
        __privateSet(this, _page, args.is_continuation && response || Parser.parseResponse(response.data));
        const tab = __privateGet(this, _page).contents.tabs.get({ selected: true });
        const shelves = tab.content.contents;
        const item_section = shelves.get({ type: "ItemSection" });
        __privateSet(this, _header, tab.content.header);
        this.did_you_mean = (item_section == null ? void 0 : item_section.contents.get({ type: "DidYouMean" })) || null;
        this.showing_results_for = (item_section == null ? void 0 : item_section.contents.get({ type: "ShowingResultsFor" })) || null;
        (!!this.did_you_mean || !!this.showing_results_for) && shelves.shift();
        if (args.is_continuation || args.is_filtered) {
          const shelf = shelves.get({ type: "MusicShelf" });
          this.results = shelf.contents;
          __privateSet(this, _continuation, shelf.continuation);
          return;
        }
        this.sections = observe(shelves.map((shelf) => ({
          title: shelf.title,
          contents: shelf.contents,
          getMore: () => __privateMethod(this, _getMore, getMore_fn).call(this, shelf)
        })));
      }
      async getContinuation() {
        var _a, _b, _c;
        if (!__privateGet(this, _continuation))
          throw new InnertubeError2("Looks like you've reached the end");
        const response = await __privateGet(this, _actions).search({ ctoken: __privateGet(this, _continuation), client: "YTMUSIC" });
        const data = response.data.continuationContents.musicShelfContinuation;
        this.results = Parser.parse(data.contents);
        __privateSet(this, _continuation, (_c = (_b = (_a = data == null ? void 0 : data.continuations) == null ? void 0 : _a[0]) == null ? void 0 : _b.nextContinuationData) == null ? void 0 : _c.continuation);
        return this;
      }
      async selectFilter(name) {
        if (!this.filters.includes(name))
          throw new InnertubeError2("Invalid filter", { available_filters: this.filters });
        const filter = __privateGet(this, _header).chips.get({ text: name });
        if (filter.is_selected)
          return this;
        const response = await filter.endpoint.call(__privateGet(this, _actions), "YTMUSIC");
        return new _Search(response, __privateGet(this, _actions), { is_continuation: true });
      }
      get has_continuation() {
        return !!__privateGet(this, _continuation);
      }
      get filters() {
        return __privateGet(this, _header).chips.map((chip) => chip.text);
      }
      get songs() {
        return this.sections.get({ title: "Songs" });
      }
      get videos() {
        return this.sections.get({ title: "Videos" });
      }
      get albums() {
        return this.sections.get({ title: "Albums" });
      }
      get artists() {
        return this.sections.get({ title: "Artists" });
      }
      get playlists() {
        return this.sections.get({ title: "Community playlists" });
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    var Search2 = _Search;
    _page = new WeakMap();
    _actions = new WeakMap();
    _continuation = new WeakMap();
    _header = new WeakMap();
    _getMore = new WeakSet();
    getMore_fn = async function(shelf) {
      if (!shelf.endpoint)
        throw new InnertubeError2(`${shelf.title} doesn't have more items`);
      const response = await shelf.endpoint.call(__privateGet(this, _actions), "YTMUSIC");
      return new _Search(response, __privateGet(this, _actions), { is_continuation: true });
    };
    module2.exports = Search2;
  }
});

// lib/parser/ytmusic/HomeFeed.js
var require_HomeFeed = __commonJS({
  "lib/parser/ytmusic/HomeFeed.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _page, _actions, _continuation;
    var _HomeFeed = class {
      constructor(response, actions) {
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _actions, void 0);
        __privateAdd(this, _continuation, void 0);
        var _a, _b;
        __privateSet(this, _actions, actions);
        __privateSet(this, _page, Parser.parseResponse(response.data));
        const tab = __privateGet(this, _page).contents.tabs.get({ title: "Home" });
        __privateSet(this, _continuation, ((_a = tab.content) == null ? void 0 : _a.continuation) || __privateGet(this, _page).continuation_contents.continuation);
        this.sections = ((_b = tab.content) == null ? void 0 : _b.contents) || __privateGet(this, _page).continuation_contents.contents;
      }
      async getContinuation() {
        const response = await __privateGet(this, _actions).browse(__privateGet(this, _continuation), { is_ctoken: true, client: "YTMUSIC" });
        return new _HomeFeed(response, __privateGet(this, _actions));
      }
    };
    var HomeFeed = _HomeFeed;
    _page = new WeakMap();
    _actions = new WeakMap();
    _continuation = new WeakMap();
    module2.exports = HomeFeed;
  }
});

// lib/parser/ytmusic/Explore.js
var require_Explore = __commonJS({
  "lib/parser/ytmusic/Explore.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _page;
    var Explore = class {
      constructor(response) {
        __privateAdd(this, _page, void 0);
        __privateSet(this, _page, Parser.parseResponse(response.data));
        const tab = this.page.contents.tabs.get({ selected: true });
        this.top_buttons = tab.content.contents.get({ type: "Grid" }).items;
        this.sections = tab.content.contents.findAll({ type: "MusicCarouselShelf" });
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    _page = new WeakMap();
    module2.exports = Explore;
  }
});

// lib/parser/ytmusic/Library.js
var require_Library2 = __commonJS({
  "lib/parser/ytmusic/Library.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _page;
    var Library2 = class {
      constructor(response) {
        __privateAdd(this, _page, void 0);
        __privateSet(this, _page, Parser.parseResponse(response.data));
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    _page = new WeakMap();
    module2.exports = Library2;
  }
});

// lib/parser/ytmusic/Artist.js
var require_Artist = __commonJS({
  "lib/parser/ytmusic/Artist.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var { observe } = require_Utils();
    var _page, _actions;
    var Artist = class {
      constructor(response, actions) {
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _actions, void 0);
        __privateSet(this, _page, Parser.parseResponse(response.data));
        __privateSet(this, _actions, actions);
        this.header = this.page.header;
        const music_shelf = __privateGet(this, _page).contents_memo.get("MusicShelf");
        const music_carousel_shelf = __privateGet(this, _page).contents_memo.get("MusicCarouselShelf");
        this.sections = observe([...music_shelf, ...music_carousel_shelf]);
      }
      async getAllSongs() {
        var _a;
        const shelf = this.sections.get({ type: "MusicShelf" });
        const page = await shelf.endpoint.call(__privateGet(this, _actions), "YTMUSIC");
        return ((_a = page.contents_memo.get("MusicPlaylistShelf")) == null ? void 0 : _a[0]) || [];
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    _page = new WeakMap();
    _actions = new WeakMap();
    module2.exports = Artist;
  }
});

// lib/parser/ytmusic/Album.js
var require_Album = __commonJS({
  "lib/parser/ytmusic/Album.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var _page, _actions;
    var Album = class {
      constructor(response, actions) {
        __privateAdd(this, _page, void 0);
        __privateAdd(this, _actions, void 0);
        var _a;
        __privateSet(this, _page, Parser.parseResponse(response.data));
        __privateSet(this, _actions, actions);
        this.header = __privateGet(this, _page).header;
        this.url = __privateGet(this, _page).microformat.url_canonical;
        this.contents = (_a = __privateGet(this, _page).contents_memo.get("MusicShelf")) == null ? void 0 : _a[0].contents;
        this.sections = __privateGet(this, _page).contents_memo.get("MusicCarouselShelf") || [];
      }
      get page() {
        return __privateGet(this, _page);
      }
    };
    _page = new WeakMap();
    _actions = new WeakMap();
    module2.exports = Album;
  }
});

// lib/core/Music.js
var require_Music = __commonJS({
  "lib/core/Music.js"(exports2, module2) {
    "use strict";
    var Parser = require_contents();
    var Search2 = require_Search2();
    var HomeFeed = require_HomeFeed();
    var Explore = require_Explore();
    var Library2 = require_Library2();
    var Artist = require_Artist();
    var Album = require_Album();
    var { InnertubeError: InnertubeError2, observe } = require_Utils();
    var _session, _actions;
    var Music = class {
      constructor(session) {
        __privateAdd(this, _session, void 0);
        __privateAdd(this, _actions, void 0);
        __privateSet(this, _session, session);
        __privateSet(this, _actions, session.actions);
      }
      async search(query, filters) {
        const response = await __privateGet(this, _actions).search({ query, filters, client: "YTMUSIC" });
        return new Search2(response, __privateGet(this, _actions), { is_filtered: (filters == null ? void 0 : filters.hasOwnProperty("type")) && filters.type !== "all" });
      }
      async getHomeFeed() {
        const response = await __privateGet(this, _actions).browse("FEmusic_home", { client: "YTMUSIC" });
        return new HomeFeed(response, __privateGet(this, _actions));
      }
      async getExplore() {
        const response = await __privateGet(this, _actions).browse("FEmusic_explore", { client: "YTMUSIC" });
        return new Explore(response, __privateGet(this, _actions));
      }
      async getLibrary() {
        const response = await __privateGet(this, _actions).browse("FEmusic_liked_albums", { client: "YTMUSIC" });
        return new Library2(response, __privateGet(this, _actions));
      }
      async getArtist(artist_id) {
        if (!artist_id.startsWith("UC"))
          throw new InnertubeError2("Invalid artist id", artist_id);
        const response = await __privateGet(this, _actions).browse(artist_id, { client: "YTMUSIC" });
        return new Artist(response, __privateGet(this, _actions));
      }
      async getAlbum(album_id) {
        if (!album_id.startsWith("MPR"))
          throw new InnertubeError2("Invalid album id", album_id);
        const response = await __privateGet(this, _actions).browse(album_id, { client: "YTMUSIC" });
        return new Album(response, __privateGet(this, _actions));
      }
      async getLyrics(video_id) {
        const response = await __privateGet(this, _actions).next({ video_id, client: "YTMUSIC" });
        const data = Parser.parseResponse(response.data);
        const tab = data.contents.tabs.get({ title: "Lyrics" });
        const page = await tab.endpoint.call(__privateGet(this, _actions), "YTMUSIC");
        if (!page)
          throw new InnertubeError2("Invalid video id");
        if (page.contents.constructor.name === "Message")
          throw new InnertubeError2(page.contents.text, video_id);
        const description_shelf = page.contents.contents.get({ type: "MusicDescriptionShelf" });
        return {
          text: description_shelf.description.toString(),
          footer: description_shelf.footer
        };
      }
      async getUpNext(video_id) {
        const response = await __privateGet(this, _actions).next({ video_id, client: "YTMUSIC" });
        const data = Parser.parseResponse(response.data);
        const tab = data.contents.tabs.get({ title: "Up next" });
        const upnext_content = tab.content.content;
        if (!upnext_content)
          throw new InnertubeError2("Invalid id", video_id);
        return {
          id: upnext_content.playlist_id,
          title: upnext_content.title,
          is_editable: upnext_content.is_editable,
          contents: observe(upnext_content.contents)
        };
      }
      async getRelated(video_id) {
        const response = await __privateGet(this, _actions).next({ video_id, client: "YTMUSIC" });
        const data = Parser.parseResponse(response.data);
        const tab = data.contents.tabs.get({ title: "Related" });
        const page = await tab.endpoint.call(__privateGet(this, _actions), "YTMUSIC");
        if (!page)
          throw new InnertubeError2("Invalid video id");
        const shelves = page.contents.contents.findAll({ type: "MusicCarouselShelf" });
        const info = page.contents.contents.get({ type: "MusicDescriptionShelf" });
        return {
          sections: shelves,
          info: (info == null ? void 0 : info.description.toString()) || ""
        };
      }
    };
    _session = new WeakMap();
    _actions = new WeakMap();
    module2.exports = Music;
  }
});

// lib/core/FilterableFeed.js
var require_FilterableFeed = __commonJS({
  "lib/core/FilterableFeed.js"(exports2, module2) {
    "use strict";
    var { InnertubeError: InnertubeError2 } = require_Utils();
    var Feed = require_Feed();
    var _chips;
    var FilterableFeed2 = class extends Feed {
      constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        __privateAdd(this, _chips, void 0);
      }
      get filter_chips() {
        var _a, _b;
        if (__privateGet(this, _chips))
          return __privateGet(this, _chips) || [];
        if (((_a = this.memo.get("FeedFilterChipBar")) == null ? void 0 : _a.length) > 1)
          throw new InnertubeError2("There are too many feed filter chipbars, you'll need to find the correct one yourself in this.page");
        if (((_b = this.memo.get("FeedFilterChipBar")) == null ? void 0 : _b.length) === 0)
          throw new InnertubeError2("There are no feed filter chipbars");
        __privateSet(this, _chips, this.memo.get("ChipCloudChip") || []);
        return __privateGet(this, _chips) || [];
      }
      get filters() {
        return this.filter_chips.map((chip) => chip.text.toString()) || [];
      }
      async getFilteredFeed(filter) {
        let target_filter;
        if (typeof filter === "string") {
          if (!this.filters.includes(filter))
            throw new InnertubeError2("Filter not found", {
              available_filters: this.filters
            });
          target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
        } else if (filter.type === "ChipCloudChip") {
          target_filter = filter;
        } else {
          throw new InnertubeError2("Invalid filter");
        }
        if (target_filter.is_selected)
          return this;
        const response = await target_filter.endpoint.call(this.actions);
        return new Feed(this.actions, response, true);
      }
    };
    _chips = new WeakMap();
    module2.exports = FilterableFeed2;
  }
});

// lib/utils/Request.js
var require_Request = __commonJS({
  "lib/utils/Request.js"(exports2, module2) {
    "use strict";
    var Axios = require("../node_modules/axios/index.js");
    var Constants = require_Constants();
    var Utils = require_Utils();
    var _instance, _session, _setupRequestInterceptor, setupRequestInterceptor_fn, _setupResponseInterceptor, setupResponseInterceptor_fn, _adjustContext, adjustContext_fn;
    var Request2 = class {
      constructor(config) {
        __privateAdd(this, _setupRequestInterceptor);
        __privateAdd(this, _setupResponseInterceptor);
        __privateAdd(this, _adjustContext);
        __privateAdd(this, _instance, void 0);
        __privateAdd(this, _session, void 0);
        this.config = config;
        __privateSet(this, _instance, Axios.create({
          proxy: config.proxy,
          httpAgent: config.http_agent,
          httpsAgent: config.https_agent,
          params: { prettyPrint: false },
          headers: {
            "accept": "*/*",
            "accept-encoding": "gzip, deflate",
            "content-type": "application/json",
            "user-agent": Utils.getRandomUserAgent("desktop").userAgent
          },
          validateStatus: () => true,
          timeout: 15e3
        }));
        __privateMethod(this, _setupRequestInterceptor, setupRequestInterceptor_fn).call(this);
        __privateMethod(this, _setupResponseInterceptor, setupResponseInterceptor_fn).call(this);
      }
      setSession(session) {
        __privateSet(this, _session, session);
      }
      get instance() {
        return __privateGet(this, _instance);
      }
    };
    _instance = new WeakMap();
    _session = new WeakMap();
    _setupRequestInterceptor = new WeakSet();
    setupRequestInterceptor_fn = function() {
      __privateGet(this, _instance).interceptors.request.use(async (config) => {
        if (__privateGet(this, _session)) {
          const innertube_url = `${Constants.URLS.API.PRODUCTION}${__privateGet(this, _session).version}`;
          config.baseURL = config.baseURL || innertube_url;
          config.headers["accept-language"] = `en-${__privateGet(this, _session).config.gl || "US"}`;
          config.headers["x-goog-visitor-id"] = __privateGet(this, _session).context.client.visitorData || "";
          config.headers["x-youtube-client-version"] = __privateGet(this, _session).context.client.clientVersion;
          config.headers["x-origin"] = new URL(config.baseURL).origin;
          config.headers["origin"] = new URL(config.baseURL).origin;
          config.params.key = __privateGet(this, _session).key;
          const is_innertube_req = config.baseURL == innertube_url;
          if (is_innertube_req && typeof config.data === "object") {
            config.data = {
              context: JSON.parse(JSON.stringify(__privateGet(this, _session).context)),
              ...config.data
            };
            __privateMethod(this, _adjustContext, adjustContext_fn).call(this, config.data.context, config.data.client);
            config.headers["x-youtube-client-version"] = config.data.context.client.clientVersion;
            delete config.data.client;
          }
          if (__privateGet(this, _session).logged_in && is_innertube_req) {
            const oauth = __privateGet(this, _session).oauth;
            if (oauth.validateCredentials()) {
              await oauth.checkAccessTokenValidity();
              config.headers.authorization = `Bearer ${oauth.credentials.access_token}`;
              delete config.params.key;
            }
            if (this.config.cookie) {
              const papisid = Utils.getStringBetweenStrings(this.config.cookie, "PAPISID=", ";");
              config.headers.authorization = Utils.generateSidAuth(papisid);
              config.headers.cookie = this.config.cookie;
            }
          }
        }
        if (this.config.debug) {
          const url = `${config.baseURL ? `${config.baseURL}` : ""}${config.url}`;
          console.info("\n", `[${config.method.toUpperCase()}] > ${url}`, "\n", (config == null ? void 0 : config.data) || "N/A", "\n");
        }
        return config;
      }, (error) => {
        throw new Utils.InnertubeError(error.message, error);
      });
    };
    _setupResponseInterceptor = new WeakSet();
    setupResponseInterceptor_fn = function() {
      __privateGet(this, _instance).interceptors.response.use((res) => {
        const response = {
          success: res.status === 200,
          status_code: res.status,
          data: res.data
        };
        if (res.status !== 200)
          throw new Utils.InnertubeError(`Request to ${res.config.url} failed with status code ${res.status}`, response);
        return response;
      });
      __privateGet(this, _instance).interceptors.response.use(void 0, (error) => {
        if (error.info)
          return Promise.reject(error);
        throw new Utils.InnertubeError("Could not complete this operation", error.message);
      });
    };
    _adjustContext = new WeakSet();
    adjustContext_fn = function(ctx, client) {
      switch (client) {
        case "YTMUSIC":
          ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
          ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
          break;
        case "ANDROID":
          ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
          ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
          ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
          break;
        default:
          break;
      }
    };
    module2.exports = Request2;
  }
});

// lib/parser/youtube/search/VideoResultItem.js
var require_VideoResultItem = __commonJS({
  "lib/parser/youtube/search/VideoResultItem.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var Constants = require_Constants();
    var VideoResultItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
        const renderer = item.videoRenderer || item.compactVideoRenderer;
        if (renderer)
          return {
            id: renderer.videoId,
            url: `https://youtu.be/${renderer.videoId}`,
            title: renderer.title.runs[0].text,
            description: (renderer == null ? void 0 : renderer.detailedMetadataSnippets) ? renderer == null ? void 0 : renderer.detailedMetadataSnippets[0].snippetText.runs.map((item2) => item2.text).join("") : "N/A",
            channel: {
              id: (_d = (_c = (_b = (_a = renderer == null ? void 0 : renderer.ownerText) == null ? void 0 : _a.runs[0]) == null ? void 0 : _b.navigationEndpoint) == null ? void 0 : _c.browseEndpoint) == null ? void 0 : _d.browseId,
              name: (_f = (_e = renderer == null ? void 0 : renderer.ownerText) == null ? void 0 : _e.runs[0]) == null ? void 0 : _f.text,
              url: `${Constants.URLS.YT_BASE}${(_i = (_h = (_g = renderer == null ? void 0 : renderer.ownerText) == null ? void 0 : _g.runs[0].navigationEndpoint) == null ? void 0 : _h.browseEndpoint) == null ? void 0 : _i.canonicalBaseUrl}`
            },
            metadata: {
              view_count: ((_j = renderer == null ? void 0 : renderer.viewCountText) == null ? void 0 : _j.simpleText) || "N/A",
              short_view_count_text: {
                simple_text: ((_k = renderer == null ? void 0 : renderer.shortViewCountText) == null ? void 0 : _k.simpleText) || "N/A",
                accessibility_label: ((_n = (_m = (_l = renderer == null ? void 0 : renderer.shortViewCountText) == null ? void 0 : _l.accessibility) == null ? void 0 : _m.accessibilityData) == null ? void 0 : _n.label) || "N/A"
              },
              thumbnails: renderer == null ? void 0 : renderer.thumbnail.thumbnails,
              duration: {
                seconds: Utils.timeToSeconds(((_o = renderer == null ? void 0 : renderer.lengthText) == null ? void 0 : _o.simpleText) || "0"),
                simple_text: ((_p = renderer == null ? void 0 : renderer.lengthText) == null ? void 0 : _p.simpleText) || "N/A",
                accessibility_label: ((_s = (_r = (_q = renderer == null ? void 0 : renderer.lengthText) == null ? void 0 : _q.accessibility) == null ? void 0 : _r.accessibilityData) == null ? void 0 : _s.label) || "N/A"
              },
              published: ((_t = renderer == null ? void 0 : renderer.publishedTimeText) == null ? void 0 : _t.simpleText) || "N/A",
              badges: ((_u = renderer == null ? void 0 : renderer.badges) == null ? void 0 : _u.map((item2) => item2.metadataBadgeRenderer.label)) || [],
              owner_badges: ((_v = renderer == null ? void 0 : renderer.ownerBadges) == null ? void 0 : _v.map((item2) => item2.metadataBadgeRenderer.tooltip)) || []
            }
          };
      }
    };
    module2.exports = VideoResultItem;
  }
});

// lib/parser/youtube/search/SearchSuggestionItem.js
var require_SearchSuggestionItem = __commonJS({
  "lib/parser/youtube/search/SearchSuggestionItem.js"(exports2, module2) {
    "use strict";
    var SearchSuggestionItem = class {
      static parse(data) {
        return {
          query: data[0],
          results: data[1].map((res) => res[0])
        };
      }
    };
    module2.exports = SearchSuggestionItem;
  }
});

// lib/parser/youtube/others/PlaylistItem.js
var require_PlaylistItem = __commonJS({
  "lib/parser/youtube/others/PlaylistItem.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var PlaylistItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
        if (item.playlistVideoRenderer)
          return {
            id: (_a = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _a.videoId,
            title: (_d = (_c = (_b = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _b.title) == null ? void 0 : _c.runs[0]) == null ? void 0 : _d.text,
            author: (_g = (_f = (_e = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _e.shortBylineText) == null ? void 0 : _f.runs[0]) == null ? void 0 : _g.text,
            duration: {
              seconds: Utils.timeToSeconds(((_i = (_h = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _h.lengthText) == null ? void 0 : _i.simpleText) || "0"),
              simple_text: ((_k = (_j = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _j.lengthText) == null ? void 0 : _k.simpleText) || "N/A",
              accessibility_label: ((_o = (_n = (_m = (_l = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _l.lengthText) == null ? void 0 : _m.accessibility) == null ? void 0 : _n.accessibilityData) == null ? void 0 : _o.label) || "N/A"
            },
            thumbnails: (_q = (_p = item == null ? void 0 : item.playlistVideoRenderer) == null ? void 0 : _p.thumbnail) == null ? void 0 : _q.thumbnails
          };
      }
    };
    module2.exports = PlaylistItem;
  }
});

// lib/parser/youtube/others/NotificationItem.js
var require_NotificationItem = __commonJS({
  "lib/parser/youtube/others/NotificationItem.js"(exports2, module2) {
    "use strict";
    var NotificationItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        if (item.notificationRenderer) {
          const notification = item.notificationRenderer;
          return {
            title: (_a = notification == null ? void 0 : notification.shortMessage) == null ? void 0 : _a.simpleText,
            sent_time: (_b = notification == null ? void 0 : notification.sentTimeText) == null ? void 0 : _b.simpleText,
            timestamp: notification.notificationId,
            channel_name: ((_h = (_g = (_f = (_e = (_d = (_c = notification == null ? void 0 : notification.contextualMenu) == null ? void 0 : _c.menuRenderer) == null ? void 0 : _d.items[1]) == null ? void 0 : _e.menuServiceItemRenderer) == null ? void 0 : _f.text) == null ? void 0 : _g.runs[1]) == null ? void 0 : _h.text) || "N/A",
            channel_thumbnail: (_i = notification == null ? void 0 : notification.thumbnail) == null ? void 0 : _i.thumbnails[0],
            video_thumbnail: (_j = notification == null ? void 0 : notification.videoThumbnail) == null ? void 0 : _j.thumbnails[0],
            video_url: notification.navigationEndpoint.watchEndpoint ? `https://youtu.be/${notification.navigationEndpoint.watchEndpoint.videoId}` : "N/A",
            read: notification.read
          };
        }
      }
    };
    module2.exports = NotificationItem;
  }
});

// lib/parser/youtube/others/VideoItem.js
var require_VideoItem = __commonJS({
  "lib/parser/youtube/others/VideoItem.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var Constants = require_Constants();
    var VideoItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R;
        item = item.richItemRenderer && item.richItemRenderer.content.videoRenderer && item.richItemRenderer.content || item;
        if (item.videoRenderer)
          return {
            id: item.videoRenderer.videoId,
            title: item.videoRenderer.title.runs.map((run) => run.text).join(" "),
            description: ((_c = (_b = (_a = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _a.descriptionSnippet) == null ? void 0 : _b.runs[0]) == null ? void 0 : _c.text) || "N/A",
            channel: {
              id: (_h = (_g = (_f = (_e = (_d = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _d.shortBylineText) == null ? void 0 : _e.runs[0]) == null ? void 0 : _f.navigationEndpoint) == null ? void 0 : _g.browseEndpoint) == null ? void 0 : _h.browseId,
              name: ((_k = (_j = (_i = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _i.shortBylineText) == null ? void 0 : _j.runs[0]) == null ? void 0 : _k.text) || "N/A",
              url: `${Constants.URLS.YT_BASE}${(_p = (_o = (_n = (_m = (_l = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _l.shortBylineText) == null ? void 0 : _m.runs[0]) == null ? void 0 : _n.navigationEndpoint) == null ? void 0 : _o.browseEndpoint) == null ? void 0 : _p.canonicalBaseUrl}`
            },
            metadata: {
              view_count: ((_r = (_q = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _q.viewCountText) == null ? void 0 : _r.simpleText) || "N/A",
              short_view_count_text: {
                simple_text: ((_t = (_s = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _s.shortViewCountText) == null ? void 0 : _t.simpleText) || "N/A",
                accessibility_label: ((_x = (_w = (_v = (_u = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _u.shortViewCountText) == null ? void 0 : _v.accessibility) == null ? void 0 : _w.accessibilityData) == null ? void 0 : _x.label) || "N/A"
              },
              thumbnail: ((_z = (_y = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _y.thumbnail) == null ? void 0 : _z.thumbnails.slice(-1)[0]) || {},
              moving_thumbnail: ((_D = (_C = (_B = (_A = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _A.richThumbnail) == null ? void 0 : _B.movingThumbnailRenderer) == null ? void 0 : _C.movingThumbnailDetails) == null ? void 0 : _D.thumbnails[0]) || {},
              published: ((_F = (_E = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _E.publishedTimeText) == null ? void 0 : _F.simpleText) || "N/A",
              duration: {
                seconds: Utils.timeToSeconds(((_H = (_G = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _G.lengthText) == null ? void 0 : _H.simpleText) || "0"),
                simple_text: ((_J = (_I = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _I.lengthText) == null ? void 0 : _J.simpleText) || "N/A",
                accessibility_label: ((_N = (_M = (_L = (_K = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _K.lengthText) == null ? void 0 : _L.accessibility) == null ? void 0 : _M.accessibilityData) == null ? void 0 : _N.label) || "N/A"
              },
              badges: ((_P = (_O = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _O.badges) == null ? void 0 : _P.map((badge) => badge.metadataBadgeRenderer.label)) || [],
              owner_badges: ((_R = (_Q = item == null ? void 0 : item.videoRenderer) == null ? void 0 : _Q.ownerBadges) == null ? void 0 : _R.map((badge) => badge.metadataBadgeRenderer.tooltip)) || []
            }
          };
      }
    };
    module2.exports = VideoItem;
  }
});

// lib/parser/youtube/others/GridVideoItem.js
var require_GridVideoItem = __commonJS({
  "lib/parser/youtube/others/GridVideoItem.js"(exports2, module2) {
    "use strict";
    var Constants = require_Constants();
    var GridVideoItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
        return {
          id: item.gridVideoRenderer.videoId,
          title: (_c = (_b = (_a = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _a.title) == null ? void 0 : _b.runs) == null ? void 0 : _c.map((run) => run.text).join(" "),
          channel: {
            id: (_h = (_g = (_f = (_e = (_d = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _d.shortBylineText) == null ? void 0 : _e.runs[0]) == null ? void 0 : _f.navigationEndpoint) == null ? void 0 : _g.browseEndpoint) == null ? void 0 : _h.browseId,
            name: ((_k = (_j = (_i = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _i.shortBylineText) == null ? void 0 : _j.runs[0]) == null ? void 0 : _k.text) || "N/A",
            url: `${Constants.URLS.YT_BASE}${(_p = (_o = (_n = (_m = (_l = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _l.shortBylineText) == null ? void 0 : _m.runs[0]) == null ? void 0 : _n.navigationEndpoint) == null ? void 0 : _o.browseEndpoint) == null ? void 0 : _p.canonicalBaseUrl}`
          },
          metadata: {
            view_count: ((_r = (_q = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _q.viewCountText) == null ? void 0 : _r.simpleText) || "N/A",
            short_view_count_text: {
              simple_text: ((_t = (_s = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _s.shortViewCountText) == null ? void 0 : _t.simpleText) || "N/A",
              accessibility_label: ((_x = (_w = (_v = (_u = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _u.shortViewCountText) == null ? void 0 : _v.accessibility) == null ? void 0 : _w.accessibilityData) == null ? void 0 : _x.label) || "N/A"
            },
            thumbnail: ((_z = (_y = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _y.thumbnail) == null ? void 0 : _z.thumbnails.slice(-1)[0]) || [],
            moving_thumbnail: ((_D = (_C = (_B = (_A = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _A.richThumbnail) == null ? void 0 : _B.movingThumbnailRenderer) == null ? void 0 : _C.movingThumbnailDetails) == null ? void 0 : _D.thumbnails[0]) || {},
            published: ((_F = (_E = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _E.publishedTimeText) == null ? void 0 : _F.simpleText) || "N/A",
            badges: ((_H = (_G = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _G.badges) == null ? void 0 : _H.map((badge) => badge.metadataBadgeRenderer.label)) || [],
            owner_badges: ((_J = (_I = item == null ? void 0 : item.gridVideoRenderer) == null ? void 0 : _I.ownerBadges) == null ? void 0 : _J.map((badge) => badge.metadataBadgeRenderer.tooltip)) || []
          }
        };
      }
    };
    module2.exports = GridVideoItem;
  }
});

// lib/parser/youtube/others/GridPlaylistItem.js
var require_GridPlaylistItem = __commonJS({
  "lib/parser/youtube/others/GridPlaylistItem.js"(exports2, module2) {
    "use strict";
    var GridPlaylistItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e;
        return {
          id: item == null ? void 0 : item.gridPlaylistRenderer.playlistId,
          title: (_b = (_a = item == null ? void 0 : item.gridPlaylistRenderer.title) == null ? void 0 : _a.runs) == null ? void 0 : _b.map((run) => run.text).join(""),
          metadata: {
            thumbnail: ((_d = (_c = item == null ? void 0 : item.gridPlaylistRenderer.thumbnail) == null ? void 0 : _c.thumbnails) == null ? void 0 : _d.slice(-1)[0]) || {},
            video_count: ((_e = item == null ? void 0 : item.gridPlaylistRenderer.videoCountShortText) == null ? void 0 : _e.simpleText) || "N/A"
          }
        };
      }
    };
    module2.exports = GridPlaylistItem;
  }
});

// lib/parser/youtube/others/ChannelMetadata.js
var require_ChannelMetadata2 = __commonJS({
  "lib/parser/youtube/others/ChannelMetadata.js"(exports2, module2) {
    "use strict";
    var ChannelMetadata = class {
      static parse(data) {
        var _a, _b, _c, _d, _e, _f;
        return {
          title: data.channelMetadataRenderer.title,
          description: data.channelMetadataRenderer.description,
          metadata: {
            url: (_a = data.channelMetadataRenderer) == null ? void 0 : _a.channelUrl,
            rss_urls: (_b = data.channelMetadataRenderer) == null ? void 0 : _b.rssUrl,
            vanity_channel_url: (_c = data.channelMetadataRenderer) == null ? void 0 : _c.vanityChannelUrl,
            external_id: (_d = data.channelMetadataRenderer) == null ? void 0 : _d.externalId,
            is_family_safe: (_e = data.channelMetadataRenderer) == null ? void 0 : _e.isFamilySafe,
            keywords: (_f = data.channelMetadataRenderer) == null ? void 0 : _f.keywords
          }
        };
      }
    };
    module2.exports = ChannelMetadata;
  }
});

// lib/parser/youtube/others/ShelfRenderer.js
var require_ShelfRenderer = __commonJS({
  "lib/parser/youtube/others/ShelfRenderer.js"(exports2, module2) {
    "use strict";
    var VideoItem = require_VideoItem();
    var GridVideoItem = require_GridVideoItem();
    var ShelfRenderer = class {
      static parse(data) {
        return {
          title: this.getTitle(data.title),
          videos: this.parseItems(data.content)
        };
      }
      static getTitle(data) {
        if ("runs" in (data || {})) {
          return data.runs.map((run) => run.text).join("");
        } else if ("simpleText" in (data || {})) {
          return data.simpleText;
        }
        return "Others";
      }
      static parseItems(data) {
        let items;
        if ("expandedShelfContentsRenderer" in data) {
          items = data.expandedShelfContentsRenderer.items;
        } else if ("horizontalListRenderer" in data) {
          items = data.horizontalListRenderer.items;
        }
        const videos = "gridVideoRenderer" in items[0] && GridVideoItem.parse(items) || VideoItem.parse(items);
        return videos;
      }
    };
    module2.exports = ShelfRenderer;
  }
});

// lib/parser/youtube/others/CommentThread.js
var require_CommentThread2 = __commonJS({
  "lib/parser/youtube/others/CommentThread.js"(exports2, module2) {
    "use strict";
    var Constants = require_Constants();
    var CommentThread = class {
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (item.commentThreadRenderer || item.commentRenderer) {
          const comment = ((_a = item == null ? void 0 : item.commentThreadRenderer) == null ? void 0 : _a.comment) || item;
          const like_btn = (_c = (_b = comment.commentRenderer) == null ? void 0 : _b.actionButtons) == null ? void 0 : _c.commentActionButtonsRenderer.likeButton;
          const dislike_btn = (_e = (_d = comment.commentRenderer) == null ? void 0 : _d.actionButtons) == null ? void 0 : _e.commentActionButtonsRenderer.dislikeButton;
          return {
            text: comment.commentRenderer.contentText.runs.map((run) => run.text).join(""),
            author: {
              name: comment.commentRenderer.authorText.simpleText,
              thumbnails: comment.commentRenderer.authorThumbnail.thumbnails,
              channel_id: comment.commentRenderer.authorEndpoint.browseEndpoint.browseId,
              channel_url: Constants.URLS.YT_BASE + comment.commentRenderer.authorEndpoint.browseEndpoint.canonicalBaseUrl
            },
            metadata: {
              published: comment.commentRenderer.publishedTimeText.runs[0].text,
              is_reply: !!item.commentRenderer,
              is_liked: like_btn.toggleButtonRenderer.isToggled,
              is_disliked: dislike_btn.toggleButtonRenderer.isToggled,
              is_pinned: !!comment.commentRenderer.pinnedCommentBadge,
              is_channel_owner: comment.commentRenderer.authorIsChannelOwner,
              like_count: parseInt((_g = (_f = like_btn == null ? void 0 : like_btn.toggleButtonRenderer) == null ? void 0 : _f.accessibilityData) == null ? void 0 : _g.accessibilityData.label.replace(/\D/g, "")),
              reply_count: comment.commentRenderer.replyCount || 0,
              id: comment.commentRenderer.commentId
            }
          };
        }
      }
    };
    module2.exports = CommentThread;
  }
});

// lib/parser/youtube/index.js
var require_youtube = __commonJS({
  "lib/parser/youtube/index.js"(exports2, module2) {
    "use strict";
    var VideoResultItem = require_VideoResultItem();
    var SearchSuggestionItem = require_SearchSuggestionItem();
    var PlaylistItem = require_PlaylistItem();
    var NotificationItem = require_NotificationItem();
    var VideoItem = require_VideoItem();
    var GridVideoItem = require_GridVideoItem();
    var GridPlaylistItem = require_GridPlaylistItem();
    var ChannelMetadata = require_ChannelMetadata2();
    var ShelfRenderer = require_ShelfRenderer();
    var CommentThread = require_CommentThread2();
    module2.exports = { VideoResultItem, SearchSuggestionItem, PlaylistItem, NotificationItem, VideoItem, GridVideoItem, GridPlaylistItem, ChannelMetadata, ShelfRenderer, CommentThread };
  }
});

// lib/parser/ytmusic/search/SongResultItem.js
var require_SongResultItem = __commonJS({
  "lib/parser/ytmusic/search/SongResultItem.js"(exports2, module2) {
    "use strict";
    var SongResultItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e;
        const list_item = item.musicResponsiveListItemRenderer;
        if (list_item.playlistItemData) {
          let artists = (_a = list_item.flexColumns[1]) == null ? void 0 : _a.musicResponsiveListItemFlexColumnRenderer.text.runs;
          artists.splice(0, 2);
          const meta = artists.splice(artists.length - 4, 4);
          artists = artists.filter((artist, index) => !(index % 2));
          return {
            id: list_item.playlistItemData.videoId,
            title: (_c = (_b = list_item.flexColumns[0]) == null ? void 0 : _b.musicResponsiveListItemFlexColumnRenderer.text.runs[0]) == null ? void 0 : _c.text,
            artist: artists.map((artist) => artist.text),
            album: (_d = meta[1]) == null ? void 0 : _d.text,
            duration: (_e = meta[3]) == null ? void 0 : _e.text,
            thumbnails: list_item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
          };
        }
      }
    };
    module2.exports = SongResultItem;
  }
});

// lib/parser/ytmusic/search/VideoResultItem.js
var require_VideoResultItem2 = __commonJS({
  "lib/parser/ytmusic/search/VideoResultItem.js"(exports2, module2) {
    "use strict";
    var VideoResultItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item);
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e;
        const list_item = item.musicResponsiveListItemRenderer;
        if (list_item.playlistItemData) {
          let authors = (_a = list_item.flexColumns[1]) == null ? void 0 : _a.musicResponsiveListItemFlexColumnRenderer.text.runs;
          authors.splice(0, 2);
          const meta = authors.splice(authors.length - 4, 4);
          authors = authors.filter((author, index) => !(index % 2));
          return {
            id: list_item.playlistItemData.videoId,
            title: (_c = (_b = list_item.flexColumns[0]) == null ? void 0 : _b.musicResponsiveListItemFlexColumnRenderer.text.runs[0]) == null ? void 0 : _c.text,
            author: authors.map((author) => author.text),
            views: (_d = meta[1]) == null ? void 0 : _d.text,
            duration: (_e = meta[3]) == null ? void 0 : _e.text,
            thumbnails: list_item == null ? void 0 : list_item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
          };
        }
      }
    };
    module2.exports = VideoResultItem;
  }
});

// lib/parser/ytmusic/search/AlbumResultItem.js
var require_AlbumResultItem = __commonJS({
  "lib/parser/ytmusic/search/AlbumResultItem.js"(exports2, module2) {
    "use strict";
    var AlbumResultItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item));
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e;
        const list_item = item.musicResponsiveListItemRenderer;
        return {
          id: list_item.navigationEndpoint.browseEndpoint.browseId,
          title: (_b = (_a = list_item.flexColumns[0]) == null ? void 0 : _a.musicResponsiveListItemFlexColumnRenderer.text.runs[0]) == null ? void 0 : _b.text,
          author: (_d = (_c = list_item.flexColumns[1]) == null ? void 0 : _c.musicResponsiveListItemFlexColumnRenderer.text.runs[2]) == null ? void 0 : _d.text,
          year: (_e = list_item.flexColumns[1]) == null ? void 0 : _e.musicResponsiveListItemFlexColumnRenderer.text.runs.find((run) => /^[12][0-9]{3}$/.test(run.text)).text,
          thumbnails: list_item == null ? void 0 : list_item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails,
          playlistId: list_item == null ? void 0 : list_item.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId
        };
      }
    };
    module2.exports = AlbumResultItem;
  }
});

// lib/parser/ytmusic/search/ArtistResultItem.js
var require_ArtistResultItem = __commonJS({
  "lib/parser/ytmusic/search/ArtistResultItem.js"(exports2, module2) {
    "use strict";
    var ArtistResultItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item));
      }
      static parseItem(item) {
        var _a, _b, _c, _d;
        const list_item = item.musicResponsiveListItemRenderer;
        return {
          id: list_item.navigationEndpoint.browseEndpoint.browseId,
          name: (_b = (_a = list_item.flexColumns[0]) == null ? void 0 : _a.musicResponsiveListItemFlexColumnRenderer.text.runs[0]) == null ? void 0 : _b.text,
          subscribers: (_d = (_c = list_item.flexColumns[1]) == null ? void 0 : _c.musicResponsiveListItemFlexColumnRenderer.text.runs[2]) == null ? void 0 : _d.text,
          thumbnails: list_item == null ? void 0 : list_item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
        };
      }
    };
    module2.exports = ArtistResultItem;
  }
});

// lib/parser/ytmusic/search/PlaylistResultItem.js
var require_PlaylistResultItem = __commonJS({
  "lib/parser/ytmusic/search/PlaylistResultItem.js"(exports2, module2) {
    "use strict";
    var PlaylistResultItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item));
      }
      static parseItem(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        const list_item = item.musicResponsiveListItemRenderer;
        const watch_playlist_endpoint = (_e = (_d = (_c = (_b = (_a = list_item == null ? void 0 : list_item.overlay) == null ? void 0 : _a.musicItemThumbnailOverlayRenderer) == null ? void 0 : _b.content) == null ? void 0 : _c.musicPlayButtonRenderer) == null ? void 0 : _d.playNavigationEndpoint) == null ? void 0 : _e.watchPlaylistEndpoint;
        return {
          id: watch_playlist_endpoint == null ? void 0 : watch_playlist_endpoint.playlistId,
          title: (_g = (_f = list_item.flexColumns[0]) == null ? void 0 : _f.musicResponsiveListItemFlexColumnRenderer.text.runs[0]) == null ? void 0 : _g.text,
          author: (_i = (_h = list_item.flexColumns[1]) == null ? void 0 : _h.musicResponsiveListItemFlexColumnRenderer.text.runs[2]) == null ? void 0 : _i.text,
          channel_id: ((_l = (_k = (_j = list_item.flexColumns[1]) == null ? void 0 : _j.musicResponsiveListItemFlexColumnRenderer.text.runs[2]) == null ? void 0 : _k.navigationEndpoint) == null ? void 0 : _l.browseEndpoint.browseId) || "0",
          total_items: parseInt((_n = (_m = list_item.flexColumns[1]) == null ? void 0 : _m.musicResponsiveListItemFlexColumnRenderer.text.runs[4]) == null ? void 0 : _n.text.match(/\d+/g))
        };
      }
    };
    module2.exports = PlaylistResultItem;
  }
});

// lib/parser/ytmusic/search/MusicSearchSuggestionItem.js
var require_MusicSearchSuggestionItem = __commonJS({
  "lib/parser/ytmusic/search/MusicSearchSuggestionItem.js"(exports2, module2) {
    "use strict";
    var MusicSearchSuggestionItem = class {
      static parse(data) {
        return {
          query: this.parseItem(data[0]).runs[0].text.trim(),
          results: data.map((item) => this.parseItem(item).runs.map((run) => run.text).join("").trim())
        };
      }
      static parseItem(item) {
        let suggestion;
        if (item.historySuggestionRenderer) {
          suggestion = item.historySuggestionRenderer.suggestion;
        } else {
          suggestion = item.searchSuggestionRenderer.suggestion;
        }
        return suggestion;
      }
    };
    module2.exports = MusicSearchSuggestionItem;
  }
});

// lib/parser/ytmusic/search/TopResultItem.js
var require_TopResultItem = __commonJS({
  "lib/parser/ytmusic/search/TopResultItem.js"(exports2, module2) {
    "use strict";
    var SongResultItem = require_SongResultItem();
    var VideoResultItem = require_VideoResultItem2();
    var AlbumResultItem = require_AlbumResultItem();
    var ArtistResultItem = require_ArtistResultItem();
    var PlaylistResultItem = require_PlaylistResultItem();
    var TopResultItem = class {
      static parse(data) {
        return data.map((item) => {
          var _a;
          const list_item = item.musicResponsiveListItemRenderer;
          const runs = (_a = list_item.flexColumns[1]) == null ? void 0 : _a.musicResponsiveListItemFlexColumnRenderer.text.runs;
          const type = runs[0].text.toLowerCase();
          const parsed_item = (() => {
            switch (type) {
              case "playlist":
                return PlaylistResultItem.parseItem(item);
              case "song":
                return SongResultItem.parseItem(item);
              case "video":
                return VideoResultItem.parseItem(item);
              case "artist":
                return ArtistResultItem.parseItem(item);
              case "album":
                return AlbumResultItem.parseItem(item);
              case "single":
                return AlbumResultItem.parseItem(item);
              default:
                return void 0;
            }
          })();
          if (parsed_item) {
            parsed_item.type = type;
          }
          return parsed_item;
        }).filter((item) => item);
      }
    };
    module2.exports = TopResultItem;
  }
});

// lib/parser/ytmusic/others/PlaylistItem.js
var require_PlaylistItem2 = __commonJS({
  "lib/parser/ytmusic/others/PlaylistItem.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var PlaylistItem = class {
      static parse(data) {
        return data.map((item) => this.parseItem(item)).filter((item) => item.id);
      }
      static parseItem(item) {
        const item_renderer = item.musicResponsiveListItemRenderer;
        const fixed_columns = item_renderer.fixedColumns;
        const flex_columns = item_renderer.flexColumns;
        return {
          id: item_renderer.playlistItemData && item_renderer.playlistItemData.videoId,
          title: flex_columns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text,
          author: flex_columns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text,
          duration: {
            seconds: Utils.timeToSeconds(fixed_columns[0].musicResponsiveListItemFixedColumnRenderer.text.runs[0].text || "0"),
            simple_text: fixed_columns[0].musicResponsiveListItemFixedColumnRenderer.text.runs[0].text
          },
          thumbnails: item_renderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
        };
      }
    };
    module2.exports = PlaylistItem;
  }
});

// lib/parser/ytmusic/index.js
var require_ytmusic = __commonJS({
  "lib/parser/ytmusic/index.js"(exports2, module2) {
    "use strict";
    var SongResultItem = require_SongResultItem();
    var VideoResultItem = require_VideoResultItem2();
    var AlbumResultItem = require_AlbumResultItem();
    var ArtistResultItem = require_ArtistResultItem();
    var PlaylistResultItem = require_PlaylistResultItem();
    var MusicSearchSuggestionItem = require_MusicSearchSuggestionItem();
    var TopResultItem = require_TopResultItem();
    var PlaylistItem = require_PlaylistItem2();
    module2.exports = { SongResultItem, VideoResultItem, AlbumResultItem, ArtistResultItem, PlaylistResultItem, MusicSearchSuggestionItem, TopResultItem, PlaylistItem };
  }
});

// lib/parser/index.js
var require_parser = __commonJS({
  "lib/parser/index.js"(exports2, module2) {
    "use strict";
    var Utils = require_Utils();
    var Constants = require_Constants();
    var YTDataItems = require_youtube();
    var YTMusicDataItems = require_ytmusic();
    var Proto2 = require_proto();
    var _processSearch, processSearch_fn, _processMusicSearch, processMusicSearch_fn, _processSearchSuggestions, processSearchSuggestions_fn, _processMusicSearchSuggestions, processMusicSearchSuggestions_fn, _processPlaylist, processPlaylist_fn, _processMusicPlaylist, processMusicPlaylist_fn, _processVideoInfo, processVideoInfo_fn, _processComments, processComments_fn, _processHomeFeed, processHomeFeed_fn, _processLibrary, processLibrary_fn, _processSubscriptionFeed, processSubscriptionFeed_fn, _processChannel, processChannel_fn, _processNotifications, processNotifications_fn, _processTrending, processTrending_fn, _processHistory, processHistory_fn;
    var Parser = class {
      constructor(session, data, args = {}) {
        __privateAdd(this, _processSearch);
        __privateAdd(this, _processMusicSearch);
        __privateAdd(this, _processSearchSuggestions);
        __privateAdd(this, _processMusicSearchSuggestions);
        __privateAdd(this, _processPlaylist);
        __privateAdd(this, _processMusicPlaylist);
        __privateAdd(this, _processVideoInfo);
        __privateAdd(this, _processComments);
        __privateAdd(this, _processHomeFeed);
        __privateAdd(this, _processLibrary);
        __privateAdd(this, _processSubscriptionFeed);
        __privateAdd(this, _processChannel);
        __privateAdd(this, _processNotifications);
        __privateAdd(this, _processTrending);
        __privateAdd(this, _processHistory);
        this.data = data;
        this.session = session;
        this.args = args;
      }
      parse() {
        const client = this.args.client;
        const data_type = this.args.data_type;
        let processed_data;
        switch (client) {
          case "YOUTUBE":
            processed_data = (() => {
              switch (data_type) {
                case "SEARCH":
                  return __privateMethod(this, _processSearch, processSearch_fn).call(this);
                case "CHANNEL":
                  return __privateMethod(this, _processChannel, processChannel_fn).call(this);
                case "PLAYLIST":
                  return __privateMethod(this, _processPlaylist, processPlaylist_fn).call(this);
                case "SUBSFEED":
                  return __privateMethod(this, _processSubscriptionFeed, processSubscriptionFeed_fn).call(this);
                case "HOMEFEED":
                  return __privateMethod(this, _processHomeFeed, processHomeFeed_fn).call(this);
                case "LIBRARY":
                  return __privateMethod(this, _processLibrary, processLibrary_fn).call(this);
                case "TRENDING":
                  return __privateMethod(this, _processTrending, processTrending_fn).call(this);
                case "HISTORY":
                  return __privateMethod(this, _processHistory, processHistory_fn).call(this);
                case "COMMENTS":
                  return __privateMethod(this, _processComments, processComments_fn).call(this);
                case "VIDEO_INFO":
                  return __privateMethod(this, _processVideoInfo, processVideoInfo_fn).call(this);
                case "NOTIFICATIONS":
                  return __privateMethod(this, _processNotifications, processNotifications_fn).call(this);
                case "SEARCH_SUGGESTIONS":
                  return __privateMethod(this, _processSearchSuggestions, processSearchSuggestions_fn).call(this);
                default:
                  throw new TypeError("undefined is not a function");
              }
            })();
            break;
          case "YTMUSIC":
            processed_data = (() => {
              switch (data_type) {
                case "SEARCH":
                  return __privateMethod(this, _processMusicSearch, processMusicSearch_fn).call(this);
                case "PLAYLIST":
                  return __privateMethod(this, _processMusicPlaylist, processMusicPlaylist_fn).call(this);
                case "SEARCH_SUGGESTIONS":
                  return __privateMethod(this, _processMusicSearchSuggestions, processMusicSearchSuggestions_fn).call(this);
                default:
                  throw new TypeError("undefined is not a function");
              }
            })();
            break;
          default:
            throw new Utils.InnertubeError("Invalid client");
        }
        return processed_data;
      }
    };
    _processSearch = new WeakSet();
    processSearch_fn = function() {
      const contents = Utils.findNode(this.data, "contents", "contents", 5);
      const processed_data = {};
      const parseItems = (contents2) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const content = contents2[0].itemSectionRenderer.contents;
        processed_data.query = ((_c = (_b = (_a = content[0]) == null ? void 0 : _a.showingResultsForRenderer) == null ? void 0 : _b.originalQuery) == null ? void 0 : _c.simpleText) || this.args.query;
        processed_data.corrected_query = ((_g = (_f = (_e = (_d = content[0]) == null ? void 0 : _d.showingResultsForRenderer) == null ? void 0 : _e.correctedQueryEndpoint) == null ? void 0 : _f.searchEndpoint) == null ? void 0 : _g.query) || "N/A";
        processed_data.estimated_results = parseInt(this.data.estimatedResults);
        processed_data.videos = YTDataItems.VideoResultItem.parse(content);
        processed_data.getContinuation = async () => {
          const citem = contents2.find((item) => item.continuationItemRenderer);
          const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
          const response = await this.session.actions.search({ ctoken });
          const continuation_items = Utils.findNode(response.data, "onResponseReceivedCommands", "itemSectionRenderer", 4, false);
          return parseItems(continuation_items);
        };
        return processed_data;
      };
      return parseItems(contents);
    };
    _processMusicSearch = new WeakSet();
    processMusicSearch_fn = function() {
      const tabs = Utils.findNode(this.data, "contents", "tabs").tabs;
      const contents = Utils.findNode(tabs, "0", "contents", 5);
      const did_you_mean_item = contents.find((content) => content.itemSectionRenderer);
      const did_you_mean_renderer = did_you_mean_item == null ? void 0 : did_you_mean_item.itemSectionRenderer.contents[0].didYouMeanRenderer;
      const processed_data = {
        query: "",
        corrected_query: "",
        results: {}
      };
      processed_data.query = this.args.query;
      processed_data.corrected_query = (did_you_mean_renderer == null ? void 0 : did_you_mean_renderer.correctedQuery.runs.map((run) => run.text).join("")) || "N/A";
      contents.forEach((content) => {
        const section = content == null ? void 0 : content.musicShelfRenderer;
        if (section) {
          const section_title = section.title.runs[0].text;
          const section_items = ({
            ["Top result"]: () => YTMusicDataItems.TopResultItem.parse(section.contents),
            ["Songs"]: () => YTMusicDataItems.SongResultItem.parse(section.contents),
            ["Videos"]: () => YTMusicDataItems.VideoResultItem.parse(section.contents),
            ["Featured playlists"]: () => YTMusicDataItems.PlaylistResultItem.parse(section.contents),
            ["Community playlists"]: () => YTMusicDataItems.PlaylistResultItem.parse(section.contents),
            ["Artists"]: () => YTMusicDataItems.ArtistResultItem.parse(section.contents),
            ["Albums"]: () => YTMusicDataItems.AlbumResultItem.parse(section.contents)
          }[section_title] || (() => {
          }))();
          processed_data.results[section_title.replace(/ /g, "_").toLowerCase()] = section_items;
        }
      });
      return processed_data;
    };
    _processSearchSuggestions = new WeakSet();
    processSearchSuggestions_fn = function() {
      return YTDataItems.SearchSuggestionItem.parse(JSON.parse(this.data.replace(")]}'", "")));
    };
    _processMusicSearchSuggestions = new WeakSet();
    processMusicSearchSuggestions_fn = function() {
      const contents = this.data.contents[0].searchSuggestionsSectionRenderer.contents;
      return YTMusicDataItems.MusicSearchSuggestionItem.parse(contents);
    };
    _processPlaylist = new WeakSet();
    processPlaylist_fn = function() {
      var _a, _b, _c, _d;
      const details = this.data.sidebar.playlistSidebarRenderer.items[0];
      const metadata = {
        title: this.data.metadata.playlistMetadataRenderer.title,
        description: ((_b = (_a = details.playlistSidebarPrimaryInfoRenderer) == null ? void 0 : _a.description) == null ? void 0 : _b.simpleText) || "N/A",
        total_items: ((_c = details.playlistSidebarPrimaryInfoRenderer.stats[0].runs[0]) == null ? void 0 : _c.text) || "N/A",
        last_updated: ((_d = details.playlistSidebarPrimaryInfoRenderer.stats[2].runs[1]) == null ? void 0 : _d.text) || "N/A",
        views: details.playlistSidebarPrimaryInfoRenderer.stats[1].simpleText
      };
      const list = Utils.findNode(this.data, "contents", "contents", 13, false);
      const items = YTDataItems.PlaylistItem.parse(list.contents);
      return {
        ...metadata,
        items
      };
    };
    _processMusicPlaylist = new WeakSet();
    processMusicPlaylist_fn = function() {
      var _a, _b, _c, _d, _e, _f;
      const details = this.data.header.musicDetailHeaderRenderer;
      const metadata = {
        title: (_a = details == null ? void 0 : details.title) == null ? void 0 : _a.runs[0].text,
        description: ((_c = (_b = details == null ? void 0 : details.description) == null ? void 0 : _b.runs) == null ? void 0 : _c.map((run) => run.text).join("")) || "N/A",
        total_items: parseInt((_d = details == null ? void 0 : details.secondSubtitle) == null ? void 0 : _d.runs[0].text.match(/\d+/g)),
        duration: (_e = details == null ? void 0 : details.secondSubtitle) == null ? void 0 : _e.runs[2].text,
        year: (_f = details == null ? void 0 : details.subtitle) == null ? void 0 : _f.runs[4].text
      };
      const contents = this.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
      const playlist_content = contents[0].musicPlaylistShelfRenderer.contents;
      const items = YTMusicDataItems.PlaylistItem.parse(playlist_content);
      return {
        ...metadata,
        items
      };
    };
    _processVideoInfo = new WeakSet();
    processVideoInfo_fn = function() {
      var _a, _b, _c, _d, _e, _f, _g;
      const playability_status = this.data.playabilityStatus;
      if (playability_status.status == "ERROR")
        throw new Error(`Could not retrieve video details: ${playability_status.status} - ${playability_status.reason}`);
      const details = this.data.videoDetails;
      const microformat = this.data.microformat.playerMicroformatRenderer;
      const streaming_data = this.data.streamingData;
      const mf_raw_data = Object.entries(microformat);
      const dt_raw_data = Object.entries(details);
      const processed_data = {
        id: "",
        title: "",
        description: "",
        thumbnail: [],
        metadata: {}
      };
      mf_raw_data.forEach((entry) => {
        const key = Utils.camelToSnake(entry[0]);
        if (Constants.METADATA_KEYS.includes(key)) {
          if (key == "view_count") {
            processed_data.metadata[key] = parseInt(entry[1]);
          } else if (key == "owner_profile_url") {
            processed_data.metadata.channel_url = entry[1];
          } else if (key == "owner_channel_name") {
            processed_data.metadata.channel_name = entry[1];
          } else {
            processed_data.metadata[key] = entry[1];
          }
        } else {
          processed_data[key] = entry[1];
        }
      });
      dt_raw_data.forEach((entry) => {
        const key = Utils.camelToSnake(entry[0]);
        if (Constants.BLACKLISTED_KEYS.includes(key))
          return;
        if (Constants.METADATA_KEYS.includes(key)) {
          if (key == "view_count") {
            processed_data.metadata[key] = parseInt(entry[1]);
          } else {
            processed_data.metadata[key] = entry[1];
          }
        } else if (key == "short_description") {
          processed_data.description = entry[1];
        } else if (key == "thumbnail") {
          processed_data.thumbnail = entry[1].thumbnails.slice(-1)[0];
        } else if (key == "video_id") {
          processed_data.id = entry[1];
        } else {
          processed_data[key] = entry[1];
        }
      });
      if (this.data.continuation) {
        const primary_info_renderer = this.data.continuation.contents.twoColumnWatchNextResults.results.results.contents.find((item) => item.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer;
        const secondary_info_renderer = this.data.continuation.contents.twoColumnWatchNextResults.results.results.contents.find((item) => item.videoSecondaryInfoRenderer).videoSecondaryInfoRenderer;
        const like_btn = primary_info_renderer.videoActions.menuRenderer.topLevelButtons.find((item) => item.toggleButtonRenderer.defaultIcon.iconType == "LIKE");
        const dislike_btn = primary_info_renderer.videoActions.menuRenderer.topLevelButtons.find((item) => item.toggleButtonRenderer.defaultIcon.iconType == "DISLIKE");
        const notification_toggle_btn = (_b = (_a = secondary_info_renderer.subscribeButton.subscribeButtonRenderer) == null ? void 0 : _a.notificationPreferenceButton) == null ? void 0 : _b.subscriptionNotificationToggleButtonRenderer;
        processed_data.metadata.is_liked = like_btn.toggleButtonRenderer.isToggled;
        processed_data.metadata.is_disliked = dislike_btn.toggleButtonRenderer.isToggled;
        processed_data.metadata.is_subscribed = ((_c = secondary_info_renderer.subscribeButton.subscribeButtonRenderer) == null ? void 0 : _c.subscribed) || false;
        processed_data.metadata.subscriber_count = ((_e = (_d = secondary_info_renderer.owner.videoOwnerRenderer) == null ? void 0 : _d.subscriberCountText) == null ? void 0 : _e.simpleText) || "N/A";
        processed_data.metadata.current_notification_preference = (notification_toggle_btn == null ? void 0 : notification_toggle_btn.states.find((state) => state.stateId == notification_toggle_btn.currentStateId).state.buttonRenderer.icon.iconType) || "N/A";
        processed_data.metadata.publish_date_text = primary_info_renderer.dateText.simpleText;
        if (processed_data.metadata.allow_ratings) {
          processed_data.metadata.likes = {
            count: parseInt(like_btn.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D/g, "")),
            short_count_text: like_btn.toggleButtonRenderer.defaultText.simpleText
          };
        }
        processed_data.metadata.owner_badges = ((_g = (_f = secondary_info_renderer.owner.videoOwnerRenderer) == null ? void 0 : _f.badges) == null ? void 0 : _g.map((badge) => badge.metadataBadgeRenderer.tooltip)) || [];
      }
      if (streaming_data && streaming_data.adaptiveFormats) {
        processed_data.metadata.available_qualities = [...new Set(streaming_data.adaptiveFormats.filter((v) => v.qualityLabel).map((v) => v.qualityLabel).sort((a, b) => +a.replace(/\D/gi, "") - +b.replace(/\D/gi, "")))];
      } else {
        processed_data.metadata.available_qualities = [];
      }
      return processed_data;
    };
    _processComments = new WeakSet();
    processComments_fn = function() {
      if (!this.data.onResponseReceivedEndpoints)
        throw new Utils.UnavailableContentError("Comments section not available", this.args);
      const header = Utils.findNode(this.data, "onResponseReceivedEndpoints", "commentsHeaderRenderer", 5, false);
      const comment_count = parseInt(header.commentsHeaderRenderer.countText.runs[0].text.replace(/,/g, ""));
      const page_count = parseInt(comment_count / 20);
      const parseComments = (data) => {
        const items = Utils.findNode(data, "onResponseReceivedEndpoints", "commentRenderer", 4, false);
        const response = {
          page_count,
          comment_count,
          items: []
        };
        response.items = items.map((item) => {
          const comment = YTDataItems.CommentThread.parseItem(item);
          if (comment) {
            comment.like = () => this.session.actions.engage("comment/perform_comment_action", { comment_action: "like", comment_id: comment.metadata.id, video_id: this.args.video_id });
            comment.dislike = () => this.session.actions.engage("comment/perform_comment_action", { comment_action: "dislike", comment_id: comment.metadata.id, video_id: this.args.video_id });
            comment.reply = (text) => this.session.actions.engage("comment/create_comment_reply", { text, comment_id: comment.metadata.id, video_id: this.args.video_id });
            comment.report = async () => {
              const payload = Utils.findNode(item, "commentThreadRenderer", "params", 10, false);
              const form = await this.session.actions.flag("flag/get_form", { params: payload.params });
              const action = Utils.findNode(form, "actions", "flagAction", 13, false);
              const flag = await this.session.actions.flag("flag/flag", { action: action.flagAction });
              return flag;
            };
            comment.getReplies = async () => {
              if (comment.metadata.reply_count === 0)
                throw new Utils.InnertubeError("This comment has no replies", comment);
              const payload = Proto2.encodeCommentRepliesParams(this.args.video_id, comment.metadata.id);
              const next = await this.session.actions.next({ ctoken: payload });
              return parseComments(next.data);
            };
            comment.translate = async (target_language) => {
              const response2 = await this.session.actions.engage("comment/perform_comment_action", {
                text: comment.text,
                comment_action: "translate",
                comment_id: comment.metadata.id,
                video_id: this.args.video_id,
                target_language
              });
              const translated_content = Utils.findNode(response2.data, "frameworkUpdates", "content", 7, false);
              return {
                success: response2.success,
                status_code: response2.status_code,
                translated_content: translated_content.content
              };
            };
            return comment;
          }
        }).filter((c) => c);
        response.comment = (text) => this.session.actions.engage("comment/create_comment", { video_id: this.args.video_id, text });
        response.getContinuation = async () => {
          const continuation_item = items.find((item) => item.continuationItemRenderer);
          if (!continuation_item)
            throw new Utils.InnertubeError("You've reached the end");
          const is_reply = !!continuation_item.continuationItemRenderer.button;
          const payload = Utils.findNode(continuation_item, "continuationItemRenderer", "token", is_reply ? 5 : 3);
          const next = await this.session.actions.next({ ctoken: payload.token });
          return parseComments(next.data);
        };
        return response;
      };
      return parseComments(this.data);
    };
    _processHomeFeed = new WeakSet();
    processHomeFeed_fn = function() {
      const contents = Utils.findNode(this.data, "contents", "videoRenderer", 9, false);
      const parseItems = (contents2) => {
        const videos = YTDataItems.VideoItem.parse(contents2);
        const getContinuation = async () => {
          const citem = contents2.find((item) => item.continuationItemRenderer);
          const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
          const response = await this.session.actions.browse(ctoken, { is_ctoken: true });
          return parseItems(response.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems);
        };
        return { videos, getContinuation };
      };
      return parseItems(contents);
    };
    _processLibrary = new WeakSet();
    processLibrary_fn = function() {
      var _a, _b, _c;
      const profile_data = Utils.findNode(this.data, "contents", "profileColumnRenderer", 3);
      const stats_data = profile_data.profileColumnRenderer.items.find((item) => item.profileColumnStatsRenderer);
      const stats_items = stats_data.profileColumnStatsRenderer.items;
      const userinfo = profile_data.profileColumnRenderer.items.find((item) => item.profileColumnUserInfoRenderer);
      const stats = {};
      stats_items.forEach((item) => {
        const label = item.profileColumnStatsEntryRenderer.label.runs.map((run) => run.text).join("");
        stats[label.toLowerCase()] = parseInt(item.profileColumnStatsEntryRenderer.value.simpleText);
      });
      const profile = {
        name: (_b = (_a = userinfo.profileColumnUserInfoRenderer) == null ? void 0 : _a.title) == null ? void 0 : _b.simpleText,
        thumbnails: (_c = userinfo.profileColumnUserInfoRenderer) == null ? void 0 : _c.thumbnail.thumbnails,
        stats
      };
      return {
        profile
      };
    };
    _processSubscriptionFeed = new WeakSet();
    processSubscriptionFeed_fn = function() {
      const contents = Utils.findNode(this.data, "contents", "contents", 9, false);
      const subsfeed = { items: [] };
      const parseItems = (contents2) => {
        contents2.forEach((section) => {
          if (!section.itemSectionRenderer)
            return;
          const section_contents = section.itemSectionRenderer.contents[0];
          const section_title = section_contents.shelfRenderer.title.runs[0].text;
          const section_items = section_contents.shelfRenderer.content.gridRenderer.items;
          const items = YTDataItems.GridVideoItem.parse(section_items);
          subsfeed.items.push({
            date: section_title,
            videos: items
          });
        });
        subsfeed.getContinuation = async () => {
          const citem = contents2.find((item) => item.continuationItemRenderer);
          const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
          const response = await this.session.actions.browse(ctoken, { is_ctoken: true });
          const ccontents = Utils.findNode(response.data, "onResponseReceivedActions", "itemSectionRenderer", 4, false);
          subsfeed.items = [];
          return parseItems(ccontents);
        };
        return subsfeed;
      };
      return parseItems(contents);
    };
    _processChannel = new WeakSet();
    processChannel_fn = function() {
      const tabs = this.data.contents.twoColumnBrowseResultsRenderer.tabs;
      const metadata = this.data.metadata;
      const home_tab = tabs.find((tab) => tab.tabRenderer.title == "Home");
      const home_contents = home_tab.tabRenderer.content.sectionListRenderer.contents;
      const home_shelves = [];
      home_contents.forEach((content) => {
        var _a;
        if (content.itemSectionRenderer) {
          const contents = content.itemSectionRenderer.contents[0];
          const list = (_a = contents == null ? void 0 : contents.shelfRenderer) == null ? void 0 : _a.content.horizontalListRenderer;
          if (!list)
            return;
          const shelf = {
            title: contents.shelfRenderer.title.runs[0].text,
            content: []
          };
          shelf.content = list.items.map((item) => {
            if (item.gridVideoRenderer) {
              return YTDataItems.GridVideoItem.parseItem(item);
            } else if (item.gridPlaylistRenderer) {
              return YTDataItems.GridPlaylistItem.parseItem(item);
            }
          });
          home_shelves.push(shelf);
        }
      });
      const ch_info = YTDataItems.ChannelMetadata.parse(metadata);
      return {
        ...ch_info,
        content: {
          home_page: home_shelves,
          getVideos: () => {
          },
          getPlaylists: () => {
          },
          getCommunity: () => {
          },
          getChannels: () => {
          },
          getAbout: () => {
          }
        }
      };
    };
    _processNotifications = new WeakSet();
    processNotifications_fn = function() {
      const contents = this.data.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections[0];
      if (!contents.multiPageMenuNotificationSectionRenderer)
        throw new Utils.InnertubeError("No notifications");
      const parseItems = (items) => {
        const parsed_items = YTDataItems.NotificationItem.parse(items);
        const getContinuation = async () => {
          var _a, _b, _c;
          const citem = items.find((item) => item.continuationItemRenderer);
          const ctoken = (_c = (_b = (_a = citem == null ? void 0 : citem.continuationItemRenderer) == null ? void 0 : _a.continuationEndpoint) == null ? void 0 : _b.getNotificationMenuEndpoint) == null ? void 0 : _c.ctoken;
          const response = await this.session.actions.notifications("get_notification_menu", { ctoken });
          return parseItems(response.data.actions[0].appendContinuationItemsAction.continuationItems);
        };
        return { items: parsed_items, getContinuation };
      };
      return parseItems(contents.multiPageMenuNotificationSectionRenderer.items);
    };
    _processTrending = new WeakSet();
    processTrending_fn = function() {
      const tabs = Utils.findNode(this.data, "contents", "tabRenderer", 4, false);
      const categories = {};
      tabs.forEach((tab) => {
        const tab_renderer = tab.tabRenderer;
        const tab_content = tab_renderer == null ? void 0 : tab_renderer.content;
        const category_title = tab_renderer.title.toLowerCase();
        categories[category_title] = {};
        if (tab_content) {
          const contents = tab_content.sectionListRenderer.contents;
          categories[category_title].content = contents.map((content) => {
            const shelf = content.itemSectionRenderer.contents[0].shelfRenderer;
            const parsed_shelf = YTDataItems.ShelfRenderer.parse(shelf);
            return parsed_shelf;
          });
        } else {
          const params = tab_renderer.endpoint.browseEndpoint.params;
          categories[category_title].getVideos = async () => {
            const response = await this.session.actions.browse("FEtrending", { params });
            const tabs2 = Utils.findNode(response, "contents", "tabRenderer", 4, false);
            const tab2 = tabs2.find((tab3) => tab3.tabRenderer.title === tab_renderer.title);
            const contents = tab2.tabRenderer.content.sectionListRenderer.contents;
            const items = Utils.findNode(contents, "itemSectionRenderer", "items", 8, false);
            return YTDataItems.VideoItem.parse(items);
          };
        }
      });
      return categories;
    };
    _processHistory = new WeakSet();
    processHistory_fn = function() {
      const contents = Utils.findNode(this.data, "contents", "videoRenderer", 9, false);
      const history = { items: [] };
      const parseItems = (contents2) => {
        contents2.forEach((section) => {
          if (!section.itemSectionRenderer)
            return;
          const header = section.itemSectionRenderer.header.itemSectionHeaderRenderer.title;
          const section_title = (header == null ? void 0 : header.simpleText) || (header == null ? void 0 : header.runs.map((run) => run.text).join(""));
          const contents3 = section.itemSectionRenderer.contents;
          const section_items = YTDataItems.VideoItem.parse(contents3);
          history.items.push({
            date: section_title,
            videos: section_items
          });
        });
        history.getContinuation = async () => {
          const citem = contents2.find((item) => item.continuationItemRenderer);
          const ctoken = citem.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
          const response = await this.session.actions.browse(ctoken, { is_ctoken: true });
          history.items = [];
          return parseItems(response.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems);
        };
        return history;
      };
      return parseItems(contents);
    };
    module2.exports = Parser;
  }
});

// lib/Innertube.js
var OAuth = require_OAuth();
var Actions = require_Actions();
var SessionBuilder = require_SessionBuilder();
var AccountManager = require_AccountManager();
var PlaylistManager = require_PlaylistManager();
var InteractionManager = require_InteractionManager();
var Search = require_Search();
var VideoInfo = require_VideoInfo();
var Channel = require_Channel2();
var Playlist = require_Playlist2();
var Library = require_Library();
var History = require_History();
var Comments = require_Comments();
var YTMusic = require_Music();
var FilterableFeed = require_FilterableFeed();
var TabbedFeed = require_TabbedFeed();
var EventEmitter = require("events");
var { PassThrough } = false ? null : require("stream");
var Request = require_Request();
var {
  InnertubeError,
  throwIfMissing,
  generateRandomString
} = require_Utils();
var OldParser = require_parser();
var Proto = require_proto();
var _player, _request, _init, init_fn;
var Innertube = class {
  constructor(config) {
    __privateAdd(this, _init);
    __privateAdd(this, _player, void 0);
    __privateAdd(this, _request, void 0);
    this.config = config || {};
    return __privateMethod(this, _init, init_fn).call(this);
  }
  signIn(credentials = {}) {
    return new Promise(async (resolve) => {
      this.oauth.init(credentials);
      if (this.oauth.validateCredentials()) {
        await this.oauth.checkAccessTokenValidity();
        this.logged_in = true;
        resolve();
      }
      this.ev.on("auth", (data) => {
        this.logged_in = true;
        if (data.status === "SUCCESS")
          resolve();
      });
    });
  }
  async signOut() {
    if (!this.logged_in)
      throw new InnertubeError("You are not signed in");
    const response = await this.oauth.revokeAccessToken();
    this.logged_in = false;
    return response;
  }
  async getInfo(video_id) {
    throwIfMissing({ video_id });
    const cpn = generateRandomString(16);
    const initial_info = this.actions.getVideoInfo(video_id, cpn);
    const continuation = this.actions.next({ video_id });
    const response = await Promise.all([initial_info, continuation]);
    return new VideoInfo(response, this.actions, __privateGet(this, _player), cpn);
  }
  async getBasicInfo(video_id) {
    throwIfMissing({ video_id });
    const cpn = generateRandomString(16);
    const response = await this.actions.getVideoInfo(video_id, cpn);
    return new VideoInfo([response, {}], this.actions, __privateGet(this, _player), cpn);
  }
  async search(query, filters = {}) {
    throwIfMissing({ query });
    const response = await this.actions.search({ query, filters });
    return new Search(this.actions, response.data);
  }
  async getSearchSuggestions(query, options = { client: "YOUTUBE" }) {
    throwIfMissing({ query });
    const response = await this.actions.getSearchSuggestions(options.client, query);
    if (options.client === "YTMUSIC" && !response.data.contents)
      return [];
    const suggestions = new OldParser(this, response.data, {
      client: options.client,
      data_type: "SEARCH_SUGGESTIONS"
    }).parse();
    return suggestions;
  }
  async getComments(video_id, sort_by) {
    throwIfMissing({ video_id });
    const payload = Proto.encodeCommentsSectionParams(video_id, {
      sort_by: sort_by || "TOP_COMMENTS"
    });
    const response = await this.actions.next({ ctoken: payload });
    return new Comments(this.actions, response.data);
  }
  async getHomeFeed() {
    const response = await this.actions.browse("FEwhat_to_watch");
    return new FilterableFeed(this.actions, response.data);
  }
  async getLibrary() {
    const response = await this.actions.browse("FElibrary");
    return new Library(response.data, this.actions);
  }
  async getHistory() {
    const response = await this.actions.browse("FEhistory");
    return new History(this.actions, response.data);
  }
  async getTrending() {
    const response = await this.actions.browse("FEtrending");
    return new TabbedFeed(this.actions, response.data);
  }
  async getSubscriptionsFeed() {
    const response = await this.actions.browse("FEsubscriptions");
    const subsfeed = new OldParser(this, response, {
      client: "YOUTUBE",
      data_type: "SUBSFEED"
    }).parse();
    return subsfeed;
  }
  async getChannel(id) {
    throwIfMissing({ id });
    const response = await this.actions.browse(id);
    return new Channel(this.actions, response.data);
  }
  async getNotifications() {
    const response = await this.actions.notifications("get_notification_menu");
    const notifications = new OldParser(this, response.data, {
      client: "YOUTUBE",
      data_type: "NOTIFICATIONS"
    }).parse();
    return notifications;
  }
  async getUnseenNotificationsCount() {
    const response = await this.actions.notifications("get_unseen_count");
    return response.data.unseenCount;
  }
  async getPlaylist(playlist_id) {
    throwIfMissing({ playlist_id });
    const response = await this.actions.browse(`VL${playlist_id.replace(/VL/g, "")}`);
    return new Playlist(this.actions, response.data);
  }
  async getStreamingData(video_id, options = {}) {
    const info = await this.getBasicInfo(video_id);
    return info.chooseFormat(options);
  }
  download(video_id, options = {}) {
    throwIfMissing({ video_id });
    const stream = new PassThrough();
    (async () => {
      const info = await this.getBasicInfo(video_id);
      stream.emit("info", info);
      info.download(options, stream);
    })();
    return stream;
  }
  getPlayer() {
    return __privateGet(this, _player);
  }
  get request() {
    return __privateGet(this, _request);
  }
};
_player = new WeakMap();
_request = new WeakMap();
_init = new WeakSet();
init_fn = async function() {
  const request = new Request(this.config);
  const session = await new SessionBuilder(this.config, request.instance).build();
  this.key = session.key;
  this.version = session.api_version;
  this.context = session.context;
  this.logged_in = !!this.config.cookie;
  this.sts = session.player.sts;
  this.player_url = session.player.url;
  __privateSet(this, _player, session.player);
  request.setSession(this);
  __privateSet(this, _request, request.instance);
  this.ev = new EventEmitter();
  this.oauth = new OAuth(this.ev, request.instance);
  this.actions = new Actions(this);
  this.account = new AccountManager(this.actions);
  this.playlist = new PlaylistManager(this.actions);
  this.interact = new InteractionManager(this.actions);
  this.music = new YTMusic(this);
  return this;
};
module.exports = Innertube;
//# sourceMappingURL=node.js.map
