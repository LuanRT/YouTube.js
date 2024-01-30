import glob from 'glob';
import path from 'path';
import fs from 'fs';
import url from 'url';

const import_list = [];
const misc_imports = [];

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

glob.sync('../src/parser/classes/**/*.{js,ts}', { cwd: __dirname })
  .forEach((file) => {
    // Trim path
    const is_misc = file.includes('/misc/');
    file = file.replace('../src/parser/classes/', '').replace('.js', '').replace('.ts', '');
    const import_name = file.split('/').pop();

    if (is_misc) {
      const class_name = file.split('/').pop().replace('.js', '').replace('.ts', '');
      misc_imports.push(`export { default as ${class_name} } from './classes/${file}.js';`);
    } else {
      import_list.push(`export { default as ${import_name} } from './classes/${file}.js';`);
    }
  });

fs.writeFileSync(
  path.resolve(__dirname, '../src/parser/nodes.ts'),
  `// This file was auto generated, do not edit.
// See ./scripts/build-parser-map.js

${import_list.join('\n')}
`
);

fs.writeFileSync(
  path.resolve(__dirname, '../src/parser/misc.ts'),
  `// This file was auto generated, do not edit.
// See ./scripts/build-parser-map.js

${misc_imports.join('\n')}
`
);