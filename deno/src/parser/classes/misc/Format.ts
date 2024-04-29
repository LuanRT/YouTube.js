import type Player from '../../../core/Player.ts';
import { InnertubeError } from '../../../utils/Utils.ts';
import type { RawNode } from '../../index.ts';

export default class Format {
  #this_response_nsig_cache?: Map<string, string>;

  itag: number;
  mime_type: string;
  is_type_otf: boolean;
  bitrate: number;
  average_bitrate?: number;
  width: number;
  height: number;
  projection_type?: 'RECTANGULAR' | 'EQUIRECTANGULAR' | 'EQUIRECTANGULAR_THREED_TOP_BOTTOM' | 'MESH';
  stereo_layout?: 'LEFT_RIGHT' | 'TOP_BOTTOM';

  init_range?: {
    start: number;
    end: number;
  };

  index_range?: {
    start: number;
    end: number;
  };

  last_modified: Date;
  content_length?: number;
  quality?: string;
  quality_label?: string;
  fps?: number;
  url?: string;
  cipher?: string;
  signature_cipher?: string;
  audio_quality?: string;
  audio_track?: {
    audio_is_default: boolean;
    display_name: string;
    id: string;
  };
  approx_duration_ms: number;
  audio_sample_rate?: number;
  audio_channels?: number;
  loudness_db?: number;
  spatial_audio_type?: 'AMBISONICS_5_1' | 'AMBISONICS_QUAD' | 'FOA_WITH_NON_DIEGETIC';
  max_dvr_duration_sec?: number;
  target_duration_dec?: number;
  has_audio: boolean;
  has_video: boolean;
  has_text: boolean;
  language?: string | null;
  is_dubbed?: boolean;
  is_descriptive?: boolean;
  is_original?: boolean;

  color_info?: {
    primaries?: string;
    transfer_characteristics?: string;
    matrix_coefficients?: string;
  };

  caption_track?: {
    display_name: string;
    vss_id: string;
    language_code: string;
    kind?: 'asr' | 'frc';
    id: string;
  };

  constructor(data: RawNode, this_response_nsig_cache?: Map<string, string>) {
    if (this_response_nsig_cache) {
      this.#this_response_nsig_cache = this_response_nsig_cache;
    }

    this.itag = data.itag;
    this.mime_type = data.mimeType;
    this.is_type_otf = data.type === 'FORMAT_STREAM_TYPE_OTF';
    this.bitrate = data.bitrate;
    this.average_bitrate = data.averageBitrate;
    this.width = data.width;
    this.height = data.height;
    this.projection_type = data.projectionType;
    this.stereo_layout = data.stereoLayout?.replace('STEREO_LAYOUT_', '');

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
    this.quality_label = data.qualityLabel;
    this.fps = data.fps;
    this.url = data.url;
    this.cipher = data.cipher;
    this.signature_cipher = data.signatureCipher;
    this.audio_quality = data.audioQuality;
    this.approx_duration_ms = parseInt(data.approxDurationMs);
    this.audio_sample_rate = parseInt(data.audioSampleRate);
    this.audio_channels = data.audioChannels;
    this.loudness_db = data.loudnessDb;
    this.spatial_audio_type = data.spatialAudioType?.replace('SPATIAL_AUDIO_TYPE_', '');
    this.max_dvr_duration_sec = data.maxDvrDurationSec;
    this.target_duration_dec = data.targetDurationSec;
    this.has_audio = !!data.audioBitrate || !!data.audioQuality;
    this.has_video = !!data.qualityLabel;
    this.has_text = !!data.captionTrack;

    this.color_info = data.colorInfo ? {
      primaries: data.colorInfo.primaries?.replace('COLOR_PRIMARIES_', ''),
      transfer_characteristics: data.colorInfo.transferCharacteristics?.replace('COLOR_TRANSFER_CHARACTERISTICS_', ''),
      matrix_coefficients: data.colorInfo.matrixCoefficients?.replace('COLOR_MATRIX_COEFFICIENTS_', '')
    } : undefined;

    if (Reflect.has(data, 'audioTrack')) {
      this.audio_track = {
        audio_is_default: data.audioTrack.audioIsDefault,
        display_name: data.audioTrack.displayName,
        id: data.audioTrack.id
      };
    }

    if (Reflect.has(data, 'captionTrack')) {
      this.caption_track = {
        display_name: data.captionTrack.displayName,
        vss_id: data.captionTrack.vssId,
        language_code: data.captionTrack.languageCode,
        kind: data.captionTrack.kind,
        id: data.captionTrack.id
      };
    }

    if (this.has_audio || this.has_text) {
      const args = new URLSearchParams(this.cipher || this.signature_cipher);
      const url_components = new URLSearchParams(args.get('url') || this.url);

      const xtags = url_components.get('xtags')?.split(':');

      this.language = xtags?.find((x: string) => x.startsWith('lang='))?.split('=')[1] || null;

      if (this.has_audio) {
        const audio_content = xtags?.find((x) => x.startsWith('acont='))?.split('=')[1];
        this.is_dubbed = audio_content === 'dubbed';
        this.is_descriptive = audio_content === 'descriptive';
        this.is_original = audio_content === 'original' || (!this.is_dubbed && !this.is_descriptive);
      }

      // Some text tracks don't have xtags while others do
      if (this.has_text && !this.language && this.caption_track) {
        this.language = this.caption_track.language_code;
      }
    }
  }

  /**
   * Deciphers the streaming url of the format.
   * @returns Deciphered URL.
   */
  decipher(player: Player | undefined): string {
    if (!player) throw new InnertubeError('Cannot decipher format, this session appears to have no valid player.');
    return player.decipher(this.url, this.signature_cipher, this.cipher, this.#this_response_nsig_cache);
  }
}