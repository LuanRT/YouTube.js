'use strict';

const Text = require('./Text');
const Constants = require('../../../utils/Constants');
const MetadataBadge = require('./MetadataBadge');

class Author {
  constructor(data) {
    const nav_text = new Text(data.nav_text);
    const badges = data.badges && data.badges.map((badge) => new MetadataBadge(badge.metadataBadgeRenderer));
    
    this.id = nav_text.runs[0].endpoint.browse?.id || 'N/A';
    this.url = nav_text.runs[0].endpoint.browse && `${Constants.URLS.YT_BASE}${nav_text.runs[0].endpoint.browse?.base_url}` || 'N/A';
    this.name = nav_text.text || 'N/A'
    this.endpoint = nav_text.runs[0].endpoint;
    this.badges = badges || [];
    
    this.is_verified = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || false;
    this.is_verified_artist = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || false;
  }
}

module.exports = Author;