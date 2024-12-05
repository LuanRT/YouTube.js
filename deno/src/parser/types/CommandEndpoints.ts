export interface IEndpoint<T = any> {
  getApiPath(): string;
  buildRequest(): T;
}

export type BrowseRequest = {
  browseId?: string;
  params?: string;
  query?: string;
  formData?: FormData;
  subscriptionSettingsState?: string;
  browseRequestSupportedMetadata?: BrowseRequestSupportedMetadata;
  inlineSettingStatus?: InlineSettingStatus;
};

export type FormData = {
  accountSettingsFormData: {
    flagCaptionsDefaultOff: boolean;
    flagAutoCaptionsDefaultOn: boolean;
    flagDisableInlinePreview: boolean;
    flagAudioDescriptionDefaultOn: boolean;
  };
};

export type BrowseRequestSupportedMetadata = {
  downloadsBrowseParams: {
    offlineFeatureSettingState: {
      isSdEnabled: boolean;
    };
  };
};

export type InlineSettingStatus = 'INLINE_SETTING_STATUS_DISABLED' | 'INLINE_SETTING_STATUS_ON';

export type FeedbackContext = {
  cpn: string;
};

export type FeedbackRequest = {
  feedbackTokens?: string[];
  feedbackContext?: FeedbackContext;
  isFeedbackTokenUnencrypted?: boolean;
  shouldMerge?: boolean;
}

export type LikeTarget = {
  videoId: string;
}

export type LikeRequest = {
  target?: LikeTarget;
  params?: string;
}

export type AddToPlaylistServiceRequest = {
  videoIds?: string[];
  playlistId?: string;
  params?: string;
  excludeWatchLater?: boolean;
}

export type WatchRequest = {
  videoId?: string;
  playlistId?: string;
  playlistIndex?: number;
  params?: string;
  startTimeSecs?: string;
  overrideMutedAtStart?: boolean;
  racyCheckOk?: boolean;
  contentCheckOk?: boolean;
  disablePlayerResponse?: boolean;
  playerRequest?: Record<string, any>;
}

export type WatchNextRequest = {
  videoId?: string;
  playlistId?: string;
  playlistIndex?: number;
  params?: string;
  racyCheckOk?: boolean;
  contentCheckOk?: boolean;
}

export type ReelWatchRequest = {
  inputType?: string;
  params?: string;
  disablePlayerResponse?: boolean;
  playerRequest?: {
    videoId: string;
    params?: string;
    racyCheckOk?: boolean;
    contentCheckOk?: boolean;
  }
}

export type PlaylistEditRequest = {
  actions?: Record<string, any>[];
  playlistId?: string;
  params?: string;
}

export type PlaylistPrivacyStatus = 'PUBLIC' | 'UNLISTED' | 'PRIVATE';

export type CreatePlaylistServiceRequest = {
  title?: string;
  privacyStatus?: PlaylistPrivacyStatus;
  description?: string;
  videoIds?: string[];
  params?: string;
  sourcePlaylistId?: string;
}

export type DeletePlaylistServiceRequest = {
  playlistId?: string;
}

export type SearchRequest = {
  query?: string;
  params?: string;
  webSearchboxStatsUrl?: string;
  suggestStats?: unknown;
}

export type SubscribeRequest = { 
  channelIds?: string[];
  siloName?: string;
  params?: string;
  botguardResponse?: string;
  clientFeature?: string;
}

export type UnsubscribeRequest = {
  channelIds?: string[];
  siloName?: string;
  params?: string;
}

export type ShareEntityServiceRequest = {
  serializedSharedEntity?: string;
  clientParams?: string;
}

export type ContinuationRequest = {
  formData?: FormData;
  continuation?: string;
  notificationsMenuRequestType?: string;
  fetchCommentsParams?: {
    continuation: string;
  }
}

export type LiveChatItemContextMenuRequest = {
  params?: string;
}

export type NextNavendpoint = {
  urlEndpoint: {
    url: string;
  }
}

export type GetAccountsListInnertubeRequest = {
  requestType?: string;
  nextNavendpoint?: NextNavendpoint;
  channelSwitcherQuery?: string;
  triggerChannelCreation?: boolean;
  contentOwnerConfig?: Record<string, any>;
  callCircumstance?: 'SUPPLEMENTAL_USER' | 'SWITCHING_USERS_FULL';
  obfuscatedSelectedGaiaId?: string;
  selectedSerializedDelegationContext?: string;
}

export type GetKidsBlocklistPickerRequest = {
  blockedForKidsContent?: {
    external_channel_id: string;
  };
}

export type CreateCommentRequest = {
  createCommentParams?: string;
  commentText?: string;
  videoAttachment?: { videoId: string };
  pollAttachment?: { choices: string[] };
  imageAttachment?: { encryptedBlobId: string };
  sharedPostAttachment?: { postId: string };
  accessRestrictions?: { restriction: 'RESTRICTION_TYPE_EVERYONE' | 'RESTRICTION_TYPE_SPONSORS_ONLY' };
  botguardResponse?: string;
}

export type PerformCommentActionRequest = {
  actions?: Record<string, any>[];
}

export type ModifyChannelNotificationPreferenceRequest = {
  params?: string;
  secondaryParams?: string;
}