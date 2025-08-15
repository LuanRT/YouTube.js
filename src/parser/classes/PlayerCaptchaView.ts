import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';

export default class PlayerCaptchaView extends YTNode {
  static type = 'PlayerCaptchaView';

  captcha_loading_message: {
    content: string,
    style_runs: {
      start_index: number,
      length: number
    }[]
  };
  challenge_reason: {
    content: string,
    style_runs: {
      start_index: number,
      length: number
    }[]
  };
  captcha_successful_message: {
    content: string,
    style_runs: {
      start_index: number,
      length: number
    }[]
  };
  captcha_cookie_set_failure_message: {
    content: string,
    style_runs: {
      start_index: number,
      length: number
    }[]
  };
  captcha_failed_message: {
    content: string,
    style_runs: {
      start_index: number,
      length: number
    }[]
  };

  constructor(data: RawNode) {
    super();
    this.captcha_loading_message = {
      content: data.captchaLoadingMessage.content,
      style_runs: data.captchaLoadingMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.challenge_reason = {
      content: data.challengeReason.content,
      style_runs: data.challengeReason.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.captcha_successful_message = {
      content: data.captchaSuccessfulMessage.content,
      style_runs: data.captchaSuccessfulMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.captcha_cookie_set_failure_message = {
      content: data.captchaCookieSetFailureMessage.content,
      style_runs: data.captchaCookieSetFailureMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.captcha_failed_message = {
      content: data.captchaFailedMessage.content,
      style_runs: data.captchaFailedMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
  }
}
