const Parser = require('..');
const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ChannelAboutFullMetadata {
  type = 'ChannelAboutFullMetadata';

  constructor(data) {
    this.id = data.channelId;
    this.canonical_channel_url = data.canonicalChannelUrl;
    this.author = new Author(data.title, null, data.avatar);
    this.views = new Text(data.viewCountText);
    this.joined = new Text(data.joinedDateText);
    this.description = new Text(data.description);
    this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data.signInForBusinessEmail;
    this.country = new Text(data.country);
  }
}

module.exports = ChannelAboutFullMetadata;