import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ToggleFormField extends YTNode {
  static type = 'ToggleFormField';

  label: Text;
  toggled: boolean;
  toggle_on_action: {
    click_tracking_params: string,
    command_metadata: {
      web_command_metadata: {
        send_post: boolean,
        api_url: string
      }
    },
    playlist_edit_endpoint: NavigationEndpoint
  };
  toggle_off_action: {
    click_tracking_params: string,
    command_metadata: {
      web_command_metadata: {
        send_post: boolean,
        api_url: string
      }
    },
    playlist_edit_endpoint: NavigationEndpoint
  };

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
    this.toggled = data.toggled;
    this.toggle_on_action = {
      click_tracking_params: data.toggleOnAction.clickTrackingParams,
      command_metadata: {
        web_command_metadata: {
          send_post: data.toggleOnAction.commandMetadata.webCommandMetadata.sendPost,
          api_url: data.toggleOnAction.commandMetadata.webCommandMetadata.apiUrl
        }
      },
      playlist_edit_endpoint: new NavigationEndpoint(data.toggleOnAction.playlistEditEndpoint)
    };
    this.toggle_off_action = {
      click_tracking_params: data.toggleOffAction.clickTrackingParams,
      command_metadata: {
        web_command_metadata: {
          send_post: data.toggleOffAction.commandMetadata.webCommandMetadata.sendPost,
          api_url: data.toggleOffAction.commandMetadata.webCommandMetadata.apiUrl
        }
      },
      playlist_edit_endpoint: new NavigationEndpoint(data.toggleOffAction.playlistEditEndpoint)
    };
  }
}