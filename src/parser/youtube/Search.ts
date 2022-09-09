import Actions from '../../core/Actions';
import { observe, ObservedArray, YTNode } from '../helpers';
import { InnertubeError } from '../../utils/Utils';

import Feed from '../../core/Feed';
import SectionList from '../classes/SectionList';
import ItemSection from '../classes/ItemSection';
import HorizontalCardList from '../classes/HorizontalCardList';
import RichListHeader from '../classes/RichListHeader';
import SearchRefinementCard from '../classes/SearchRefinementCard';
import TwoColumnSearchResults from '../classes/TwoColumnSearchResults';
import UniversalWatchCard from '../classes/UniversalWatchCard';
import WatchCardHeroVideo from '../classes/WatchCardHeroVideo';
import WatchCardSectionSequence from '../classes/WatchCardSectionSequence';

class Search extends Feed {
  results: ObservedArray<YTNode> | null | undefined;
  refinements;
  estimated_results;
  watch_card;
  refinement_cards;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    const contents =
      this.page.contents?.item().as(TwoColumnSearchResults).primary_contents.item().as(SectionList).contents.array() ||
      this.page.on_response_received_commands?.[0].contents;

    const secondary_contents_maybe = this.page.contents?.item().key('secondary_contents');
    const secondary_contents = secondary_contents_maybe?.isParsed() ? secondary_contents_maybe.parsed().item().key('contents').parsed().array() : undefined;

    this.results = contents.firstOfType(ItemSection)?.contents;

    const card_list = this.results?.get({ type: 'HorizontalCardList' }, true)?.as(HorizontalCardList);
    const universal_watch_card = secondary_contents?.firstOfType(UniversalWatchCard);

    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;

    this.watch_card = {
      header: universal_watch_card?.header.item() || null,
      call_to_action: universal_watch_card?.call_to_action.item().as(WatchCardHeroVideo) || null,
      sections: universal_watch_card?.sections.array().filterType(WatchCardSectionSequence) || []
    };

    this.refinement_cards = {
      header: card_list?.header.item().as(RichListHeader) || null,
      cards: card_list?.cards.array().filterType(SearchRefinementCard) || observe([] as SearchRefinementCard[])
    };
  }

  /**
   * Applies given refinement card and returns a new {@link Search} object.
   */
  async selectRefinementCard(card: SearchRefinementCard | string) {
    let target_card: SearchRefinementCard | undefined;

    if (typeof card === 'string') {
      target_card = this.refinement_cards.cards.get({ query: card });
      if (!target_card)
        throw new InnertubeError('Refinement card not found!', { available_cards: this.refinement_card_queries });
    } else if (card.type === 'SearchRefinementCard') {
      target_card = card;
    } else {
      throw new InnertubeError('Invalid refinement card!');
    }

    const page = await target_card.endpoint.call(this.actions, undefined, true);

    return new Search(this.actions, page, true);
  }

  get refinement_card_queries() {
    return this.refinement_cards.cards.map((card) => card.query);
  }

  /**
   * Retrieves next batch of results.
   */
  async getContinuation(): Promise<Search> {
    const continuation = await this.getContinuationData();
    return new Search(this.actions, continuation, true);
  }
}

export default Search;