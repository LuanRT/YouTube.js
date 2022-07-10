'use strict';

const Crypto = BROWSER ? require('node-forge') : require('crypto');
import UserAgent from 'user-agents';
import Flatten from 'flat';

class InnertubeError extends Error {
  constructor (message, info) {
    super(message);
    if (info) {
      this.info = info;
    }

    this.date = new Date();
    this.version = require('../../package.json').version;
  }
}

class ParsingError extends InnertubeError {}
class DownloadError extends InnertubeError {}
class MissingParamError extends InnertubeError {}
class UnavailableContentError extends InnertubeError {}
class NoStreamingDataError extends InnertubeError {}
class OAuthError extends InnertubeError {}

/**
 * Utility to help access deep properties of an object.
 *
 * @param {object} obj - the object.
 * @param {string} key - key of the property being accessed.
 * @param {string} target - anything that might be inside of the property.
 * @param {number} depth - maximum number of nested objects to flatten.
 * @param {boolean} safe - if set to true arrays will be preserved.
 * @returns {object|object[]}
 */
function findNode(obj, key, target, depth, safe = true) {
  const flat_obj = Flatten(obj, { safe, maxDepth: depth || 2 });
  const result = Object.keys(flat_obj).find((entry) => entry.includes(key) && JSON.stringify(flat_obj[entry] || '{}').includes(target));

  if (!result) throw new ParsingError(`Expected to find "${key}" with content "${target}" but got ${result}`, {
    key, target, data_snippet: `${JSON.stringify(flat_obj, null, 4).slice(0, 300)}..`
  });

  return flat_obj[result];
}

/**
 * Creates a trap to intercept property access
 * and add utilities to an object.
 *
 * @param {object} obj
 * @returns {object}
 */
function observe(obj) {
  return new Proxy(obj, {
    get (target, prop) {
      if (prop == 'get') {
        /**
         * Returns the first object to match the rule.
         *
         * @name get
         * @param {object} rule
         * @param {boolean} del_item
         * @returns {*}
         */
        return (rule, del_item) => target
          .find((obj, index) => {
            const match = deepCompare(rule, obj);

            if (match && del_item) {
              target.splice(index, 1);
            }

            return match;
          });
      }

      if (prop == 'findAll') {
        /**
         * Returns all objects that match the rule.
         *
         * @name findAll
         * @param {object} rule
         * @param {boolean} del_items
         * @returns {*}
         */
        return (rule, del_items) => target
          .filter((obj, index) => {
            const match = deepCompare(rule, obj);

            if (match && del_items) {
              target.splice(index, 1);
            }

            return match;
          });
      }

      if (prop == 'remove') {
        /**
         * Removes the item at the given index.
         *
         * @name remove
         * @param {number} index
         * @returns {*}
         */
        return (index) => target.splice(index, 1);
      }

      return Reflect.get(...arguments);
    }
  });
}


/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 *
 * @param {object} obj1
 * @param {object} obj2
 * @returns {boolean}
 */
function deepCompare(obj1, obj2) {
  const keys = Reflect.ownKeys(obj1);

  return keys.some((key) => {
    const is_text = obj2[key]?.constructor.name === 'Text';

    if (!is_text && typeof obj2[key] === 'object') {
      return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
    }

    return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
  });
}

/**
 * Returns the os tmpdir.
 * @returns {string}
 */
function getTmpdir() {
  const env = BROWSER ? {} : process.env;

  const is_windows = process.platform === 'win32';
  const trailing_slash_re = is_windows ? /[^:]\\$/ : /.\/$/;

  let path;

  if (is_windows) {
    path = env.TEMP || env.TMP ||
    `${env.SystemRoot || env.windir}\\temp`;
  } else {
    path = env.TMPDIR || env.TMP ||
    env.TEMP || '/tmp';
  }

  if (trailing_slash_re.test(path)) {
    path = path.slice(0, -1);
  }

  return path;
}

/**
 * Finds a string between two delimiters.
 *
 * @param {string} data - the data.
 * @param {string} start_string - start string.
 * @param {string} end_string - end string.
 * @returns {string}
 */
function getStringBetweenStrings(data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, 's');
  const match = data.match(regex);
  return match ? match[1] : undefined;
}

/**
 * @param {string} input
 * @returns {string}
 */
function escapeStringRegexp(input) {
  return input.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

/**
 * Returns a random user agent.
 *
 * @param {string} type - mobile | desktop
 * @returns {object}
 */
function getRandomUserAgent(type) {
  switch (type) {
    case 'mobile':
      return new UserAgent(/Android/).data;
    case 'desktop':
      return new UserAgent({
        deviceCategory: 'desktop'
      }).data;
    default:
  }
}

/**
 * Generates an authentication token from a cookies' sid.
 *
 * @param {string} sid - Sid extracted from cookies
 * @returns {string}
 */
function generateSidAuth(sid) {
  const youtube = 'https://www.youtube.com';
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const input = [ timestamp, sid, youtube ].join(' ');

  let gen_hash;

  if (BROWSER) {
    const hash = Crypto.md.sha1.create();
    hash.update(input);
    gen_hash = hash.digest().toHex();
  } else {
    const hash = Crypto.createHash('sha1');
    const data = hash.update(input, 'utf-8');
    gen_hash = data.digest('hex');
  }

  return [ 'SAPISIDHASH', [ timestamp, gen_hash ].join('_') ].join(' ');
}

/**
 * Generates a random string with the given length.
 *
 * @param {number} length
 * @returns {string}
 */
function generateRandomString(length) {
  const result = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  for (let i = 0; i < length; i++) {
    result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  }

  return result.join('');
}

/**
 * Converts time (h:m:s) to seconds.
 *
 * @param {string} time
 * @returns {number} seconds
 */
function timeToSeconds(time) {
  const params = time.split(':');

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

/**
 * Converts strings in camelCase to snake_case.
 *
 * @param {string} string The string in camelCase.
 * @returns {string}
 */
function camelToSnake(string) {
  return string[0].toLowerCase() + string.slice(1, string.length).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 * Checks if a given client is valid.
 *
 * @param {string} client
 * @returns {boolean}
 */
function isValidClient(client) {
  return [ 'YOUTUBE',
    'YTMUSIC' ].includes(client);
}

/**
 * Throws an error if given parameters are undefined.
 *
 * @param {object} params
 * @returns {void}
 */
function throwIfMissing(params) {
  for (const [ key, value ] of Object.entries(params)) {
    if (!value)
      throw new MissingParamError(`${key} is missing`);
  }
}

/**
 * Turns the ntoken transform data into a valid json array
 *
 * @param {string} data
 * @returns {string}
 */
function refineNTokenData(data) {
  return data
    .replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)')
    .replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)')
    .replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",')
    .replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]')
    .replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",')
    .replace(/""/g, '').replace(/length]\)}"/g, 'length])}');
}

export {
  findNode,
  observe,
  getTmpdir,
  getRandomUserAgent,
  generateSidAuth,
  generateRandomString,
  getStringBetweenStrings,
  camelToSnake,
  isValidClient,
  throwIfMissing,
  timeToSeconds,
  refineNTokenData,
  InnertubeError,
  UnavailableContentError,
  ParsingError,
  DownloadError,
  MissingParamError,
  NoStreamingDataError,
  OAuthError
};