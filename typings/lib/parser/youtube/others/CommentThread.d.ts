export = CommentThread;
declare class CommentThread {
    static parseItem(item: any): {
        text: any;
        author: {
            name: any;
            thumbnails: any;
            channel_id: any;
            channel_url: string;
        };
        metadata: {
            published: any;
            is_reply: boolean;
            is_liked: any;
            is_disliked: any;
            is_pinned: boolean;
            is_channel_owner: any;
            like_count: number;
            reply_count: any;
            id: any;
        };
    };
}
