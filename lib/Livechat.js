'use strict';

const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');
const EventEmitter = require('events');
const Uuid = require("uuid");

class Livechat extends EventEmitter {
  constructor(session, token, channel_id, video_id) {
    super(session);
    this.ctoken = token;
    this.session = session;
    this.video_id = video_id;
    this.channel_id = channel_id;

    this.message_queue = [];
    this.id_cache = [];

    this.poll_intervals_ms = 0;
    this.running = true;

    this.poll();
  }

  async sendMessage(text) {
    let data = {
      context: this.session.context,
      params: Utils.encodeChannelIdWithVideoId(this.channel_id, this.video_id),
      clientMessageId: `INntLiB${Uuid.v4()}`,
      richMessage: {
        textSegments: [{ text }]
      }
    };

    const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/live_chat/send_message${this.session.logged_in && this.session.cookie.length < 1 ? '' : `?key=${this.session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session: this.session, data, id: this.video_id, desktop: true })).catch((error) => error);
    if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.response.data.error.message };

    const deleteMessage = async () => {
      /*
       * The first request is made to get the chat options and the delete command endpoint,
       * these options contain the required params to delete a message (a string composed of clientId, the channelId of the channel you're watching, your public channelId and the id of the message you sent).
       * All put together with some binary data and then base64ed twice (yes, twice lm*o top notch security).
       **/
      const item_menu_res = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/live_chat/get_item_context_menu?params=${response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.contextMenuEndpoint.liveChatItemContextMenuEndpoint.params}&pbj=1${this.session.logged_in && this.session.cookie.length < 1 ? '' : `&key=${this.session.key}`}`, JSON.stringify({ context: this.session.context }), Constants.innertube_request_opts({ session: this.session, id: this.video_id, desktop: true })).catch((error) => error);
      if (item_menu_res instanceof Error) return { success: false, status_code: item_menu_res.response.status, message: item_menu_res.response.data.error.message };
      const chat_item_menu = item_menu_res.data.liveChatItemContextMenuSupportedRenderers.menuRenderer.items[0];

      const delete_message_reqbody = {
        context: this.session.context,
        params: chat_item_menu.menuServiceItemRenderer.serviceEndpoint.moderateLiveChatEndpoint.params
      };

      const delete_message_cmd = await Axios.post(`${Constants.urls.YT_BASE_URL}${chat_item_menu.menuServiceItemRenderer.serviceEndpoint.commandMetadata.webCommandMetadata.apiUrl}${this.session.logged_in && this.session.cookie.length < 1 ? '' : `&key=${this.session.key}`}`, JSON.stringify(delete_message_reqbody), Constants.innertube_request_opts({ session: this.session, delete_message_reqbody, id: this.video_id, desktop: true })).catch((error) => error);
      if (delete_message_cmd instanceof Error) return { success: false, status_code: delete_message_cmd.response.status, message: delete_message_cmd.response.data.error.message };
      return { success: true, status_code: response.status };
    };

    return {
      success: true,
      status_code: response.status,
      deleteMessage: () => deleteMessage(),
      message_data: {
        text: response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.message.runs.map((item) => item.text).join(' '),
        author: {
          name: response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorName && response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorName.simpleText || 'N/',
          channel_id: response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId,
          profile_picture: response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorPhoto.thumbnails
        },
        timestamp: response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.timestampUsec,
        id: response.data.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.id
      }
    };
  }

  enqueueActionGroup(group) {
    group.forEach((action) => {
      if (!action.addChatItemAction) return;
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

    // How long we should wait to poll the chat again.
    if (continuation_contents.liveChatContinuation.continuations[0].timedContinuationData) {
      this.poll_intervals_ms = continuation_contents.liveChatContinuation.continuations[0].timedContinuationData.timeoutMs;
    } else {
      this.poll_intervals_ms = 4000;
    }

    await this.poll();
    this.livechat_poller = setTimeout(() => this.poll(), this.poll_intervals_ms);
  }

  stop() {
    this.running = false;
    clearTimeout(this.livechat_poller);
  }
}

module.exports = Livechat;