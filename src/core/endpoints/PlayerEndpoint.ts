import type { InnerTubeClient } from '../../Innertube.js';

export interface PlayerEndpointOptions {
  /**
   * The video ID.
   */
  video_id: string;
  /**
   * The player's signature timestamp.
   */
  sts?: number;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
  /**
   * The playlist ID.
   */
  playlist_id?: string;
}

export interface IPlayerRequest {
  playbackContext: {
    contentPlaybackContext: {
      vis: number;
      splay: boolean;
      referer: string;
      currentUrl: string;
      autonavState: string;
      signatureTimestamp?: number;
      autoCaptionsDefaultOn: boolean;
      html5Preference: string;
      lactMilliseconds: string;
    }
  },
  videoId: string;
  racyCheckOk: boolean;
  contentCheckOk: boolean;
  client?: InnerTubeClient;
  playlistId?: string;
}

/**
 * Represents InnerTube's `/player` endpoint.
 * @example
 * ```typescript
 * const player_payload = PlayerEndpoint.build({
 *   video_id: 'dQw4w9WgXcQ',
 *   client: 'ANDROID'
 * });
 *
 * const response = await yt.actions.execute(PlayerEndpoint.PATH, player_payload);
 * console.log(response);
 * ```
 */
export default class PlayerEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/player' = '/player' as const;

  /**
   * Builds a `/player` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: PlayerEndpointOptions): IPlayerRequest {
    return {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          referer: opts.playlist_id ?
            `https://www.youtube.com/watch?v=${opts.video_id}&list=${opts.playlist_id}` :
            `https://www.youtube.com/watch?v=${opts.video_id}`,
          currentUrl: opts.playlist_id ?
            `/watch?v=${opts.video_id}&list=${opts.playlist_id}` :
            `/watch?v=${opts.video_id}`,
          autonavState: 'STATE_ON',
          autoCaptionsDefaultOn: false,
          html5Preference: 'HTML5_PREF_WANTS',
          lactMilliseconds: '-1',
          ...{
            signatureTimestamp: opts.sts
          }
        }
      },
      racyCheckOk: true,
      contentCheckOk: true,
      videoId: opts.video_id,
      ...{
        client: opts.client,
        playlistId: opts.playlist_id
      }
    };
  }
}