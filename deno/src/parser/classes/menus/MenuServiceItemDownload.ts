import NavigationEndpoint from '../NavigationEndpoint.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class MenuServiceItemDownload extends YTNode {
  static type = 'MenuServiceItemDownload';

  has_separator: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.has_separator = data.hasSeparator;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}

export default MenuServiceItemDownload;