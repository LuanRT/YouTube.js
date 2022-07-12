
import { YTNode, ParserTypeSymbol } from "..";

class PlayerStoryboardSpec extends YTNode {
    static [ParserTypeSymbol] = 'PlayerStoryboardSpec';
    constructor(data) {
        super();
        const parts = data.spec.split('|');
        const url = new URL(parts.shift());
        this.boards = parts.map((part, i) => {
            let [thumbnail_width, thumbnail_height, thumbnail_count, columns, rows, interval, name, sigh] = part.split('#');
            url.searchParams.set('sigh', sigh);
            thumbnail_count = parseInt(thumbnail_count, 10);
            columns = parseInt(columns, 10);
            rows = parseInt(rows, 10);
            const storyboard_count = Math.ceil(thumbnail_count / (columns * rows));
            return {
                template_url: url.toString().replace('$L', i).replace('$N', name),
                thumbnail_width: parseInt(thumbnail_width, 10),
                thumbnail_height: parseInt(thumbnail_height, 10),
                thumbnail_count,
                interval: parseInt(interval, 10),
                columns,
                rows,
                storyboard_count
            };
        });
    }
}
export default PlayerStoryboardSpec;
