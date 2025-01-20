// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.29.2
// source: youtube/api/pfiinnertube/innertube_context.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "https://esm.sh/@bufbuild/protobuf@2.0.0/wire";
import { KeyValuePair } from "../../../misc/common.ts";
import { CapabilityInfo } from "./capability_info.ts";
import { ClientInfo } from "./client_info.ts";
import { RequestInfo } from "./request_info.ts";
import { ThirdPartyInfo } from "./third_party_info.ts";
import { UserInfo } from "./user_info.ts";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface InnerTubeContext {
  client?: ClientInfo | undefined;
  user?: UserInfo | undefined;
  capabilities?: CapabilityInfo | undefined;
  request?: RequestInfo | undefined;
  clickTracking?: InnerTubeContext_ClickTrackingInfo | undefined;
  thirdParty?: ThirdPartyInfo | undefined;
  remoteClient?: ClientInfo | undefined;
  adSignalsInfo?: InnerTubeContext_AdSignalsInfo | undefined;
  experimentalData?: InnerTubeContext_ExperimentalData | undefined;
  clientScreenNonce?: string | undefined;
  activePlayers: InnerTubeContext_ActivePlayerInfo[];
}

export interface InnerTubeContext_ExperimentalData {
  params: KeyValuePair[];
}

export interface InnerTubeContext_ActivePlayerInfo {
  playerContextParams?: Uint8Array | undefined;
}

export interface InnerTubeContext_ClickTrackingInfo {
  clickTrackingParams?: Uint8Array | undefined;
}

export interface InnerTubeContext_AdSignalsInfo {
  params: KeyValuePair[];
  bid?: string | undefined;
  mutsuId?: string | undefined;
  consentBumpState?: string | undefined;
  advertisingId?: string | undefined;
  limitAdTracking?: boolean | undefined;
  attributionOsSupportedVersion?: string | undefined;
}

function createBaseInnerTubeContext(): InnerTubeContext {
  return {
    client: undefined,
    user: undefined,
    capabilities: undefined,
    request: undefined,
    clickTracking: undefined,
    thirdParty: undefined,
    remoteClient: undefined,
    adSignalsInfo: undefined,
    experimentalData: undefined,
    clientScreenNonce: undefined,
    activePlayers: [],
  };
}

export const InnerTubeContext: MessageFns<InnerTubeContext> = {
  encode(message: InnerTubeContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.client !== undefined) {
      ClientInfo.encode(message.client, writer.uint32(10).fork()).join();
    }
    if (message.user !== undefined) {
      UserInfo.encode(message.user, writer.uint32(26).fork()).join();
    }
    if (message.capabilities !== undefined) {
      CapabilityInfo.encode(message.capabilities, writer.uint32(34).fork()).join();
    }
    if (message.request !== undefined) {
      RequestInfo.encode(message.request, writer.uint32(42).fork()).join();
    }
    if (message.clickTracking !== undefined) {
      InnerTubeContext_ClickTrackingInfo.encode(message.clickTracking, writer.uint32(50).fork()).join();
    }
    if (message.thirdParty !== undefined) {
      ThirdPartyInfo.encode(message.thirdParty, writer.uint32(58).fork()).join();
    }
    if (message.remoteClient !== undefined) {
      ClientInfo.encode(message.remoteClient, writer.uint32(66).fork()).join();
    }
    if (message.adSignalsInfo !== undefined) {
      InnerTubeContext_AdSignalsInfo.encode(message.adSignalsInfo, writer.uint32(74).fork()).join();
    }
    if (message.experimentalData !== undefined) {
      InnerTubeContext_ExperimentalData.encode(message.experimentalData, writer.uint32(82).fork()).join();
    }
    if (message.clientScreenNonce !== undefined) {
      writer.uint32(90).string(message.clientScreenNonce);
    }
    for (const v of message.activePlayers) {
      InnerTubeContext_ActivePlayerInfo.encode(v!, writer.uint32(98).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InnerTubeContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerTubeContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = ClientInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = UserInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.capabilities = CapabilityInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.request = RequestInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clickTracking = InnerTubeContext_ClickTrackingInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.thirdParty = ThirdPartyInfo.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.remoteClient = ClientInfo.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.adSignalsInfo = InnerTubeContext_AdSignalsInfo.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.experimentalData = InnerTubeContext_ExperimentalData.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.clientScreenNonce = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.activePlayers.push(InnerTubeContext_ActivePlayerInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseInnerTubeContext_ExperimentalData(): InnerTubeContext_ExperimentalData {
  return { params: [] };
}

export const InnerTubeContext_ExperimentalData: MessageFns<InnerTubeContext_ExperimentalData> = {
  encode(message: InnerTubeContext_ExperimentalData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.params) {
      KeyValuePair.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InnerTubeContext_ExperimentalData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerTubeContext_ExperimentalData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params.push(KeyValuePair.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseInnerTubeContext_ActivePlayerInfo(): InnerTubeContext_ActivePlayerInfo {
  return { playerContextParams: undefined };
}

export const InnerTubeContext_ActivePlayerInfo: MessageFns<InnerTubeContext_ActivePlayerInfo> = {
  encode(message: InnerTubeContext_ActivePlayerInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.playerContextParams !== undefined) {
      writer.uint32(10).bytes(message.playerContextParams);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InnerTubeContext_ActivePlayerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerTubeContext_ActivePlayerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playerContextParams = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseInnerTubeContext_ClickTrackingInfo(): InnerTubeContext_ClickTrackingInfo {
  return { clickTrackingParams: undefined };
}

export const InnerTubeContext_ClickTrackingInfo: MessageFns<InnerTubeContext_ClickTrackingInfo> = {
  encode(message: InnerTubeContext_ClickTrackingInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.clickTrackingParams !== undefined) {
      writer.uint32(18).bytes(message.clickTrackingParams);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InnerTubeContext_ClickTrackingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerTubeContext_ClickTrackingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clickTrackingParams = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseInnerTubeContext_AdSignalsInfo(): InnerTubeContext_AdSignalsInfo {
  return {
    params: [],
    bid: undefined,
    mutsuId: undefined,
    consentBumpState: undefined,
    advertisingId: undefined,
    limitAdTracking: undefined,
    attributionOsSupportedVersion: undefined,
  };
}

export const InnerTubeContext_AdSignalsInfo: MessageFns<InnerTubeContext_AdSignalsInfo> = {
  encode(message: InnerTubeContext_AdSignalsInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.params) {
      KeyValuePair.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.bid !== undefined) {
      writer.uint32(18).string(message.bid);
    }
    if (message.mutsuId !== undefined) {
      writer.uint32(26).string(message.mutsuId);
    }
    if (message.consentBumpState !== undefined) {
      writer.uint32(34).string(message.consentBumpState);
    }
    if (message.advertisingId !== undefined) {
      writer.uint32(58).string(message.advertisingId);
    }
    if (message.limitAdTracking !== undefined) {
      writer.uint32(72).bool(message.limitAdTracking);
    }
    if (message.attributionOsSupportedVersion !== undefined) {
      writer.uint32(82).string(message.attributionOsSupportedVersion);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InnerTubeContext_AdSignalsInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerTubeContext_AdSignalsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params.push(KeyValuePair.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mutsuId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.consentBumpState = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.advertisingId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.limitAdTracking = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.attributionOsSupportedVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
