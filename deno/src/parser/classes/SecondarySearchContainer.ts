import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import UniversalWatchCard from './UniversalWatchCard.ts';

export default class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  public target_id?: string;
  public contents: ObservedArray<UniversalWatchCard>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ UniversalWatchCard ]);
  }
}