import { Parser } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';

import type { ApiResponse } from '../../core/index.js';
import type { IShowEngagementPanelResponse } from '../types/index.js';
import type { YTNode } from '../helpers.js';

export default class PlaylistCollaborate {
  readonly #page: IShowEngagementPanelResponse;
  public content?: YTNode;

  constructor(response: ApiResponse) {
    this.#page = Parser.parseResponse<IShowEngagementPanelResponse>(response.data);

    if (!this.#page.content)
      throw new InnertubeError('Page content not found');

    this.content = this.#page.content;
  }

  get page(): IShowEngagementPanelResponse {
    return this.#page;
  }
}