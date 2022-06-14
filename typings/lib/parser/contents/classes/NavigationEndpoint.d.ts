export = NavigationEndpoint;
declare class NavigationEndpoint {
    constructor(data: any);
    type: string;
    metadata: {};
    browse: {
        id: any;
        params: any;
        base_url: any;
        page_type: any;
    };
    watch: {
        video_id: any;
        playlist_id: any;
        params: any;
        index: any;
        supported_onesie_config: any;
        music_video_type: any;
    };
    search: {
        query: any;
        params: any;
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
            playlist_id: any;
        };
        params: any;
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
    call(actions: any, client: any): Promise<any>;
}
