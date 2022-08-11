'use strict';

const Fs = require('fs');
const { Innertube } = require('../dist');
const Constants = require('./constants');
const { streamToIterable } = require('../dist/src/utils/Utils');

describe('YouTube.js Tests', () => { 
  beforeAll(async () => {
    this.session = await Innertube.create();
  });
  
  describe('Search', () => {
    it('Should search on YouTube', async () => {
      const search = await this.session.search(Constants.VIDEOS[0].QUERY);
      expect(search.results.length).toBeLessThanOrEqual(30);
      expect(search.videos.length).toBeLessThanOrEqual(30);
      expect(search.playlists.length).toBeLessThanOrEqual(30);
      expect(search.channels.length).toBeLessThanOrEqual(30);
      expect(search.has_continuation).toBe(true);
    });
    
    it('Should search on YouTube Music', async () => {
      const search = await this.session.music.search(Constants.VIDEOS[1].QUERY);
      expect(search.songs.contents.length).toBeLessThanOrEqual(3);
    });
    
    it('Should retrieve YouTube search suggestions', async () => {
      const suggestions = await this.session.getSearchSuggestions(Constants.VIDEOS[0].QUERY);
      expect(suggestions.length).toBeLessThanOrEqual(10);
    });
    
    it('Should retrieve YouTube Music search suggestions', async () => {
      const suggestions = await this.session.music.getSearchSuggestions(Constants.VIDEOS[1].QUERY);
      expect(suggestions.length).toBeLessThanOrEqual(10);
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
});

async function download(id, session) {   
  // TODO: add back info
  // let got_video_info = false;

  const stream = await session.download(id, { type: 'video+audio' });
  const file = Fs.createWriteStream(`./${id}.mp4`);
  for await (const chunk of streamToIterable(stream)) {
    file.write(chunk);
  }
  return Fs.existsSync(`./${id}.mp4`); // && got_video_info;
}