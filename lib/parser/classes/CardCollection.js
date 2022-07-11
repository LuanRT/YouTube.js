import Parser from "../index.js";
import Text from "./Text.js";

class CardCollection {
    type = 'CardCollection';
    constructor(data) {
        this.cards = Parser.parse(data.cards);
        this.header = new Text(data.headerText);
        this.allow_teaser_dismiss = data.allowTeaserDismiss;
    }
}
export default CardCollection;
