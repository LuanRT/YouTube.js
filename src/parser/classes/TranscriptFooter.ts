import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import SortFilterSubMenu from './SortFilterSubMenu.js';

export default class TranscriptFooter extends YTNode {
  static type = 'TranscriptFooter';

  language_menu: SortFilterSubMenu | null;

  constructor(data: RawNode) {
    super();
    this.language_menu = Parser.parseItem(data.languageMenu, SortFilterSubMenu);
  }
}