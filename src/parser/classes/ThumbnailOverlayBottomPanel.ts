import { YTNode } from '../helpers';

class ThumbnailOverlayBottomPanel extends YTNode {
  static type = 'ThumbnailOverlayBottomPanel';
  
  icon_type: string;
  
  constructor(data: any) {
    super();
    this.icon_type = data.icon.iconType;
  }
}

export default ThumbnailOverlayBottomPanel;