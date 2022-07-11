import Parser from "../index.js";

class Tabbed {
    type = 'Tabbed';
    constructor(data) {
        return Parser.parse(data);
    }
}
export default Tabbed;
