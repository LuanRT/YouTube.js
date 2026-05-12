import { gunzipSync, gzipSync } from 'fflate';

export const MAGIC_HEADER = 0x594254; // 'YTB' in hex...
export const VERSION = 2;

export function serialize(data: any): ArrayBuffer {
  const json = JSON.stringify(data);
  const jsonBytes = new TextEncoder().encode(json);
  const compressed = gzipSync(jsonBytes);

  const buffer = new ArrayBuffer(12 + compressed.byteLength);
  const view = new DataView(buffer);

  view.setUint32(0, MAGIC_HEADER, true);
  view.setUint32(4, VERSION, true);
  view.setUint32(8, compressed.byteLength, true);

  new Uint8Array(buffer).set(compressed, 12);

  return buffer;
}

export function deserialize<T>(buffer: Uint8Array): T {
  if (buffer.byteLength < 12) {
    throw new Error('Invalid binary format: buffer too short');
  }

  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);

  const magic = view.getUint32(0, true);
  if (magic !== MAGIC_HEADER) {
    throw new Error('Invalid binary format: magic header mismatch');
  }

  const version = view.getUint32(4, true);
  if (version !== VERSION) {
    throw new Error(`Unsupported binary format version: ${version}`);
  }

  const length = view.getUint32(8, true);
  if (12 + length > buffer.byteLength) {
    throw new Error('Invalid binary format: data length out of bounds');
  }

  const compressed = buffer.subarray(12, 12 + length);
  const decompressed = gunzipSync(compressed);
  const json = new TextDecoder().decode(decompressed);

  return JSON.parse(json) as T;
}
