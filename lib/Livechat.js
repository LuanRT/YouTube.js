'use strict';

const Axios = require('axios');
const Actions = require('./Actions');
const Constants = require('./Constants');
const EventEmitter = require('events');

class Livechat extends EventEmitter {
  constructor(session, token, channel_id, video_id) {
    super(session);
    this.ctoken = token;
    this.session = session;
    this.video_id = video_id;
    this.channel_id = channel_id;

    this.message_queue = [];
    this.id_cache = [];

    this.poll_intervals_ms = 1000;
    this.running = true;

    this.poll();
  }

  enqueueActionGroup(group) {
    group.forEach((action) => {
      if (!action.addChatItemAction) return; //TODO: handle different action types */
      const message_content = action.addChatItemAction.item.liveChatTextMessageRenderer;
      if (!message_content) return;

      const message = {
        text: message_content.message.runs.map((item) => item.text).join(' '),
        author: {
          name: message_content.authorName && message_content.authorName.simpleText || 'N/',
          channel_id: message_content.authorExternalChannelId,
          profile_picture: message_content.authorPhoto.thumbnails
        },
        timestamp: message_content.timestampUsec,
        id: message_content.id
      };

      this.message_queue.push(message);
    });
  }

  async poll() {
    if (!this.running) return;

    let data;

    data = { context: this.session.context, continuation: this.ctoken };
    const livechat = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/live_chat/get_live_chat${this.session.logged_in && this.session.cookie.length < 1 ? '' : `?key=${this.session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session: this.session, data, desktop: true }));
    if (livechat instanceof Error) throw new Error(`Error polling livechat: ${livechat.message}`);

    const continuation_contents = livechat.data.continuationContents;
    const action_group = continuation_contents.liveChatContinuation.actions;
    this.enqueueActionGroup(action_group);

    // Why don't we just emit the message directly? Well, enqueueing the messages is necessary so they are not emitted in a “messy” way, funny enough that's exactly how YouTube does it in its livechat js player.
    this.message_queue.forEach((message, index) => {
      if (this.id_cache.includes(message.id)) return;
      setTimeout(() => this.emit('chat-update', message), message.timestamp / 1000 - new Date().getTime());
      this.id_cache.push(message.id);
    });

    this.message_queue = [];

    data = { context: this.session.context, videoId: this.video_id };
    if (this.metadata_ctoken) data.continuation = this.metadata_ctoken;

    const updated_metadata = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/updated_metadata${this.session.logged_in && this.session.cookie.length < 1 ? '' : `?key=${this.session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session: this.session, data, desktop: true }));
    if (updated_metadata instanceof Error) throw new Error(`Error polling updated metadata: ${updated_metadata.message}`);
    this.metadata_ctoken = updated_metadata.data.continuation.timedContinuationData.continuation;

    const metadata = updated_metadata.data.actions;
    this.emit('update-metadata', {
      likes: metadata[1].updateToggleButtonTextAction.defaultText.simpleText,
      dislikes: metadata[2].updateToggleButtonTextAction.defaultText.simpleText,
      view_count: {
        simple_text: metadata[0].updateViewershipAction.viewCount.videoViewCountRenderer.viewCount.simpleText,
        short_view_count: metadata[0].updateViewershipAction.viewCount.videoViewCountRenderer.extraShortViewCount.simpleText
      }
    });

    this.livechat_poller = setTimeout(async () => await this.poll(), this.poll_intervals_ms);
  }

  async sendMessage(text) {
    const message = await Actions.livechat(this.session, 'live_chat/send_message', { text, channel_id: this.channel_id, video_id: this.video_id });
    if (!message.success) return message;

    const deleteMessage = async () => {
      const menu = await Actions.livechat(this.session, 'live_chat/get_item_context_menu', { params: { params: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.contextMenuEndpoint.liveChatItemContextMenuEndpoint.params, pbj: 1 } });
      if (!menu.success) return menu;

      const chat_item_menu = menu.data.liveChatItemContextMenuSupportedRenderers.menuRenderer.items[0];

      const cmd = await Actions.livechat(this.session, 'live_chat/moderate', { cmd_params: chat_item_menu.menuServiceItemRenderer.serviceEndpoint.moderateLiveChatEndpoint.params });
      if (!cmd.success) return cmd;

      return { success: true, status_code: cmd.status_code };
    };

    return {
      success: true,
      status_code: message.status_code,
      deleteMessage,
      message_data: {
        text: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.message.runs.map((item) => item.text).join(' '),
        author: {
          name: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorName && message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorName.simpleText || 'N/',
          channel_id: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId,
          profile_picture: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorPhoto.thumbnails
        },
        timestamp: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.timestampUsec,
        id: message.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.id
      }
    };
  }

  async blockUser(msg_params) {
    /* TODO: Implement this */
    throw new Error('Not implemented');
  }

  stop() {
    this.running = false;
    clearTimeout(this.livechat_poller);
  }
}

module.exports = Livechat;