'use strict';

const Fs = require('fs');
const Proto = require('protons');
const Crypto = require('crypto');
const UserAgent = require('user-agents');

/**
 * Returns a random user agent.
 *
 * @param {string} type mobile | desktop
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
 * @param {string} sid Sid extracted from cookies 
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
 * @param {string} data The data.
 * @param {string} start_string Start string.
 * @param {string} end_string End string.
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
 * @returns {string} seconds
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
 */
function camelToSnake(string) {
  return string[0].toLowerCase() + string.slice(1, string.length).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
 * Encodes notification preferences protobuf.
 *
 * @param {string} channel_id
 * @param {string} index
 */
function encodeNotificationPref(channel_id, index) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));

  const buf = youtube_proto.NotificationPreferences.encode({
    channel_id,
    pref_id: {
      index
    },
    number_0: 0,
    number_1: 4
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}


/**
 * Encodes livestream message protobuf.
 *
 * @param {string} channel_id
 * @param {string} video_id 
 */
function encodeMessageParams(channel_id, video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));

  const buf = youtube_proto.LiveMessageParams.encode({
    params: {
      ids: {
        channel_id,
        video_id
      }
    },
    number_0: 1,
    number_1: 4
  });

  return Buffer.from(encodeURIComponent(Buffer.from(buf).toString('base64'))).toString('base64');
}


/**
 * Encodes comment params protobuf.
 *
 * @param {string} video_id
 */
function encodeCommentParams(video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));

  const buf = youtube_proto.CreateCommentParams.encode({
    video_id,
    params: {
      index: 0
    },
    number: 7
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}


/**
 * Encodes search filter protobuf
 *
 * @param {string} period Period in which a video is uploaded: any | hour | day | week | month | year
 * @param {string} duration The duration of a video: any | short | long
 * @param {string} order The order of the search results: relevance | rating | age | views
 */
function encodeFilter(period, duration, order) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));

  const periods = { 'any': null, 'hour': 1, 'day': 2, 'week': 3, 'month': 4, 'year': 5 };
  const durations = { 'any': null, 'short' : 1, 'long': 2 };
  const orders = { 'relevance': null, 'rating': 1, 'age': 2, 'views' : 3 };
  
  const search_filter_buff = youtube_proto.SearchFilter.encode({
    number: orders[order],
    filter: {
      param_0: periods[period],
      param_1: (period == 'hour' && order == 'relevance') ? null : 1,
      param_2: durations[duration]
    }
  });
  
  return encodeURIComponent(Buffer.from(search_filter_buff).toString('base64'));
}

module.exports = { getRandomUserAgent, generateSidAuth, getStringBetweenStrings, camelToSnake, timeToSeconds, encodeMessageParams, encodeCommentParams, encodeNotificationPref, encodeFilter };