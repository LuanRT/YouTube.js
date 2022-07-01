export = Comment;
declare class Comment {
    constructor(data: any);
    type: string;
    content: Text;
    published: Text;
    author_is_channel_owner: any;
    current_user_reply_thumbnail: Thumbnail[];
    author_badge: any;
    author: Author;
    action_menu: any;
    action_buttons: any;
    comment_id: any;
    vote_status: any;
    vote_count: {
        text: any;
        short_text: any;
    };
    reply_count: any;
    is_liked: any;
    is_disliked: any;
    is_pinned: boolean;
}
import Text = require("../Text");
import Thumbnail = require("../Thumbnail");
import Author = require("../Author");
