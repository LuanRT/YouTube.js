import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import RendererContext from './misc/RendererContext.ts';
import ChipView from './ChipView.ts';

export default class ChipBarView extends YTNode {
  static type = 'ChipBarView';

  public chips: ObservedArray<ChipView>;
  public chip_bar_state_entity_key?: string;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.chips = Parser.parseArray(data.chips, ChipView);
    this.chip_bar_state_entity_key = data.chipBarStateEntityKey;

    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}