import type { IDeletePlaylistRequest, DeletePlaylistEndpointOptions } from '../../../types/index.ts';

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