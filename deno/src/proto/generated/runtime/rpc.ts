import { createEventBuffer } from "./async/event-buffer.ts";
import { defer } from "./async/observer.ts";

export type Method<
  TMetadata = any,
  THeader = any,
  TTrailer = any,
  TServiceName extends string = string,
  TMethodName extends string = string,
  TRequestStream extends boolean = boolean,
  TResponseStream extends boolean = boolean,
  TReq = any,
  TRes = any,
> = [
  MethodDescriptor<
    TReq,
    TRes,
    TMethodName,
    TServiceName,
    TRequestStream,
    TResponseStream
  >,
  MethodImpl<TReq, TRes, TMetadata, THeader, TTrailer>,
];

export type RpcClientImpl<TMetadata = any, THeader = any, TTrailer = any> = <
  TReq,
  TRes,
>(
  methodDescriptor: MethodDescriptor<TReq, TRes>,
) => MethodImpl<TReq, TRes, TMetadata, THeader, TTrailer>;

export interface MethodDescriptor<
  TReq,
  TRes,
  TMethodName extends string = string,
  TServiceName extends string = string,
  TRequestStream extends boolean = boolean,
  TResponseStream extends boolean = boolean,
> {
  methodName: TMethodName;
  service: { serviceName: TServiceName };
  requestStream: TRequestStream;
  responseStream: TResponseStream;
  requestType: {
    serializeBinary: (value: TReq) => Uint8Array;
    deserializeBinary: (value: Uint8Array) => TReq;
    serializeJson: (value: TReq) => string;
  };
  responseType: {
    serializeBinary: (value: TRes) => Uint8Array;
    deserializeBinary: (value: Uint8Array) => TRes;
    serializeJson: (value: TRes) => string;
  };
}

type ThenArg<T> = T extends Promise<infer U> ? U : T;
export type RpcReturnType<TRes, TResArgs extends any[]> = (
  Promise<TResArgs extends [] ? ThenArg<TRes> : [ThenArg<TRes>, ...TResArgs]>
);

export interface MethodImpl<
  TReq,
  TRes,
  TMetadata = any,
  THeader = any,
  TTrailer = any,
> {
  (
    req: AsyncGenerator<TReq>,
    metadata?: TMetadata,
  ): [AsyncGenerator<TRes>, Promise<THeader>, Promise<TTrailer>];
}

export interface MethodImplHandlerReq<TReq, TMetadata> {
  metadata?: TMetadata;
  messages: AsyncGenerator<TReq>;
  drainEnd: Promise<void>;
}
export interface MethodImplHandlerRes<TRes, THeader, TTrailer> {
  header(value: THeader): void;
  send(value: TRes): void;
  end(value: TTrailer): void;
}
export interface MethodImplHandler<TReq, TRes, TMetadata, THeader, TTrailer> {
  (
    req: MethodImplHandlerReq<TReq, TMetadata>,
    res: MethodImplHandlerRes<TRes, THeader, TTrailer>,
  ): void;
}
export function getMethodImpl<
  TReq,
  TRes,
  TMetadata,
  THeader,
  TTrailer,
>(
  handler: MethodImplHandler<TReq, TRes, TMetadata, THeader, TTrailer>,
): MethodImpl<TReq, TRes, TMetadata, THeader, TTrailer> {
  return (messages: AsyncGenerator<TReq>, metadata?: TMetadata) => {
    const headerPromise = defer<THeader>();
    const trailerPromise = defer<TTrailer>();
    const drainEnd = defer<void>();
    const eventBuffer = createEventBuffer<TRes>({
      onDrainEnd: drainEnd.resolve,
    });
    const header = headerPromise.resolve;
    const send = eventBuffer.push;
    const end = (value: TTrailer) => {
      eventBuffer.finish();
      trailerPromise.resolve(value);
    };
    handler({ metadata, messages, drainEnd }, { header, send, end });
    return [eventBuffer.drain(), headerPromise, trailerPromise];
  };
}

export function createServerImplBuilder<TMetadata, THeader, TTrailer>() {
  const buffer = createEventBuffer<Method<TMetadata, THeader, TTrailer>>();
  return {
    register<TReq, TRes>(
      methodDescriptor: MethodDescriptor<TReq, TRes>,
      handler: MethodImplHandler<TReq, TRes, TMetadata, THeader, TTrailer>,
    ) {
      buffer.push([methodDescriptor, getMethodImpl(handler)]);
    },
    finish: buffer.finish,
    drain: buffer.drain,
  };
}
