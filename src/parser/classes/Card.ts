import Parser from '../index';
import { YTNode } from '../helpers';

class Card extends YTNode {
  static type = 'Card';

  teaser;
  content;
  card_id: string;
  feature: string;

  cue_ranges: {
    start_card_active_ms: string;
    end_card_active_ms: string;
    teaser_duration_ms: string;
    icon_after_teaser_ms: string;
  }[];

  constructor(data: any) {
    super();
    this.teaser = Parser.parse(data.teaser);
    this.content = Parser.parse(data.content);
    this.card_id = data.cardId;
    this.feature = data.feature;

    this.cue_ranges = data.cueRanges.map((cr: any) => ({
      start_card_active_ms: cr.startCardActiveMs,
      end_card_active_ms: cr.endCardActiveMs,
      teaser_duration_ms: cr.teaserDurationMs,
      icon_after_teaser_ms: cr.iconAfterTeaserMs
    }));
  }
}

export default Card;