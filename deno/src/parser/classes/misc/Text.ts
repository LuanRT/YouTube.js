import TextRun from './TextRun.ts';
import EmojiRun from './EmojiRun.ts';
import NavigationEndpoint from '../NavigationEndpoint.ts';
import type { RawNode } from '../../index.ts';

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
  runs;
  endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    if (data?.hasOwnProperty('runs') && Array.isArray(data.runs)) {
      this.runs = (data.runs as any[]).map((run: any) => run.emoji ?
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

  toHTML() {
    return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
  }

  isEmpty() {
    return this.text === undefined;
  }

  toString() {
    return this.text || 'N/A';
  }
}