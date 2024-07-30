import type { IReelWatchSequenceRequest, ReelWatchSequenceEndpointOptions } from '../../../types/index.js';

export const PATH = '/reel/reel_watch_sequence';

/**
 * Builds a `/reel/reel_watch_sequence` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: ReelWatchSequenceEndpointOptions): IReelWatchSequenceRequest {
  return {
    sequenceParams: opts.sequence_params
  };
}