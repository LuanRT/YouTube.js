import type { ICreateVideoRequest, CreateVideoEndpointOptions } from '../../../types/index.js';

export const PATH = '/upload/createvideo';

/**
 * Builds a `/upload/createvideo` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: CreateVideoEndpointOptions): ICreateVideoRequest {
  return {
    resourceId: {
      scottyResourceId: {
        id: opts.resource_id.scotty_resource_id.id
      }
    },
    frontendUploadId: opts.frontend_upload_id,
    initialMetadata: {
      title: {
        newTitle: opts.initial_metadata.title.new_title
      },
      description: {
        newDescription: opts.initial_metadata.description.new_description,
        shouldSegment: opts.initial_metadata.description.should_segment
      },
      privacy: {
        newPrivacy: opts.initial_metadata.privacy.new_privacy
      },
      draftState: {
        isDraft: !!opts.initial_metadata.draft_state.is_draft
      }
    },
    ...{
      client: opts.client
    }
  };
}