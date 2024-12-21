import { YTNode } from '../../helpers.js';
import type { GetAccountsListInnertubeRequest, IEndpoint, RawNode } from '../../index.js';

const API_PATH = 'account/accounts_list';

export default class GetAccountsListInnertubeEndpoint extends YTNode implements IEndpoint<GetAccountsListInnertubeRequest> {
  static type = 'GetAccountsListInnertubeEndpoint';

  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return API_PATH;
  }

  public buildRequest(): GetAccountsListInnertubeRequest {
    const request: GetAccountsListInnertubeRequest = {};

    if (this.#data.requestType) {
      request.requestType = this.#data.requestType;
      if (this.#data.requestType === 'ACCOUNTS_LIST_REQUEST_TYPE_CHANNEL_SWITCHER' || this.#data.requestType === 'ACCOUNTS_LIST_REQUEST_TYPE_IDENTITY_PROMPT') {
        if (this.#data.nextUrl)
          request.nextNavendpoint = {
            urlEndpoint: {
              url: this.#data.nextUrl
            }
          };
      }
    }

    if (this.#data.channelSwitcherQuery)
      request.channelSwitcherQuery = this.#data.channelSwitcherQuery;

    if (this.#data.triggerChannelCreation)
      request.triggerChannelCreation = this.#data.triggerChannelCreation;

    if (this.#data.contentOwnerConfig && this.#data.contentOwnerConfig.externalContentOwnerId)
      request.contentOwnerConfig = this.#data.contentOwnerConfig;

    if (this.#data.obfuscatedSelectedGaiaId)
      request.obfuscatedSelectedGaiaId = this.#data.obfuscatedSelectedGaiaId;

    if (this.#data.selectedSerializedDelegationContext)
      request.selectedSerializedDelegationContext = this.#data.selectedSerializedDelegationContext;

    if (this.#data.callCircumstance)
      request.callCircumstance = this.#data.callCircumstance;

    return request;
  }
}