import { YTNode } from '../../helpers.ts';
import type { IEndpoint, RawNode, ShareEntityServiceRequest } from '../../index.ts';

export default class ShareEntityServiceEndpoint extends YTNode implements IEndpoint<ShareEntityServiceRequest> {
  static type = 'ShareEntityServiceEndpoint';

  #API_PATH = 'share/get_share_panel';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
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