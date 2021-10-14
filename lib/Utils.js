'use strict';

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

function createFunction(input, raw_code) { // I hate this
  return new Function(input, raw_code);
}

function encodeChannelIdWithVideoId(channel_id, video_id) {
  const buff_start = `
)*'
`;
  const buff_middle = ``;
  const buff_end = ``;

  // Yes, we also have to base64 these twice lol
  let encodedIds = Buffer.from([buff_start, channel_id, buff_middle, video_id, buff_end].join('')).toString('base64');
  return `${Buffer.from(encodedIds).toString('base64').slice(0, -4)}JTNE`;
}

function encodeChannelId(id, notification_pref) {
  const buff_start = `
`;
  const buff_end = [
    ``, // all
    ``, // none
    ``, // personalized
  ];

  let encodedId = Buffer.from([buff_start, id, buff_end[notification_pref]].join('')).toString('base64');
  return encodeURIComponent(`${encodedId}GAAgBA==`);
}

function encodeVideoId(id) {
  return encodeURIComponent(`${Buffer.from(`` + id + `*`).toString('base64').slice(0, -1)}BQBw==`);
}

module.exports = { getRandomUserAgent, generateSidAuth, getStringBetweenStrings, createFunction, encodeChannelIdWithVideoId, encodeVideoId, encodeChannelId };