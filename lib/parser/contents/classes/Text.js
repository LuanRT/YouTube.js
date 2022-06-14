'use strict';

const TextRun = require('./TextRun');

class Text {
  constructor(data) {
    if (data?.hasOwnProperty('runs')) {
      this.text = data.runs.map((run) => run.text).join('');
      this.runs = data.runs.map((run) => new TextRun(run));
    } else {
      this.text = data?.simpleText || 'N/A';
    }
  }
  
  toString() {
    return this.text;
  }
}

module.exports = Text;