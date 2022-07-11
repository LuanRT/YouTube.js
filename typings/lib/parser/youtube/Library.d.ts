export = Library;
/** @namespace */
declare class Library {
    /**
     * @param {object} response - API response.
     * @param {import('../../core/Actions')} actions
     */
    constructor(response: object, actions: import('../../core/Actions'));
    profile: {
        stats: any;
        user_info: any;
    };
    /** @type {{ type: string, title: import('../classes/Text'), contents: object[], getAll: Promise.<Playlist | History | Feed> }[] } */
    sections: {
        type: string;
        title: import('../classes/Text');
        contents: object[];
        getAll: Promise<Playlist | History | Feed>;
    }[];
    get history(): any;
    get watch_later(): any;
    get liked_videos(): any;
    get playlists(): any;
    get clips(): any;
    get page(): any;
    #private;
}
import Playlist = require("./Playlist");
import History = require("./History");
import Feed = require("../../core/Feed");
