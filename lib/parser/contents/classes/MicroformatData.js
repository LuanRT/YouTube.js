const Parser = require('..');
const Thumbnail = require('./Thumbnail');

class MicroformatData {
  type = 'MicroformatData';

  constructor(item) {
    this.url_canonical = item.urlCanonical;
    this.title = item.title;
    this.description = item.description;
    this.thumbnail = item.thumbnail && Thumbnail.fromResponse(item.thumbnail);
    this.site_name = item.siteName;
    this.app_name = item.appName;
    this.android_package = item.androidPackage;
    this.ios_app_store_id = item.iosAppStoreId;
    this.ios_app_arguments = item.iosAppArguments;
    this.og_type = item.ogType;
    this.url_applinks_web = item.urlApplinksWeb;
    this.url_applinks_ios = item.urlApplinksIos;
    this.url_applinks_android = item.urlApplinksAndroid;
    this.url_twitter_ios = item.urlTwitterIos;
    this.url_twitter_android = item.urlTwitterAndroid;
    this.twitter_card_type = item.twitterCardType;
    this.twitter_site_handle = item.twitterSiteHandle;
    this.schema_dot_org_type = item.schemaDotOrgType;
    this.noindex = item.noindex;
    this.is_unlisted = item.unlisted;
    this.is_family_safe = item.familySafe;
    this.tags = item.tags;
    this.available_countries = item.availableCountries;
    // XXX: linkAlternatives?
  }
}

module.exports = MicroformatData;