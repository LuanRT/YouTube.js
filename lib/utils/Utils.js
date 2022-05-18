'use strict';

const Crypto = require('crypto');
const UserAgent = require('user-agents');
const Flatten = require('flat');

class InnertubeError extends Error {
  constructor (message, info) {
    super(message);
    
    info && (this.info = info);

    this.date = new Date();
    this.version = require('../../package.json').version;
  }
}

class ParsingError extends InnertubeError {}
class DownloadError extends InnertubeError {}
class MissingParamError extends InnertubeError {}
class UnavailableContentError extends InnertubeError {}
class NoStreamingDataError extends InnertubeError {}

/**
 * Utility to help access deep properties of an object.
 * 
 * @param {object} obj - the object.
 * @param {string} key - key of the property being accessed.
 * @param {string} target - anything that might be inside of the property.
 * @param {number} depth - maximum number of nested objects to flatten.
 * @param {boolean} safe - if set to true arrays will be preserved.
 * 
 * @returns {object|Array.<any>}
 */
function findNode(obj, key, target, depth, safe = true) {
  const flat_obj = Flatten(obj, { safe, maxDepth: depth || 2 });
  const result = Object.keys(flat_obj).find((entry) => entry.includes(key) && JSON.stringify(flat_obj[entry] || '{}').includes(target));
  if (!result) throw new ParsingError(`Expected to find "${key}" with content "${target}" but got ${result}`, { key, target, data_snippet: `${JSON.stringify(flat_obj, null, 4).slice(0, 300)}..` });
  return flat_obj[result];
}

function escapeStringRegexp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

/**
 * Finds a string between two delimiters.
 *
 * @param {string} data - the data.
 * @param {string} start_string - start string.
 * @param {string} end_string - end string.
 * 
 * @returns {string}
 */
function getStringBetweenStrings(data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, 's');
  const match = data.match(regex);
  return match ? match[1] : undefined;
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
      return new UserAgent({ deviceCategory: 'desktop' }).data;
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
  const input = [timestamp, sid, youtube].join(' ');

  let hash = Crypto.createHash('sha1');
  let data = hash.update(input, 'utf-8');
  let gen_hash = data.digest('hex');

  return ['SAPISIDHASH', [timestamp, gen_hash].join('_')].join(' ');
}

/**
 * Generates a random string with a given length.
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
  let params = time.split(':');
  return parseInt(({
    3: +params[0] * 3600 + +params[1] * 60 + +params[2],
    2: +params[0] * 60 + +params[1],
    1: +params[0]
  })[params.length]);
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
  return [ 'YOUTUBE', 'YTMUSIC' ].includes(client);
}

/**
 * Throws an error if given parameters are undefined.
 * 
 * @param {object} params
 * @returns
 */
function throwIfMissing(params) {
  for (const [key, value] of Object.entries(params)) {
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

const errors = { InnertubeError, UnavailableContentError, ParsingError, DownloadError, MissingParamError, NoStreamingDataError };
const functions = { findNode, getRandomUserAgent, generateSidAuth, generateRandomString, getStringBetweenStrings, camelToSnake, isValidClient, throwIfMissing, timeToSeconds, refineNTokenData };

module.exports = { ...functions, ...errors };