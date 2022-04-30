const ResultsParser = require(".");
const Author = require("./Author");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");
const Thumbnail = require("./Thumbnail");

class Video {
  type = 'Video';

  constructor(item) {
    this.author = new Author(item.ownerText, item.ownerBadges, item.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail);
    this.badges = Array.isArray(item.badges) ? ResultsParser.parse(item.badges) : [];
    // TODO: verify this works
    this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
    this.rich_thumbnail = item.richThumbnail && ResultsParser.parseItem(item.richThumbnail);
    const upcoming = item.upcomingEventData ? Number(`${item.upcomingEventData.startTime}000`) : null;
    if (upcoming) this.upcoming = new Date(upcoming);
    this.id = item.videoId;
    this.title = new Text(item.title, '');
    const lengthAlt = item.thumbnailOverlays.find(overlay => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    this.duration = item.lengthText ? new Text(item.lengthText, '') : lengthAlt?.text ? new Text(lengthAlt.text).toString() : '';
    this.published_at = new Text(item.publishedTimeText, '');
    this.views = new Text(item.viewCountText, '');
    // TODO: might be simplified? this appears to only contain the description
    this.snippets = item?.detailedMetadataSnippets?.map(snip => ({
      text: new Text(snip.snippetText, ''),
      hoverText: new Text(snip.snippetHoverText, ''),
    }));
    this.description_snippet = item.descriptionSnippet ? new Text(item.descriptionSnippet, '') : null;
    this.short_view_count = new Text(item.shortViewCountText, '');
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
  }

  get description() {
    if (this.snippets) {
      return this.snippets.map(snip => snip.text.toString()).join('')
    } 
    return this.description_snippet?.toString() || '';
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