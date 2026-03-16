import { YTNode } from '../helpers.ts';
import { Text } from '../misc.ts';
import { type RawNode } from '../index.ts';

export default class PlayerCaptchaView extends YTNode {
  static type = 'PlayerCaptchaView';

  public captcha_loading_message?: Text;
  public challenge_reason?: Text;
  public captcha_successful_message?: Text;
  public captcha_cookie_set_failure_message?: Text;
  public captcha_failed_message?: Text;

  constructor(data: RawNode) {
    super();

    if ('captchaLoadingMessage' in data) {
      this.captcha_loading_message = Text.fromAttributed(data.captchaLoadingMessage);
    }

    if ('challengeReason' in data) {
      this.challenge_reason = Text.fromAttributed(data.challengeReason);
    }

    if ('captchaSuccessfulMessage' in data) {
      this.captcha_successful_message = Text.fromAttributed(data.captchaSuccessfulMessage);
    }

    if ('captchaCookieSetFailureMessage' in data) {
      this.captcha_cookie_set_failure_message = Text.fromAttributed(data.captchaCookieSetFailureMessage);
    }

    if ('captchaFailedMessage' in data) {
      this.captcha_failed_message = Text.fromAttributed(data.captchaFailedMessage);
    }
  }
}