import { fetch } from 'undici';
import { gunzip } from 'zlib';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const buf = await (await fetch('https://github.com/intoli/user-agents/blob/master/src/user-agents.json.gz?raw=true')).arrayBuffer();
const bytes = new Uint8Array(buf);

// Only get desktop and mobile agents
const allowed_agents = new Set([
  'desktop',
  'mobile'
]);

const decompressed = await new Promise((resolve, reject) => {
  gunzip(bytes, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result.buffer);
    }
  });
});

const contents = new TextDecoder().decode(decompressed);

const agents = JSON.parse(contents);

if (!Array.isArray(agents)) {
  throw new Error('Invalid user-agents.json');
}

const agentsByDevice = agents.reduce((acc, agent) => {
  const device = agent.deviceCategory;
  if (!allowed_agents.has(device))
    return acc;
  if (!acc[device]) {
    acc[device] = [];
  }
  // We dont want to massive of a list of agents for each device
  if (acc[device].length <= 25) acc[device].push(agent.userAgent);
  return acc;
}, {});

await writeFile(resolve(__dirname, '..', 'src', 'utils', 'user-agents.ts'), `/* eslint-disable */\n/* Generated file do not edit */\nexport default ${JSON.stringify(agentsByDevice, null, 2)} as { desktop: string[], mobile: string[] };`);