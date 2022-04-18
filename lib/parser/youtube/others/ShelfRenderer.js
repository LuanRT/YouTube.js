'use strict';

const VideoItem = require('./VideoItem');
const GridVideoItem = require('./GridVideoItem');

class ShelfRenderer {
  static parse(data) {
    return {
      title: this.getTitle(data.title),
      videos: this.parseItems(data.content)
    }
  }
  
  static getTitle(data) {
    if ('runs' in (data || {})) {
      return data.runs.map((run) => run.text).join('');
    } else if ('simpleText' in (data || {})) {
      return data.simpleText;
    } else {
      return 'Others';
    }
  }
  
  static parseItems(data) {
    let items;
  
    if ('expandedShelfContentsRenderer' in data) {
      items = data.expandedShelfContentsRenderer.items;
    } else if ('horizontalListRenderer' in data) {
      items = data.horizontalListRenderer.items;
    } 
    
    const videos = ('gridVideoRenderer' in items[0])
      && GridVideoItem.parse(items) 
      || VideoItem.parse(items);
      
    return videos;
  }
}

module.exports = ShelfRenderer;