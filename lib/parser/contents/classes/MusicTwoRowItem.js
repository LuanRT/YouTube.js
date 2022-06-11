'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicTwoRowItem {
  type = 'musicTwoRowItemRenderer';
  
  constructor(data) {
    this.title = new Text(data.title);
   
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
   
    this.id = this.endpoint.browse.id;
    this.subtitle = new Text(data.subtitle);
    this.badges = Parser.parse(data.subtitleBadges);
    
    switch (this.endpoint.browse.page_type) {
      case 'MUSIC_PAGE_TYPE_ARTIST':
        this.type = 'artist';
        this.subscribers = this.subtitle.toString();
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.type = 'playlist';
        this.item_count = parseInt(this.subtitle.runs
          .find((run) => run.text
            .match(/\d+ (songs|song)/))?.text
            .match(/\d+/g)) || null;
        break;
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.type = 'album';
        this.year = this.subtitle.runs.slice(-1)[0].text;
        break;
      default:
    }
    
    const author = this.subtitle.runs.find((run) => run.endpoint.browse?.page_type == 'MUSIC_PAGE_TYPE_USER_CHANNEL');
 
    author && (this.author = {
      name: author.text,
      channel_id: author.endpoint.browse.id,
      endpoint: author.endpoint
    });
  
    this.thumbnail = new Thumbnail(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail).thumbnails;
    this.thumbnail_overlay = Parser.parse(data.thumbnailOverlay);
    this.menu = Parser.parse(data.menu);
  }
}

module.exports = MusicTwoRowItem;