import type { IChannelEditNameRequest, ChannelEditNameEndpointOptions } from '../../../types/index.js';

export const PATH = '/channel/edit_name';

/**
 * Builds a `/channel/edit_name` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: ChannelEditNameEndpointOptions): IChannelEditNameRequest {
  return {
    givenName: options.given_name,
    client: 'ANDROID'
  };
}