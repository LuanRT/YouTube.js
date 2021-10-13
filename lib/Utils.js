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

function encodeChannelId(id, notification_pref) {
  const buff_start = `
`;
  const buff_end = [
    ``, // all
    ``, // none
    ``, // personalized
  ];

  let buff = Buffer.from(`${buff_start}${id}${buff_end[notification_pref]}`);
  return encodeURIComponent(`${buff.toString('base64')}GAAgBA==`);
}

function encodeVideoId(id) {
  return encodeURIComponent(`${Buffer.from(`` + id + `*`).toString('base64').slice(0, -1)}BQBw==`);
}

module.exports = { getRandomUserAgent, generateSidAuth, getStringBetweenStrings, createFunction, encodeVideoId, encodeChannelId };