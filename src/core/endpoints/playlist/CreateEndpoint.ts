import { ICreatePlaylistRequest, CreatePlaylistEndpointOptions } from '../../../types/index.js';

export const PATH = '/playlist/create';

/**
 * Builds a `/playlist/create` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: CreatePlaylistEndpointOptions): ICreatePlaylistRequest {
  return {
    title: opts.title,
    ids: opts.ids
  };
}