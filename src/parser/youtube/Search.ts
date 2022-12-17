import Actions from '../../core/Actions';
import { ObservedArray, YTNode } from '../helpers';
import { InnertubeError } from '../../utils/Utils';

import Feed from '../../core/Feed';
import SectionList from '../classes/SectionList';
import ItemSection from '../classes/ItemSection';
import HorizontalCardList from '../classes/HorizontalCardList';
import SearchRefinementCard from '../classes/SearchRefinementCard';
import UniversalWatchCard from '../classes/UniversalWatchCard';

export default class Search extends Feed {
  results: ObservedArray<YTNode> | null | undefined;
  refinements;
  estimated_results;
  watch_card;
  refinement_cards;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    const contents =
      this.page.contents_memo.getType(SectionList)?.[0]?.contents ||
      this.page.on_response_received_commands?.[0].contents;

    this.results = contents.firstOfType(ItemSection)?.contents;

    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;

    this.watch_card = this.page?.contents_memo.getType(UniversalWatchCard)?.[0];
    this.refinement_cards = this.results?.get({ type: 'HorizontalCardList' }, true)?.as(HorizontalCardList);
  }

  /**
   * Applies given refinement card and returns a new {@link Search} object.
   */
  async selectRefinementCard(card: SearchRefinementCard | string) {
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

    const page = await target_card.endpoint.call(this.actions, { parse: true });

    return new Search(this.actions, page, true);
  }

  /**
   * Returns a list of refinement card queries.
   */
  get refinement_card_queries() {
    return this.refinement_cards?.cards.as(SearchRefinementCard).map((card) => card.query);
  }

  /**
   * Retrieves next batch of results.
   */
  async getContinuation(): Promise<Search> {
    const continuation = await this.getContinuationData();
    return new Search(this.actions, continuation, true);
  }
}