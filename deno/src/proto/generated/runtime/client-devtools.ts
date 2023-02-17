import type { RpcClientImpl } from "./rpc.ts";
import {
  createEventEmitter,
  EventEmitter,
  Off,
} from "./async/event-emitter.ts";

export const devtoolsKey = "@pbkit/devtools";

export function registerRemoteDevtools(host: string): Off {
  return getDevtoolsConfig().on("*", (event, type) => {
    fetch(`${host}/send`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ event, type }),
    });
  });
}

export function getDevtoolsConfig(): DevtoolsConfig {
  const global = globalThis as any;
  if (!global[devtoolsKey]) {
    const devtoolsConfig = createDevtoolsConfig();
    return global[devtoolsKey] = devtoolsConfig;
  } else if (Array.isArray(global[devtoolsKey])) {
    const devtoolsConfig = createDevtoolsConfig();
    for (const fn of global[devtoolsKey]) {
      if (typeof fn !== "function") continue;
      fn(devtoolsConfig);
    }
    return global[devtoolsKey] = devtoolsConfig;
  } else {
    return global[devtoolsKey];
  }
}

export interface DevtoolsConfig extends EventEmitter<Events> {
  configId: string;
  requestIdCounter: number;
}
function createDevtoolsConfig(): DevtoolsConfig {
  const devtoolsConfig: DevtoolsConfig = {
    configId: String(Date.now()),
    requestIdCounter: 0,
    ...createEventEmitter(),
  };
  return devtoolsConfig;
}

export interface WrapRpcClientImplConfig<TMetadata, THeader, TTrailer> {
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>;
  devtoolsConfig: DevtoolsConfig;
  tags: string[];
}
export function wrapRpcClientImpl<TMetadata, THeader, TTrailer>(
  config: WrapRpcClientImplConfig<TMetadata, THeader, TTrailer>,
): RpcClientImpl<TMetadata, THeader, TTrailer> {
  return function devtoolsRpcClientImpl(methodDescriptor) {
    const { rpcClientImpl, devtoolsConfig, tags } = config;
    const rpcMethodImpl = rpcClientImpl(methodDescriptor);
    return function devtoolsRpcMethodImpl(req, metadata) {
      const configId = devtoolsConfig.configId;
      const requestId = devtoolsConfig.requestIdCounter++;
      devtoolsConfig.emit("request", {
        configId,
        requestId,
        servicePath: methodDescriptor.service.serviceName,
        rpcName: methodDescriptor.methodName,
        metadataJson: toJson(metadata),
        tags,
      });
      const rpcMethodResult = rpcMethodImpl(
        mapAsyncGenerator(req, (payload) => {
          devtoolsConfig.emit("request-payload", {
            configId,
            requestId,
            payloadJson: methodDescriptor.requestType.serializeJson(payload),
            payloadProto: methodDescriptor.requestType.serializeBinary(payload),
          });
          return payload;
        }, (error) => {
          devtoolsConfig.emit("request-error", {
            configId,
            requestId,
            errorMessage: getErrorMessage(error),
          });
        }),
        metadata,
      );
      const resAsyncGenerator = mapAsyncGenerator(
        rpcMethodResult[0],
        (payload) => {
          devtoolsConfig.emit("response-payload", {
            configId,
            requestId,
            payloadJson: methodDescriptor.responseType.serializeJson(payload),
            payloadProto: methodDescriptor.responseType.serializeBinary(
              payload,
            ),
          });
          return payload;
        },
        (error) => {
          devtoolsConfig.emit("response-error", {
            configId,
            requestId,
            errorMessage: getErrorMessage(error),
          });
        },
      );
      const headerPromise = rpcMethodResult[1].then((header) => {
        devtoolsConfig.emit("response", {
          configId,
          requestId,
          headerJson: toJson(header),
        });
        return header;
      });
      const trailerPromise = rpcMethodResult[2].then((trailer) => {
        devtoolsConfig.emit("response-trailer", {
          configId,
          requestId,
          trailerJson: toJson(trailer),
        });
        return trailer;
      });
      return [resAsyncGenerator, headerPromise, trailerPromise];
    };
  };
}

function toJson(value: any): string {
  if ((!value) || (typeof value !== "object")) return "{}";
  return JSON.stringify(value);
}

async function* mapAsyncGenerator<T>(
  asyncGenerator: AsyncGenerator<T>,
  fn: (value: T) => T | Promise<T>,
  catchFn: (error: any) => void,
): AsyncGenerator<T> {
  try {
    for await (const value of asyncGenerator) {
      yield await fn(value);
    }
  } catch (error) {
    catchFn(error);
    throw error;
  }
}

function getErrorMessage(error: any): string {
  if (error instanceof Error) return error.stack || error.message;
  return String(error);
}

export interface Events {
  "request": {
    configId: string;
    requestId: number;
    servicePath: string;
    rpcName: string;
    metadataJson: string;
    tags: string[];
  };
  "request-payload": {
    configId: string;
    requestId: number;
    payloadJson: string;
    payloadProto: Uint8Array;
  };
  "request-error": {
    configId: string;
    requestId: number;
    errorMessage: string;
  };
  "response": {
    configId: string;
    requestId: number;
    headerJson: string;
  };
  "response-payload": {
    configId: string;
    requestId: number;
    payloadJson: string;
    payloadProto: Uint8Array;
  };
  "response-error": {
    configId: string;
    requestId: number;
    errorMessage: string;
  };
  "response-trailer": {
    configId: string;
    requestId: number;
    trailerJson: string;
  };
}
