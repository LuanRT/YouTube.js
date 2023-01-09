import Parser, { ParsedResponse } from '..';
import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';
import { observe, ObservedArray } from '../helpers';

import CommentsHeader from '../classes/comments/CommentsHeader';
import CommentSimplebox from '../classes/comments/CommentSimplebox';
import CommentThread from '../classes/comments/CommentThread';
import ContinuationItem from '../classes/ContinuationItem';

class Comments {
  #page: ParsedResponse;
  #actions: Actions;
  #continuation?: ContinuationItem;

  header?: CommentsHeader;
  contents: ObservedArray<CommentThread>;

  constructor(actions: Actions, data: any, already_parsed = false) {
    this.#page = already_parsed ? data : Parser.parseResponse(data);
    this.#actions = actions;

    const contents = this.#page.on_response_received_endpoints;

    if (!contents)
      throw new InnertubeError('Comments page did not have any content.');

    const header_node = contents.at(0);
    const body_node = contents.at(1);

    this.header = header_node?.contents?.firstOfType(CommentsHeader);

    const threads = body_node?.contents?.filterType(CommentThread) || [];

    this.contents = observe(threads.map((thread) => {
      thread.comment?.setActions(this.#actions);
      thread.setActions(this.#actions);
      return thread;
    }));

    this.#continuation = body_node?.contents?.firstOfType(ContinuationItem);
  }

  /**
   * Sorts the comments with the given sort type.
   * @param sort - Sort type.
   */
  async applySort(sort: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments> {
    if (!this.header)
      throw new InnertubeError('Page header is missing. Cannot apply sort filter.');

    let button;

    if (sort === 'TOP_COMMENTS') {
      button = this.header.sort_menu?.sub_menu_items?.at(0);
    } else if (sort === 'NEWEST_FIRST') {
      button = this.header.sort_menu?.sub_menu_items?.at(1);
    }

    if (!button)
      throw new InnertubeError('Could not find target button.');

    if (button.selected)
      return this;

    const response = await button.endpoint.call(this.#actions, { parse: true });

    return new Comments(this.#actions, response, true);
  }

  /**
   * Creates a top-level comment.
   * @param text - Comment text.
   */
  async createComment(text: string): Promise<ApiResponse> {
    if (!this.header)
      throw new InnertubeError('Page header is missing. Cannot create comment.');

    const button = this.header.create_renderer?.as(CommentSimplebox).submit_button;

    if (!button)
      throw new InnertubeError('Could not find target button. You are probably not logged in.');

    if (!button.endpoint)
      throw new InnertubeError('Button does not have an endpoint.');

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

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Comments;