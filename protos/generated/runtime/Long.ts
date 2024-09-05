export const UINT16_MAX = 0xFFFF;
export const UINT32_MAX = 0xFFFFFFFF;

export default class Long extends Uint32Array {
  constructor(lo: number = 0, hi: number = 0) {
    super([lo, hi]);
  }
  toString(signed = true): string {
    const [lo, hi] = this;
    if (lo === 0 && hi === 0) return "0";
    if (signed && (hi > 0x7FFFFFFF)) {
      return "-" + add(negate(this), one).toString(false);
    }
    const result = [];
    let tmp = new Long(lo, hi);
    while (compare(tmp, zero)) {
      const [next, remainder] = divByTen(tmp);
      result.push(remainder);
      tmp = next;
    }
    return result.reverse().join("");
  }
  static parse(text: string): Long {
    const parsedValue = parseInt(text, 10);
    const sign = parsedValue < 0;
    if (Number.isNaN(parsedValue)) return new Long(0);
    if (text.length < 10) {
      if (parsedValue < 0) return add(negate(new Long(-parsedValue)), one);
      return new Long(parsedValue);
    }
    let result = new Long();
    let powerTen = one;
    for (const digit of text.split("").reverse()) {
      if (parseInt(digit)) {
        result = add(result, mul(new Long(parseInt(digit)), powerTen));
      }
      powerTen = mul(powerTen, new Long(10));
    }
    if (!sign) return result;
    return add(negate(result), one);
  }
}

const zero = new Long(0);
const one = new Long(1);

function makeChunk(value: Long): [number, number, number, number] {
  const [lo, hi] = value;
  return [lo & UINT16_MAX, lo >>> 16, hi & UINT16_MAX, hi >>> 16];
}

export function add(a: Long, b: Long): Long {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a48 + b48;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}

export function sub(a: Long, b: Long): Long {
  return add(a, add(negate(b), one));
}

export function mul(a: Long, b: Long): Long {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a00 * b16 + a16 * b00;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a00 * b32 + a32 * b00 + a16 * b16;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a00 * b48 + a16 * b32 + a32 * b16 + a48 * b00;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}

export function divByTen(value: Long): [Long, number] {
  const [lo, hi] = value;
  return [
    new Long(
      (((hi % 10) * (UINT32_MAX + 1) + lo) / 10) | 0,
      (hi / 10) | 0,
    ),
    ((hi % 10) * (UINT32_MAX + 1) + lo) % 10,
  ];
}

export function compare(a: Long, b: Long): number {
  const [l1, h1] = a;
  const [l2, h2] = b;
  if (h1 !== h2) return h1 - h2;
  return l1 - l2;
}

function negate(value: Long): Long {
  const [lo, hi] = value;
  return new Long(~lo, ~hi);
}
