import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlayerCaptionsTracklist extends YTNode {
    static [ParserTypeSymbol] = 'PlayerCaptionsTracklist';
    constructor(data) {
        super();
        this.caption_tracks = data.captionTracks.map((ct) => ({
            base_url: ct.baseUrl,
            name: new Text(ct.name),
            vss_id: ct.vssId,
            language_code: ct.languageCode,
            kind: ct.kind,
            is_translatable: ct.isTranslatable
        }));
        this.audio_tracks = data.audioTracks.map((at) => ({
            caption_track_indices: at.captionTrackIndices
        }));
        this.translation_languages = data.translationLanguages.map((tl) => ({
            language_code: tl.languageCode,
            language_name: new Text(tl.languageName)
        }));
    }
}
export default PlayerCaptionsTracklist;
