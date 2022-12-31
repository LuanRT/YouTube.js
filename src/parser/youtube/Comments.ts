import Parser, { ParsedResponse } from '..';
import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import Button from '../classes/Button';
import CommentsHeader from '../classes/comments/CommentsHeader';
import CommentSimplebox from '../classes/comments/CommentSimplebox';
import CommentThread from '../classes/comments/CommentThread';
import ContinuationItem from '../classes/ContinuationItem';

class Comments {
  #page: ParsedResponse;
  #actions: Actions;
  #continuation?: ContinuationItem;

  header?: CommentsHeader;
  contents: CommentThread[];

  constructor(actions: Actions, data: any, already_parsed = false) {
    this.#page = already_parsed ? data : Parser.parseResponse(data);
    this.#actions = actions;

    const contents = this.#page.on_response_received_endpoints;

    if (!contents)
      throw new InnertubeError('Comments page did not have any content.');

    this.header = contents[0].contents?.firstOfType(CommentsHeader);

    const threads: CommentThread[] = contents[1].contents?.filterType(CommentThread) || [];

    this.contents = threads.map((thread) => {
      thread.comment?.setActions(this.#actions);
      thread.setActions(this.#actions);
      return thread;
    }) as CommentThread[];

    this.#continuation = contents[1].contents?.firstOfType(ContinuationItem);
  }

  /**
   * Creates a top-level comment.
   * @param text - Comment text.
   */
  async createComment(text: string): Promise<ApiResponse> {
    if (!this.header)
      throw new InnertubeError('Page header is missing. Cannot create comment.');

    const button = this.header.create_renderer?.as(CommentSimplebox).submit_button?.item().as(Button);

    if (!button)
      throw new InnertubeError('Could not find target button. You are probably not logged in.');

    const response = await button.endpoint.call(this.#actions, { commentText: text });

    return response;
  }

  /**
   * Retrieves next batch of comments.
   */
  async getContinuation(): Promise<Comments> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found');

    const data = await this.#continuation.endpoint.call(this.#actions, { parse: true });

    // Copy the previous page so we can keep the header.
    const page = Object.assign({}, this.#page);

    if (!page.on_response_received_endpoints || !data.on_response_received_endpoints)
      throw new InnertubeError('Invalid reponse format, missing on_response_received_endpoints.');

    // Remove previous items and append the continuation.
    page.on_response_received_endpoints.pop();
    page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);

    return new Comments(this.#actions, page, true);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Comments;