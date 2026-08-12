import { InnertubeError } from '../../utils/Utils.js';
import ActivityItem from '../classes/ActivityItem.js';
import CardItemContainer from '../classes/CardItemContainer.js';
import { Parser, UpdateCardItemOnClickCommand } from '../index.js';

import type { Actions, ApiResponse } from '../../core/index.js';
import type { IParsedResponse } from '../types/index.js';
import type ItemSection from '../classes/ItemSection.js';

export default class PaidPurchasesSection {
  readonly #page: IParsedResponse;
  readonly #actions: Actions;
  readonly #container: CardItemContainer | null;

  public items: ActivityItem[];

  constructor(actions: Actions, response: ApiResponse, purchases_section?: ItemSection) {
    this.#actions = actions;
    this.#page = Parser.parseResponse<IParsedResponse>(response.data);

    // Continuation response: onResponseReceivedActions
    if (this.#page.on_response_received_actions_memo) {
      this.items = this.#page.on_response_received_actions_memo.getType(ActivityItem);
      this.#container = null;
      return;
    }

    // Initial browse response: use the pre-identified section
    if (purchases_section) {
      this.#container = purchases_section.contents
        ?.find((node) => node.is(CardItemContainer))
        ?.as(CardItemContainer) || null;
    } else {
      this.#container = null;
    }

    this.items = this.#container?.contents?.filterType(ActivityItem) || [];
  }

  /**
   * Loads the next page of purchases, or throws if no continuation is present.
   */
  async getContinuation(): Promise<PaidPurchasesSection> {
    const endpoint = this.#getContinuationEndpoint();

    if (!endpoint) {
      throw new InnertubeError('Continuation not found');
    }

    const response = await endpoint.call(this.#actions, { parse: false });

    return new PaidPurchasesSection(this.#actions, response);
  }

  #getContinuationEndpoint() {
    // Continuation response: next token from UpdateCardItemOnClickCommand
    if (this.#page.on_response_received_actions) {
      for (const action of this.#page.on_response_received_actions) {
        if (action.is(UpdateCardItemOnClickCommand)) {
          return action.as(UpdateCardItemOnClickCommand)?.endpoint;
        }
      }
    }

    // Initial browse response: endpoint on the stored container
    return this.#container?.endpoint;
  }

  get page(): IParsedResponse {
    return this.#page;
  }
}
