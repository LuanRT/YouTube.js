import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';

export type TranslationStatus =
  'DELETING' | 'DRAFT' | 'FAILED' |
  'PROCESSING' | 'PUBLISHED' | 'PUBLISHING' |
  'QC_FAILED' | 'REVIEW' | 'SUBMITTED' |
  'SUCCESS' | 'SYNCING_DRAFT' | 'UNKNOWN';

export type TranslationSource = 'CREATOR' | 'COMMUNITY' | 'AUTOMATIC';

export interface TTSTrackId {
  kind: string;
  lang: string;
  name: string;
}

export interface Segment {
  start_time_ms: string;
  duration_ms: string;
  text: string;
}

export interface CaptionSegments {
  segments: Segment[];
}

export interface CaptionsTranslation {
  status?: TranslationStatus;
  source?: TranslationSource;
  time_updated_seconds?: number;
  tts_track_id?: TTSTrackId;
  caption_segments?: CaptionSegments;
  content_update_time?: number;
  is_complex_track?: boolean;
}

export default class Translation extends YTNode {
  static type = 'Translation';

  display_name?: string;
  language_code?: string;
  captions_translations?: CaptionsTranslation[];

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'displayName')) {
      this.display_name = data.displayName;
    }

    if (Reflect.has(data, 'languageCode')) {
      this.language_code = data.languageCode;
    }

    if (Reflect.has(data, 'captionsTranslations')) {
      this.captions_translations = data.captionsTranslations.map((captions_translation: RawNode) => {
        const parsed_captions_translation: CaptionsTranslation = {};

        if (Reflect.has(captions_translation, 'status')) {
          parsed_captions_translation.status = captions_translation.status.replace('TRANSLATION_STATUS_', '');
        }

        if (Reflect.has(captions_translation, 'source')) {
          parsed_captions_translation.source = captions_translation.source.replace('TRANSLATION_SOURCE_', '');
        }

        if (Reflect.has(captions_translation, 'contentUpdateTime')) {
          parsed_captions_translation.content_update_time = Number(captions_translation.contentUpdateTime);
        }

        if (Reflect.has(captions_translation, 'timeUpdatedSeconds')) {
          parsed_captions_translation.time_updated_seconds = Number(captions_translation.timeUpdatedSeconds);
        }

        if (Reflect.has(captions_translation, 'ttsTrackId')) {
          parsed_captions_translation.tts_track_id = {
            kind: captions_translation.ttsTrackId.kind,
            lang: captions_translation.ttsTrackId.lang,
            name: captions_translation.ttsTrackId.name
          };
        }

        if (Reflect.has(captions_translation, 'captionSegments') && Array.isArray(captions_translation.captionSegments?.segments)) {
          parsed_captions_translation.caption_segments = {
            segments:
              captions_translation.captionSegments.segments.map((segment: RawNode) => ({
                start_time_ms: segment.startTimeMs,
                duration_ms: segment.durationMs,
                text: segment.text
              }))
          };
        }

        if (Reflect.has(captions_translation, 'isComplexTrack')) {
          parsed_captions_translation.is_complex_track = captions_translation.isComplexTrack;
        }

        return parsed_captions_translation;
      });
    }
  }
}
