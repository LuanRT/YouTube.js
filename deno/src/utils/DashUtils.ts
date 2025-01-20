/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: DashProps;
    }
  }
}

export type DashChild = (DashNode | (DashNode | Promise<DashNode | DashNode[]>) | Promise<DashNode | DashNode[]>);
export interface DashProps {
    [key: string]: unknown,
    children?: DashChild[]
}

export interface DashNode {
    type: string,
    props: DashProps,
}

const XML_CHARACTER_MAP = {
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
  '<': '&lt;',
  '>': '&gt;'
} as const;

function escapeXMLString(str: string) {
  return str.replace(/([&"<>'])/g, (_, item: keyof typeof XML_CHARACTER_MAP) => {
    return XML_CHARACTER_MAP[item];
  });
}

function normalizeTag(tag: string) {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

export function createElement(
  tagNameOrFunction: string | ((props: DashProps) => DashNode | Promise<DashNode>),
  props: { [key: string] : unknown } | null | undefined,
  ...children: DashChild[]
): DashNode | Promise<DashNode> {
  const normalizedChildren = children.flat();

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

export async function renderElementToString(element: DashNode | string): Promise<string> {
  if (typeof element === 'string')
    return escapeXMLString(element);

  let dom = `<${element.type}`;

  if (element.props) {
    for (const key of Object.keys(element.props)) {
      if (key !== 'children' && element.props[key] !== undefined) {
        dom += ` ${key}="${escapeXMLString(`${element.props[key]}`)}"`;
      }
    }
  }

  if (element.props.children) {
    const children = await Promise.all((await Promise.all(element.props.children.flat())).flat().filter((child) => !!child).map((child) => renderElementToString(child)));
    if (children.length > 0) {
      dom += `>${children.join('')}</${element.type}>`;
      return dom;
    }
  }

  return `${dom}/>`;
}

export async function renderToString(root: DashNode | Promise<DashNode>) {
  const dom = await renderElementToString(await root);

  return `<?xml version="1.0" encoding="utf-8"?>${dom}`;
}

export function Fragment(props: DashProps) {
  return props.children;
}
