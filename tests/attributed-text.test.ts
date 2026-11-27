import { describe, expect, test } from 'vitest';

import { Misc } from '../dist/src/platform/node.js';

const watch_command = {
  innertubeCommand: {
    commandMetadata: { webCommandMetadata: { url: '/watch?v=WysVrY2rqJw', webPageType: 'WEB_PAGE_TYPE_WATCH' } },
    watchEndpoint: { videoId: 'WysVrY2rqJw' }
  }
};

describe('Text.fromAttributed', () => {
  test('keeps UTF-16 offsets as they are', () => {
    const text = Misc.Text.fromAttributed({
      content: 'Olá · mundo',
      commandRuns: [ { startIndex: 6, length: 5, onTap: watch_command } ]
    } as any);

    expect(text.runs?.map((run) => run.text)).toEqual([ 'Olá · ', 'mundo' ]);
    expect((text.runs?.[1] as Misc.TextRun).endpoint?.payload?.videoId).toBe('WysVrY2rqJw');
  });

  test('accepts runs counted in UTF-8 bytes', () => {
    // Video row of a playlist lockup in the search results: 38 UTF-16 code units, 39 UTF-8 bytes ("·").
    const text = Misc.Text.fromAttributed({
      content: 'MartinhoDaVila - 50 Sucessos · 2:33:23',
      commandRuns: [ { startIndex: 0, length: 39, onTap: watch_command } ]
    } as any);

    expect(text.toString()).toBe('MartinhoDaVila - 50 Sucessos · 2:33:23');
    expect(text.runs).toHaveLength(1);
    expect((text.runs?.[0] as Misc.TextRun).endpoint?.payload?.videoId).toBe('WysVrY2rqJw');
  });

  test('converts UTF-8 offsets that start after multi-byte characters', () => {
    // "Mané · " is 7 UTF-16 code units and 9 UTF-8 bytes.
    const text = Misc.Text.fromAttributed({
      content: 'Mané · Giletão',
      commandRuns: [ { startIndex: 9, length: 8, onTap: watch_command } ]
    } as any);

    expect(text.runs?.map((run) => run.text)).toEqual([ 'Mané · ', 'Giletão' ]);
    expect((text.runs?.[1] as Misc.TextRun).endpoint).toBeDefined();
  });
});
