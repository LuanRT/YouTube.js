import type { RawNode } from '../../index.ts';
import WatchEndpoint from './WatchEndpoint.ts';

export default class PrefetchWatchCommand extends WatchEndpoint {
  static type = 'PrefetchWatchCommand';

  constructor(data: RawNode) {
    super(data);
  }
}