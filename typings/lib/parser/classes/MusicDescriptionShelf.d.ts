export = MusicDescriptionShelf;
declare class MusicDescriptionShelf {
    constructor(data: any);
    type: string;
    description: Text;
    max_collapsed_lines: any;
    max_expanded_lines: any;
    footer: Text;
}
import Text = require("./Text");
