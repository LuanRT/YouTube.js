export = MusicSearchSuggestionItem;
declare class MusicSearchSuggestionItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        text: any;
        bold_text: any;
    };
}
