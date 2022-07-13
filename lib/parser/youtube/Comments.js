import Parser from "../index.js";
import utils from "../../utils/Utils.js";

const { InnertubeError } = utils;
class Comments {
    #page;
    #actions;
    #continuation;
    constructor(actions, data, already_parsed = false) {
        this.#page = already_parsed ? data : Parser.parseResponse(data);
        this.#actions = actions;
        const contents = this.#page.on_response_received_endpoints;
        /** @type {import('../classes/comments/CommentsHeader')} */
        this.header = contents[0].contents.get({ type: 'CommentsHeader' });
        const threads = contents[1].contents?.getAll({ type: 'CommentThread' }) || [];
        /** @type {import('../classes/comments/CommentThread')[]} */
        this.contents = threads.map((thread) => {
            thread.comment.setActions(this.#actions);
            thread.setActions(this.#actions);
            return thread;
        });
        this.#continuation = contents[1].contents?.get({ type: 'ContinuationItem' }) || null;
    }
    /**
     * Creates a top-level comment.
     * @param {string} text
     * @returns {Promise.<{ success: boolean, status_code: number, data: object }>}
     */
    async comment(text) {
        const button = this.header.create_renderer.submit_button;
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
        page.on_response_received_endpoints.pop();
        page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
        return new Comments(this.#actions, page, true);
    }
    get page() {
        return this.#page;
    }
}
export default Comments;
