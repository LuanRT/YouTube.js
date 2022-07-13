import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "../helpers";

class Tooltip extends YTNode {
    static type = 'Tooltip';
    constructor(data) {
        super();
        this.promo_config = {
            promo_id: data.promoConfig.promoId,
            impression_endpoints: data.promoConfig.impressionEndpoints
                .map((endpoint) => new NavigationEndpoint(endpoint)),
            accept: new NavigationEndpoint(data.promoConfig.acceptCommand),
            dismiss: new NavigationEndpoint(data.promoConfig.dismissCommand)
        };
        this.target_id = data.targetId;
        this.details = new Text(data.detailsText);
        this.suggested_position = data.suggestedPosition.type;
        this.dismiss_stratedy = data.dismissStrategy.type;
        this.dwell_time_ms = parseInt(data.dwellTimeMs);
    }
}
export default Tooltip;
