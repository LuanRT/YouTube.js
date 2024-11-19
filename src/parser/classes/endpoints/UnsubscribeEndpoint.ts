import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, UnsubscribeRequest } from '../../index.js';

export default class UnsubscribeEndpoint extends YTNode implements IEndpoint<UnsubscribeRequest> {
  static type = 'UnsubscribeEndpoint';

  #API_PATH = 'subscription/unsubscribe';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string{
    return this.#API_PATH;
  }

  public buildRequest(): UnsubscribeRequest {
    const request: UnsubscribeRequest = {};

    if (this.#data.channelIds)
      request.channelIds = this.#data.channelIds;

    if (this.#data.siloName)
      request.siloName = this.#data.siloName;

    if (this.#data.params)
      request.params = this.#data.params;

    return request;
  }
}