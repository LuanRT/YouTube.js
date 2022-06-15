export = MicroformatData;
declare class MicroformatData {
    constructor(data: any);
    type: string;
    url_canonical: any;
    title: any;
    description: any;
    thumbnail: Thumbnail[];
    site_name: any;
    app_name: any;
    android_package: any;
    ios_app_store_id: any;
    ios_app_arguments: any;
    og_type: any;
    url_applinks_web: any;
    url_applinks_ios: any;
    url_applinks_android: any;
    url_twitter_ios: any;
    url_twitter_android: any;
    twitter_card_type: any;
    twitter_site_handle: any;
    schema_dot_org_type: any;
    noindex: any;
    is_unlisted: any;
    is_family_safe: any;
    tags: any;
    available_countries: any;
}
import Thumbnail = require("./Thumbnail");
