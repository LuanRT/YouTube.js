'use strict';

const Utils = require('../../../utils/Utils');

class PlaylistItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)).filter((item) => item); 
  }
  
  static parseItem(item) {
    if (item.playlistVideoRenderer)
      return {
        id: item?.playlistVideoRenderer?.videoId,
        title: item?.playlistVideoRenderer?.title?.runs[0]?.text,
        author: item?.playlistVideoRenderer?.shortBylineText?.runs[0]?.text,
        duration: {
          seconds: Utils.timeToSeconds(item?.playlistVideoRenderer?.lengthText?.simpleText || '0'),
          simple_text: item?.playlistVideoRenderer?.lengthText?.simpleText || 'N/A',
          accessibility_label: item?.playlistVideoRenderer?.lengthText?.accessibility?.accessibilityData?.label || 'N/A'
        },
        thumbnails: item?.playlistVideoRenderer?.thumbnail?.thumbnails,
      };
  }
}

module.exports = PlaylistItem;