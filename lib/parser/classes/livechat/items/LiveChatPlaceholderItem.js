
class LiveChatPlaceholderItem {
    static #type = Symbol('LiveChatPlaceholderItem');
    static get type() { return this.#type }
    constructor(data) {
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    }
}
export default LiveChatPlaceholderItem;
