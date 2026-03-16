import { parseScript, type ESTree } from 'meriyah';
import { jsBuiltIns, memberBaseName, memberToString, walkAst } from './helpers.ts';

export interface ExtractionConfig {
  /**
   * Predicate that determines whether the current node should be considered a match.
   */
  match: (node: ESTree.Node) => boolean | ESTree.Node;
  /**
   * When `false`, dependency resolution is not enforced and extractions are marked as ready immediately
   * when `stopWhenReady` is true.
   */
  collectDependencies?: boolean;
  /**
   * When `true`, traversal stops once the extraction is matched and all its dependencies (when `collectDependencies=true`) resolve.
   * Only useful for small functions/vars without too many dependencies. Deeper dependency trees will usually have the unresolvable
   * member expression here and there, for example:
   * ```js
   *  var Vmi = g.dX.window, Wr = Vmi?.yt?.config_ || Vmi?.ytcfg?.data_ || {};
   * ```
   * 
   * Since `Vmi.ytcfg` is a dependency, it will never resolve because it comes from `g.dX.window`, which is an external object we don't have access to. 
   * In cases like this, `stopWhenReady` option does nothing useful.
   */
  stopWhenReady?: boolean;
  /**
   * If `true`, dependency collection is limited to the match context node itself.
   */
  onlyProcessMatchContext?: boolean;
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
  prototypeAliases: Map<string, Set<VariableMetadata>>;
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
  private pendingPrototypeAliasBinding: [string, VariableMetadata] | null = null;

  public iifeParamName: string | null = null;
  public readonly declaredVariables: Map<string, VariableMetadata> = new Map();

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
    let iifeBody: ESTree.BlockStatement | undefined;

    for (const statement of this.programAst.body) {
      if (statement.type === 'ExpressionStatement' && statement.expression.type === 'CallExpression') {
        const callExpr = statement.expression;
        if (callExpr.callee.type === 'FunctionExpression') {
          const funcExpr = callExpr.callee;
          const firstParam = funcExpr.params.length > 0 ? funcExpr.params[0] : null;

          if (!this.iifeParamName && firstParam?.type === 'Identifier') {
            this.iifeParamName = firstParam.name; // Maybe it should be an array?
          }

          if (funcExpr.body?.type === 'BlockStatement') {
            iifeBody = funcExpr.body;
            break; // Found it, no need to continue.
          }
        }
      }
    }

    if (!iifeBody) return;

    for (const currentNode of iifeBody.body) {
      switch (currentNode.type) {
        case 'ExpressionStatement': {
          const assignment = currentNode.expression;
          if (assignment.type !== 'AssignmentExpression') continue;

          const left = assignment.left;
          const right = assignment.right;

          // Detect things like `a.b = g.c.prototype` so later `a.b.foo = ...` can be attributed back to `g.c`.
          if (
            right.type === 'MemberExpression' &&
            !right.computed &&
            right.property.type === 'Identifier' &&
            right.property.name === 'prototype'
          ) {
            const prototypeSourceExpr = memberToString(right, this.source);
            const aliasTargetExpr = left.type === 'Identifier' ? left.name : memberToString(left, this.source);

            if (prototypeSourceExpr) {
              const prototypeOwnerMeta = this.declaredVariables.get(
                prototypeSourceExpr.replace('.prototype', '')
              );

              if (aliasTargetExpr && prototypeOwnerMeta) {
                const aliasedPrototypeMembers = new Set<VariableMetadata>();
                const aliasExpr = `${aliasTargetExpr}.`; // Had to add a dot here so we can detect it later when matching member expressions..

                // Activate an alias binding context, so subsequent member assignments to the alias (`a.b.foo = ...`) can be tracked.
                // NOTE: This assumes that the alias members come right after this declaration and are grouped together in the code, hehe :)
                this.pendingPrototypeAliasBinding = [ aliasExpr, prototypeOwnerMeta ];

                prototypeOwnerMeta.prototypeAliases.set(aliasExpr, aliasedPrototypeMembers);
              }
            }
          }

          if (left.type === 'Identifier') {
            // This identifier existing means it was a pre-declared and
            // we just got to it.
            const existingVariable = this.declaredVariables.get(left.name);
            if (!existingVariable) continue;

            existingVariable.node.init = right;

            if (this.needsDependencyAnalysis(right)) {
              existingVariable.dependencies = this.findDependencies(assignment.right, left.name);
            }

            if (this.onMatch(existingVariable.node, existingVariable)) return;
          } else if (assignment.left.type === 'MemberExpression') {
            const memberName = memberToString(assignment.left, this.source);
            const activeAliasExpr = this.pendingPrototypeAliasBinding?.[0];

            // While an alias binding is active, collect member assignments made through the alias (`g.q.foo = ...`).
            if (activeAliasExpr && (memberName?.includes(activeAliasExpr) || memberName === activeAliasExpr.slice(0, -1))) {
              const aliasOwnerMeta = this.declaredVariables.get(this.pendingPrototypeAliasBinding?.[1].name || '');
              if (aliasOwnerMeta) {
                const existingAliasedMembers = aliasOwnerMeta.prototypeAliases.get(activeAliasExpr);

                const aliasedMemberMeta: VariableMetadata = {
                  name: memberName,
                  node: currentNode,
                  dependents: this.dependentsTracker.get(memberName) || new Set<string>(),
                  predeclared: false,
                  prototypeAliases: new Map<string, Set<VariableMetadata>>(),
                  dependencies: this.findDependencies(right, memberName)
                };

                if (existingAliasedMembers) {
                  existingAliasedMembers.add(aliasedMemberMeta);
                } else {
                  aliasOwnerMeta.prototypeAliases.set(activeAliasExpr, new Set([ aliasedMemberMeta ]));
                }
              }
            } else {
              this.pendingPrototypeAliasBinding = null;
            }

            if (!memberName || this.declaredVariables.has(memberName)) continue;

            const metadata: VariableMetadata = {
              name: memberName,
              node: currentNode,
              dependents: this.dependentsTracker.get(memberName) || new Set<string>(),
              predeclared: false,
              prototypeAliases: new Map<string, Set<VariableMetadata>>(),
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

            if (this.onMatch(currentNode, metadata)) return;
          }
          break;
        }
        case 'VariableDeclaration': {
          this.pendingPrototypeAliasBinding = null;

          for (const declaration of currentNode.declarations) {
            if (declaration.id.type !== 'Identifier') continue;

            const metadata: VariableMetadata = {
              name: declaration.id.name,
              node: declaration,
              dependents: this.dependentsTracker.get(declaration.id.name) || new Set<string>(),
              prototypeAliases: new Map<string, Set<VariableMetadata>>(),
              dependencies: new Set(),
              predeclared: false
            };

            const init = declaration.init;

            if (!init && currentNode.kind === 'var') {
              metadata.predeclared = true; // "var x, y, z;"
            } else if (init && this.needsDependencyAnalysis(init)) {
              metadata.dependencies = this.findDependencies(init, metadata.name);
            }

            if (this.dependentsTracker.has(metadata.name)) {
              this.dependentsTracker.delete(metadata.name);
            }

            this.declaredVariables.set(metadata.name, metadata);

            if (this.onMatch(declaration, metadata)) return;
          }
          break;
        }
      }
    }
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
      case 'ClassExpression':
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
    metadata?: VariableMetadata
  ): boolean {
    if (!this.hasExtractions) return false;

    let matched = false;
    let result: ESTree.Node | boolean = false;

    for (const state of this.extractionStates) {
      if (!state.node) {
        if (node.type === 'VariableDeclarator' && !node.init) continue;

        result = state.config.match(node);

        if (!result) continue;
        state.node = node;

        matched = true;

        if (metadata) {
          state.metadata = metadata;
          state.dependents = metadata.dependents;
          state.dependencies = metadata.dependencies;
          if (typeof result !== 'boolean')
            state.matchContext = result;
        }

        this.refreshExtractionState(state);
      } else if (state.node !== node) {
        // Use this as a chance to refresh readiness in case dependencies were resolved since last time
        // we checked.
        this.refreshExtractionState(state);

        if (this.shouldStopTraversal()) {
          return true;
        }
      }
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
          // Note for anybody debugging this in the future:
          // *DO NOT* add MethodDefinition here.
          // MethodDefinition.value is a FunctionExpression, so it is already handled...
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
            // var hoists to function scope...
            const targetScope = n.kind === 'var'
              ? scopeStack.findLast((s) => s.type === 'function') ?? currentScope()
              : currentScope();
            for (const d of n.declarations) {
              collectBindingIdentifiers(d.id, targetScope.names);
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
            // Ignore class method names. They are declarations, not external dependencies.
            if (parent?.type === 'MethodDefinition' && parent.key === n && !parent.computed) return;
            if (parent?.type === 'MemberExpression' && parent.property === n && !parent.computed) {
              if (parent.object.type === 'ThisExpression') return; // Skip 'this.property', etc.

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

            if (parent?.type === 'MetaProperty') {
              return; // Skip stuff like "new.target" or "import.meta"
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
          case 'ForStatement':
          case 'ForInStatement':
          case 'ForOfStatement': {
            scopeStack.push({ names: new Set<string>(), type: 'block' });
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
          case 'ForStatement':
          case 'ForInStatement':
          case 'ForOfStatement':
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