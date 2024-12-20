import { YTNode } from '../../helpers.js';
import type { IEndpoint, LikeRequest, RawNode } from '../../index.js';

const LIKE_API_PATH = 'like/like';
const DISLIKE_API_PATH = 'like/dislike';
const REMOVE_LIKE_API_PATH = 'like/removelike';

export default class LikeEndpoint extends YTNode implements IEndpoint<LikeRequest> {
  static type = 'LikeEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#data.status === 'DISLIKE' ?
      DISLIKE_API_PATH : this.#data.status === 'INDIFFERENT' ?
        REMOVE_LIKE_API_PATH : LIKE_API_PATH;
  }

  public buildRequest(): LikeRequest {
    const request: LikeRequest = {};

    if (this.#data.target)
      request.target = this.#data.target;

    const params = this.getParams();
    if (params)
      request.params = params;

    return request;
  }

  public getParams(): string | undefined {
    switch (this.#data.status) {
      case 'LIKE':
        return this.#data.likeParams;
      case 'DISLIKE':
        return this.#data.dislikeParams;
      case 'INDIFFERENT':
        return this.#data.removeLikeParams;
      default:
        return undefined;
    }
  }
}