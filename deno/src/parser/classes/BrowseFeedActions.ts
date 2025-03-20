import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import SubFeedSelector from './SubFeedSelector.ts';
import EomSettingsDisclaimer from './EomSettingsDisclaimer.ts';
import ToggleButton from './ToggleButton.ts';
import CompactLink from './CompactLink.ts';
import SearchBox from './SearchBox.ts';
import Button from './Button.ts';

export default class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';

  public contents: ObservedArray<SubFeedSelector | EomSettingsDisclaimer | ToggleButton | CompactLink | SearchBox | Button>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ SubFeedSelector, EomSettingsDisclaimer, ToggleButton, CompactLink, SearchBox, Button ]);
  }
}