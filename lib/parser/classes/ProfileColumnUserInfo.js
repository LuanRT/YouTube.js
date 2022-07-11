import Text from "./Text.js";
import Thumbnail from "./Thumbnail.js";

class ProfileColumnUserInfo {
    type = 'ProfileColumnUserInfo';
    constructor(data) {
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default ProfileColumnUserInfo;
