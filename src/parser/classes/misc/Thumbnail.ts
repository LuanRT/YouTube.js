import type { RawNode } from '../../index.js';

export interface ClientResource {
  bundle_id?: string;
  image_color?: number;
  image_name?: string;
}

export default class Thumbnail {
  public url: string;
  public width: number;
  public height: number;
  public client_resource?: ClientResource;

  constructor(data: RawNode) {
    this.url = data.url;
    this.width = data.width;
    this.height = data.height;

    if ('clientResource' in data) {
      this.client_resource = {
        image_name: data.clientResource.imageName,
        image_color: data.clientResource.imageColor,
        bundle_id: data.clientResource.bundleId
      };
    }
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