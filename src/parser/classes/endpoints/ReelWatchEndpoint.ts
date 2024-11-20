import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, ReelWatchRequest } from '../../index.js';

export default class ReelWatchEndpoint extends YTNode implements IEndpoint<ReelWatchRequest> {
  static type = 'ReelWatchEndpoint';

  #API_PATH = 'reel/reel_item_watch';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): ReelWatchRequest {
    const request: ReelWatchRequest = {};

    if (this.#data.videoId) {
      request.playerRequest = {
        videoId: this.#data.videoId
      };
    }
    
    if (request.playerRequest) {
      if (this.#data.playerParams)
        request.playerRequest.params = this.#data.playerParams;

      if (this.#data.racyCheckOk)
        request.playerRequest.racyCheckOk = !!this.#data.racyCheckOk;

      if (this.#data.contentCheckOk)
        request.playerRequest.contentCheckOk = !!this.#data.contentCheckOk;
    }

    if (this.#data.params)
      request.params = this.#data.params;

    if (this.#data.inputType)
      request.inputType = this.#data.inputType;

    request.disablePlayerResponse = !!this.#data.disablePlayerResponse;

    return request;
  }
}