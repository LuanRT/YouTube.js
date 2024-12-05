import { YTNode } from '../../helpers.ts';
import type { CreatePlaylistServiceRequest, IEndpoint, RawNode } from '../../index.ts';

export default class CreatePlaylistServiceEndpoint extends YTNode implements IEndpoint<CreatePlaylistServiceRequest> {
  static type = 'CreatePlaylistServiceEndpoint';

  #API_PATH = 'playlist/create';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): CreatePlaylistServiceRequest {
    const request: CreatePlaylistServiceRequest = {};
  
    if (this.#data.title)
      request.title = this.#data.title;

    if (this.#data.privacyStatus)
      request.privacyStatus = this.#data.privacyStatus;

    if (this.#data.description)
      request.description = this.#data.description;

    if (this.#data.videoIds)
      request.videoIds = this.#data.videoIds;

    if (this.#data.params)
      request.params = this.#data.params;

    if (this.#data.sourcePlaylistId)
      request.sourcePlaylistId = this.#data.sourcePlaylistId;

    return request;
  }
}