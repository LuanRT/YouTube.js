'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const Utils = require('../../../utils/Utils');

class Video {
  type = 'Video';

  constructor(data) {
    const overlay_time_status = data.thumbnailOverlays
      .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)
      ?.thumbnailOverlayTimeStatusRenderer.text || 'N/A';

    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet, '') : null;

    this.snippets = data.detailedMetadataSnippets?.map((snippet) => ({
      text: new Text(snippet.snippetText),
      hover_text: new Text(snippet.snippetHoverText)
    })) || [];

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
    this.author = new Author(data.ownerText, data.ownerBadges, data.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.published = new Text(data.publishedTimeText);
    this.view_count_text = new Text(data.viewCountText);
    this.short_view_count_text = new Text(data.shortViewCountText);

    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) this.upcoming = new Date(upcoming);

    this.duration = {
      text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
      seconds: Utils.timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
    };

    this.show_action_menu = data.showActionMenu;
    this.is_watched = data.isWatched || false;
    this.menu = Parser.parse(data.menu);
  }


  /**
   * @returns {string}
   */
  get description() {
    if (this.snippets.length > 0) {
      return this.snippets.map((snip) => snip.text.toString()).join('');
    }
    return this.description_snippet?.toString() || '';
  }


  /**
   * @type {boolean}
   */
  get is_live() {
    return this.badges.some((badge) => badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW');
  }

  /**
   * @type {boolean}
   */
  get is_upcoming() {
    return this.upcoming && this.upcoming > new Date();
  }

  /**
   * @type {boolean}
   */
  get has_captions() {
    return this.badges.some((badge) => badge.label === 'CC');
  }

  /**
   * @type {Thumbnail | undefined}
   */
  get best_thumbnail() {
    return this.thumbnails[0];
  }
}

module.exports = Video;