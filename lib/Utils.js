'use strict';

const Crypto = require('crypto');
const UserAgent = require('user-agents');

function generateSidAuth (sid) {
  const youtube = 'https://www.youtube.com';
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const input = [timestamp, sid, youtube].join(' ');
 
  let hash = Crypto.createHash('sha1');
  let data = hash.update(input, 'utf-8');
  let gen_hash = data.digest('hex');
 
  return ['SAPISIDHASH', [timestamp, gen_hash].join('_')].join(' ');
}

function encodeId (id) {
  return encodeURI(new Buffer.from(``+id+`*`).toString('base64').replace('==', '')+'BQBw==');
}

function getRandomUserAgent (type) {
  switch (type) {
    case 'mobile':
      return new UserAgent(/Android/).data;
    case 'desktop':
      return new UserAgent({ deviceCategory: 'desktop' }).data;
    default:
  }
}

function getStringBetweenStrings (data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
  const match = data.match(regex);
  return match ? match[1] : undefined;
}

function escapeStringRegexp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

module.exports = { generateSidAuth, encodeId, getRandomUserAgent, getStringBetweenStrings };