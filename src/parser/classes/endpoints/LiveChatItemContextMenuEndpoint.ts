import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, LiveChatItemContextMenuRequest } from '../../index.js';

const API_PATH = 'live_chat/get_item_context_menu';

export default class LiveChatItemContextMenuEndpoint extends YTNode implements IEndpoint<LiveChatItemContextMenuRequest> {
  static type = 'LiveChatItemContextMenuEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): LiveChatItemContextMenuRequest {
    const request: LiveChatItemContextMenuRequest = {};

    if (this.#data.params)
      request.params = this.#data.params;

    return request;
  }
}