import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, LiveChatItemContextMenuRequest } from '../../index.js';

export default class LiveChatItemContextMenuEndpoint extends YTNode implements IEndpoint<LiveChatItemContextMenuRequest> {
  static type = 'LiveChatItemContextMenuEndpoint';

  #API_PATH = 'live_chat/get_item_context_menu';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): LiveChatItemContextMenuRequest {
    const request: LiveChatItemContextMenuRequest = {};

    if (this.#data.params)
      request.params = this.#data.params;

    return request;
  }
}