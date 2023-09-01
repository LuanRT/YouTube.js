import type { IEditPlaylistRequest, EditPlaylistEndpointOptions } from '../../../types/index.js';

export const PATH = '/browse/edit_playlist';

/**
 * Builds a `/browse/edit_playlist` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: EditPlaylistEndpointOptions): IEditPlaylistRequest {
  return {
    playlistId: opts.playlist_id,
    actions: opts.actions.map((action) => ({
      action: action.action,
      ...{
        addedVideoId: action.added_video_id,
        setVideoId: action.set_video_id,
        movedSetVideoIdPredecessor: action.moved_set_video_id_predecessor,
        playlistDescription: action.playlist_description,
        playlistName: action.playlist_name
      }
    }))
  };
}