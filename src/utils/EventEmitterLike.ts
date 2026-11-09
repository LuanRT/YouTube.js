type Listener = (...args: any[]) => void;

export class EventEmitterLike<Events extends Record<string, Listener>> {
  private listeners = new Map<keyof Events, Set<Listener>>();
  private onceWrappers = new Map<Listener, Map<keyof Events, Listener>>();

  public emit<K extends keyof Events>(type: K, ...args: Parameters<Events[K]>) {
    const listeners = this.listeners.get(type);
    if (!listeners || listeners.size === 0)
      return;

    // Snaapshot listeners so removals during emit do not affect current iteration.
    for (const listener of [ ...listeners ])
      listener(...args);
  }

  public on<K extends keyof Events>(type: K, listener: Events[K]) {
    let listeners = this.listeners.get(type);

    if (!listeners) {
      listeners = new Set<Listener>();
      this.listeners.set(type, listeners);
    }

    listeners.add(listener);
  }

  public once<K extends keyof Events>(type: K, listener: Events[K]) {
    const wrapper: Listener = (...args: any[]) => {
      this.off(type, listener);
      listener(...args);
    };

    let wrappersByType = this.onceWrappers.get(listener);

    if (!wrappersByType) {
      wrappersByType = new Map<keyof Events, Listener>();
      this.onceWrappers.set(listener, wrappersByType);
    }

    wrappersByType.set(type, wrapper);
    this.on(type, wrapper as Events[K]);
  }

  public off<K extends keyof Events>(type: K, listener: Events[K]) {
    const listeners = this.listeners.get(type);
    if (!listeners) return;

    let target: Listener = listener;
    const wrappersByType = this.onceWrappers.get(listener);

    if (wrappersByType) {
      const onceWrapper = wrappersByType.get(type);

      if (onceWrapper) {
        target = onceWrapper;
        wrappersByType.delete(type);

        if (wrappersByType.size === 0)
          this.onceWrappers.delete(listener);
      }
    }

    listeners.delete(target);

    if (listeners.size === 0)
      this.listeners.delete(type);
  }

  public removeAllListeners(type?: keyof Events) {
    if (!type) {
      this.listeners.clear();
      this.onceWrappers.clear();
      return;
    }

    this.listeners.delete(type);

    for (const [ listener, wrappersByType ] of this.onceWrappers.entries()) {
      wrappersByType.delete(type);

      if (wrappersByType.size === 0)
        this.onceWrappers.delete(listener);
    }
  }
}