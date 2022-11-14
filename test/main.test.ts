import fs from 'fs';
import Innertube from '..';
import { CHANNELS, VIDEOS } from './constants';
import { streamToIterable } from '../src/utils/Utils';

describe('YouTube.js Tests', () => { 
  let yt: Innertube;
  
  beforeAll(async () => {
    yt = await Innertube.create();
  });
  
  describe('Info', () => {
    let info: any;
    
    it('should retrieve full video info', async () => {
      info = await yt.getInfo(VIDEOS[0].ID);
      expect(info.basic_info.id).toBe(VIDEOS[0].ID);
    });

    it('should have captions on full video info', async () => {
      expect(info.captions?.caption_tracks.length).toBeGreaterThan(0);
    });

    it('should retrieve basic video info', async () => {
      const b_info = await yt.getBasicInfo(VIDEOS[0].ID);
      expect(b_info.basic_info.id).toBe(VIDEOS[0].ID);
    });
  });
  
  describe('Search', () => {
    let search: any;
    
    it('should search', async () => {
      search = await yt.search(VIDEOS[0].QUERY);
      expect(search.results.length).toBeGreaterThanOrEqual(5);
      expect(search.playlists).toBeDefined();
      expect(search.channels).toBeDefined();
      expect(search.has_continuation).toBe(true);
    });

    it('should search with WatchCardHeroVideo parse', async () => {
      search = await yt.search(VIDEOS[2].QUERY);
      expect(search.results.length).toBeGreaterThanOrEqual(5);
      expect(search.playlists).toBeDefined();
      expect(search.channels).toBeDefined();
      expect(search.has_continuation).toBe(true);
    });
    
    it('should retrieve search continuation', async () => {
      const next = await search.getContinuation();
      expect(next.results.length).toBeGreaterThanOrEqual(5);
      expect(search.playlists).toBeDefined();
      expect(search.channels).toBeDefined();
      expect(search.has_continuation).toBe(true);
    });
    
    it('should retrieve search suggestions', async () => {
      const suggestions = await yt.getSearchSuggestions(VIDEOS[0].QUERY);
      expect(suggestions.length).toBeGreaterThanOrEqual(1);
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
    it('should retrieve playlist', async () => {
      const playlist = await yt.getPlaylist('PLLw0AzOz95FU7w2juhPECP9NyGhbZmz_t');
      expect(playlist.items.length).toBeLessThanOrEqual(100);
    });
    
    it('should retrieve channel', async () => {
      const channel = await yt.getChannel(CHANNELS[0].ID);
      expect(channel.videos.length).toBeGreaterThan(0);
      expect(channel.shelves.length).toBeGreaterThan(0);

      const videos_tab = await channel.getVideos();
      expect(videos_tab.videos.length).toBeGreaterThan(0);

      const filtered_list = await videos_tab.applyFilter('Popular');
      expect(filtered_list.videos.length).toBeGreaterThan(0);
    });

    it('should retrieve home feed', async () => {
      const homefeed = await yt.getHomeFeed();
      expect(homefeed.header).toBeDefined();
      expect(homefeed.contents).toBeDefined();
      expect(homefeed.videos.length).toBeGreaterThan(0);
    });
    
    it('should retrieve trending content', async () => {
      const trending = await yt.getTrending();
      expect(trending.videos.length).toBeGreaterThan(0);
    });
    
    it('should download video', async () => {
      const result = await download(VIDEOS[1].ID, yt);
      expect(result).toBeTruthy();
    }, 30000);
  });
  
  describe('YouTube Music', () => {
    let search: any;

    it('should search', async () => {
      search = await yt.music.search(VIDEOS[1].QUERY);
      expect(search.songs?.contents.length).toBeLessThanOrEqual(3);
    });
    
    it('should retrieve search suggestions', async () => {
      const suggestions = await yt.music.getSearchSuggestions(VIDEOS[1].QUERY);
      expect(suggestions.length).toBeLessThanOrEqual(10);
    });
    
    it('should retrieve track info', async () => {
      const info = await yt.music.getInfo(VIDEOS[1].ID);
      expect(info.basic_info.id).toBe(VIDEOS[1].ID);
    });
    
    it('should retrieve the "Related" tab', async () => {
      const info = await yt.music.getInfo(VIDEOS[1].ID);
      const related = await info.getRelated();
      expect((related as any).length).toBeGreaterThan(3);
    });
    
    it('should retrieve albums', async () => {
      const album = await yt.music.getAlbum(search.albums?.contents[0]?.id);
      expect(album.contents).toBeDefined();
    });
    
    it('should retrieve artists', async () => {
      const artist = await yt.music.getArtist(search.artists?.contents[0]?.id);
      expect(artist.sections).toBeDefined();
    });
    
    it('should retrieve playlists', async () => {
      const playlist = await yt.music.getPlaylist(search.playlists?.contents[0]?.id);
      expect(playlist.items).toBeDefined();
    });
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