import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class DownloadButton extends YTNode {
  static type = 'DownloadButton';

  style: string;
  size: string; // TODO: check this
  endpoint: NavigationEndpoint;
  target_id: string;

  constructor(data: RawNode) {
    super();
    this.style = data.style;
    this.size = data.size;
    this.endpoint = new NavigationEndpoint(data.command);
    this.target_id = data.targetId;
  }
}