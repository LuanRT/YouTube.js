import { ISearchRequest, SearchEndpointOptions } from '../../types/index.js';

export const PATH = '/search';

/**
 * Builds a `/search` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: SearchEndpointOptions): ISearchRequest {
  return {
    ...{
      query: opts.query,
      params: opts.params,
      continuation: opts.continuation,
      client: opts.client
    }
  };
}