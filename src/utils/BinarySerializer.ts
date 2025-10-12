import { compress, decompress } from './LZW.js';

export const MAGIC_HEADER = 0x594254; // 'YTB' in hex...
export const VERSION = 1;

export function serialize(data: any): ArrayBuffer {
  const json_str = JSON.stringify(data);
  const compressed = compress(json_str);
  const compressed_bytes = new TextEncoder().encode(compressed);

  const buffer = new ArrayBuffer(12 + compressed_bytes.byteLength);
  const view = new DataView(buffer);

  view.setUint32(0, MAGIC_HEADER, true);
  view.setUint32(4, VERSION, true);
  view.setUint32(8, compressed_bytes.byteLength, true);

  new Uint8Array(buffer).set(compressed_bytes, 12);

  return buffer;
}

export function deserialize<T>(buffer: Uint8Array): T {
  if (buffer.byteLength < 12)
    throw new Error('Invalid binary format: buffer too short');

  const view = new DataView(buffer.buffer, buffer.byteOffset);

  const magic = view.getUint32(0, true);
  if (magic !== MAGIC_HEADER) {
    throw new Error('Invalid binary format: magic header mismatch');
  }

  const version = view.getUint32(4, true);
  if (version !== VERSION) {
    throw new Error(`Unsupported binary format version: ${version}`);
  }

  const data_length = view.getUint32(8, true);
  const compressed_data = buffer.slice(12, 12 + data_length);

  const compressed = new TextDecoder().decode(compressed_data);
  const json_str = decompress(compressed);

  return JSON.parse(json_str);
}
