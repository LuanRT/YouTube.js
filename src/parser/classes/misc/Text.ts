import TextRun from './TextRun.js';
import EmojiRun from './EmojiRun.js';

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

  toString() {
    return this.text;
  }
}

export default Text;