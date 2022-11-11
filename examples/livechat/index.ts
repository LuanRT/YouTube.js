import { Innertube, UniversalCache, YTNodes } from 'youtubei.js';

import { LiveChatContinuation } from 'youtubei.js/dist/src/parser';
import { ChatAction, LiveMetadata } from 'youtubei.js/dist/src/parser/youtube/LiveChat';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache() });

  
  const search = await yt.search('Lofi girl live');
  const info = await yt.getInfo(search.videos[0].as(YTNodes.Video).id);

  const livechat = info.getLiveChat();

  livechat.on('start', (initial_data: LiveChatContinuation) => {
    /**
     * Initial info is what you see when you first open a Live Chat — this is; inital actions (pinned messages, top donations..), account's info and so on.
     */

    console.info(`Hey ${initial_data.viewer_name || 'N/A'}, welcome to Live Chat!`);
  });

  livechat.on('chat-update', (action: ChatAction) => {
    /**
     * An action represents what is being added to
     * the live chat. All actions have a `type` property,
     * including their item (if the action has an item).
     *
     * Below are a few examples of how this can be used.
     */

    if (action.is(YTNodes.AddChatItemAction)) {
      const item = action.as(YTNodes.AddChatItemAction).item;

      if (!item)
        return console.info('Action did not have an item.', action);

      const hours = new Date(item.hasKey('timestamp') ? item.timestamp : Date.now()).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });

      switch (item.type) {
        case 'LiveChatTextMessage':
          console.info(
            `${hours} - ${item.as(YTNodes.LiveChatTextMessage).author?.name.toString()}:\n` +
            `${item.as(YTNodes.LiveChatTextMessage).message.toString()}\n`
          );
          break;
        case 'LiveChatPaidMessage':
          console.info(
            `${hours} - ${item.as(YTNodes.LiveChatPaidMessage).author.name.toString()}:\n` +
            `${item.as(YTNodes.LiveChatPaidMessage).purchase_amount}\n`
          );
          break;
        default:
          console.debug(action);
          break;
      }
    }

    if (action.is(YTNodes.MarkChatItemAsDeletedAction)) {
      console.warn(`Message ${action.target_item_id} just got deleted and should be replaced with ${action.deleted_state_message.toString()}!`, '\n');
    }
  });

  livechat.on('metadata-update', (metadata: LiveMetadata) => {
    console.info(`
      VIEWS: ${metadata.views?.view_count.toString()}
      LIKES: ${metadata.likes?.default_text}
      DATE: ${metadata.date?.date_text}
    `);
  });

  livechat.start();
})();