import type { RawNode } from '../../index.js';
import WatchEndpoint from './WatchEndpoint.js';

export default class ReelWatchEndpoint extends WatchEndpoint {
  static type = 'ReelWatchEndpoint';

  constructor(data: RawNode) {
    super(data);
  }
}