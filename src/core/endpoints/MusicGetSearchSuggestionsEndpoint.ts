export interface MusicGetSearchSuggestionsEndpointOptions {
  /**
   * The query to search for.
   */
  input: string;
}

export interface IMusicGetSearchSuggestionsRequest extends MusicGetSearchSuggestionsEndpointOptions {
  client: 'YTMUSIC';
}

/**
 * Represents InnerTube's `/music/get_search_suggestions` endpoint.
 * @example
 * ```typescript
 * const search_payload = MusicGetSearchSuggestionsEndpoint.build({
 *  input: 'Minecraft Subwoofer Lullaby'
 * });
 *
 * const response = await yt.actions.execute(MusicGetSearchSuggestionsEndpoint.PATH, search_payload);
 * console.log(response);
 * ```
 */
export default class MusicGetSearchSuggestionsEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/music/get_search_suggestions' = '/music/get_search_suggestions' as const;

  /**
   * Builds a `/music/get_search_suggestions` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: MusicGetSearchSuggestionsEndpointOptions): IMusicGetSearchSuggestionsRequest {
    return {
      input: opts.input,
      client: 'YTMUSIC'
    };
  }
}