import { describe, expect, test } from 'vitest';

// Loads the platform first to avoid circular import ordering issues when importing parser helpers directly.
import '../src/platform/node.js';
import { YTNode, observe } from '../src/parser/helpers.js';

class TestNode extends YTNode {
  static type = 'TestNode';

  constructor(public kind: string, public id: number) {
    super();
  }
}

const makeArray = () => observe([
  new TestNode('a', 1),
  new TestNode('a', 2),
  new TestNode('a', 3),
  new TestNode('b', 4),
  new TestNode('a', 5)
]);

describe('ObservedArray#getAll', () => {
  test('returns all matching items without removing them', () => {
    const array = makeArray();
    const matches = array.getAll({ kind: 'a' });

    expect(matches.map((node) => (node as TestNode).id)).toEqual([ 1, 2, 3, 5 ]);
    expect(array.length).toBe(5);
  });

  test('removes every matching item when `del_items` is set', () => {
    const array = makeArray();
    const matches = array.getAll({ kind: 'a' }, true);

    expect(matches.map((node) => (node as TestNode).id)).toEqual([ 1, 2, 3, 5 ]);
    expect(array.map((node) => (node as TestNode).id)).toEqual([ 4 ]);
  });
});
