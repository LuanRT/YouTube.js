export = NavigationEndpoint;
declare class NavigationEndpoint {
    constructor(item: any);
    type: string;
    metadata: {
        api_url: any;
        url: any;
        send_post: any;
        page_type: any;
    };
    browse: {
        browseId: any;
        params: any;
        base_url: any;
    };
    watchVideo: {
        video_id: any;
        playlist_id: any;
        index: any;
        params: any;
    };
    search: {
        query: any;
        params: any;
    };
    watchPlaylist: any;
    watchReel: {
        video_id: any;
        player_params: any;
        params: any;
        sequence_provider: any;
        sequence_params: any;
    };
    url: {
        url: any;
        target: any;
        nofollow: any;
    };
    continuation: {
        request: any;
        token: any;
        trigger: any;
    };
    is_reveal_business_emal: boolean;
    modal: {
        title: any;
        button: any;
        content: any;
    };
    /**
     *
     * @param {import('../../Innertube')} session
     * @returns
     */
    call(session: import('../../Innertube')): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
}
