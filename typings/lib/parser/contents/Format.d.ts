export = Format;
declare class Format {
    constructor(item: any);
    itag: any;
    mime_type: any;
    bitrate: any;
    width: any;
    height: any;
    last_modified: Date;
    content_length: number;
    quality: any;
    fps: any;
    quality_label: any;
    projection_type: any;
    average_bitrate: any;
    audio_bitrate: any;
    audio_quality: any;
    approx_duration_ms: number;
    audio_sample_rate: number;
    audio_channels: any;
    signature_cipher: any;
    cipher: any;
    _url: any;
    init_range: {
        start: number;
        end: number;
    };
    index_range: {
        start: number;
        end: number;
    };
    get has_audio(): boolean;
    get has_video(): boolean;
    getDecipheredUrl(session: any): string;
}
