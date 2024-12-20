import { YTNode } from '../../helpers.js';
import type { IEndpoint, RawNode, SearchRequest } from '../../index.js';

const API_PATH = 'search';

export default class SearchEndpoint extends YTNode implements IEndpoint<SearchRequest> {
  static type = 'SearchEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): SearchRequest {
    const request: SearchRequest = {};
    
    if (this.#data.query)
      request.query = this.#data.query;

    if (this.#data.params)
      request.params = this.#data.params;

    if (this.#data.webSearchboxStatsUrl)
      request.webSearchboxStatsUrl = this.#data.webSearchboxStatsUrl;

    if (this.#data.suggestStats)
      request.suggestStats = this.#data.suggestStats;
  
    return request;
  }
}