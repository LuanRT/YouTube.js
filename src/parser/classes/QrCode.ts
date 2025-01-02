import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class QrCode extends YTNode {
  static type = 'QrCode';

  qr_code_image: Thumbnail[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.qr_code_image = Thumbnail.fromResponse(data.qrCodeImage);
    this.style = data.style;
  }
}