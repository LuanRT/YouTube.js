import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import PageHeaderView from './PageHeaderView.ts';

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