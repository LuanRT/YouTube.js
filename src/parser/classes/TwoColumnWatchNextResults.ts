import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';

type AutoplaySet = {
  autoplay_video: NavigationEndpoint,
  next_button_video?: NavigationEndpoint
};

export default class TwoColumnWatchNextResults extends YTNode {
  static type = 'TwoColumnWatchNextResults';

  results: ObservedArray<YTNode>;
  secondary_results: ObservedArray<YTNode>;
  conversation_bar: YTNode;
  playlist?: {
    id: string,
    title: string,
    author: Text | Author,
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

  constructor(data: RawNode) {
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
          new Author(playlistData.longBylineText),
        contents: Parser.parseArray(playlistData.contents),
        current_index: playlistData.currentIndex,
        is_infinite: !!playlistData.isInfinite,
        menu: Parser.parseItem(playlistData.menu, Menu)
      };
    }

    const autoplayData = data.autoplay?.autoplay;
    if (autoplayData) {
      this.autoplay = {
        sets: autoplayData.sets.map((set: RawNode) => this.#parseAutoplaySet(set))
      };
      if (autoplayData.modifiedSets) {
        this.autoplay.modified_sets = autoplayData.modifiedSets.map((set: any) => this.#parseAutoplaySet(set));
      }
      if (autoplayData.countDownSecs) {
        this.autoplay.count_down_secs = autoplayData.countDownSecs;
      }
    }
  }

  #parseAutoplaySet(data: RawNode): AutoplaySet {
    const result = {
      autoplay_video: new NavigationEndpoint(data.autoplayVideo)
    } as AutoplaySet;

    if (data.nextButtonVideo) {
      result.next_button_video = new NavigationEndpoint(data.nextButtonVideo);
    }

    return result;
  }
}