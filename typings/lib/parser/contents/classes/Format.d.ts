export = Format;
declare class Format {
    constructor(data: any);
    itag: any;
    mime_type: any;
    bitrate: any;
    average_bitrate: any;
    width: any;
    height: any;
    init_range: {
        start: number;
        end: number;
    };
    index_range: {
        start: number;
        end: number;
    };
    last_modified: Date;
    content_length: number;
    quality: any;
    quality_label: any;
    fps: any;
    url: any;
    cipher: any;
    signature_cipher: any;
    audio_quality: any;
    approx_duration_ms: number;
    audio_sample_rate: number;
    audio_channels: any;
    loudness_db: any;
    has_audio: boolean;
    has_video: boolean;
    decipher(player: any): string;
}
