import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import TvSecondaryNavSection from './TvSecondaryNavSection.js';
import Text from './misc/Text.js';

export default class TvSecondaryNav extends YTNode {
  static type = 'TvSecondaryNav';

  sections: ObservedArray<TvSecondaryNavSection> | null;
  title: Text;

  constructor(data: RawNode) {
    super();
    this.sections = Parser.parse(data.sections, true, TvSecondaryNavSection);
    this.title = new Text(data.title);
  }
}