import { Innertube, UniversalCache, YTNodes } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(false) });

  const search = await yt.search('lofi hip hop radio - beats to relax/study to');
  const info = await yt.getInfo(search.videos[0].as(YTNodes.Video).id);

  const livechat = info.getLiveChat();

  livechat.on('start', (initial_data) => {
    /**
     * Initial info is what you see when you first open a a live chat — this is; initial actions (pinned messages, top donations..), account's info and so forth.
     */
    console.info(`Hey ${initial_data.viewer_name || 'Guest'}, welcome to Live Chat!`);

    const pinned_action = initial_data.actions.firstOfType(YTNodes.AddBannerToLiveChatCommand);

    if (pinned_action) {
      if (pinned_action.banner?.contents?.is(YTNodes.LiveChatTextMessage)) {
        console.info(
          '\n', 'Pinned message:\n',
          pinned_action.banner.contents.author?.name.toString(), '-', pinned_action?.banner.contents.message.toString(),
          '\n'
        );
      }
    }
  });

  livechat.on('error', (error: Error) => console.info('Live chat error:', error));

  livechat.on('end', () => console.info('This live stream has ended.'));

  livechat.on('chat-update', (action) => {
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
            `${item.as(YTNodes.LiveChatTextMessage).author?.is_moderator ? '[MOD]' : ''}`,
            `${hours} - ${item.as(YTNodes.LiveChatTextMessage).author?.name.toString()}:\n` +
            `${item.as(YTNodes.LiveChatTextMessage).message.toString()}\n`
          );
          break;
        case 'LiveChatPaidMessage':
          console.info(
            `${item.as(YTNodes.LiveChatPaidMessage).author?.is_moderator ? '[MOD]' : ''}`,
            `${hours} - ${item.as(YTNodes.LiveChatPaidMessage).author.name.toString()}:\n` +
            `${item.as(YTNodes.LiveChatPaidMessage).message.toString()}\n`,
            `${item.as(YTNodes.LiveChatPaidMessage).purchase_amount}\n`
          );
          break;
        case 'LiveChatPaidSticker':
          console.info(
            `${item.as(YTNodes.LiveChatPaidSticker).author?.is_moderator ? '[MOD]' : ''}`,
            `${hours} - ${item.as(YTNodes.LiveChatPaidSticker).author.name.toString()}:\n` +
            `${item.as(YTNodes.LiveChatPaidSticker).purchase_amount}\n`
          );
          break;
        default:
          console.debug(action);
          break;
      }
    }

    if (action.is(YTNodes.AddBannerToLiveChatCommand)) {
      console.info('Message pinned:', action.banner?.contents);
    }

    if (action.is(YTNodes.RemoveBannerForLiveChatCommand)) {
      console.info(`Message with action id ${action.target_action_id} was unpinned.`);
    }

    if (action.is(YTNodes.RemoveChatItemAction)) {
      console.warn(`Message with action id ${action.target_item_id} just got deleted!`, '\n');
    }
  });

  livechat.on('metadata-update', (metadata) => {
    console.info(`
      VIEWS: ${metadata.views?.view_count.toString()}
      LIKES: ${metadata.likes?.default_text}
      DATE: ${metadata.date?.date_text}
    `);
  });

  livechat.start();
})();