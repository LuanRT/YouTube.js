'use strict';

const Fs = require('fs');
const Innertube = require('..');
const NToken = require('../lib/NToken');
const SigDecipher = require('../lib/Sig');
const Constants = require('./constants');

async function performTests() {
  const youtube = await new Innertube().catch((error) => error);
  assert(youtube instanceof Error ? false : true, `should retrieve Innertube configuration data`);
  
  const search = await youtube.search('Carl Sagan - Documentary').catch((error) => error);
  assert((search instanceof Error ? false : true) && search.videos.length >= 1, `should search videos`);
  
  const details = await youtube.getDetails(Constants.test_video_id).catch((error) => error);
  assert(details instanceof Error ? false : true, `should retrieve details for ${Constants.test_video_id}`);
  
  const comments = await youtube.getComments(Constants.test_video_id).catch((error) => error);
  assert(comments instanceof Error ? false : true, `should retrieve comments for ${Constants.test_video_id}`);

  const video = await downloadVideo(Constants.test_video_id_1, youtube).catch((error) => error);
  assert(video instanceof Error ? false : true, `should download video (${Constants.test_video_id_1})`);
    
  const n_token = new NToken(Constants.n_scramble_sc).transform('PqjqqJjdB9K821VIisj');
  assert(n_token == Constants.expected_ntoken, `should transform n token into ${Constants.expected_ntoken}`);

  const n_sig = new SigDecipher(Constants.test_url, Constants.client_version, { sig_decipher_sc: Constants.sig_decipher_sc, ntoken_sc: Constants.n_scramble_sc }).decipher();
  assert(n_sig == Constants.expected_url, `should correctly decipher signature`);
}

function downloadVideo(id, youtube) {
  return new Promise((resolve, reject) => {
    let got_video_info = false;
    const stream = youtube.download(id, { type: 'videoandaudio' });
    stream.pipe(Fs.createWriteStream(`./${id}.mp4`));
    stream.on('end', () => Fs.existsSync(`./${id}.mp4`) && got_video_info && resolve() || reject());
    stream.on('info', () => got_video_info = true);
    stream.on('error', () => reject());
  });
}

function assert(outcome, description) { 
  const pass_fail = outcome ? 'pass' : 'fail'; 
  console.info(pass_fail, ':', description);
  return outcome;
};

performTests();