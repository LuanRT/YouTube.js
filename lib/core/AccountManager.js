'use strict';

const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');
const Proto = require('../proto');

/** @namespace */
class AccountManager {
  #actions;
  
  /**
   * @param {Actions} actions
   * @constructor
   */
  constructor (actions) {
    this.#actions = actions;
    
    /** @namespace */
    this.channel = {
      /**
       * Edits channel name.
       * 
       * @param {string} new_name
       * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
       */
      editName: (new_name) => this.#actions.channel('channel/edit_name', { new_name }),
  
      /**
       * Edits channel description.
       * 
       * @param {string} new_description
       * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
       */
      editDescription: (new_description) => this.#actions.channel('channel/edit_description', { new_description }),
      
      /**
       * Retrieves basic channel analytics.
       * @borrows AccountManager#getAnalytics as getBasicAnalytics
       */
      getBasicAnalytics: () => this.getAnalytics()
    }
    
    /** @namespace */
    this.settings = {
      notifications: {
        /**
         * Notify about activity from the channels you're subscribed to.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setSubscriptions: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS, 'SPaccount_notifications', option),

        /**
         * Recommended content notifications.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setRecommendedVideos: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, 'SPaccount_notifications', option),

        /**
         * Notify about activity on your channel.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setChannelActivity: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, 'SPaccount_notifications', option),

        /**
         * Notify about replies to your comments.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setCommentReplies: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.COMMENT_REPLIES, 'SPaccount_notifications', option),

        /**
         * Notify when others mention your channel.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setMentions: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.USER_MENTION, 'SPaccount_notifications', option),

        /**
         * Notify when others share your content on their channels.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setSharedContent: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SHARED_CONTENT, 'SPaccount_notifications', option)
      },
      privacy: {
        /**
         * If set to true, your subscriptions won't be visible to others.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setSubscriptionsPrivate: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, 'SPaccount_privacy', option),

        /**
         * If set to true, saved playlists won't appear on your channel.
         * 
         * @param {boolean} option - ON | OFF 
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
          */
        setSavedPlaylistsPrivate: (option) => this.#setSetting(Constants.ACCOUNT_SETTINGS.PLAYLISTS_PRIVACY, 'SPaccount_privacy', option)
      }
    }
  }
  
  /**
   * Internal method to perform changes on an account's settings.
   * 
   * @param {string} setting_id 
   * @param {string} type 
   * @param {string} new_value 
   * @private
   * 
   * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
   */
  async #setSetting(setting_id, type, new_value) {
    Utils.throwIfMissing({ setting_id, type, new_value });
    
    const values = { ON: true, OFF: false };
 
    if (!values.hasOwnProperty(new_value)) 
      throw new Utils.InnertubeError('Invalid option', { option: new_value, available_options: Object.keys(values) });
      
    const response = await this.#actions.browse(type);
    
    const contents = ({
      SPaccount_notifications: () => Utils.findNode(response.data, 'contents', 'Your preferences', 13, false).options,
      SPaccount_privacy: () => Utils.findNode(response.data, 'contents', 'settingsSwitchRenderer', 13, false).options
    })[type.trim()]();

    const option = contents.find((option) => option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);

    const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
    const set_setting = await this.#actions.account('account/set_setting', {
      new_value: type == 'SPaccount_privacy' ? !values[new_value] : values[new_value],
      setting_item_id
    });

    return set_setting;
  }
  
  /**
   * Retrieves channel info.
   * @returns {Promise.<{ name: string; email: string; channel_id: string; subscriber_count: string; photo: object[]; }>}
   */
  async getInfo() {
    const response = await this.#actions.account('account/accounts_list', { client: 'ANDROID' });
    
    const account_item_section_renderer = Utils.findNode(response.data, 'contents', 'accountItem', 8, false);
    const profile = account_item_section_renderer.accountItem.serviceEndpoint.signInEndpoint.directSigninUserProfile;
    
    const name = profile.accountName;
    const email = profile.email;
    const photo = profile.accountPhoto.thumbnails;
    const subscriber_count = account_item_section_renderer.accountItem.accountByline.runs.map((run) => run.text).join('');
    const channel_id = response.data.contents[0].accountSectionListRenderer.footers[0].accountChannelRenderer.navigationEndpoint.browseEndpoint.browseId;
    
    return { name, email, channel_id, subscriber_count, photo };
  }
  
  /**
   * Retrieves time watched statistics.
   * @returns {Promise.<[{ title: string; time: string; }]>}
   */
  async getTimeWatched() {
    const response = await this.#actions.browse('SPtime_watched', { client: 'ANDROID' });
    
    const rows = Utils.findNode(response.data, 'contents', 'statRowRenderer', 11, false);
 
    const stats = rows.map((row) => {
      const renderer = row.statRowRenderer;
      if (renderer) {
        return {
          title: renderer.title.runs.map((run) => run.text).join(''),
          time: renderer.contents.runs.map((run) => run.text).join('')
        }
      }
    }).filter((stat) => stat);
    
    return stats;
  }
  
  /**
   * Retrieves basic channel analytics.
   *
   * @returns {Promise.<{ metrics: { title: string; subtitle: string; metric_value: string;
   * comparison_indicator: object; series_configuration: object; }[]; top_content: { views: string; 
   * published: string; thumbnails: object[]; duration: string; is_short: boolean }[]; }>}
   */
  async getAnalytics() {
    const info = await this.getInfo();
        
    const params = Proto.encodeChannelAnalyticsParams(info.channel_id);
    const action = await this.#actions.browse('FEanalytics_screen', { params, client: 'ANDROID' });
        
    const contents = Utils.findNode(action.data, 'contents', 'elementRenderer', 11, false);
        
    const analytics = {
      metrics: {},
      top_content: {}
    }
        
    contents.forEach((el) => {
      const element = el.elementRenderer.newElement;
      const model = element.type.componentType.model;
      const key = Object.keys(model)[0];
    
      switch (key) {
        case 'analyticsRootModel':
          const sections = model.analyticsRootModel.analyticsKeyMetricsData.dataModel.sections;
           
          analytics.metrics = sections.map((section) => ({
            title: section.title,
            subtitle: section.subtitle,
            metric_value: section.metricValue,
            comparison_indicator: section.comparisonIndicator,
            series_configuration: section.seriesConfiguration
          }));
          break;
        case 'analyticsVodCarouselCardModel':
          const video_carousel = model.analyticsVodCarouselCardModel.videoCarouselData;
            
          analytics.top_content = video_carousel?.videos.map((video) => ({
            title: video.videoTitle,
            metadata: {
              views: video.videoDescription.split('·')[0].trim(),
              published: video.videoDescription.split('·')[1].trim(),
              thumbnails: video.thumbnailDetails.thumbnails,
              duration: video.formattedLength,
              is_short: video.isShort
            }
          })) || [];
          break;
        default:
          break;
      }
    });
        
    return analytics;
  }
}

module.exports = AccountManager;