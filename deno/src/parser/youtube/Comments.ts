import { Parser } from '../index.ts';
import { InnertubeError } from '../../utils/Utils.ts';
import type { ObservedArray } from '../helpers.ts';
import { observe } from '../helpers.ts';

import CommentsHeader from '../classes/comments/CommentsHeader.ts';
import CommentSimplebox from '../classes/comments/CommentSimplebox.ts';
import CommentThread from '../classes/comments/CommentThread.ts';
import ContinuationItem from '../classes/ContinuationItem.ts';
import { ReloadContinuationItemsCommand } from '../index.ts';
import AppendContinuationItemsAction from '../classes/actions/AppendContinuationItemsAction.ts';
import type { Actions, ApiResponse } from '../../core/index.ts';
import type { INextResponse } from '../types/index.ts';

export default class Comments {
  readonly #page: INextResponse;
  readonly #actions: Actions;
  readonly #continuation?: ContinuationItem;

  public header?: CommentsHeader;
  public contents: ObservedArray<CommentThread>;

  constructor(actions: Actions, data: any, already_parsed = false) {
    this.#page = already_parsed ? data : Parser.parseResponse<INextResponse>(data);
    this.#actions = actions;

    const contents = this.#page.on_response_received_endpoints;

    if (!contents)
      throw new InnertubeError('The comments page did not have any content');

    const header_node = contents.at(0)?.as(AppendContinuationItemsAction, ReloadContinuationItemsCommand);
    const body_node = contents.at(1)?.as(AppendContinuationItemsAction, ReloadContinuationItemsCommand);

    this.header = header_node?.contents?.firstOfType(CommentsHeader);

    const threads = body_node?.contents?.filterType(CommentThread) || [];

    this.contents = observe(threads.map((thread) => {
      if (thread.comment)
        thread.comment.setActions(this.#actions);
      thread.setActions(this.#actions);
      thread.processRepliesData();
      return thread;
    }));

    this.#continuation = body_node?.contents?.firstOfType(ContinuationItem);
  }

  /**
   * Applies given sort option to the comments.
   * @param sort - Sort type.
   */
  async applySort(sort: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments> {
    if (!this.header)
      throw new InnertubeError('Could not apply sort because the comments header is missing');

    let button;

    if (sort === 'TOP_COMMENTS') {
      button = this.header.sort_menu?.sub_menu_items?.at(0);
    } else if (sort === 'NEWEST_FIRST') {
      button = this.header.sort_menu?.sub_menu_items?.at(1);
    }

    if (!button)
      throw new InnertubeError('Could not apply sort because the sort button is missing');

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
      throw new InnertubeError('Comment could not be created because the page header is missing');

    const button = this.header.create_renderer?.as(CommentSimplebox).submit_button;

    if (!button)
      throw new InnertubeError('Comment could not be created because the comment button is missing');

    if (!button.endpoint)
      throw new InnertubeError('Comment could not be created because the comment button does not have an endpoint');

    return await button.endpoint.call(this.#actions, { commentText: text });
  }

  /**
   * Retrieves next batch of comments.
   */
  async getContinuation(): Promise<Comments> {
    if (!this.#continuation)
      throw new InnertubeError('No continuation item found');

    const data = await this.#continuation.endpoint.call(this.#actions, { parse: true });

    // Copy the previous page so we can keep the header.
    const page = Object.assign({}, this.#page);

    if (!page.on_response_received_endpoints || !data.on_response_received_endpoints)
      throw new InnertubeError('Invalid reponse format, missing on_response_received_endpoints');

    // Remove previous items and append the continuation.
    page.on_response_received_endpoints.pop();
    page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);

    return new Comments(this.#actions, page, true);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page(): INextResponse {
    return this.#page;
  }
}