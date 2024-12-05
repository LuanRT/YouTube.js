import { YTNode } from '../../helpers.ts';
import type { FeedbackRequest, IEndpoint, RawNode } from '../../index.ts';

export default class FeedbackEndpoint extends YTNode implements IEndpoint<FeedbackRequest> {
  static type = 'FeedbackEndpoint';

  #API_PATH = 'feedback';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): FeedbackRequest {
    const request: FeedbackRequest = {};

    if (this.#data.feedbackToken)
      request.feedbackTokens = [ this.#data.feedbackToken ];

    if (this.#data.cpn)
      request.feedbackContext = { cpn: this.#data.cpn };

    request.isFeedbackTokenUnencrypted = !!this.#data.isFeedbackTokenUnencrypted;
    request.shouldMerge = !!this.#data.shouldMerge;

    return request;
  }
}