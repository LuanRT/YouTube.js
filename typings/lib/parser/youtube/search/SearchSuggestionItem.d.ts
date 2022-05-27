export = SearchSuggestionItem;
declare class SearchSuggestionItem {
    static parse(data: any): {
        query: any;
        results: any;
    };
}
