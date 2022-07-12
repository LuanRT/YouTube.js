
import { YTNode } from "..";

class CtaGoToCreatorStudio extends YTNode {
    static #type = Symbol('CtaGoToCreatorStudio');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = data.buttonLabel;
        this.use_new_specs = data.useNewSpecs;
        // Is this even useful?
    }
}
export default CtaGoToCreatorStudio;
