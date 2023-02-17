import TwoColumnBrowseResults from './TwoColumnBrowseResults.ts';

class WatchNextTabbedResults extends TwoColumnBrowseResults {
  static type = 'WatchNextTabbedResults';

  constructor(data: any) {
    super(data);
  }
}

export default WatchNextTabbedResults;