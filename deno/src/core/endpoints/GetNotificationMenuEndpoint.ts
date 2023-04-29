import type { IGetNotificationMenuRequest, GetNotificationMenuEndpointOptions } from '../../types/index.ts';

export const PATH = '/notification/get_notification_menu';

/**
 * Builds a `/get_notification_menu` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export function build(opts: GetNotificationMenuEndpointOptions): IGetNotificationMenuRequest {
  return {
    ...{
      notificationsMenuRequestType: opts.notifications_menu_request_type
    }
  };
}