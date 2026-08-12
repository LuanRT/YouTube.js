// TODO: Clean up and refactor this.

import { YTNode } from '../helpers.js';
import { isTextRun, timeToSeconds } from '../../utils/Utils.js';
import type { ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
import type TextRun from './misc/TextRun.js';

import { Parser } from '../index.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import MusicResponsiveListItemFixedColumn from './MusicResponsiveListItemFixedColumn.js';
import MusicResponsiveListItemFlexColumn from './MusicResponsiveListItemFlexColumn.js';
import MusicThumbnail from './MusicThumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';

interface PlaylistItemData {
  video_id: string;
  playlist_set_video_id: string;
}

const DURATION_TEXT = /^\d+(?::[0-5]\d)+$/;

function findDurationText(runs?: Text['runs']): string | undefined {
  return runs?.findLast((run) => DURATION_TEXT.test(run.text))?.text;
}

export default class MusicResponsiveListItem extends YTNode {
  static type = 'MusicResponsiveListItem';

  public flex_columns: ObservedArray<MusicResponsiveListItemFlexColumn>;
  public fixed_columns: ObservedArray<MusicResponsiveListItemFixedColumn>;

  public endpoint?: NavigationEndpoint;
  public item_type: 'album' | 'playlist' | 'artist' | 'library_artist' | 'non_music_track' | 'video' | 'song' | 'endpoint' | 'unknown' | 'podcast_show' | undefined;
  public index?: Text;
  public thumbnail?: MusicThumbnail | null;
  public badges?: ObservedArray<YTNode>;
  public menu?: Menu | null;
  public overlay?: MusicItemThumbnailOverlay | null;

  public id?: string;
  public title?: string;
  public duration?: {
    text: string;
    seconds: number;
  };

  public album?: {
    id?: string,
    name: string,
    endpoint?: NavigationEndpoint
  };

  public artists?: {
    name: string,
    channel_id?: string,
    endpoint?: NavigationEndpoint
  }[];

  public views?: string;
  public authors?: {
    name: string,
    channel_id?: string;
    endpoint?: NavigationEndpoint;
  }[];

  public name?: string;
  public subtitle?: Text;
  public subscribers?: string;
  public song_count?: string;

  // TODO: these might be replaceable with Author class
  public author?: {
    name: string,
    channel_id?: string;
    endpoint?: NavigationEndpoint;
  };
  public item_count?: string;
  public year?: string;

  constructor(data: RawNode) {
    super();
    this.flex_columns = Parser.parseArray(data.flexColumns, MusicResponsiveListItemFlexColumn);
    this.fixed_columns = Parser.parseArray(data.fixedColumns, MusicResponsiveListItemFixedColumn);

    const playlist_item_data: PlaylistItemData = {
      video_id: data?.playlistItemData?.videoId || null,
      playlist_set_video_id: data?.playlistItemData?.playlistSetVideoId || null
    };

    if ('navigationEndpoint' in data) {
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
        this.#parseNonMusicTrack(playlist_item_data);
        break;
      case 'MUSIC_PAGE_TYPE_PODCAST_SHOW_DETAIL_PAGE':
        this.item_type = 'podcast_show';
        this.#parsePodcastShow();
        break;
      default:
        if (this.flex_columns[1]) {
          this.#parseVideoOrSong(playlist_item_data);
        } else {
          this.#parseOther();
        }
    }

    if ('index' in data) {
      this.index = new Text(data.index);
    }

    if ('thumbnail' in data) {
      this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
    }

    if ('badges' in data) {
      this.badges = Parser.parseArray(data.badges);
    }

    if ('menu' in data) {
      this.menu = Parser.parseItem(data.menu, Menu);
    }

    if ('overlay' in data) {
      this.overlay = Parser.parseItem(data.overlay, MusicItemThumbnailOverlay);
    }
  }

  #parseOther() {
    this.title = this.flex_columns[0].title.toString();

    if (this.endpoint) {
      this.item_type = 'endpoint';
    } else {
      this.item_type = 'unknown';
    }
  }

  #parseVideoOrSong(playlist_item_data: PlaylistItemData) {
    const music_video_type = (this.flex_columns.at(0)?.title.runs?.at(0) as TextRun)?.endpoint?.payload?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType;
    switch (music_video_type) {
      case 'MUSIC_VIDEO_TYPE_UGC':
      case 'MUSIC_VIDEO_TYPE_OMV':
        this.item_type = 'video';
        this.#parseVideo(playlist_item_data);
        break;
      case 'MUSIC_VIDEO_TYPE_ATV':
        this.item_type = 'song';
        this.#parseSong(playlist_item_data);
        break;
      default:
        this.#parseOther();
    }
  }

  #parseSong(playlist_item_data: PlaylistItemData) {
    this.id = playlist_item_data.video_id || this.endpoint?.payload?.videoId;
    this.title = this.flex_columns[0].title.toString();

    const duration_text = findDurationText(this.flex_columns.at(1)?.title.runs) || this.fixed_columns[0]?.title?.toString();

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

  #parseVideo(playlist_item_data: PlaylistItemData) {
    this.id = playlist_item_data.video_id;
    this.title = this.flex_columns[0].title.toString();
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

    const duration_text = findDurationText(this.flex_columns[1].title.runs) || findDurationText(this.fixed_columns[0]?.title.runs);

    if (duration_text) {
      this.duration = {
        text: duration_text,
        seconds: timeToSeconds(duration_text)
      };
    }
  }

  #parseArtist() {
    this.id = this.endpoint?.payload?.browseId;
    this.name = this.flex_columns[0].title.toString();
    this.subtitle = this.flex_columns.at(1)?.title;
    this.subscribers = this.subtitle?.runs?.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))?.text || '';
  }

  #parseLibraryArtist() {
    this.name = this.flex_columns[0].title.toString();
    this.subtitle = this.flex_columns.at(1)?.title;
    this.song_count = this.subtitle?.runs?.find((run) => (/^\d+(,\d+)? songs?$/i).test(run.text))?.text || '';
  }

  #parseNonMusicTrack(playlist_item_data: PlaylistItemData) {
    this.id = playlist_item_data.video_id || this.endpoint?.payload?.videoId;
    this.title = this.flex_columns[0].title.toString();
  }

  #parsePodcastShow() {
    this.id = this.endpoint?.payload?.browseId;
    this.title = this.flex_columns[0].title.toString();
  }

  #parseAlbum() {
    this.id = this.endpoint?.payload?.browseId;
    this.title = this.flex_columns[0].title.toString();

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
    this.title = this.flex_columns[0].title.toString();

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