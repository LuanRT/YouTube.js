export = MusicSearchSuggestionItem;
declare class MusicSearchSuggestionItem {
    static parse(data: any): {
        query: any;
        results: any;
    };
    static parseItem(item: any): any;
}
