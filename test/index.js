'use strict';

const Fs = require('fs');
const Innertube = require('..');
const NToken = require('../lib/deciphers/NToken');
const Signature = require('../lib/deciphers/Signature');
const Constants = require('./constants');

let failed_tests_count = 0;

async function performTests() {
  const youtube = await new Innertube().catch((error) => error);
  assert(!(youtube instanceof Error), `should retrieve Innertube configuration data`, youtube);

  if (!(youtube instanceof Error)) {
    const homefeed = await youtube.getHomeFeed().catch((error) => error);
    assert(!(homefeed instanceof Error), `should retrieve recommendations`, homefeed);

    const musicfeed = await youtube.getMusicFeed().catch((error) => error);
    assert(!(musicfeed instanceof Error), `should retrieve music recommendations`, musicfeed);
    
    const ytsearch = await youtube.search('Carl Sagan - Documentary').catch((error) => error);
    assert(!(ytsearch instanceof Error), `should search on YouTube`, ytsearch);
    
    const ytmsearch = await youtube.search('Logic - Obediently Yours', { client: 'YTMUSIC' }).catch((error) => error);
    assert(!(ytmsearch instanceof Error), `should search on YouTube Music`, ytmsearch);
     
    const ytsearch_suggestions = await youtube.getSearchSuggestions('test', { client: 'YOUTUBE' }).catch((error) => error);
    assert(!(ytsearch_suggestions instanceof Error), `should retrieve YouTube search suggestions`, ytsearch_suggestions);
    
    const ytmsearch_suggestions = await youtube.getSearchSuggestions('test', { client: 'YTMUSIC' }).catch((error) => error);
    assert(!(ytmsearch_suggestions instanceof Error), `should retrieve YouTube Music search suggestions`, ytmsearch_suggestions);
     
    const details = await youtube.getDetails(Constants.test_video_id).catch((error) => error);
    assert(!(details instanceof Error), `should retrieve details for ${Constants.test_video_id}`, details);

    const comments = await youtube.getComments(Constants.test_video_id).catch((error) => error);
    assert(!(comments instanceof Error), `should retrieve comments for ${Constants.test_video_id}`, comments);
    
    const ytplaylist = await youtube.getPlaylist(ytmsearch?.results?.community_playlists[0].id, { client: 'YOUTUBE' }).catch((error) => error);
    assert(!(ytplaylist instanceof Error), `should retrieve and parse playlist with YouTube`, ytplaylist);
    
    const ytmplaylist = await youtube.getPlaylist(ytmsearch?.results?.community_playlists[0].id, { client: 'YTMUSIC' }).catch((error) => error);
    assert(!(ytmplaylist instanceof Error), `should retrieve and parse playlist with YouTube Music`, ytmplaylist);
    
    const video = await downloadVideo(Constants.test_video_id, youtube).catch((error) => error);
    assert(!(video instanceof Error), `should download video (${Constants.test_video_id})`, video);
  }

  const n_token = new NToken(Constants.n_scramble_sc, Constants.original_ntoken).transform();
  assert(n_token == Constants.expected_ntoken, `should transform n token into ${Constants.expected_ntoken}`, n_token);

  const transformed_url = new Signature(Constants.test_url, { sig_decipher_sc: Constants.sig_decipher_sc }).decipher();
  assert(transformed_url == Constants.expected_url, `should decipher signature`, transformed_url);

  if (failed_tests_count > 0)
    throw new Error(`${failed_tests_count} tests have failed`);
}

function downloadVideo(id, youtube) {
  return new Promise((resolve, reject) => {
    let got_video_info = false;
    const stream = youtube.download(id, { type: 'videoandaudio' });
    stream.pipe(Fs.createWriteStream(`./${id}.mp4`));
    stream.on('end', () => Fs.existsSync(`./${id}.mp4`) && got_video_info && resolve() || reject());
    stream.on('info', () => got_video_info = true);
    stream.on('error', (err) => reject(err));
  });
}

function assert(outcome, description, data) {
  const pass_fail = outcome ? 'pass' : 'fail';
  
  console.info(pass_fail, ':', description);
  !outcome && (failed_tests_count += 1);
  !outcome && console.error('Error: ', data);

  return outcome;
}

performTests();