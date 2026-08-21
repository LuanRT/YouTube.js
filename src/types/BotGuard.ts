import type { IBotguardChallenge, IGetChallengeResponse } from '../parser/index.js';

export interface BotGuardSolverChallenge extends IBotguardChallenge {
  ytcfg?: Record<string, unknown>;
};

export interface BotGuardChallengeInfo extends IGetChallengeResponse {
  bg_challenge?: BotGuardSolverChallenge;
} 

export interface BotGuardSolver<T> {
  solve: (botguard_challenge: BotGuardSolverChallenge, binding: T) => Promise<string>;
}