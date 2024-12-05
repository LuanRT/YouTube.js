import { YTNode } from '../../helpers.ts';
import type { CreateCommentRequest, IEndpoint, RawNode } from '../../index.ts';

export default class CreateCommentEndpoint extends YTNode implements IEndpoint<CreateCommentRequest> {
  static type = 'CreateCommentEndpoint';

  #API_PATH = 'comment/create_comment';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): CreateCommentRequest {
    const request: CreateCommentRequest = {};

    if (this.#data.createCommentParams)
      request.createCommentParams = this.#data.createCommentParams;

    if (this.#data.commentText)
      request.commentText = this.#data.commentText;

    if (this.#data.attachedVideoId)
      request.videoAttachment = { videoId: this.#data.attachedVideoId };
    else if (this.#data.pollOptions)
      request.pollAttachment = { choices: this.#data.pollOptions };
    else if (this.#data.imageBlobId)
      request.imageAttachment = { encryptedBlobId: this.#data.imageBlobId };
    else if (this.#data.sharedPostId)
      request.sharedPostAttachment = { postId: this.#data.sharedPostId };

    if (this.#data.accessRestrictions && typeof this.#data.accessRestrictions === 'number') {
      const restriction = this.#data.accessRestrictions === 1 ? 'RESTRICTION_TYPE_EVERYONE' : 'RESTRICTION_TYPE_SPONSORS_ONLY';
      request.accessRestrictions = { restriction };
    }

    if (this.#data.botguardResponse)
      request.botguardResponse = this.#data.botguardResponse;

    return request;
  }
}