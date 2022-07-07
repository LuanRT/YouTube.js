'use strict';

const Fs = require('fs');
const Innertube = require('../../build/node');
const Constants = require('../constants');

describe('YouTube.js Tests', () => { 
  beforeAll(async () => {
    this.session = await new Innertube();
  });
  
  describe('Search', () => {
    it('Should search on YouTube', async () => {
      const search = await this.session.search(Constants.VIDEOS[0].QUERY);
      expect(search.results.length).toBeLessThanOrEqual(30);
    });
    
    
    it('Should search on YouTube Music', async () => {
      const search = await this.session.music.search(Constants.VIDEOS[1].QUERY);
      expect(search.songs.contents.length).toBeLessThanOrEqual(3);
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
      this.threads = await this.session.getComments(Constants.VIDEOS[1].ID);
      expect(this.threads.contents.length).toBeGreaterThan(0);
    });
    
    it('Should retrieve next batch of comments', async () => {
      const next = await this.threads.getContinuation();
      expect(next.contents.length).toBeGreaterThan(0);
    });
    
    it('Should retrieve comment replies', async () => {
      const comment = this.threads.contents[0];
      
      const thread = await comment.getReplies();
 
      expect(thread.comment_id).toBe(comment.comment_id);
      expect(thread.replies.length).toBeLessThanOrEqual(10);
    });
  });
  
  describe('General', () => {
    it('Should retrieve playlist with YouTube', async () => {
      const playlist = await this.session.getPlaylist('PLLw0AzOz95FU7w2juhPECP9NyGhbZmz_t', { client: 'YOUTUBE' });
      expect(playlist.items.length).toBeLessThanOrEqual(100);
    });
    
    it('Should retrieve home feed', async () => {
      const homefeed = await this.session.getHomeFeed();
      expect(homefeed.videos.length).toBeGreaterThan(0);
    });
    
    it('Should retrieve trending content', async () => {
      const trending = await this.session.getTrending();
      expect(trending.videos.length).toBeGreaterThan(0);
    }); 
    
    it('Should retrieve video info', async () => {
      const info = await this.session.getInfo(Constants.VIDEOS[0].ID);
      expect(info.basic_info.id).toBe(Constants.VIDEOS[0].ID);
    }); 
    
    it('Should download video', async () => {
      const result = await download(Constants.VIDEOS[1].ID, this.session);
      expect(result).toBeTruthy();
    }, 30000);
  });
  
  // Run decipher tests only on newer versions of node since we're requiring them directly.
  if (process.version.match(/^v(\d+\.\d+)/)[1] > 12) {
    const { default: NToken } = require('../../lib/deciphers/NToken');
    const { default: Signature} = require('../../lib/deciphers/Signature');
    
    describe('Deciphers', () => {
      it('Should decipher signature', () => {
        const result = Signature.fromSourceCode(Constants.DECIPHERS.SIG.ALGORITHM).decipher(Constants.DECIPHERS.SIG.ORIGINAL_URL);
        expect(result).toEqual(Constants.DECIPHERS.SIG.DECIPHERED_URL);
      });
    
      it('Should decipher ntoken', () => {
        const result = NToken.fromSourceCode(Constants.DECIPHERS.N.ALGORITHM).transform(Constants.DECIPHERS.N.ORIGINAL_TOKEN);
        expect(result).toEqual(Constants.DECIPHERS.N.DECIPHERED_TOKEN);
      });
    });
  }
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