import Parser, { ParsedResponse } from "../index";
import { InnertubeError } from "../../utils/Utils";
import Actions from "../../core/Actions";
import CommentsHeader from "../classes/comments/CommentsHeader";
import CommentThread from "../classes/comments/CommentThread";
import ContinuationItem from "../classes/ContinuationItem";
import NavigationEndpoint from "../classes/NavigationEndpoint";
class Comments {
    #page: ParsedResponse;
    #actions;
    #continuation;
    header;
    contents;
    constructor(actions: Actions, data: any, already_parsed = false) {
        this.#page = already_parsed ? data : Parser.parseResponse(data);
        this.#actions = actions;
        const contents = this.#page.on_response_received_endpoints;
        this.header = contents?.[0].contents?.get({ type: 'CommentsHeader' })?.as(CommentsHeader);
        // TODO: validate this
        const threads: CommentThread[] = contents?.[1].contents?.getAll({ type: 'CommentThread' }) as CommentThread[];
        this.contents = threads.map((thread) => {
            thread.comment?.setActions(this.#actions);
            thread.setActions(this.#actions);
            return thread;
        });
        this.#continuation = contents?.[1].contents?.get({ type: 'ContinuationItem' })?.as(ContinuationItem);
    }
    /**
     * Creates a top-level comment.
     */
    async comment(text: string) {
        const button = this.header?.create_renderer?.key("submit_button").node();
        const payload = {
            params: {
                commentText: text
            },
            parse: false
        };
        const response = await button?.key("endpoint").nodeOfType(NavigationEndpoint).callTest(this.#actions, payload);
        return response;
    }
    /**
     * Retrieves next batch of comments.
     * @returns {Promise.<Comments>}
     */
    async getContinuation() {
        if (!this.#continuation)
            throw new InnertubeError('Continuation not found');
        const data = await this.#continuation.endpoint.callTest(this.#actions);
        // Copy the previous page so we can keep the header.
        const page = Object.assign({}, this.#page);
        // Remove previous items and append the continuation.
        if (!page.on_response_received_endpoints)
            throw new InnertubeError('Invalid reponse format, missing on_response_received_endpoints');
        page.on_response_received_endpoints.pop();
        if (!data.on_response_received_endpoints)
            throw new InnertubeError('Invalid reponse format, missing on_response_received_endpoints');
        page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
        return new Comments(this.#actions, page, true);
    }
    get page() {
        return this.#page;
    }
}
export default Comments;
