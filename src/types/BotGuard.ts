import type { IBotguardChallenge } from '../parser/index.js';

export interface BotGuardSolver<T> {
  solve: (botguard_challenge: IBotguardChallenge, binding: T) => Promise<string>;
}