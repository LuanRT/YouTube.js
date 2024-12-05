import { YTNode } from '../../helpers.ts';
import type { IEndpoint, LikeRequest, RawNode } from '../../index.ts';

export default class LikeEndpoint extends YTNode implements IEndpoint<LikeRequest> {
  static type = 'LikeEndpoint';

  #LIKE_API_PATH = 'like/like';
  #DISLIKE_API_PATH = 'like/dislike';
  #REMOVE_LIKE_API_PATH = 'like/removelike';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#data.status === 'DISLIKE' ?
      this.#DISLIKE_API_PATH : this.#data.status === 'INDIFFERENT' ?
        this.#REMOVE_LIKE_API_PATH : this.#LIKE_API_PATH;
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