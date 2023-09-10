import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../index.ts';
import SortFilterSubMenu from './SortFilterSubMenu.ts';

export default class TranscriptFooter extends YTNode {
  static type = 'TranscriptFooter';

  language_menu: SortFilterSubMenu | null;

  constructor(data: RawNode) {
    super();
    this.language_menu = Parser.parseItem(data.languageMenu, SortFilterSubMenu);
  }
}