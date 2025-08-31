import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';
import type { AttributedText } from './misc/Text.js';

export default class PlayerCaptchaView extends YTNode {
  static type = 'PlayerCaptchaView';

  captcha_loading_message: AttributedText;
  challenge_reason: AttributedText;
  captcha_successful_message: AttributedText;
  captcha_cookie_set_failure_message: AttributedText;
  captcha_failed_message: AttributedText;

  constructor(data: RawNode) {
    super();
    this.captcha_loading_message = {
      content: data.captchaLoadingMessage.content,
      styleRuns: data.captchaLoadingMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.challenge_reason = {
      content: data.challengeReason.content,
      styleRuns: data.challengeReason.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.captcha_successful_message = {
      content: data.captchaSuccessfulMessage.content,
      styleRuns: data.captchaSuccessfulMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.captcha_cookie_set_failure_message = {
      content: data.captchaCookieSetFailureMessage.content,
      styleRuns: data.captchaCookieSetFailureMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
    this.captcha_failed_message = {
      content: data.captchaFailedMessage.content,
      styleRuns: data.captchaFailedMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    };
  }
}
