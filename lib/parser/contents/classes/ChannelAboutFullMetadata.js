'use strict';

const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Parser = require('..');

class ChannelAboutFullMetadata {
  type = 'ChannelAboutFullMetadata';

  constructor(data) {
    this.id = data.channelId;
    this.name = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.canonical_channel_url = data.canonicalChannelUrl;
    this.views = new Text(data.viewCountText);
    this.joined = new Text(data.joinedDateText);
    this.description = new Text(data.description);
    this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data.signInForBusinessEmail;
    this.country = new Text(data.country);
    this.buttons = Parser.parse(data.actionButtons);
  }
}

module.exports = ChannelAboutFullMetadata;