import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export interface StoryboardData {
  template_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_count: number;
  interval: number;
  columns: number;
  rows: number;
  storyboard_count: number;
}

export default class PlayerStoryboardSpec extends YTNode {
  static type = 'PlayerStoryboardSpec';

  boards: StoryboardData[];

  constructor(data: RawNode) {
    super();

    const parts = data.spec.split('|');
    const url = new URL(parts.shift());

    this.boards = parts.map((part: any, i: any) => {
      const [ thumbnail_width, thumbnail_height, thumbnail_count, columns, rows, interval, name, sigh ] = part.split('#');

      url.searchParams.set('sigh', sigh);

      const storyboard_count = Math.ceil(parseInt(thumbnail_count, 10) / (parseInt(columns, 10) * parseInt(rows, 10)));

      return {
        template_url: url.toString().replace('$L', i).replace('$N', name),
        thumbnail_width: parseInt(thumbnail_width, 10),
        thumbnail_height: parseInt(thumbnail_height, 10),
        thumbnail_count: parseInt(thumbnail_count, 10),
        interval: parseInt(interval, 10),
        columns: parseInt(columns, 10),
        rows: parseInt(rows, 10),
        storyboard_count
      };
    });
  }
}