import { Log } from '../../../utils/index.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import EmojiRun from './EmojiRun.js';
import TextRun from './TextRun.js';

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

// Place this here, instead of in a private static property,
// To avoid the performance penalty of the private field polyfill
const TAG = 'Text';

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

  static fromAttributed(data: AttributedText) {
    const {
      content,
      styleRuns: style_runs,
      commandRuns: command_runs,
      attachmentRuns: attachment_runs
    } = data;

    const runs: RawRun[] = [
      {
        text: content,
        startIndex: 0
      }
    ];

    if (style_runs || command_runs || attachment_runs) {
      if (style_runs) {
        for (const style_run of style_runs) {
          if (
            style_run.italic ||
            style_run.strikethrough === 'LINE_STYLE_SINGLE' ||
            style_run.weightLabel === 'FONT_WEIGHT_MEDIUM' ||
            style_run.weightLabel === 'FONT_WEIGHT_BOLD'
          ) {
            const matching_run = findMatchingRun(runs, style_run);

            if (!matching_run) {
              Log.warn(TAG, 'Unable to find matching run for style run. Skipping...', {
                style_run,
                input_data: data,
                // For performance reasons, web browser consoles only expand an object, when the user clicks on it,
                // So if we log the original runs object, it might have changed by the time the user looks at it.
                // Deep clone, so that we log the exact state of the runs at this point.
                parsed_runs: JSON.parse(JSON.stringify(runs))
              });

              continue;
            }

            // Comments use MEDIUM for bold text and video descriptions use BOLD for bold text
            insertSubRun(runs, matching_run, style_run, {
              bold: style_run.weightLabel === 'FONT_WEIGHT_MEDIUM' || style_run.weightLabel === 'FONT_WEIGHT_BOLD',
              italics: style_run.italic,
              strikethrough: style_run.strikethrough === 'LINE_STYLE_SINGLE'
            });
          } else {
            Log.debug(TAG, 'Skipping style run as it is doesn\'t have any information that we parse.', {
              style_run,
              input_data: data
            });
          }
        }
      }

      if (command_runs) {
        for (const command_run of command_runs) {
          if (command_run.onTap) {
            const matching_run = findMatchingRun(runs, command_run);

            if (!matching_run) {
              Log.warn(TAG, 'Unable to find matching run for command run. Skipping...', {
                command_run,
                input_data: data,
                // For performance reasons, web browser consoles only expand an object, when the user clicks on it,
                // So if we log the original runs object, it might have changed by the time the user looks at it.
                // Deep clone, so that we log the exact state of the runs at this point.
                parsed_runs: JSON.parse(JSON.stringify(runs))
              });

              continue;
            }

            insertSubRun(runs, matching_run, command_run, {
              navigationEndpoint: command_run.onTap
            });
          } else {
            Log.debug(TAG, 'Skipping command run as it is missing the "doTap" property.', {
              command_run,
              input_data: data
            });
          }
        }
      }

      if (attachment_runs) {
        for (const attachment_run of attachment_runs) {
          const matching_run = findMatchingRun(runs, attachment_run);

          if (!matching_run) {
            Log.warn(TAG, 'Unable to find matching run for attachment run. Skipping...', {
              attachment_run,
              input_data: data,
              // For performance reasons, web browser consoles only expand an object, when the user clicks on it,
              // So if we log the original runs object, it might have changed by the time the user looks at it.
              // Deep clone, so that we log the exact state of the runs at this point.
              parsed_runs: JSON.parse(JSON.stringify(runs))
            });

            continue;
          }

          if (attachment_run.length === 0) {
            matching_run.attachment = attachment_run;
          } else {
            const offset_start_index = attachment_run.startIndex - matching_run.startIndex;

            const text = matching_run.text.substring(offset_start_index, offset_start_index + attachment_run.length);

            const is_custom_emoji = (/^:[^:]+:$/).test(text);

            if (attachment_run.element?.type?.imageType?.image && (is_custom_emoji || (/^(?:\p{Emoji}|\u200d)+$/u).test(text))) {
              const emoji = {
                image: attachment_run.element.type.imageType.image,
                isCustomEmoji: is_custom_emoji,
                shortcuts: is_custom_emoji ? [ text ] : undefined
              };

              insertSubRun(runs, matching_run, attachment_run, { emoji });
            } else {
              insertSubRun(runs, matching_run, attachment_run, {
                attachment: attachment_run
              });
            }
          }
        }
      }
    }

    return new Text({ runs });
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

function findMatchingRun(runs: RawRun[], response_run: ResponseRun) {
  return runs.find((run) => {
    return run.startIndex <= response_run.startIndex &&
      response_run.startIndex + response_run.length <= run.startIndex + run.text.length;
  });
}

function insertSubRun(runs: RawRun[], original_run: RawRun, response_run: ResponseRun, properties_to_add: Omit<RawRun, 'text' | 'startIndex'>) {
  const replace_index = runs.indexOf(original_run);
  const replacement_runs = [];

  const offset_start_index = response_run.startIndex - original_run.startIndex;

  // Stuff before the run
  if (response_run.startIndex > original_run.startIndex) {
    replacement_runs.push({
      ...original_run,
      text: original_run.text.substring(0, offset_start_index)
    });
  }

  replacement_runs.push({
    ...original_run,
    text: original_run.text.substring(offset_start_index, offset_start_index + response_run.length),
    startIndex: response_run.startIndex,
    ...properties_to_add
  });

  // Stuff after the run
  if (response_run.startIndex + response_run.length < original_run.startIndex + original_run.text.length) {
    replacement_runs.push({
      ...original_run,
      text: original_run.text.substring(offset_start_index + response_run.length),
      startIndex: response_run.startIndex + response_run.length
    });
  }

  runs.splice(replace_index, 1, ...replacement_runs);
}

interface RawRun {
  text: string,
  bold?: boolean;
  italics?: boolean;
  strikethrough?: boolean;
  navigationEndpoint?: RawNode;
  attachment?: RawNode;
  emoji?: RawNode;
  startIndex: number;
}

interface AttributedText {
  content: string;
  styleRuns?: StyleRun[];
  commandRuns?: CommandRun[];
  attachmentRuns?: AttachmentRun[];
  decorationRuns?: ResponseRun[];
}

interface ResponseRun {
  startIndex: number;
  length: number;
}

interface StyleRun extends ResponseRun {
  italic?: boolean;
  weightLabel?: string;
  strikethrough?: string;
  fontFamilyName?: string;
  styleRunExtensions?: {
    styleRunColorMapExtension?: {
      colorMap?: {
        key: string,
        value: number
      }[]
    }
  }
}

interface CommandRun extends ResponseRun {
  onTap?: RawNode;
}

interface AttachmentRun extends ResponseRun {
  alignment?: string;
  element?: {
    type?: {
      imageType?: {
        image: RawNode,
        playbackState?: string;
      }
    };
    properties?: RawNode
  };
}