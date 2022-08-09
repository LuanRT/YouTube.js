import Text from './misc/Text';
import { YTNode } from '../helpers';

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
    caption_track_indices: number;
  }[];

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
      caption_track_indices: at.captionTrackIndices
    }));

    this.translation_languages = data.translationLanguages.map((tl: any) => ({
      language_code: tl.languageCode,
      language_name: new Text(tl.languageName)
    }));
  }
}

export default PlayerCaptionsTracklist;