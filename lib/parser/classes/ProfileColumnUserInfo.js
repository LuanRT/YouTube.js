import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class ProfileColumnUserInfo extends YTNode {
    static [ParserTypeSymbol] = 'ProfileColumnUserInfo';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default ProfileColumnUserInfo;
