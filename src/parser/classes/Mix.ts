import type { RawNode } from '../index.js';
import Playlist from './Playlist.js';

export default class Mix extends Playlist {
  static type = 'Mix';

  constructor(data: RawNode) {
    super(data);
  }
}