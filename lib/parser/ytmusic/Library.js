import Parser from "../index";

// Const { observe, InnertubeError } = require('../../utils/Utils');
/** @namespace */
class Library {
    #page;
    /**
     * @param {object} response - API response.
     */
    constructor(response) {
        this.#page = Parser.parseResponse(response.data);
        // TODO: finish this
    }
    get page() {
        return this.#page;
    }
}
export default Library;
