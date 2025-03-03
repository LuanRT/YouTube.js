import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import UniversalWatchCard from './UniversalWatchCard.js';

export default class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  public target_id?: string;
  public contents: ObservedArray<UniversalWatchCard>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ UniversalWatchCard ]);
  }
}