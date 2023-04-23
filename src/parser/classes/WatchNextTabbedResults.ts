import type { RawNode } from '../index.js';
import TwoColumnBrowseResults from './TwoColumnBrowseResults.js';

export default class WatchNextTabbedResults extends TwoColumnBrowseResults {
  static type = 'WatchNextTabbedResults';

  constructor(data: RawNode) {
    super(data);
  }
}