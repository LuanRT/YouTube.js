import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';

import ClipCreation from './ClipCreation.ts';

import { Parser } from '../index.ts';

import type { RawNode } from '../types/index.ts';

export default class ClipSection extends YTNode {
  static type = 'ClipSection';

  contents: ObservedArray<ClipCreation> | null;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data.contents, true, [ ClipCreation ]);
  }
}
