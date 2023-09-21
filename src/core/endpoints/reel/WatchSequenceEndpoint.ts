import type {IReelSequenceRequest, ReelWatchSequenceEndpointOptions} from '../../../types/index.js';

export const PATH = '/reel/reel_watch_sequence';

/**
 * Builds a `/reel/reel_watch_sequence` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: ReelWatchSequenceEndpointOptions): IReelSequenceRequest {
  return {
    context: {},
    sequenceParams: opts.sequenceParams
  };
}