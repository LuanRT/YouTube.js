import Long from "../Long.ts";
import { WireMessage, WireType } from "./index.ts";
import { decode } from "./varint.ts";

export default function deserialize(uint8array: Uint8Array): WireMessage {
  let idx = 0;
  const offset = uint8array.byteOffset;
  const result: WireMessage = [];
  const dataview = new DataView(uint8array.buffer, offset);
  while (idx < uint8array.length) {
    const decodeResult = decode(new DataView(uint8array.buffer, offset + idx));
    const key = decodeResult[1][0];
    idx += decodeResult[0];
    const type = (key & 0b111) as WireType;
    const fieldNumber = key >>> 3;
    switch (type) {
      default:
        throw new Error(`Unknown wire type ${type}`);
      case WireType.Varint: {
        const [len, value] = decode(
          new DataView(uint8array.buffer, offset + idx),
        );
        result.push([fieldNumber, { type, value }]);
        idx += len;
        break;
      }
      case WireType.Fixed64:
        const lo = dataview.getUint32(idx, true);
        const hi = dataview.getUint32(idx += 4, true);
        idx += 4;
        result.push([fieldNumber, {
          type,
          value: new Long(lo, hi),
        }]);
        break;
      case WireType.LengthDelimited: {
        const [len, value] = decode(
          new DataView(uint8array.buffer, offset + idx),
        );
        result.push([fieldNumber, {
          type,
          value: uint8array.subarray(idx += len, idx += value[0]),
        }]);
        break;
      }
      case WireType.StartGroup:
      case WireType.EndGroup:
        result.push([fieldNumber, { type }]);
        break;
      case WireType.Fixed32:
        result.push([fieldNumber, {
          type,
          value: dataview.getUint32(idx, true),
        }]);
        idx += 4;
        break;
    }
  }
  return result;
}
