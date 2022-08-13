import NavigationEndpoint from '../NavigationEndpoint';
import { YTNode } from '../../helpers';

class MenuServiceItemDownload extends YTNode {
  static type = 'MenuServiceItemDownload';

  has_separator: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.has_separator = data.hasSeparator;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}

export default MenuServiceItemDownload;