export = Video;
declare class Video {
    constructor(session: any, player: any, page: any);
    get id(): any;
    get title(): any;
    get description(): any;
    get thumbnail(): any;
    get metadata(): void;
    get captions(): void;
    get storyboards(): void;
    getFormatURL(): any;
    /**
     * Get songs used in the video.
     * @returns {{ [key: string]: import('../parser/contents/Text')[] }[]}
     */
    get music_tracks(): {
        [key: string]: import("../parser/contents/Text")[];
    }[];
    like(): void;
    dislike(): void;
    removeLike(): void;
    unsubscribe(): void;
    comment(): void;
    getComments(): void;
    getLivechat(): void;
    setNotificationPreferences(): void;
    get player(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        on_response_received_commands: any;
        continuation_contents: any;
        metadata: any;
        header: any;
        microformat: import("../parser/contents/classes/PlayerMicroformat");
        sidebar: any;
        overlay: any;
        refinements: any;
        estimated_results: any;
        player_overlays: any;
        playability_status: {
            status: number;
            error_screen: any;
            embeddable: boolean;
            reason: string;
        };
        streaming_data: {
            expires: Date;
            formats: import("../parser/contents/classes/Format")[];
            adaptive_formats: import("../parser/contents/classes/Format")[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: import("../parser/contents/classes/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: import("../parser/contents/classes/Endscreen");
        cards: import("../parser/contents/classes/CardCollection");
    };
    #private;
}
