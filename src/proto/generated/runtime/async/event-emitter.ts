export interface EventEmitter<Events extends Record<string, any>> {
  emit<Type extends keyof Events>(type: Type, event: Events[Type]): void;
  on<Type extends keyof Events>(
    type: Type | "*",
    listener: Listener<Events[Type]>,
  ): Off;
  off(type: keyof Events): void;
}
export type Listener<Event = any> = (event: Event, type: string) => void;
export type Off = () => void;

export function createEventEmitter<
  Events extends Record<string, any>,
>(): EventEmitter<Events> {
  const listeners = {} as Record<keyof Events, Set<Listener<any>>>;
  const eventEmitter: EventEmitter<Events> = {
    emit(type, event) {
      listeners[type]?.forEach(
        (listener) => listener(event, type as string),
      );
      (type !== "*") && listeners["*"]?.forEach(
        (listener) => listener(event, type as string),
      );
    },
    on(type, listener) {
      (listeners[type] ||= new Set()).add(listener);
      return () => listeners[type]?.delete(listener);
    },
    off(type) {
      delete listeners[type];
    },
  };
  return eventEmitter;
}
