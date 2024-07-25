import type Player from '../../../core/Player.ts';
import { InnertubeError } from '../../../utils/Utils.ts';
import type { RawNode } from '../../index.ts';

export default class Format {
  #this_response_nsig_cache?: Map<string, string>;

  itag: number;
  url?: string;
  width?: number;
  height?: number;
  last_modified: Date;
  content_length?: number;
  quality?: string;
  xtags?: string;
  drm_families?: string[];
  fps?: number;
  quality_label?: string;
  projection_type?: 'RECTANGULAR' | 'EQUIRECTANGULAR' | 'EQUIRECTANGULAR_THREED_TOP_BOTTOM' | 'MESH';
  average_bitrate?: number;
  bitrate: number;
  spatial_audio_type?: 'AMBISONICS_5_1' | 'AMBISONICS_QUAD' | 'FOA_WITH_NON_DIEGETIC';
  target_duration_dec?: number;
  fair_play_key_uri?: string;
  stereo_layout?: 'LEFT_RIGHT' | 'TOP_BOTTOM';
  max_dvr_duration_sec?: number;
  high_replication?: boolean;
  audio_quality?: string;
  approx_duration_ms: number;
  audio_sample_rate?: number;
  audio_channels?: number;
  loudness_db?: number;
  signature_cipher?: string;
  is_drc?: boolean;
  drm_track_type?: string;
  distinct_params?: string;
  track_absolute_loudness_lkfs?: number;
  mime_type: string;
  is_type_otf: boolean;
  init_range?: {
    start: number;
    end: number;
  };
  index_range?: {
    start: number;
    end: number;
  };
  cipher?: string;
  audio_track?: {
    audio_is_default: boolean;
    display_name: string;
    id: string;
  };
  has_audio: boolean;
  has_video: boolean;
  has_text: boolean;
  language?: string | null;
  is_dubbed?: boolean;
  is_descriptive?: boolean;
  is_secondary?: boolean;
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

    if (Reflect.has(data, 'width') && Reflect.has(data, 'height')) {
      this.width = parseInt(data.width);
      this.height = parseInt(data.height);
    }

    if (Reflect.has(data, 'projectionType'))
      this.projection_type = data.projectionType;

    if (Reflect.has(data, 'stereoLayout'))
      this.stereo_layout = data.stereoLayout?.replace('STEREO_LAYOUT_', '');

    if (Reflect.has(data, 'initRange'))
      this.init_range = {
        start: parseInt(data.initRange.start),
        end: parseInt(data.initRange.end)
      };

    if (Reflect.has(data, 'indexRange'))
      this.index_range = {
        start: parseInt(data.indexRange.start),
        end: parseInt(data.indexRange.end)
      };

    this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1000));

    if (Reflect.has(data, 'contentLength'))
      this.content_length = parseInt(data.contentLength);

    if (Reflect.has(data, 'quality'))
      this.quality = data.quality;

    if (Reflect.has(data, 'qualityLabel'))
      this.quality_label = data.qualityLabel;

    if (Reflect.has(data, 'fps'))
      this.fps = data.fps;

    if (Reflect.has(data, 'url'))
      this.url = data.url;

    if (Reflect.has(data, 'cipher'))
      this.cipher = data.cipher;

    if (Reflect.has(data, 'signatureCipher'))
      this.signature_cipher = data.signatureCipher;

    if (Reflect.has(data, 'audioQuality'))
      this.audio_quality = data.audioQuality;

    this.approx_duration_ms = parseInt(data.approxDurationMs);

    if (Reflect.has(data, 'audioSampleRate'))
      this.audio_sample_rate = parseInt(data.audioSampleRate);

    if (Reflect.has(data, 'audioChannels'))
      this.audio_channels = data.audioChannels;

    if (Reflect.has(data, 'loudnessDb'))
      this.loudness_db = data.loudnessDb;

    if (Reflect.has(data, 'spatialAudioType'))
      this.spatial_audio_type = data.spatialAudioType?.replace('SPATIAL_AUDIO_TYPE_', '');

    if (Reflect.has(data, 'maxDvrDurationSec'))
      this.max_dvr_duration_sec = data.maxDvrDurationSec;

    if (Reflect.has(data, 'targetDurationSec'))
      this.target_duration_dec = data.targetDurationSec;

    this.has_audio = !!data.audioBitrate || !!data.audioQuality;
    this.has_video = !!data.qualityLabel;
    this.has_text = !!data.captionTrack;

    if (Reflect.has(data, 'xtags'))
      this.xtags = data.xtags;

    if (Reflect.has(data, 'fairPlayKeyUri'))
      this.fair_play_key_uri = data.fairPlayKeyUri;

    if (Reflect.has(data, 'drmFamilies'))
      this.drm_families = data.drmFamilies;

    if (Reflect.has(data, 'drmTrackType'))
      this.drm_track_type = data.drmTrackType;

    if (Reflect.has(data, 'distinctParams'))
      this.distinct_params = data.distinctParams;

    if (Reflect.has(data, 'trackAbsoluteLoudnessLkfs'))
      this.track_absolute_loudness_lkfs = data.trackAbsoluteLoudnessLkfs;

    if (Reflect.has(data, 'highReplication'))
      this.high_replication = data.highReplication;

    if (Reflect.has(data, 'colorInfo'))
      this.color_info = {
        primaries: data.colorInfo.primaries?.replace('COLOR_PRIMARIES_', ''),
        transfer_characteristics: data.colorInfo.transferCharacteristics?.replace('COLOR_TRANSFER_CHARACTERISTICS_', ''),
        matrix_coefficients: data.colorInfo.matrixCoefficients?.replace('COLOR_MATRIX_COEFFICIENTS_', '')
      };

    if (Reflect.has(data, 'audioTrack'))
      this.audio_track = {
        audio_is_default: data.audioTrack.audioIsDefault,
        display_name: data.audioTrack.displayName,
        id: data.audioTrack.id
      };

    if (Reflect.has(data, 'captionTrack'))
      this.caption_track = {
        display_name: data.captionTrack.displayName,
        vss_id: data.captionTrack.vssId,
        language_code: data.captionTrack.languageCode,
        kind: data.captionTrack.kind,
        id: data.captionTrack.id
      };

    if (this.has_audio || this.has_text) {
      const args = new URLSearchParams(this.cipher || this.signature_cipher);
      const url_components = new URLSearchParams(args.get('url') || this.url);

      const xtags = url_components.get('xtags')?.split(':');

      this.language = xtags?.find((x: string) => x.startsWith('lang='))?.split('=')[1] || null;

      if (this.has_audio) {
        this.is_drc = !!data.isDrc || !!xtags?.includes('drc=1');

        const audio_content = xtags?.find((x) => x.startsWith('acont='))?.split('=')[1];
        this.is_dubbed = audio_content === 'dubbed';
        this.is_descriptive = audio_content === 'descriptive';
        this.is_secondary = audio_content === 'secondary';
        this.is_original = audio_content === 'original' || (!this.is_dubbed && !this.is_descriptive && !this.is_secondary && !this.is_drc);
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