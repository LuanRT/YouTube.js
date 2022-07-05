export = CommentSimplebox;
declare class CommentSimplebox {
    constructor(data: any);
    type: string;
    submit_button: any;
    cancel_button: any;
    author_thumbnails: Thumbnail[];
    placeholder: Text;
    avatar_size: any;
}
import Thumbnail = require("../Thumbnail");
import Text = require("../Text");
