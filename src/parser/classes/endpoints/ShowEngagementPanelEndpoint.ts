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

    const panelId = this.#data.panelIdentifier || this.#data.identifier?.tag;
    if (panelId)
      request.panelId = panelId;

    if (this.#data.globalConfiguration?.params)
      request.params = this.#data.globalConfiguration?.params;

    return request;
  }
}