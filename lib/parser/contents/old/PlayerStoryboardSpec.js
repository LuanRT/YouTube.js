const Parser = require('..');

/**
 * This is taken directly from node-ytdl-core 
 * which is under the same MIT license as this library.
 * @see https://github.com/fent/node-ytdl-core/blob/11103be3ab373551bddd0938bc0bbaea033acb8e/lib/info-extras.js#L297
 */

class PlayerStoryboardSpec {
  type = 'PlayerStoryboardSpec';

  constructor(item) {
    const parts = item.spec?.split('|');

    if (!parts) { 
      this.boards = [];
    }

    const url = new URL(parts.shift());

    this.boards = parts.map((part, i) => {
      let [
        thumbnail_width,
        thumbnail_height,
        thumbnail_count,
        columns,
        rows,
        interval,
        nameReplacement,
        sigh,
      ] = part.split('#');

      url.searchParams.set('sigh', sigh);

      thumbnail_count = parseInt(thumbnail_count, 10);
      columns = parseInt(columns, 10);
      rows = parseInt(rows, 10);

      const storyboard_count = Math.ceil(thumbnail_count / (columns * rows));

      return {
        template_url: url.toString().replace('$L', i).replace('$N', nameReplacement),
        thumbnail_width: parseInt(thumbnail_width, 10),
        thumbnail_height: parseInt(thumbnail_height, 10),
        thumbnail_count,
        interval: parseInt(interval, 10),
        columns,
        rows,
        storyboard_count,
      };
    });
  }
}

module.exports = PlayerStoryboardSpec;