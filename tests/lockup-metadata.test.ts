import { describe, expect, test } from 'vitest';

import { YTNodes } from '../dist/src/platform/node.js';

const LockupView = YTNodes.LockupView;

/**
 * Fixture based on a real InnerTube response (channel Videos tab, hl=zh-CN),
 * trimmed to the fields relevant for metadata parsing.
 * YouTube is rolling out `lockupMetadataViewModel`/`contentMetadataViewModel`
 * on top of the legacy `lockupMetadataView`/`contentMetadataView` nesting.
 */
const newNesting = {
  lockupViewModel: {
    contentId: 'capu4-id',
    contentType: 'LOCKUP_CONTENT_TYPE_VIDEO',
    contentImage: {},
    rendererContext: {},
    metadata: {
      lockupMetadataViewModel: {
        title: { content: 'capu4' },
        metadata: {
          contentMetadataViewModel: {
            delimiter: ' • ',
            metadataRows: [
              {
                metadataParts: [
                  { text: { content: '48次观看' } },
                  { text: { content: '10年前' }, accessibilityLabel: '10年前' }
                ]
              }
            ]
          }
        }
      }
    }
  }
};

const legacyNesting = {
  lockupViewModel: {
    contentId: 'capu4-id',
    contentType: 'LOCKUP_CONTENT_TYPE_VIDEO',
    contentImage: {},
    rendererContext: {},
    metadata: {
      lockupMetadataView: {
        title: { content: 'capu4' },
        metadata: {
          contentMetadataView: {
            delimiter: ' • ',
            metadataRows: [
              {
                metadataParts: [
                  { text: { content: '48次观看' } },
                  { text: { content: '10年前' }, accessibilityLabel: '10年前' }
                ]
              }
            ]
          }
        }
      }
    }
  }
};

describe('LockupView metadata parsing', () => {
  test.each([
    [ 'lockupMetadataView (legacy nesting)', legacyNesting.lockupViewModel ],
    [ 'lockupMetadataViewModel (new nesting)', newNesting.lockupViewModel ]
  ])('%s', (_name, data) => {
    const lockup = new LockupView(data);

    expect(lockup.metadata).not.toBeNull();
    expect(lockup.metadata?.title.text).toBe('capu4');

    const rows = lockup.metadata?.metadata?.metadata_rows;
    expect(rows).toHaveLength(1);

    const parts = rows?.[0].metadata_parts;
    expect(parts).toHaveLength(2);

    expect(parts?.[0].text?.text).toBe('48次观看');
    expect(parts?.[1].text?.text).toBe('10年前');

    // Language-neutral signals exposed for downstream clients
    expect(parts?.[1].accessibility_label).toBe('10年前');
    expect(parts?.[0].accessibility_label).toBeUndefined();
    expect(parts?.[0].leading_icon).toBeUndefined();
  });
});
