import { YTNode } from '../../helpers.js';
import type { GetKidsBlocklistPickerRequest, IEndpoint, RawNode } from '../../index.js';

const API_PATH = 'kids/get_kids_blocklist_picker';

export default class GetKidsBlocklistPickerCommand extends YTNode implements IEndpoint<GetKidsBlocklistPickerRequest> {
  static type = 'GetKidsBlocklistPickerCommand';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): GetKidsBlocklistPickerRequest {
    const request: GetKidsBlocklistPickerRequest = {};

    if (this.#data.blockedForKidsContent)
      request.blockedForKidsContent = this.#data.blockedForKidsContent;

    return request;
  }
}