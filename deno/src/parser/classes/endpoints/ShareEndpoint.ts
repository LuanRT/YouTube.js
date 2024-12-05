import type { RawNode } from '../../index.ts';
import ShareEntityServiceEndpoint from './ShareEntityServiceEndpoint.ts';

export default class ShareEndpoint extends ShareEntityServiceEndpoint {
  static type = 'ShareEndpoint';

  constructor(data: RawNode) {
    super(data);
  }
}