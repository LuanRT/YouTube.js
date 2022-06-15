export = MetadataRow;
declare class MetadataRow {
    constructor(item: any);
    type: string;
    contents: any;
    title: Text;
}
import Text = require("./Text");
