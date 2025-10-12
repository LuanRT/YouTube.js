import path from 'path';
import fs from 'fs';
import url from 'url';

const import_list = [];
const misc_imports = [];

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Use case-insensitive sorting, to ensure the order stays consistent between runs
const collator = new Intl.Collator('en', { sensitivity: 'base' });

fs.readdirSync(path.join(__dirname, '../src/parser/classes'), { recursive: true })
  .sort((a, b) => collator.compare(a, b))
  .forEach((file) => {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
      // Convert Windows paths to posix ones
      file = file.replaceAll('\\', '/')
      
      // Trim path
      const is_misc = file.startsWith('misc/');
      file = file.replace('.js', '').replace('.ts', '');
      const import_name = file.split('/').pop();
  
      if (is_misc) {
        misc_imports.push(`export { default as ${import_name} } from './classes/${file}.js';`);
      } else {
        import_list.push(`export { default as ${import_name} } from './classes/${file}.js';`);
      }
    }
  });

fs.writeFileSync(
  path.resolve(__dirname, '../src/parser/nodes.ts'),
  `// This file was auto generated, do not edit.
// See ./dev-scripts/gen-parser-map.mjs

${import_list.join('\n')}
`
);

fs.writeFileSync(
  path.resolve(__dirname, '../src/parser/misc.ts'),
  `// This file was auto generated, do not edit.
// See ./dev-scripts/gen-parser-map.mjs

${misc_imports.join('\n')}
`
);