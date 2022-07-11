import Parser from "../../../index.js";
import Text from "../../Text.js";

class LiveChatBannerHeader {
    type = 'LiveChatBannerHeader';
    constructor(data) {
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
    }
}
export default LiveChatBannerHeader;
