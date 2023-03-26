import Feed from '../../core/Feed.js';
import { InnertubeError } from '../../utils/Utils.js';
import HorizontalCardList from '../classes/HorizontalCardList.js';
import ItemSection from '../classes/ItemSection.js';
import SearchRefinementCard from '../classes/SearchRefinementCard.js';
import SearchSubMenu from '../classes/SearchSubMenu.js';
import SectionList from '../classes/SectionList.js';
import UniversalWatchCard from '../classes/UniversalWatchCard.js';

import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { ISearchResponse } from '../types/ParsedResponse.js';

class Search extends Feed<ISearchResponse> {
  results?: ObservedArray<YTNode> | null;
  refinements: string[];
  estimated_results: number;
  sub_menu?: SearchSubMenu;
  watch_card?: UniversalWatchCard;
  refinement_cards?: HorizontalCardList | null;

  constructor(actions: Actions, data: ApiResponse | ISearchResponse, already_parsed = false) {
    super(actions, data, already_parsed);

    const contents =
      this.page.contents_memo?.getType(SectionList).first().contents ||
      this.page.on_response_received_commands?.first().contents;

    if (!contents)
      throw new InnertubeError('No contents found in search response');

    this.results = contents.filterType(ItemSection).find((section) => section.contents && section.contents.length > 0)?.contents;

    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;

    this.sub_menu = this.page.contents_memo?.getType(SearchSubMenu).first();
    this.watch_card = this.page.contents_memo?.getType(UniversalWatchCard).first();
    this.refinement_cards = this.results?.firstOfType(HorizontalCardList);
  }

  /**
   * Applies given refinement card and returns a new {@link Search} object. Use {@link refinement_card_queries} to get a list of available refinement cards.
   */
  async selectRefinementCard(card: SearchRefinementCard | string): Promise<Search> {
    let target_card: SearchRefinementCard | undefined;

    if (typeof card === 'string') {
      if (!this.refinement_cards) throw new InnertubeError('No refinement cards found.');
      target_card = this.refinement_cards?.cards.get({ query: card })?.as(SearchRefinementCard);
      if (!target_card)
        throw new InnertubeError(`Refinement card "${card}" not found`, { available_cards: this.refinement_card_queries });
    } else if (card.type === 'SearchRefinementCard') {
      target_card = card;
    } else {
      throw new InnertubeError('Invalid refinement card!');
    }

    const page = await target_card.endpoint.call<ISearchResponse>(this.actions, { parse: true });

    return new Search(this.actions, page, true);
  }

  /**
   * Returns a list of refinement card queries.
   */
  get refinement_card_queries(): string[] {
    return this.refinement_cards?.cards.as(SearchRefinementCard).map((card) => card.query) || [];
  }

  /**
   * Retrieves next batch of results.
   */
  async getContinuation(): Promise<Search> {
    const response = await this.getContinuationData();
    if (!response)
      throw new InnertubeError('Could not get continuation data');
    return new Search(this.actions, response, true);
  }
}

export default Search;