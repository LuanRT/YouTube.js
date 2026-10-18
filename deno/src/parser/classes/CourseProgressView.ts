import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';
import type { RawNode } from '../types/index.ts';
import RendererContext from './misc/RendererContext.ts';

export default class CourseProgressView extends YTNode {
  static type = 'CourseProgressView';

  public title: Text;
  public progress_summary: Text;
  public progress_percentage?: number;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.title = Text.fromAttributed(data.title);

    this.progress_summary = Text.fromAttributed(data.progressSummary);
    this.progress_percentage = data.progressPercentage;

    if ('rendererContext' in data)
      this.renderer_context = new RendererContext(data.rendererContext);
  }
}