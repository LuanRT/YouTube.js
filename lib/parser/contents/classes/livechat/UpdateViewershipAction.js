'use strict';

const Text = require('../Text');

class UpdateViewershipAction {
  type = 'UpdateViewershipAction';
  
  constructor(data) {
    const view_count_renderer = data.viewCount.videoViewCountRenderer;
    
    this.view_count = new Text(view_count_renderer.viewCount);
    this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
    this.is_live = view_count_renderer.isLive;
  }
}

module.exports = UpdateViewershipAction;