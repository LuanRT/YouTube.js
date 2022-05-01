export = ChipCloudChip;
declare class ChipCloudChip {
    constructor(item: any);
    type: string;
    selected: any;
    endpoint: NavigationEndpoint;
    text: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
