import type { IAccountListRequest } from '../../../types/index.js';

export const PATH = '/account/accounts_list';

/**
 * Builds a `/account/accounts_list` request payload.
 * @returns The payload.
 */
export function build(): IAccountListRequest {
  return {
    client: 'ANDROID'
  };
}