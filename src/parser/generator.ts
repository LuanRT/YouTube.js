/* eslint-disable no-cond-assign */
import { Platform } from '../utils/Utils.js';
import Author from './classes/misc/Author.js';
import Text from './classes/misc/Text.js';
import Thumbnail from './classes/misc/Thumbnail.js';
import NavigationEndpoint from './classes/NavigationEndpoint.js';
import { YTNode, YTNodeConstructor } from './helpers.js';
import Parser from './parser.js';

export type MiscInferenceType = {
  type: 'misc',
  misc_type: 'NavigationEndpoint',
  optional: boolean,
  endpoint: NavigationEndpoint
} | {
  type: 'misc',
  misc_type: 'Text',
  optional: boolean,
  text: string,
  endpoint?: NavigationEndpoint
} | {
  type: 'misc',
  misc_type: 'Thumbnail',
  optional: boolean,
} | {
  type: 'misc',
  misc_type: 'Author',
  optional: boolean,
  params: [string, string?],
}

export type InferenceType = {
  type: 'renderer',
  renderers: string[],
  optional: boolean,
} | {
  type: 'renderer_list',
  renderers: string[],
  optional: boolean,
} | MiscInferenceType | {
  type: 'unknown',
  optional: boolean,
};

export type KeyInfo = (readonly [string, InferenceType])[];

export class YTNodeGenerator {
  static #ignored_keys = new Set([
    'trackingParams', 'accessibility', 'accessibilityData'
  ]);
  static #renderers_examples: Record<string, any> = {};
  static #camelToSnake(str: string) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }
  static #logNewClass(classname: string, key_info: KeyInfo) {
    console.warn(`${classname} not found!\nThis is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!\nIntrospected and JIT generated this class in the meantime:\n${this.generateTypescriptClass(classname, key_info)}`);
  }
  static #logChangedKeys(classname: string, key_info: KeyInfo, changed_keys: KeyInfo) {
    console.warn(`${classname} changed!\nThe following keys where altered: ${changed_keys.map(([ key ]) => this.#camelToSnake(key)).join(', ')}\nThe class has changed to:\n${this.generateTypescriptClass(classname, key_info)}`);
  }
  static isIgnoredKey(key: string | symbol) {
    return typeof key === 'string' && this.#ignored_keys.has(key);
  }
  static mergeKeyInfo(key_info: KeyInfo, new_key_info: KeyInfo) {
    const changed_keys = new Map<string, InferenceType>();
    const current_keys = new Set(key_info.map(([ key ]) => key));
    const new_keys = new Set(new_key_info.map(([ key ]) => key));

    const added_keys = new_key_info.filter(([ key ]) => !current_keys.has(key));
    const removed_keys = key_info.filter(([ key ]) => !new_keys.has(key));

    const common_keys = key_info.filter(([ key ]) => new_keys.has(key));

    const new_key_map = new Map(new_key_info);

    for (const [ key, type ] of common_keys) {
      const new_type = new_key_map.get(key);
      if (!new_type) continue;
      if (type.type !== new_type.type) {
        // We've got a type mismatch, this is unknown, we do not resolve unions
        changed_keys.set(key, {
          type: 'unknown',
          optional: true
        });
        continue;
      }
      // We've got the same type, so we can now resolve the changes
      switch (type.type) {
        case 'renderer':
          {
            if (new_type.type !== 'renderer') continue;
            const union_map = {
              ...type.renderers,
              ...new_type.renderers
            };
            const either_optional = type.optional || new_type.optional;
            const resolved_key: InferenceType = {
              type: 'renderer',
              renderers: union_map,
              optional: either_optional
            };
            const did_change = JSON.stringify({
              ...resolved_key,
              renderers: Object.keys(resolved_key.renderers)
            }) !== JSON.stringify({
              ...type,
              renderers: Object.keys(type.renderers)
            });
            if (did_change) changed_keys.set(key, resolved_key);
          }
          break;
        case 'renderer_list':
          {
            if (new_type.type !== 'renderer_list') continue;
            const union_map = {
              ...type.renderers,
              ...new_type.renderers
            };
            const either_optional = type.optional || new_type.optional;
            const resolved_key: InferenceType = {
              type: 'renderer_list',
              renderers: union_map,
              optional: either_optional
            };
            const did_change = JSON.stringify({
              ...resolved_key,
              renderers: Object.keys(resolved_key.renderers)
            }) !== JSON.stringify({
              ...type,
              renderers: Object.keys(type.renderers)
            });
            if (did_change) changed_keys.set(key, resolved_key);
          }
          break;
        case 'misc':
          {
            if (new_type.type !== 'misc') continue;
            if (type.misc_type !== new_type.misc_type) {
              // We've got a type mismatch, this is unknown, we do not resolve unions
              changed_keys.set(key, {
                type: 'unknown',
                optional: true
              });
            }
            switch (type.misc_type) {
              case 'Author':
                {
                  if (new_type.misc_type !== 'Author') break;
                  const had_optional_param = type.params[1] || new_type.params[1];
                  const either_optional = type.optional || new_type.optional;
                  const resolved_key: MiscInferenceType = {
                    type: 'misc',
                    misc_type: 'Author',
                    optional: either_optional,
                    params: [ new_type.params[0], had_optional_param ]
                  };
                  const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
                  if (did_change) changed_keys.set(key, resolved_key);
                }
                break;
              // Other cases can not change
            }
          }
          break;
      }
    }

    for (const [ key, type ] of added_keys) {
      changed_keys.set(key, {
        ...type,
        optional: true
      });
    }

    for (const [ key, type ] of removed_keys) {
      changed_keys.set(key, {
        ...type,
        optional: true
      });
    }

    const unchanged_keys = key_info.filter(([ key ]) => !changed_keys.has(key));

    const resolved_key_info_map = new Map([ ...unchanged_keys, ...changed_keys ]);
    const resolved_key_info = [ ...resolved_key_info_map.entries() ];

    return {
      resolved_key_info,
      changed_keys: [ ...changed_keys.entries() ]
    };
  }
  static createRuntimeClass(classname: string, key_info: KeyInfo): YTNodeConstructor {
    this.#logNewClass(classname, key_info);
    const node = class extends YTNode {
      static type = classname;
      static #key_info = new Map<string, InferenceType>();
      static set key_info(key_info: KeyInfo) {
        this.#key_info = new Map(key_info);
      }
      static get key_info() {
        return [ ...this.#key_info.entries() ];
      }
      constructor(data: any) {
        super();
        const {
          key_info,
          unimplemented_dependencies
        } = YTNodeGenerator.introspect(data);

        const {
          resolved_key_info,
          changed_keys
        } = YTNodeGenerator.mergeKeyInfo(node.key_info, key_info);

        const did_change = changed_keys.length > 0;

        if (did_change) {
          node.key_info = resolved_key_info;
          YTNodeGenerator.#logChangedKeys(classname, node.key_info, changed_keys);
        }

        for (const [ name, data ] of unimplemented_dependencies)
          YTNodeGenerator.generateRuntimeClass(name, data);

        for (const [ key, value ] of key_info) {
          let snake_key = YTNodeGenerator.#camelToSnake(key);
          if (value.type === 'misc' && value.misc_type === 'NavigationEndpoint')
            snake_key = 'endpoint';
          Reflect.set(this, snake_key, YTNodeGenerator.parse(key, value, data));
        }
      }
    };
    node.key_info = key_info;
    Object.defineProperty(node, 'name', { value: classname, writable: false });
    return node;
  }
  static introspect(classdata: string) {
    const key_info = this.#introspect(classdata);
    const dependencies = new Map<string, any>();
    for (const [ , value ] of key_info) {
      if (value.type === 'renderer' || value.type === 'renderer_list')
        value.renderers.forEach((renderer) => {
          const example = this.#renderers_examples.get(renderer);
          if (example)
            dependencies.set(renderer, example);
        });
    }
    const unimplemented_dependencies = Array.from(dependencies).filter(([ classname ]) => !Parser.hasParser(classname));

    return {
      key_info,
      unimplemented_dependencies
    };
  }
  static generateRuntimeClass(classname: string, classdata: any) {
    const {
      key_info,
      unimplemented_dependencies
    } = this.introspect(classdata);

    const JITNode = this.createRuntimeClass(classname, key_info);
    Parser.addRuntimeParser(classname, JITNode);

    for (const [ name, data ] of unimplemented_dependencies)
      this.generateRuntimeClass(name, data);

    return JITNode;
  }
  static generateTypescriptClass(classname: string, key_info: KeyInfo) {
    const props: string[] = [];
    const constructor_lines = [
      'super();'
    ];
    for (const [ key, value ] of key_info) {
      let snake_key = this.#camelToSnake(key);
      if (value.type === 'misc' && value.misc_type === 'NavigationEndpoint')
        snake_key = 'endpoint';
      props.push(`${snake_key}${value.optional ? '?' : ''}: ${this.toTypeDeclaration(value)};`);
      constructor_lines.push(`this.${snake_key} = ${this.toParser(key, value)};`);
    }
    return `class ${classname} extends YTNode {\n  static type = '${classname}';\n\n  ${props.join('\n  ')}\n\n  constructor(data: any) {\n    ${constructor_lines.join('\n    ')}\n  }\n}\n`;
  }
  static toTypeDeclaration(inference_type: InferenceType) {
    switch (inference_type.type) {
      case 'renderer':
      {
        return `${inference_type.renderers.map((type) => `YTNodes.${type}`).join(' | ')}`;
      }
      case 'renderer_list':
      {
        return `ObservedArray<${inference_type.renderers.map((type) => `YTNodes.${type}`).join(' | ')}>`;
      }
      case 'misc':
        switch (inference_type.misc_type) {
          case 'Thumbnail':
            return 'Thumbnail[]';
          default:
            return inference_type.misc_type;
        }
        throw new Error('Unreachable code reached! Switch missing case!');
      case 'unknown':
        return '/* TODO: determine correct type */ unknown';
    }
  }
  static toParser(key: string, inference_type: InferenceType) {
    let parser = 'undefined';
    switch (inference_type.type) {
      case 'renderer':
        {
          parser = `Parser.parseItem(data.${key}, [${inference_type.renderers.map((type) => `YTNodes.${type}`).join(', ')}])`;
        }
        break;
      case 'renderer_list':
        {
          parser = `Parser.parse(data.${key}, true, [${inference_type.renderers.map((type) => `YTNodes.${type}`).join(', ')}])`;
        }
        break;
      case 'misc':
        switch (inference_type.misc_type) {
          case 'Thumbnail':
            parser = `Thumbnail.fromResponse(data.${key})`;
            break;
          case 'Author':
          {
            const author_parser = `new Author(data.${inference_type.params[0]}, ${inference_type.params[1] ? `data.${inference_type.params[1]}` : 'undefined'})`;
            if (inference_type.optional)
              return `Reflect.has(data, '${inference_type.params[0]}') ? ${author_parser} : undefined`;
            return author_parser;
          }
          default:
            parser = `new ${inference_type.misc_type}(data.${key})`;
            break;
        }
        if (parser === 'undefined')
          throw new Error('Unreachable code reached! Switch missing case!');
        break;
      case 'unknown':
        parser = `data.${key}`;
        break;
    }
    if (inference_type.optional)
      return `Reflect.has(data, '${key}') ? ${parser} : undefined`;
    return parser;
  }
  static parse(key: string, inference_type: InferenceType, data: any) {
    const should_optional = !inference_type.optional || Reflect.has(data, key);
    switch (inference_type.type) {
      case 'renderer':
      {
        return should_optional ? Parser.parseItem(data[key], inference_type.renderers.map((type) => Parser.getParserByName(type))) : undefined;
      }
      case 'renderer_list':
      {
        return should_optional ? Parser.parse(data[key], true, inference_type.renderers.map((type) => Parser.getParserByName(type))) : undefined;
      }
      case 'misc':
        switch (inference_type.misc_type) {
          case 'NavigationEndpoint':
            return should_optional ? new NavigationEndpoint(data[key]) : undefined;
          case 'Text':
            return should_optional ? new Text(data[key]) : undefined;
          case 'Thumbnail':
            return should_optional ? Thumbnail.fromResponse(data[key]) : undefined;
          case 'Author':
          {
            const author_should_optional = !inference_type.optional || Reflect.has(data, inference_type.params[0]);
            return author_should_optional ? new Author(data[inference_type.params[0]], inference_type.params[1] ? data[inference_type.params[1]] : undefined) : undefined;
          }
        }
        throw new Error('Unreachable code reached! Switch missing case!');
      case 'unknown':
        return data[key];
    }
  }
  static #passOne(classdata: any) {
    const keys = Reflect.ownKeys(classdata).filter((key) => !this.isIgnoredKey(key)).filter((key) => typeof key === 'string') as string[];
    const key_info = keys.map((key) => {
      const value = classdata[key];
      const inferred_type = this.inferType(key as string, value);
      return [
        key,
        inferred_type
      ] as const;
    });
    return key_info;
  }
  static #passTwo(key_info: KeyInfo) {
    // The second pass will detect Author
    const channel_nav = key_info.filter(([ , value ]) => {
      if (value.type !== 'misc') return false;
      if (!(value.misc_type === 'NavigationEndpoint' || value.misc_type === 'Text')) return false;
      return value.endpoint?.metadata.page_type === 'WEB_PAGE_TYPE_CHANNEL';
    });

    // Whichever one has the longest text is the most probable match
    const most_probable_match = channel_nav.sort(([ , a ], [ , b ]) => {
      if (a.type !== 'misc' || b.type !== 'misc') return 0;
      if (a.misc_type !== 'Text' || b.misc_type !== 'Text') return 0;
      return b.text.length - a.text.length;
    });

    const excluded_keys = new Set<string>();

    const cannonical_channel_nav = most_probable_match[0];

    let author: MiscInferenceType | undefined;
    // We've found an author
    if (cannonical_channel_nav) {
      excluded_keys.add(cannonical_channel_nav[0]);
      // Now to locate its metadata
      // We'll first get all the keys in the classdata
      const keys = key_info.map(([ key ]) => key);
      // Check for anything ending in 'Badges' equals 'badges'
      const badges = keys.filter((key) => key.endsWith('Badges') || key === 'badges');
      // The likely candidate is the one with some prefix (owner, author)
      const likely_badges = badges.filter((key) => key.startsWith('owner') || key.startsWith('author'));
      // If we have a likely candidate, we'll use that
      const cannonical_badges = likely_badges[0] ?? badges[0];
      // Now we have the author and its badges
      // Verify that its actually badges
      const badge_key_info = key_info.find(([ key ]) => key === cannonical_badges);
      const is_badges = badge_key_info ?
        badge_key_info[1].type === 'renderer_list' && Reflect.has(badge_key_info[1].renderers, 'MetadataBadge') :
        false;

      if (is_badges && cannonical_badges) excluded_keys.add(cannonical_badges);
      // TODO: next we check for the author's thumbnail
      author = {
        type: 'misc',
        misc_type: 'Author',
        optional: false,
        params: [
          cannonical_channel_nav[0],
          is_badges ? cannonical_badges : undefined
        ]
      };
    }

    if (author) {
      key_info.push([ 'author', author ]);
    }

    return key_info.filter(([ key ]) => !excluded_keys.has(key));
  }
  static #introspect(classdata: any) {
    const key_info = this.#passOne(classdata);
    return this.#passTwo(key_info);
  }
  static inferType(key: string, value: any): InferenceType {
    let return_value: string | Record<string, any> | boolean | MiscInferenceType = false;
    if (return_value = this.isRenderer(value)) {
      this.#renderers_examples[return_value] = value[Reflect.ownKeys(value)[0]];
      return {
        type: 'renderer',
        renderers: [ return_value ],
        optional: false
      };
    }
    if (return_value = this.isRendererList(value)) {
      for (const [ key, value ] of Object.entries(return_value)) {
        this.#renderers_examples[key] = value;
      }
      return {
        type: 'renderer_list',
        renderers: Object.keys(return_value),
        optional: false
      };
    }
    if (return_value = this.isMiscType(key, value)) {
      return return_value as MiscInferenceType;
    }
    return {
      type: 'unknown',
      optional: false
    };
  }
  static isRendererList(value: any) {
    const arr = Array.isArray(value);
    const is_list = arr && value.every((item) => this.isRenderer(item));
    return (
      is_list ?
        Object.fromEntries(value.map((item) => {
          const key = Reflect.ownKeys(item)[0].toString();
          return [ Parser.sanitizeClassName(key), item[key] ];
        })) :
        false
    );
  }
  static isMiscType(key: string, value: any): MiscInferenceType | false {
    // NavigationEndpoint
    if ((key.endsWith('Endpoint') || key.endsWith('Command')) && typeof value === 'object') {
      return {
        type: 'misc',
        endpoint: new NavigationEndpoint(value),
        optional: false,
        misc_type: 'NavigationEndpoint'
      };
    }
    // Text
    if (typeof value === 'object' && (Reflect.has(value, 'simpleText') || Reflect.has(value, 'runs'))) {
      const textNode = new Text(value);
      return {
        type: 'misc',
        misc_type: 'Text',
        optional: false,
        endpoint: textNode.endpoint,
        text: textNode.toString()
      };
    }
    // Thumbnail
    if (typeof value === 'object' && Reflect.has(value, 'thumbnails') && Array.isArray(value.thumbnails)) {
      return {
        type: 'misc',
        misc_type: 'Thumbnail',
        optional: false
      };
    }
    return false;
  }
  static isRenderer(value: any) {
    const is_object = typeof value === 'object';
    if (!is_object) return false;
    const keys = Reflect.ownKeys(value);
    if (keys.length === 1 && keys[0].toString().includes('Renderer')) {
      return Parser.sanitizeClassName(keys[0].toString());
    }
    return false;
  }
}
