import type { BotGuardChallenge, BotGuardSolver } from '../../types/BotGuard.js';
import type { EngagementType } from '../../types/Misc.js';
import { Constants } from '../../utils/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { Actions, Session } from '../index.js';

interface StudioUnboundChallenge {
  bg_challenge: BotGuardChallenge;
  challenge: string;
  eats: string;
  expires_at_ms: number;
};

interface StudioBotguardData {
  interpreter_url: string;
  program: string;
};

interface StudioCreatorStudioChallenge {
  botguard_data: StudioBotguardData;
  challenge: string;
  eats: string;
};

export default class StudioWeb {
  #session: Session;
  #actions: Actions;
  #botguard_solver: BotGuardSolver<string>|null;
  #unbound_challenge_cache: StudioUnboundChallenge|undefined;

  constructor(session: Session) {
    this.#session = session;
    this.#actions = session.actions;
    this.#botguard_solver = null;
    if (!session.logged_in)
      throw new InnertubeError('You must be signed in to use this client.');
  }

  setBotGuardSolver(botguard_solver: BotGuardSolver<string>) {
    this.#botguard_solver = botguard_solver;
  }

  async #attGet(engagement_type: EngagementType, ids?: Record<string, any>[], eats?: string) {
    const payload: Record<string, any> = {
      engagementType: engagement_type
    };

    if (ids) payload.ids = ids;

    return this.#actions.execute('/att/get', { client: 'WEB_CREATOR', parse: true, ...payload, ...(eats ? { eats } : {}) });
  }

  #challengeExpiryAtMs(challenge?: string): number {
    if (challenge === undefined) return Date.now();
    const params = new URLSearchParams(challenge);
    const issued_seconds = Number(params.get('c'));
    const ttl_seconds = Number(params.get('t'));
    if (isNaN(issued_seconds) || isNaN(ttl_seconds) || issued_seconds === 0) return Date.now();
    return (issued_seconds + ttl_seconds) * 1000;
  }

  async #getUnboundChallenge(): Promise<StudioUnboundChallenge> {
    if (this.#unbound_challenge_cache !== undefined && this.#unbound_challenge_cache.expires_at_ms > Date.now()) return this.#unbound_challenge_cache;
    const unbound_challenge = await this.#attGet('ENGAGEMENT_TYPE_UNBOUND');

    if (!unbound_challenge.eats) throw new InnertubeError('Unbound challenge missing "eats"');
    if (!unbound_challenge.challenge) throw new InnertubeError('Unbound challenge missing "challenge"');
    if (!unbound_challenge.bg_challenge) throw new InnertubeError('Unbound challenge missing "bg_challenge"');

    this.#unbound_challenge_cache = { 
      bg_challenge: {
        ...unbound_challenge.bg_challenge,
        interpreter_url: unbound_challenge.bg_challenge.interpreter_url.private_do_not_access_or_else_safe_script_wrapped_value ?? unbound_challenge.bg_challenge.interpreter_url.private_do_not_access_or_else_trusted_resource_url_wrapped_value ?? ''
      },
      challenge: unbound_challenge.challenge,
      eats: unbound_challenge.eats,
      expires_at_ms: this.#challengeExpiryAtMs(unbound_challenge.challenge)
    };
    if (!this.#unbound_challenge_cache.bg_challenge.interpreter_url) throw new InnertubeError('Unbound challenge bg_challenge missing valid "interpreter_url"');
    return this.#unbound_challenge_cache;
  }

  async #getCreatorStudioChallenge(channel_id: string, unbound_challenge_eats: string): Promise<StudioCreatorStudioChallenge> {
    const creator_studio_challenge = await this.#attGet('ENGAGEMENT_TYPE_CREATOR_STUDIO_ACTION', [ { externalChannelId: channel_id } ], unbound_challenge_eats);

    if (!creator_studio_challenge.eats) throw new InnertubeError('Creator Studio challenge missing "eats"');
    if (!creator_studio_challenge.challenge) throw new InnertubeError('Creator Studio challenge missing "challenge"');
    if (!creator_studio_challenge.botguard_data) throw new InnertubeError('Creator Studio challenge missing "botguard_data"');

    const interpreter_url = creator_studio_challenge.botguard_data.interpreter_url.private_do_not_access_or_else_safe_script_wrapped_value ?? creator_studio_challenge.botguard_data.interpreter_url.private_do_not_access_or_else_trusted_resource_url_wrapped_value ?? '';
    if (!interpreter_url) throw new InnertubeError('Creator Studio challenge bg_challenge missing valid "interpreter_url"');
    return {
      botguard_data: {
        ...creator_studio_challenge.botguard_data,
        interpreter_url: interpreter_url
      },
      challenge: creator_studio_challenge.challenge,
      eats: creator_studio_challenge.eats
    };
  }

  // TODO add caching support and whatnot
  async getSessionToken(channel_id: string): Promise<string> {
    if (!this.#botguard_solver) throw new InnertubeError('BotGuard Solver is not initialized. Please setup with setBotGuardSolver()');

    const unbound_challenge = await this.#getUnboundChallenge();
    const creator_studio_challenge = await this.#getCreatorStudioChallenge(channel_id, unbound_challenge.eats);

    const botguard_response = await this.#botguard_solver.solve(unbound_challenge.bg_challenge, creator_studio_challenge.challenge);

    const esr_data = await this.#actions.execute('/att/esr', { 
      client: 'WEB_CREATOR',
      parse: true,
      challenge: creator_studio_challenge.challenge,
      botguardResponse: botguard_response,
      xguardClientStatus: 0,
      eats: creator_studio_challenge.eats
    });

    if (!esr_data.ctx || esr_data.should_fetch_reauth_session_token === undefined) throw new InnertubeError('/att/esr did not return usable data');

    let grst_ctx = esr_data.ctx;
    let reauth_proof_token: string | undefined;
    if (esr_data.should_fetch_reauth_session_token === true) {
      const reauth_data = await this.#actions.execute('/security/get_web_reauth_url', {
        client: 'WEB_CREATOR',
        parse: true,
        continueUrl: `${Constants.URLS.YT_STUDIO_WEB_BASE}/reauth`,
        flow: 'REAUTH_FLOW_YT_STUDIO_COLD_LOAD',
        ivctx: esr_data.ctx,
        challenge: creator_studio_challenge.challenge,
        botguardResponse: botguard_response,
        eats: creator_studio_challenge.eats
      });
      if (!reauth_data.encoded_reauth_proof_token || !reauth_data.session_risk_ctx) throw new InnertubeError('/security/get_web_reauth_url did not return a reauth proof');
      grst_ctx = reauth_data.session_risk_ctx;
      reauth_proof_token = reauth_data.encoded_reauth_proof_token;
    }

    const grst_data = await this.#actions.execute('/ars/grst', { client: 'WEB_CREATOR', parse: true, ctx: grst_ctx, reauth_proof_token, eats: creator_studio_challenge.eats });
    
    if (grst_data.session_token === undefined) throw new InnertubeError('/ars/grst did not return a session token');
    return grst_data.session_token;
  }
}
