import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';

import ClipCreation from './ClipCreation.js';

import { Parser } from '../index.js';

import type { RawNode } from '../types/index.js';

export default class ClipSection extends YTNode {
  static type = 'ClipSection';

  contents: ObservedArray<ClipCreation> | null;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data.contents, true, [ ClipCreation ]);
  }
}
