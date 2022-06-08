export = ChipCloudChip;
declare class ChipCloudChip {
    constructor(data: any);
    type: string;
    text: Text;
    endpoint: NavigationEndpoint;
    is_selected: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
