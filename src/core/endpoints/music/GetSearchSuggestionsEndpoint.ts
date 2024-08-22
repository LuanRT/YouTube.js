import type { IMusicGetSearchSuggestionsRequest, MusicGetSearchSuggestionsEndpointOptions } from '../../../types/index.js';

export const PATH = '/music/get_search_suggestions';

/**
 * Builds a `/music/get_search_suggestions` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: MusicGetSearchSuggestionsEndpointOptions): IMusicGetSearchSuggestionsRequest {
  return {
    input: opts.input,
    client: 'YTMUSIC'
  };
}