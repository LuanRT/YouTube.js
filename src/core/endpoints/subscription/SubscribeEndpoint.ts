import type { ISubscribeRequest, SubscribeEndpointOptions } from '../../../types/index.js';

export const PATH = '/subscription/subscribe';

/**
 * Builds a `/subscription/subscribe` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: SubscribeEndpointOptions): ISubscribeRequest {
  return {
    channelIds: options.channel_ids,
    ...{
      client: options.client,
      params: options.params
    }
  };
}