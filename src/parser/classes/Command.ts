import {YTNode} from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class Command extends YTNode {
  static type = 'Command';

  click_tracking_params: string;
  command_metadata: {
    web_command_metadata: {
      url: string,
      web_page_type: string,
      root_ve: number
    }
  };
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.click_tracking_params = data.clickTrackingParams;
    this.command_metadata = {
      web_command_metadata: {
        url: data.commandMetadata.webCommandMetadata.url,
        web_page_type: data.commandMetadata.webCommandMetadata.webPageType,
        root_ve: data.commandMetadata.webCommandMetadata.rootVe
      }
    };
    this.endpoint = new NavigationEndpoint(data);
  }
}