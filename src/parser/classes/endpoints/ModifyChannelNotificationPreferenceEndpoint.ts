import { YTNode } from '../../helpers.js';
import type { IEndpoint, ModifyChannelNotificationPreferenceRequest, RawNode } from '../../index.js';

const API_PATH = 'notification/modify_channel_preference';

export default class ModifyChannelNotificationPreferenceEndpoint extends YTNode implements IEndpoint<ModifyChannelNotificationPreferenceRequest> {
  static type = 'ModifyChannelNotificationPreferenceEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): ModifyChannelNotificationPreferenceRequest {
    const request: ModifyChannelNotificationPreferenceRequest = {};

    if (this.#data.params)
      request.params = this.#data.params;

    if (this.#data.secondaryParams)
      request.secondaryParams = this.#data.secondaryParams;

    return request;
  }
}