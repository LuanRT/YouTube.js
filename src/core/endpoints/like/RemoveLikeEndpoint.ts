import type { IRemoveLikeRequest, RemoveLikeEndpointOptions } from '../../../types/index.js';

export const PATH = '/like/removelike';

/**
 * Builds a `/like/removelike` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: RemoveLikeEndpointOptions): IRemoveLikeRequest {
  return {
    target: {
      videoId: options.target.video_id
    },
    ...{
      client: options.client
    }
  };
}