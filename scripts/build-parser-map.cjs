const glob = require('glob');
const fs = require('fs');
const path = require('path');

const import_list = [];

const json = [];

glob.sync('../src/parser/classes/**/*.{js,ts}', { cwd: __dirname })
  .forEach((file) => {
    if (file.includes('/misc/')) return;
    // Trim path
    file = file.replace('../src/parser/classes/', '').replace('.js', '').replace('.ts', '');
    const import_name = file.split('/').pop();
    import_list.push(`import { default as ${import_name} } from './classes/${file}.js';`);
    json.push(import_name);
  });

fs.writeFileSync(
  path.resolve(__dirname, '../src/parser/map.ts'),
  `// This file was auto generated, do not edit.
// See ./scripts/build-parser-map.js
import { YTNodeConstructor } from './helpers.js';

${import_list.join('\n')}

export const YTNodes = {
  ${json.join(',\n  ')}
};

const map: Record<string, YTNodeConstructor> = YTNodes;

/**
 * @param name - Name of the node to be parsed
 */
export default function GetParserByName(name: string) {
  const ParserConstructor = map[name];

  if (!ParserConstructor) {
    const error = new Error(\`Module not found: \${name}\`);
    (error as any).code = 'MODULE_NOT_FOUND';
    throw error;
  }

  return ParserConstructor;
}
`
);