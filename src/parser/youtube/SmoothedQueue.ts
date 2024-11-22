import type { YTNode } from '../helpers.js';

/**
 * Flattens the given queue.
 * @param queue - The queue to flatten.
 */
function flattenQueue(queue: YTNode[][]) {
  const nodes: YTNode[] = [];

  for (const group of queue) {
    if (Array.isArray(group)) {
      for (const node of group) {
        nodes.push(node);
      }
    } else {
      nodes.push(group);
    }
  }

  return nodes;
}

class DelayQueue {
  front: number[];
  back: number[];

  constructor() {
    this.front = [];
    this.back = [];
  }

  public isEmpty(): boolean {
    return !this.front.length && !this.back.length;
  }

  public clear(): void {
    this.front = [];
    this.back = [];
  }

  public getValues(): number[] {
    return this.front.concat(this.back.reverse());
  }
}

export default class SmoothedQueue {
  #last_update_time: number | null;
  #estimated_update_interval: number | null;
  #callback: ((actions: YTNode[]) => void) | null;
  #action_queue: YTNode[][];
  #next_update_id: any;
  
  readonly #poll_response_delay_queue: DelayQueue;

  constructor() {
    this.#last_update_time = null;
    this.#estimated_update_interval = null;
    this.#callback = null;
    this.#action_queue = [];
    this.#next_update_id = null;
    this.#poll_response_delay_queue = new DelayQueue();
  }

  public enqueueActionGroup(group: YTNode[]): void {
    if (this.#last_update_time !== null) {
      const delay = Date.now() - this.#last_update_time;

      this.#poll_response_delay_queue.back.push(delay);

      if (5 < (this.#poll_response_delay_queue.front.length + this.#poll_response_delay_queue.back.length)) {
        if (!this.#poll_response_delay_queue.front.length) {
          this.#poll_response_delay_queue.front = this.#poll_response_delay_queue.back;
          this.#poll_response_delay_queue.front.reverse();
          this.#poll_response_delay_queue.back = [];
        }

        this.#poll_response_delay_queue.front.pop();
      }

      this.#estimated_update_interval = Math.max(...this.#poll_response_delay_queue.getValues());
    }

    this.#last_update_time = Date.now();

    this.#action_queue.push(group);

    if (this.#next_update_id === null) {
      this.#next_update_id = setTimeout(this.emitSmoothedActions.bind(this));
    }
  }

  public emitSmoothedActions(): void {
    this.#next_update_id = null;

    if (this.#action_queue.length) {
      let delay = 1E4;

      if (this.#estimated_update_interval !== null && this.#last_update_time !== null) {
        delay = this.#estimated_update_interval - Date.now() + this.#last_update_time;
      }

      delay = this.#action_queue.length < delay / 80 ? 1 : Math.ceil(this.#action_queue.length / (delay / 80));

      const actions = flattenQueue(this.#action_queue.splice(0, delay));

      if (this.#callback) {
        this.#callback(actions);
      }

      if (this.#action_queue !== null) {
        if (delay == 1) {
          delay = this.#estimated_update_interval as number / this.#action_queue.length;
          delay *= Math.random() + 0.5;
          delay = Math.min(1E3, delay);
          delay = Math.max(80, delay);
        } else {
          delay = 80;
        }

        this.#next_update_id = setTimeout(this.emitSmoothedActions.bind(this), delay);
      }
    }
  }

  public clear() {
    if (this.#next_update_id !== null) {
      clearTimeout(this.#next_update_id);
      this.#next_update_id = null;
    }
    this.#action_queue = [];
  }

  set callback(cb: ((actions: YTNode[]) => void) | null) {
    this.#callback = cb;
  }

  get callback(): ((actions: YTNode[]) => void) | null {
    return this.#callback;
  }

  get action_queue(): YTNode[][] {
    return this.#action_queue;
  }

  get estimated_update_interval(): number | null {
    return this.#estimated_update_interval;
  }

  get last_update_time(): number | null {
    return this.#last_update_time;
  }

  get next_update_id(): any {
    return this.#next_update_id;
  }

  get poll_response_delay_queue(): DelayQueue {
    return this.#poll_response_delay_queue;
  }
}