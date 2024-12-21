import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, ShareEntityServiceRequest } from '../../index.js';

const API_PATH = 'share/get_share_panel';

export default class ShareEntityServiceEndpoint extends YTNode implements IEndpoint<ShareEntityServiceRequest> {
  static type = 'ShareEntityServiceEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): ShareEntityServiceRequest {
    const request: ShareEntityServiceRequest = {};

    if (this.#data.serializedShareEntity)
      request.serializedSharedEntity = this.#data.serializedShareEntity;

    if (this.#data.clientParams)
      request.clientParams = this.#data.clientParams;

    return request;
  }
}