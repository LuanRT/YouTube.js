'use strict';

const Parser = require('../..');

class ReplayChatItemAction {
  type = 'ReplayChatItemAction';

  constructor(data) {
    this.actions = Parser.parse(data.actions?.map((action) => {
      delete action.clickTrackingParams;
      return action;
    })) || [];

    this.video_offset_time_msec = data.videoOffsetTimeMsec;
  }
}

module.exports = ReplayChatItemAction;