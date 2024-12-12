import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ButtonCardView extends YTNode {
  static type = 'ButtonCardView';

  title: string;
  icon_name: string;
  on_tap_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.icon_name = data.icon.sources[0].clientResource.imageName;
    this.on_tap_endpoint = new NavigationEndpoint(data.rendererContext.commandContext.onTap);
  }
}
