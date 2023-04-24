import type { InnerTubeClient } from '../../Innertube.js';

export interface SearchEndpointOptions {
  /**
   * The query to search for.
   */
  query?: string;
  /**
   * Additional protobuf parameters.
   */
  params?: string;
  /**
   * The continuation token. Mostly sed for pagination.
   */
  continuation?: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type ISearchRequest = SearchEndpointOptions;

/**
 * Represents InnerTube's `/search` endpoint.
 * @example
 * ```typescript
 * const search_payload = SearchEndpoint.build({
 *   query: 'Minecraft Subwoofer Lullaby'
 * });
 *
 * const response = await yt.actions.execute(SearchEndpoint.PATH, search_payload);
 * console.log(response);
 * ```
 */
export default class SearchEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/search' = '/search' as const;

  /**
   * Builds a `/search` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: SearchEndpointOptions): ISearchRequest {
    return {
      ...{
        query: opts.query,
        params: opts.params,
        continuation: opts.continuation,
        client: opts.client
      }
    };
  }
}