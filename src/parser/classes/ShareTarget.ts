import type { RawNode } from '../index.js';
import { Text } from '../misc.js';
import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ShareTarget extends YTNode {
  static type = 'ShareTarget';

  public endpoint?: NavigationEndpoint;
  public service_name: string;
  public target_id: string;
  public title: Text;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'serviceEndpoint'))
      this.endpoint = new NavigationEndpoint(data.serviceEndpoint);
    else if (Reflect.has(data, 'navigationEndpoint'))
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    this.service_name = data.serviceName;
    this.target_id = data.targetId;
    this.title = new Text(data.title);
  }
}