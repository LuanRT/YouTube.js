import Parser, { ParsedResponse } from "../index.js";
import { InnertubeError } from "../../utils/Utils.js";
import Actions from "../../core/Actions.js";
import CommentsHeader from "../classes/comments/CommentsHeader.js";
import CommentThread from "../classes/comments/CommentThread.js";
import ContinuationItem from "../classes/ContinuationItem.js";
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
        // TODO: what is this type
        // @ts-ignore
        const button = this.header?.create_renderer?.submit_button;
        const payload = {
            params: {
                commentText: text
            },
            parse: false
        };
        const response = await button.endpoint.callTest(this.#actions, payload);
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
