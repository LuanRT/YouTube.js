import Text from "./misc/Text.js";
import Thumbnail from "./misc/Thumbnail.js";

import { YTNode } from "../helpers";

class ProfileColumnUserInfo extends YTNode {
    static type = 'ProfileColumnUserInfo';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default ProfileColumnUserInfo;
