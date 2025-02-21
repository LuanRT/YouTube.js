import { Innertube, YT, YTMusic, YTNodes } from '../bundle/node.cjs';

jest.useRealTimers();

describe('YouTube.js Tests', () => {
  let innertube: Innertube;

  beforeAll(async () => {
    innertube = await Innertube.create({ generate_session_locally: true });
  });

  describe('Main', () => {
    // test('Innertube#getInfo', async () => {
    //   const info = await innertube.getInfo('bUHZ2k9DYHY');
    //   expect(info.basic_info.id).toBe('bUHZ2k9DYHY');
    // });

    // test('Innertube#getBasicInfo', async () => {
    //   const info = await innertube.getBasicInfo('bUHZ2k9DYHY');
    //   expect(info.basic_info.id).toBe('bUHZ2k9DYHY');
    // });

    // test('Innertube#getBasicInfo (Android)', async () => {
    //   const info = await innertube.getBasicInfo('ksEYRaIpP7A');
    //   expect(info.basic_info.id).toBe('ksEYRaIpP7A');
    // });

    test('Innertube#getShortsWatchItem', async () => {
      const info = await innertube.getShortsVideoInfo('jOydBrmmjfk');
      expect(info.watch_next_feed?.length).toBeGreaterThan(0);
    });

    test('Innertube#getShortsWatchItem#getWatchNextContinuation', async () => {
      const info = await innertube.getShortsVideoInfo('jOydBrmmjfk');
      expect(info.watch_next_feed?.length).toBeGreaterThan(0);
      const previous_data = info.watch_next_feed;
      const cont = await info.getWatchNextContinuation()
      expect(cont.watch_next_feed?.length).toBeGreaterThan(0);
      expect(previous_data).not.toEqual(cont.watch_next_feed)
    });

    // describe('Innertube#getBasicInfo', () => {
    //   test('Format#language multiple audio tracks', async () => {
    //     const info = await innertube.getBasicInfo('Kn56bMZ9OE8')
    //     expect(info.streaming_data).toBeDefined()

    //     const default_track_format = info.streaming_data?.adaptive_formats.find(format => format.audio_track?.audio_is_default)
    //     expect(default_track_format).toBeDefined()
    //     expect(default_track_format?.language).toBe('en')

    //     // check that the language is properly propagated to the non-dash formats
    //     expect(info.streaming_data?.formats[0].language).toBe('en')
    //   })

    //   test('Format#language single audio track with captions', async () => {
    //     const info = await innertube.getBasicInfo('gisdyTBMNyQ')
    //     expect(info.streaming_data).toBeDefined()

    //     const audio_format = info.streaming_data?.adaptive_formats.find(format => format.has_audio)
    //     expect(audio_format).toBeDefined()
    //     expect(audio_format?.language).toBe('en')
    //     expect(info.streaming_data?.formats[0].language).toBe('en')
    //   })
    // })

    test('Innertube#search', async () => {
      const search = await innertube.search('Anton Petrov');
      expect(search.page).toBeDefined();
      expect(search.results).toBeDefined();
      expect(search.results?.length).toBeGreaterThan(0);
      expect(search.sub_menu).toBeDefined();
    });

    describe('Innertube#search', () => {
      let search: YT.Search;

      beforeAll(async () => {
        search = await innertube.search('Anton Petrov');
        expect(search.page).toBeDefined();
        expect(search.results).toBeDefined();
        expect(search.results?.length).toBeGreaterThan(0);
        expect(search.sub_menu).toBeDefined();
      });

      test('Search#getContinuation', async () => {
        const incremental_continuation = await search.getContinuation();
        expect(incremental_continuation).toBeDefined();
        expect(incremental_continuation.results?.length).toBeGreaterThan(0);
      });
    });

    test('Innertube#getSearchSuggestions', async () => {
      const suggestions = await innertube.getSearchSuggestions('Anton Petrov');
      expect(suggestions.length).toBeGreaterThan(0);
    });

    describe('Innertube#getComments', () => {
      let comments: YT.Comments;

      beforeAll(async () => {
        comments = await innertube.getComments('bUHZ2k9DYHY');
        expect(comments).toBeDefined();
        expect(comments.header).toBeDefined();
        expect(comments.contents).toBeDefined();
        expect(comments.contents.length).toBeGreaterThan(0);
      });

      test('Comments#getContinuation', async () => {
        const incremental_continuation = await comments.getContinuation();
        expect(incremental_continuation).toBeDefined();
        expect(incremental_continuation.contents.length).toBeGreaterThan(0);
      });

      describe('CommentThread#getReplies', () => {
        let loaded_comment_thread: YTNodes.CommentThread;

        beforeAll(async () => {
          let comment_thread = comments.contents.first();
          loaded_comment_thread = await comment_thread.getReplies();
          expect(loaded_comment_thread.replies).toBeDefined();
        });

        test('CommentThread#getContinuation', async () => {
          const incremental_continuation = await loaded_comment_thread.getContinuation();
          expect(incremental_continuation.replies).toBeDefined();
          expect(incremental_continuation.replies?.length).toBeGreaterThan(0);
        });
      });
    });

    test('Innertube#getHomeFeed', async () => {
      const home_feed = await innertube.getHomeFeed();
      expect(home_feed).toBeDefined();
      expect(home_feed.contents).toBeDefined();
      expect(home_feed.contents?.contents?.length).toBeGreaterThan(0);

      // YouTube tells anonymous users to sign in or search something first before showing them a valid home feed.
      // Otherwise, you get the following message:
      //
      // "Try searching to get started
      // Start watching videos to help us build a feed of videos you'll love"
      // 
      // - Removing this test for now.

      // test('HomeFeed#getContinuation', async () => {
      //   const incremental_continuation = await home_feed.getContinuation();
      //   expect(incremental_continuation.contents).toBeDefined();
      //   expect(incremental_continuation.contents.contents?.length).toBeGreaterThan(0);
      // });
    });

    test('Innertube#getGuide', async () => {
      const guide = await innertube.getGuide();
      expect(guide).toBeDefined();
      expect(guide.contents).toBeDefined();
      expect(guide.contents?.length).toBeGreaterThan(0);
    });

    test('Innertube#getTrending', async () => {
      const trending = await innertube.getTrending();
      expect(trending).toBeDefined();
      expect(trending.page.contents).toBeDefined();
      expect(trending.page.contents_memo).toBeDefined();
      expect(trending.videos.length).toBeGreaterThan(0);
    });

    test('Innertube#getCourses', async () => {
      const courses = await innertube.getCourses();
      expect(courses).toBeDefined();
      expect(courses.page.contents).toBeDefined();
      expect(courses.page.contents_memo).toBeDefined();
      expect(courses.shelves.length).toBeGreaterThan(0);
    });

    describe('Innertube#getChannel', () => {
      let channel: YT.Channel;

      beforeAll(async () => {
        channel = await innertube.getChannel('UC7_gcs09iThXybpVgjHZ_7g');
        expect(channel).toBeDefined();
        expect(channel.current_tab).toBeDefined();
        expect(channel.current_tab?.content).toBeDefined();
        expect(channel.videos.length).toBeGreaterThan(0);
      });

      test('Channel#getHome', async () => {
        const home = await channel.getHome();
        expect(home).toBeDefined();
        expect(home.current_tab).toBeDefined();
        expect(home.current_tab?.content).toBeDefined();
        expect(home.videos.length).toBeGreaterThan(0);
      });

      describe('Channel#getVideos', () => {
        let videos: YT.Channel;

        beforeAll(async () => {
          videos = await channel.getVideos();
          expect(videos).toBeDefined();
          expect(videos.current_tab).toBeDefined();
          expect(videos.current_tab?.content).toBeDefined();
          expect(videos.videos.length).toBeGreaterThan(0);
        });

        test('Channel#getContinuation', async () => {
          const incremental_continuation = await videos.getContinuation();
          expect(incremental_continuation).toBeDefined();
          expect(incremental_continuation.videos.length).toBeGreaterThan(0);
        });

        test('Channel#applyFilter', async () => {
          const filtered_tab = await videos.applyFilter(videos.filters[1]);
          expect(filtered_tab).toBeDefined();
          expect(filtered_tab.videos.length).toBeGreaterThan(0);
        });
      });

      // @TODO: Not implemented yet.
      // test('Channel#getLive', async () => {
      //   const live = await channel.getLive();
      //   expect(live).toBeDefined();
      //   expect(live.current_tab).toBeDefined();
      //   expect(live.current_tab?.content).toBeDefined();
      //   expect(live.videos.length).toBeGreaterThan(0);
      // });

      test('Channel#getPlaylists', async () => {
        const playlists = await channel.getPlaylists();
        expect(playlists).toBeDefined();
        expect(playlists.current_tab).toBeDefined();
        expect(playlists.current_tab?.content).toBeDefined();
        expect(playlists.playlists.length).toBeGreaterThan(0);
      });

      test('Channel#getCommunity', async () => {
        const community = await channel.getCommunity();
        expect(community).toBeDefined();
        expect(community.current_tab).toBeDefined();
        expect(community.current_tab?.content).toBeDefined();
        expect(community.posts.length).toBeGreaterThan(0);
      });

      test('Channel#getAbout', async () => {
        const about = await channel.getAbout();
        expect(about).toBeDefined();

        if (about.is(YTNodes.ChannelAboutFullMetadata)) {
          expect(about.id).toBe('UC7_gcs09iThXybpVgjHZ_7g');
          expect(about.description).toBeDefined();
        } else {
          expect(about.metadata).toBeDefined();
          expect(about.metadata?.channel_id).toBe('UC7_gcs09iThXybpVgjHZ_7g');
          expect(about.metadata?.description).toBeDefined();
        }
      });

      test('Channel#search', async () => {
        const search = await channel.search('How Does Gravity Escape A Black Hole?');
        expect(search).toBeDefined();
        expect(search.videos.length).toBeGreaterThan(0);
      });
    });

    test('Innertube#getPlaylist', async () => {
      const playlist = await innertube.getPlaylist('PLsPUh22kYmNBl4h0i4mI5zDflExXJMo_x');
      expect(playlist).toBeDefined();
      expect(playlist.videos.length).toBeGreaterThan(0);
    });

    describe('Innertube#getHashtag', () => {
      let hashtag: YT.HashtagFeed;

      beforeAll(async () => {
        hashtag = await innertube.getHashtag('space');
        expect(hashtag).toBeDefined();
        expect(hashtag.videos.length).toBeGreaterThan(0);
      });

      test('HashtagFeed#getContinuation', async () => {
        const incremental_continuation = await hashtag.getContinuation();
        expect(incremental_continuation).toBeDefined();
        expect(incremental_continuation.videos.length).toBeGreaterThan(0);
      });
    });

    test('Innertube#resolveURL', async () => {
      const resolved = await innertube.resolveURL('https://www.youtube.com/watch?v=bUHZ2k9DYHY');
      expect(resolved).toBeDefined();
      expect(resolved.payload).toBeDefined();
    });

    // test('Innertube#download', async () => {
    //   const id = 'WSeNSzJ2-Jw';
    //   const stream = await innertube.download(id, { type: 'video+audio' });
    //   const file = createWriteStream(`./${id}.mp4`);

    //   for await (const chunk of Utils.streamToIterable(stream)) {
    //     file.write(chunk);
    //   }

    //   expect(existsSync(`./${id}.mp4`)).toBeTruthy();
    // });
  });

  describe('YouTube Music', () => {
    // test('Innertube#music.getInfo', async () => {
    //   const info = await innertube.music.getInfo('WSeNSzJ2-Jw');
    //   expect(info).toBeDefined();
    //   expect(info.basic_info.id).toBe('WSeNSzJ2-Jw');
    // });

    test('Innertube#music.getInfo.MusicResponsiveListItem', async () => {
      const playlist = await innertube.music.getPlaylist('PLQxo8OvVvJ1WI_Bp67F2wdIl_R2Rc_1-u');
      expect(playlist).toBeDefined();
      expect(playlist.header).toBeDefined();
      expect(playlist.contents).toBeDefined();
      expect(playlist.contents?.length).toBeGreaterThan(0);
      
      const info = await innertube.music.getInfo(playlist.contents!.first().as(YTNodes.MusicResponsiveListItem))
      expect(info).toBeDefined();
    });

    test('Innertube#music.getInfo.NavEndpoint', async () => {
      const playlist = await innertube.music.getPlaylist('PLQxo8OvVvJ1WI_Bp67F2wdIl_R2Rc_1-u');
      expect(playlist).toBeDefined();
      expect(playlist.header).toBeDefined();
      expect(playlist.contents).toBeDefined();
      expect(playlist.contents?.length).toBeGreaterThan(0);
      
      const playlistPlayEndpoint = playlist.header!.as(YTNodes.MusicResponsiveHeader).buttons.firstOfType(YTNodes.MusicPlayButton)!.endpoint
      
      const info = await innertube.music.getInfo(playlistPlayEndpoint)
      expect(info).toBeDefined();
      
      const upNext = await info.getUpNext();
      expect(upNext.playlist_id).toBe("PLQxo8OvVvJ1WI_Bp67F2wdIl_R2Rc_1-u");
    });

    test('Innertube#music.getInfo.NavEndpoint.getUpNextContinuation', async () => {
      // Fetch some video from Homepage
      const home = await innertube.music.getHomeFeed()
      const homeItemFirst = home.sections!.first().as(YTNodes.MusicCarouselShelf).contents[0].as(YTNodes.MusicResponsiveListItem)
      
      const info = await innertube.music.getInfo(homeItemFirst.id ?? homeItemFirst.endpoint!)
      expect(info).toBeDefined();
      
      const upNext = await info.getUpNext();
      
      const endpoint = upNext.contents.filterType(YTNodes.PlaylistPanelVideo)[1].endpoint;
      
      const info2 = await innertube.music.getInfo(endpoint)
      const upNext2 = await info2.getUpNextContinuation(upNext)
      expect(upNext2.contents?.length).toBeGreaterThan(0);
      
      const upNext3 = await info2.getUpNextContinuation(upNext2)
      expect(upNext3.contents?.length).toBeGreaterThan(0);
      
    });

    describe('Innertube#music.search', () => {
      let search: YTMusic.Search;

      beforeAll(async () => {
        search = await innertube.music.search('Mac Miller - Conversation Pt. 1');
        expect(search).toBeDefined();
        expect(search.contents).toBeDefined();
        expect(search.contents?.length).toBeGreaterThan(0);
      });

      test('Search#applyFilter', async () => {
        search = await search.applyFilter(search.filters[1]);
        expect(search).toBeDefined();
        expect(search.contents).toBeDefined();
        expect(search.contents?.length).toBeGreaterThan(0);
      });

      test('Search#getContinuation', async () => {
        const incremental_continuation = await search.getContinuation();
        expect(incremental_continuation).toBeDefined();
        expect(incremental_continuation.contents).toBeDefined();
        expect(incremental_continuation.contents?.contents).toBeDefined();
        expect(incremental_continuation.contents?.contents?.length).toBeGreaterThan(0);
      });
    });

    describe('Innertube#music.getHomeFeed', () => {
      let home: YTMusic.HomeFeed;

      beforeAll(async () => {
        home = await innertube.music.getHomeFeed();
        expect(home).toBeDefined();
        expect(home.sections).toBeDefined();
        expect(home.sections?.length).toBeGreaterThan(0);
      });

      test('HomeFeed#applyFilter', async () => {
        home = await home.applyFilter(home.filters[1]);
        expect(home).toBeDefined();
        expect(home.sections).toBeDefined();
        expect(home.sections?.length).toBeGreaterThan(0);
      });
    });

    test('Innertube#music.getExplore', async () => {
      const explore = await innertube.music.getExplore();
      expect(explore).toBeDefined();
      expect(explore.sections).toBeDefined();
      expect(explore.sections?.length).toBeGreaterThan(0);
      expect(explore.top_buttons).toBeDefined();
    });

    test('Innertube#music.getArtist', async () => {
      const artist = await innertube.music.getArtist('UC52ZqHVQz5OoGhvbWiRal6g');
      expect(artist).toBeDefined();
      expect(artist.header).toBeDefined();
      expect(artist.sections).toBeDefined();
    });

    test('Innertube#music.getAlbum', async () => {
      const album = await innertube.music.getAlbum('MPREb_YpQ7SWMPLvu');
      expect(album).toBeDefined();
      expect(album.header).toBeDefined();
      expect(album.sections).toBeDefined();
    });

    test('Innertube#music.getPlaylist', async () => {
      const playlist = await innertube.music.getPlaylist('PLQxo8OvVvJ1WI_Bp67F2wdIl_R2Rc_1-u');
      expect(playlist).toBeDefined();
      expect(playlist.header).toBeDefined();
      expect(playlist.contents).toBeDefined();
      expect(playlist.contents?.length).toBeGreaterThan(0);
    });

    test('Innertube#music.getLyrics', async () => {
      const lyrics = await innertube.music.getLyrics('eaJHysi5tYg');
      expect(lyrics).toBeDefined();
      expect(lyrics?.description).toBeDefined();
      expect(lyrics?.footer).toBeDefined();
    });

    test('Innertube#music.getUpNext', async () => {
      const upnext = await innertube.music.getUpNext('eaJHysi5tYg');
      expect(upnext).toBeDefined();
      expect(upnext?.contents).toBeDefined();
      expect(upnext?.contents?.length).toBeGreaterThan(0);
    });

    test('Innertube#music.getRelated', async () => {
      const related = await innertube.music.getRelated('eaJHysi5tYg');
      expect(related).toBeDefined();
    });

    test('Innertube#music.getSearchSuggestions', async () => {
      const suggestions = await innertube.music.getSearchSuggestions('Joji - In Tongues');
      expect(suggestions).toBeDefined();
      expect(suggestions?.length).toBeGreaterThan(0);
    });
  });

  describe('YouTube Kids', () => {
    test('Innertube#kids.getInfo', async () => {
      const info = await innertube.kids.getInfo('juN8qEgLScw');
      expect(info).toBeDefined();
      expect(info.basic_info?.id).toBe('juN8qEgLScw');
    });

    test('Innertube#kids.getHomeFeed', async () => {
      const home = await innertube.kids.getHomeFeed();
      expect(home).toBeDefined();
      expect(home.categories).toBeDefined();
      expect(home.contents?.anchors?.length).toBeGreaterThan(0);
    });

    test('Innertube#kids.getChannel', async () => {
      const channel = await innertube.kids.getChannel('UCpbpfcZfo-hoDAx2m1blFhg');
      expect(channel).toBeDefined();
      expect(channel.contents).toBeDefined();
      expect(channel.header).toBeDefined();
    });

    test('Innertube#kids.search', async () => {
      const search = await innertube.kids.search('Paw Patrol');
      expect(search).toBeDefined();
      expect(search.contents).toBeDefined();
      expect(search.contents?.length).toBeGreaterThan(0);
    });
  });
});