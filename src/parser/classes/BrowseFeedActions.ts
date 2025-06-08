import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import SubFeedSelector from './SubFeedSelector.js';
import EomSettingsDisclaimer from './EomSettingsDisclaimer.js';
import ToggleButton from './ToggleButton.js';
import CompactLink from './CompactLink.js';
import SearchBox from './SearchBox.js';
import Button from './Button.js';

export default class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';

  public contents: ObservedArray<SubFeedSelector | EomSettingsDisclaimer | ToggleButton | CompactLink | SearchBox | Button>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ SubFeedSelector, EomSettingsDisclaimer, ToggleButton, CompactLink, SearchBox, Button ]);
  }
}