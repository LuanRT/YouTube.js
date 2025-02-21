import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import DialogHeaderView from './DialogHeaderView.ts';
import FormFooterView from './FormFooterView.ts';
import CreatePlaylistDialogFormView from './CreatePlaylistDialogFormView.ts';
import PanelFooterView from './PanelFooterView.ts';

export default class DialogView extends YTNode {
  static type = 'DialogView';

  public header: DialogHeaderView | null;
  public footer: FormFooterView | PanelFooterView | null;
  public custom_content: CreatePlaylistDialogFormView | null;

  constructor (data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, DialogHeaderView);
    this.footer = Parser.parseItem(data.footer, [ FormFooterView, PanelFooterView ]);
    this.custom_content = Parser.parseItem(data.customContent, CreatePlaylistDialogFormView);
  }
}