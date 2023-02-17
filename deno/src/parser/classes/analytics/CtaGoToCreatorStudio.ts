import { YTNode } from '../../helpers.ts';

class CtaGoToCreatorStudio extends YTNode {
  static type = 'CtaGoToCreatorStudio';

  title: string;
  use_new_specs: boolean;

  constructor(data: any) {
    super();
    this.title = data.buttonLabel;
    this.use_new_specs = data.useNewSpecs;
    // Is this even useful?
  }
}

export default CtaGoToCreatorStudio;