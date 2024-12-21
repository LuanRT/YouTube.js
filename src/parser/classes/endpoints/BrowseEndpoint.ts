import { YTNode } from '../../helpers.js';
import type { BrowseRequest, IEndpoint, RawNode } from '../../index.js';

const API_PATH = 'browse';

export default class BrowseEndpoint extends YTNode implements IEndpoint<BrowseRequest> {
  static type = 'BrowseEndpoint';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): BrowseRequest {
    const request: BrowseRequest = {};

    if (this.#data.browseId)
      request.browseId = this.#data.browseId;

    if (this.#data.params)
      request.params = this.#data.params;

    if (this.#data.query)
      request.query = this.#data.query;

    if (this.#data.browseId === 'FEsubscriptions') {
      request.subscriptionSettingsState = this.#data.subscriptionSettingsState || 'MY_SUBS_SETTINGS_STATE_LAYOUT_FORMAT_LIST';
    }

    if (this.#data.browseId === 'SPaccount_playback') {
      request.formData = this.#data.formData || {
        accountSettingsFormData: {
          flagCaptionsDefaultOff: false,
          flagAutoCaptionsDefaultOn: false,
          flagDisableInlinePreview: false,
          flagAudioDescriptionDefaultOn: false
        }
      };
    }

    if (this.#data.browseId === 'FEwhat_to_watch') {
      if (this.#data.browseRequestSupportedMetadata)
        request.browseRequestSupportedMetadata = this.#data.browseRequestSupportedMetadata;
      if (this.#data.inlineSettingStatus)
        request.inlineSettingStatus = this.#data.inlineSettingStatus;
    }

    return request;
  }
}