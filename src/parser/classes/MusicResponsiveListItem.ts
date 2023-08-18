// TODO: Clean up and refactor this.

import { YTNode } from '../helpers.js';
import { isTextRun, timeToSeconds } from '../../utils/Utils.js';
import type { ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';

import Parser from '../index.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import MusicResponsiveListItemFixedColumn from './MusicResponsiveListItemFixedColumn.js';
import MusicResponsiveListItemFlexColumn from './MusicResponsiveListItemFlexColumn.js';
import MusicThumbnail from './MusicThumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';

export default class MusicResponsiveListItem extends YTNode {
  static type = 'MusicResponsiveListItem';

  flex_columns: ObservedArray<MusicResponsiveListItemFlexColumn>;
  fixed_columns: ObservedArray<MusicResponsiveListItemFixedColumn>;
  #playlist_item_data: {
    video_id: string;
    playlist_set_video_id: string;
  };

  endpoint?: NavigationEndpoint;
  item_type: 'album' | 'playlist' | 'artist' | 'library_artist' | 'non_music_track' | 'video' | 'song' | 'endpoint' | 'unknown' | undefined;
  index?: Text;
  thumbnail?: MusicThumbnail | null;
  badges;
  menu?: Menu | null;
  overlay?: MusicItemThumbnailOverlay | null;

  id?: string;
  title?: string;
  duration?: {
    text: string;
    seconds: number;
  };

  album?: {
    id?: string,
    name: string,
    endpoint?: NavigationEndpoint
  };

  artists?: {
    name: string,
    channel_id?: string,
    endpoint?: NavigationEndpoint
  }[];

  views?: string;
  authors?: {
    name: string,
    channel_id?: string
    endpoint?: NavigationEndpoint
  }[];

  name?: string;
  subtitle?: Text;
  subscribers?: string;
  song_count?: string;

  // TODO: these might be replaceable with Author class
  author?: {
    name: string,
    channel_id?: string
    endpoint?: NavigationEndpoint
  };
  item_count?: string;
  year?: string;

  constructor(data: RawNode) {
    super();
    this.flex_columns = Parser.parseArray(data.flexColumns, MusicResponsiveListItemFlexColumn);
    this.fixed_columns = Parser.parseArray(data.fixedColumns, MusicResponsiveListItemFixedColumn);

    this.#playlist_item_data = {
      video_id: data?.playlistItemData?.videoId || null,
      playlist_set_video_id: data?.playlistItemData?.playlistSetVideoId || null
    };

    if (Reflect.has(data, 'navigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }

    let page_type = this.endpoint?.payload?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType;

    if (!page_type) {
      const is_non_music_track = this.flex_columns.find(
        (col) => col.title.endpoint?.payload?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE'
      );

      if (is_non_music_track) {
        page_type = 'MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE';
      }
    }

    switch (page_type) {
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.item_type = 'album';
        this.#parseAlbum();
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.item_type = 'playlist';
        this.#parsePlaylist();
        break;
      case 'MUSIC_PAGE_TYPE_ARTIST':
      case 'MUSIC_PAGE_TYPE_USER_CHANNEL':
        this.item_type = 'artist';
        this.#parseArtist();
        break;
      case 'MUSIC_PAGE_TYPE_LIBRARY_ARTIST':
        this.item_type = 'library_artist';
        this.#parseLibraryArtist();
        break;
      case 'MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE':
        this.item_type = 'non_music_track';
        this.#parseNonMusicTrack();
        break;
      default:
        if (this.flex_columns[1]) {
          this.#parseVideoOrSong();
        } else {
          this.#parseOther();
        }
    }

    if (Reflect.has(data, 'index')) {
      this.index = new Text(data.index);
    }

    if (Reflect.has(data, 'thumbnail')) {
      this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
    }

    if (Reflect.has(data, 'badges')) {
      this.badges = Parser.parseArray(data.badges);
    }

    if (Reflect.has(data, 'menu')) {
      this.menu = Parser.parseItem(data.menu, Menu);
    }

    if (Reflect.has(data, 'overlay')) {
      this.overlay = Parser.parseItem(data.overlay, MusicItemThumbnailOverlay);
    }
  }

  #parseOther() {
    this.title = this.flex_columns.first().title.toString();

    if (this.endpoint) {
      this.item_type = 'endpoint';
    } else {
      this.item_type = 'unknown';
    }
  }

  #parseVideoOrSong() {
    const is_video = this.flex_columns.at(1)?.title.runs?.some((run) => run.text.match(/(.*?) views/));
    if (is_video) {
      this.item_type = 'video';
      this.#parseVideo();
    } else {
      this.item_type = 'song';
      this.#parseSong();
    }
  }

  #parseSong() {
    this.id = this.#playlist_item_data.video_id || this.endpoint?.payload?.videoId;
    this.title = this.flex_columns.first().title.toString();

    const duration_text = this.flex_columns.at(1)?.title.runs?.find(
      (run) => (/^\d+$/).test(run.text.replace(/:/g, '')))?.text || this.fixed_columns.first()?.title?.toString();

    if (duration_text) {
      this.duration = {
        text: duration_text,
        seconds: timeToSeconds(duration_text)
      };
    }

    const album_run =
      this.flex_columns.at(1)?.title.runs?.find(
        (run) =>
          (isTextRun(run) && run.endpoint) &&
          run.endpoint.payload.browseId.startsWith('MPR')
      ) ||
      this.flex_columns.at(2)?.title.runs?.find(
        (run) =>
          (isTextRun(run) && run.endpoint) &&
          run.endpoint.payload.browseId.startsWith('MPR')
      );

    if (album_run && isTextRun(album_run)) {
      this.album = {
        id: album_run.endpoint?.payload?.browseId,
        name: album_run.text,
        endpoint: album_run.endpoint
      };
    }

    const artist_runs = this.flex_columns.at(1)?.title.runs?.filter(
      (run) => (isTextRun(run) && run.endpoint) && run.endpoint.payload.browseId.startsWith('UC')
    );

    if (artist_runs) {
      this.artists = artist_runs.map((run) => ({
        name: run.text,
        channel_id: isTextRun(run) ? run.endpoint?.payload?.browseId : undefined,
        endpoint: isTextRun(run) ? run.endpoint : undefined
      }));
    }
  }

  #parseVideo() {
    this.id = this.#playlist_item_data.video_id;
    this.title = this.flex_columns.first().title.toString();
    this.views = this.flex_columns.at(1)?.title.runs?.find((run) => run.text.match(/(.*?) views/))?.toString();

    const author_runs = this.flex_columns.at(1)?.title.runs?.filter(
      (run) =>
        (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('UC')
    );

    if (author_runs) {
      this.authors = author_runs.map((run) => {
        return {
          name: run.text,
          channel_id: isTextRun(run) ? run.endpoint?.payload?.browseId : undefined,
          endpoint: isTextRun(run) ? run.endpoint : undefined
        };
      });
    }

    const duration_text = this.flex_columns[1].title.runs?.find(
      (run) => (/^\d+$/).test(run.text.replace(/:/g, '')))?.text || this.fixed_columns.first()?.title.runs?.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))?.text;

    if (duration_text) {
      this.duration = {
        text: duration_text,
        seconds: timeToSeconds(duration_text)
      };
    }
  }

  #parseArtist() {
    this.id = this.endpoint?.payload?.browseId;
    this.name = this.flex_columns.first().title.toString();
    this.subtitle = this.flex_columns.at(1)?.title;
    this.subscribers = this.subtitle?.runs?.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))?.text || '';
  }

  #parseLibraryArtist() {
    this.name = this.flex_columns.first().title.toString();
    this.subtitle = this.flex_columns.at(1)?.title;
    this.song_count = this.subtitle?.runs?.find((run) => (/^\d+(,\d+)? songs?$/i).test(run.text))?.text || '';
  }

  #parseNonMusicTrack() {
    this.id = this.#playlist_item_data.video_id || this.endpoint?.payload?.videoId;
    this.title = this.flex_columns.first().title.toString();
  }

  #parseAlbum() {
    this.id = this.endpoint?.payload?.browseId;
    this.title = this.flex_columns.first().title.toString();

    const author_run = this.flex_columns.at(1)?.title.runs?.find(
      (run) =>
        (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('UC')
    );

    if (author_run && isTextRun(author_run)) {
      this.author = {
        name: author_run.text,
        channel_id: author_run.endpoint?.payload?.browseId,
        endpoint: author_run.endpoint
      };
    }

    this.year = this.flex_columns.at(1)?.title.runs?.find(
      (run) => (/^[12][0-9]{3}$/).test(run.text)
    )?.text;
  }

  #parsePlaylist() {
    this.id = this.endpoint?.payload?.browseId;
    this.title = this.flex_columns.first().title.toString();

    const item_count_run = this.flex_columns.at(1)?.title
      .runs?.find((run) => run.text.match(/\d+ (song|songs)/));

    this.item_count = item_count_run ? item_count_run.text : undefined;

    const author_run = this.flex_columns.at(1)?.title.runs?.find(
      (run) =>
        (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('UC')
    );

    if (author_run && isTextRun(author_run)) {
      this.author = {
        name: author_run.text,
        channel_id: author_run.endpoint?.payload?.browseId,
        endpoint: author_run.endpoint
      };
    }
  }

  get thumbnails() {
    return this.thumbnail?.contents || [];
  }
}