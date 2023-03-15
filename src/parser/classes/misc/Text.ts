import TextRun from './TextRun.js';
import EmojiRun from './EmojiRun.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

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

class Text {
  text: string;
  runs;
  endpoint: NavigationEndpoint | null;

  constructor(data: RawNode) {
    if (data?.hasOwnProperty('runs') && Array.isArray(data.runs)) {
      this.runs = (data.runs as any[]).map((run: any) => run.emoji ?
        new EmojiRun(run) :
        new TextRun(run)
      );
      this.text = this.runs.map((run) => run.text).join('');
    } else {
      this.text = data?.simpleText || 'N/A';
    }
    this.endpoint =
      data?.runs?.[0]?.navigationEndpoint ?
        new NavigationEndpoint(data?.runs[0].navigationEndpoint) :
        data?.navigationEndpoint ?
          new NavigationEndpoint(data?.navigationEndpoint) :
          data?.titleNavigationEndpoint ?
            new NavigationEndpoint(data?.titleNavigationEndpoint) : null;
  }

  toHTML() {
    return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
  }

  toString() {
    return this.text;
  }
}

export default Text;