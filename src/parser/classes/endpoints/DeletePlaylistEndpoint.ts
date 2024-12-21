import { YTNode } from '../../helpers.js';
import type { DeletePlaylistServiceRequest, IEndpoint, RawNode } from '../../index.js';

const API_PATH = 'playlist/delete';

export default class DeletePlaylistEndpoint extends YTNode implements IEndpoint<DeletePlaylistServiceRequest> {
  static type = 'DeletePlaylistEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): DeletePlaylistServiceRequest {
    const request: DeletePlaylistServiceRequest = {};

    if (this.#data.playlistId)
      request.playlistId = this.#data.sourcePlaylistId;

    return request;
  }
}