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
        }
        else this.text = def;
    }
    
    toString() {
        return this.text;
    }

    toJSON() {
        return this.text;
    }
}

module.exports = Text;