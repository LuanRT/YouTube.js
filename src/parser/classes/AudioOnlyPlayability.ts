import { YTNode } from '../helpers.js';

class AudioOnlyPlayability extends YTNode {
  static type = 'AudioOnlyPlayability';

  audio_only_availability: string;

  constructor (data: any) {
    super();
    this.audio_only_availability = data.audioOnlyAvailability;
  }
}

export default AudioOnlyPlayability;