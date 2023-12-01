import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import ToggleButton from '../ToggleButton.js';
import Thumbnail from '../misc/Thumbnail.js';
import type Actions from '../../../core/Actions.js';
import { InnertubeError } from '../../../utils/Utils.js';
import { type ApiResponse } from '../../../core/Actions.js';

export default class KidsBlocklistPickerItem extends YTNode {
  static type = 'KidsBlocklistPickerItem';

  #actions?: Actions;

  child_display_name: Text;
  child_account_description: Text;
  avatar: Thumbnail[];
  block_button: ToggleButton | null;
  blocked_entity_key: string;

  constructor(data: RawNode) {
    super();
    this.child_display_name = new Text(data.childDisplayName);
    this.child_account_description = new Text(data.childAccountDescription);
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.block_button = Parser.parseItem(data.blockButton, [ ToggleButton ]);
    this.blocked_entity_key = data.blockedEntityKey;
  }

  async blockChannel(): Promise<ApiResponse> {
    if (!this.#actions)
      throw new InnertubeError('An active caller must be provide to perform this operation.');

    const button = this.block_button;

    if (!button)
      throw new InnertubeError('Block button was not found.', { child_display_name: this.child_display_name });

    if (button.is_toggled)
      throw new InnertubeError('This channel is already blocked.', { child_display_name: this.child_display_name });

    const response = await button.endpoint.call(this.#actions, { parse: false });
    return response;
  }

  setActions(actions: Actions | undefined) {
    this.#actions = actions;
  }
}