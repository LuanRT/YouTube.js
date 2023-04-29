import type { IBrowseRequest, BrowseEndpointOptions } from '../../types/index.ts';

export const PATH = '/browse';

/**
 * Builds a `/browse` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: BrowseEndpointOptions): IBrowseRequest {
  return {
    ...{
      browseId: opts.browse_id,
      params: opts.params,
      continuation: opts.continuation,
      client: opts.client
    }
  };
}