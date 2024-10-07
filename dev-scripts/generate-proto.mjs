import { exec } from 'child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import path from 'path';
import url from 'url';
import os from 'os';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const protoDir = './protos';
const outDir = './protos/generated';

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const protocGenTs = path.join(
  __dirname,
  '../node_modules',
  '.bin',
  os.platform() === 'win32' ? 'protoc-gen-ts_proto.cmd' : 'protoc-gen-ts_proto'
);

function listProtoFiles(dir) {
  let protoFiles = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) {
      protoFiles = protoFiles.concat(listProtoFiles(fullPath));
    } else if (item.endsWith('.proto')) {
      protoFiles.push(fullPath);
    }
  }

  return protoFiles;
}

const protoFiles = listProtoFiles(protoDir);

if (!protoFiles.length) {
  console.log('No .proto files found.');
  process.exit(0);
}

protoFiles.forEach((file) => {
  const command = `protoc --proto_path=${protoDir} --plugin=protoc-gen-ts=${protocGenTs} --ts_opt=env=browser --ts_opt=importSuffix=.js --ts_out=${outDir} --ts_opt=outputJsonMethods=false --ts_opt=outputPartialMethods=false ${file}`;
  exec(command, (error, _stdout, stderr) => {
    if (error) {
      console.error(`Error compiling ${file}:`, stderr);
    }
  });
});