'use strict';

const Parser = require('..');

class SectionList {
  type = 'sectionListRenderer';
  
  constructor(data) {
    this.target_id = data.targetId || null;
    this.contents = Parser.parse(data.contents);
    
    data.continuations &&
      (this.continuation = data.continuations[0].nextContinuationData.continuation);
    
    this.header = Parser.parse(data.header);
  }
}

module.exports = SectionList;