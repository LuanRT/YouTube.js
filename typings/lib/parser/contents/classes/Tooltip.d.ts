export = Tooltip;
declare class Tooltip {
    constructor(data: any);
    type: string;
    promo_config: {
        promo_id: any;
        impression_endpoints: any;
        accept: NavigationEndpoint;
        dismiss: NavigationEndpoint;
    };
    target_id: any;
    details: Text;
    suggested_position: any;
    dismiss_stratedy: any;
    dwell_time_ms: number;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
