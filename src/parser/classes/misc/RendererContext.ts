import type { RawNode } from '../../types/index.js';
import CommandContext from './CommandContext.js';
import AccessibilityContext from './AccessibilityContext.js';

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