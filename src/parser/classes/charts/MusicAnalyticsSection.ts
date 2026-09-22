import { observe, YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import MusicAnalyticsArtistViews from './MusicAnalyticsArtistViews.js';
import MusicAnalyticsDateViews from './MusicAnalyticsDateViews.js';
import MusicAnalyticsFeaturedSection from './MusicAnalyticsFeaturedSection.js';
import MusicAnalyticsLocationViews from './MusicAnalyticsLocationViews.js';
import MusicAnalyticsPerspectiveMetadata from './MusicAnalyticsPerspectiveMetadata.js';
import MusicAnalyticsPodcastShowEntries from './MusicAnalyticsPodcastShowViews.js';
import MusicAnalyticsTrack from './MusicAnalyticsTrack.js';
import MusicAnalyticsTrackViewsTypes from './MusicAnalyticsTrackViewsTypes.js';
import MusicAnalyticsVideoViews from './MusicAnalyticsVideoViews.js';

export default class MusicAnalyticsSection extends YTNode {
  static type = 'MusicAnalyticsSection';

  public artists?: ObservedArray<MusicAnalyticsArtistViews>;
  public dates?: ObservedArray<MusicAnalyticsDateViews>;
  public featured_sections?: ObservedArray<MusicAnalyticsFeaturedSection>;
  public locations?: ObservedArray<MusicAnalyticsLocationViews>;
  public perspective_metadata?: MusicAnalyticsPerspectiveMetadata;
  public podcast_shows?: ObservedArray<MusicAnalyticsPodcastShowEntries>;
  public track_types?: ObservedArray<MusicAnalyticsTrackViewsTypes>;
  public tracks?: ObservedArray<MusicAnalyticsTrack>;
  public videos?: ObservedArray<MusicAnalyticsVideoViews>;

  constructor(data: RawNode) {
    super();

    const content: RawNode = data.content || {};

    if (Reflect.has(content, 'artists')) {
      this.artists = observe(content.artists.map((artist: RawNode) => new MusicAnalyticsArtistViews(artist)));
    }

    if (Reflect.has(content, 'dates')) {
      this.dates = observe(content.dates.map((date: RawNode) => new MusicAnalyticsDateViews(date)));
    }

    if (Reflect.has(content, 'featuredSections')) {
      this.featured_sections = observe(
        content.featuredSections.map((section: RawNode) => new MusicAnalyticsFeaturedSection(section))
      );
    }

    if (Reflect.has(content, 'locations')) {
      this.locations = observe(content.locations.map((location: RawNode) => new MusicAnalyticsLocationViews(location)));
    }

    if (Reflect.has(content, 'perspectiveMetadata')) {
      this.perspective_metadata = new MusicAnalyticsPerspectiveMetadata(content.perspectiveMetadata);
    }

    if (Reflect.has(content, 'trackTypes')) {
      this.track_types = observe(
        content.trackTypes.map((track_type: RawNode) => new MusicAnalyticsTrackViewsTypes(track_type))
      );
    }

    if (Reflect.has(content, 'tracks')) {
      this.tracks = observe(content.tracks.map((track: RawNode) => new MusicAnalyticsTrack(track)));
    }

    if (Reflect.has(content, 'videos')) {
      this.videos = observe(content.videos.map((video: RawNode) => new MusicAnalyticsVideoViews(video)));
    }

    if (Reflect.has(content, 'podcastShows')) {
      this.podcast_shows = observe(content.podcastShows.map((podcast: RawNode) => new MusicAnalyticsPodcastShowEntries(podcast)));
    }
  }
}
