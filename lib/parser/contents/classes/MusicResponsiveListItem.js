'use strict';

const Parser = require('..');
const Text = require('./Text');
const Utils = require('../../../utils/Utils');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicResponsiveListItem {
  #shelf_title;
  #flex_columns;
  #is_single_shelf;
  #playlist_item_data;
  
  constructor(data, ctx) {
    this.#shelf_title = ctx.shelf_title;
    this.#is_single_shelf = ctx.is_single_shelf;
    
    this.#flex_columns = Parser.parse(data.flexColumns);
    this.#playlist_item_data = { video_id: data?.playlistItemData?.videoId || null };
    
    // Item type is not available when there's only one shelf.
    !ctx.is_single_shelf &&
      (this.type = this.#flex_columns[1].title.runs[0].text.toLowerCase());

    this.endpoint = data.navigationEndpoint &&
      new NavigationEndpoint(data.navigationEndpoint) || null;
    
    /**
     * When there's only one shelf it means it's a search by type
     * or a continuation. We have to parse each case differently
     * as the list item structure is not always the same.
     */
    ctx.is_single_shelf ?
      this.#parseItemByShelfName() :
      this.#parseItemByItemType();
    
    this.thumbnails = new Thumbnail(data.thumbnail.musicThumbnailRenderer.thumbnail).thumbnails;
    this.badges = Parser.parse(data.badges) || [];
  
    this.menu = Parser.parse(data.menu);
    this.overlay = Parser.parse(data.overlay);
  }
  
  #parseItemByShelfName = () => (({
    ['Songs']: () => this.#parseSong(),
    ['Videos']: () => this.#parseVideo(),
    ['Featured playlists']: () => this.#parsePlaylist(),
    ['Community playlists']: () => this.#parsePlaylist(),
    ['Artists']: () => this.#parseArtist(),
    ['Albums']: () => this.#parseAlbum(),
  })[this.#shelf_title.toString()] ||
    (() => console.warn(this.#shelf_title.toString() + ' not found!')))();
  
  #parseItemByItemType = () => (({
    song: () => this.#parseSong(),
    video: () => this.#parseVideo(),
    artist: () => this.#parseArtist(),
    playlist: () => this.#parsePlaylist(),
    album: () => this.#parseAlbum(),
    single: () => this.#parseAlbum(),
    ep: () => this.#parseAlbum()
  })[this.type] ||
    (() => console.warn(this.type + ' not found!')))();
  
  #parseSong() {
    const target_runs = {
      artist: this.#is_single_shelf ? 0 : 2,
      album: this.#is_single_shelf ? 2 : 4
    }
      
    this.id = this.#playlist_item_data.video_id;
    this.title = this.#flex_columns[0].title.toString();
    this.artist = this.#flex_columns[1].title.runs[target_runs.artist].text;
    this.album = this.#flex_columns[1].title.runs[target_runs.album].text;
   
    const duration_text = this.#flex_columns[1].title.runs
      .find((run) => /^\d+$/.test(run.text.replace(/:/g, ''))).text;
      
    this.duration = {
      text: duration_text,
      seconds: Utils.timeToSeconds(duration_text)
    }
  }
  
  #parseVideo() {
    const target_runs = {
      views: this.#is_single_shelf ? 2 : 4,
      author: this.#is_single_shelf ? 0 : 2
    }
    
    this.id = this.#playlist_item_data.video_id;
    this.title = this.#flex_columns[0].title.toString();
    this.views = this.#flex_columns[1].title.runs[target_runs.views].text;
  
    this.author = {
      name: this.#flex_columns[1].title.runs[target_runs.author].text,
      channel_id: this.#flex_columns[1].title.runs[target_runs.author].endpoint.browse.id
    }
    
    const duration_text = this.#flex_columns[1].title.runs
      .find((run) => /^\d+$/.test(run.text.replace(/:/g, ''))).text;
    
    this.duration = {
      text: duration_text,
      seconds: Utils.timeToSeconds(duration_text)
    }
  }
  
  #parseArtist() {
    this.id = this.endpoint.browse.id;
    this.name = this.#flex_columns[0].title.toString();
    this.subscribers = this.#flex_columns[1].title.runs[2].text;
  }
  
  #parseAlbum() {
    this.id = this.endpoint.browse.id;
    this.title = this.#flex_columns[0].title.toString();
 
    this.author = {
      name: this.#flex_columns[1].title.runs[2].text.toString(),
      channel_id: this.#flex_columns[1].title.runs[2].endpoint.browse?.id || null
    }
 
    this.year = this.#flex_columns[1].title.runs
      .find((run) => /^[12][0-9]{3}$/.test(run.text)).text;
  }
  
  #parsePlaylist() {
    const target_runs = {
      item_count: this.#is_single_shelf ? 2 : 4,
      author: this.#is_single_shelf ? 0 : 2
    }
    
    this.id = this.endpoint.browse.id;
    this.title = this.#flex_columns[0].title.toString();
    this.item_count = parseInt(this.#flex_columns[1].title.runs[target_runs.item_count].text.match(/\d+/g));
 
    this.author = {
      name: this.#flex_columns[1].title.runs[target_runs.author].text,
      channel_id: this.#flex_columns[1].title.runs[target_runs.author].endpoint.browse.id
    }
  }
}

module.exports = MusicResponsiveListItem;