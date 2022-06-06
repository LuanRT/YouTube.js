export = Video;
declare class Video {
    constructor(data: any);
    type: string;
    title: any;
    metadata: {
        views: any;
        published: any;
        thumbnails: any;
        duration: any;
        is_short: any;
    };
}
