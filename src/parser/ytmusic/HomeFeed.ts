import Parser, { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import MusicCarouselShelfBasicHeader from '../classes/MusicCarouselShelfBasicHeader';
import MusicTwoRowItem from '../classes/MusicTwoRowItem';

class HomeFeed {
  #page;
  #actions;
  #continuation;

  sections;

  constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse((response as AxioslikeResponse).data);

    const tab = this.#page.contents.item().key('tabs').parsed().array().get({ selected: true });

    if (!tab)
      throw new InnertubeError('Could not get Home tab.');

    let contents;

    if (tab.key('content').isNull()) {
      this.#continuation = this.#page.continuation_contents?.key('continuation').string();
      contents = this.#page.continuation_contents?.key('contents').array();
    } else {
      this.#continuation = tab.key('content').parsed().item().key('continuation').string();
      contents = tab.key('content').parsed().item().key('contents').parsed().array();
    }

    this.sections = contents?.map((content) => ({
      header: content.header.item() as MusicCarouselShelfBasicHeader,
      contents: content.contents.array() as Array<MusicTwoRowItem>
    }));
  }

  /**
   * Retrieves home feed continuation.
   */
  async getContinuation(): Promise<HomeFeed> {
    if (!this.#continuation)
      throw new InnertubeError('Continuation not found.');

    const response = await this.#actions.browse(this.#continuation, { is_ctoken: true, client: 'YTMUSIC' });
    return new HomeFeed(response, this.#actions);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page() {
    return this.#page;
  }
}

export default HomeFeed;