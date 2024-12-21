import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, SubscribeRequest } from '../../index.js';

const API_PATH = 'subscription/subscribe';

export default class SubscribeEndpoint extends YTNode implements IEndpoint<SubscribeRequest> {
  static type = 'SubscribeEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): SubscribeRequest {
    const request: SubscribeRequest = {};

    if (this.#data.channelIds)
      request.channelIds = this.#data.channelIds;

    if (this.#data.siloName)
      request.siloName = this.#data.siloName;

    if (this.#data.params)
      request.params = this.#data.params;

    if (this.#data.botguardResponse)
      request.botguardResponse = this.#data.botguardResponse;

    if (this.#data.feature)
      request.clientFeature = this.#data.feature;

    return request;
  }
}