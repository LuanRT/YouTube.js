import type { RawNode } from '../index.ts';
import Playlist from './Playlist.ts';

export default class Mix extends Playlist {
  static type = 'Mix';

  constructor(data: RawNode) {
    super(data);
  }
}