import type { RawNode } from '../../types/index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export type CommandContext = {
  on_tap?: NavigationEndpoint;
};

export type AccessibilityContext = {
  label?: string;
};

export default class RendererContext {
  public command_context: CommandContext;
  public accessibility_context: AccessibilityContext;
  
  constructor(data: RawNode) {
    this.command_context = {};
    this.accessibility_context = {};
    
    if (Reflect.has(data, 'commandContext')) {
      if (Reflect.has(data.commandContext, 'onTap')) {
        this.command_context.on_tap = new NavigationEndpoint(data.commandContext.onTap);
      }
    }
    
    if (Reflect.has(data, 'accessibilityContext')) {
      if (Reflect.has(data.accessibilityContext, 'label')) {
        this.accessibility_context.label = data.accessibilityContext.label;
      }
    }
  }
}