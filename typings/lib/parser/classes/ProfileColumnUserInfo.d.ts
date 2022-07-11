export = ProfileColumnUserInfo;
declare class ProfileColumnUserInfo {
    constructor(data: any);
    type: string;
    title: Text;
    thumbnails: Thumbnail[];
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
