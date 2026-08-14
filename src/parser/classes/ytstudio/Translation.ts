import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import { parseAll } from '../../parser.js';

export type TranslationStatus =
  'TRANSLATION_STATUS_DELETING' | 'TRANSLATION_STATUS_DRAFT' | 'TRANSLATION_STATUS_FAILED' |
  'TRANSLATION_STATUS_PROCESSING' | 'TRANSLATION_STATUS_PUBLISHED' | 'TRANSLATION_STATUS_PUBLISHING' |
  'TRANSLATION_STATUS_QC_FAILED' | 'TRANSLATION_STATUS_REVIEW' | 'TRANSLATION_STATUS_SUBMITTED' |
  'TRANSLATION_STATUS_SUCCESS' | 'TRANSLATION_STATUS_SYNCING_DRAFT' | 'TRANSLATION_STATUS_UNKNOWN';

export type TranslationSource =
  'TRANSLATION_SOURCE_CREATOR' | 'TRANSLATION_SOURCE_COMMUNITY' | 'TRANSLATION_SOURCE_AUTOMATIC';

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
  time_updated_seconds?: string;
  tts_track_id?: TTSTrackId;
  caption_segments?: CaptionSegments;
  content_update_time?: string;
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
      this.captions_translations = parseAll<CaptionsTranslation>(data.captionsTranslations);
    }
  }
}
