import { Home, Analytics, Artist, Location, Podcasts } from '../../parser/charts/index.js';
import { NavigationEndpoint } from '../../parser/nodes.js';
import type { Actions, Session } from '../index.js';

export type CountryCode = 'global' | 'us' | 'mx' | 'ca' | 'in' | (string & {});
export type PeriodType = 'DAILY' | 'WEEKLY';
export type IntervalType = 'DAY' | 'WEEK';
export type Perspective = 'ARTIST' | 'LOCATION' | 'CHART_HOME' | 'CHART_DETAILS' | 'PODCAST_SHOW';
export type ChartType = 'ARTISTS' | 'TRACKS' | 'VIDEOS' | 'TRENDING_VIDEOS' | 'VIDEOS_LOP' | 'SHORTS_TRACKS_BY_USAGE' | 'PODCAST_SHOWS_BY_WATCH_TIME' | 'TRENDING_MOVIES';
export type EntityParamsEntity = 'ARTIST' | 'LOCATION';
export type ChartLanguage = 'bho' | 'bgc' | 'hi' | 'pa' | 'ta' | 'te' | 'international';

interface ChartsQueryArgsBase {
  perspective: Perspective;
  country_code?: CountryCode;
}
export type DateRange = { date_start?: never; date_end?: Date } | { date_start: Date; date_end: Date };
interface ChartsQueryArgsHome extends ChartsQueryArgsBase { perspective: 'CHART_HOME'; }
interface ChartsQueryArgsAnalytics extends ChartsQueryArgsBase { perspective: 'CHART_DETAILS'; chart_type: Exclude<ChartType, 'PODCAST_SHOWS_BY_WATCH_TIME'>; period: PeriodType; chart_attribute?: ChartLanguage; date_end?: Date; }
interface ChartsQueryArgsPodcast extends ChartsQueryArgsBase { perspective: 'PODCAST_SHOW'; period: PeriodType; date_end?: Date; }
type ChartsQueryArgsArtist = ChartsQueryArgsBase & DateRange & { perspective: 'ARTIST'; artist_id: string; interval: IntervalType; };
type ChartsQueryArgsLocation = ChartsQueryArgsBase & DateRange & { perspective: 'LOCATION'; location_id: string; interval: IntervalType; };
export type ChartsQueryArgs = ChartsQueryArgsHome | ChartsQueryArgsAnalytics | ChartsQueryArgsArtist | ChartsQueryArgsLocation | ChartsQueryArgsPodcast;

export default class Charts {
  readonly #actions: Actions;

  constructor(session: Session) {
    this.#actions = session.actions;
  }

  #appendChartType(query: URLSearchParams, chart_type: ChartType) {
    query.append('chart_params_chart_type', chart_type); 
  }
  #appendEntityParamsEntity(query: URLSearchParams, entity: EntityParamsEntity){
    query.append('entity_params_entity', entity);
  }
  #appendDateParamsInterval(query: URLSearchParams, args: ChartsQueryArgsArtist | ChartsQueryArgsLocation) {
    if (args.date_end) {
      if (args.date_start) query.append('date_params_start_time', this.#formatDateTime(args.date_start));
      query.append('date_params_end_time', this.#formatDateTime(args.date_end));
    }
    if (args.interval) query.append('date_params_interval', args.interval);
  }

  #formatDate(date: Date) {
    return date.toISOString().slice(0, 10).replace(/-/g, '');
  }

  #formatDateTime(date: Date) {
    return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
  }

  #getQuery(args: ChartsQueryArgs) {
    const query = new URLSearchParams();
    query.append('flags', 'MusicCharts__enable_apac_and_shorts_charts_expansion');
    query.append('perspective', args.perspective);
    if (args.country_code) query.append('chart_params_country_code', args.country_code);
    switch (args.perspective) {
      case 'CHART_HOME': break;
      case 'PODCAST_SHOW':
        this.#appendChartType(query, 'PODCAST_SHOWS_BY_WATCH_TIME');
        query.append('chart_params_period_type', args.period);
        if (args.date_end) query.append('chart_params_end_date', this.#formatDate(args.date_end));
        break;
      case 'CHART_DETAILS':
        this.#appendChartType(query, args.chart_type);
        query.append('chart_params_period_type', args.period);
        if (args.date_end) query.append('chart_params_end_date', this.#formatDate(args.date_end));
        if (args.chart_attribute) query.append('chart_params_chart_attribute', args.chart_attribute);
        break;
      case 'ARTIST':
        this.#appendEntityParamsEntity(query, 'ARTIST');
        this.#appendDateParamsInterval(query, args);
        query.append('artist_params_id', args.artist_id);
        break;
      case 'LOCATION':
        this.#appendEntityParamsEntity(query, 'LOCATION');
        this.#appendDateParamsInterval(query, args);
        query.append('location_params_id', args.location_id);
        break;
    }
    return query.toString();
  }

  async call(browse_id: string, args: ChartsQueryArgs) {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { 
      browseId: browse_id, 
      query: this.#getQuery(args) 
    } });
    const response = await browse_endpoint.call(this.#actions, { client: 'WEB_MUSIC_ANALYTICS' });
    return response;
  }

  async getHome(country_code?: CountryCode) {
    return new Home(await this.call('FEmusic_analytics_charts_home', { perspective: 'CHART_HOME', country_code }));
  }

  async getAnalytics(chart_type: 'VIDEOS_LOP', period: PeriodType, country_code: 'in', chart_attribute: ChartLanguage): Promise<Analytics>
  async getAnalytics(chart_type: Exclude<ChartType, 'PODCAST_SHOWS_BY_WATCH_TIME' | 'VIDEOS_LOP'>, period: PeriodType, country_code?: CountryCode): Promise<Analytics>
  async getAnalytics(chart_type: Exclude<ChartType, 'PODCAST_SHOWS_BY_WATCH_TIME'>, period: PeriodType, country_code?: CountryCode, chart_attribute?: ChartLanguage): Promise<Analytics> {
    return new Analytics(await this.call('FEmusic_analytics_charts_home', { perspective: 'CHART_DETAILS', country_code, chart_type, period, chart_attribute }));
  }

  async getArtist(artist_id: string, interval: IntervalType, country_code?: CountryCode, date_range?: DateRange) {
    return new Artist(await this.call('FEmusic_analytics_insights_artist', { perspective: 'ARTIST', country_code, artist_id, interval, ...date_range }));
  }

  async getLocation(location_id: string, interval: IntervalType, country_code?: CountryCode, date_range?: DateRange) {
    return new Location(await this.call('FEmusic_analytics_insights_location', { perspective: 'LOCATION', country_code, location_id, interval, ...date_range }));
  }

  async getPodcasts(period: PeriodType, country_code?: Exclude<CountryCode, 'global'>) {
    return new Podcasts(await this.call('FEmusic_analytics_charts_home', { perspective: 'PODCAST_SHOW', country_code, period }));
  }

  // TODO: add completeSearch() https://clients1.google.com/complete/search?...
}