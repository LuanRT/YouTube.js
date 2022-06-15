export = VideoOwner;
declare class VideoOwner {
    constructor(item: any);
    type: string;
    author: Author;
}
import Author = require("./Author");
