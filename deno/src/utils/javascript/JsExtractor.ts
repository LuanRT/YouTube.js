import type { ESTree } from 'meriyah';
import type { JsAnalyzer, VariableMetadata } from './JsAnalyzer.ts';
import { createWrapperFunction, extractNodeSource, indent, jsBuiltIns, memberToString } from './helpers.ts';

export type SideEffectMode = 'strict' | 'loose';

export interface SideEffectPolicyOptions {
  /**
   * Determines how strictly side-effect detection should behave.
   * Use `"loose"` to allow benign computed expressions.
   */
  mode?: SideEffectMode;
}

export interface EmitterOptions {
  /**
   * The maximum depth to traverse when emitting dependencies.
   * If not specified, there is no limit on the depth.
   */
  maxDepth?: number;
  /**
   * When true or configured, replace unsafe initializers (calls, `new`, etc.)
   * with `undefined` to avoid executing side-effectful code.
   * Use `{ mode: 'loose' }` to allow a broader set of expressions.
   */
  disallowSideEffectInitializers?: boolean | SideEffectPolicyOptions;
  /**
   * When true, emit a single `var` declaration for every variable
   * encountered, even if it originally had an initializer.
   */
  forceVarPredeclaration?: boolean;
  /**
   * When true, also export raw values of matched nodes.
   */
  exportRawValues?: boolean;
  /**
   * Array of names to skip emitting code/deps for, but still export the raw value.
   */
  rawValueOnly?: string[];
}

export interface BuildScriptResult {
  /**
   * The generated output script as a string.
   */
  output: string;
  /**
   * An array of exported variable names.
   */
  exported: string[];
  /**
   * An object mapping exported variable names to their raw values, if `exportRawValues` was enabled.
   */
  exportedRawValues?: Record<string, any>;
}

/**
 * Class responsible for extracting and emitting JavaScript code snippets
 * based on analysis results from a `JsAnalyzer` instance.
 */
export class JsExtractor {
  constructor(private analyzer: JsAnalyzer) { /** no-op */ }

  /**
   * Checks if all provided arguments are safe initializers.
   * @param args - The arguments to check.
   * @param mode - The side effect mode to use ('strict' or 'loose').
   */
  private areSafeArgs(
    args?: (ESTree.Expression | ESTree.SpreadElement | null | undefined)[],
    mode: SideEffectMode = 'strict'
  ): boolean {
    return (args ?? []).every((arg) => {
      if (!arg) return false;
      if (arg.type === 'SpreadElement') return false;
      return this.isSafeInitializer(arg, mode);
    });
  }

  /**
   * Determines if a given AST node is a safe initializer without side effects.
   * @param node - The AST node to evaluate.
   * @param mode - The side effect mode to use ('strict' or 'loose').
   */
  private isSafeInitializer(
    node?: ESTree.Node | null,
    mode: SideEffectMode = 'strict'
  ): boolean {
    if (!node) return true;

    switch (node.type) {
      case 'ClassExpression':
        return true;
      case 'Literal': {
        const literal = node as ESTree.Literal & { regex?: unknown };
        return (
          typeof literal.value === 'string' ||
          typeof literal.value === 'number' ||
          typeof literal.value === 'boolean' ||
          literal.value === null ||
          Boolean(literal.regex)
        );
      }
      case 'TemplateLiteral': {
        return node.expressions.every((expr) => this.isSafeInitializer(expr, mode));
      }
      case 'ArrayExpression': {
        return node.elements.every((elem) => {
          if (!elem) return true;
          if (elem.type === 'SpreadElement') return false;
          return this.isSafeInitializer(elem, mode);
        });
      }
      case 'ObjectExpression': {
        return node.properties.every((prop) => {
          if (prop.type !== 'Property') return false;
          if (prop.computed) return false;
          if (prop.kind !== 'init') return false;

          const value = prop.value;
          if (!value) return false;

          // e.g., { a: function() {} }, { a: () => {} }, or { a: "string" }
          return value.type === 'FunctionExpression' ||
            value.type === 'ArrowFunctionExpression' ||
            value.type === 'Literal';

        });
      }
      case 'CallExpression': {
        if (node.callee.type === 'Identifier' && jsBuiltIns.has(node.callee.name)) {
          return this.areSafeArgs(node.arguments, mode);
        } else if (node.callee.type === 'MemberExpression') {
          if (!this.isSafeInitializer(node.callee.object, mode)) return false;

          if (mode === 'strict') {
            const propertyName = node.callee.property.type === 'Identifier' ? node.callee.property.name : '';
            if (node.callee.computed || !jsBuiltIns.has(propertyName)) {
              return false;
            }
          }

          return this.areSafeArgs(node.arguments, mode);
        }
        return false;
      }
      case 'NewExpression': {
        if (node.callee.type === 'Identifier') {
          if (jsBuiltIns.has(node.callee.name)) {
            return this.areSafeArgs(node.arguments, mode);
          }
          if (mode === 'loose') {
            return this.areSafeArgs(node.arguments, mode);
          }
        }
        return false;
      }
      case 'UnaryExpression': {
        return this.isSafeInitializer(node.argument, mode);
      }
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
      case 'Identifier': {
        return true;
      }
      case 'MemberExpression': {
        if (mode === 'loose') {
          if (node.computed && !this.isSafeInitializer(node.property, mode)) {
            return false;
          }
          return this.isSafeInitializer(node.object, mode);
        }

        // Allow cases such as a.b = c.prototype;
        if (!node.computed && node.property.type === 'Identifier' && node.property.name === 'prototype') {
          return true;
        }

        return false;
      }
      case 'LogicalExpression':
      case 'BinaryExpression': {
        return (
          this.isSafeInitializer(node.left, mode) &&
          this.isSafeInitializer(node.right, mode)
        );
      }
      case 'ConditionalExpression': {
        if (mode === 'loose') {
          return (
            this.isSafeInitializer(node.test, mode) &&
            this.isSafeInitializer(node.consequent, mode) &&
            this.isSafeInitializer(node.alternate, mode)
          );
        }
        return false;
      }
      case 'SequenceExpression': {
        if (mode === 'loose') {
          return node.expressions.every((expr) => this.isSafeInitializer(expr, mode));
        }
        return false;
      }
      case 'AssignmentExpression': {
        if (node.left.type === 'MemberExpression' && !node.left.computed) {
          const object = node.left.object;
          if (object.type === 'Identifier' && this.analyzer.declaredVariables.get(object.name)?.node.init !== undefined) {
            return this.isSafeInitializer(node.right, mode);
          }
        } else if (node.left.type === 'Identifier') {
          if (this.analyzer.declaredVariables.has(node.left.name)) {
            return this.isSafeInitializer(node.right, mode);
          }
        }
        return false;
      }
      // @todo: check for more?
      default:
        return false;
    }
  }

  /**
   * Provides a fallback initializer string based on the type of the initializer node.
   * @TODO: Check more cases.
   * @param init - The initializer expression to evaluate.
   */
  private getInitializerFallback(init?: ESTree.Expression | null): string {
    switch (init?.type) {
      case 'ObjectExpression':
      case 'NewExpression':
      case 'MemberExpression':
      case 'LogicalExpression':
        return '{}';
      case 'ArrayExpression':
        return '[]';
      default:
        return 'undefined';
    }
  }

  /**
   * Renders an AST node to JavaScript source code, with special handling for variable declarators.
   * @param node - The ESTree node to render.
   * @param preDeclared - Whether the variable has been previously declared.
   * @param options - Configuration options for the emitter.
   */
  private renderNode(
    node: ESTree.Node,
    preDeclared: boolean,
    options: EmitterOptions = {}
  ) {
    const source = this.analyzer.getSource();
    const declaredVariables = this.analyzer.declaredVariables;

    const sideEffectPolicy = options.disallowSideEffectInitializers;
    const sideEffectMode = typeof sideEffectPolicy === 'object' && sideEffectPolicy !== null ?
      sideEffectPolicy.mode ?? 'strict' : 'strict';
    const canDisallow = Boolean(sideEffectPolicy);

    const assignmentTarget =
      node.type === 'AssignmentExpression'
        ? node
        : node.type === 'ExpressionStatement' && node.expression.type === 'AssignmentExpression'
          ? node.expression
          : null;

    const init = assignmentTarget && assignmentTarget.operator === '=' ? assignmentTarget.right : node.type === 'VariableDeclarator' ? node.init : null;
    const forceRemove = canDisallow && init && !this.isSafeInitializer(init, sideEffectMode);
    const initializerFallback = this.getInitializerFallback(init);

    let initSource = initializerFallback;

    if (!forceRemove && init) {
      // e.g. `var someVar = document;`
      if (!preDeclared && init.type === 'Identifier' && !declaredVariables.has(init.name)) {
        initSource = initializerFallback;
      } else {
        const left = assignmentTarget?.left;
        const isPrototypeAlias = init?.type === 'MemberExpression' && !init.computed && init.property.type === 'Identifier' && init.property.name === 'prototype';

        // Skip things we don't need.
        if (!isPrototypeAlias && left?.type === 'MemberExpression' && init) {
          if (
            canDisallow &&
            left.object.type === 'Identifier' &&
            init.type !== 'FunctionExpression' &&
            init.type !== 'ArrowFunctionExpression' &&
            init.type !== 'LogicalExpression' &&
            init.type !== 'ClassExpression'
          ) {
            return `${indent}// Skipped ${memberToString(left, source)} assignment.`;
          }
        }

        // e.g. `someVar = someOtherVarFuncOrCall`
        initSource = extractNodeSource(init, source)
          ?.trim()
          .replace(/;\s*$/, '') || 'undefined // [JsExtractor] Failed to extract initializer source.';
      }
    }

    // Wrap sequence expressions in parens to avoid syntax issues.
    if (!forceRemove && init && init.type === 'SequenceExpression' && !initSource.startsWith('(')) {
      initSource = `(${initSource})`;
    }

    const idName =
      node.type === 'VariableDeclarator' && node.id.type === 'Identifier' ? node.id.name :
        assignmentTarget && assignmentTarget.left.type === 'Identifier' ? assignmentTarget.left.name :
          assignmentTarget?.type === 'AssignmentExpression' ? memberToString(assignmentTarget.left, source)?.trim() : 'unknown';

    const assignmentExpression = `${idName} = ${initSource};`;

    // If it's not pre-declared and has an initializer, we need to use the `var` keyword (duh).
    if (node.type === 'VariableDeclarator' && node.init && !preDeclared) {
      return `${indent}var ${assignmentExpression}`;
    }

    return `${indent}${assignmentExpression}`;
  }

  /**
   * Processes extracted matches from the analyzer, handles dependencies, predeclares 
   * variables as needed, and generates an IIFE-wrapped output string containing the
   * code snippets and exported variables.
   * @param config - Configuration options for the emitter.
   */
  public buildScript(config: EmitterOptions): BuildScriptResult {
    const { maxDepth = Infinity, forceVarPredeclaration = false, exportRawValues = false, rawValueOnly: skipEmitFor = [] } = config;

    const extractions = this.analyzer.getExtractedMatches();
    const seen = new Set<string>(extractions.map((e) => e.metadata?.name || ''));

    const snippets: string[] = [];
    const predeclaredVarSet = new Set<string>();
    const exported = new Map<string, ESTree.Node>();
    const exportedRawValues: Record<string, any> = {};

    function registerPredeclaredVar(name?: string) {
      if (!name || name.includes('.')) return;
      predeclaredVarSet.add(name);
    }

    const visit = (metadata?: VariableMetadata, depth: number = 0, whitelistedDep?: string) => {
      if (!metadata || depth > maxDepth) return;

      for (const dependency of metadata.dependencies) {
        if (whitelistedDep && whitelistedDep !== dependency) {
          // If we haven't yet encountered the whitelisted dependency, skip this one.
          // And if we have, delete the whitelist var so that all subsequent dependencies are included.
          if (!seen.has(whitelistedDep))
            continue;
          whitelistedDep = undefined;
        }

        if (seen.has(dependency))
          continue;

        seen.add(dependency);

        const dependencyMetadata = this.analyzer.declaredVariables.get(dependency);

        if (!dependencyMetadata)
          continue;

        const shouldPredeclare = forceVarPredeclaration || dependencyMetadata.predeclared;
        if (shouldPredeclare) {
          registerPredeclaredVar(dependency);
        }

        visit(dependencyMetadata, depth + 1, whitelistedDep);

        snippets.push(this.renderNode(dependencyMetadata.node, shouldPredeclare, config));

        if (dependencyMetadata.prototypeAliases.size > 0) {
          for (const [ , aliasMembers ] of dependencyMetadata.prototypeAliases) {
            for (const member of aliasMembers) {
              // This is deeper than the first visit, so no need to pass the whitelist, we want all deps of the member to be included.
              visit(member, depth);
              snippets.push(this.renderNode(member.node, shouldPredeclare, config));
            }
          }
        }
      }
    };

    // Now we can process the main stuff.
    for (const extraction of extractions) {
      const fname = extraction.config.friendlyName;
      const shouldSkip = fname && skipEmitFor.includes(fname);

      if (extraction.metadata) {
        if (!shouldSkip)
          snippets.push(`${indent}//#region --- start [${fname || 'Unknown'}] ---`);

        const shouldPredeclare = (forceVarPredeclaration || extraction.metadata.predeclared) && !shouldSkip;
        const onlyProcessMatchContext = extraction.config.onlyProcessMatchContext;

        if (shouldPredeclare) {
          registerPredeclaredVar(extraction.metadata.name);
        }

        if (extraction.config.collectDependencies && !shouldSkip) {
          let whitelistedDep;

          const matchContextNode = extraction.matchContext;

          if (matchContextNode?.type === 'NewExpression' && onlyProcessMatchContext) {
            if (matchContextNode.callee.type === 'Identifier') {
              whitelistedDep = matchContextNode.callee.name;
            } else if (matchContextNode.callee.type === 'MemberExpression') {
              whitelistedDep = memberToString(matchContextNode.callee, this.analyzer.getSource()) || undefined;
            }
          }

          visit(extraction.metadata, undefined, whitelistedDep);
        }

        if (extraction.matchContext && fname) {
          exported.set(fname, extraction.matchContext);

          if (exportRawValues) {
            const ctx = extraction.matchContext;
            const src = this.analyzer.getSource();
            let rawValue: string | null = null;

            if (ctx.type === 'Property') {
              rawValue = extractNodeSource(ctx.value, src);
            } else if (ctx.type === 'Identifier') {
              rawValue = ctx.name;
            } else {
              rawValue = extractNodeSource(ctx, src);
            }

            exportedRawValues[fname] = rawValue;
          }
        }

        if (!shouldSkip) {
          if (!onlyProcessMatchContext) {
            snippets.push(this.renderNode(extraction.metadata.node, shouldPredeclare, config));
          }

          snippets.push(`${indent}//#endregion --- end [${fname || 'Unknown'}] ---\n`);
        }
      }
    }

    const output = [];

    output.push('const __jsExtractorGlobal = typeof globalThis !== \'undefined\' ? globalThis :');
    output.push(`${indent}typeof self !== 'undefined' ? self :`);
    output.push(`${indent}typeof window !== 'undefined' ? window :`);
    output.push(`${indent}typeof global !== 'undefined' ? global : {};\n`);

    output.push(`const exportedVars = (function(${this.analyzer.iifeParamName}) {`);
    output.push(`${indent}const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);`);
    output.push(`${indent}const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};`);
    output.push(`${indent}const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n`);

    if (predeclaredVarSet.size > 0) {
      output.push(`${indent}var ${Array.from(predeclaredVarSet).join(', ')};\n`);
    }

    output.push(snippets.join('\n'));

    const exportedVars = [];

    // Finally, export the matched stuff.
    for (const [ friendlyName, node ] of exported) {
      let currentFunctionNode: ESTree.Node | null = null;

      if (node.type === 'Identifier') {
        const decl = this.analyzer.declaredVariables.get(node.name);
        if (decl?.node?.type === 'VariableDeclarator' && decl.node.init?.type === 'FunctionExpression') {
          currentFunctionNode = decl.node;
        }
      } else if (node.type === 'CallExpression' || node.type === 'NewExpression' || node.type === 'VariableDeclarator') {
        currentFunctionNode = node;
      }

      if (currentFunctionNode) {
        const wrapper = createWrapperFunction(this.analyzer, friendlyName, currentFunctionNode);
        if (wrapper) {
          output.push(`${wrapper}\n`);
          exportedVars.push(friendlyName);
        }
      }
    }

    if (exportRawValues) {
      const rawJson = JSON.stringify(exportedRawValues, null, indent.length);
      const rawJsonLines = rawJson.split('\n');

      // Indent all lines except the first one..
      const formattedRawJson =
        `${rawJsonLines[0]}\n${rawJsonLines.slice(1).map((line) => indent + line).join('\n')}`;

      output.push(`${indent}const rawValues = ${formattedRawJson};\n`);

      exportedVars.push('rawValues');
    }

    output.push(`${indent}return { ${exportedVars.join(', ')} };`);
    output.push('})({});\n');

    return {
      output: output.join('\n'),
      exported: exportedVars,
      exportedRawValues: exportRawValues ? exportedRawValues : undefined
    };
  }
}