const Parser = require('..');
const Author = require('./Author');
const NavigatableText = require('./NavigatableText');
const NavigationEndpoint = require('./NavigationEndpoint');

class TwoColumnWatchNextResult {
  type = 'TwoColumnWatchNextResult';

  constructor(item) {
    // XXX: do we need this?
    // this.autoplay
    // this contains the video info
    this.primary = Parser.parse(item.results.results.contents);
    // these hold the recommendations
    this.secondary = Parser.parse(item.secondaryResults.secondaryResults.results);
    // playlist data
    const playlist = item.playlist?.playlist;
    this.playlist = playlist && {
      current_index: playlist.currentIndex,
      endpoint: new NavigationEndpoint(playlist.endpoint),
      is_course: playlist.isCourse,
      is_infinite: playlist.isInfinite,
      author: new Author(playlist.longBylineText, playlist.ownerBadges),
      save: playlist.saveButton && Parser.parseItem(playlist.saveButton),
      title: new NavigatableText(playlist.titleText),
      videos: playlist.totalVideos,
      contents: Parser.parse(playlist.contents),
    }
    // TODO: conversationBar
    // this.conversation = liveChatRenderer
  }
}

module.exports = TwoColumnWatchNextResult;