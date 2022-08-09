import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class Tooltip extends YTNode {
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

  constructor(data: any) {
    super();

    this.promo_config = {
      promo_id: data.promoConfig.promoId,
      impression_endpoints: data.promoConfig.impressionEndpoints
        .map((endpoint: any) => new NavigationEndpoint(endpoint)),
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