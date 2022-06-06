export = PlayerMicroformat;
declare class PlayerMicroformat {
    constructor(data: any);
    type: string;
    title: Text;
    description: Text;
    thumbnails: any;
    embed: {
        iframe_url: any;
        flash_url: any;
        flash_secure_url: any;
        width: any;
        height: any;
    };
    length_seconds: number;
    channel: {
        id: any;
        name: any;
        url: any;
    };
    is_family_safe: any;
    is_unlisted: any;
    has_ypc_metadata: any;
    view_count: number;
    category: any;
    publish_date: any;
    upload_date: any;
    available_countries: any;
}
import Text = require("./Text");
