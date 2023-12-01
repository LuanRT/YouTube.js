import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import Factoid from './Factoid.ts';

export default class UploadTimeFactoid extends YTNode {
  static type = 'UploadTimeFactoid';

  factoid: Factoid | null;

  constructor(data: RawNode) {
    super();
    this.factoid = Parser.parseItem(data.factoid, Factoid);
  }
}