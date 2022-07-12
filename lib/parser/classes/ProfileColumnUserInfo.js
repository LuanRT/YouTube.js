import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class ProfileColumnUserInfo extends YTNode {
    static #type = Symbol('ProfileColumnUserInfo');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default ProfileColumnUserInfo;
