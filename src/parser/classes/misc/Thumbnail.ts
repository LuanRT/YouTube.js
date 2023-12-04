import type { RawNode } from '../../index.js';

export default class Thumbnail {
  url: string;
  width: number;
  height: number;

  constructor(data: RawNode) {
    this.url = data.url;
    this.width = data.width;
    this.height = data.height;
  }

  /**
   * Get thumbnails from response object.
   */
  static fromResponse(data: any): Thumbnail[] {
    if (!data) return [];

    let thumbnail_data;

    if (data.thumbnails) {
      thumbnail_data = data.thumbnails;
    } else if (data.sources) {
      thumbnail_data = data.sources;
    }

    if (thumbnail_data) {
      return thumbnail_data.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
    }

    return [];
  }
}