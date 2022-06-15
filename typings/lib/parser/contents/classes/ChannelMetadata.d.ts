export = ChannelMetadata;
declare class ChannelMetadata {
    constructor(data: any);
    type: string;
    title: any;
    description: any;
    url: any;
    rss_urls: any;
    vanity_channel_url: any;
    external_id: any;
    is_family_safe: any;
    keywords: any;
    avatar: Thumbnail[];
    available_countries: any;
    android_deep_link: any;
    android_appindexing_link: any;
    ios_appindexing_link: any;
}
import Thumbnail = require("./Thumbnail");
