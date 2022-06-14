export = ChipCloudChip;
declare class ChipCloudChip {
    constructor(data: any);
    type: string;
    text: any;
    endpoint: NavigationEndpoint;
    is_selected: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
