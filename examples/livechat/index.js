import Innertube from '../..';

const session = await new Innertube();

const info = await session.getInfo('video_id');
const livechat = await info.getLiveChat();

livechat.ev.on('start', (initial_data) => {
  /**
	 * Initial info is what you see when you first open a Live Chat — this is; inital actions, account's info and so on.
	 */
	 
	console.info(`Hey ${initial_data.viewer_name}, welcome to ${info.basic_info.channel.name}\'s Live Chat!`);
});

livechat.ev.on('chat-update', (action) => {
  /**
   * An action represents what is being added to 
   * the live chat. All actions have a `type` property,
   * including their item (if the action has an item).
   * 
   * Below are a few examples of how this can be used.
   */
  
  if (action.type === 'AddChatItemAction') {
    const hours = new Date(action.item.timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
      
    switch (action.item.type) {
      case 'LiveChatTextMessage':
        console.info(
          `${hours} - ${action.item.author.name.toString()}:\n` +
          `${action.item.message.toString()}\n`
        );
        break;
      case 'LiveChatPaidMessage':
        console.info(`
          ${hours} - ${action.item.author.name.toString()}
          ${action.item.purchase_amount}
        `);
        break;
      default:
        console.debug(action);
    }
  }
  
  if (action.type === 'MarkChatItemAsDeletedAction') {
    console.warn(`Message ${action.target_item_id} just got deleted and should be replaced with ${action.delete_state_message.toString()}!`);
	}
});

livechat.ev.on('metadata-update', (metadata) => {
  console.info(`
    VIEWS: ${metadata.views.view_count.toString()} 
    LIKES: ${metadata.likes.default_text}
    DATE: ${metadata.date.date_text}
  `);
});

livechat.start();
