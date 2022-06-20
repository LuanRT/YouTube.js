'use strict';

const Parser = require('..');
const Text = require('./Text');
const Utils = require('../../../utils/Utils');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicResponsiveListItem {
  #flex_columns;
  #fixed_columns;
  #playlist_item_data;
  
  constructor(data) {
    this.type = null;
    
    this.#flex_columns = Parser.parse(data.flexColumns);
    this.#fixed_columns = Parser.parse(data.fixedColumns);
    
    this.#playlist_item_data = {
      video_id: data?.playlistItemData?.videoId || null,
      playlist_set_video_id: data?.playlistItemData?.playlistSetVideoId || null
    };
    
    this.endpoint = data.navigationEndpoint &&
      new NavigationEndpoint(data.navigationEndpoint) || null;
    
    switch (this.endpoint?.browse.page_type) {
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.type = 'album';
        this.#parseAlbum();
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.type = 'playlist';
        this.#parsePlaylist();
        break;
      case 'MUSIC_PAGE_TYPE_ARTIST':
        this.type = 'artist';
        this.#parseArtist();
        break;
      default:
        this.#parseVideoOrSong();
        break;
    }
    
    data.index &&
      (this.index = new Text(data.index));
    
    this.thumbnails = data.thumbnail && Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer.thumbnail) || [];
    this.badges = Parser.parse(data.badges) || [];
  
    this.menu = Parser.parse(data.menu);
    this.overlay = Parser.parse(data.overlay);
  }
  
  #parseVideoOrSong() {
    const is_video = this.#flex_columns[1].title.runs
      ?.some((run) => run.text.match(/(.*?) views/));
          
    if (is_video) {
      this.type = 'video';
      this.#parseVideo();
    } else {
      this.type = 'song';
      this.#parseSong();
    }
  }
  
  #parseSong() {
    this.id = this.#playlist_item_data.video_id;
    this.title = this.#flex_columns[0].title.toString();
    
    const duration_text =
      this.#flex_columns[1].title.runs?.find(
          (run) => /^\d+$/.test(run.text.replace(/:/g, '')))?.text ||
      this.#fixed_columns?.[0]?.title?.text;
      
    duration_text && (this.duration = {
      text: duration_text,
      seconds: Utils.timeToSeconds(duration_text)
    });
    
    const album = this.#flex_columns[1].title.runs?.find((run) => run.endpoint.browse?.id.startsWith('MPR'));
  
    album && (this.album = {
      id: album.endpoint.browse.id,
      name: album.text,
      endpoint: album.endpoint
    });
    
    const artists = this.#flex_columns[1].title.runs?.filter((run) => run.endpoint.browse?.id.startsWith('UC'));

    artists && (this.artists = artists.map((artist) => ({
      name: artist.text,
      channel_id: artist.endpoint.browse.id,
      endpoint: artist.endpoint
    })));
  }
  
  #parseVideo() {
    this.id = this.#playlist_item_data.video_id;
    this.title = this.#flex_columns[0].title.toString();
    this.views = this.#flex_columns[1].title.runs
      .find((run) => run.text.match(/(.*?) views/)).text;
          
    const author = this.#flex_columns[1].title.runs.find((run) => run.endpoint.browse?.id.startsWith('UC'));

    author && (this.author = {
      name: author.text,
      channel_id: author.endpoint.browse.id,
      endpoint: author.endpoint
    });
    
    const duration_text = this.#flex_columns[1].title.runs
      .find((run) => /^\d+$/.test(run.text.replace(/:/g, '')))?.text;
    
    duration_text && (this.duration = {
      text: duration_text,
      seconds: Utils.timeToSeconds(duration_text)
    });
  }
  
  #parseArtist() {
    this.id = this.endpoint.browse.id;
    this.name = this.#flex_columns[0].title.toString();
    this.subscribers = this.#flex_columns[1].title.runs[2]?.text || '';
  }
  
  #parseAlbum() {
    this.id = this.endpoint.browse.id;
    this.title = this.#flex_columns[0].title.toString();
 
    const author = this.#flex_columns[1].title.runs.find((run) => run.endpoint.browse?.id.startsWith('UC'));

    author && (this.author = {
      name: author.text,
      channel_id: author.endpoint.browse.id,
      endpoint: author.endpoint
    });
 
    this.year = this.#flex_columns[1].title.runs
      .find((run) => /^[12][0-9]{3}$/.test(run.text)).text;
  }
  
  #parsePlaylist() {
    this.id = this.endpoint.browse.id;
    this.title = this.#flex_columns[0].title.toString();
    this.item_count = parseInt(this.#flex_columns[1].title.runs.find((run) => run.text.match(/\d+ (song|songs)/)).text.match(/\d+/g));
   
    const author = this.#flex_columns[1].title.runs.find((run) => run.endpoint.browse?.id.startsWith('UC'));

    author && (this.author = {
      name: author.text,
      channel_id: author.endpoint.browse.id,
      endpoint: author.endpoint
    });
  }
}

module.exports = MusicResponsiveListItem;