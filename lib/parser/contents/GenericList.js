
const ResultsParser = require(".");

module.exports = (name) => {
    return class List {
        type = name;
        isList = true;
        constructor(items) {
            this.contents = ResultsParser.parse(items.contents);
        }
    }
}