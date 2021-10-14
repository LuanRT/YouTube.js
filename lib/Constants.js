'use strict';

const Utils = require('./Utils');

const urls = {
  YT_BASE_URL: 'https://www.youtube.com',
  YT_MOBILE_URL: 'https://m.youtube.com',
  YT_WATCH_PAGE: 'https://m.youtube.com/watch',
};

const oauth = {
  scope: 'http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content',
  grant_type: 'http://oauth.net/grant_type/device/1.0',
  model_name: 'ytlr::'
};

const oauth_reqopts = {
  headers: {
    'accept': '*/*',
    'origin': urls.YT_BASE_URL,
    'user-agent': 'Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version',
    'content-type': 'application/json',
    'x-requested-with': 'mark.via.gp',
    'referer': `${urls.YT_BASE_URL}/tv`,
    'accept-language': 'en-US'
  }
};

const default_headers = (session) => {
  return {
    headers: {
      'Cookie': session.cookie,
      'user-agent': Utils.getRandomUserAgent('desktop').userAgent,
      'Referer': 'https://www.google.com/',
      'Accept': 'text/html',
      'Accept-Language': 'en-US,en',
      'Accept-Encoding': 'gzip',
      'Upgrade-Insecure-Requests': 1
    }
  };
};

const innertube_request_opts = (info) => {
  if (info.desktop === undefined) info.desktop = true;
  let req_opts = {
    headers: {
      'accept': '*/*',
      'user-agent': Utils.getRandomUserAgent(info.desktop ? 'desktop' : 'mobile').userAgent,
      'content-type': 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'x-goog-authuser': 0,
      'x-goog-visitor-id': info.session.context.client.visitorData,
      'x-youtube-client-name': info.desktop ? 1 : 2,
      'x-youtube-client-version': info.session.context.client.clientVersion,
      'x-youtube-chrome-connected': 'source=Chrome,mode=0,enable_account_consistency=true,supervised=false,consistency_enabled_by_default=false',
      'x-origin': info.desktop ? urls.YT_BASE_URL : urls.YT_MOBILE_URL,
      'origin': info.desktop ? urls.YT_BASE_URL : urls.YT_MOBILE_URL,
    }
  };

  if (info.session.logged_in && info.desktop) {
    req_opts.headers.Cookie = info.session.cookie;
    req_opts.headers.authorization = info.session.cookie.length < 1 ? `Bearer ${info.session.access_token}` : info.session.auth_apisid;
  }

  if (info.data) {
    req_opts.headers['content-length'] = Buffer.byteLength(JSON.stringify(info.data), 'utf8');
  }

  if (info.id) {
    req_opts.headers.referer = (info.desktop ? urls.YT_BASE_URL : urls.YT_MOBILE_URL) + '/watch?v=' + info.id;
  }

  return req_opts;
};

const video_details_reqbody = (id, sts, context) => {
  return {
    playbackContext: {
      contentPlaybackContext: {
        'currentUrl': '/watch?v=' + id,
        'vis': 0,
        'splay': false,
        'autoCaptionsDefaultOn': false,
        'autonavState': 'STATE_OFF',
        'html5Preference': 'HTML5_PREF_WANTS',
        'signatureTimestamp': sts,
        'referer': urls.YT_BASE_URL,
        'lactMilliseconds': '-1'
      }
    },
    context: context,
    videoId: id
  };
};

const stream_headers = (range) => {
  let headers = {
    'Accept': '*/*',
    'User-Agent': Utils.getRandomUserAgent('desktop').userAgent,
    'Connection': 'keep-alive',
    'Origin': urls.YT_BASE_URL,
    'Referer': urls.YT_BASE_URL,
    'DNT': '?1'
  };
  if (range) {
    headers.Range = range;
  }
  return headers;
};

const formatVideoData = (data, context, desktop) => {
  let video_details = {};
  let metadata = {};

  if (desktop) {
    metadata.embed = data.microformat.playerMicroformatRenderer.embed;
    metadata.view_count = parseInt(data.videoDetails.viewCount);
    metadata.average_rating = data.videoDetails.averageRating;
    metadata.length_seconds = data.microformat.playerMicroformatRenderer.lengthSeconds;
    metadata.channel_id = data.videoDetails.channelId;
    metadata.channel_url = data.microformat.playerMicroformatRenderer.ownerProfileUrl;
    metadata.external_channel_id = data.microformat.playerMicroformatRenderer.externalChannelId;
    metadata.is_live_content = data.videoDetails.isLiveContent;
    metadata.is_family_safe = data.microformat.playerMicroformatRenderer.isFamilySafe;
    metadata.is_unlisted = data.microformat.playerMicroformatRenderer.isUnlisted;
    metadata.is_private = data.videoDetails.isPrivate;
    metadata.has_ypc_metadata = data.microformat.playerMicroformatRenderer.hasYpcMetadata;
    metadata.category = data.microformat.playerMicroformatRenderer.category;
    metadata.channel_name = data.microformat.playerMicroformatRenderer.ownerChannelName;
    metadata.publish_date = data.microformat.playerMicroformatRenderer.publishDate || 'N/A';
    metadata.upload_date = data.microformat.playerMicroformatRenderer.uploadDate || 'N/A';
    metadata.keywords = data.videoDetails.keywords || [];

    video_details.title = data.videoDetails.title;
    video_details.description = data.videoDetails.shortDescription;
    video_details.thumbnail = data.videoDetails.thumbnail.thumbnails.slice(-1)[0];
    video_details.metadata = metadata;
  } else {
    metadata.embed = data[2].playerResponse.microformat.playerMicroformatRenderer.embed;
    metadata.likes = parseInt(data[3].response.contents.singleColumnWatchNextResults.results.results.contents[1].slimVideoMetadataSectionRenderer.contents[1].slimVideoActionBarRenderer.buttons[0].slimMetadataToggleButtonRenderer.button.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D/g, ''));
    metadata.dislikes = parseInt(data[3].response.contents.singleColumnWatchNextResults.results.results.contents[1].slimVideoMetadataSectionRenderer.contents[1].slimVideoActionBarRenderer.buttons[1].slimMetadataToggleButtonRenderer.button.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D/g, ''));
    metadata.view_count = parseInt(data[2].playerResponse.videoDetails.viewCount);
    metadata.average_rating = data[2].playerResponse.videoDetails.averageRating;
    metadata.length_seconds = data[2].playerResponse.microformat.playerMicroformatRenderer.lengthSeconds;
    metadata.channel_id = data[2].playerResponse.videoDetails.channelId;
    metadata.channel_url = data[2].playerResponse.microformat.playerMicroformatRenderer.ownerProfileUrl;
    metadata.external_channel_id = data[2].playerResponse.microformat.playerMicroformatRenderer.externalChannelId;
    metadata.is_live_content = data[2].playerResponse.videoDetails.isLiveContent;
    metadata.is_family_safe = data[2].playerResponse.microformat.playerMicroformatRenderer.isFamilySafe;
    metadata.is_unlisted = data[2].playerResponse.microformat.playerMicroformatRenderer.isUnlisted;
    metadata.is_private = data[2].playerResponse.videoDetails.isPrivate;
    metadata.has_ypc_metadata = data[2].playerResponse.microformat.playerMicroformatRenderer.hasYpcMetadata;
    metadata.category = data[2].playerResponse.microformat.playerMicroformatRenderer.category;
    metadata.channel_name = data[2].playerResponse.microformat.playerMicroformatRenderer.ownerChannelName;
    metadata.publish_date = data[2].playerResponse.microformat.playerMicroformatRenderer.publishDate;
    metadata.upload_date = data[2].playerResponse.microformat.playerMicroformatRenderer.uploadDate;
    metadata.keywords = data[2].playerResponse.videoDetails.keywords;

    video_details.title = data[2].playerResponse.videoDetails.title;
    video_details.description = data[2].playerResponse.videoDetails.shortDescription;
    video_details.thumbnail = data[2].playerResponse.videoDetails.thumbnail.thumbnails.slice(-1)[0];

    // Actions
    video_details.like = () => {};
    video_details.dislike = () => {};
    video_details.removeLike = () => {};
    video_details.subscribe = () => {};
    video_details.unsubscribe = () => {};
    video_details.comment = () => {};
    video_details.setNotificationPref = () => {};
    if (metadata.is_live_content) {
      video_details.getLivechat = () => {};
    }

    // Additional metadata
    video_details.metadata = metadata;
  }
  return video_details;
};

const filters = (order) => { // TODO: Refactor this crazy thing
  switch (order) {
    case 'any,any,relevance':
      return 'EgIQAQ%3D%3D';
    case 'hour,any,relevance':
      return 'EgIIAQ%3D%3D';
    case 'day,any,relevance':
      return 'EgQIAhAB';
    case 'week,any,relevance':
      return 'EgQIAxAB';
    case 'month,any,relevance':
      return 'EgQIBBAB';
    case 'year,any,relevance':
      return 'EgQIBRAB';
    case 'any,short,relevance':
      return 'EgQQARgB';
    case 'hour,short,relevance':
      return 'EgYIARABGAE%3D';
    case 'day,short,relevance':
      return 'EgYIAhABGAE%3D';
    case 'week,short,relevance':
      return 'EgYIAxABGAE%3D';
    case 'month,short,relevance':
      return 'EgYIBBABGAE%3D';
    case 'year,short,relevance':
      return 'EgYIBRABGAE%3D';
    case 'any,long,relevance':
      return 'EgQQARgC';
    case 'hour,long,relevance':
      return 'EgYIARABGAI%3D';
    case 'day,long,relevance':
      return 'EgYIAhABGAI%3D';
    case 'week,long,relevance':
      return 'EgYIAxABGAI%3D';
    case 'month,long,relevance':
      return 'EgYIBBABGAI%3D';
    case 'year,long,relevance':
      return 'EgYIBRABGAI%3D';
    case 'any,any,age':
      return 'CAISAhAB';
    case 'hour,any,age':
      return 'CAISBAgBEAE%3D';
    case 'day,any,age':
      return 'CAISBAgCEAE%3D';
    case 'week,any,age':
      return 'CAISBAgDEAE%3D';
    case 'month,any,age':
      return 'CAISBAgEEAE%3D';
    case 'year,any,age':
      return 'CAISBAgFEAE%3D';
    case 'any,short,age':
      return 'CAISBBABGAE%3D';
    case 'hour,short,age':
      return 'CAISBggBEAEYAQ%3D%3D';
    case 'day,short,age':
      return 'CAISBggCEAEYAQ%3D%3D';
    case 'week,short,age':
      return 'CAISBggDEAEYAQ%3D%3D';
    case 'month,short,age':
      return 'CAISBggEEAEYAQ%3D%3D';
    case 'year,short,age':
      return 'CAISBggFEAEYAQ%3D%3D';
    case 'any,long,age':
      return 'CAISBBABGAI%3D';
    case 'hour,long,age':
      return 'CAISBggBEAEYAg%3D%3D';
    case 'day,long,age':
      return 'CAISBggCEAEYAg%3D%3D';
    case 'week,long,age':
      return 'CAISBggDEAEYAg%3D%3D';
    case 'month,long,age':
      return 'CAISBggEEAEYAg%3D%3D';
    case 'year,long,age':
      return 'CAISBggFEAEYAg%3D%3D';
    case 'any,any,views':
      return 'CAMSAhAB';
    case 'hour,any,views':
      return 'CAMSBAgBEAE%3D';
    case 'day,any,views':
      return 'CAMSBAgCEAE%3D';
    case 'week,any,views':
      return 'CAMSBAgDEAE%3D';
    case 'month,any,views':
      return 'CAMSBAgEEAE%3D';
    case 'year,any,views':
      return 'CAMSBAgFEAE%3D';
    case 'any,short,views':
      return 'CAMSBBABGAE%3D';
    case 'hour,short,views':
      return 'CAMSBggBEAEYAQ%3D%3D';
    case 'day,short,views':
      return 'CAMSBggCEAEYAQ%3D%3D';
    case 'week,short,views':
      return 'CAMSBggDEAEYAQ%3D%3D';
    case 'month,short,views':
      return 'CAMSBggEEAEYAQ%3D%3D';
    case 'year,short,views':
      return 'CAMSBggFEAEYAQ%3D%3D';
    case 'any,long,views':
      return 'CAMSBBABGAI%3D';
    case 'hour,long,views':
      return 'CAMSBggBEAEYAg%3D%3D';
    case 'day,long,views':
      return 'CAMSBggCEAEYAg%3D%3D';
    case 'week,long,views':
      return 'CAMSBggDEAEYAg%3D%3D';
    case 'month,long,views':
      return 'CAMSBggEEAEYAg%3D%3D';
    case 'year,long,views':
      return 'CAMSBggFEAEYAg%3D%3D';
    case 'any,any,rating':
      return 'CAESAhAB';
    case 'hour,any,rating':
      return 'CAESBAgBEAE%3D';
    case 'day,any,rating':
      return 'CAESBAgCEAE%3D';
    case 'week,any,rating':
      return 'CAESBAgDEAE%3D';
    case 'month,any,rating':
      return 'CAESBAgEEAE%3D';
    case 'year,any,rating':
      return 'CAESBAgFEAE%3D';
    case 'any,short,rating':
      return 'CAESBBABGAE%3D';
    case 'hour,short,rating':
      return 'CAESBggBEAEYAQ%3D%3D';
    case 'day,short,rating':
      return 'CAESBggCEAEYAQ%3D%3D';
    case 'week,short,rating':
      return 'CAESBggDEAEYAQ%3D%3D';
    case 'month,short,rating':
      return 'CAESBggEEAEYAQ%3D%3D';
    case 'year,short,rating':
      return 'CAESBggFEAEYAQ%3D%3D';
    case 'any,long,rating':
      return 'CAESBBABGAI%3D';
    case 'hour,long,rating':
      return 'CAESBggBEAEYAg%3D%3D';
    case 'day,long,rating':
      return 'CAESBggCEAEYAg%3D%3D';
    case 'week,long,rating':
      return 'CAESBggDEAEYAg%3D%3D';
    case 'month,long,rating':
      return 'CAESBggEEAEYAg%3D%3D';
    case 'year,long,rating':
      return 'CAESBggFEAEYAg%3D%3D';
    default:
  }
};

module.exports = { urls, oauth, oauth_reqopts, default_headers, innertube_request_opts, video_details_reqbody, stream_headers, formatVideoData, filters };