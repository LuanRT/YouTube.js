export = NotificationsMenu;
declare class NotificationsMenu {
    /**
     * @param {import('../../core/Actions')} actions
     * @param {object} response - API response.
     */
    constructor(actions: import('../../core/Actions'), response: object);
    /** @type {import('../classes/menus/SimpleMenuHeader')} */
    header: import('../classes/menus/SimpleMenuHeader');
    /** @type {import('../classes/Notification')} */
    contents: import('../classes/Notification');
    /**
     * Retrieves next batch of notifications.
     * @returns {Promise.<NotificationsMenu>}
     */
    getContinuation(): Promise<NotificationsMenu>;
    get page(): any;
    #private;
}
