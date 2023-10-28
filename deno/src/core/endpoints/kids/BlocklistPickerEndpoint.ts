import type { IBlocklistPickerRequest, BlocklistPickerRequestEndpointOptions } from '../../../types/index.ts';

export const PATH = '/kids/get_kids_blocklist_picker';

/**
 * Builds a `/kids/get_kids_blocklist_picker` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options: BlocklistPickerRequestEndpointOptions): IBlocklistPickerRequest {
  return { blockedForKidsContent: { external_channel_id: options.channel_id } };
}