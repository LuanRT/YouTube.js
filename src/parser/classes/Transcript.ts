import { YTNode } from "../helpers.js";
import Parser, { RawNode } from "../index.js";
import TranscriptSearchPanel from "./TranscriptSearchPanel.js";

export default class Transcript extends YTNode {
  static type = 'Transcript';

  content: TranscriptSearchPanel | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, TranscriptSearchPanel);
  }
}