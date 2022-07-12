import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class LiveChatParticipantsList extends YTNode {
    static #type = Symbol('LiveChatParticipantsList');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.participants = Parser.parse(data.participants);
    }
}
export default LiveChatParticipantsList;
