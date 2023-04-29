import type { RawNode } from '../../index.ts';
import NavigationEndpoint from '../NavigationEndpoint.ts';
import EmojiRun from './EmojiRun.ts';
import TextRun from './TextRun.ts';

export interface Run {
  text: string;
  toString(): string;
  toHTML(): string;
}

export function escape(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default class Text {
  text?: string;
  runs?: (EmojiRun | TextRun)[];
  endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    if (typeof data === 'object' && data !== null && Reflect.has(data, 'runs') && Array.isArray(data.runs)) {
      this.runs = data.runs.map((run: RawNode) => run.emoji ?
        new EmojiRun(run) :
        new TextRun(run)
      );
      this.text = this.runs.map((run) => run.text).join('');
    } else {
      this.text = data?.simpleText;
    }
    if (typeof data === 'object' && data !== null && Reflect.has(data, 'navigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
    if (typeof data === 'object' && data !== null && Reflect.has(data, 'titleNavigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
    }
    if (!this.endpoint) {
      if ((this.runs?.[0] as TextRun)?.endpoint) {
        this.endpoint = (this.runs?.[0] as TextRun)?.endpoint;
      }
    }
  }

  /**
   * Converts the text to HTML.
   * @returns The HTML.
   */
  toHTML(): string | undefined {
    return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
  }

  /**
   * Checks if the text is empty.
   * @returns Whether the text is empty.
   */
  isEmpty(): boolean {
    return this.text === undefined;
  }

  /**
   * Converts the text to a string.
   * @returns The text.
   */
  toString(): string {
    return this.text || 'N/A';
  }
}