import Player from '../../../core/Player.js';
import { InnertubeError } from '../../../utils/Utils.js';

class Format {
  itag: number;
  mime_type: string;
  bitrate: number;
  average_bitrate: number;
  width: number;
  height: number;

  init_range: {
    start: number;
    end: number;
  } | undefined;

  index_range: {
    start: number;
    end: number;
  } | undefined;

  last_modified: Date;
  content_length: number;
  quality: string;
  quality_label: string | undefined;
  fps: number | undefined;
  url: string;
  cipher: string | undefined;
  signature_cipher: string | undefined;
  audio_quality: string | undefined;
  audio_track?: {
    audio_is_default: boolean;
    display_name: string;
    id: string;
  };
  approx_duration_ms: number;
  audio_sample_rate: number;
  audio_channels: number;
  loudness_db: number;
  has_audio: boolean;
  has_video: boolean;
  language?: string | null;
  is_dubbed?: boolean;
  is_descriptive?: boolean;
  is_original?: boolean;

  constructor(data: any) {
    this.itag = data.itag;
    this.mime_type = data.mimeType;
    this.bitrate = data.bitrate;
    this.average_bitrate = data.averageBitrate;
    this.width = data.width || undefined;
    this.height = data.height || undefined;

    this.init_range = data.initRange ? {
      start: parseInt(data.initRange.start),
      end: parseInt(data.initRange.end)
    } : undefined;

    this.index_range = data.indexRange ? {
      start: parseInt(data.indexRange.start),
      end: parseInt(data.indexRange.end)
    } : undefined;

    this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1000));
    this.content_length = parseInt(data.contentLength);
    this.quality = data.quality;
    this.quality_label = data.qualityLabel || undefined;
    this.fps = data.fps || undefined;
    this.url = data.url || undefined;
    this.cipher = data.cipher || undefined;
    this.signature_cipher = data.signatureCipher || undefined;
    this.audio_quality = data.audioQuality || undefined;
    this.approx_duration_ms = parseInt(data.approxDurationMs);
    this.audio_sample_rate = parseInt(data.audioSampleRate);
    this.audio_channels = data.audioChannels;
    this.loudness_db = data.loudnessDb;
    this.has_audio = !!data.audioBitrate || !!data.audioQuality;
    this.has_video = !!data.qualityLabel;

    if (this.has_audio) {
      const args = new URLSearchParams(this.cipher || this.signature_cipher);
      const url_components = new URLSearchParams(args.get('url') || this.url);

      this.language = url_components.get('xtags')?.split(':').find((x: string) => x.startsWith('lang='))?.split('=').at(1) || null;
      this.is_dubbed = url_components.get('xtags')?.split(':').find((x: string) => x.startsWith('acont='))?.split('=').at(1) === 'dubbed';
      this.is_descriptive = url_components.get('xtags')?.split(':').find((x: string) => x.startsWith('acont='))?.split('=').at(1) === 'descriptive';
      this.is_original = url_components.get('xtags')?.split(':').find((x: string) => x.startsWith('acont='))?.split('=').at(1) === 'original' || !this.is_dubbed;

      if (data.audioTrack) {
        this.audio_track = {
          audio_is_default: data.audioTrack.audioIsDefault,
          display_name: data.audioTrack.displayName,
          id: data.audioTrack.id
        };
      }
    }
  }

  /**
   * Decipher the streaming url of the format.
   * @returns Deciphered URL.
   */
  decipher(player: Player | undefined): string {
    if (!player) throw new InnertubeError('Cannot decipher format, this session appears to have no valid player.');
    return player.decipher(this.url, this.signature_cipher, this.cipher);
  }
}

export default Format;