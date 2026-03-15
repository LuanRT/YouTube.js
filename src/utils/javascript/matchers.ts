import type { ESTree } from 'meriyah';
import { WALK_STOP, walkAst, getUrlHelperClassName, looksLikeSignatureHelper } from './helpers.js';

export function sigMatcher(node: ESTree.Node) {
  if (
    node.type === 'VariableDeclarator' &&
    node.id.type === 'Identifier' &&
    node.init?.type === 'FunctionExpression' &&
    // sigFn(64, decodeURIComponent(sig))
    looksLikeSignatureHelper(node.init)
  ) {
    return node;
  }

  return false;
}

export function nMatcher(node: ESTree.Node) {
  if (node.type === 'VariableDeclarator') {
    if (
      node.id.type === 'Identifier' &&
      node.init?.type === 'FunctionExpression' &&
      looksLikeSignatureHelper(node.init)
    ) {
      const className = getUrlHelperClassName(node.init);
      if (className) {
        return {
          type: 'Identifier',
          name: className,
          start: node.id.start,
          end: node.id.end,
          range: node.id.range
        } as unknown as ESTree.Identifier;
      }
    }

    if (
      node.id.type === 'Identifier' &&
      node.init?.type === 'ArrayExpression' &&
      node.init.elements[0]?.type === 'Identifier'
    ) {
      return node.init.elements[0];
    }

    return false;
  }

  return false;
}

export function timestampMatcher(node: ESTree.Node) {
  if (node.type !== 'VariableDeclarator' || node.init?.type !== 'FunctionExpression') {
    return false;
  }

  const funcBody = node.init.body;
  if (!funcBody) return false;

  let foundObject: ESTree.Node | null = null;

  walkAst(funcBody, (innerNode) => {
    if (innerNode.type === 'ObjectExpression') {
      for (const prop of innerNode.properties) {
        if (prop.type === 'Property' && prop.key.type === 'Identifier' && prop.key.name === 'signatureTimestamp') {
          foundObject = prop;
          return WALK_STOP;
        }
      }
    }
  });

  return foundObject || false;
}
