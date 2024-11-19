import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import DialogHeaderView from './DialogHeaderView.js';
import FormFooterView from './FormFooterView.js';
import CreatePlaylistDialogFormView from './CreatePlaylistDialogFormView.js';

export default class DialogView extends YTNode {
  static type = 'DialogView';

  public header: DialogHeaderView | null;
  public footer: FormFooterView | null;
  public custom_content: CreatePlaylistDialogFormView | null;

  constructor (data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, DialogHeaderView);
    this.footer = Parser.parseItem(data.footer, FormFooterView);
    this.custom_content = Parser.parseItem(data.customContent, CreatePlaylistDialogFormView);
  }
}