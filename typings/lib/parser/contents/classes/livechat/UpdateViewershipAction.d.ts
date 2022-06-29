export = UpdateViewershipAction;
declare class UpdateViewershipAction {
    constructor(data: any);
    type: string;
    view_count: Text;
    extra_short_view_count: Text;
    is_live: any;
}
import Text = require("../Text");
