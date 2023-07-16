import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { Text } from '../misc.js';
import MacroMarkersInfoItem from './MacroMarkersInfoItem.js';
import MacroMarkersListItem from './MacroMarkersListItem.js';

export default class MacroMarkersList extends YTNode {
  static type = 'MacroMarkersList';

  contents: ObservedArray<MacroMarkersInfoItem | MacroMarkersListItem>;
  sync_button_label: Text;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ MacroMarkersInfoItem, MacroMarkersListItem ]);
    this.sync_button_label = new Text(data.syncButtonLabel);
  }
}