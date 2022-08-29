import Player from '../../../core/Player';

class Format {
  itag: string;
  mime_type: string;
  bitrate;
  average_bitrate;
  width;
  height;

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
  fps: string | undefined;
  url: string;
  cipher: string | undefined;
  signature_cipher: string | undefined;
  audio_quality: string | undefined;
  approx_duration_ms: number;
  audio_sample_rate: number;
  audio_channels: string;
  loudness_db: string;
  has_audio: boolean;
  has_video: boolean;

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
  }

  /**
   * Decipher the streaming url of the format.
   * @returns Deciphered URL.
   */
  decipher(player: Player): string {
    return player.decipher(this.url, this.signature_cipher, this.cipher);
  }
}

export default Format;