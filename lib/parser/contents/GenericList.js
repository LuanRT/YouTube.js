
const ResultsParser = require(".");

module.exports = (name, field = 'contents') => {
    return class List {
        type = name;
        isList = true;
        constructor(items) {
            this.contents = ResultsParser.parse(items[field]);
        }
    }
}