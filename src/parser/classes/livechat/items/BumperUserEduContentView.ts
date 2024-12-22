import { YTNode } from '../../../helpers.js';
import { type RawNode } from '../../../index.js';
import Text from '../../misc/Text.js';

export default class BumperUserEduContentView extends YTNode {
  static type = 'BumperUserEduContentView';
  
  text: Text;
  image_name: string;
  image_color: number;

  constructor(data: RawNode) {
    super();
    this.text = Text.fromAttributed(data.text);
    this.image_name = data.image.sources[0].clientResource.imageName;
    this.image_color = data.image.sources[0].clientResource.imageColor;
  }
}