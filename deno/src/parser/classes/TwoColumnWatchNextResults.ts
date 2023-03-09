import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';
import PlaylistAuthor from './misc/PlaylistAuthor.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import type Menu from './menus/Menu.ts';

type AutoplaySet = {
  autoplay_video: NavigationEndpoint,
  next_button_video?: NavigationEndpoint
};

class TwoColumnWatchNextResults extends YTNode {
  static type = 'TwoColumnWatchNextResults';

  results;
  secondary_results;
  conversation_bar;
  playlist?: {
    id: string,
    title: string,
    author: Text | PlaylistAuthor,
    contents: YTNode[],
    current_index: number,
    is_infinite: boolean,
    menu: Menu | null
  };
  autoplay?: {
    sets: AutoplaySet[],
    modified_sets?: AutoplaySet[],
    count_down_secs?: number
  };

  constructor(data: any) {
    super();
    this.results = Parser.parseArray(data.results?.results.contents);
    this.secondary_results = Parser.parseArray(data.secondaryResults?.secondaryResults.results);
    this.conversation_bar = Parser.parseItem(data?.conversationBar);

    const playlistData = data.playlist?.playlist;
    if (playlistData) {
      this.playlist = {
        id: playlistData.playlistId,
        title: playlistData.title,
        author: playlistData.shortBylineText?.simpleText ?
          new Text(playlistData.shortBylineText) :
          new PlaylistAuthor(playlistData.longBylineText),
        contents: Parser.parseArray(playlistData.contents),
        current_index: playlistData.currentIndex,
        is_infinite: !!playlistData.isInfinite,
        menu: Parser.parseItem<Menu>(playlistData.menu)
      };
    }

    const autoplayData = data.autoplay?.autoplay;
    if (autoplayData) {
      this.autoplay = {
        sets: autoplayData.sets.map((set: any) => this.#parseAutoplaySet(set))
      };
      if (autoplayData.modifiedSets) {
        this.autoplay.modified_sets = autoplayData.modifiedSets.map((set: any) => this.#parseAutoplaySet(set));
      }
      if (autoplayData.countDownSecs) {
        this.autoplay.count_down_secs = autoplayData.countDownSecs;
      }
    }
  }

  #parseAutoplaySet(data: any): AutoplaySet {
    const result = {
      autoplay_video: new NavigationEndpoint(data.autoplayVideo)
    } as AutoplaySet;

    if (data.nextButtonVideo) {
      result.next_button_video = new NavigationEndpoint(data.nextButtonVideo);
    }

    return result;
  }
}

export default TwoColumnWatchNextResults;