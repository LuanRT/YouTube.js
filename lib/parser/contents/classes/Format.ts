'use strict';

class Format {
  constructor(data) {
    this.itag = data.itag;
    this.mime_type = data.mimeType;
    this.bitrate = data.bitrate;
    this.average_bitrate = data.averageBitrate;
    this.width = data.width || null;
    this.height = data.height || null;
    this.init_range = data.initRange && {
      start: parseInt(data.initRange.start),
      end: parseInt(data.initRange.end)
    };
    this.index_range = data.indexRange && {
      start: parseInt(data.indexRange.start),
      end: parseInt(data.indexRange.end)
    };
    this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1000));
    this.content_length = parseInt(data.contentLength);
    this.quality = data.quality;
    this.quality_label = data.qualityLabel || null;
    this.fps = data.fps || null;
    this.url = data.url || null;
    this.cipher = data.cipher || null;
    this.signature_cipher = data.signatureCipher || null;
    this.audio_quality = data.audioQuality;
    this.approx_duration_ms = parseInt(data.approxDurationMs);
    this.audio_sample_rate = parseInt(data.audioSampleRate);
    this.audio_channels = data.audioChannels;
    this.loudness_db = data.loudnessDb;
    this.has_audio = !!data.audioBitrate || !!data.audioQuality;
    this.has_video = !!data.qualityLabel;
  }

  /**
   * Decipher the streaming url of the format.
   *
   * @param {import('../../../core/Player')} player
   * @returns {string} Deciphered URL for downloading
   */
  decipher(player) {
    return player.decipher(this.url, this.signature_cipher, this.cipher);
  }
}

export default Format;