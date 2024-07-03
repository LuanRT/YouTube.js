import {
  Type as UrlItem,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./UrlItem.js";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type ResourceManifest = {
    urls: UrlItem[];
  }
}

export type Type = $.youtube.ResourceManifest;

export function getDefaultValue(): $.youtube.ResourceManifest {
  return {
    urls: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.ResourceManifest>): $.youtube.ResourceManifest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ResourceManifest): unknown {
  const result: any = {};
  result.urls = value.urls.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.youtube.ResourceManifest {
  const result = getDefaultValue();
  result.urls = value.urls?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.ResourceManifest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.urls) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ResourceManifest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.urls = value as any;
  }
  return result;
}
