import type { ESTree } from 'meriyah';
import { WALK_STOP, walkAst } from './helpers.js';

export function nsigMatcher(node: ESTree.Node) {
  if (node.type !== 'VariableDeclarator')
    return false;

  const init = node.init;

  if (!init || init.type !== 'FunctionExpression')
    return false;

  if (init.params.length < 3)
    return false;

  const [ url, sigName, sigValue ] = init.params;

  if (url.type !== 'Identifier' || sigName.type !== 'AssignmentPattern' || sigValue.type !== 'AssignmentPattern')
    return false;

  const body = init.body;
  const blockStatementBody = body?.body || [];

  let hasUrlCtor = false;
  let hasSetAlr = false;

  for (const statement of blockStatementBody) {
    if (statement.type !== 'ExpressionStatement')
      continue;

    const expr = statement.expression;

    if (expr.type === 'AssignmentExpression' && expr.operator === '=' && expr.left.type === 'Identifier' && expr.left.name === url.name) {
      const right = expr.right;
      if (right.type === 'NewExpression' && right.callee.type === 'MemberExpression') {
        hasUrlCtor = true;
      }
    }

    if (expr.type === 'CallExpression' && expr.callee.type === 'MemberExpression') {
      const args = expr.arguments;
      if (args.length === 2 && args[0].type === 'Literal' && args[0].value === 'alr' && args[1].type === 'Literal' && args[1].value === 'yes') {
        hasSetAlr = true;
      }
    }
  }

  if (!hasUrlCtor || !hasSetAlr)
    return false;

  return node;
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