import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../types/RawResponse.js';
import RendererContext from '../misc/RendererContext.js';
import Thumbnail from '../misc/Thumbnail.js';

export default class CommentImageAttachmentView extends YTNode {
  public static type = 'CommentImageAttachmentView';

  public width: number;
  public height: number;
  public aspect_ratio: number;
  public image: Thumbnail[];
  public image_content_mode?: string;
  public processor?: {
    border_image_processor: {
      corner_radius: number
    }
  };
  public image_format_hint?: string;
  public external_image_id: string;
  public unavailable_text: string;
  public unsupported_text: string;
  public renderer_context: RendererContext;

  public constructor(data: RawNode) {
    super();

    this.width = data.width;
    this.height = data.height;
    this.aspect_ratio = data.aspectRatio;
    this.image = Thumbnail.fromResponse(data.image);
    this.external_image_id = data.externalImageId;
    this.unavailable_text = data.unavailableText;
    this.unsupported_text = data.unsupportedText;
    this.renderer_context = new RendererContext(data.rendererContext);

    if (typeof data.image === 'object') {
      this.image_content_mode = data.image.contentMode;
      this.image_format_hint = data.image.imageFormatHint;

      if (data.image.processor?.borderImageProcessor?.cornerRadius) {
        this.processor = {
          border_image_processor: {
            corner_radius: data.image.processor.borderImageProcessor.cornerRadius
          }
        };
      }
    }
  }
}
