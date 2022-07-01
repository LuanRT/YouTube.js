'use strict';

const Parser = require('..');

class ItemSection {
  type = 'ItemSection';
  
  constructor(data) {
    this.header = Parser.parse(data.header);
    this.contents = Parser.parse(data.contents);
   
    if (data.targetId || data.sectionIdentifier) { 
    	this.target_id = data?.target_id || data?.sectionIdentifier;
	}
  }
}

module.exports = ItemSection;