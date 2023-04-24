import type { InnerTubeClient } from '../../Innertube.js';

export interface NextEndpointOptions {
  /**
   * The video ID.
   */
  video_id?: string;
  /**
   * The playlist associated with the video.
   */
  playlist_id?: string;
  /**
   * Protobuf parameters.
   */
  params?: string;
  /**
   * The playlist index.
   */
  playlist_index?: number;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
  /**
   * The continuation token. Mostly used for pagination.
   */
  continuation?: string;
}

export interface INextRequest {
  videoId?: string;
  playlistId?: string;
  params?: string;
  playlistIndex?: number;
  client?: InnerTubeClient;
  continuation?: string;
}

/**
 * Represents InnerTube's `/next` endpoint.
 * @example
 * ```typescript
 * const next_payload = NextRequest.build({
 *  video_id: 'dQw4w9WgXcQ',
 *  client: 'ANDROID'
 * });
 *
 * const response = await yt.actions.execute(NextEndpoint.PATH, next_payload);
 * console.log(response);
 * ```
 */
export default class NextEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/next' = '/next' as const;

  /**
   * Builds a `/next` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: NextEndpointOptions): INextRequest {
    return {
      ...{
        videoId: opts.video_id,
        playlistId: opts.playlist_id,
        params: opts.params,
        playlistIndex: opts.playlist_index,
        client: opts.client,
        continuation: opts.continuation
      }
    };
  }
}