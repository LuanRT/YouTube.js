const ResultsParser = require(".");
const Author = require("./Author");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class Video {
  type = 'Video';

  constructor(item) {
    this.author = new Author(item.ownerText, item.ownerBadges, item.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    this.badges = Array.isArray(item.badges) ? ResultsParser.parse(item.badges) : [];
    this.thumbnails = Thumbnail.fromResponse(item);
    const upcoming = item.upcomingEventData ? Number(`${item.upcomingEventData.startTime}000`) : null;
    if (upcoming) this.upcoming = new Date(upcoming);
    this.id = item.videoId;
    this.title = new Text(item.title, '').text;
    const lengthAlt = item.thumbnailOverlays.find(overlay => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    this.duration = item.lengthText ? new Text(item.lengthText, '').text : lengthAlt?.text ? new Text(lengthAlt.text).text : '';
    this.published_at = new Text(item.publishedTimeText, '').text;
    this.views = new Text(item.viewCountText, '').text;
    // TODO: might be simplified? this appears to only contain the description
    this.snippets = item?.detailedMetadataSnippets?.map(snip => ({
      text: new Text(snip.snippetText, '').text,
      hoverText: new Text(snip.snippetHoverText, '').text,
    }));
  }

  get is_live() {
    return this.badges.some(badge => badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW');
  }

  get is_upcoming() {
    return this.upcoming && this.upcoming > new Date();
  }

  get has_captions() {
    return this.badges.some(badge => badge.label === 'CC');
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }
}

module.exports = Video;