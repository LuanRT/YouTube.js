export interface UMPPart {
  type: number;
  size: number;
  data: Uint8Array;
}

export default class UMP {
  buffer: Uint8Array;
  offset: number;

  constructor(buffer: Uint8Array) {
    this.buffer = buffer;
    this.offset = 0;
  }

  readVarInt(): number {
    const prefix = this.buffer[this.offset];
    const size = this.varintSize(prefix);
    let result = 0;
    let shift = 0;

    if (size !== 5) {
      shift = 8 - size;
      const mask = (1 << shift) - 1;
      result |= prefix & mask;
    }

    for (let i = 1; i < size; i++) {
      const byte = this.buffer[this.offset + i];
      result |= byte << shift;
      shift += 8;
    }

    this.offset += size;
    return result;
  }

  varintSize(byte: number): number {
    let lo = 0;
    for (let i = 7; i >= 4; i--) {
      if (byte & (1 << i)) lo++;
      else break;
    }
    return Math.min(lo + 1, 5);
  }

  parse(): UMPPart[] {
    const parts = [];

    while (this.offset < this.buffer.length) {
      const part_type = this.readVarInt();
      const part_size = this.readVarInt();
      const part_data = this.buffer.slice(this.offset, this.offset + part_size);
      this.offset += part_size;
      parts.push({ type: part_type, size: part_size, data: part_data });
    }

    return parts;
  }
}