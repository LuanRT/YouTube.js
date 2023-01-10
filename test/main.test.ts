import fs from 'fs';
import Innertube from '..';
import { CHANNELS, VIDEOS } from './constants';
import { streamToIterable } from '../src/utils/Utils';
import TextRun from '../src/parser/classes/misc/TextRun';
import Comments from '../dist/src/parser/youtube/Comments';

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

    it('should have captions', () => {
      expect(info.captions?.caption_tracks.length).toBeGreaterThan(0);
    });

    it('should have chapters', () => {
      const markers_map = info.player_overlays?.decorated_player_bar?.player_bar?.markers_map;
      
      const chapters = (
        markers_map?.get({ marker_key: 'AUTO_CHAPTERS' }) ||
        markers_map?.get({ marker_key: 'DESCRIPTION_CHAPTERS' })
      )?.value?.chapters;

      expect(chapters).toBeDefined();
    });

    it('should have heatmap', () => {
      const markers_map = info.player_overlays?.decorated_player_bar?.player_bar?.markers_map;
      const heatmap = markers_map?.get({ marker_key: 'HEATSEEKER' })?.value?.heatmap;
      expect(heatmap).toBeDefined();
    });

    it('should have watch next feed', () => {
      expect(info.watch_next_feed).toBeDefined();
    });
    
    it('should retrieve basic video info', async () => {
      const b_info = await yt.getBasicInfo(VIDEOS[0].ID);
      expect(b_info.basic_info.id).toBe(VIDEOS[0].ID);
    });

    it('should be upcoming', async () => {
      const b_info = await yt.getBasicInfo(VIDEOS[4].ID);
      expect(b_info.basic_info.is_upcoming).toBe(true);
    });

    it('should be live', async () => {
      const b_info = await yt.getBasicInfo(VIDEOS[5].ID);
      expect(b_info.basic_info.is_live).toBe(true);
    });

    it('should extract live stream start timestamp', async () => {
      const b_info = await yt.getBasicInfo(VIDEOS[4].ID);
      expect(b_info.basic_info.start_timestamp).not.toBeNull()
      expect(b_info.basic_info.start_timestamp!.toISOString()).toBe('2024-03-30T23:00:00.000Z');
    })
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
    let comment_section: Comments;
    
    it('should retrieve comments', async () => {
      comment_section = await yt.getComments(VIDEOS[1].ID);
      expect(comment_section.contents.length).toBeGreaterThan(0);
    });

    it('should parse formatted comments', async () => {
      const comment_section = await yt.getComments(VIDEOS[3].ID);
      const channel_owner_thread = comment_section.contents.find(t => t.comment?.author_is_channel_owner);
      expect(channel_owner_thread).not.toBeUndefined();

      expect(channel_owner_thread!.comment?.content.runs?.length).toBeGreaterThan(0);
      const runs = channel_owner_thread!.comment!.content.runs! as TextRun[];

      expect(runs[0].bold).toBeTruthy();
      expect(runs[2].italics).toBeTruthy();
      expect(runs[4].strikethrough).toBeTruthy();
    })
    
    it('should retrieve next batch of comments', async () => {
      const next = await comment_section.getContinuation();
      expect(next.contents.length).toBeGreaterThan(0);
    });
    
    it('should retrieve comment replies', async () => {
      const thread = comment_section.contents.first();
      expect(thread?.has_replies).toBe(true);

      const full_thread = await thread?.getReplies();
 
      expect(full_thread?.comment?.comment_id).toBe(thread?.comment?.comment_id);
      expect(full_thread?.replies?.length).toBeLessThanOrEqual(10);
    });

  });
  
  describe('General', () => {
    it('should create sessions without a player instance', async () => {
      const nop_yt = await Innertube.create({ retrieve_player: false });
      expect(nop_yt.session.player).toBeUndefined();
    });

    it('should create a session from data generated locally', async () => {
      const loc_yt = await Innertube.create({ generate_session_locally: true, retrieve_player: false });
      expect(loc_yt.session.context).toBeDefined();
    });

    it('should resolve a URL', async () => {
      const url = await yt.resolveURL('https://www.youtube.com/@linustechtips');
      expect(url.payload.browseId).toBe(CHANNELS[0].ID);
    });

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