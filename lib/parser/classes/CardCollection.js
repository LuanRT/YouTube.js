import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class CardCollection extends YTNode {
    static #type = Symbol('CardCollection');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.cards = Parser.parse(data.cards);
        this.header = new Text(data.headerText);
        this.allow_teaser_dismiss = data.allowTeaserDismiss;
    }
}
export default CardCollection;
