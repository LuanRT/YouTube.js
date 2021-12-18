'use strict';

const Fs = require('fs');
const Proto = require('protons');
const Crypto = require('crypto');
const UserAgent = require('user-agents');

function getRandomUserAgent(type) {
  switch (type) {
    case 'mobile':
      return new UserAgent(/Android/).data;
    case 'desktop':
      return new UserAgent({ deviceCategory: 'desktop' }).data;
    default:
  }
}

function generateSidAuth(sid) {
  const youtube = 'https://www.youtube.com';
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const input = [timestamp, sid, youtube].join(' ');

  let hash = Crypto.createHash('sha1');
  let data = hash.update(input, 'utf-8');
  let gen_hash = data.digest('hex');

  return ['SAPISIDHASH', [timestamp, gen_hash].join('_')].join(' ');
}

function getStringBetweenStrings(data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
  const match = data.match(regex);
  return match ? match[1] : undefined;
}

function escapeStringRegexp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

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

function generateMessageParams(channel_id, video_id) {
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

function generateCommentParams(video_id) {
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

function encodeFilter(period, duration, order) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));

  const periods = { 'any': null, 'hour': 1, 'day': 2, 'week': 3, 'month': 4, 'year': 5 };
  const durations = { 'any': null, 'short': 1, 'long': 2 };
  const orders = { 'relevance': null, 'rating': 1, 'age': 2, 'views': 3 };

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

module.exports = { getRandomUserAgent, generateSidAuth, getStringBetweenStrings, generateMessageParams, generateCommentParams, encodeNotificationPref, encodeFilter };