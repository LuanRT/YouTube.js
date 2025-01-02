import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import TwoColumn from './TwoColumn.js';
import Grid from './Grid.js';
import SectionList from './SectionList.js';

export default class TvSurfaceContent extends YTNode {
  static type = 'TvSurfaceContent';

  content: TwoColumn | Grid | SectionList | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, [ TwoColumn, Grid, SectionList ]);
  }
}