'use strict';

const Parser = require('..');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');
const Text = require('./Text');

class C4TabbedHeader {
  type = 'C4TabbedHeader';

  constructor(data) {
    this.author = new Author({
        simpleText: data.title,
        navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);
    this.banner = data.banner && Thumbnail.fromResponse(data.banner) || [];
    this.tv_banner = data.tvBanner && Thumbnail.fromResponse(data.tvBanner) || [];
    this.mobile_banner = data.mobileBanner && Thumbnail.fromResponse(data.mobileBanner) || [];
    this.subscribers = new Text(data.subscriberCountText);
    this.sponsor_button = data.sponsorButton && Parser.parse(data.sponsorButton);
    this.subscribe_button = data.subscribeButton && Parser.parse(data.subscribeButton);
    this.header_links = data.headerLinks && Parser.parse(data.headerLinks);
  }
}

module.exports = C4TabbedHeader;
