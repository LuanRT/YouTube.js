const Parser = require('..');
const Utils = require('../../utils/Utils');
const NavigationEndpoint = require('./NavigationEndpoint');

class ContinuationItem {
  type = 'ContinuationItem';

  is_resolved = false;
  is_rejected = false;
  pending_promise = null;

  constructor(data) {
    this.trigger = data.trigger;
    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }

  async call(session) {
    if (this.is_resolved || this.is_rejected) return;
    this.pending_promise = this.endpoint.call(session);
    const response = await this.pending_promise;
    if (!response.success) {
      this.is_rejected = true;
      throw new Utils.InnertubeError('Could not retrieve continuation', response);
    }

    this.response = Parser.parseResponse(response.data);
        
    this.is_resolved = true;

    return this;
  }
}

module.exports = ContinuationItem;