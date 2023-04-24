export interface GetNotificationMenuEndpointOptions {
  /**
   * The type of notifications to request.
   */
  notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX' | 'NOTIFICATIONS_MENU_REQUEST_TYPE_COMMENTS';
}

export interface IGetNotificationMenuRequest {
  notificationsMenuRequestType: string;
}

/**
 * Represents InnerTube's `/notification/get_notification_menu` endpoint.
 * @example
 * ```typescript
 * const get_notification_menu_payload = GetNotificationMenuEndpoint.build({
 *   notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
 * });
 *
 * const response = await yt.actions.execute(GetNotificationMenuEndpoint.PATH, get_notification_menu_payload);
 * console.log(response);
 * ```
 */

export default class GetNotificationMenuEndpoint {
  /**
   * The endpoint's path.
   */
  static PATH: '/notification/get_notification_menu' = '/notification/get_notification_menu' as const;

  /**
   * Builds a `/get_notification_menu` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  static build(opts: GetNotificationMenuEndpointOptions): IGetNotificationMenuRequest {
    return {
      ...{
        notificationsMenuRequestType: opts.notifications_menu_request_type
      }
    };
  }
}