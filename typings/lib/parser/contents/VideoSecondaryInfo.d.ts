export = VideoSecondaryInfo;
declare class VideoSecondaryInfo {
    constructor(item: any);
    type: string;
    owner: any;
    description: Text;
    metadata: any;
    description_collapsed_lines: any;
}
import Text = require("./Text");
