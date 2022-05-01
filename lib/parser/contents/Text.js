const TextRun = require('./TextRun');

class Text {
  type = 'Text';
  text;
  constructor(txt, def = null) {
    if (typeof txt !== 'object') {
      this.text = def;
    }
    else if (txt.hasOwnProperty('simpleText')) 
      this.text = txt.simpleText;
    else if (Array.isArray(txt.runs)) {
      this.text = txt.runs.map(a => a.text).join('');
      this.runs = txt.runs.map(a => new TextRun(a));
    }
    else this.text = def;
  }
    
  toString() {
    return this.text;
  }

  toJSON() {
    return {
      text: this.text,
      runs: this.runs || [
        {
          text: this.text
        }
      ]
    };
  }
}

module.exports = Text;