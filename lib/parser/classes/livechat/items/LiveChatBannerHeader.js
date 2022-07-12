import Parser from "../../../index.js";
import Text from "../../misc/Text.js";

class LiveChatBannerHeader {
    static #type = Symbol('LiveChatBannerHeader');
    static get type() { return this.#type }
    constructor(data) {
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
    }
}
export default LiveChatBannerHeader;
