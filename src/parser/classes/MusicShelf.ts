import Parser from '../index';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import MusicResponsiveListItem from './MusicResponsiveListItem';

import { YTNode } from '../helpers';
import Button from './Button';

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