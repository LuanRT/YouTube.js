// TODO: this needs a refactor
// Seems like a mess to use

import Parser from '../index';
import Text from './misc/Text';
import { timeToSeconds } from '../../utils/Utils';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';
import TextRun from './misc/TextRun';

class MusicResponsiveListItem extends YTNode {
  static type = 'MusicResponsiveListItem';

  #flex_columns;
  #fixed_columns;
  #playlist_item_data;

  endpoint;
  item_type;
  index;
  thumbnails;
  badges;
  menu;
  overlay;

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
  item_count?: string | undefined;
  year?: string;

  constructor(data: any) {
    super();
    this.#flex_columns = Parser.parseArray(data.flexColumns);
    this.#fixed_columns = Parser.parseArray(data.fixedColumns);

    this.#playlist_item_data = {
      video_id: data?.playlistItemData?.videoId || null,
      playlist_set_video_id: data?.playlistItemData?.playlistSetVideoId || null
    };

    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : null;

    switch (this.endpoint?.browse?.page_type) {
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.item_type = 'album';
        this.#parseAlbum();
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.item_type = 'playlist';
        this.#parsePlaylist();
        break;
      case 'MUSIC_PAGE_TYPE_ARTIST':
      case 'MUSIC_PAGE_TYPE_LIBRARY_ARTIST':
      case 'MUSIC_PAGE_TYPE_USER_CHANNEL':
        this.item_type = 'artist';
        this.#parseArtist();
        break;
      default:
        if (this.#flex_columns[1]) {
          this.#parseVideoOrSong();
        } else {
          this.#parseOther();
        }
        break;
    }

    if (data.index) {
      this.index = new Text(data.index);
    }

    this.thumbnails = data.thumbnail ? Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer?.thumbnail) : [];
    this.badges = Parser.parseArray(data.badges);
    this.menu = Parser.parse(data.menu);
    this.overlay = Parser.parse(data.overlay);
  }

  #parseOther() {
    this.title = this.#flex_columns[0].key('title').instanceof(Text).toString();

    if (this.endpoint) {
      this.item_type = 'endpoint';
    } else {
      this.item_type = 'unknown';
    }
  }

  #parseVideoOrSong() {
    const is_video = this.#flex_columns[1].key('title').instanceof(Text).runs?.some((run) => run.text.match(/(.*?) views/));
    if (is_video) {
      this.item_type = 'video';
      this.#parseVideo();
    } else {
      this.item_type = 'song';
      this.#parseSong();
    }
  }

  #parseSong() {
    this.id = this.#playlist_item_data.video_id || this.endpoint?.watch?.video_id;
    this.title = this.#flex_columns[0].key('title').instanceof(Text).toString();

    const duration_text =
      this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))?.text ||
      this.#fixed_columns?.[0]?.key('title').instanceof(Text)?.toString();

    duration_text && (this.duration = {
      text: duration_text,
      seconds: timeToSeconds(duration_text)
    });

    const album = this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => Reflect.get(run, 'endpoint')?.browse?.id.startsWith('MPR')) as TextRun ||
      this.#flex_columns[2]?.key('title').instanceof(Text).runs?.find((run) => Reflect.get(run, 'endpoint')?.browse?.id.startsWith('MPR')) as TextRun;
    if (album) {
      this.album = {
        id: album.endpoint?.browse?.id,
        name: album.text,
        endpoint: album.endpoint
      };
    }

    const artists = this.#flex_columns[1].key('title').instanceof(Text).runs?.filter((run) => Reflect.get(run, 'endpoint')?.browse?.id.startsWith('UC')) as TextRun[];
    if (artists) {
      this.artists = artists.map((artist) => ({
        name: artist.text,
        channel_id: artist.endpoint?.browse?.id,
        endpoint: artist.endpoint
      }));
    }
  }

  #parseVideo() {
    this.id = this.#playlist_item_data.video_id;
    this.title = this.#flex_columns[0].key('title').instanceof(Text).toString();
    this.views = this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => run.text.match(/(.*?) views/))?.text;

    const authors = this.#flex_columns[1].key('title').instanceof(Text).runs?.filter((run) => Reflect.get(run, 'endpoint')?.browse?.id.startsWith('UC')) as TextRun[];
    if (authors) {
      this.authors = authors.map((author) => ({
        name: author.text,
        channel_id: author.endpoint?.browse?.id,
        endpoint: author.endpoint
      }));
    }

    const duration_text = this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))?.text;
    duration_text && (this.duration = {
      text: duration_text,
      seconds: timeToSeconds(duration_text)
    });
  }

  #parseArtist() {
    this.id = this.endpoint?.browse?.id;
    this.name = this.#flex_columns[0].key('title').instanceof(Text).toString();
    this.subtitle = this.#flex_columns[1].key('title').instanceof(Text);  
    this.subscribers = this.subtitle.runs?.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))?.text || '';
    this.song_count = this.subtitle.runs?.find((run) => /^\d+(,\d+)? songs?$/i.test(run.text))?.text || '';
  }

  #parseAlbum() {
    this.id = this.endpoint?.browse?.id;
    this.title = this.#flex_columns[0].key('title').instanceof(Text).toString();

    const author = this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => Reflect.get(run, 'endpoint')?.browse?.id.startsWith('UC')) as TextRun;
    author && (this.author = {
      name: author.text,
      channel_id: author.endpoint?.browse?.id,
      endpoint: author.endpoint
    });

    this.year = this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => (/^[12][0-9]{3}$/).test(run.text))?.text;
  }

  #parsePlaylist() {
    this.id = this.endpoint?.browse?.id;
    this.title = this.#flex_columns[0].key('title').instanceof(Text).toString();

    const item_count_run = this.#flex_columns[1].key('title')
      .instanceof(Text).runs?.find((run) => run.text.match(/\d+ (song|songs)/));

    this.item_count = item_count_run ? item_count_run.text : undefined;

    const author = this.#flex_columns[1].key('title').instanceof(Text).runs?.find((run) => Reflect.get(run, 'endpoint')?.browse?.id.startsWith('UC')) as TextRun;

    if (author) {
      this.author = {
        name: author.text,
        channel_id: author.endpoint?.browse?.id,
        endpoint: author.endpoint
      };
    }
  }
}

export default MusicResponsiveListItem;