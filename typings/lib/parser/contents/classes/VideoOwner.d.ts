export = VideoOwner;
declare class VideoOwner {
    constructor(data: any);
    type: string;
    subscription_button: any;
    subscriber_count: Text;
    author: Author;
}
import Text = require("./Text");
import Author = require("./Author");
