import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class Tooltip extends YTNode {
  static type = 'Tooltip';

  promo_config: {
    promo_id: string;
    impression_endpoints: NavigationEndpoint[];
    accept: NavigationEndpoint;
    dismiss: NavigationEndpoint;
  };

  target_id: string;
  details: Text;
  suggested_position: string;
  dismiss_stratedy: string;
  dwell_time_ms: number;

  constructor(data: RawNode) {
    super();
    this.promo_config = {
      promo_id: data.promoConfig.promoId,
      impression_endpoints: data.promoConfig.impressionEndpoints
        .map((endpoint: RawNode) => new NavigationEndpoint(endpoint)),
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