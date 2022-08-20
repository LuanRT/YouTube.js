import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class MicroformatData extends YTNode {
  static type = 'MicroformatData';

  url_canonical: string;
  title: string;
  description: string;
  thumbnail: Thumbnail[] | null;
  site_name: string;
  app_name: string;
  android_package: string;
  ios_app_store_id: string;
  ios_app_arguments: string;
  og_type: string;
  url_applinks_web: string;
  url_applinks_ios: string;
  url_applinks_android: string;
  url_twitter_ios: string;
  url_twitter_android: string;
  twitter_card_type: string;
  twitter_site_handle: string;
  schema_dot_org_type: string;
  noindex: string;
  is_unlisted: boolean;
  is_family_safe: boolean;
  tags: any; // TODO: string array?
  available_countries: string[];

  constructor(data: any) {
    super();
    this.url_canonical = data.urlCanonical;
    this.title = data.title;
    this.description = data.description;
    this.thumbnail = data.thumbnail ? Thumbnail.fromResponse(data.thumbnail) : null;
    this.site_name = data.siteName;
    this.app_name = data.appName;
    this.android_package = data.androidPackage;
    this.ios_app_store_id = data.iosAppStoreId;
    this.ios_app_arguments = data.iosAppArguments;
    this.og_type = data.ogType;
    this.url_applinks_web = data.urlApplinksWeb;
    this.url_applinks_ios = data.urlApplinksIos;
    this.url_applinks_android = data.urlApplinksAndroid;
    this.url_twitter_ios = data.urlTwitterIos;
    this.url_twitter_android = data.urlTwitterAndroid;
    this.twitter_card_type = data.twitterCardType;
    this.twitter_site_handle = data.twitterSiteHandle;
    this.schema_dot_org_type = data.schemaDotOrgType;
    this.noindex = data.noindex;
    this.is_unlisted = data.unlisted;
    this.is_family_safe = data.familySafe;
    this.tags = data.tags;
    this.available_countries = data.availableCountries;
    // XXX: linkAlternatives?
  }
}

export default MicroformatData;