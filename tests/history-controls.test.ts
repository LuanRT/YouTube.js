import { describe, expect, test, vi } from 'vitest';

import { YT } from '../dist/src/platform/node.js';
import type { Actions, ApiResponse } from '../dist/src/core/index.js';

function button(label: string, endpoint: object = { feedbackEndpoint: { feedbackToken: 'test-token' } }) {
  return { buttonRenderer: { text: { simpleText: label }, serviceEndpoint: endpoint } };
}

function historyWith(contents: object[]) {
  const execute = vi.fn().mockResolvedValue({ data: { feedbackResponses: [ { isProcessed: true } ] } });
  const history = new YT.History({ execute } as unknown as Actions, {
    data: { contents: { sectionListRenderer: { contents } } }
  } as ApiResponse);
  return { history, execute };
}

function historyWithVideo() {
  return historyWith([ {
    itemSectionRenderer: {
      contents: [ {
        videoRenderer: {
          videoId: 'test-video',
          menu: { menuRenderer: { topLevelButtons: [ button('Remove from watch history') ] } }
        }
      } ]
    }
  } ]);
}

describe('History controls', () => {
  test.each([
    { label: 'Pause watch history', paused: false },
    { label: 'Resume watch history', paused: true },
    { label: 'Turn on watch history', paused: true }
  ])('detects history state from "$label"', ({ label, paused }) => {
    const { history } = historyWith([ button(label) ]);

    expect(history.is_watch_history_paused).toBe(paused);
  });

  test.each([
    { method: 'pauseWatchHistory', label: 'Pause watch history' },
    { method: 'pauseWatchHistory', label: 'Turn off watch history' },
    { method: 'resumeWatchHistory', label: 'Resume watch history' },
    { method: 'resumeWatchHistory', label: 'Turn on watch history' },
    { method: 'clearWatchHistory', label: 'Clear watch history' },
    { method: 'clearWatchHistory', label: 'Clear all watch history' }
  ] as const)('$method submits the token from "$label"', async ({ method, label }) => {
    const { history, execute } = historyWith([
      button('Remove from watch history', { feedbackEndpoint: { feedbackToken: 'unrelated-token' } }),
      button(label)
    ]);

    await expect(history[method]()).resolves.toBe(true);
    expect(execute).toHaveBeenCalledWith('/feedback', { feedbackTokens: [ 'test-token' ] });
  });

  test('finds the token inside a confirmation endpoint', async () => {
    const { history, execute } = historyWith([ button('Pause watch history', {
      confirmDialogEndpoint: {
        confirmDialogRenderer: {
          confirmEndpoint: { feedbackEndpoint: { feedbackToken: 'confirmation-token' } }
        }
      }
    }) ]);

    await history.pauseWatchHistory();

    expect(execute).toHaveBeenCalledWith('/feedback', { feedbackTokens: [ 'confirmation-token' ] });
  });

  test('finds the token inside a parsed confirmation dialog', async () => {
    const { history, execute } = historyWith([ button('Pause watch history', {
      showDialogEndpoint: {
        dialog: {
          confirmDialogRenderer: {
            title: { simpleText: 'Pause watch history?' },
            dialogMessages: [],
            confirmButton: button('Pause')
          }
        }
      }
    }) ]);

    await history.pauseWatchHistory();

    expect(execute).toHaveBeenCalledWith('/feedback', { feedbackTokens: [ 'test-token' ] });
  });

  test.each([
    { accessibility: { label: 'Pause watch history' } },
    { tooltip: 'Pause watch history' }
  ])('uses accessible labels and tooltips when text is absent', async (labels) => {
    const { history } = historyWith([ {
      buttonRenderer: { ...labels, serviceEndpoint: { feedbackEndpoint: { feedbackToken: 'test-token' } } }
    } ]);

    await expect(history.pauseWatchHistory()).resolves.toBe(true);
  });

  test('rejects a missing token without sending feedback', async () => {
    const { history, execute } = historyWith([ button('Pause watch history', {}) ]);

    await expect(history.pauseWatchHistory()).rejects.toThrow('No watch history feedback token');
    expect(execute).not.toHaveBeenCalled();
  });

  test.each([ { feedbackResponses: [ { isProcessed: false } ] }, {} ])('returns false when feedback is not processed', async (data) => {
    const { history, execute } = historyWith([ button('Clear all watch history') ]);
    execute.mockResolvedValue({ data });

    await expect(history.clearWatchHistory()).resolves.toBe(false);
  });

  test('propagates request failures', async () => {
    const { history, execute } = historyWith([ button('Resume watch history') ]);
    execute.mockRejectedValue(new Error('Request failed'));

    await expect(history.resumeWatchHistory()).rejects.toThrow('Request failed');
  });

  describe('removeVideo', () => {
    test('submits the video token and returns true when processed', async () => {
      const { history, execute } = historyWithVideo();

      await expect(history.removeVideo('test-video')).resolves.toBe(true);
      expect(execute).toHaveBeenCalledWith('/feedback', { feedbackTokens: [ 'test-token' ] });
    });

    test.each([
      { name: 'unprocessed feedback', data: { feedbackResponses: [ { isProcessed: false } ] } },
      { name: 'empty feedback responses', data: { feedbackResponses: [] } },
      { name: 'missing feedback responses', data: {} }
    ])('rejects with a descriptive error for $name', async ({ data }) => {
      const { history, execute } = historyWithVideo();
      execute.mockResolvedValue({ data });

      await expect(history.removeVideo('test-video')).rejects.toThrow('Failed to remove video from watch history');
    });
  });
});
