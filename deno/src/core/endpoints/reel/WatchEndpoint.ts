import type { IReelWatchRequest, ReelWatchEndpointOptions } from '../../../types/index.ts';

export const PATH = '/reel/reel_item_watch';

/**
 * Builds a `/reel/reel_watch_sequence` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: ReelWatchEndpointOptions): IReelWatchRequest {
  return {
    playerRequest: {
      videoId: opts.short_id,
      params: opts.params ?? 'CAUwAg%3D%3D'
    },
    params: opts.params ?? 'CAUwAg%3D%3D'
  };
}