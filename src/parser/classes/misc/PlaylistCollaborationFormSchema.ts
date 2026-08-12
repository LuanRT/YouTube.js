import type { RawNode } from '../../types/RawResponse.js';

type PlaylistCollaborationFormData = {
  collaborator_channel_ids?: string[] | undefined;
  is_allow_new_collaborators_enabled?: boolean | undefined;
  is_collaboration_enabled?: boolean | undefined;
  is_invite_collaborators_button_enabled?: boolean | undefined;
}

export default class PlaylistCollaborationFormSchema {
  public id: string;
  public initial_values?: PlaylistCollaborationFormData;

  constructor(data: RawNode) {
    this.id = data.id;

    if ('initialValues' in data) {
      this.initial_values = {
        collaborator_channel_ids: data.initialValues?.collaboratorChannelIds,
        is_allow_new_collaborators_enabled: data.initialValues?.isAllowNewCollaboratorsEnabled,
        is_collaboration_enabled: data.initialValues?.isCollaborationEnabled,
        is_invite_collaborators_button_enabled: data.initialValues?.isInviteCollaboratorsButtonEnabled
      };
    }
  }
}