import Long from "../Long.ts";

export function encode<T extends number | Long>(value: T): T {
  if (value instanceof Long) {
    const l = new Long(
      value[0] << 1,
      (value[1] << 1) | (value[0] >>> 31),
    );
    const r = value[1] >>> 31 ? new Long(0xFFFFFFFF, 0xFFFFFFFF) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]) as T;
  }
  return (((value as number) * 2) ^ ((value as number) >> 31)) >>> 0 as T;
}

export function decode<T extends number | Long>(value: T): T {
  if (value instanceof Long) {
    const l = new Long((value[0] >>> 1) | (value[1] << 31), (value[1]) >>> 1);
    const r = value[0] & 1 ? new Long(0xFFFFFFFF, 0xFFFFFFFF) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]) as T;
  }
  return (((value as number) >>> 1) ^ -((value as number) & 1)) as T;
}
