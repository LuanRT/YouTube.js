import type { ESTree } from 'meriyah';
import { parseScript } from 'meriyah';
import { WALK_STOP, jsBuiltIns, memberBaseName, memberToString, walkAst } from './helpers.js';

export interface ExtractionConfig {
  /**
   * Predicate that determines whether the current node should be considered a match.
   */
  match: (node: ESTree.Node, parent: ESTree.Node | null, ancestors: ESTree.Node[]) => boolean | ESTree.Node;
  /**
   * When `false`, dependency resolution is not enforced and extractions are marked as ready immediately
   * when `stopWhenReady` is true.
   */
  collectDependencies?: boolean;
  /**
   * When `true`, traversal stops once the extraction is matched and all its dependencies (when `collectDependencies=true`) resolve.
   * Only useful for small functions/vars without too many dependencies.
   */
  stopWhenReady?: boolean;
  /**
   * Name for easier identification of extractions.
   */
  friendlyName?: string;
}

export interface AnalyzerOptions {
  /**
   * One or more extraction configurations to look for while traversing.
   */
  extractions?: ExtractionConfig | ExtractionConfig[];
}

export interface VariableMetadata {
  name: string;
  node?: any;
  dependencies: Set<string>;
  dependents: Set<string>;
  predeclared: boolean;
}

export interface ExtractionState {
  config: ExtractionConfig;
  node?: ESTree.Node;
  metadata?: VariableMetadata;
  dependencies: Set<string>;
  dependents: Set<string>;
  matchContext?: ESTree.Node;
  ready: boolean;
}

export type ExtractionMatch = ExtractionState;

type Scope = {
  names: Set<string>;
  type: 'function' | 'block'
};

/**
 * Performs dependency-aware extraction of variables inside an IIFE.
 */
export class JsAnalyzer {
  private readonly source: string;
  private readonly programAst: ESTree.Program;
  private readonly hasExtractions: boolean;
  private readonly extractionStates: ExtractionState[];
  private readonly dependentsTracker: Map<string, Set<string>> = new Map();

  public declaredVariables: Map<string, VariableMetadata> = new Map();
  public iifeParamName: string | null = null;

  /**
   * Creates a new instance over the provided source.
   * @param code JavaScript source to parse and inspect.
   * @param options Optional traversal settings.
   */
  constructor(code: string, options: AnalyzerOptions = {}) {
    this.source = code;
    const extractionConfigs = options.extractions
      ? Array.isArray(options.extractions)
        ? options.extractions
        : [ options.extractions ]
      : [];

    this.extractionStates = extractionConfigs.map((config) => ({
      config: { collectDependencies: true, stopWhenReady: true, ...config },
      dependencies: new Set<string>(),
      dependents: new Set<string>(),
      ready: false
    }));

    this.hasExtractions = this.extractionStates.length > 0;

    this.programAst = parseScript(code, {
      ranges: true,
      loc: false,
      module: false
    });

    this.analyzeAst();
  }

  /**
   * Walks the AST to collect declarations and resolve initial targets.
   */
  private analyzeAst(): void {
    let iifeBody: ESTree.Node | null = null;

    walkAst(this.programAst, (currentNode, parentNode, ancestors) => {
      if (
        !iifeBody &&
        currentNode.type === 'CallExpression' &&
        currentNode.callee.type === 'FunctionExpression' &&
        parentNode?.type === 'ExpressionStatement' &&
        ancestors.length >= 1
      ) {
        const functionExpression = currentNode.callee;
        const firstParam = functionExpression.params.length > 0 ? functionExpression.params[0] : null;

        if (!this.iifeParamName && firstParam?.type === 'Identifier') {
          this.iifeParamName = firstParam.name; // Maybe it should be an array?
        }

        if (functionExpression.body?.type === 'BlockStatement') {
          iifeBody = functionExpression.body;
        }

        // Return cause there's nothing else worth checking at this level.
        return;
      }

      // Program > ExpressionStatement > CallExpression > FunctionExpression > BlockStatement
      if (!iifeBody || ancestors.length !== 5 || ancestors[4] !== iifeBody) return;

      // Now let's look for declarations and assignments within the IIFE body.
      switch (currentNode.type) {
        case 'ExpressionStatement': {
          const assignment = currentNode.expression;
          if (assignment.type !== 'AssignmentExpression') return;

          const left = assignment.left;
          const right = assignment.right;

          if (left.type === 'Identifier') {
            const existingVariable = this.declaredVariables.get(left.name);
            if (!existingVariable) return;

            existingVariable.node.init = right;

            if (this.needsDependencyAnalysis(right)) {
              existingVariable.dependencies = this.findDependencies(assignment.right, left.name);
            }

            if (this.onMatch(existingVariable.node, parentNode, ancestors, existingVariable)) return WALK_STOP;
          } else if (assignment.left.type === 'MemberExpression') {
            const memberName = memberToString(assignment.left, this.source);
            if (!memberName || this.declaredVariables.has(memberName)) return;

            const metadata: VariableMetadata = {
              name: memberName,
              node: currentNode,
              dependents: this.dependentsTracker.get(memberName) || new Set<string>(),
              predeclared: false,
              dependencies: this.findDependencies(right, memberName)
            };

            const baseName = memberBaseName(assignment.left, this.source);
            if (baseName && baseName !== memberName && !baseName.startsWith('this.')) {
              metadata.dependencies.add(baseName.replace('.prototype', ''));
            }

            if (this.dependentsTracker.has(memberName)) {
              this.dependentsTracker.delete(memberName);
            }

            this.declaredVariables.set(memberName, metadata);

            if (this.onMatch(currentNode, parentNode, ancestors, metadata)) return WALK_STOP;
          }
          break;
        }
        case 'VariableDeclaration': {
          for (const declaration of currentNode.declarations) {
            if (declaration.id.type !== 'Identifier') continue;

            const metadata: VariableMetadata = {
              name: declaration.id.name,
              node: declaration,
              dependents: this.dependentsTracker.get(declaration.id.name) || new Set<string>(),
              dependencies: new Set(),
              predeclared: false
            };

            const init = declaration.init;

            if (!init && currentNode.kind === 'var') {
              metadata.predeclared = true;
            } else if (init && this.needsDependencyAnalysis(init)) {
              // "var x, y, z;"
              metadata.dependencies = this.findDependencies(init, metadata.name);
            }

            if (this.dependentsTracker.has(metadata.name)) {
              this.dependentsTracker.delete(metadata.name);
            }

            this.declaredVariables.set(metadata.name, metadata);

            if (this.onMatch(declaration, currentNode, ancestors, metadata)) return WALK_STOP;
          }
          break;
        }
      }
    });
  }

  /**
 * Quick check if node type requires dependency analysis
 */
  private needsDependencyAnalysis(node: ESTree.Node | null): boolean {
    if (!node) return false;
    switch (node.type) {
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
      case 'ArrayExpression':
      case 'LogicalExpression':
      case 'CallExpression':
      case 'NewExpression':
      case 'MemberExpression':
      case 'BinaryExpression':
      case 'ConditionalExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'Identifier':
        return true;
      default:
        return false;
    }
  }

  /**
    * Records a match, attaches metadata, and updates readiness state.
    * @returns True when traversal can stop as a result of the match.
    */
  private onMatch(
    node: ESTree.Node,
    parentNode: ESTree.Node | null,
    ancestors: ESTree.Node[],
    metadata?: VariableMetadata
  ): boolean {
    if (!this.hasExtractions) return false;

    let matched = false;
    let result: ESTree.Node | boolean = false;

    for (const state of this.extractionStates) {
      if (!state.node) {
        if (node.type === 'VariableDeclarator' && !node.init) continue;
        result = state.config.match(node, parentNode, ancestors);
        if (!result) continue;
        state.node = node;
      } else if (state.node !== node) {
        // Use this as a chance to refresh readiness in case dependencies were resolved since last time
        // we checked.
        this.refreshExtractionState(state);

        if (this.shouldStopTraversal()) {
          return true;
        }

        continue;
      }

      matched = true;

      if (metadata) {
        state.metadata = metadata;
        state.dependents = metadata.dependents;
        state.dependencies = metadata.dependencies;
        if (typeof result !== 'boolean')
          state.matchContext = result;
      }

      this.refreshExtractionState(state);
    }

    if (!matched) return false;

    return this.shouldStopTraversal();
  }

  /**
   * Refreshes the readiness state of an extraction target based on its dependencies
   * and/or configuration.
   * @param state - State to refresh.
   */
  private refreshExtractionState(state: ExtractionState): void {
    if (!state.node) {
      state.ready = false;
      return;
    }

    if (state.config.collectDependencies === false) {
      state.ready = true;
      return;
    }

    if (!state.metadata) {
      state.ready = false;
      return;
    }

    state.ready = this.areDependenciesResolved(state.dependencies);
  }

  /**
   * Determines whether traversal should stop based on extraction states and configuration.
   */
  private shouldStopTraversal(): boolean {
    if (!this.hasExtractions) return false;

    let hasStoppingTarget = false;

    for (const state of this.extractionStates) {
      if (state.config.stopWhenReady === false) continue;

      hasStoppingTarget = true;

      if (!state.node) return false;
      if (!state.ready) return false;
    }

    return hasStoppingTarget;
  }

  /**
  * Checks if every dependency resolves to a declaration or built-in symbol.
  * @param dependencies - Dependencies to validate.
  * @param seen - Tracks recursively visited identifiers.
  */
  private areDependenciesResolved(
    dependencies: Set<string>,
    seen: Set<string> = new Set()
  ): boolean {
    if (!dependencies || dependencies.size === 0)
      return true;

    for (const dependency of dependencies) {
      if (!dependency) continue;
      if (jsBuiltIns.has(dependency)) continue;
      if (dependency === this.iifeParamName) continue;

      if (seen.has(dependency)) continue;

      const depMeta = this.declaredVariables.get(dependency);
      if (!depMeta) return false;

      seen.add(dependency);

      if (!this.areDependenciesResolved(depMeta.dependencies, seen)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Collects free identifier dependencies reachable from the provided AST node.
   * @param rootNode - AST node to search for dependencies.
   * @param identifierName - Name of the identifier represented by `rootNode`, used for tracking dependents.
   */
  private findDependencies(rootNode: ESTree.Node, identifierName: string): Set<string> {
    const dependencies = new Set<string>();
    if (!rootNode) return dependencies;

    const scopeStack: Scope[] = [
      {
        names: new Set<string>(),
        type: 'block'
      }
    ];

    const currentScope = () => scopeStack[scopeStack.length - 1];

    const isInScope = (name: string) => {
      for (let i = scopeStack.length - 1; i >= 0; i--) {
        if (scopeStack[i].names.has(name)) return true;
      }
      return false;
    };

    const rootIdentifierName = 'id' in rootNode && rootNode?.id?.type === 'Identifier' ? rootNode.id.name : undefined;

    const collectBindingIdentifiers = (pattern: ESTree.Node | null, target: Set<string>) => {
      if (!pattern)
        return;

      switch (pattern.type) {
        case 'Identifier':
          target.add(pattern.name);
          break;
        case 'ObjectPattern':
          for (const prop of pattern.properties) {
            if (prop.type === 'RestElement') {
              collectBindingIdentifiers(prop.argument, target);
            } else if (prop.type === 'Property') {
              collectBindingIdentifiers(prop.value, target);
            }
          }
          break;
        case 'ArrayPattern':
          for (const el of pattern.elements) {
            if (el) collectBindingIdentifiers(el, target);
          }
          break;
        case 'RestElement':
          collectBindingIdentifiers(pattern.argument, target);
          break;
        case 'AssignmentPattern':
          collectBindingIdentifiers(pattern.left, target);
          break;
      }
    };

    const collectParams = (fnNode: ESTree.ArrowFunctionExpression | ESTree.FunctionExpression | ESTree.FunctionDeclaration, target: Set<string>) => {
      if (!fnNode?.params) return;
      for (const p of fnNode.params) collectBindingIdentifiers(p, target);
    };

    walkAst(rootNode, {
      enter: (n, parent) => {
        switch (n.type) {
          case 'FunctionDeclaration':
          case 'FunctionExpression':
          case 'ArrowFunctionExpression': {
            const isDecl = n.type === 'FunctionDeclaration';
            const fnName = 'id' in n ? n.id?.name : undefined;

            // Add func name to scope if it's a declaration, this way it won't be considered a dep itself.
            if (isDecl && fnName) {
              currentScope().names.add(fnName);
            }

            // Enter function scope.
            const fnScope: Scope = { names: new Set<string>(), type: 'function' };

            if (n.type === 'FunctionExpression' && fnName) {
              fnScope.names.add(fnName);
            }

            collectParams(n, fnScope.names);
            scopeStack.push(fnScope);
            break;
          }
          case 'BlockStatement': {
            scopeStack.push({ names: new Set<string>(), type: 'block' });
            break;
          }
          case 'CatchClause': {
            const s = new Set<string>();
            if (n.param) collectBindingIdentifiers(n.param, s);
            scopeStack.push({ names: s, type: 'block' });
            break;
          }
          case 'VariableDeclaration': {
            const scope = currentScope();
            for (const d of n.declarations) {
              collectBindingIdentifiers(d.id, scope.names);
            }
            break;
          }
          case 'ClassDeclaration': {
            if (n.id?.name) {
              currentScope().names.add(n.id.name);
            }
            break;
          }
          case 'LabeledStatement': { // YouTube uses these things for some reason.
            if (n.label?.type === 'Identifier') currentScope().names.add(n.label.name);
            break;
          }
          case 'Identifier': {
            if (n.name === rootIdentifierName) return;

            // Ignore if it's a property name (e.g., "obj.prop" or "{prop: 1}"", we don't care about the "prop" name itself).
            if (parent?.type === 'Property' && parent.key === n && !parent.computed) return;
            if (parent?.type === 'MemberExpression' && parent.property === n && !parent.computed) {
              if (parent.object.type === 'ThisExpression') return; // Skip 'this.property' stuff.

              const full = memberToString(parent, this.source);
              if (!full) return;

              const declaredVariable = this.declaredVariables.get(full);
              if (declaredVariable) {
                declaredVariable.dependents.add(identifierName);
                dependencies.add(full);
              } else if (parent.object.type === 'Identifier') {
                const baseName = parent.object.name;
                const declaredBaseVariable = this.declaredVariables.get(baseName);
                if (
                  (declaredBaseVariable || baseName === this.iifeParamName) &&
                  !isInScope(baseName) && !jsBuiltIns.has(baseName)
                ) {
                  declaredBaseVariable?.dependents.add(identifierName);
                  dependencies.add(full);

                  // We have this object, but not the full member chain.
                  const existingTracker = this.dependentsTracker.get(full);
                  if (existingTracker) {
                    existingTracker.add(identifierName);
                  } else {
                    this.dependentsTracker.set(full, new Set([ identifierName ]));
                  }
                }
              }
              return;
            }

            if (isInScope(n.name) || jsBuiltIns.has(n.name)) return;

            // It's a free variable, so it's a dependency.
            dependencies.add(n.name);

            const declaredVariable = this.declaredVariables.get(n.name);
            if (declaredVariable) {
              declaredVariable.dependents.add(identifierName);
            } else {
              // Not declared yet, track for future resolution.
              const existing = this.dependentsTracker.get(n.name);
              if (existing) {
                existing.add(identifierName);
              } else {
                this.dependentsTracker.set(n.name, new Set([ identifierName ]));
              }
            }
            break;
          }
        }
      },
      leave: (n: any) => {
        switch (n.type) {
          case 'FunctionDeclaration':
          case 'FunctionExpression':
          case 'ArrowFunctionExpression':
          case 'BlockStatement':
          case 'CatchClause':
            if (scopeStack.length > 1) scopeStack.pop();
            break;
        }
      }
    });

    return dependencies;
  }

  /**
   * Returns the current set of matched extractions.
   */
  public getExtractedMatches(): ExtractionMatch[] {
    return this.extractionStates
      .filter((state) => !!state.node);
  }

  /**
   * Returns the raw, original source.
   */
  public getSource(): string {
    return this.source;
  }
}