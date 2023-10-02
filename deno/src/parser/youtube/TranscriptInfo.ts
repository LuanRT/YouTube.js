import type Actions from '../../core/Actions.ts';
import { type ApiResponse } from '../../core/Actions.ts';
import type { IGetTranscriptResponse } from '../index.ts';
import Parser from '../index.ts';
import Transcript from '../classes/Transcript.ts';

export default class TranscriptInfo {
  #page: IGetTranscriptResponse;
  #actions: Actions;
  transcript: Transcript;

  constructor(actions: Actions, response: ApiResponse) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;
    this.transcript = this.#page.actions_memo.getType(Transcript).first();
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