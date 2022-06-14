export = MetadataRow;
declare class MetadataRow {
    constructor(data: any);
    type: string;
    title: Text;
    contents: any;
}
import Text = require("./Text");
