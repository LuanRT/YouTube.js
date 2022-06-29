'use strict';

const TextRun = require('./TextRun');
const EmojiRun = require('./EmojiRun');

class Text {
  text;
  
  constructor(data) {
    if (data?.hasOwnProperty('runs')) {
      this.runs = data.runs.map((run) => run.emoji &&
        new EmojiRun(run) ||
        new TextRun(run)
      );
      
      this.text = this.runs.map((run) => run.text).join('');
    } else {
      this.text = data?.simpleText || 'N/A';
    }
  }
  
  toString() {
    return this.text;
  }
}

module.exports = Text;