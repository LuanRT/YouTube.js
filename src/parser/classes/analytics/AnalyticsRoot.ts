import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class AnalyticsRoot extends YTNode {
  static type = 'AnalyticsRoot';

  title: string;
  selected_card_index_key: string;
  use_main_app_specs: boolean;

  table_cards: {
    title: string;
    rows: {
      label: string;
      display_value: string;
      display_value_a11y: string;
      bar_ratio: number;
      bar_color: number;
      bar_opacity: number;
    }[];
  }[];

  constructor(data: RawNode) {
    super();
    const cards = data.analyticsTableCarouselData.data.tableCards;

    this.title = data.analyticsTableCarouselData.carouselTitle;
    this.selected_card_index_key = data.analyticsTableCarouselData.selectedCardIndexKey;

    this.table_cards = cards.map((card: any) => ({
      title: card.cardData.title,
      rows: card.cardData.rows.map((row: any) => ({
        label: row.label,
        display_value: row.displayValue,
        display_value_a11y: row.displayValueA11y,
        bar_ratio: row.barRatio,
        bar_color: row.barColor,
        bar_opacity: row.barOpacity
      }))
    }));

    this.use_main_app_specs = data.analyticsTableCarouselData.useMainAppSpecs;
  }
}