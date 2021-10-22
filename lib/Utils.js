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

function createFunction(input, raw_code) { // I hate this
  return new Function(input, raw_code);
}

function encodeNotificationPref(channel_id, index) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));
  const codes = ['\b\x02' /* ALL */ , '\b\x03' /* NONE */ , '\b\x03' /* PERSONALIZED */ ];

  const buf = youtube_proto.NotificationPreferences.encode({
    channel_id: channel_id,
    pref_code: codes[index],
    number_0: 0,
    number_1: 4
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}

function generateMessageParams(channel_id, video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));
  const ids = ["*'", '\n\x18', channel_id, '\x12\v', video_id].join('');

  const buf = youtube_proto.LiveMessageParams.encode({
    ids: ids,
    number_0: 1,
    number_1: 4
  });

  return Buffer.from(Buffer.from(buf).toString('base64')).toString('base64');
}

function generateCommentParams(video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/proto/youtube.proto`));

  const buf = youtube_proto.CreateCommentParams.encode({
    video_id,
    params: '\b\x00',
    number: 7
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}

module.exports = { getRandomUserAgent, generateSidAuth, getStringBetweenStrings, createFunction, generateMessageParams, generateCommentParams, encodeNotificationPref };