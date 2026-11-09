import type { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class PlaylistCollaborationViewModelPlaylistCollaboratorData {
  public remove_collaborator_confirmation_dialog: YTNode | null;
  public external_channel_id?: string;
  public collaborator_content_list_item: YTNode | null;

  constructor(data: RawNode) {
    this.remove_collaborator_confirmation_dialog = Parser.parseItem(data.removeCollaboratorConfirmationDialog);
    this.external_channel_id = data.externalChannelId;
    this.collaborator_content_list_item = Parser.parseItem(data.collaboratorContentListItem);
  }
}