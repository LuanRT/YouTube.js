import type { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class PlaylistCollaborationViewModelPlaylistCollaboratorData {
  public removeCollaboratorConfirmationDialog: YTNode | null;
  public externalChannelId?: string;
  public collaboratorContentListItem: YTNode | null;

  constructor(data: RawNode) {
    this.removeCollaboratorConfirmationDialog = Parser.parseItem(data.removeCollaboratorConfirmationDialog);
    this.externalChannelId = data.externalChannelId;
    this.collaboratorContentListItem = Parser.parseItem(data.collaboratorContentListItem);
  }
}