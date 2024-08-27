import type { IPlayerRequest, PlayerEndpointOptions } from '../../types/index.ts';

export const PATH = '/player';

/**
 * Builds a `/player` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: PlayerEndpointOptions): IPlayerRequest {
  const payload: IPlayerRequest = {
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
    videoId: opts.video_id
  };

  if (opts.client)
    payload.client = opts.client;

  if (opts.playlist_id)
    payload.playlistId = opts.playlist_id;

  if (opts.params)
    payload.params = opts.params;

  if (opts.po_token)
    payload.serviceIntegrityDimensions = {
      poToken: opts.po_token
    };

  return payload;
}