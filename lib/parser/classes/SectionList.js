import Parser from "../index.js";

import { YTNode } from "..";

class SectionList extends YTNode {
    static type = 'SectionList';
    constructor(data) {
        super();
        if (data.targetId) {
            this.target_id = data.targetId;
        }
        this.contents = Parser.parse(data.contents);
        if (data.continuations) {
            if (data.continuations[0].nextContinuationData) {
                this.continuation = data.continuations[0].nextContinuationData.continuation;
            }
            else if (data.continuations[0].reloadContinuationData) {
                this.continuation = data.continuations[0].reloadContinuationData.continuation;
            }
        }
        if (data.header) {
            this.header = Parser.parse(data.header);
        }
    }
}
export default SectionList;
