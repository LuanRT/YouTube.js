import { IDeletePlaylistRequest, DeletePlaylistEndpointOptions } from '../../../types/index.js';

export const PATH = '/playlist/delete';

/**
 * Builds a `/playlist/delete` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: DeletePlaylistEndpointOptions): IDeletePlaylistRequest {
  return {
    playlistId: opts.playlist_id
  };
}