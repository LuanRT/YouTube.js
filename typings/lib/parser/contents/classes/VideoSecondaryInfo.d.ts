export = VideoSecondaryInfo;
declare class VideoSecondaryInfo {
    constructor(data: any);
    type: string;
    owner: any;
    description: Text;
    subscribe_button: any;
    metadata: any;
    show_more_text: any;
    show_less_text: any;
    default_expanded: any;
    description_collapsed_lines: any;
}
import Text = require("./Text");
