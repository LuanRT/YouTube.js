import type { RawNode } from '../../index.ts';
import AddToPlaylistServiceEndpoint from './AddToPlaylistServiceEndpoint.ts';

export default class AddToPlaylistEndpoint extends AddToPlaylistServiceEndpoint {
  static type = 'AddToPlaylistEndpoint';

  constructor (data: RawNode) {
    super(data);
  }
}