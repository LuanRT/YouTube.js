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