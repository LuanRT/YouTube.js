'use strict';

const Fs = require('fs');
const Innertube = require('..');
const NToken = require('../lib/deciphers/NToken');
const Signature = require('../lib/deciphers/Signature');
const Constants = require('./constants');

describe('YouTube.js Tests', () => { 
  beforeAll(async () => {
    this.session = await new Innertube();
  });
  
  describe('Search', () => {
    it('Should search on YouTube', async () => {
      const search = await this.session.search(Constants.VIDEOS[0].QUERY, { client: 'YOUTUBE' });
      expect(search.videos.length).toBeLessThanOrEqual(20);
    });
    
    it('Should search on YouTube Music', async () => {
      const search = await this.session.search(Constants.VIDEOS[1].QUERY, { client: 'YTMUSIC' });
      expect(search.results.songs.length).toBeLessThanOrEqual(3);
    });
    
    it('Should retrieve YouTube search suggestions', async () => {
      const suggestions = await this.session.getSearchSuggestions(Constants.VIDEOS[0].QUERY, { client: 'YOUTUBE' });
      expect(suggestions.results.length).toBeLessThanOrEqual(10);
    });
    
    it('Should retrieve YouTube Music search suggestions', async () => {
      const suggestions = await this.session.getSearchSuggestions(Constants.VIDEOS[1].QUERY, { client: 'YTMUSIC' });
      expect(suggestions.results.length).toBeLessThanOrEqual(10);
    });
  });
  
  describe('Comments', () => {
    it('Should retrieve comments', async () => {
      this.comments = await this.session.getComments(Constants.VIDEOS[1].ID);
      expect(this.comments.items.length).toBeLessThanOrEqual(20);
    });
    
    it('Should retrieve comment thread continuation', async () => {
      const next = await this.comments.getContinuation();
      expect(next.items.length).toBeLessThanOrEqual(20);
    });
    
    it('Should retrieve comment replies', async () => {
      const top_comment = this.comments.items[0];
      const replies = await top_comment.getReplies();
      expect(replies.items.length).toBeLessThanOrEqual(10);
    });
  });
  
  describe('Playlists', () => {
    it('Should retrieve playlist with YouTube', async () => {
      const playlist = await this.session.getPlaylist('PLLw0AzOz95FU7w2juhPECP9NyGhbZmz_t', { client: 'YOUTUBE' });
      expect(playlist.items.length).toBeLessThanOrEqual(100);
    });
    
    it('Should retrieve playlist with YouTube Music', async () => {
      const playlist = await this.session.getPlaylist('PLLw0AzOz95FU7w2juhPECP9NyGhbZmz_t', { client: 'YTMUSIC' });
      expect(playlist.items.length).toBeLessThanOrEqual(100);
    });
  });
  
  describe('General', () => {
    it('Should retrieve home feed', async () => {
      const homefeed = await this.session.getHomeFeed();
      expect(homefeed.videos.length).toBeLessThanOrEqual(30);
    });
    
    it('Should retrieve trending content', async () => {
      const trending = await this.session.getTrending();
      expect(trending.now.content[0].videos.length).toBeLessThanOrEqual(100);
    }); 
    
    it('Should retrieve video info', async () => {
      const details = await this.session.getDetails(Constants.VIDEOS[0].ID);
      expect(details.id).toBe(Constants.VIDEOS[0].ID);
    }); 
    
    it('Should download video', async () => {
      const result = await download(Constants.VIDEOS[1].ID, this.session);
      expect(result).toBeTruthy();
    });
  });
  
  describe('Deciphers', () => {
    it('Should decipher signature', () => {
      const result = new Signature(Constants.DECIPHERS.SIG.ORIGINAL_URL, Constants.DECIPHERS.SIG.ALGORITHM).decipher();
      expect(result).toEqual(Constants.DECIPHERS.SIG.DECIPHERED_URL);
    });
    
    it('Should decipher ntoken', () => {
      const result = new NToken(Constants.DECIPHERS.N.ALGORITHM, Constants.DECIPHERS.N.ORIGINAL_TOKEN).transform();
      expect(result).toEqual(Constants.DECIPHERS.N.DECIPHERED_TOKEN);
    });
  });
});

function download(id, session) {   
  let got_video_info = false;

  return new Promise((resolve, reject) => {
    const stream = session.download(id, { type: 'videoandaudio' });
    stream.pipe(Fs.createWriteStream(`./${id}.mp4`));
    stream.on('end', () => resolve(Fs.existsSync(`./${id}.mp4`) && got_video_info));
    stream.on('info', () => got_video_info = true);
    stream.on('error', () => resolve(false));
  });
}