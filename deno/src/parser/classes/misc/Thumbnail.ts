import type { RawNode } from '../../index.ts';

class Thumbnail {
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
    if (!data || !data.thumbnails) return [];
    return data.thumbnails.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
  }
}

export default Thumbnail;