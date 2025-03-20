import type { RawNode } from '../../types/index.ts';
import CommandContext from './CommandContext.ts';
import AccessibilityContext from './AccessibilityContext.ts';

export default class RendererContext {
  public command_context?: CommandContext;
  public accessibility_context?: AccessibilityContext;

  constructor(data?: RawNode) {
    if (!data)
      return;

    if ('commandContext' in data) {
      this.command_context = new CommandContext(data.commandContext);
    }

    if ('accessibilityContext' in data) {
      this.accessibility_context = new AccessibilityContext(data.accessibilityContext);
    }
  }
}