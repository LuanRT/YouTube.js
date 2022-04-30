const ResultsParser = require(".");

class CommentActionButtons {
    type = 'CommentActionButtons';

    constructor(item) {
        this.like = ResultsParser.parseItem(item.likeButton);
        this.reply = ResultsParser.parseItem(item.replyButton);
        this.dislike = ResultsParser.parseItem(item.dislikeButton);
    }
}

module.exports = CommentActionButtons;