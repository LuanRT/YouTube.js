import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class CommandExecutorCommand extends YTNode {
  static type = 'CommandExecutorCommand';

  public commands: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.commands = Parser.parseCommands(data.commands);
  }
}