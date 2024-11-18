import { YTNode } from '../../helpers.js';
import type { BrowseRequest, RawNode } from '../../index.js';

export default class BrowseEndpoint extends YTNode {
  static type = 'BrowseEndpoint';

  #EXTENSION_NAME: string = 'browseEndpoint';
  #API_PATHS: string[] = [ 'browse', 'music/browse', 'unplugged/browse' ];
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPaths() {
    return this.#API_PATHS;
  }

  public getExtension() {
    return this.#data[this.#EXTENSION_NAME];
  }

  public buildRequest() {
    const request: BrowseRequest = {};
    const extension = this.getExtension();

    if (extension.browseId)
      request.browseId = extension.browseId;

    if (extension.params)
      request.params = extension.params;

    if (extension.query)
      request.query = extension.query;

    if (extension.browseId === 'FEsubscriptions') {
      request.subscriptionSettingsState = extension.subscriptionSettingsState || 'MY_SUBS_SETTINGS_STATE_LAYOUT_FORMAT_LIST';
    }

    if (extension.browseId === 'SPaccount_playback') {
      request.formData = extension.formData || {
        accountSettingsFormData: {
          flagCaptionsDefaultOff: false,
          flagAutoCaptionsDefaultOn: false,
          flagDisableInlinePreview: false,
          flagAudioDescriptionDefaultOn: false
        }
      };
    }

    if (extension.browseId === 'FEwhat_to_watch') {
      if (extension.browseRequestSupportedMetadata)
        request.browseRequestSupportedMetadata = extension.browseRequestSupportedMetadata;
      if (extension.inlineSettingStatus)
        request.inlineSettingStatus = extension.inlineSettingStatus;
    }

    return request;
  }
}