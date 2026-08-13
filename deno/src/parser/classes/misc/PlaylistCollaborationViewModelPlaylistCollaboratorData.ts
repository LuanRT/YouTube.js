import type { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';

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