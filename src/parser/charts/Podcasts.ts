import type { ApiResponse } from '../../core/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import type MusicAnalyticsPodcastShowEntries from '../classes/charts/MusicAnalyticsPodcastShowViews.js';
import type { ObservedArray } from '../helpers.js';
import { Parser, type IBrowseResponse } from '../index.js';
import { MusicAnalyticsSection, SectionList, type MusicAnalyticsPerspectiveMetadata } from '../nodes.js';

export default class Podcasts {
  readonly #page: IBrowseResponse;
  
  #analytics_section: MusicAnalyticsSection;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
    const analytics = this.#page.contents?.item().as(SectionList).contents.firstOfType(MusicAnalyticsSection);
    if (!analytics) throw new InnertubeError('Could not find Analytics Section.');
    this.#analytics_section = analytics;
  }

  get perspective_metadata(): MusicAnalyticsPerspectiveMetadata|undefined {
    return this.#analytics_section.perspective_metadata;
  }

  get podcast_shows(): ObservedArray<MusicAnalyticsPodcastShowEntries>|undefined {
    return this.#analytics_section.podcast_shows;
  }

  get analytics_section(): MusicAnalyticsSection {
    return this.#analytics_section;
  }

  get page(): IBrowseResponse {
    return this.#page;
  }
}