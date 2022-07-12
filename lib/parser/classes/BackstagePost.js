import Parser from "../index.js";
import Author from "./misc/Author.js";
import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class BackstagePost extends YTNode {
    static type = 'BackstagePost';
    constructor(data) {
        super();
        this.id = data.postId;
        this.author = new Author({
            ...data.authorText,
            navigationEndpoint: data.authorEndpoint
        }, null, data.authorThumbnail);
        this.content = new Text(data.contentText, '');
        this.published = new Text(data.publishedTimeText);
        this.poll_status = data.pollStatus;
        this.vote_status = data.voteStatus;
        this.likes = new Text(data.voteCount);
        this.menu = Parser.parse(data.actionMenu) || null;
        this.actions = Parser.parse(data.actionButtons);
        this.vote_button = Parser.parse(data.voteButton);
        this.surface = data.surface;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.attachment = Parser.parse(data.backstageAttachment) || null;
    }
}
export default BackstagePost;
