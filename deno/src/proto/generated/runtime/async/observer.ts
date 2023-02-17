import { removeItem } from "../array.ts";

export interface Observer<T> {
  next(value: T): void;
  error(exception?: any): void;
  complete(): void;
}
export type SubscribeFn<T> = (observer: Observer<T>) => UnsubscribeFn;
export type UnsubscribeFn = () => void;

export interface Deferred<T> extends Promise<T> {
  resolve(value: T): void;
  reject(reason?: any): void;
}
export function defer<T>(): Deferred<T> {
  const transit: any = {};
  const result = new Promise(
    (resolve, reject) => Object.assign(transit, { resolve, reject }),
  );
  return Object.assign(result, transit);
}

export interface Next<T> {
  (): Promise<[T, boolean]>;
}
export function createSubscribeFn<T>(
  next: Next<T>,
  wait = Promise.resolve(),
): SubscribeFn<T> {
  const observers: Observer<T>[] = [];
  (async () => {
    try {
      await wait;
      while (observers.length) {
        const [value, done] = await next();
        for (const observer of observers) observer.next(value);
        if (done) break;
      }
    } catch (err) {
      for (const observer of observers) observer.error(err);
    } finally {
      for (const observer of observers) observer.complete();
    }
  })();
  return (observer) => {
    observers.push(observer);
    return () => {
      observer.complete();
      removeItem(observers, observer);
    };
  };
}
export async function* subscribeFnToAsyncGenerator<T>(
  subscribe: SubscribeFn<T>,
): AsyncGenerator<T> {
  let finished = false;
  let deferred = defer<T>();
  const observer: Observer<T> = {
    next(value) {
      const result = deferred;
      deferred = defer<T>();
      result.resolve(value);
    },
    error(exception) {
      const result = deferred;
      deferred = defer<T>();
      result.reject(exception);
    },
    complete() {
      finished = true;
      deferred.resolve(null as any);
    },
  };
  const unsubscribe = subscribe(observer);
  try {
    while (true) {
      const value = await deferred;
      if (finished) break;
      yield value;
    }
  } finally {
    unsubscribe();
  }
}
