import type { IDislikeRequest, DislikeEndpointOptions } from '../../../types/index.js';

export const PATH = '/like/dislike';

/**
 * Builds a `/like/dislike` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: DislikeEndpointOptions): IDislikeRequest {
  return {
    target: {
      videoId: options.target.video_id
    },
    ...{
      client: options.client
    }
  };
}