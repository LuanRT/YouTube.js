import { YTNode } from '../../helpers.js';
import type { FeedbackRequest, IEndpoint, RawNode } from '../../index.js';

const API_PATH = 'feedback';

export default class FeedbackEndpoint extends YTNode implements IEndpoint<FeedbackRequest> {
  static type = 'FeedbackEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): FeedbackRequest {
    const request: FeedbackRequest = {};

    request.feedbackTokens = [];

    if (this.#data.feedbackToken)
      request.feedbackTokens.push(this.#data.feedbackToken);

    if (this.#data.cpn)
      request.feedbackContext = { cpn: this.#data.cpn };

    request.shouldMerge = !!this.#data.shouldMerge;

    // @NOTE: extraFeedbackTokens and isFeedbackTokenUnencrypted are both client-side properties.
    request.isFeedbackTokenUnencrypted = !!this.#data.isFeedbackTokenUnencrypted;
    if (this.#data.extraFeedbackTokens) {
      request.shouldMerge = true;
      request.feedbackTokens.push(...this.#data.extraFeedbackTokens);
    }

    return request;
  }
}