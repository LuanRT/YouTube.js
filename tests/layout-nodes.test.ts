import { describe, expect, test } from 'vitest';

import { YTNodes } from '../dist/src/platform/node.js';

describe('Layout nodes', () => {
  describe('MenuCustomIconItem', () => {
    const ticket_menu_item = {
      actionText: { simpleText: 'Find on Ticketmaster' },
      command: {
        clickTrackingParams: 'CJwCEMOjBRgA',
        urlEndpoint: {
          url: 'https://www.youtube.com/redirect?event=ticket_shelf&q=https%3A%2F%2Fexample.test',
          target: 'TARGET_NEW_WINDOW',
          nofollow: true
        }
      },
      trackingParams: 'CJwCEMOjBRgA'
    };

    test('parses its label and command', () => {
      const node = new YTNodes.MenuCustomIconItem(ticket_menu_item);

      expect(node.action_text.toString()).toBe('Find on Ticketmaster');
      expect(node.endpoint.payload.url).toContain('example.test');
    });

    test('is accepted inside a menu popup', () => {
      const popup = new YTNodes.MenuPopup({
        items: [ { menuCustomIconItemRenderer: ticket_menu_item } ]
      });

      expect(popup.items.map((item) => item.type)).toEqual([ 'MenuCustomIconItem' ]);
    });
  });

  describe('EntityMetadata', () => {
    test('parses title and bylines', () => {
      const node = new YTNodes.EntityMetadata({
        title: { simpleText: 'A playlist' },
        description: { simpleText: 'Description' },
        bylines: [
          { lineRenderer: { items: [ { lineItemRenderer: { text: { simpleText: '12 videos' } } } ] } }
        ]
      });

      expect(node.title.toString()).toBe('A playlist');
      expect(node.bylines[0].items[0].text.toString()).toBe('12 videos');
    });
  });
});
