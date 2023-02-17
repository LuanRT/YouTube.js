import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class PlayerCaptionsTracklist extends YTNode {
  static type = 'PlayerCaptionsTracklist';

  caption_tracks: {
    base_url: string;
    name: Text;
    vss_id: string;
    language_code: string;
    kind: string;
    is_translatable: boolean;
  }[];

  audio_tracks: {
    audio_track_id: string;
    captions_initial_state: string;
    default_caption_track_index: number;
    has_default_track: boolean;
    visibility: string;
    caption_track_indices: number;
  }[];

  default_audio_track_index: number;

  translation_languages: {
    language_code: string;
    language_name: Text;
  }[];

  constructor(data: any) {
    super();
    this.caption_tracks = data.captionTracks.map((ct: any) => ({
      base_url: ct.baseUrl,
      name: new Text(ct.name),
      vss_id: ct.vssId,
      language_code: ct.languageCode,
      kind: ct.kind,
      is_translatable: ct.isTranslatable
    }));

    this.audio_tracks = data.audioTracks.map((at: any) => ({
      audio_track_id: at.audioTrackId,
      captions_initial_state: at.captionsInitialState,
      default_caption_track_index: at.defaultCaptionTrackIndex,
      has_default_track: at.hasDefaultTrack,
      visibility: at.visibility,
      caption_track_indices: at.captionTrackIndices
    }));

    this.default_audio_track_index = data.defaultAudioTrackIndex;

    this.translation_languages = data.translationLanguages.map((tl: any) => ({
      language_code: tl.languageCode,
      language_name: new Text(tl.languageName)
    }));
  }
}

export default PlayerCaptionsTracklist;