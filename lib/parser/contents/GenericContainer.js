const ResultsParser = require(".");

module.exports = (name) => {
    return class GenericContainer {
        type = name;
    
        constructor(item) {
            this.content = ResultsParser.parseItem(item.content);
        }
    }
};