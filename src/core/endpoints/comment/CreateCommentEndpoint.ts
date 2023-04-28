import type { ICreateCommentRequest, CreateCommentEndpointOptions } from '../../../types/index.js';

export const PATH = '/comment/create_comment';

/**
 * Builds a `/comment/create_comment` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: CreateCommentEndpointOptions): ICreateCommentRequest {
  return {
    commentText: options.comment_text,
    createCommentParams: options.create_comment_params,
    ...{
      client: options.client
    }
  };
}