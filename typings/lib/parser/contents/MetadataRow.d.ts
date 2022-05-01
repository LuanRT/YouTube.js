export = MetadataRow;
declare class MetadataRow {
    constructor(item: any);
    type: string;
    contents: Text;
    title: Text;
}
import Text = require("./Text");
