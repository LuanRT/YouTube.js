import type { RawNode } from '../index.ts';
import Playlist from './Playlist.ts';

export default class CompactMix extends Playlist {
  static type = 'CompactMix';

  constructor(data: RawNode) {
    super(data);
  }
}