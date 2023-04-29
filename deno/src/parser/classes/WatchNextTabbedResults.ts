import type { RawNode } from '../index.ts';
import TwoColumnBrowseResults from './TwoColumnBrowseResults.ts';

export default class WatchNextTabbedResults extends TwoColumnBrowseResults {
  static type = 'WatchNextTabbedResults';

  constructor(data: RawNode) {
    super(data);
  }
}