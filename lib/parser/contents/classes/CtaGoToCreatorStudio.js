'use strict';

class CtaGoToCreatorStudio {
  type = 'ctaGoToCreatorStudioModel';
  
  constructor(data) {
    this.title = data.buttonLabel;
    this.use_new_specs = data.useNewSpecs; 
    // Is this even useful?
  }
}

module.exports = CtaGoToCreatorStudio; 