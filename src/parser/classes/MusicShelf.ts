import Parser from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';

import { YTNode } from '../helpers.js';
import Button from './Button.js';

class MusicShelf extends YTNode {
  static type = 'MusicShelf';

  title: Text;
  contents;
  endpoint: NavigationEndpoint | null;
  continuation: string | null;
  bottom_text: Text | null;
  bottom_button?: Button | null;
  subheaders?: Array<any>;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.contents = Parser.parseArray<MusicResponsiveListItem>(data.contents, MusicResponsiveListItem);
    this.endpoint = Reflect.has(data, 'bottomEndpoint') ? new NavigationEndpoint(data.bottomEndpoint) : null;
    this.continuation =
      data.continuations?.[0].nextContinuationData?.continuation ||
      data.continuations?.[0].reloadContinuationData?.continuation || null;
    this.bottom_text = Reflect.has(data, 'bottomText') ? new Text(data.bottomText) : null;
    this.bottom_button = Parser.parseItem(data.bottomButton, Button);
    if (data.subheaders) {
      this.subheaders = Parser.parseArray(data.subheaders);
    }
  }
}

export default MusicShelf;