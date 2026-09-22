import type { ApiResponse } from '../../core/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { ObservedArray } from '../helpers.js';
import { Parser, type IBrowseResponse } from '../index.js';
import { MusicAnalyticsSection, SectionList, type MusicAnalyticsDateViews, type MusicAnalyticsLocationViews, type MusicAnalyticsPerspectiveMetadata, type MusicAnalyticsTrackViewsTypes } from '../nodes.js';

export default class Artist {
  readonly #page: IBrowseResponse;
  
  #analytics_section: MusicAnalyticsSection;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    const analytics = this.#page.contents?.item().as(SectionList).contents[0].as(MusicAnalyticsSection);
    if (!analytics) throw new InnertubeError('Could not find Analytics Section.');
    this.#analytics_section = analytics;
  }

  get dates(): ObservedArray<MusicAnalyticsDateViews>|undefined {
    return this.#analytics_section.dates;
  }

  get locations(): ObservedArray<MusicAnalyticsLocationViews>|undefined {
    return this.#analytics_section.locations;
  }

  get perspective_metadata(): MusicAnalyticsPerspectiveMetadata|undefined {
    return this.#analytics_section.perspective_metadata;
  }

  get track_types(): ObservedArray<MusicAnalyticsTrackViewsTypes>|undefined {
    return this.#analytics_section.track_types;
  }

  get analytics_section(): MusicAnalyticsSection {
    return this.#analytics_section;
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}