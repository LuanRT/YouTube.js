'use strict';

const Constants = require('../../../utils/Constants');

class CommentThread {
  static parseItem(item) {
    if (item.commentThreadRenderer || item.commentRenderer) {
      const comment = item?.commentThreadRenderer?.comment || item;
      
      const like_btn = comment.commentRenderer?.actionButtons?.commentActionButtonsRenderer.likeButton;
      const dislike_btn = comment.commentRenderer?.actionButtons?.commentActionButtonsRenderer.dislikeButton;

      return {
        text: comment.commentRenderer.contentText.runs.map((run) => run.text).join(''),
        author: {
          name: comment.commentRenderer.authorText.simpleText,
          thumbnails: comment.commentRenderer.authorThumbnail.thumbnails,
          channel_id: comment.commentRenderer.authorEndpoint.browseEndpoint.browseId,
          channel_url: Constants.URLS.YT_BASE  + comment.commentRenderer.authorEndpoint.browseEndpoint.canonicalBaseUrl
        },
        metadata: {
          published: comment.commentRenderer.publishedTimeText.runs[0].text,
          is_reply: !!item.commentRenderer,
          is_liked: like_btn.toggleButtonRenderer.isToggled,
          is_disliked: dislike_btn.toggleButtonRenderer.isToggled,
          is_pinned: comment.commentRenderer.pinnedCommentBadge ? true : false,
          is_channel_owner: comment.commentRenderer.authorIsChannelOwner,
          like_count: parseInt(like_btn?.toggleButtonRenderer?.accessibilityData?.accessibilityData.label.replace(/\D/g, '')),
          reply_count: comment.commentRenderer.replyCount || 0,
          id: comment.commentRenderer.commentId,
        }
      }
    }
  }
}
module.exports = CommentThread;