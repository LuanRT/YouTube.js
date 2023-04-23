import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class MenuServiceItemDownload extends YTNode {
  static type = 'MenuServiceItemDownload';

  has_separator: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.has_separator = !!data.hasSeparator;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}