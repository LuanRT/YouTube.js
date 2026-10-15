import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import TvSurfaceContent from './TvSurfaceContent.js';
import TvSecondaryNav from './TvSecondaryNav.js';

export default class TvBrowse extends YTNode {
  static type = 'TvBrowse';

  content: TvSurfaceContent | TvSecondaryNav | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, [ TvSurfaceContent, TvSecondaryNav ]);
  }
}