export = ChannelMetadata;
declare class ChannelMetadata {
    static parse(data: any): {
        title: any;
        description: any;
        metadata: {
            url: any;
            rss_urls: any;
            vanity_channel_url: any;
            external_id: any;
            is_family_safe: any;
            keywords: any;
        };
    };
}
