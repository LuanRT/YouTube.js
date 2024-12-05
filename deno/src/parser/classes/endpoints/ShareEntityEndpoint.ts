import type { RawNode } from '../../index.ts';
import ShareEntityServiceEndpoint from './ShareEntityServiceEndpoint.ts';

export default class ShareEntityEndpoint extends ShareEntityServiceEndpoint {
  static type = 'ShareEntityEndpoint';

  constructor(data: RawNode) {
    super(data);
  }
}