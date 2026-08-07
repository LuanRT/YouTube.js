import { YTNode } from '../../helpers.js';
import type { ShowEngagementPanelRequest, IEndpoint, RawNode } from '../../index.js';

const API_PATH = 'get_panel';

export default class ShowEngagementPanelEndpoint extends YTNode implements IEndpoint<ShowEngagementPanelRequest>{
  static type = 'ShowEngagementPanelEndpoint';

  #data: RawNode;

  public panel_identifier: string;
  public source_panel_identifier?: string;

  constructor(data: RawNode) {
    super();
    this.#data = data;
    this.panel_identifier = data.panelIdentifier;
    this.source_panel_identifier = data.sourcePanelIdentifier;
  }

  getApiPath(): string {
    return API_PATH;
  }

  buildRequest(): ShowEngagementPanelRequest {
    const request: ShowEngagementPanelRequest = {};

    if (this.#data.panelIdentifier) 
      request.panelId = this.#data.panelIdentifier;

    if (this.#data.sourcePanelIdentifier)
      request.params = this.#data.sourcePanelIdentifier;

    return request;
  }
}