import type { RawNode } from '../../index.js';
import ShareEntityServiceEndpoint from './ShareEntityServiceEndpoint.js';

export default class ShareEntityEndpoint extends ShareEntityServiceEndpoint {
  static type = 'ShareEntityEndpoint';

  constructor(data: RawNode) {
    super(data);
  }
}