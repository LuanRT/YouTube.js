import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import PageHeaderView from './PageHeaderView.js';

export default class PageHeader extends YTNode {
  static type = 'PageHeader';

  page_title: string;
  content: PageHeaderView | null;

  constructor(data: RawNode) {
    super();
    this.page_title = data.pageTitle;
    this.content = Parser.parseItem(data.content, PageHeaderView);
  }
}