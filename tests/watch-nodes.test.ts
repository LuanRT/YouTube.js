import { describe, expect, test } from 'vitest';

import { YTNodes } from '../dist/src/platform/node.js';

describe('Watch and description nodes', () => {
  const macro_markers_panel = {
    macroMarkerListEntityKey: 'Eg1BVVRPX0NIQVBURVJTIJICKAE%3D',
    context: 'MACRO_MARKERS_LIST_VIEW_MODEL_CONTEXT_DETAIL_VIEW',
    markersEngagementPanelSyncEntityKey: 'EgpzeW5jX21vZGVsIMQBKAE%3D'
  };

  const macro_markers_description = {
    title: { content: 'Chapters' },
    macroMarkerListEntityKey: 'Eg1BVVRPX0NIQVBURVJTIJICKAE%3D',
    rendererContext: {
      commandContext: {
        onTap: {
          innertubeCommand: {
            showEngagementPanelEndpoint: {
              panelIdentifier: 'engagement-panel-macro-markers-auto-chapters'
            }
          }
        }
      }
    }
  };

  describe('MacroMarkersListView', () => {
    test('parses the engagement panel shape without a title', () => {
      const node = new YTNodes.MacroMarkersListView(macro_markers_panel);

      expect(node.title).toBeUndefined();
      expect(node.macro_marker_list_entity_key).toBe('Eg1BVVRPX0NIQVBURVJTIJICKAE%3D');
      expect(node.context).toBe('MACRO_MARKERS_LIST_VIEW_MODEL_CONTEXT_DETAIL_VIEW');
      expect(node.markers_engagement_panel_sync_entity_key).toBe('EgpzeW5jX21vZGVsIMQBKAE%3D');
    });

    test('parses the description shape with a title', () => {
      const node = new YTNodes.MacroMarkersListView(macro_markers_description);

      expect(node.title?.toString()).toBe('Chapters');
      expect(node.context).toBeUndefined();
      expect(node.renderer_context.command_context).toBeDefined();
    });
  });

  describe('StructuredDescriptionContent', () => {
    test('accepts ItemSection items', () => {
      const node = new YTNodes.StructuredDescriptionContent({
        items: [
          { videoDescriptionHeaderRenderer: { title: { runs: [ { text: 'A title' } ] } } },
          { itemSectionRenderer: { contents: [], sectionIdentifier: 'a-section' } }
        ]
      });

      expect(node.items.map((item) => item.type)).toEqual([ 'VideoDescriptionHeader', 'ItemSection' ]);
    });

    test('accepts MacroMarkersListView items', () => {
      const node = new YTNodes.StructuredDescriptionContent({
        items: [ { macroMarkersListViewModel: macro_markers_description } ]
      });

      expect(node.items.map((item) => item.type)).toEqual([ 'MacroMarkersListView' ]);
    });
  });

  describe('EngagementPanelSectionList', () => {
    test('accepts MacroMarkersListView as content', () => {
      const node = new YTNodes.EngagementPanelSectionList({
        panelIdentifier: 'engagement-panel-macro-markers-auto-chapters',
        content: { macroMarkersListViewModel: macro_markers_panel }
      });

      expect(node.content?.type).toBe('MacroMarkersListView');
    });

    test('still accepts MacroMarkersList as content', () => {
      const node = new YTNodes.EngagementPanelSectionList({
        content: { macroMarkersListRenderer: { contents: [] } }
      });

      expect(node.content?.type).toBe('MacroMarkersList');
    });
  });

  describe('AlertWithActions', () => {
    test('parses title, alert type, icon and buttons', () => {
      const node = new YTNodes.AlertWithActions({
        icon: { iconType: 'PERSON_CIRCLE' },
        title: { simpleText: 'Sign in to subscribe to this channel.' },
        alertType: { type: 'ALERT_TYPE_PROMPT' },
        actionButtons: [
          { buttonRenderer: { text: { simpleText: 'Sign in' } } }
        ]
      });

      expect(node.title.toString()).toBe('Sign in to subscribe to this channel.');
      expect(node.alert_type).toBe('PROMPT');
      expect(node.icon_type).toBe('PERSON_CIRCLE');
      expect(node.action_buttons.map((button) => button.text)).toEqual([ 'Sign in' ]);
    });
  });
});
