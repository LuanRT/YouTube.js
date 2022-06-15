export = ChipCloudChip;
declare class ChipCloudChip {
    constructor(data: any);
    type: string;
    is_selected: any;
    endpoint: NavigationEndpoint;
    text: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
