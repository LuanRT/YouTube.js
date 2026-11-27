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
    const { content } = data;

    // Some responses (e.g. the video rows of playlist lockups in search results) count `startIndex`
    // and `length` in UTF-8 bytes instead of UTF-16 code units, so a run covering the whole text ends
    // past `content.length` whenever the text has non-ASCII characters (`·`, `é`...).
    const to_utf16 = getUtf8OffsetConverter(content, [
      ...(data.styleRuns ?? []),
      ...(data.commandRuns ?? []),
      ...(data.attachmentRuns ?? [])
    ]);

    const command_runs = to_utf16 ? data.commandRuns?.map((run) => convertRunOffsets(run, to_utf16)) : data.commandRuns;
    const attachment_runs = to_utf16 ? data.attachmentRuns?.map((run) => convertRunOffsets(run, to_utf16)) : data.attachmentRuns;
    const raw_style_runs = to_utf16 ? data.styleRuns?.map((run) => convertRunOffsets(run, to_utf16)) : data.styleRuns;

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
    const style_runs = raw_style_runs?.map((run) => ({
      ...run,
      startIndex: run.startIndex ?? 0,
      length: run.length ?? content.length
    }) as StyleRun & ResponseRun);

    if (style_runs?.length)
      this.processStyleRuns(runs, style_runs, data);

    if (command_runs?.length)
      this.processCommandRuns(runs, command_runs, data);

    const normalized_attachment_runs = attachment_runs?.map((run) => ({
      ...run,
      startIndex: run.startIndex ?? 0,
      length: run.length ?? 0
    }) as AttachmentRun);

    if (normalized_attachment_runs?.length)
      this.processAttachmentRuns(runs, normalized_attachment_runs, data);

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

/**
 * Returns a function that maps UTF-8 byte offsets of `content` to UTF-16 indices, or `undefined` when the
 * runs already fit `content` (UTF-16, the usual case) or do not fit its UTF-8 length either.
 */
function getUtf8OffsetConverter(content: string, response_runs: Partial<ResponseRun>[]): ((byte_offset: number) => number) | undefined {
  const runEnd = (run: Partial<ResponseRun>) => (run.startIndex ?? 0) + (run.length ?? 0);

  if (!response_runs.some((run) => runEnd(run) > content.length))
    return;

  // UTF-16 index of the code point each UTF-8 byte belongs to, plus the end of the text.
  const utf16_index_of_byte: number[] = [];

  for (let i = 0; i < content.length; i++) {
    const code_point = content.codePointAt(i) as number;
    const byte_length = code_point < 0x80 ? 1 : code_point < 0x800 ? 2 : code_point < 0x10000 ? 3 : 4;

    for (let b = 0; b < byte_length; b++)
      utf16_index_of_byte.push(i);

    if (code_point > 0xFFFF)
      i++;
  }

  utf16_index_of_byte.push(content.length);

  if (response_runs.some((run) => runEnd(run) >= utf16_index_of_byte.length))
    return;

  return (byte_offset: number) => utf16_index_of_byte[byte_offset];
}

function convertRunOffsets<T extends Partial<ResponseRun>>(run: T, to_utf16: (byte_offset: number) => number): T {
  const start = run.startIndex ?? 0;
  const converted = { ...run };

  if (run.startIndex !== undefined)
    converted.startIndex = to_utf16(start);

  if (run.length !== undefined)
    converted.length = to_utf16(start + run.length) - to_utf16(start);

  return converted;
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
