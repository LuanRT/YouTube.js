const NToken = require("../../deciphers/NToken");
const Signature = require("../../deciphers/Signature");

class Format {
    constructor(item) {
        this.itag = item.itag;
        this.mime_type = item.mimeType;
        this.bitrate = item.bitrate;
        this.width = item.width;
        this.height = item.height;
        this.last_modified = new Date(Math.floor(parseInt(item.lastModified) / 1000));
        this.content_length = parseInt(item.contentLength);
        this.quality = item.quality;
        this.fps = item.fps;
        this.quality_label = item.qualityLabel;
        this.projection_type = item.projectionType;
        this.average_bitrate = item.averageBitrate;
        this.audio_bitrate = item.audioBitrate;
        this.audio_quality = item.audioQuality;
        this.approx_duration_ms = parseInt(item.approxDurationMs);
        this.audio_sample_rate = parseInt(item.audioSampleRate);
        this.audio_channels = item.audioChannels;
        this.signature_cipher = item.signatureCipher;
        this.cipher = item.cipher;
        this._url = item.url;
        this.init_range = item.initRange && {
            start: parseInt(item.initRange.start),
            end: parseInt(item.initRange.end)
        };
        this.index_range = item.indexRange && {
            start: parseInt(item.indexRange.start),
            end: parseInt(item.indexRange.end)
        };
    }

    get has_audio() {
        return !!this.audio_bitrate || !!this.audio_quality;
    }

    get has_video() {
        return !!this.quality_label;
    }

    getDecipheredUrl(session) {
        let url = this._url || this.signature_cipher || this.cipher;
        if (this.signature_cipher || this.cipher) {
            url = new Signature(url, session.getPlayer()).decipher();
        }
        const url_components = new URL(url);
        url_components.searchParams.set('cver', session.context.client.clientVersion);
        url_components.searchParams.set('ratebypass', 'yes');

        if (url_components.searchParams.get('n')) {
            url_components.searchParams.set('n', new NToken(session.getPlayer().ntoken_sc, url_components.searchParams.get('n')).transform());
        }

        return url_components.toString();
    }
}

module.exports = Format;
