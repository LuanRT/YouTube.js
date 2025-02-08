import { Parser } from '../index.js';
import Transcript from '../classes/Transcript.js';

import type { ApiResponse, Actions } from '../../core/index.js';
import type { IGetTranscriptResponse } from '../index.js';

export default class TranscriptInfo {
  readonly #page: IGetTranscriptResponse;
  readonly #actions: Actions;
  public transcript: Transcript;

  constructor(actions: Actions, response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    if (!this.#page.actions_memo)
      throw new Error('Page actions not found');

    this.transcript = this.#page.actions_memo.getType(Transcript)[0];
  }

  /**
   * Selects a language from the language menu and returns the updated transcript.
   * @param language - Language to select.
   */
  async selectLanguage(language: string): Promise<TranscriptInfo> {
    const target_menu_item = this.transcript.content?.footer?.language_menu?.sub_menu_items?.find((item) => item.title.toString() === language);

    if (!target_menu_item)
      throw new Error(`Language not found: ${language}`);

    if (target_menu_item.selected)
      return this;

    const response = await this.#actions.execute('/get_transcript', {
      params: target_menu_item.continuation
    });

    return new TranscriptInfo(this.#actions, response);
  }

  /**
   * Returns available languages.
   */
  get languages(): string[] {
    return this.transcript.content?.footer?.language_menu?.sub_menu_items?.map((item) => item.title.toString()) || [];
  }

  /**
   * Returns the currently selected language.
   */
  get selectedLanguage(): string {
    return this.transcript.content?.footer?.language_menu?.sub_menu_items?.find((item) => item.selected)?.title.toString() || '';
  }

  get page() {
    return this.#page;
  }
}