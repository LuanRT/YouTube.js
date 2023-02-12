import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class LiveChat extends YTNode {
  static type = 'LiveChat';

  header;
  initial_display_state: string;
  continuation: string;

  client_messages: {
    reconnect_message: Text;
    unable_to_reconnect_message: Text;
    fatal_error: Text;
    reconnected_message: Text;
    generic_error: Text;
  };

  is_replay: boolean;

  constructor(data: any) {
    super();
    this.header = Parser.parse(data.header);
    this.initial_display_state = data.initialDisplayState;
    this.continuation = data.continuations[0]?.reloadContinuationData?.continuation;

    this.client_messages = {
      reconnect_message: new Text(data.clientMessages.reconnectMessage),
      unable_to_reconnect_message: new Text(data.clientMessages.unableToReconnectMessage),
      fatal_error: new Text(data.clientMessages.fatalError),
      reconnected_message: new Text(data.clientMessages.reconnectedMessage),
      generic_error: new Text(data.clientMessages.genericError)
    };

    this.is_replay = data.isReplay || false;
  }
}

export default LiveChat;