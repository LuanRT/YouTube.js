export = TwoColumnWatchNextResult;
declare class TwoColumnWatchNextResult {
    constructor(item: any);
    type: string;
    primary: any;
    secondary: any;
    playlist: {
        current_index: any;
        endpoint: NavigationEndpoint;
        is_course: any;
        is_infinite: any;
        author: Author;
        save: any;
        title: NavigatableText;
        videos: any;
        contents: any;
    };
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Author = require("./Author");
import NavigatableText = require("./NavigatableText");
