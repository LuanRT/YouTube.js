import { throwIfMissing, findNode, InnertubeError } from '../utils/Utils';
import Constants from '../utils/Constants';
import Analytics from '../parser/youtube/Analytics';
import Proto from '../proto/index';
import Actions from './Actions';

/** @namespace */
class AccountManager {
  #actions;
  channel;
  settings;

  constructor(actions: Actions) {
    this.#actions = actions;
    this.channel = {
      /**
       * Edits channel name.
       * @param new_name
       */
      editName: (new_name: string) => this.#actions.channel('channel/edit_name', { new_name }),
      /**
       * Edits channel description.
       *
       * @param {string} new_description
       * @returns {Promise.<Response>}
       */
      editDescription: (new_description: string) => this.#actions.channel('channel/edit_description', { new_description }),
      /**
       * Retrieves basic channel analytics.
       */
      getBasicAnalytics: () => this.getAnalytics()
    };
    this.settings = {
      notifications: {
        /**
         * Notify about activity from the channels you're subscribed to.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setSubscriptions: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS, 'SPaccount_notifications', option),
        /**
         * Recommended content notifications.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setRecommendedVideos: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, 'SPaccount_notifications', option),
        /**
         * Notify about activity on your channel.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setChannelActivity: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, 'SPaccount_notifications', option),
        /**
         * Notify about replies to your comments.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setCommentReplies: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.COMMENT_REPLIES, 'SPaccount_notifications', option),
        /**
         * Notify when others mention your channel.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setMentions: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.USER_MENTION, 'SPaccount_notifications', option),
        /**
         * Notify when others share your content on their channels.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setSharedContent: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SHARED_CONTENT, 'SPaccount_notifications', option)
      },
      privacy: {
        /**
         * If set to true, your subscriptions won't be visible to others.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setSubscriptionsPrivate: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, 'SPaccount_privacy', option),
        /**
         * If set to true, saved playlists won't appear on your channel.
         *
         * @param {boolean} option - ON | OFF
         * @returns {Promise.<Response>}
         */
        setSavedPlaylistsPrivate: (option: boolean) => this.#setSetting(Constants.ACCOUNT_SETTINGS.PLAYLISTS_PRIVACY, 'SPaccount_privacy', option)
      }
    };
  }
  /**
   * Internal method to perform changes on an account's settings.
   * @param setting_id
   * @param type
   * @param new_value
   */
  async #setSetting(setting_id: string, type: string, new_value: boolean) {
    throwIfMissing({ setting_id, type, new_value });
    const response = await this.#actions.browse(type);
    const contents = (() => {
      switch (type.trim()) {
        case 'SPaccount_notifications':
          return findNode(response.data, 'contents', 'Your preferences', 13, false).options;
        case 'SPaccount_privacy':
          return findNode(response.data, 'contents', 'settingsSwitchRenderer', 13, false).options;
        default:
          // This is just for maximum compatibility, this is most definitely a bad way to handle this
          throw new TypeError('undefined is not a function');
      }
    })();
    const option = contents.find((option: any) => option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);
    const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
    const set_setting = await this.#actions.account('account/set_setting', {
      new_value: type == 'SPaccount_privacy' ? !new_value : new_value,
      setting_item_id
    });
    return set_setting;
  }
  /**
   * Retrieves channel info.
   *
   * @returns {Promise.<{ name: string, email: string, channel_id: string, subscriber_count: string, photo: object[] }>}
   */
  async getInfo() {
    const response = await this.#actions.account('account/accounts_list', { client: 'ANDROID' });
    const account_item_section_renderer = findNode(response.data, 'contents', 'accountItem', 8, false);
    const profile = account_item_section_renderer.accountItem.serviceEndpoint.signInEndpoint.directSigninUserProfile;
    const name = profile.accountName;
    const email = profile.email;
    const photo = profile.accountPhoto.thumbnails;
    const subscriber_count = account_item_section_renderer.accountItem.accountByline.runs.map((run: any) => run.text).join('');
    const channel_id = response.data.contents[0].accountSectionListRenderer.footers[0].accountChannelRenderer.navigationEndpoint.browseEndpoint.browseId;
    return { name, email, channel_id, subscriber_count, photo };
  }
  /**
   * Retrieves time watched statistics.
   */
  async getTimeWatched() {
    const response = await this.#actions.browse('SPtime_watched', { client: 'ANDROID' });
    const rows: any[] = findNode(response.data, 'contents', 'statRowRenderer', 11, false);
    const stats = rows.map((row: any) => {
      const renderer = row.statRowRenderer;
      if (renderer) {
        return {
          title: renderer.title.runs.map((run: any) => run.text).join(''),
          time: renderer.contents.runs.map((run: any) => run.text).join('')
        };
      }
    }).filter((stat: any) => stat);
    return stats;
  }
  /**
   * Retrieves basic channel analytics.
   *
   * @returns {Promise.<Analytics>}
   */
  async getAnalytics() {
    const info = await this.getInfo();
    const params = Proto.encodeChannelAnalyticsParams(info.channel_id);
    const response = await this.#actions.browse('FEanalytics_screen', { params, client: 'ANDROID' });
    return new Analytics(response.data);
  }
}
export default AccountManager;
