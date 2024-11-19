import { YTNode } from '../../helpers.js';
import type { DeletePlaylistServiceRequest, IEndpoint, RawNode } from '../../index.js';

export default class DeletePlaylistEndpoint extends YTNode implements IEndpoint<DeletePlaylistServiceRequest> {
  static type = 'DeletePlaylistEndpoint';

  #API_PATH = 'playlist/delete';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): DeletePlaylistServiceRequest {
    const request: DeletePlaylistServiceRequest = {};

    if (this.#data.playlistId)
      request.playlistId = this.#data.sourcePlaylistId;

    return request;
  }
}