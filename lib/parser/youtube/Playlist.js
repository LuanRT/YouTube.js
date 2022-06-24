'use strict'

const Feed = require('../../core/Feed');

class Playlist extends Feed {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    
    const primary_info = this.page.sidebar.contents.get({ type: 'PlaylistSidebarPrimaryInfo' });
    const secondary_info = this.page.sidebar.contents.get({ type: 'PlaylistSidebarSecondaryInfo' });
    
    this.info = {
      ...this.page.metadata,
      ...{
        author: secondary_info.owner.author,
        thumbnails: primary_info.thumbnail_renderer.thumbnail,
        total_items: this.#getStat(0, primary_info),
        views: this.#getStat(1, primary_info),
        last_updated: this.#getStat(2, primary_info),
        can_share: this.page.header.can_share,
        can_delete: this.page.header.can_delete,
        is_editable: this.page.header.is_editable,
        privacy: this.page.header.privacy
      }
    }
    
    this.menu = primary_info.menu;
    this.endpoint = primary_info.endpoint;
  }

  #getStat(index, primary_info) {
    if (!primary_info || !primary_info.stats) return 'N/A';
    return primary_info.stats[index]?.toString() || 'N/A';
  }

  /**
   * @alias videos
   */
  get items() {
    return this.videos;
  }
}

module.exports = Playlist;