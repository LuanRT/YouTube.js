const ResultsParser = require('.');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');
const Text = require('./Text');

class C4TabbedHeader {
  type = 'C4TabbedHeader';

  constructor(item) {
    this.author = new Author({
        simpleText: item.title,
        navigationEndpoint: item.navigationEndpoint
    }, item.badges, item.avatar);
    this.banner = item.banner && Thumbnail.fromResponse(item.banner) || [];
    this.tv_banner = item.tvBanner && Thumbnail.fromResponse(item.tvBanner) || [];
    this.mobile_banner = item.mobileBanner && Thumbnail.fromResponse(item.mobileBanner) || [];
    this.subscribers = new Text(item.subscriberCountText);
    this.sponsor_button = item.sponsorButton && ResultsParser.parseItem(item.sponsorButton);
    this.subscribe_button = item.subscribeButton && ResultsParser.parseItem(item.subscribeButton);
    this.header_links = item.headerLinks && ResultsParser.parseItem(item.headerLinks);
  }
}

module.exports = C4TabbedHeader;
