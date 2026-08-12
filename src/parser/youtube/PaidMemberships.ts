import Button from '../classes/Button.js';
import CardItem from '../classes/CardItem.js';
import type CardItemContainer from '../classes/CardItemContainer.js';
import CardItemTextCollection from '../classes/CardItemTextCollection.js';
import CardItemTextWithImage from '../classes/CardItemTextWithImage.js';
import ItemSection from '../classes/ItemSection.js';
import type Thumbnail from '../classes/misc/Thumbnail.js';
import OfferItem from '../classes/OfferItem.js';
import { Parser } from '../index.js';
import PaidPurchasesSection from './PaidPurchasesSection.js';

import type { Actions, ApiResponse } from '../../core/index.js';
import type { IParsedResponse } from '../types/index.js';

export interface ChannelMembership {
  channel_name: string;
  channel_thumbnails: Thumbnail[];
  membership_level: string;
  price?: string;
  expired_date?: string;
}

export default class PaidMemberships {
  readonly #page: IParsedResponse;
  readonly #actions: Actions;

  public purchases: PaidPurchasesSection | null;
  public memberships: ChannelMembership[];
  public inactive_memberships: ChannelMembership[];

  private constructor(actions: Actions, page: IParsedResponse, purchases: PaidPurchasesSection | null) {
    this.#actions = actions;
    this.#page = page;
    this.purchases = purchases;
    this.memberships = [];
    this.inactive_memberships = [];
  }

  /**
   * Creates a PaidMemberships instance by analysing the response layout.
   */
  static async create(actions: Actions, response: ApiResponse): Promise<PaidMemberships> {
    const page = Parser.parseResponse<IParsedResponse>(response.data);
    const sections = page.contents_memo?.getType(ItemSection) || [];

    // "Offers from YouTube" always exists — lone section means nothing to parse
    if (sections.length <= 1) {
      return new PaidMemberships(actions, page, null);
    }

    let purchases_section: ItemSection | undefined;
    let membership_section: ItemSection | undefined;

    for (const section of sections) {
      // "Offers from YouTube" — contains OfferItem, skip it
      if (section.contents?.some((node) => node.is(OfferItem))) {
        continue;
      }

      const first_card = section.contents?.find((node) => node.is(CardItem))?.as(CardItem);
      if (!first_card) {
        continue;
      }

      if (first_card.heading instanceof CardItemTextWithImage) {
        purchases_section = section;
      } else if (first_card.heading instanceof CardItemTextCollection) {
        membership_section = section;
      }
    }

    const instance = new PaidMemberships(
      actions,
      page,
      purchases_section
        ? new PaidPurchasesSection(actions, response, purchases_section)
        : null
    );

    // Resolve active/inactive within the membership section
    if (membership_section) {
      const { active, inactive } = await PaidMemberships.#resolveActiveInactive(actions, membership_section);
      instance.memberships.push(...PaidMemberships.#parseMembershipCards(active, true));
      instance.inactive_memberships.push(...PaidMemberships.#parseMembershipCards(inactive, false));
    }

    return instance;
  }

  /**
   * Splits a membership section's contents into active and inactive groups.
   *
   * Max 2 CardItem headers act as boundary markers — everything else is CardItemContainer.
   * - 1 CardItem: single block, endpoint Button count determines active vs inactive.
   * - 2 CardItems: split at the second header; first group's endpoint determines which is active.
   * - 0 CardItems: unexpected, returns empty.
   */
  static async #resolveActiveInactive(actions: Actions, section: ItemSection): Promise<{
    active: CardItemContainer[];
    inactive: CardItemContainer[];
  }> {
    const items = section.contents || [];
    const titleIndexes = items.reduce((pv, cv, idx) => {
      if (cv.is(CardItem))
        pv.push(idx);
      return pv;
    }, [] as number[]);

    if (titleIndexes.length === 2) {
      const arr = [ ...items ] as CardItemContainer[];
      const active = arr.splice(1, titleIndexes[1] - 1);
      arr.shift();
      arr.shift();
      const inactive = arr;
      return { active, inactive };
    }

    if (titleIndexes.length === 1) {
      const arr = [ ...items ] as CardItemContainer[];
      arr.shift();
      const result = await arr[0]?.endpoint?.call(actions, { parse: true });
      const buttonCount = result?.on_response_received_actions_memo?.getType(Button)?.length || 0;
      const isActive = buttonCount > 1;
      const active = isActive ? arr : [];
      const inactive = isActive ? [] : arr;
      return { active, inactive };
    }

    return { active: [], inactive: [] };
  }

  static #parseMembershipCards(containers: CardItemContainer[], is_active: boolean): ChannelMembership[] {
    const result: ChannelMembership[] = [];

    for (const container of containers) {
      const card = container.base_renderer?.as(CardItem);
      if (!card) {
        continue;
      }

      const heading = card.heading;

      if (heading instanceof CardItemTextWithImage) {
        const texts = heading.text_collections.flatMap((c) => c.texts);

        // When no membership level: [name, extra]
        // With membership level:    [name, level, extra]
        const has_level = texts.length >= 3;
        const second_text = texts[1]?.text?.toString() || '';
        const third_text = texts[2]?.text?.toString() || '';

        const channel_name = texts[0]?.text?.toString() || '';
        const membership_level = has_level ? second_text : '';
        const extra = has_level ? third_text : second_text;

        const data: ChannelMembership = {
          channel_name,
          channel_thumbnails: heading.thumbnails,
          membership_level
        };

        if (is_active) {
          data.price = extra;
        } else {
          data.expired_date = extra;
        }

        result.push(data);
      }
    }

    return result;
  }

  get page(): IParsedResponse {
    return this.#page;
  }
}
