'use strict';

import Parser from '..';

class SingleColumnMusicWatchNextResults {
  type = 'SingleColumnMusicWatchNextResults';

  constructor(data) {
    return Parser.parse(data);
  }
}

export default SingleColumnMusicWatchNextResults;