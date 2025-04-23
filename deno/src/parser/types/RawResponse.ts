export type RawNode = Record<string, any>;
export type RawData = RawNode | RawNode[];

type IYoutubeApiInnertubeRelevantStateTag = {
  onStateTagModified?:
    | 'STATE_TAG_CACHE_INSTRUCTION_UNKNOWN'
    | 'STATE_TAG_CACHE_INSTRUCTION_DO_NOTHING'
    | 'STATE_TAG_CACHE_INSTRUCTION_EVICT_RESPONSE';
  stateTag?: number;
};

type IYoutubeApiInnertubeStateTags = {
  relevantStateTags?: Array<IYoutubeApiInnertubeRelevantStateTag>;
  stateTagsModified?: Array<number>;
};

type IYoutubeApiInnertubeCacheInstruction = {
  maxAgeSeconds?: number;
  monitoringKey?: number;
  stateTags?: IYoutubeApiInnertubeStateTags;
}

type IYoutubeApiInnertubeConsistencyTokenJar = {
  encryptedTokenJarContents?: string;
  expirationSeconds?: string;
};

type IYoutubeApiInnertubeKeyValuePair = {
  boolValue?: boolean;
  floatValue?: number;
  intValue?: number;
  key?: string;
  value?: string;
};

type IYoutubeApiInnertubeCsiParams = {
  params?: Array<IYoutubeApiInnertubeKeyValuePair>;
};

type IYoutubeApiInnertubeStackFrame = {
  filename?: string;
  lineNumber?: number;
};

type IYoutubeApiInnertubeProtoTrace = {
  action?: 'MOD_ACTION_UNKNOWN' | 'MOD_ACTION_SET' | 'MOD_ACTION_GET_COPY';
  fieldPath?: string;
  stackFrames?: Array<IYoutubeApiInnertubeStackFrame>;
};

type IYoutubeApiInnertubeDebugInfo = {
  traces?: Array<IYoutubeApiInnertubeProtoTrace>;
};

type IGdataErrorProto = {
  argument?: Array<string>;
  code?: string;
  debugInfo?: string;
  domain?: string;
  externalErrorMessage?: string;
  location?: string;
  locationType?: 'PATH' | 'OTHER' | 'PARAMETER';
};

type IGdataErrors = {
  code?:
    | 'BAD_REQUEST'
    | 'FORBIDDEN'
    | 'NOT_FOUND'
    | 'CONFLICT'
    | 'GONE'
    | 'PRECONDITION_FAILED'
    | 'INTERNAL_ERROR'
    | 'SERVICE_UNAVAILABLE';
  error?: Array<IGdataErrorProto>;
  requestId?: string;
};

type IYoutubeApiInnertubeExperimentalData = {
  params?: Array<IYoutubeApiInnertubeKeyValuePair>;
};

type IYoutubeApiInnertubeFlagValue = {
  booleanFlagValue?: boolean;
  bytesFlagValue?: string;
  doubleFlagValue?: number;
  intFlagValue?: string;
  stringFlagValue?: string;
};

type IYoutubeApiInnertubeExperimentFlagConfigFlagsEntry = {
  key?: string;
  value?: IYoutubeApiInnertubeFlagValue;
};

type IYoutubeApiInnertubeExperimentFlagConfigCustomFlagsEntry = {
  key?: string;
  value?: IYoutubeApiInnertubeFlagValue;
};

type IYoutubeApiInnertubeExperimentFlagConfig = {
  customFlags?: Array<
    IYoutubeApiInnertubeExperimentFlagConfigCustomFlagsEntry
  >;
  flags?: Array<IYoutubeApiInnertubeExperimentFlagConfigFlagsEntry>;
};

type IYoutubeApiInnertubeAccountDynamicConfigGroup = {
  configForTesting?: boolean;
  experimentFlags?: IYoutubeApiInnertubeExperimentFlagConfig;
};

type IYoutubeApiInnertubeAccountStaticConfigGroup = {
  activeConfigData?: string;
  configForTesting?: boolean;
  experimentFlags?: IYoutubeApiInnertubeExperimentFlagConfig;
};

type IYoutubeApiInnertubeMainAppColdConfig = {
  activeStateDwellTimeThresholdMs?: number;
  activeStateInfrastructureDebugSetting?: string;
  activeStateInfrastructureExpName?: string;
  activeStateInfrastructureLoggingEnabled?: boolean;
  activeStatePostSelectionBoostPercentage?: number;
  activeStateVisibilityThresholdPercentage?: number;
  adaptiveSignalsDeviceSignalsEnabled?: boolean;
  addBadgeForNotificationTopBar?: boolean;
  addLiveBadgeToThumbnailTimestampOverlay?: boolean;
  adsPlaybackFullscreenUiStyle?: string;
  adsPlayerScrubbingUiStyle?: string;
  adultContentConfirmationRateLimitingEnabled?: boolean;
  androidActionBarRefactorToTopBar?: boolean;
  androidAlwaysNavigateSendRequestsOnHomeBrowse?: boolean;
  androidAlwaysNavigateShowSpinnerOnErrorPage?: boolean;
  androidAutoRefreshOfflineWatchPageOnReconnection?: boolean;
  androidBackMaximizesFromFullscreen?: boolean;
  androidBackSkipsPlayerBackstack?: boolean;
  androidBackgroundFailureSnackbarEnabled?: boolean;
  androidBackgroundPlaybackNotificationInteractionLogging?: boolean;
  androidBedtimeFixLatency?: boolean;
  androidBedtimeReminderBackgroundInitialization?: boolean;
  androidChangeOverflowMenuToBottomSheet?: boolean;
  androidCheckMdxPreviouslyUsed?: boolean;
  androidClockEntityUpdatePeriodSeconds?: number;
  androidColdConfigEnableLinearGridFeedOnTablet?: boolean;
  androidColdConfigEnableLinearHomeFeedOnTablet?: boolean;
  androidCsiDisableHomeWithThumbnails?: boolean;
  androidDataSavingSettings?: boolean;
  androidDeferPlayerInitSignal?: number;
  androidDeferPlayerInitTimeout?: number;
  androidDeferWatchNextLoggingAfterAttach?: boolean;
  androidDeferWatchPlayerLoggingAfterAttach?: boolean;
  androidDelayMdxScanning?:
    | 'STARTUP_SIGNAL_UNKNOWN'
    | 'STARTUP_SIGNAL_FIRST_THUMBNAIL_LOADED'
    | 'STARTUP_SIGNAL_FIRST_BROWSE_FEED_RENDERED'
    | 'STARTUP_SIGNAL_ACTIVITY_ONRESUME_LOADED'
    | 'STARTUP_SIGNAL_FIRST_BROWSE_RESPONSE_PARSED'
    | 'STARTUP_SIGNAL_FIRST_BROWSE_REQUEST_SENT'
    | 'STARTUP_SIGNAL_FIRST_FRAME_ON_PRE_DRAW'
    | 'STARTUP_SIGNAL_FIRST_FRAME_ON_DRAW'
    | 'STARTUP_SIGNAL_FIRST_PLAYBACK_STARTED';
  androidDelayMdxScanningTimeoutMs?: number;
  androidDelayPostResumeSignalMillis?: number;
  androidDelayRegistrarItemsV1?: boolean;
  androidDisableClockEntityTransformationTrigger?: boolean;
  androidDisableCompressedAutonavCanceledState?: boolean;
  androidDisableDownloadRecommendationsOnLowStorage?: boolean;
  androidDisableKeepControlsVisibleWhileTouchTimebar?: boolean;
  androidDisableLandscapeBrowse?: boolean;
  androidDisableProcessCsiActionLogging?: boolean;
  androidDisableTimeBarTapToSeek?: boolean;
  androidDownloadRecommendationsExecuteTaskBackground?: boolean;
  androidDownloadRecommendationsForOfflineEligibleUser?: boolean;
  androidDrapDeleteFromSettingFix?: boolean;
  androidDrapEnableCascadingDeletion?: boolean;
  androidDrapMigrateDataModelToViewModel?: boolean;
  androidDynamicWatchClientFormFactorEnabled?: boolean;
  androidDynamicWatchClientFormFactorReloadEnabled?: boolean;
  androidDynamicWatchLayoutEnabled?: boolean;
  androidDynamicWatchMiniPlayerEnabled?: boolean;
  androidEnableAccountLinkingSdkV2?: boolean;
  androidEnableBedtimeReminderSettingUpdate?: boolean;
  androidEnableClearCacheIncludingDirectories?: boolean;
  androidEnableCloseAllEngagementPanelsOnClear?: boolean;
  androidEnableComposableDownloadsPageArchitecture?: boolean;
  androidEnableComposableDownloadsPageArchitectureDarkLaunchNoLogging?: boolean;
  androidEnableComposableDownloadsPageArchitectureDarkLaunchWithLogging?: boolean;
  androidEnableComposableDownloadsPageSectionProviders?: boolean;
  androidEnableComposableDownloadsPageSectionProvidersDarkLaunch?: boolean;
  androidEnableContentPillForMemoryCache?: boolean;
  androidEnableCsiAbandonment?: boolean;
  androidEnableCustomInlinePlayerOverlayContainer?: boolean;
  androidEnableDebugSearchCsiOnGel?: boolean;
  androidEnableDefaultOffPipSetting?: boolean;
  androidEnableDeferPlayerInit?: boolean;
  androidEnableDispatchTouchEventCrashLogging?: boolean;
  androidEnableDomoCompatibilityThrottlingInBackground?: boolean;
  androidEnableDomoFaultHandlingOnMultipleSchedulers?: boolean;
  androidEnableDomoProjectionOnMultipleSchedulers?: boolean;
  androidEnableDomoTransformationInBackground?: boolean;
  androidEnableDomoTransformationOnMultipleSchedulers?: boolean;
  androidEnableDomoTransformationThrottlingInBackground?: boolean;
  androidEnableDownloadFlowRewire?: boolean;
  androidEnableDownloadFlowRewireAndBottomSheet?: boolean;
  androidEnableDownloadOfflineCandidateDialogLogging?: boolean;
  androidEnableDownloadQualityUpsell?: boolean;
  androidEnableDownloadQualityUpsellAlternateOrder?: boolean;
  androidEnableDownloadRecommendations?: boolean;
  androidEnableDownloadsPageComposableDisclaimer?: boolean;
  androidEnableDownloadsPageElementsBundle?: boolean;
  androidEnableDownloadsPageLatencyLogging?: boolean;
  androidEnableDownloadsSearchLogging?: boolean;
  androidEnableDrapDownloadRecommendations?: boolean;
  androidEnableDrapObserveAndCacheRecsList?: boolean;
  androidEnableDrapWithRenderers?: boolean;
  androidEnableEasySeekGesture?: boolean;
  androidEnableElementsDownloadQualityPicker?: boolean;
  androidEnableElementsDownloadsPagePlaylistLogging?: boolean;
  androidEnableElementsPlaylistsOnDownloadsPage?: boolean;
  androidEnableElementsSingleVideosOnDownloadsPage?: boolean;
  androidEnableEngagementPanelSyncFastScroll?: boolean;
  androidEnableError204CrashReport?: boolean;
  androidEnableExcessiveTopBarRedrawOptimization?: boolean;
  androidEnableFaultRegistrationInBackground?: boolean;
  androidEnableFocusFilterBarOnHome?: boolean;
  androidEnableForceRecreateTopBarOnResume?: boolean;
  androidEnableForceRecreateTopBarOnResumeExceptStartupPanels?: boolean;
  androidEnableGenerateOfflineLibraryResponseWhenMissing?: boolean;
  androidEnableGfeedbackFromSerp?: boolean;
  androidEnableGlobalEp?: boolean;
  androidEnableHeatseeker?: boolean;
  androidEnableHidingDownloadQualitySetting?: boolean;
  androidEnableHidingRecommendDownloadsSetting?: boolean;
  androidEnableImpOnScrollStrategy?: boolean;
  androidEnableInnertubeSearchFilters?: boolean;
  androidEnableInstalledSharingServiceIdsImprovement?: boolean;
  androidEnableJsModuleStartup?: boolean;
  androidEnableLensOnPause?: boolean;
  androidEnableLithoRecyclerbinder?: boolean;
  androidEnableLithoRecyclerbinderHome?: boolean;
  androidEnableLithoRecyclerbinderSearch?: boolean;
  androidEnableLithoRecyclerbinderWatch?: boolean;
  androidEnableMicOnSerp?: boolean;
  androidEnableMicOutOfSearchBar?: boolean;
  androidEnableMixImpOnScrollStrategy?: boolean;
  androidEnableOfflineCompatibilityLayerSingleTransactions?: boolean;
  androidEnableOfflineTravelBanner?: boolean;
  androidEnablePaddingForListWithElements?: boolean;
  androidEnablePartialPlaybackDownloadIcon?: boolean;
  androidEnablePip?: boolean;
  androidEnablePlaylistProgressUpdateOnVideoAdded?: boolean;
  androidEnableRegistrarOnresume?: boolean;
  androidEnableRendererDialogLoggingImprovement?: boolean;
  androidEnableSearchBackAsAStack?: boolean;
  androidEnableSearchBar?: boolean;
  androidEnableSearchBarOnSerpOnly?: boolean;
  androidEnableSearchBarOnTablet?: boolean;
  androidEnableSearchBarOnlyOnSearch?: boolean;
  androidEnableSearchBarTransition?: boolean;
  androidEnableSearchButtonsLogging?: boolean;
  androidEnableSearchControllersOnSerp?: boolean;
  androidEnableSearchCsiOnGel?: boolean;
  androidEnableSearchRequestController?: boolean;
  androidEnableSerpContinuationCaching?: boolean;
  androidEnableSettingsStoreEntityTransformationTrigger?: boolean;
  androidEnableShortsProgressBarRedForLowEndDevices?: boolean;
  androidEnableSingletonVideoViewCount?: boolean;
  androidEnableSpacedtimeLayout?: boolean;
  androidEnableSplitPaneLibrary?: boolean;
  androidEnableStartupsignalstreamAsObserver?: boolean;
  androidEnableStreamSelectionLogging?: boolean;
  androidEnableSwipeToCamera?: boolean;
  androidEnableTexitBanner?: boolean;
  androidEnableTexitEndpointOverride?: boolean;
  androidEnableTexitPlaylistMessage?: boolean;
  androidEnableTexitVideoMessage?: boolean;
  androidEnableTopNavBarAnimation?: boolean;
  androidEnableTopNavSearchBar?: boolean;
  androidEnableTopNavSearchBarTablet?: boolean;
  androidEnableUpforfullTabletFix?: boolean;
  androidEnableVoiceInputController?: boolean;
  androidEnableVozBottomSheet?: boolean;
  androidEnableVozHalfPlateV0?: boolean;
  androidEnableVozTabletUiUpdate?: boolean;
  androidEnableWatchNextCardboardMode?: boolean;
  androidEnableWatchToWatchLogScreenEndFix?: boolean;
  androidEnableWwaInitializableMigration?: boolean;
  androidEngagementPanelListSyncDebounceMillis?: number;
  androidFeedRolloutVariants?: string;
  androidFillPreviousProgressForPlaylistDownloadStatusEntity?: boolean;
  androidFloatyBarEnableMarqueeEffectOnAutonav?: boolean;
  androidForceNoPrefetchContentPill?: boolean;
  androidForceTooltipAlignment?: boolean;
  androidForegroundPlaybackControllerLazyBackgroundInitialization?: boolean;
  androidForegroundPlaybackControllerLazyInitialization?: boolean;
  androidGeneratePlaylistDownloadStatusEntityOnStartup?: boolean;
  androidGeneratePlaylistEntities?: boolean;
  androidGenerateSingleVideosEntitiesOnStartup?: boolean;
  androidGlobalThemeSwappingEnabled?: boolean;
  androidGreyOutUnclickableButtonsOnOfflineWatchPage?: boolean;
  androidHideNestedEngagementPanelHeaderBackButton?: boolean;
  androidHomeSelectableRegionEndAsPercentOfContainerLength?: number;
  androidHomeSelectableRegionMinimumVisibilityPercentage?: number;
  androidHomeSignalStreamDefaultTimeoutSeconds?: number;
  androidHydrateMdxDependencies?: boolean;
  androidImmersiveWatchEnabled?: boolean;
  androidInitDownloadPageAsync?: boolean;
  androidInitFirebaseAsync?: boolean;
  androidInitFirebaseAsyncSecs?: number;
  androidInitializeDownloadsElementsControllerInBackground?: boolean;
  androidInitializePlayerInBackground?: boolean;
  androidInnertubeDiskCacheSizeInBytes?: number;
  androidKeepPlayerControlsVisibilityOnVideoPause?: boolean;
  androidLayoutSystemEnabledForNotifications?: boolean;
  androidLayoutSystemEnabledForNotificationsRenderer?: boolean;
  androidLayoutSystemLibraryEnabled?: boolean;
  androidLazyYoutubeControlsOverlayAllUiEnabled?: boolean;
  androidLazyYoutubeControlsOverlayEnabled?: boolean;
  androidLiveChatOverlayAllowLowProfileMode?: boolean;
  androidLogStartupSignalStream?: boolean;
  androidMainDialogFragmentInlineAuthResolver?: boolean;
  androidMainLiveCreationActivityEnabled?: boolean;
  androidMainSharedFusionSignInFlow?: boolean;
  androidMaxHardwareDecoders?: number;
  androidMdxMaxDaysReconnect?: number;
  androidMicButtonStyle?: string;
  androidMigrateDpBannerToElements?: boolean;
  androidMigrateDpcpToSingleFromMaybe?: boolean;
  androidMigrateMessageBannerToUseEntities?: boolean;
  androidMigrateOnDeviceSuggestOffSharedPreferences?: boolean;
  androidMoveOnResponseReceivedEndpointBeforeRendering?: boolean;
  androidMultiviewCaptionsStickinessBugFix?: boolean;
  androidNetworkBgPriorityLow?: boolean;
  androidNewAccessibilityPlayerEnabled?: boolean;
  androidNewCheckboxStyleEnabled?: boolean;
  androidNewIconsEnabled?: boolean;
  androidNewRadioButtonStyleEnabled?: boolean;
  androidNgwUiEnabled?: boolean;
  androidOfflineButtonErrorState?: boolean;
  androidOfflineGrayOutItemsInLibraryAndSettings?: boolean;
  androidOfflineStreamSnackbarCap?: number;
  androidOfflineStreamSnackbarFrequencySeconds?: string;
  androidOverrideW2wMaxAgeSecsClientSide?: number;
  androidPipControllerV2Enabled?: boolean;
  androidPlayerOverlaysPerformanceEnabled?: boolean;
  androidPlaylistSequentialEdits?: boolean;
  androidPreventSearchResponseParsingIfCancelled?: boolean;
  androidPrewarmDownloadsElementsControllerInWatchWhileActivity?: boolean;
  androidPutCursorWhereTappedInSearchbox?: boolean;
  androidRefactorDownloadsPageContinuation?: boolean;
  androidRefreshActivityOnConfigurationThemeChange?: boolean;
  androidRemoveCastButtonOnSerp?: boolean;
  androidRemoveClearButtonOnSerp?: boolean;
  androidRemoveControlsOverlayWhenMinimized?: boolean;
  androidRemoveInputEntityKeyFromTriggerHash?: boolean;
  androidRemoveQualityToast?: boolean;
  androidReplaceMdxActivityWithController?: boolean;
  androidResetCompatibilitySignalOnSwitchAccount?: boolean;
  androidResetOfflineQualitySelectionDialogFor1080p?: boolean;
  androidRestoreBrowseContentsFromBackStack?: boolean;
  androidResumePrefetchCoordinatorOnStartup?: boolean;
  androidScrubberChapterExtraWidthDp?: number;
  androidSearchFilterInOverflowMenu?: boolean;
  androidSearchThumbnailMonitorCount?: number;
  androidSearchThumbnailMonitorEnabled?: boolean;
  androidSettingsLayoutEnabled?: boolean;
  androidShowBottomMenuWhenTapDownloadButton?: boolean;
  androidShowPublishDateOnDownloadsPageVideos?: boolean;
  androidShowShareAndSaveButtonsOnOfflineWatchPage?: boolean;
  androidShowTooltipFor1080pDownloadQuality?: boolean;
  androidSnappyScrollOverrideParamsFromDeveloperSettings?: boolean;
  androidStandardPlayerEduForMagicWindowMidUiEdu?: boolean;
  androidStartupClientPlayerControllerProxy?: boolean;
  androidStartupDelayPlayerOverlay?: boolean;
  androidStartupEngagementPanelControllerProxy?: boolean;
  androidStartupLazyBackgroundInitialization?: boolean;
  androidStreamzThumbnailErrorMonitoringEnabled?: boolean;
  androidStreamzThumbnailSuccessfulMonitoringEnabled?: boolean;
  androidSubscriptionButtonObservatoryUpdateAttachFix?: boolean;
  androidSupexAutonavDefaultOff?: boolean;
  androidSupportUndoForDeleteDownloads?: boolean;
  androidSuppressDownloadRecommendationsNotification?: boolean;
  androidSyncOfflineLibraryOnRefreshAppAction?: boolean;
  androidSynchronizeRelatedEndScreenVisibilityListeners?: boolean;
  androidSystemDarkThemeEnabled?: boolean;
  androidThemeSwapEnabled?: boolean;
  androidThumbnailMonitorCount?: number;
  androidThumbnailMonitorEnabled?: boolean;
  androidThumbnailMonitorMinimumWidth?: number;
  androidTopBarDebounceForceSetConfig?: number;
  androidTopBarRecreateDebounceTimeConfig?: number;
  androidTopNavBarShowLogo?: boolean;
  androidTriggerOfflineRefreshInRefreshAppAction?: boolean;
  androidTriggerOfflineRefreshWhenTappingVideo?: boolean;
  androidUpdateBluesEnabled?: boolean;
  androidUpdateSearchBarBackground?: boolean;
  androidUseAndroidxSettingsPage?: boolean;
  androidUseCsiOnGelForSearchThumbnailMonitoring?: boolean;
  androidUseCsiOnGelForThumbnailMonitoring?: boolean;
  androidUseDecomposedMetadataOnOfflineWatchPage?: boolean;
  androidUseDelayedRegistrar?: boolean;
  androidUseDownloadStateChecker?: boolean;
  androidUseEntitiesNotSnapshots?: boolean;
  androidUseNewCacheInOfflineNotificationController?: boolean;
  androidUsePendingDeleteManager?: boolean;
  androidUseRxInlinePlaybackLifecycle?: boolean;
  androidUseScrollSelectionController?: boolean;
  androidUseSharedFirstThumbnailProvider?: boolean;
  androidUseStateMachineForResponseInteractionLogging?: boolean;
  androidVideoFeedDividerHeight?: string;
  androidVoiceLanguageSelection?: boolean;
  androidVozRefactoringEnabled?: boolean;
  androidWwaOncreateLifecycleObserverTierConfig?: number;
  backgroundTasksWithTimer?: boolean;
  bedtimeReminderIntegrateWithAndroid?: boolean;
  bedtimeSystemDismissSecs?: number;
  belowPlayerScrubberViewExtensionHeight?: number;
  clipsEnableClipController?: boolean;
  coldstartInDownloadsPageWithDownloadRecommendations?: boolean;
  controllerScrollPerformanceReportingPeriodSeconds?: number;
  controllerScrollPerformanceSamplingPeriodSeconds?: number;
  controllerScrollPerformanceSamplingRate?: number;
  controllerScrollPerformanceSamplingSize?: number;
  darkThemeBatterySaverEnabled?: boolean;
  deboardingCheckIntervalMinutes?: number;
  disableClickablePlayerTimeBarAndroid?: boolean;
  disablePersistentPlaybackRestore?: boolean;
  disablePlaybackQueueRestore?: boolean;
  disableReloadSectionControllerOnBoundsChangeForLinearGrid?: boolean;
  disableStateStoreForStickyBrowsyBar?: boolean;
  downloadQualityUpsellSettingsExpirationIntervalDays?: number;
  downloadsSectionCollapsedItemCount?: number;
  downloadsSectionPersistExpandedState?: boolean;
  drFlexyAdsEnabled?: boolean;
  enableAlwaysNavigateOnBrowse?: boolean;
  enableAlwaysNavigateOnLibrary?: boolean;
  enableAlwaysNavigateOnSearch?: boolean;
  enableAndroidContentPillAsBar?: boolean;
  enableAndroidFullBleedMixes?: boolean;
  enableAndroidLinearGridFeedV2?: boolean;
  enableAndroidReducedChannelAvatar?: boolean;
  enableAndroidReducedVideoMargins?: boolean;
  enableAndroidRemoteTransactions?: boolean;
  enableAndroidTypeChanges?: string;
  enableAppWideEngagementPanel?: boolean;
  enableAutonavExplicitActions?: boolean;
  enableAutonavPreview?: boolean;
  enableBackButtonClearsHomeFilter?: boolean;
  enableBedtimeReminderForSupexClientGate?: boolean;
  enableBelowPlayerScrubberViewHeightShrinking?: boolean;
  enableButtonMotionInteraction?: boolean;
  enableCaptionBadgeAndroid?: boolean;
  enableCaptionBadgeAndroidAppCaption?: boolean;
  enableCaptionBadgeAndroidDeviceCaption?: boolean;
  enableCaptionBadgeAndroidVolume?: boolean;
  enableChapterNavigationVisualFeedback?: boolean;
  enableChaptersEpVideoSync?: boolean;
  enableContextMenuVisibilityLogging?: boolean;
  enableDetailedNetworkStatusReporting?: boolean;
  enableDigitalWellnessTimerRefreshOnAccountSwitch?: boolean;
  enableDoubleTapDoubleTouchChapterNavigation?: boolean;
  enableEngagementPanelMultipleStacks?: boolean;
  enableFullWidthMinibar?: boolean;
  enableFullscreenEngagementPanel?: boolean;
  enableFullscreenEngagementPanelLegacy?: boolean;
  enableGhostCards?: boolean;
  enableHashtagSuggest?: boolean;
  enableHomefeedScrollToTopStyle?: number;
  enableImprovedInfocardTeasers?: boolean;
  enableInfocardsEntrypointInOverflowMenu?: boolean;
  enableInlineMuted?: boolean;
  enableInlineOfflineBadge?: boolean;
  enableIosMainBackgroundAppRefreshLogging?: boolean;
  enableIosMainRefactoredBackgroundAppRefresh?: boolean;
  enableIosVideoDescriptionUitextview?: boolean;
  enableIosWatchControllerLeakFix?: boolean;
  enableLibraryLoadingStateImprovements?: boolean;
  enableLibrarySaveIconRefresh?: boolean;
  enableLivechatEngagementPanel?: boolean;
  enableMainThreadScrollTickPerformanceMonitoring?: boolean;
  enableMergedOfflineLibrary?: boolean;
  enableMobileAutoOffline?: boolean;
  enableMobileLiveIntentV2?: boolean;
  enableMoreLikeThisOnHomePrefetch?: boolean;
  enableNewPaidProductPlacement?: boolean;
  enableOverScrollToCloseEngagementPanel?: boolean;
  enablePersistentCacheInSearch?: boolean;
  enablePersistentStoriesCreatorInfoPanelDismissal?: boolean;
  enablePinchToEnterFullscreen?: boolean;
  enablePlayerCaptionsCrashFixAndroid?: boolean;
  enablePlaylistEntrypointDockToBottomForTabletLandscape?: boolean;
  enablePlaylistEntrypointScrollOff?: boolean;
  enablePlaylistEntrypointUserEdu?: boolean;
  enablePlaylistPerfectionEpSubtitle?: boolean;
  enablePlaylistPerfectionPhaseTwo?: boolean;
  enablePlaylistPerfectionPhaseTwoPointFive?: boolean;
  enablePremiumLayerableFilters?: string;
  enableProminentCaptionsOnPlayerOverlay?: boolean;
  enableProminentCaptionsOnPlayerOverlayWithToggle?: boolean;
  enableReelPlayerBackstack?: boolean;
  enableRetainedStateInSearchAndroid?: boolean;
  enableSaveToPlaylistEntities?: boolean;
  enableScrollFocusOnHome?: boolean;
  enableScrubOnHorizontalTouchMovement?: boolean;
  enableSeekAnywhereHapticsFeedback?: boolean;
  enableSeekAnywhereLongPressDetection?: boolean;
  enableSeekAnywhereOnlyAfterEduIsVisible?: boolean;
  enableSeekAnywhereOnlyWhenControlsAreVisible?: boolean;
  enableSeekEasyAnytimeSeeking?: boolean;
  enableSeekEasyDismissGesture?: boolean;
  enableSeekEasyEdu?: boolean;
  enableSeekEasyRelativeSeeking?: boolean;
  enableSeekInteractionLogging?: boolean;
  enableSeekQoeLogging?: boolean;
  enableShortsPlayerInteractiveNavigation?: boolean;
  enableSimplifiedAccessibilityPlayerTriggerAndroid?: boolean;
  enableSingleLoop?: boolean;
  enableSingleLoopEdu?: boolean;
  enableSlimConnectionBarOnWatch?: boolean;
  enableSnapZoomZoomedByDefaultSetting?: boolean;
  enableStickyHeaders?: boolean;
  enableStoriesAlbumSelector?: boolean;
  enableStoriesAutoSegment?: boolean;
  enableSuggestLatencyLogging?: boolean;
  enableSuggestSessionIds?: boolean;
  enableSuggestedActionsTeaserAnimation?: boolean;
  enableSuggestedActionsUpdatedVisualStyle?: boolean;
  enableTabletFlexyInPortrait?: boolean;
  enableThrottlePromoIfOverlap?: boolean;
  enableTimeWatchedProfile?: boolean;
  enableTimebarIncorrectFullscreenLayoutFixAndroid?: boolean;
  enableUpdateTooltipToSpec?: boolean;
  enableUpdatedAutoplayToggleIcon?: boolean;
  enableVideoListLatencyLogging?: boolean;
  enableWatchBreakForSupexClientGate?: boolean;
  enableWatchLikeEndpointCommandHandler?: boolean;
  enableWatchNextActiveStateControllerAndroid?: boolean;
  enableWatchNextScrollFocusControllerIos?: boolean;
  enableYouthereCommandsOnAndroid?: boolean;
  exploreTabEnabled?: boolean;
  fcmNotificationsEnabled?: boolean;
  fillNotificationEnabledStateOnBrowse?: boolean;
  fillNotificationEnabledStateOnSubscribe?: boolean;
  flexyAdsEnabled?: boolean;
  focusFilterBarEntryVariant?: number;
  fullscreenEngagementTapToOpenEnabled?: boolean;
  fvlVariants?: string;
  hidePlayerBottomEndContainerOnScrubbing?: boolean;
  horizontalTouchOffsetToStartScrubbing?: number;
  hourToReportNetworkStatus?: number;
  impAudioScrubbingViewCountPolicy?: string;
  impAudioScrubbingViewCountPolicyAdsFrontend?: string;
  impHorizontalShelvesVariants?: string;
  impMixesVariants?: string;
  incognitoLastActiveTimeoutSecs?: number;
  inlineMutedCaptionsHome?: boolean;
  inlineMutedHomePageReusePlaybackOnInception?: boolean;
  inlineMutedStopAudioEngineOnResign?: boolean;
  ios11HeaderFixEnabled?: boolean;
  iosAddOffsetToPlayerBarWhenNoConnectionBarIsDisplayed?: boolean;
  iosAddTitleOnNotificationPage?: boolean;
  iosAlwaysAllowBackgroundFetch?: boolean;
  iosAlwaysNavigateOnServiceEndpoint?: boolean;
  iosAnimatePageTitleOnHeroPages?: boolean;
  iosAutoRefreshOfflineWatchPageOnReconnection?: boolean;
  iosBoldSubscribeEnabled?: boolean;
  iosChannelListAvatarOptimizationsEnabled?: boolean;
  iosClassicWatchMinimizationOptimizationsEnabled?: boolean;
  iosClockEntityUpdatePeriodSeconds?: number;
  iosComposableDownloadsPageArchitecture?:
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_UNSPECIFIED'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LEGACY'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_REVERSE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LAUNCHED';
  iosComposableDownloadsPageBannerSectionProvider?:
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_UNSPECIFIED'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LEGACY'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_REVERSE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LAUNCHED';
  iosComposableDownloadsPageDisclaimerSectionProvider?:
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_UNSPECIFIED'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LEGACY'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_REVERSE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LAUNCHED';
  iosComposableDownloadsPageDownloadsSectionProvider?:
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_UNSPECIFIED'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LEGACY'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_REVERSE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LAUNCHED';
  iosComposableDownloadsPageRecommendationsSectionProvider?:
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_UNSPECIFIED'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LEGACY'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_REVERSE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LAUNCHED';
  iosComposableDownloadsPageWholePageProvider?:
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_UNSPECIFIED'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LEGACY'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_REVERSE_DARK_LAUNCH'
    | 'COMPOSABLE_DOWNLOADS_PAGE_STATE_LAUNCHED';
  iosDisableClockEntityTransformationTrigger?: boolean;
  iosDisableDomoFaultOnRequest?: boolean;
  iosDisableMinimizingPlayerOnPlayerAndWatchNextOverlappingArea?: boolean;
  iosDisableOfflinePlaylistStatusUpdateAnimationForPlaylistLoad?: boolean;
  iosDisablePlayerOverlayEntitiesDuringAnimation?: boolean;
  iosDisableSlidebackGestureWhenHomeCovered?: boolean;
  iosDisableWindowRecognizerDelay?: boolean;
  iosDomoTransformerThrottlingIntervalSeconds?: number;
  iosDownloadedItemsDataSource?: boolean;
  iosDownloadsPageContinuationRefactorEnabled?: boolean;
  iosDynamicSwipeToCameraEnabled?: boolean;
  iosEditBaseCameraPerformanceEnabled?: boolean;
  iosElementsBannerSectionProvider?: boolean;
  iosEnableAccountLinkingSdkV2?: boolean;
  iosEnableAccountMenuBackgroundColorFix?: boolean;
  iosEnableBackgroundDownloadsNotification?: boolean;
  iosEnableBedtimeReminderSettingUpdate?: boolean;
  iosEnableBlobStorageOfflineBrowseResponse?: boolean;
  iosEnableChipsOnScrollStrategy?: boolean;
  iosEnableComposableDownloadsPageDiffing?: boolean;
  iosEnableControllerBasedOverlay?: boolean;
  iosEnableDefaultsCleaner?: boolean;
  iosEnableDomoCompatibilityBatchUpdates?: boolean;
  iosEnableDomoLoggingFieldsOnEmlModel?: boolean;
  iosEnableDomoNonElementsTransform?: boolean;
  iosEnableDomoSynchronousTransformOnRequest?: boolean;
  iosEnableDomoTransformerThrottling?: boolean;
  iosEnableDownloadFlowRewire?: boolean;
  iosEnableDownloadOptionsPresentAsDialog?: boolean;
  iosEnableDownloadQualityUpsell?: boolean;
  iosEnableDownloadQualityUpsellAlternateOrder?: boolean;
  iosEnableDownloadQualityWaitForPlayerResponse?: boolean;
  iosEnableDownloadRecommendations?: boolean;
  iosEnableDownloadsPageElementsBundle?: boolean;
  iosEnableDownloadsPageLatencyLogging?: boolean;
  iosEnableDownloadsSectionDropdownFix?: boolean;
  iosEnableDrapTransformerIntegration?: boolean;
  iosEnableDynamicFontSizing?: boolean;
  iosEnableElementsDownloadQualityPicker?: boolean;
  iosEnableElementsDownloadsOnDownloadsPage?: boolean;
  iosEnableElementsDownloadsPageForIpad?: boolean;
  iosEnableElementsInEngagementPanel?: boolean;
  iosEnableElementsInlineMuted?: boolean;
  iosEnableElementsNewRecommendationDownloadButton?: boolean;
  iosEnableElementsPlaylistsOnDownloadsPage?: boolean;
  iosEnableElementsRecommendationsOnDownloadsPage?: boolean;
  iosEnableEmUpsell720pSettingsBehavior?: boolean;
  iosEnableEpOnTheRight?: boolean;
  iosEnableFloatybarResizeAnimation?: boolean;
  iosEnableFullSearchFeatureFilters?: boolean;
  iosEnableFvlBackgroundThreadOnScrollStrategy?: boolean;
  iosEnableFvlMainThreadOnScrollStrategy?: boolean;
  iosEnableGamingQuickAction?: boolean;
  iosEnableGridFeedForIpadRegularSplitView?: boolean;
  iosEnableGridImpOnScrollStrategy?: boolean;
  iosEnableHomeUxPolishing?: boolean;
  iosEnableHomeUxPolishingAdsFrontend?: boolean;
  iosEnableHsImpOnScrollStrategy?: boolean;
  iosEnableImpBackgroundableAudio?: boolean;
  iosEnableImpBackgroundableAudioAdsFrontend?: boolean;
  iosEnableImpOnScrollStrategy?: boolean;
  iosEnableInlineMutedViewPortCalculation?: boolean;
  iosEnableIpadKeyboardShortcut?: boolean;
  iosEnableIpadProFixAllFormFactor?: boolean;
  iosEnableIpadProFixLargeFormFactor?: boolean;
  iosEnableKeepingFormattedLabelTextColorsAndTypeInfoInSync?: boolean;
  iosEnableLargeSuggestionText?: boolean;
  iosEnableLogWatchAbandonmentTick?: boolean;
  iosEnableMicOnSerp?: boolean;
  iosEnableMixImpOnScrollStrategy?: boolean;
  iosEnableMoreLikeThisBarOpenStyle?: string;
  iosEnableNavbarIconBadgeRenderer?: boolean;
  iosEnableNavbarImprovement?: boolean;
  iosEnableNewFeedHeadersOnHome?: boolean;
  iosEnableNewLogoController?: boolean;
  iosEnableNotificationBadgeCountController?: boolean;
  iosEnableOfflineCompatibilityLayer?: boolean;
  iosEnableOfflineContentRepairOnStartup?: boolean;
  iosEnableOfflineTravelMessaging?: boolean;
  iosEnableOptimalIndexpathvisibilityScrollTickCallFrequency?: boolean;
  iosEnableOverlayControlsViewMigration?: boolean;
  iosEnablePaddingForCollectionViewWithElements?: boolean;
  iosEnablePostImpressionLoggingAsync?: boolean;
  iosEnablePostImpressionLoggingViaAsi?: boolean;
  iosEnableRemoveHiddenWatchViews?: boolean;
  iosEnableRevealHeaderAfterWatchClosed?: boolean;
  iosEnableS3VoiceController?: boolean;
  iosEnableSafeAreaInsetsForPivotBarEverywhere?: boolean;
  iosEnableScrollStrategyPerformanceMonitoring?: boolean;
  iosEnableScrollingActionBarOffscreenHint?: boolean;
  iosEnableSearchBackAsAStack?: boolean;
  iosEnableSearchBar?: boolean;
  iosEnableSearchLatencyTracking?: boolean;
  iosEnableSeekAnywhere?: boolean;
  iosEnableSegmentableInlinePlayerBarView?: boolean;
  iosEnableServerSideSearchFilter?: boolean;
  iosEnableSingleWatchController?: boolean;
  iosEnableSpacedtimeLayout?: boolean;
  iosEnableStartWorkersOnColdStart?: boolean;
  iosEnableTexitBanner?: boolean;
  iosEnableTexitEndpointOverride?: boolean;
  iosEnableTexitPlaylistMessage?: boolean;
  iosEnableTexitVideoMessage?: boolean;
  iosEnableTweakedTitleWatchNext?: boolean;
  iosEnableUnifiedSuggestControllers?: boolean;
  iosEnableVoz?: boolean;
  iosEnableWatchCollectionViewReplacement?: boolean;
  iosEnableWatchSingleItemQueue?: boolean;
  iosFeedRolloutVariants?: string;
  iosFeedbackAvailableDiskSpaceEnabled?: boolean;
  iosFeedbackUiDarkModeEnabled?: boolean;
  iosFillPreviousProgressForPlaylistDownloadStatusEntity?: boolean;
  iosFixCreationEntryMovingAroundWithSwipeBackGesture?: boolean;
  iosFormattedLabelShortCircuitEqualSetters?: boolean;
  iosGamePageLightboxEnabled?: boolean;
  iosGamingSiriShortcutEnabled?: boolean;
  iosGlobalThemeSwappingEnabled?: boolean;
  iosGreyOutUnclickableButtonsOnOfflineWatchPage?: boolean;
  iosHelpkitUiDarkModeEnabled?: boolean;
  iosHideFilterBarWhenUserHasNoDownloads?: boolean;
  iosIndexpathvisibilityScrollTickCountInterval?: number;
  iosInitGrowthKitDuringAppLaunch?: boolean;
  iosIreachEnabled?: boolean;
  iosLaunchexpFeedDelayMs?: number;
  iosLaunchexpLaunchDelayMs?: number;
  iosLayoutSystemLibraryEnabled?: boolean;
  iosLazilyReuseVideoDescriptionCell?: boolean;
  iosLazyLoadImageViewSubviews?: boolean;
  iosLazyLoadYtqtmbuttonInkView?: boolean;
  iosMigrateDpHabaneroToElements?: boolean;
  iosMigrateDpZeroStateToElements?: boolean;
  iosMobileCreationEntrypointInBottomNav?: boolean;
  iosMobileCreationEntrypointLargeIcon?: boolean;
  iosMoveEngagementPanelToWatchNextLayer?: boolean;
  iosMoveWatchNextOnResponseReceivedEndpointBeforeRendering?: boolean;
  iosNarrowscreenFixEnabled?: boolean;
  iosNarrowscreenlogEnabled?: boolean;
  iosNewBackArrowEnabled?: boolean;
  iosNewCheckboxStyleEnabled?: boolean;
  iosNewIconsEnabled?: boolean;
  iosNewRadioButtonStyleEnabled?: boolean;
  iosNgwPerformanceFixesEnabled?: boolean;
  iosNgwUseVolatileCache?: boolean;
  iosOfflineCompatibilityLayerEntities?: Array<string>;
  iosOfflineStreamSnackbarCap?: number;
  iosOfflineStreamSnackbarFrequencySeconds?: string;
  iosOverlayPerformanceEnabled?: boolean;
  iosPauseDownloadInMenu?: boolean;
  iosPinLockEnabled?: boolean;
  iosPlayerOverlayCleanupHoldback?: boolean;
  iosPlaylistTitleNumLines?: number;
  iosPriorityImageMaxRequests?: number;
  iosQuickThemeToggleEnabled?: boolean;
  iosRedownloadVideosDialogLoggingEnabled?: boolean;
  iosReelsResumeUseVolatileCache?: boolean;
  iosRemoveBrowseOnWatch?: boolean;
  iosRemoveBrowseViewWhenWatchOpen?: boolean;
  iosRemoveTransformerLoggingWorkaround?: boolean;
  iosRemoveWatchFlowViewController?: boolean;
  iosResetDateAddedWhenQueueingDownloadRecs?: boolean;
  iosResetOfflineQualitySelectionDialogFor1080p?: boolean;
  iosScrollStrategyAsiUiExperimentName?: string;
  iosScrollStrategyAutoNotificationPeriodSeconds?: number;
  iosScrollablePivotBarEnabled?: boolean;
  iosSearchviewRefactoryEnabled?: boolean;
  iosSettingsLayoutEnabled?: boolean;
  iosSharedKeysMaxVersion?: number;
  iosShowBottomMenuWhenTapDownloadButton?: boolean;
  iosShowShareAndSaveButtonsOnOfflineWatchPage?: boolean;
  iosShowTooltipFor1080pDownloadQuality?: boolean;
  iosSnappierTransportControlsDisableTimeSeconds?: number;
  iosSsoSafariFsiPromoEnabled?: boolean;
  iosStickySearchHeaderChipsEnabled?: boolean;
  iosStickySearchHeaderEnabled?: boolean;
  iosStopNavHeaderScrollingAwayOnSecondaryPages?: boolean;
  iosSubscribeLargeTextOnWatchEnabled?: boolean;
  iosSubscribeNoLozengeEnabled?: boolean;
  iosSubscribeThemedRedEnabled?: boolean;
  iosSuggestHideKeyboardOnScroll?: boolean;
  iosSupportUndoForDeleteDownloads?: boolean;
  iosSwipeDisabledPlaylistLoggingFixEnabled?: boolean;
  iosThemeSwappingEnabled?: boolean;
  iosToastWifiOnlySettings?: boolean;
  iosTodayWidgetEnabled?: boolean;
  iosTransformerLatencyLoggingSampleRate?: number;
  iosTransformerLatencyLoggingTimeoutSec?: number;
  iosTriggerOfflineRefreshInRefreshAppAction?: boolean;
  iosTriggerOfflineRefreshWhenTappingVideo?: boolean;
  iosUpdateBluesEnabled?: boolean;
  iosUploadIconStudyEnabled?: boolean;
  iosUseAppThemeSetting?: boolean;
  iosUseDecomposedMetadataOnOfflineWatchPage?: boolean;
  iosUseEntitiesDownloadRecommendationsService?: boolean;
  iosUseInkControllerForButtons?: boolean;
  iosUseNewFormattedLabel?: boolean;
  iosUseNewFormattedLabelPerformanceFixes?: boolean;
  iosUseNewLabel?: boolean;
  iosVideoCardPerformanceEnabled?: boolean;
  iosVideoViewLayoutCacheEnabled?: boolean;
  iosWatchExpandTransitionWithoutSnapshot?: boolean;
  iosWatchNextVisibilityUpdateGateEnabled?: boolean;
  iosWatchRotationOptimizationsEnabled?: boolean;
  iosYtqtmbuttonLazyLoadShadowsEnabled?: boolean;
  iosYtqtmbuttonMigrationEnabled?: boolean;
  isListenFirstLargeControlsEngagementPanelEnabled?: boolean;
  keepPlaylistEntrypointBelowPlayer?: boolean;
  keepPrePlaylistPerfectionEntrypoint?: boolean;
  lensPersistentEntryPointEnabled?: boolean;
  lithiumBikeshedColor?: string;
  liveChatEnableNewFullscreen?: boolean;
  maxConcurrentSuggestRequests?: number;
  maxOnDeviceSuggestionsToShow?: number;
  micIconType?: string;
  minOnDeviceSuggestionsToShow?: number;
  mobileAutonavAllowRelatedSwipe?: boolean;
  mobileShowDownloadsPageSpaceUsage?: boolean;
  mobileWebviewFallbackModeDefaultUrl?: string;
  mobileWebviewFallbackModeEnabled?: boolean;
  mobileWebviewFallbackModeWhitelistedPageUrlGlobs?: Array<string>;
  mobileWebviewFallbackModeWhitelistedResourceUrlGlobs?: Array<string>;
  nestedEngagementPanelBackButtonStyle?: string;
  networkStatusReportingWindowSecs?: number;
  newNavbarEnabled?: boolean;
  ngwClassicTabletMiniplayerEnabled?: boolean;
  ngwFlexyEnabled?: boolean;
  ngwFlexyEngagementPanelMaxAspectRatio?: number;
  ngwFlexyEngagementPanelTopOffset?: number;
  ngwFlexyMaxAspectRatio?: number;
  ngwFlexyMaxCropRatio?: number;
  ngwFlexyMaxScreenRatio?: number;
  ngwFlexyMinAspectRatio?: number;
  ngwFlexyMinMetadataHeight?: number;
  ngwMinibarSkipAdEnabled?: boolean;
  offlineResumePlaybackSyncDeadlineSeconds?: string;
  offlineResumePlaybackSyncIntervalSeconds?: string;
  offlineV2DisconnectedMessageDelayMs?: number;
  onDeviceSuggestTimeoutMs?: number;
  pauseAutoplayIfEpActive?: boolean;
  playbackFullscreenUiStyle?: string;
  playerAudioControlUiStyle?: string;
  playerScrubbingUiStyle?: string;
  playlistEngagementPanelFlexyClickToExpandEnabled?: boolean;
  playlistEngagementPanelFlexyUpdateEnabled?: boolean;
  playlistEngagementPanelIdentifier?: string;
  postsV2?: boolean;
  preserveSearchResultsInteractionLoggingScreen?: boolean;
  readyToResumeTriggeringStyle?: string;
  removeDttsDelay?: boolean;
  removeSignoutFromAccountSwitcher?: boolean;
  requiredSignInEnabled?: boolean;
  scrollPerformanceReportingPeriodSeconds?: number;
  scrollPerformanceSamplingPeriodSeconds?: number;
  scrollPerformanceSamplingRate?: number;
  scrollPerformanceSamplingSize?: number;
  searchHintExp?: string;
  searchUiCompactVideoElementsWithOfflineBadgeEnabled?: boolean;
  seekAnywhereEduTouchAndHoldTimeMillis?: number;
  seekEasyHorizontalTouchOffsetToStartScrubbing?: number;
  seekEasyTouchAndHoldDelayMillis?: number;
  seekEduTouchAndHoldTimeMillis?: number;
  shouldHideTopBarOnSearch?: boolean;
  showAndroidONotificationChannels?: boolean;
  showScrubberTimeBelowThumbnailAndroid?: boolean;
  showScrubberTimeBelowThumbnailIos?: boolean;
  swipeToCameraEnabled?: boolean;
  useAlternateHomeFilterChipStyle?: boolean;
  useNewNextButtonFont?: boolean;
  vozHalfPlateV0DisableForcedSuggestions?: boolean;
  vozHalfPlateV0DisableSuggestionsFromSearchInput?: boolean;
  vozHalfPlateV0DisableSuggestionsFromSerp?: boolean;
  watchNextAboveFoldReducedMargins?: boolean;
  watchNextDelayPercentageOfVideoDuration?: number;
  watchNextExtendedFullscreenThumbnailsEnabled?: boolean;
};

type IYoutubeApiInnertubeColdConfigGroup = {
  configData?: string;
  experimentFlags?: IYoutubeApiInnertubeExperimentFlagConfig;
  hashData?: string;
  mainAppColdConfig?: IYoutubeApiInnertubeMainAppColdConfig;
};

type IYoutubeApiInnertubeMainAppHotConfig = {
  ablateGlParam?: boolean;
  adsAudioScrubbingHatsStyle?: string;
  adultContentConfirmationPreferenceResetTimeout?: number;
  androidAddToPlaylistBottomSheet?: boolean;
  androidAlignPlayerControlsOverlay?: boolean;
  androidDisableToastsOnFullscreenWatch?: boolean;
  androidDownloadRecommendationsNotificationStuckFix?: boolean;
  androidDownloadRecsRequestReduction?: boolean;
  androidDrapEnableCatchInterruptedExceptions?: boolean;
  androidEarlyPipModeEnabled?: boolean;
  androidElementsControllerOptionals?: boolean;
  androidElementsMissingPropertyHandlerAllowlist?: Array<number>;
  androidEnableAnimationOnHomeLoadingGhostcard?: boolean;
  androidEnableAnimationOnWatchLoadingGhostcard?: boolean;
  androidEnableAsynchronousSuggest?: boolean;
  androidEnableBrowseFragmentCacheLogging?: boolean;
  androidEnableDownloadNotificationInteractionLogging?: boolean;
  androidEnableDownloadProgressNotificationOnlyAlertOnce?: boolean;
  androidEnableKeyboardShortcuts?: boolean;
  androidEnableLanguageFilterChipsInferredTriggering?: boolean;
  androidEnableLanguageFilterChipsSerp?: string;
  androidEnableLogSuggestionClickVe?: boolean;
  androidEnableNoSoundMemo?: boolean;
  androidEnableParentToolsClientStreamz?: boolean;
  androidEnablePipForAllUsers?: boolean;
  androidEnablePlaylistEditToast?: boolean;
  androidEnablePresenterAnimations?: boolean;
  androidEnableSeamlessPlaylistUpdate?: boolean;
  androidEnableSearchSuggestLogging?: boolean;
  androidEnableSearchSuggestLoggingProdTest?: boolean;
  androidEnableTextSelectionInDescription?: boolean;
  androidEnableVisualSuggest?: boolean;
  androidEnableVozLogFirstTranscriptionReceived?: boolean;
  androidEnableVozOfflineSearch?: boolean;
  androidEnableVozOggSounds?: boolean;
  androidEnableVozWhenOffline?: boolean;
  androidEnableWatchLoadingGhostcard?: boolean;
  androidEnableWatchNextOnUiReadyHandler?: boolean;
  androidFeedRolloutVariantsHotConfig?: string;
  androidFoldedWatchEnabled?: boolean;
  androidFullscreenMetadataClientSizingDisabled?: boolean;
  androidInAppReviews?: boolean;
  androidIncognitoKillSwitch?: boolean;
  androidInlineDeprecateWatchLayoutState?: boolean;
  androidLanguageFilterChipsBroadnessThreshold?: number;
  androidLanguageFilterChipsRequireFullAudioLanguageMatch?: boolean;
  androidLogDownloadingSnackbarVe?: boolean;
  androidLogHomePageRootVeOnWhatToWatch?: boolean;
  androidMetadataHighlightsWnSyncScrollEnabled?: boolean;
  androidMetamoveConsistentAboveUnderTitleTextSize?: boolean;
  androidOfflineThumbnailRefreshingNotificationStuckFix?: boolean;
  androidParentEngagementPanelToNgwLayout?: boolean;
  androidPipAutonavCountdownSec?: number;
  androidPipPaidProductBadgeEnabled?: boolean;
  androidPipSettingsAnrFix?: boolean;
  androidRebaselineWatchNavigation?: boolean;
  androidReduceSuggestionPadding?: boolean;
  androidReloadWatchNextOnThemeChange?: boolean;
  androidRemoveBottomBarDivider?: boolean;
  androidRemoveBrowseOfflineDecorator?: boolean;
  androidRemoveShadowBelowTopBar?: boolean;
  androidRemoveStatusBarBackground?: boolean;
  androidRevealTopHeaderOnPlayerDismiss?: boolean;
  androidSearchDisableClientSideSectionDividers?: boolean;
  androidSearchboxImeOptions?: string;
  androidSlimInfoSubtitleMaxLinesCompressed?: number;
  androidSuggestRequestTimedDelay?: number;
  androidSuggestionExpandedBoldingFontStyle?: string;
  androidSuggestionFontStyle?: string;
  androidSuppressViewPagerTouchExceptions?: boolean;
  androidTitleAnimationHeroPages?: boolean;
  androidUseChromeCustomTabsForWebviewEndpoint?: boolean;
  androidVideoSentimentEntityEnabled?: boolean;
  androidViewModelEntityIdFixForEmptyEntityKeyId?: boolean;
  androidVisualSuggestInlineThumbVariant?: number;
  androidVozAssistantApiEndpoint?: string;
  androidVozAudioRecordBlockSizeInBytes?: number;
  androidVozDisablePartialTranscript?: boolean;
  androidVozRecognitionProbabilityThreshold?: number;
  androidVozTranscriptFontSize?: number;
  androidVozTranscriptMaxLines?: number;
  androidVozUseSearchRecognizer?: boolean;
  androidWatchNextParsingDelayEnabled?: boolean;
  androidWatchNextProcessingDelay?: number;
  androidWatchNextProcessingDelayWatchWhileMaximized?: number;
  animatedPreviewsSettings?: boolean;
  animatedPreviewsUseImpSettings?: boolean;
  audioScrubbingHatsStyle?: string;
  bedtimeReminderClientSignalEnabled?: boolean;
  bedtimeReminderEnabled?: boolean;
  bedtimeReminderLoggingEnabled?: boolean;
  bedtimeReminderSnoozeSecs?: number;
  bedtimeReminderTimeIntervalSecs?: number;
  browseIdsWithHasOfflinedContentInBrowseRequest?: Array<string>;
  browseIdsWithOfflinedIdsInBrowseRequest?: Array<string>;
  chipBarAnimationType?: string;
  clearCacheOnBackButtonFinishEnabled?: boolean;
  commentsModuleOptimizations?: boolean;
  darkThemeBrowseIdWhitelist?: Array<string>;
  descriptionBodyUseFontColorYtprimary?: boolean;
  descriptionInEpAnimationTimeMs?: number;
  desktopSearchboxHostOverride?: string;
  disableAnimationAdaptive?: boolean;
  disableFullscreenRelatedsForNonLandscapeMobile?: boolean;
  disableSnapZoomAnimation?: boolean;
  disableUpforfullVerticalVideosFixAndroid?: boolean;
  dontReloadWhileRetrying?: boolean;
  downAndOutGestureEnabledOnClient?: boolean;
  enableActiveStateDescriptorControllerPerformanceTracking?: boolean;
  enableAdaptiveSignalsLogging?: boolean;
  enableAndroidAssistantMicPermissionPlate?: boolean;
  enableAndroidEntitiesLoggingInProd?: boolean;
  enableAndroidVoz?: boolean;
  enableAndroidVozAssistantClickTrackingParams?: boolean;
  enableAndroidVozAssistantInjectDummyScreen?: boolean;
  enableAndroidVozLoadingDialog?: boolean;
  enableAndroidVozLogging?: boolean;
  enableAndroidYoutubeAssistantStreaming?: boolean;
  enableAnimationAdaptive?: boolean;
  enableBackgroundVisibilityLogger?: boolean;
  enableBiggerLineSeparatorForFullBleed?: boolean;
  enableBrowseCsiOnGel?: boolean;
  enableChipBarOnSerp?: boolean;
  enableChipBarScrollUpdates?: boolean;
  enableContextMenuVisibilityLogging?: boolean;
  enableDecompressionOnBackgroundThread?: boolean;
  enableElementsActionSheetPeeking?: boolean;
  enableFeedItemsTouchFeedback?: boolean;
  enableFeedItemsTouchFeedbackOnHome?: boolean;
  enableForceSeekWhenContinuePlayback?: boolean;
  enableFullBleedThumbnails?: boolean;
  enableFullscreenEngagementPanel?: boolean;
  enableGelLogCommands?: boolean;
  enableHistorySettingsPageDeprecation?: boolean;
  enableInlinePlaybackCsiEvents?: boolean;
  enableIosPauseSearchHistoryChecks?: boolean;
  enableLayoutSystemFoldablesSupport?: boolean;
  enableListenFirstLargeControls?: boolean;
  enableLoadThumbnailBitmapFromImageCache?: boolean;
  enableLoadThumbnailBitmapFromImageCacheWithFallback?: boolean;
  enableLoggingPlaybackInterruptions?: boolean;
  enableMobileHdrSearchFilter?: boolean;
  enableMobileLocationSearchFilter?: boolean;
  enableMobileMixBottomBarAndIconLockupAdjustments?: boolean;
  enableMobileMixSmallBottomBarIcon?: boolean;
  enableMoveTopBadgeToUnderTitleBadge?: boolean;
  enableMysubsClientLatencyLogging?: boolean;
  enableOnDeviceHeadSuggest?: boolean;
  enableOpaqueBlackWatchcardHeroOverlayButton?: boolean;
  enableOverlayController?: boolean;
  enableProtoSuggestResponses?: boolean;
  enableRefinementSuggest?: boolean;
  enableSameVideoReloadsForClips?: boolean;
  enableSaveToPlaylistEntities?: boolean;
  enableScrubberLogging?: boolean;
  enableSearchBarOnSettingsPageDogfood?: boolean;
  enableSearchRequestInstalledSharingServiceIds?: boolean;
  enableSendingSignalStrengthInBrowse?: boolean;
  enableSingleLoopSnackbar?: boolean;
  enableSingleSearchResultPerItemSection?: boolean;
  enableStoryboardThumbnailLogging?: boolean;
  enableSuggestDedup?: boolean;
  enableSurfaceAdapterStreaming?: boolean;
  enableSwipeToDismissSnackbars?: boolean;
  enableTabletSuggestClient?: boolean;
  enableThemeableVulcan?: boolean;
  enableUnavailableVideosOffline?: boolean;
  enableUnavailableVideosWatchPage?: boolean;
  enableUpForFullGesture?: boolean;
  enableUpForFullGestureFeedback?: boolean;
  enableUrlEndpointGrwSessionTerminationPingCompat?: boolean;
  enableViewCountEntityUpdate?: boolean;
  enableVisibilityLogger?: boolean;
  enableVoiceSearchOnLongPress?: boolean;
  enableVozErrorMessages?: boolean;
  enableVozNonCachePrefetch?: boolean;
  enableWatchPreloadMetadataFromPlayerResponse?: boolean;
  enableWatchPreloadMetadataFromWatchEndpoint?: boolean;
  enableWidthAdjustableYoutubeSubtitlesOverlay?: boolean;
  enableYoodle?: boolean;
  engagementPanelResizableByDefault?: boolean;
  engagementPanelSupportLandscapeByDefault?: boolean;
  exposeConfigRefreshSetting?: boolean;
  forceUseCompactGridVideoLayoutOnIpad?: boolean;
  fvlVariantsHotConfig?: string;
  genericContainerEventTrackerEnableBackgroundProcessing?: boolean;
  genericContainerEventTrackerEnableContainerFlushPerRequest?: boolean;
  genericContainerEventTrackerEnableFlushAllContainers?: boolean;
  genericContainerEventTrackerEnableIncludeAllAppEventsPerRequest?: boolean;
  genericContainerEventTrackerFlushTotalSizePercentage?: number;
  genericContainerEventTrackerMaxLocalAggregationItemAgeMs?: number;
  genericContainerEventTrackerMaxLocalAggregationSize?: number;
  genericContainerEventTrackerMaxSignalingThresholdAggregationItemAgeMs?: number;
  genericContainerEventTrackerMaxSignalingThresholdAggregationSize?: number;
  genericContainerEventTrackerMaxTotalAggregationSize?: number;
  genericContainerEventTrackerMinLocalAggregationProminenceDwellTimeMs?: number;
  genericContainerEventTrackerMinSignalingThresholdAggregationItemProminenceDwellTimeMs?: number;
  genericContainerEventTrackerPagingContinuationIntervalCount?: number;
  genericContainerEventTrackerSummaryGracePeriodMs?: number;
  homeChipsBarSkipPeekEnabled?: boolean;
  homeChipsHeaderDwellEnabled?: boolean;
  homeChipsHeaderScrollLocked?: boolean;
  htcBadgingEnabled?: boolean;
  iconForTrendingSuggestion?: string;
  impHorizontalShelvesVariantsHotConfig?: string;
  impMixesVariantsHotConfig?: string;
  indexpathVisibilityExpName?: string;
  inlineMutedDwellTimeMs?: number;
  inlineMutedHomePageReusePlaybackOnInception?: boolean;
  inlineMutedUnifiedSetting?: boolean;
  inlineMutedWatchRestartThresholdMs?: number;
  inlinePlaybackDefault?: 'UNKNOWN' | 'ON' | 'WIFI_ONLY' | 'OFF';
  inlinePlaybackPauseThresholdSeconds?: number;
  inlinePlaybackRedirectThresholdSeconds?: number;
  iosActiveStateCellAutoRegistrationNotificationDelayMs?: number;
  iosActiveStateDescriptorControllerEnumerationStyle?: number;
  iosActiveStateDescriptorPerfWorkAroundStyle?: number;
  iosAlwaysEnableSegmentedProgressView?: boolean;
  iosCheckCacheOnW2wRequest?: boolean;
  iosChipBarAlternateHeaderScroll?: number;
  iosChipBarGhostChipsOnHome?: boolean;
  iosClientSideResolveChannelUrls?: boolean;
  iosClientSideResolveWatchUrls?: boolean;
  iosDisableCompressedAutonavCanceledState?: boolean;
  iosDisableKeepControlsVisibleWhileTouchTimebar?: boolean;
  iosDisableLegacyWatchLogger?: boolean;
  iosDisableMdxTooltipPromotionTrigger?: boolean;
  iosDisableScrubberLongPressToSeek?: boolean;
  iosDisableVideoPlayerVisibilityGate?: boolean;
  iosDownloadSuspendedNotificationIntervalInSecs?: number;
  iosDownloadsPageGetSurveySampleRate?: number;
  iosEarlySetWatchTransition?: boolean;
  iosEnableAppFlowControl?: boolean;
  iosEnableBadgeBelowTitleInMetadata?: boolean;
  iosEnableBrokenNavigationControllerWorkaround?: boolean;
  iosEnableCachedRelatedChipResponses?: boolean;
  iosEnableChipsOnScrollStrategyHotConfig?: boolean;
  iosEnableDataPlanApi?: boolean;
  iosEnableDownloadSuspendedNotification?: boolean;
  iosEnableDttsA11yButtons?: boolean;
  iosEnableElementRendererInHclr?: boolean;
  iosEnableEngagementPanelElementHeaderRendererHeightFix?: boolean;
  iosEnableFixAvatarFlickers?: boolean;
  iosEnableFixSwipeBackNavigationSettings?: boolean;
  iosEnableFloatyElementsAwareSnapshot?: boolean;
  iosEnableFtWatch?: boolean;
  iosEnableFullscreenRelatedsCustomSafeAreaInsets?: boolean;
  iosEnableFullscreenRelatedsSwipeToExpandFix?: boolean;
  iosEnableFvlBackgroundThreadOnScrollStrategy?: boolean;
  iosEnableFvlMainThreadOnScrollStrategy?: boolean;
  iosEnableFvlOnRendererBackedCells?: boolean;
  iosEnableGridImpOnScrollStrategyHotConfig?: boolean;
  iosEnableGrowthkit?: boolean;
  iosEnableHsImpOnScrollStrategyHotConfig?: boolean;
  iosEnableImpOnScrollStrategyHotConfig?: boolean;
  iosEnableImpVeTracking?: boolean;
  iosEnableImprovedExpectedWatchViewSize?: boolean;
  iosEnableInlineMuted?: boolean;
  iosEnableInlineMutedOnExploreSettings?: boolean;
  iosEnableInlineMutedOnSubsSettings?: boolean;
  iosEnableInnerTubeControllerFactoryLazyContentCreation?: boolean;
  iosEnableIpvOcclusionAwareness?: boolean;
  iosEnableLatencyTickLogger?: boolean;
  iosEnableMiniplayerTrackKeyboard?: boolean;
  iosEnableMixImpOnScrollStrategyHotConfig?: boolean;
  iosEnableModalReorientation?: boolean;
  iosEnableMoreLikeThisAggressiveSwipeEducation?: boolean;
  iosEnableOfflineAddForegroundNag?: boolean;
  iosEnableParentToolsClientStreamz?: boolean;
  iosEnablePlaybackMitigationFor102?: boolean;
  iosEnablePopupPlaylistCreation?: boolean;
  iosEnableRefreshLogging?: boolean;
  iosEnableReloadDataEnabledForSetWatchNextResultsView?: boolean;
  iosEnableSafeMode?: boolean;
  iosEnableScrollStrategyPerformanceMonitoringHotConfig?: boolean;
  iosEnableScrubberPanMinimumStartDistance?: boolean;
  iosEnableSearchButtonOnPlayerOverlay?: boolean;
  iosEnableSiriIntents?: boolean;
  iosEnableSiriShortcutDonations?: boolean;
  iosEnableSlimStatusBarOnSearch?: boolean;
  iosEnableSwipeableHorizontalShelf?: boolean;
  iosEnableWatchFullscreenPresentFix?: boolean;
  iosEnableWatchPageVisibilityPiping?: boolean;
  iosFeedRolloutVariantsHotConfig?: string;
  iosFreshFullRefresh?: boolean;
  iosFreshHomeIntervalSecs?: number;
  iosFreshNotificationsInboxIntervalSecs?: number;
  iosFreshSubscriptionsIntervalSecs?: number;
  iosFullBleed?: boolean;
  iosImpEnableCommonRunLoopModesTimedAction?: boolean;
  iosInlineMutedCaptionsHome?: boolean;
  iosLazyLoadCommentViews?: boolean;
  iosLoggingEnableCommonRunLoopModesTimedAction?: boolean;
  iosMaxCrashesBeforeUserdefaultsWipe?: number;
  iosMinimumTooltipDurationMsecs?: number;
  iosMiniplayerResumePlaybackWhenExpandingOnPlay?: boolean;
  iosNotificationBackToHomeSecs?: number;
  iosOfflineAddForegroundNagDelaySeconds?: number;
  iosPinLockEnabled?: boolean;
  iosPlayPauseButtonDimensionDp?: number;
  iosPreserveSuggestedActionsRendererForSamePlayback?: boolean;
  iosPreventFullscreenExitLoop?: boolean;
  iosRemoveWatchNextViewOnFullscreen?: boolean;
  iosRepromptNotificationPermissions?: boolean;
  iosSafeModeDeleteUserdefaults?: boolean;
  iosSafeModeMessageInToast?: boolean;
  iosScrollSelectionMonitoringMinimumDragVelocity?: number;
  iosScrollStrategyAsiUiExperimentNameHotConfig?: string;
  iosScrubberPanMinimumStartDistance?: number;
  iosServerSideSuggestBolding?: boolean;
  iosSettingsConfigRefreshTapCount?: boolean;
  iosSiriShortcutsEnabled?: boolean;
  iosSlimInfoSubtitleMaxLinesCompressed?: number;
  iosSwipeyLazyLoadDescriptionLabel?: boolean;
  iosTapToPause?: boolean;
  iosThinSeparatorFlowLayout?: boolean;
  iosTodayWidgetRefreshIntervalSecs?: number;
  iosVideoLockupRefactorAvatar?: boolean;
  iosVideoLockupRefactorFonts?: boolean;
  iosVideoLockupRefactorFontsMedium?: boolean;
  iosVideoLockupRefactorMargins?: boolean;
  iosWatchDismissalAppRatingPromptMaxFrequencyDays?: number;
  iosWatchDismissalAppRatingPromptMinWatchDurationSeconds?: number;
  iosWatchExpandTransition?: boolean;
  linearGridFeedAndroidTabletLayoutStyle?: string;
  linearGridFeedOnAndroidTablet?: boolean;
  linearGridFeedPolishVideoDimensions?: boolean;
  linearHomeFeedOnAndroidTablet?: boolean;
  maxNumSuggestionsForRefinementSuggest?: number;
  maxNumberOfOccludingViewsToProcessOnScroll?: number;
  maxOfflinedPlaylistIdsInBrowseRequest?: number;
  maxOfflinedVideoIdsInBrowseRequest?: number;
  maxOfflinedVideoIdsInOfflinedPlaylist?: number;
  maxOnDeviceSuggestionsToShow?: number;
  minOnDeviceSuggestionsToShow?: number;
  mobileEnablePlaylistSyncCheckOnEnteringPlaylistPage?: boolean;
  mobileMixEnableBottomBarLockupAdjustment?: boolean;
  mobileWebviewFallbackModeDefaultUrl?: string;
  mobileWebviewFallbackModeEnabled?: boolean;
  mobileWebviewFallbackModeWhitelistedPageUrlGlobs?: Array<string>;
  mobileWebviewFallbackModeWhitelistedResourceUrlGlobs?: Array<string>;
  moreLikeThisTriggerAfterPlaybackSec?: number;
  moreLikeThisTriggerRequiresAd?: boolean;
  ngwEnableFloatybarUserEdu?: boolean;
  ngwIosDisableWatchnextLayoutOnFullscreen?: boolean;
  ngwMaxSizeWatchPageCache?: number;
  ngwPreventDuplicatedTransitionContextCompletion?: boolean;
  noOnDeviceOnZeroPrefix?: boolean;
  onDeviceHeadSuggestIndexUrl?: string;
  oneHitWonderEnabled?: boolean;
  pixieDustExpirySeconds?: number;
  playabilityUserFeedbackGoBackAsCancelButton?: boolean;
  playlistCreationPrivacyStatus?: 'PRIVATE' | 'PUBLIC' | 'UNLISTED';
  pulsarSuggestionHelpLink?: string;
  queryBuilderNitrate?: boolean;
  removeMixPlaylistCountSubtitleWn?: boolean;
  retroactiveFrictionlessEnabled?: boolean;
  s3ExperimentStr?: string;
  samsungBadgingEnabled?: boolean;
  searchBarScrollsWithChipBar?: string;
  searchUiEnableInlinePlaybackOnSearch?: boolean;
  sendVideoIdWithSearchRequest?: boolean;
  shouldApplyAudioManagerFixForVoz?: boolean;
  shouldFillVisitorIdForAllUsers?: boolean;
  signedOutNotificationsIosPrompt?: boolean;
  slimInfoTitleCompressedMaxLines?: number;
  snapZoomMaxVideoCropRatio?: number;
  sonyBadgingEnabled?: boolean;
  subscriptionsNotificationCategory?: string;
  suggestionMaxLineHeight?: number;
  unifySuggestClient?: boolean;
  upForFullGestureFeedbackMaxVideoScaleFactor?: number;
  upForFullGestureFeedbackScaleMultiplier?: number;
  upForFullGestureFeedbackTranslationMultiplier?: number;
  useDynamicA11yLabelForPlaylistHeader?: boolean;
  useYoutubeRegionIdForSuggest?: boolean;
  vozInitialSilenceTimeoutMs?: number;
  watchNextRelatedVwcGhostCard?: boolean;
  youtubeAssistantAudioEncoding?:
    | 'YOUTUBE_ASSISTANT_AUDIO_ENCODING_UNKNOWN'
    | 'YOUTUBE_ASSISTANT_AUDIO_ENCODING_LINEAR16'
    | 'YOUTUBE_ASSISTANT_AUDIO_ENCODING_AMR_WB'
    | 'YOUTUBE_ASSISTANT_AUDIO_ENCODING_OGG_OPUS'
    | 'YOUTUBE_ASSISTANT_AUDIO_ENCODING_FLAC';
  youtubeAssistantEnablePermissionVeLogging?: boolean;
  youtubeAssistantTipType?:
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_UNKNOWN'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_CURATED'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_P13N_PROFILE_TOPIC_ENTITY'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_P13N_PROFILE_MUSIC_ENTITY'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_P13N_PROFILE_GENERAL_ENTITY'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_QUERY_SUGGESTION'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_ZERO_PREFIX_QUERY_SUGGESTION'
    | 'YOUTUBE_ASSISTANT_VOICE_TIP_TYPE_ZERO_PREFIX_AND_MUSIC_ENTITY';
  ytoThemeBrowseIdWhitelist?: Array<string>;
};

type IYoutubeApiInnertubeHotConfigGroup = {
  experimentFlags?: IYoutubeApiInnertubeExperimentFlagConfig;
  hashData?: string;
  mainAppHotConfig?: IYoutubeApiInnertubeMainAppHotConfig;
};

type IYoutubeApiInnertubeGlobalConfigGroup = {
  accountDynamicHashData?: string;
  accountStaticHashData?: string;
  bytesSerializedAccountDynamicConfigGroup?: string;
  bytesSerializedAccountStaticConfigGroup?: string;
  bytesSerializedColdConfigGroup?: string;
  bytesSerializedHotConfigGroup?: string;
  coldHashData?: string;
  hotHashData?: string;
  rawAccountDynamicConfigGroup?: IYoutubeApiInnertubeAccountDynamicConfigGroup;
  rawAccountStaticConfigGroup?: IYoutubeApiInnertubeAccountStaticConfigGroup;
  rawColdConfigGroup?: IYoutubeApiInnertubeColdConfigGroup;
  rawHotConfigGroup?: IYoutubeApiInnertubeHotConfigGroup;
  serializedColdConfigGroup?: string;
  serializedHotConfigGroup?: string;
};

type IYoutubeApiInnertubeInnerTubeToken = {
  clearTokens?: boolean;
  creationTimeUsec?: string;
  maxAgeSeconds?: number;
  type?: number;
  value?: string;
};

type IYoutubeApiInnertubeInnerTubeTokenJar = {
  appTokens?: Array<IYoutubeApiInnertubeInnerTubeToken>;
  userTokens?: Array<IYoutubeApiInnertubeInnerTubeToken>;
};

type IYoutubeApiInnertubeMainAppWebResponseContext = {
  datasyncId?: string;
  loggedOut?: boolean;
  trackingParam?: string;
};

type IYoutubeApiInnertubeServiceTrackingParams = {
  params?: Array<IYoutubeApiInnertubeKeyValuePair>;
  service?:
    | 'SERVICE_UNKNOWN'
    | 'CSI'
    | 'GFEEDBACK'
    | 'BREAKPAD'
    | 'GUIDED_HELP'
    | 'GOOGLE_HELP'
    | 'ECATCHER'
    | 'SUGGEST'
    | 'LISTNR';
};

type IYoutubeApiInnertubeUnpluggedResponseContext = {
  contentDisplayTimeSec?: string;
  contentDisplayTimeoutMs?: string;
  isDegradedModeOn?: boolean;
  isMultiSizeTypeDependent?: boolean;
  sherlogFeedbackServiceOptInToken?: string;
  sherlogFeedbackServiceSharedSherlogLink?: string;
  timezone?: string;
  timezoneOffsetMinutes?: number;
};

type IYoutubeApiInnertubeCpnInfo = {
  cpn?: string;
  cpnSource?:
    | 'CPN_SOURCE_TYPE_UNKNOWN'
    | 'CPN_SOURCE_TYPE_CLIENT'
    | 'CPN_SOURCE_TYPE_WATCH_SERVER';
};

type IYoutubeApiInnertubeStreamableVideoStreamByteRange = {
  end?: string;
  start?: string;
};
type IYoutubeApiInnertubeColorInfo = {
  dynamicMetadata?:
    | 'DYNAMIC_METADATA_UNSPECIFIED'
    | 'DYNAMIC_METADATA_SMPTE2094_40';
  matrixCoefficients?:
    | 'COLOR_MATRIX_COEFFICIENTS_UNKNOWN'
    | 'COLOR_MATRIX_COEFFICIENTS_BT709'
    | 'COLOR_MATRIX_COEFFICIENTS_UNSPECIFIED'
    | 'COLOR_MATRIX_COEFFICIENTS_BT2020_NCL';
  primaries?:
    | 'COLOR_PRIMARIES_UNKNOWN'
    | 'COLOR_PRIMARIES_BT709'
    | 'COLOR_PRIMARIES_UNSPECIFIED'
    | 'COLOR_PRIMARIES_BT2020';
  transferCharacteristics?:
    | 'COLOR_TRANSFER_CHARACTERISTICS_UNKNOWN'
    | 'COLOR_TRANSFER_CHARACTERISTICS_BT709'
    | 'COLOR_TRANSFER_CHARACTERISTICS_UNSPECIFIED'
    | 'COLOR_TRANSFER_CHARACTERISTICS_BT2020_10'
    | 'COLOR_TRANSFER_CHARACTERISTICS_SMPTEST2084'
    | 'COLOR_TRANSFER_CHARACTERISTICS_ARIB_STD_B67';
};

type IYoutubeApiInnertubeStreamableVideoStream = {
  bitrate?: number;
  clen?: string;
  colorInfo?: IYoutubeApiInnertubeColorInfo;
  fps?: number;
  height?: number;
  indexRange?: IYoutubeApiInnertubeStreamableVideoStreamByteRange;
  initRange?: IYoutubeApiInnertubeStreamableVideoStreamByteRange;
  isOtf?: boolean;
  itag?: number;
  lmt?: string;
  streamXtags?: string;
  videoSource?: string;
  width?: number;
};

type IYoutubeApiInnertubeOnesiePlayerServiceInfo = {
  drmProduct?:
    | 'DRM_PRODUCT_UNKNOWN'
    | 'DRM_PRODUCT_UGC'
    | 'DRM_PRODUCT_TVOD'
    | 'DRM_PRODUCT_AVOD'
    | 'DRM_PRODUCT_YOUTUBE_TV'
    | 'DRM_PRODUCT_PREMIUM_LIVE'
    | 'DRM_PRODUCT_ALC';
  isDrmProduct?: boolean;
  isMusicClassifierContent?: boolean;
  isPremiumTvfilm?: boolean;
  isPrivateVideo?: boolean;
  isPublicVideo?: boolean;
};

type IYoutubeApiInnertubeStreamableVideo = {
  accessibleFromBandaid?: boolean;
  availableStreams?: Array<IYoutubeApiInnertubeStreamableVideoStream>;
  broadcastId?: string;
  contentTier?: string;
  cpnInfo?: IYoutubeApiInnertubeCpnInfo;
  host?: string;
  isDaiEnabled?: boolean;
  isLive?: boolean;
  isMosaic?: boolean;
  isPostLiveDvr?: boolean;
  isWindowedLive?: boolean;
  latencyClass?:
    | 'MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_UNKNOWN'
    | 'MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_NORMAL'
    | 'MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_LOW'
    | 'MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_ULTRA_LOW';
  liveChunkReadahead?: number;
  livePlaybackType?:
    | 'LIVE_PLAYBACK_TYPE_UNKNOWN'
    | 'LIVE_PLAYBACK_TYPE_LIVE'
    | 'LIVE_PLAYBACK_TYPE_DVR'
    | 'LIVE_PLAYBACK_TYPE_LP'
    | 'LIVE_PLAYBACK_TYPE_POST'
    | 'LIVE_PLAYBACK_TYPE_WINDOW';
  maxFirstFrameAge?: string;
  onesiePlayerServiceInfo?: IYoutubeApiInnertubeOnesiePlayerServiceInfo;
  source?: string;
  startTimeSecs?: number;
  streamableFromUntrustedBandaid?: boolean;
  streamableVideoType?:
    | 'STREAMABLE_VIDEO_TYPE_UNKNOWN'
    | 'STREAMABLE_VIDEO_TYPE_REQUESTED'
    | 'STREAMABLE_VIDEO_TYPE_PREROLL';
  videoDurationSec?: number;
  videoId?: string;
  videoPlaybackUstreamerConfig?: string;
};

type IYoutubeApiInnertubeOnesieEarlyVideoInfo = {
  streamableVideoType?:
    | 'STREAMABLE_VIDEO_TYPE_UNKNOWN'
    | 'STREAMABLE_VIDEO_TYPE_REQUESTED'
    | 'STREAMABLE_VIDEO_TYPE_PREROLL';
  videoId?: string;
};

type IYoutubeApiInnertubeContentVideoUstreamerContext = {
  earlyVideoInfo?: IYoutubeApiInnertubeOnesieEarlyVideoInfo;
  responseType?:
    | 'STREAMING_WATCH_RESPONSE_TYPE_UNKNOWN'
    | 'STREAMING_WATCH_RESPONSE_TYPE_PLAYER_RESPONSE'
    | 'STREAMING_WATCH_RESPONSE_TYPE_WATCH_NEXT_RESPONSE'
    | 'STREAMING_WATCH_RESPONSE_TYPE_AD_WATCH_NEXT_RESPONSE'
    | 'STREAMING_WATCH_RESPONSE_TYPE_INCREMENTAL_WATCH_NEXT_RESPONSE'
    | 'STREAMING_WATCH_RESPONSE_TYPE_ONESIE_EARLY_CONTENT_VIDEO_INFO'
    | 'STREAMING_WATCH_RESPONSE_TYPE_ONESIE_EARLY_PREROLL_AD_VIDEO_INFO'
    | 'STREAMING_WATCH_RESPONSE_TYPE_REEL_WATCH_PAGE_RESPONSE';
  streamableVideo?: Array<IYoutubeApiInnertubeStreamableVideo>;
};

type IYoutubeApiInnertubeUstreamerContext = {
  contentVideoUstreamerContext?: IYoutubeApiInnertubeContentVideoUstreamerContext;
};

type IYoutubeApiInnertubeChallengePrompt = {
  ctx?: string;
  plt?: string;
  type?:
    | 'CHALLENGE_PROMPT_TYPE_UNSPECIFIED'
    | 'CHALLENGE_PROMPT_TYPE_AUTHENTICATE';
};

type IYoutubeApiInnertubeYtConfigData = {
  csn?: string;
  delegatedSessionId?: string;
  rootVisualElementType?: number;
  sessionIndex?: number;
  visitorData?: string;
};

type IYoutubeApiInnertubeWebResponseContextExtensionData = {
  challenge?: IYoutubeApiInnertubeChallengePrompt;
  hasDecorated?: boolean;
  pageTheme?:
    | 'UNSPECIFIED'
    | 'RED_ORIGINALS_HOME'
    | 'RED'
    | 'MEMBERSHIPS_AND_PURCHASES'
    | 'YPC_OFFERS';
  reloadWithoutPolymer?: boolean;
  ytConfigData?: IYoutubeApiInnertubeYtConfigData;
};

type IYoutubeApiInnertubeResponseContext = {
  bloat?: string;
  cacheInstruction?: IYoutubeApiInnertubeCacheInstruction;
  consistencyTokenJar?: IYoutubeApiInnertubeConsistencyTokenJar;
  csiParams?: IYoutubeApiInnertubeCsiParams;
  debugInfo?: IYoutubeApiInnertubeDebugInfo;
  entityTag?: string;
  errors?: IGdataErrors;
  experimentalData?: IYoutubeApiInnertubeExperimentalData;
  extraDebugData?: string;
  globalConfigGroup?: IYoutubeApiInnertubeGlobalConfigGroup;
  innertubeTokenJar?: IYoutubeApiInnertubeInnerTubeTokenJar;
  isIncognito?: boolean;
  locationPlayabilityToken?: string;
  logEntryString?: string;
  logEntryStringJson?: string;
  mainAppWebResponseContext?: IYoutubeApiInnertubeMainAppWebResponseContext;
  maxAgeSeconds?: number;
  notModified?: boolean;
  rolloutToken?: string;
  serviceTrackingParams?: Array<IYoutubeApiInnertubeServiceTrackingParams>;
  sherlogFrontendUrl?: string;
  spacecastAddressCandidates?: Array<string>;
  stateTags?: IYoutubeApiInnertubeStateTags;
  unpluggedResponseContext?: IYoutubeApiInnertubeUnpluggedResponseContext;
  ustreamerContext?: IYoutubeApiInnertubeUstreamerContext;
  veTree?: string;
  visitorData?: string;
  webResponseContextExtensionData?: IYoutubeApiInnertubeWebResponseContextExtensionData;
};

export interface IRawPlayerConfig {
  audioConfig: {
    loudnessDb?: number;
    perceptualLoudnessDb?: number;
    enablePerFormatLoudness: boolean;
  };
  streamSelectionConfig: {
    maxBitrate: string;
  };
  mediaCommonConfig: {
    dynamicReadaheadConfig?: {
      maxReadAheadMediaTimeMs: number;
      minReadAheadMediaTimeMs: number;
      readAheadGrowthRateMs: number;
    };
    mediaUstreamerRequestConfig?: {
      videoPlaybackUstreamerConfig: string;
    }
  };
}

export interface IRawTrustedResource {
  privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string;
  privateDoNotAccessOrElseSafeScriptWrappedValue?: string;
}

export interface IRawBotguardChallenge {
  interpreterUrl: IRawTrustedResource;
  interpreterHash: string;
  program: string;
  globalName: string;
  clientExperimentsStateBlob: string;
}

export interface IRawResponse {
  responseContext?: IYoutubeApiInnertubeResponseContext;
  background?: RawNode;
  bgChallenge?: IRawBotguardChallenge;
  challenge?: string;
  contents?: RawData;
  onResponseReceivedActions?: RawNode[];
  onResponseReceivedEndpoints?: RawNode[];
  onResponseReceivedCommands?: RawNode[];
  continuationContents?: RawNode;
  actions?: RawNode[];
  liveChatItemContextMenuSupportedRenderers?: RawNode;
  header?: RawNode;
  sidebar?: RawNode;
  continuation?: RawNode;
  metadata?: RawNode;
  microformat?: RawNode;
  overlay?: RawNode;
  alerts?: RawNode[];
  refinements?: string[];
  estimatedResults?: string;
  playerOverlays?: RawNode;
  playbackTracking?: {
    videostatsWatchtimeUrl: {
      baseUrl: string;
    };
    videostatsPlaybackUrl: {
      baseUrl: string;
    };
  };
  playabilityStatus?: {
    status: string;
    reason?: string;
    errorScreen?: RawNode;
    audioOnlyPlayability?: RawNode;
    playableInEmbed?: boolean;
  };
  streamingData?: {
    expiresInSeconds: string;
    formats: RawNode[];
    adaptiveFormats: RawNode[];
    dashManifestUrl?: string;
    hlsManifestUrl?: string;
    serverAbrStreamingUrl?: string;
  };
  playerConfig?: IRawPlayerConfig;
  playerResponse?: IRawResponse;
  watchNextResponse?: IRawResponse;
  currentVideoEndpoint?: RawNode;
  unseenCount?: number;
  playlistId?: string;
  endpoint?: RawNode;
  captions?: RawNode;
  videoDetails?: RawNode;
  annotations?: RawNode[];
  storyboards?: RawNode;
  endscreen?: RawNode;
  cards?: RawNode;
  cpnInfo?: IYoutubeApiInnertubeCpnInfo;
  targetId?: string;
  items?: RawNode[];
  frameworkUpdates?: any;
  engagementPanels?: RawNode[];
  entries?: RawNode[];
  [key: string]: any;
}
