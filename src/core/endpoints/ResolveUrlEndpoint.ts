export interface IResolveUrlRequest {
  /**
   * The URL to resolve.
   */
  url: string;
}

export type IResolveUrlOptions = IResolveUrlRequest;

/**
 * Represents InnerTube's `/navigation/resolve_url` endpoint.
 * @example
 * ```typescript
 * const resolve_url_payload = ResolveUrlEndpoint.build({
 *  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
 * });
 *
 * const response = await yt.actions.execute(ResolveUrlEndpoint.PATH, resolve_url_payload);
 * console.log(response);
 * ```
 */
export default class ResolveUrlEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/navigation/resolve_url' = '/navigation/resolve_url' as const;

  /**
   * Builds a `/resolve_url` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: IResolveUrlOptions): IResolveUrlRequest {
    return {
      ...{
        url: opts.url
      }
    };
  }
}