import type { RawNode } from '../../index.js';
import WatchEndpoint from './WatchEndpoint.js';

export default class PrefetchWatchCommand extends WatchEndpoint {
  static type = 'PrefetchWatchCommand';

  constructor(data: RawNode) {
    super(data);
  }
}