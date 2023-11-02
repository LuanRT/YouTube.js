import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import Factoid from './Factoid.js';

export default class UploadTimeFactoid extends YTNode {
  static type = 'UploadTimeFactoid';

  factoid: Factoid | null;

  constructor(data: RawNode) {
    super();
    this.factoid = Parser.parseItem(data.factoid, Factoid);
  }
}