import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import PanelFooterView from './PanelFooterView.js';

export default class FormFooterView extends YTNode {
  static type = 'FormFooterView';

  public panel_footer: PanelFooterView | null;
  public form_id: string;
  public container_type: string;

  constructor(data: RawNode) {
    super();
    this.panel_footer = Parser.parseItem(data.panelFooter, PanelFooterView);
    this.form_id = data.formId;
    this.container_type = data.containerType;
  }
}