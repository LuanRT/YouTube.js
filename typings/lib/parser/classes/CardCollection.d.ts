export = CardCollection;
declare class CardCollection {
    constructor(data: any);
    type: string;
    cards: any;
    header: Text;
    allow_teaser_dismiss: any;
}
import Text = require("./Text");
