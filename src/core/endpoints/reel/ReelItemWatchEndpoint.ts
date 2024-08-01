import type { IReelItemWatchRequest, ReelItemWatchEndpointOptions } from '../../../types/index.js';

export const PATH = '/reel/reel_item_watch';

/**
 * Builds a `/reel/reel_watch_sequence` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: ReelItemWatchEndpointOptions): IReelItemWatchRequest {
  return {
    disablePlayerResponse: false,
    playerRequest: {
      videoId: opts.video_id,
      params: opts.params ?? 'CAUwAg%3D%3D'
    },
    params: opts.params ?? 'CAUwAg%3D%3D',
    client: opts.client
  };
}