export = Video;
declare class Video {
    constructor(session: any, page: any);
    get id(): string;
    get title(): string;
    get description(): string;
    get thumbnail(): import("../parser/contents/Thumbnail");
    get metadata(): void;
    get captions(): void;
    get storyboards(): void;
    getFormatURL(): string;
    like(): void;
    dislike(): void;
    removeLike(): void;
    unsubscribe(): void;
    comment(): void;
    getComments(): void;
    getLivechat(): void;
    setNotificationPreferences(): void;
    get page(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        metadata: any;
        header: any;
        microformat: any;
        sidebar: any;
        playability_status: {
            status: any;
            embeddable: any;
        };
        streaming_data: {
            expires: Date;
            formats: import("../parser/contents/Format")[];
            adaptive_formats: import("../parser/contents/Format")[];
        };
        captions: any;
        video_details: import("../parser/contents/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: any;
        cards: any;
    };
    #private;
}
