export interface BotGuardChallenge {
  program: string;
  global_name: string;
  interpreter_hash?: string;
  interpreter_url: string;
}
// TODO, make this more comprehensive
export interface AttestationBinding {
  // challenge
  c: string;
  // engagement_type
  e?: string;
  externalChannelId?: string;
  encryptedVideoId?: string;
}
export interface BotGuardSolver<T> {
  solve: (botguard_challenge: BotGuardChallenge, binding: T) => Promise<string>;
}
