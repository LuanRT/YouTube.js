import type { InnerTubeClient } from '../../Innertube.js';

export interface BrowseEndpointOptions {
  /**
   * The browse ID.
   */
  browse_id?: string;
  /**
   * Additional protobuf parameters.
   */
  params?: string;
  /**
   * The continuation token. Mostly used for pagination.
   */
  continuation?: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export interface IBrowseRequest {
  browseId?: string;
  params?: string;
  continuation?: string;
  client?: InnerTubeClient;
}

/**
 * Represents InnerTube's `/browse` endpoint.
 * @example
 * ```typescript
 * const browse_payload = BrowseEndpoint.build({
 *   browse_id: 'FEtrending'
 * });
 *
 * const response = await yt.actions.execute(BrowseEndpoint.PATH, browse_payload);
 * console.log(response);
 * ```
 */
export default class BrowseEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/browse' = '/browse' as const;

  /**
   * Builds a `/browse` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: BrowseEndpointOptions): IBrowseRequest {
    return {
      ...{
        browseId: opts.browse_id,
        params: opts.params,
        continuation: opts.continuation,
        client: opts.client
      }
    };
  }
}