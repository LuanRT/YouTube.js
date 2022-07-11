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
    /**
     * API response.
     * @typedef {{ success: boolean, status_code: number, data: object }} Response
     */
    /**
     * Likes the comment.
     * @returns {Promise.<Response>}
     */
    like(): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Dislikes the comment.
     * @returns {Promise.<Response>}
     */
    dislike(): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Creates a reply to the comment.
     * @param {string} text
     * @returns {Promise.<Response>}
     */
    reply(text: string): Promise<{
        success: boolean;
        status_code: number;
        data: object;
    }>;
    /**
     * Translates the comment to the given language.
     * @param {string} target_language
     */
    translate(target_language: string): Promise<any>;
    /**
     * @param {import('../../../../core/Actions')} actions
     * @private
     */
    private setActions;
    #private;
}
import Text = require("../Text");
import Thumbnail = require("../Thumbnail");
import Author = require("../Author");
