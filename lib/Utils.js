'use strict';

const Fs = require('fs');
const Crypto = require('crypto');
const UserAgent = require('user-agents');

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
 * Gets a string between two delimiters.
 *
 * @param {string} data - The data.
 * @param {string} start_string - Start string.
 * @param {string} end_string - End string.
 */
function getStringBetweenStrings(data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
  const match = data.match(regex);
  return match ? match[1] : undefined;
}

function escapeStringRegexp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
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

module.exports = { getRandomUserAgent, generateSidAuth, getStringBetweenStrings, camelToSnake, timeToSeconds, refineNTokenData };