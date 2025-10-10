import type { ESTree } from 'meriyah';
import { WALK_STOP, walkAst } from './helpers.js';

export function sigMatcher(node: ESTree.Node) {
  if (node.type === 'VariableDeclarator' && node.id?.type === 'Identifier') {
    const idNode = node.id;
    const initNode = node.init;

    if (idNode.type === 'Identifier' && initNode?.type === 'FunctionExpression' && initNode.params.length === 3) {
      const functionInitNode = initNode.body;
      if (!functionInitNode || functionInitNode.type !== 'BlockStatement') return false;

      for (const st of functionInitNode.body) {
        if (st?.type === 'ExpressionStatement') {
          const expression = st.expression;
          if (
            expression.type === 'LogicalExpression' &&
            expression.operator === '&&' &&
            expression.left.type === 'Identifier' &&
            expression.right.type === 'SequenceExpression'
          ) {
            const firstExp = expression.right.expressions[0];
            if (
              firstExp.type === 'AssignmentExpression' &&
              firstExp.operator === '=' &&
              firstExp.left.type === 'Identifier' &&
              firstExp.right.type === 'CallExpression' &&
              firstExp.right.callee.type === 'Identifier'
            ) {
              const rightArguments = firstExp.right.arguments;
              // sigFn(64, decodeURIComponent(sig))
              if (rightArguments.length >= 1) {
                const callExpression = rightArguments.find((exp) => exp.type === 'CallExpression');
                if (
                  callExpression?.type === 'CallExpression' &&
                  callExpression?.callee.type === 'Identifier' &&
                  callExpression.callee.name === 'decodeURIComponent' &&
                  callExpression.arguments[0].type === 'Identifier'
                ) {
                  return firstExp.right;
                }
              }
            }
          }
        }
      }
    }
  }

  return false;
}

export function nMatcher(node: ESTree.Node) {
  if (node.type !== 'VariableDeclarator')
    return false;

  if (
    node.id.type === 'Identifier' &&
    node.init?.type === 'ArrayExpression' &&
    node.init.elements[0]?.type === 'Identifier'
  ) {
    return node.init.elements[0];
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