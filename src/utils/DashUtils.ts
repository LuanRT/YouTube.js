/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: DashProps;
    }
  }
}

export interface DashProps {
    [key: string]: unknown,
    children?: (DashNode | (DashNode | Promise<DashNode | DashNode[]>)[] | Promise<DashNode | DashNode[]>)[]
}

export interface DashNode {
    type: string,
    props: DashProps,
}

const XML_CHARACTER_MAP = {
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
    '<': '&lt;',
    '>': '&gt;'
} as const;

function escapeXMLString(str: string) {
    return str.replace(/([&"<>'])/g, (_, item: keyof typeof XML_CHARACTER_MAP) => {
        return XML_CHARACTER_MAP[item];
    });
}

function normalizeTag(tag: string) {
  if (tag === 'mpd') return 'MPD';
  if (tag === 'base-url') return 'BaseURL';

  const sections = tag.split('-');
  return sections.map((section) => section.charAt(0).toUpperCase() + section.slice(1)).join('');
}

export function createElement(
  tagNameOrFunction: string | ((props: DashProps) => DashNode | Promise<DashNode>),
  props: { [key: string] : unknown } | null | undefined,
  ...children: (DashNode | string)[]
): DashNode | Promise<DashNode> {
  const normalizedChildren = children.flat().map((child) => typeof child === 'string' ? createTextElement(child) : child);

  if (typeof tagNameOrFunction === 'function') {
    return tagNameOrFunction({ ...props, children: normalizedChildren });
  }

  return {
    type: normalizeTag(tagNameOrFunction),
    props: {
      ...props,
      children: normalizedChildren
    }
  };
}

export function createTextElement(text: string): DashNode {
  return {
    type: 'TEXT_ELEMENT',
    props: { nodeValue: text }
  };
}

export async function renderToString(element: DashNode): Promise<string> {
  if (element.type === 'TEXT_ELEMENT')
    return escapeXMLString(typeof element.props.nodeValue === 'string' ? element.props.nodeValue : '');

  let dom = `<${element.type}`;

  if (element.props) {
    const properties = Object.keys(element.props)
      .filter((key) => ![ 'children', 'nodeValue' ].includes(key) && element.props[key] !== undefined)
      .map((name) => `${name}="${escapeXMLString(`${element.props[name]}`)}"`);

    if (properties.length > 0)
      dom += ' ' + properties.join(' ');
  }

  if (element.props.children) {
    const children = await Promise.all((await Promise.all(element.props.children.flat())).flat().filter((child) => !!child).map((child) => renderToString(child)));
    if (children.length > 0) {
      dom += `>${children.join('')}</${element.type}>`;
      return dom;
    }
  }

  return dom + '/>';
}

export function Fragment(props: DashProps) {
  return props.children;
}
