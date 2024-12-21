import { YTNode } from '../../helpers.js';
import type { IEndpoint, PerformCommentActionRequest, RawNode } from '../../index.js';

const API_PATH = 'comment/perform_comment_action';

export default class PerformCommentActionEndpoint extends YTNode implements IEndpoint<PerformCommentActionRequest> {
  static type = 'PerformCommentActionEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): PerformCommentActionRequest {
    const request: PerformCommentActionRequest = {};

    if (this.#data.actions)
      request.actions = this.#data.actions;

    if (this.#data.action)
      request.actions = [ this.#data.action ];

    return request;
  }
}