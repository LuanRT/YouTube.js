import type { IPlayerRequest, PlayerEndpointOptions } from '../../types/index.ts';

export const PATH = '/player';

/**
 * Builds a `/player` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: PlayerEndpointOptions): IPlayerRequest {
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
    attestationRequest: {
      omitBotguardData: true
    },
    racyCheckOk: true,
    contentCheckOk: true,
    videoId: opts.video_id,
    ...{
      client: opts.client,
      playlistId: opts.playlist_id,
      params: opts.params
    }
  };
}