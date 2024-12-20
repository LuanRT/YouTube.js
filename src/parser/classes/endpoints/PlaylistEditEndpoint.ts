import { YTNode } from '../../helpers.js';
import type { IEndpoint, PlaylistEditRequest, RawNode } from '../../index.js';

const API_PATH = 'browse/edit_playlist';

export default class PlaylistEditEndpoint extends YTNode implements IEndpoint<PlaylistEditRequest> {
  static type = 'PlaylistEditEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): PlaylistEditRequest {
    const request: PlaylistEditRequest = {};

    if (this.#data.actions)
      request.actions = this.#data.actions;
 
    if (this.#data.playlistId)
      request.playlistId = this.#data.playlistId;

    if (this.#data.params)
      request.params = this.#data.params;

    return request;
  }
}