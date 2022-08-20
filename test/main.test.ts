import fs from 'fs';
import Innertube from '..';
import { VIDEOS } from './constants';
import { streamToIterable } from '../src/utils/Utils';

describe('YouTube.js Tests', () => { 
  let yt: Innertube;
  
  beforeAll(async () => {
    yt = await Innertube.create();
  });
  
  describe('Search', () => {
    it('should search on YouTube', async () => {
      const search = await yt.search(VIDEOS[0].QUERY);
      expect(search.results?.length).toBeLessThanOrEqual(35);
      expect(search.videos.length).toBeLessThanOrEqual(35);
      expect(search.playlists.length).toBeLessThanOrEqual(35);
      expect(search.channels.length).toBeLessThanOrEqual(35);
      expect(search.has_continuation).toBe(true);
    });
    
    it('should search on YouTube Music', async () => {
      const search = await yt.music.search(VIDEOS[1].QUERY);
      expect(search.songs?.contents.length).toBeLessThanOrEqual(3);
    });
    
    it('should retrieve YouTube search suggestions', async () => {
      const suggestions = await yt.getSearchSuggestions(VIDEOS[0].QUERY);
      expect(suggestions.length).toBeLessThanOrEqual(10);
    });
    
    it('should retrieve YouTube Music search suggestions', async () => {
      const suggestions = await yt.music.getSearchSuggestions(VIDEOS[1].QUERY);
      expect(suggestions.length).toBeLessThanOrEqual(10);
    });
  });
  
  describe('Comments', () => {
    let threads: any;
    
    it('should retrieve comments', async () => {
      threads = await yt.getComments(VIDEOS[1].ID);
      expect(threads.contents.length).toBeGreaterThan(0);
    });
    
    it('should retrieve next batch of comments', async () => {
      const next = await threads.getContinuation();
      expect(next.contents.length).toBeGreaterThan(0);
    });
    
    it('should retrieve comment replies', async () => {
      const comment = threads.contents[0];
      
      const thread = await comment.getReplies();
 
      expect(thread.comment_id).toBe(comment.comment_id);
      expect(thread.replies.length).toBeLessThanOrEqual(10);
    });
  });
  
  describe('General', () => {
    it('should retrieve playlist with YouTube', async () => {
      const playlist = await yt.getPlaylist('PLLw0AzOz95FU7w2juhPECP9NyGhbZmz_t');
      expect(playlist.items.length).toBeLessThanOrEqual(100);
    });

    it('should retrieve playlist with YouTube Music', async () => {
      const playlist = await yt.music.getPlaylist('PLVbEymL-83SyVXXqT7fYX5sEvELvyGjL7');
      expect(playlist.items?.length).toBeLessThanOrEqual(100);
    });
    
    it('should retrieve home feed', async () => {
      const homefeed = await yt.getHomeFeed();
      expect(homefeed.videos.length).toBeGreaterThan(0);
    });
    
    it('should retrieve trending content', async () => {
      const trending = await yt.getTrending();
      expect(trending.videos.length).toBeGreaterThan(0);
    }); 
    
    it('should retrieve full video info', async () => {
      const info = await yt.getInfo(VIDEOS[0].ID);
      expect(info.basic_info.id).toBe(VIDEOS[0].ID);
    });
    
    it('should retrieve basic video info', async () => {
      const info = await yt.getBasicInfo(VIDEOS[0].ID);
      expect(info.basic_info.id).toBe(VIDEOS[0].ID);
    }); 
    
    it('should download video', async () => {
      const result = await download(VIDEOS[1].ID, yt);
      expect(result).toBeTruthy();
    }, 30000);
  });
});

async function download(id: string, yt: Innertube): Promise<boolean> {   
  // TODO: add back info
  // let got_video_info = false;

  const stream = await yt.download(id, { type: 'video+audio' });
  const file = fs.createWriteStream(`./${id}.mp4`);

  for await (const chunk of streamToIterable(stream)) {
    file.write(chunk);
  }
  
  return fs.existsSync(`./${id}.mp4`); // && got_video_info;
}