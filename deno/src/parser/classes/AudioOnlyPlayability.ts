import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
class AudioOnlyPlayability extends YTNode {
  static type = 'AudioOnlyPlayability';

  audio_only_availability: string;

  constructor (data: RawNode) {
    super();
    this.audio_only_availability = data.audioOnlyAvailability;
  }
}

export default AudioOnlyPlayability;