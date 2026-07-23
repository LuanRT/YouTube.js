import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import ItemSection from './ItemSection.js';
import SectionList from './SectionList.js';
import Text from './misc/Text.js';
import AutonavEndpoint from './endpoints/AutonavEndpoint.js';
import MaybeHistoryEndpoint from './MaybeHistoryEndpoint.js';
import Author from './misc/Author.js';
import Menu from './menus/Menu.js';
import type NavigationEndpoint from './NavigationEndpoint.js';
import AutoplayEndpoint from './endpoints/AutoplayEndpoint.js';
import PivotVideo from './PivotVideo.js';

export default class SingleColumnWatchNextResults extends YTNode {
  static type = 'SingleColumnWatchNextResults';

  results?: {
    results: {
      contents: ObservedArray<ItemSection> | null,
      tracking_params: string
    }
  };
  autoplay?: {
    autoplay: {
      sets: {
        mode: string,
        autoplay_video_renderer: AutonavEndpoint | AutoplayEndpoint | null,
        next_video_renderer: MaybeHistoryEndpoint | AutoplayEndpoint | null,
        previous_video_renderer: MaybeHistoryEndpoint | null
      }[],
      title: Text,
      count_down_secs: number,
      replay_video_renderer: PivotVideo | null,
      tracking_params: string
    }
  };
  playlist?: {
    id: string,
    title: string,
    author: Text | Author,
    contents: YTNode[],
    current_index: number,
    is_infinite: boolean,
    menu: Menu | null
    endpoint: NavigationEndpoint;
    isEditable: boolean;
    totalVideos: number;
    totalVideosText: Text;
  };
  pivot: SectionList | null;

  constructor(data: RawNode) {
    super();
    const results_data = data.results?.results;
    if (results_data) {
      this.results = {
        results: {
          contents: Parser.parse(results_data.contents, true, ItemSection),
          tracking_params: results_data.trackingParams
        }
      };
    }

    const autoplay_data = data.autoplay?.autoplay;
    if (autoplay_data) {
      this.autoplay = {
        autoplay: {
          sets: (autoplay_data.sets || []).map((item: any) => {
            const next_video_renderer = item.nextVideoRenderer?.autoplayVideoWrapperRenderer?.primaryEndpointRenderer ||
              item.nextVideoRenderer;

            return {
              mode: item.mode,
              autoplay_video_renderer: Parser.parseItem(item.autoplayVideoRenderer, [ AutoplayEndpoint, AutonavEndpoint ]),
              next_video_renderer: Parser.parseItem(next_video_renderer, [ MaybeHistoryEndpoint, AutoplayEndpoint ]),
              previous_video_renderer: Parser.parseItem(item.previousVideoRenderer, MaybeHistoryEndpoint)
            };
          }),
          title: new Text(autoplay_data.title),
          count_down_secs: autoplay_data.countDownSecs,
          replay_video_renderer: Parser.parseItem(autoplay_data.replayVideoRenderer, PivotVideo),
          tracking_params: autoplay_data.trackingParams
        }
      };
    }
    const playlistData = data.playlist?.playlist;
    
    if (playlistData) {
      this.playlist = {
        id: playlistData.playlistId,
        title: playlistData.title,
        author: playlistData.shortBylineText?.simpleText ?
          new Text(playlistData.shortBylineText) :
          new Author(playlistData.longBylineText),
        contents: Parser.parseArray(playlistData.contents),
        current_index: playlistData.currentIndex,
        is_infinite: !!playlistData.isInfinite,
        menu: Parser.parseItem(playlistData.menu, Menu),
        endpoint: playlistData.endpoint,
        isEditable: playlistData.isEditable,
        totalVideosText: new Text(playlistData.totalVideosText),
        totalVideos: playlistData.totalVideos
      };
    }
    // Depending on the TV response version, suggestions are either wrapped in a
    // sectionListRenderer or in an additional pivot object.
    const pivot_data = data.pivot?.pivot ? { sectionListRenderer: data.pivot.pivot } : data.pivot;
    this.pivot = Parser.parseItem(pivot_data, SectionList);
  }
}
