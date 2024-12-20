import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, WatchRequest } from '../../index.js';

const API_PATH = 'player';

export default class WatchEndpoint extends YTNode implements IEndpoint<WatchRequest> {
  static type = 'WatchEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): WatchRequest {
    const request: WatchRequest = {};

    if (this.#data.videoId)
      request.videoId = this.#data.videoId;

    if (this.#data.playlistId)
      request.playlistId = this.#data.playlistId;

    if (this.#data.index !== undefined || this.#data.playlistIndex !== undefined)
      request.playlistIndex = this.#data.index || this.#data.playlistIndex;

    if (this.#data.playerParams || this.#data.params)
      request.params = this.#data.playerParams || this.#data.params;

    if (this.#data.startTimeSeconds)
      request.startTimeSecs = this.#data.startTimeSeconds;

    if (this.#data.overrideMutedAtStart)
      request.overrideMutedAtStart = this.#data.overrideMutedAtStart;

    request.racyCheckOk = !!this.#data.racyCheckOk;
    request.contentCheckOk = !!this.#data.contentCheckOk;

    return request;
  }
}