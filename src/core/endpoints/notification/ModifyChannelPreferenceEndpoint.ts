import type { IModifyChannelPreferenceRequest, ModifyChannelPreferenceEndpointOptions } from '../../../types/index.js';

export const PATH = '/notification/modify_channel_preference';

/**
 * Builds a `/notification/modify_channel_preference` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: ModifyChannelPreferenceEndpointOptions): IModifyChannelPreferenceRequest {
  return {
    params: options.params,
    ...{
      client: options.client
    }
  };
}