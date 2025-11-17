import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';
import Text from './misc/Text.js';

export default class PlayerCaptchaView extends YTNode {
  static type = 'PlayerCaptchaView';

  captcha_loading_message: Text;
  challenge_reason: Text;
  captcha_successful_message: Text;
  captcha_cookie_set_failure_message: Text;
  captcha_failed_message: Text;

  constructor(data: RawNode) {
    super();
    this.captcha_loading_message = Text.fromAttributed({
      content: data.captchaLoadingMessage.content,
      styleRuns: data.captchaLoadingMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    });
    this.challenge_reason = Text.fromAttributed({
      content: data.challengeReason.content,
      styleRuns: data.challengeReason.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    });
    this.captcha_successful_message = Text.fromAttributed({
      content: data.captchaSuccessfulMessage.content,
      styleRuns: data.captchaSuccessfulMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    });
    this.captcha_cookie_set_failure_message = Text.fromAttributed({
      content: data.captchaCookieSetFailureMessage.content,
      styleRuns: data.captchaCookieSetFailureMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    });
    this.captcha_failed_message = Text.fromAttributed({
      content: data.captchaFailedMessage.content,
      styleRuns: data.captchaFailedMessage.styleRuns.map((item: any) => ({
        start_index: item.startIndex,
        length: item.length
      }))
    });
  }
}
