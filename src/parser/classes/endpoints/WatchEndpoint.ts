import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, WatchRequest } from '../../index.js';

export default class WatchEndpoint extends YTNode implements IEndpoint<WatchRequest> {
  static type = 'WatchEndpoint';

  #API_PATH = 'player';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): WatchRequest {
    const request: WatchRequest = {};

    if (this.#data.videoId)
      request.videoId = this.#data.videoId;

    if (this.#data.playlistId)
      request.playlistId = this.#data.playlistId;

    if (this.#data.index !== undefined)
      request.playlistIndex = this.#data.index + 1;

    if (this.#data.playerParams)
      request.params = this.#data.playerParams;

    if (this.#data.startTimeSeconds)
      request.startTimeSecs = this.#data.startTimeSeconds;

    if (this.#data.overrideMutedAtStart)
      request.overrideMutedAtStart = this.#data.overrideMutedAtStart;

    request.racyCheckOk = !!this.#data.racyCheckOk;
    request.contentCheckOk = !!this.#data.contentCheckOk;

    return request;
  }
}