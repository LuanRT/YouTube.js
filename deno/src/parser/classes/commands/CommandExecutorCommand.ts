import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';

export default class CommandExecutorCommand extends YTNode {
  static type = 'CommandExecutorCommand';

  public commands: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.commands = Parser.parseCommands(data.commands);
  }
}