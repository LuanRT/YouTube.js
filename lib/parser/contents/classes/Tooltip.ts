'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class Tooltip {
  type = 'Tooltip';

  constructor(data) {
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

module.exports = Tooltip;