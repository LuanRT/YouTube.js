import Parser from "../index.js";

import { YTNode } from "..";

class Card extends YTNode {
    static #type = Symbol('Card');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.teaser = Parser.parse(data.teaser);
        this.content = Parser.parse(data.content);
        this.card_id = data.cardId;
        this.feature = data.feature;
        this.cue_ranges = data.cueRanges.map((cr) => ({
            start_card_active_ms: cr.startCardActiveMs,
            end_card_active_ms: cr.endCardActiveMs,
            teaser_duration_ms: cr.teaserDurationMs,
            icon_after_teaser_ms: cr.iconAfterTeaserMs
        }));
    }
}
export default Card;
