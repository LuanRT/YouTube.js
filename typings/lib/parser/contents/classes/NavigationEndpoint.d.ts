export = NavigationEndpoint;
declare class NavigationEndpoint {
    constructor(data: any);
    type: string;
    metadata: {
        url: any;
        page_type: any;
        api_url: any;
        send_post: any;
    };
    browse: {
        id: any;
        params: any;
        base_url: any;
    };
    watch: {
        video_id: any;
        playlist_id: any;
        params: any;
        index: any;
        supported_onesie_config: any;
    };
    subscribe: {
        channel_ids: any;
        params: any;
    };
    unsubscribe: {
        channel_ids: any;
        params: any;
    };
    like: {
        status: any;
        target: {
            video_id: any;
        };
        remove_like_params: any;
    };
    offline_video: {
        video_id: any;
        on_add_command: {
            get_download_action: {
                video_id: any;
                params: any;
            };
        };
    };
    continuation: {
        request: any;
        token: any;
    };
    feedback: {
        token: any;
    };
    watch_playlist: {
        playlist_id: any;
    };
    playlist_edit: {
        playlist_id: any;
        actions: any;
    };
    add_to_playlist: {
        video_id: any;
    };
    get_report_form: {
        params: any;
    };
    call(actions: any): Promise<{
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        metadata: any;
        header: any;
        microformat: import("./PlayerMicroformat");
        sidebar: any;
        overlay: any;
        refinements: any;
        estimated_results: any;
        player_overlays: any;
        playability_status: {
            status: number;
            embeddable: boolean;
            reason: string;
        };
        streaming_data: {
            expires: Date;
            formats: import("./Format")[];
            adaptive_formats: import("./Format")[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: import("./VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: import("./Endscreen");
        cards: import("./CardCollection");
    }>;
}
