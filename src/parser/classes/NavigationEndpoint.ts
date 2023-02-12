import Parser from '../index.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IParsedResponse } from '../types/ParsedResponse.js';
import { YTNode } from '../helpers.js';
import CreatePlaylistDialog from './CreatePlaylistDialog.js';

class NavigationEndpoint extends YTNode {
  static type = 'NavigationEndpoint';

  payload;
  dialog?;

  metadata: {
    url?: string;
    api_url?: string;
    page_type?: string;
    send_post?: boolean;
  };

  constructor(data: any) {
    super();

    // This is only present in Android nav endpoints
    if (Reflect.has(data || {}, 'innertubeCommand'))
      data = data.innertubeCommand;

    const name = Object.keys(data || {})
      .find((item) =>
        item.endsWith('Endpoint') ||
        item.endsWith('Command')
      );

    this.payload = name ? Reflect.get(data, name) : {};

    if (Reflect.has(this.payload, 'dialog')) {
      this.dialog = Parser.parse(this.payload.dialog);
    }

    if (data?.serviceEndpoint) {
      data = data.serviceEndpoint;
    }

    this.metadata = {};

    if (data?.commandMetadata?.webCommandMetadata?.url) {
      this.metadata.url = data.commandMetadata.webCommandMetadata.url;
    }

    if (data?.commandMetadata?.webCommandMetadata?.webPageType) {
      this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
    }

    if (data?.commandMetadata?.webCommandMetadata?.apiUrl) {
      this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace('/youtubei/v1/', '');
    } else if (name) {
      this.metadata.api_url = this.getEndpoint(name);
    }

    if (data?.commandMetadata?.webCommandMetadata?.sendPost) {
      this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
    }

    if (data?.createPlaylistEndpoint) {
      if (data?.createPlaylistEndpoint.createPlaylistDialog) {
        this.dialog = Parser.parseItem(data?.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog);
      }
    }
  }

  /**
   * Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.
   */
  getEndpoint(name: string) {
    switch (name) {
      case 'browseEndpoint':
        return '/browse';
      case 'watchEndpoint':
        return '/player';
      case 'searchEndpoint':
        return '/search';
      case 'watchPlaylistEndpoint':
        return '/next';
      case 'liveChatItemContextMenuEndpoint':
        return 'live_chat/get_item_context_menu';
    }
  }

  call<T extends IParsedResponse>(actions: Actions, args: { [ key: string ]: any; parse: true }): Promise<T>;
  call(actions: Actions, args?: { [ key: string ]: any; parse?: false }): Promise<ApiResponse>;
  call(actions: Actions, args?: { [ key: string ]: any; parse?: boolean }): Promise<IParsedResponse | ApiResponse> {
    if (!actions)
      throw new Error('An active caller must be provided');
    if (!this.metadata.api_url)
      throw new Error('Expected an api_url, but none was found, this is a bug.');
    return actions.execute(this.metadata.api_url, { ...this.payload, ...args });
  }

  toURL(): string | undefined {
    if (!this.metadata.url)
      return undefined;
    if (!this.metadata.page_type)
      return undefined;
    return (
      this.metadata.page_type === 'WEB_PAGE_TYPE_UNKNOWN' ?
        this.metadata.url : `https://www.youtube.com${this.metadata.url}`
    );
  }
}

export default NavigationEndpoint;