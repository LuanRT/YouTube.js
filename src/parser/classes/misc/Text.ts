import { Log } from '../../../utils/index.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import EmojiRun from './EmojiRun.js';
import TextRun from './TextRun.js';
import AccessibilityData from './AccessibilityData.js';

export interface Run {
  text: string;

  toString(): string;

  toHTML(): string;
}

export interface FormattedStringSupportedAccessibilityDatas {
  accessibility_data: AccessibilityData;
}

export function escape(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const TAG = 'Text';

/**
 * Represents text content that may include formatting, emojis, and navigation endpoints.
 */
export default class Text {
  /**
   * The plain text content.
   */
  public text?: string;

  /**
   * Individual text segments with their formatting.
   */
  public runs?: (EmojiRun | TextRun)[];

  /**
   * Navigation endpoint associated with this text.
   */
  public endpoint?: NavigationEndpoint;

  /**
   * Accessibility data associated with this text.
   */
  public accessibility?: FormattedStringSupportedAccessibilityDatas;

  /**
   * Indicates if the text is right-to-left.
   */
  public rtl: boolean;

  constructor(data: RawNode) {
    if (this.isRunsData(data)) {
      this.runs = data.runs.map((run: RawNode) =>
        run.emoji ? new EmojiRun(run) : new TextRun(run)
      );
      this.text = this.runs.map((run) => run.text).join('');
    } else {
      this.text = data?.simpleText;
    }

    if (this.isObject(data) && 'accessibility' in data
      && 'accessibilityData' in data.accessibility) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibility.accessibilityData)
      };
    }

    this.rtl = !!data?.rtl;

    this.parseEndpoint(data);
  }

  private isRunsData(data: RawNode): data is { runs: RawNode[] } {
    return this.isObject(data) &&
      Reflect.has(data, 'runs') &&
      Array.isArray(data.runs);
  }

  private parseEndpoint(data: RawNode): void {
    if (!this.isObject(data)) return;
    if ('navigationEndpoint' in data) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    } else if ('titleNavigationEndpoint' in data) {
      this.endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
    } else if ((this.runs?.[0] as TextRun)?.endpoint) {
      this.endpoint = (this.runs?.[0] as TextRun).endpoint;
    }
  }

  private isObject(data: RawNode): boolean {
    return typeof data === 'object' && data !== null;
  }

  static fromAttributed(data: AttributedText) {
    const {
      content,
      commandRuns: command_runs,
      attachmentRuns: attachment_runs
    } = data;

    const runs: RawRun[] = [
      {
        text: content,
        startIndex: 0
      }
    ];

    // In AttributedText, styleRuns may not always include the `startIndex` or `length` properties
    // - If `startIndex` is missing, we assume the style applies from the beginning of the text
    // - If `length` is missing, we assume the style applies to the entire text
    // The following code ensures default values are provided for these properties
    const style_runs = data.styleRuns?.map((run) => ({
      ...run,
      startIndex: run.startIndex ?? 0,
      length: run.length ?? content.length
    }) as StyleRun & ResponseRun);

    if (style_runs?.length)
      this.processStyleRuns(runs, style_runs, data);

    if (command_runs?.length)
      this.processCommandRuns(runs, command_runs, data);

    if (attachment_runs?.length)
      this.processAttachmentRuns(runs, attachment_runs, data);

    return new Text({ runs });
  }

  private static processStyleRuns(runs: RawRun[], style_runs: (StyleRun & ResponseRun)[], data: AttributedText) {
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

  private static processCommandRuns(runs: RawRun[], command_runs: CommandRun[], data: AttributedText) {
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

  private static processAttachmentRuns(runs: RawRun[], attachment_runs: AttachmentRun[], data: AttributedText) {
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

export interface AttributedText {
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

interface StyleRun extends Partial<ResponseRun> {
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
  };
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