'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const Utils = require('../../../utils/Utils');

class Video {
  type = 'videoRenderer';
  
  constructor(data) {
    const overlay_time_status = data.thumbnailOverlays
      .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)
      .thumbnailOverlayTimeStatusRenderer.text;
      
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description = new Text(data.descriptionSnippet || data.description);
    this.snippets = data.detailedMetadataSnippets?.map((snippet) => ({
      text: new Text(snippet.snippetText),
      hover_text: new Text(snippet.snippetHoverText),
    })) || [];
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.moving_thumbnails = Parser.parse(data.richThumbnail)?.thumbnails || [];
    this.channel_thumbnail = Parser.parse(data.channelThumbnailSupportedRenderers);
    this.author = new Author({ nav_text: data.ownerText, badges: data.ownerBadges || data.badges });
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.published = new Text(data.publishedTimeText);
    this.view_count_text = new Text(data.viewCountText);
    this.short_view_count_text = new Text(data.shortViewCountText);
    this.duration = {
      text: data.lengthText && new Text(data.lengthText).text || new Text(overlay_time_status).text, 
      seconds: Utils.timeToSeconds(data.lengthText && new Text(data.lengthText).text || new Text(overlay_time_status).text)
    };
    this.show_action_menu = data.showActionMenu;
    this.is_watched = data.isWatched || null;
    this.menu = Parser.parse(data.menu);
  }
}

module.exports = Video;