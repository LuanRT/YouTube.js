import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import MacroMarkersInfoItem from './MacroMarkersInfoItem.ts';
import MacroMarkersListItem from './MacroMarkersListItem.ts';

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