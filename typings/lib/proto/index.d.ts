export = Proto;
declare class Proto {
    static encodeSearchFilter(period: any, duration: any, order: any): string;
    static encodeMessageParams(channel_id: any, video_id: any): string;
    static encodeCommentsSectionParams(video_id: any, options?: {}): string;
    static encodeCommentRepliesParams(video_id: any, comment_id: any): string;
    static encodeCommentParams(video_id: any): string;
    static encodeCommentReplyParams(comment_id: any, video_id: any): string;
    static encodeCommentActionParams(type: any, comment_id: any, video_id: any): string;
    static encodeNotificationPref(channel_id: any, index: any): string;
}
