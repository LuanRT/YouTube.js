import TextRun from './TextRun.js';
import EmojiRun from './EmojiRun.js';

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

  constructor(data: any) {
    if (data?.hasOwnProperty('runs') && Array.isArray(data.runs)) {
      this.runs = (data.runs as any[]).map((run: any) => run.emoji ?
        new EmojiRun(run) :
        new TextRun(run)
      );
      this.text = this.runs.map((run) => run.text).join('');
    } else {
      this.text = data?.simpleText || 'N/A';
    }
  }

  toHTML() {
    return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
  }

  toString() {
    return this.text;
  }
}

export default Text;