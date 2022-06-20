'use strict';

const Parser = require('..');

class SectionList {
  type = 'SectionList';
  
  constructor(data) {
    data.targetId 
      && (this.target_id = data.targetId);
      
    this.contents = Parser.parse(data.contents);
   
    if (data.continuations) {
      if (data.continuations[0].nextContinuationData) {
        this.continuation = data.continuations[0].nextContinuationData.continuation;
      } else if (data.continuations[0].reloadContinuationData) {
        this.continuation = data.continuations[0].reloadContinuationData.continuation;
      }
    }
    
    data.header && 
      (data.header = Parser.parse(data.header));
  }
}

module.exports = SectionList;