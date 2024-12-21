import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, WatchNextRequest } from '../../index.js';

const API_PATH = 'next';

export default class WatchNextEndpoint extends YTNode implements IEndpoint<WatchNextRequest> {
  static type = 'WatchNextEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): WatchNextRequest {
    const request: WatchNextRequest = {};

    if (this.#data.videoId)
      request.videoId = this.#data.videoId;

    if (this.#data.playlistId)
      request.playlistId = this.#data.playlistId;

    if (this.#data.index !== undefined || this.#data.playlistIndex !== undefined)
      request.playlistIndex = this.#data.index || this.#data.playlistIndex;

    if (this.#data.playerParams || this.#data.params)
      request.params = this.#data.playerParams || this.#data.params;

    request.racyCheckOk = !!this.#data.racyCheckOk;
    request.contentCheckOk = !!this.#data.contentCheckOk;

    return request;
  }
}