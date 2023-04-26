import type { IChannelEditDescriptionRequest, ChannelEditDescriptionEndpointOptions } from '../../../types/Endpoints.js';

export const PATH = '/channel/edit_description';

/**
 * Builds a `/channel/edit_description` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: ChannelEditDescriptionEndpointOptions): IChannelEditDescriptionRequest {
  return {
    givenDescription: options.given_description,
    client: 'ANDROID'
  };
}