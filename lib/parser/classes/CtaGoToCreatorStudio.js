'use strict';

class CtaGoToCreatorStudio {
  type = 'CtaGoToCreatorStudio';

  constructor(data) {
    this.title = data.buttonLabel;
    this.use_new_specs = data.useNewSpecs;
    // Is this even useful?
  }
}

module.exports = CtaGoToCreatorStudio;