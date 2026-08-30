import type { AttIdsRaw } from '../parser/classes/commands/RunAttestationCommand.js';
import type { IBotguardChallenge, IGetChallengeResponse } from '../parser/index.js';
import type { EngagementType } from './Misc.js';

export interface BotGuardSolverChallenge extends IBotguardChallenge {
  ytcfg?: Record<string, unknown>;
}

export interface BotGuardChallengeInfo extends Pick<Required<IGetChallengeResponse>, 'bg_challenge' | 'challenge'> {
  bg_challenge: BotGuardSolverChallenge;
}

export interface BotGuardLogBinding extends AttIdsRaw {
  c: string;
  e: EngagementType;
}

export interface BotGuardSolver<T> {
  solve: (botguard_challenge: BotGuardSolverChallenge, binding: T) => Promise<string>;
}