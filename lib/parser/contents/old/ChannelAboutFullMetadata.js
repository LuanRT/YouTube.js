const Parser = require('..');
const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ChannelAboutFullMetadata {
  type = 'ChannelAboutFullMetadata';

  constructor(item) {
    this.id = item.channelId;
    this.canonical_channel_url = item.canonicalChannelUrl;
    this.author = new Author(item.title, null, item.avatar);
    this.views = new Text(item.viewCountText);
    this.joined = new Text(item.joinedDateText);
    this.description = new Text(item.description);
    this.email_reveal = new NavigationEndpoint(item.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !item.signInForBusinessEmail;
    this.country = new Text(item.country);
  }
}

module.exports = ChannelAboutFullMetadata;