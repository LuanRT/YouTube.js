import Parser from "../../../index.js";
import Text from "../../misc/Text.js";

import { YTNode } from "../../../helpers"; 
class LiveChatBannerHeader extends YTNode {
    static type = 'LiveChatBannerHeader';
    constructor(data) {
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
        this.context_menu_button = Parser.parse(data.contextMenuButton);
    }
}
export default LiveChatBannerHeader;
