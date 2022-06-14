const TextRun = require('./TextRun');

class Text {
  type = 'Text';
  /**
   * @type {string | undefined}
   */
  text;
  constructor(txt, def = undefined) {
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
    
  /**
   * Get the string representation of this text
   * @note may return an empty string if this.text is undefined
   * @returns {string}
   */
  toString() {
    return this.text || '';
  }

  toJSON() {
    return {
      string: this.toString(),
      runs: this.runs || [
        {
          text: this.text
        }
      ]
    };
  }
}

module.exports = Text;