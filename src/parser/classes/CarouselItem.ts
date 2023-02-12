import Parser from '../index.js';
import { YTNode } from '../helpers.js';

import Thumbnail from './misc/Thumbnail.js';

class CarouselItem extends YTNode {
  static type = 'CarouselItem';

  items: YTNode[];
  background_color: string;
  layout_style: string;
  pagination_thumbnails: Thumbnail[];
  paginator_alignment: string;

  constructor (data: any) {
    super();
    this.items = Parser.parseArray(data.carouselItems);
    this.background_color = data.backgroundColor;
    this.layout_style = data.layoutStyle;
    this.pagination_thumbnails = Thumbnail.fromResponse(data.paginationThumbnails);
    this.paginator_alignment = data.paginatorAlignment;
  }
}

export default CarouselItem;