import { YTNode } from '../helpers.js';
import { Parser, type RawNode, YTNodes } from '../index.js';
import { Thumbnail } from '../misc.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.js';
import Text from './misc/Text.js';

type PostAttachmentType = 'UNKNOWN'
  | 'NONE' | 'IMAGE' | 'VIDEO_LINK'
  | 'POLL' | 'PLAYLIST_LINK' | 'POST_LINK'
  | 'CLIP' | 'QUIZ' | 'UPLOADED_VIDEOS';

type BackstagePostType = 'UNKNOWN'
  | 'TEXT' | 'POLL' | 'IMAGE'
  | 'VIDEO' | 'REPOST';

type BackstagePostDialogPurpose = 'UNKNOWN' | 'CREATE' | 'EDIT';

type BackstagePostDialogStartingState = 'UNSPECIFIED'
  | 'TEXT' | 'TEXT_POLL' | 'IMAGE'
  | 'IMAGE_POLL' | 'QUIZ';

export interface PollEditorInfo {
  add_option_button?: YTNodes.Button | null;
  custom_option_placeholder_text?: Text[];
  header_icon_type?: string;
  header_text?: Text;
  max_poll_option_chars?: number;
  max_poll_options?: number;
  max_poll_question_chars?: number;
  min_poll_option_chars?: number;
  min_poll_options?: number;
  option_default_text?: Text;
  option_placeholder_text?: Text;
  poll_option_data?: {
    char_count_error_text?: Text;
    chars_remaining_alt_label?: Text;
    remove_option_alt_text?: Text;
  };
  poll_question_char_count_error_text?: Text;
  question_placeholder_text?: Text;
};

export interface QuizEditorInfo {
  add_option_button?: YTNodes.Button | null;
  explanation_placeholder_text?: Text;
  mark_answer_button?: YTNodes.Button | null;
  max_quiz_explanation_chars?: number;
  max_quiz_option_chars?: number;
  max_quiz_options?: number;
  min_quiz_explanation_chars?: number;
  min_quiz_option_chars?: number;
  min_quiz_options?: number;
  option_placeholder_text?: Text;
  remove_option_button_a11y_text?: AccessibilitySupportedDatas;
};

export default class BackstagePostDialog extends YTNode {
  static type = 'BackstagePostDialog';

  access_restriction_selector_key?: string;
  advanced_tier_features: {
    external_links: {
      allow_external_links?: boolean,
      external_links_rfa_entity_key?: string,
      verification_banner_button_label?: Text,
      verification_banner_message?: Text,
      verification_button?: YTNodes.Button | null,
      verification_command?: NavigationEndpoint
    },
    rate_limit?: {
      rate_limit_commands?: {
        command?: NavigationEndpoint,
        error_label?: string
      }[]
    }
  };
  attachment_editors?: {
    poll_editor_renderer?: YTNode | null;
    quiz_editor_renderer?: YTNode | null;
  };
  attachment_element_renderer?: YTNode | null;
  attachment_dismiss_button?: YTNode | null;
  attachment_type: PostAttachmentType;
  author_text: Text;
  author_thumbnail: Thumbnail[];
  backstage_attachment?: YTNode | null;
  cancel_button: YTNodes.Button | null;
  char_limit?: number;
  creator_onboarding_promo_renderer?: YTNode | null;
  creator_survey_command?: NavigationEndpoint;
  dialog_banner?: YTNode | null;
  editable_text: Text;
  enable_async_image_upload?: boolean;
  enable_creation_modes_ui?: boolean;
  error_message: Text;
  expire_icon_button?: YTNode | null;
  extract_tags_endpoint?: NavigationEndpoint;
  fan_community_data?: {
    fan_community_guidelines_element_renderer?: YTNode | null;
    fan_community_guidelines_state_key?: string;
    host_channel_name?: string;
    show_fan_community_guidelines_command?: NavigationEndpoint;
  };
  fan_community_guidelines_state_key?: string;
  gallery_teaser_data?: {
    max_image_count?: number;
    min_image_count?: number;
  };
  header_renderer?: YTNode | null;
  image_button?: YTNode | null;
  image_carousel_editor?: YTNode | null;
  image_editor_renderer?: YTNode | null;
  image_poll_button?: YTNode | null;
  image_poll_button_tooltip?: Text;
  image_poll_editor_info?: PollEditorInfo;
  image_poll_editor_renderer?: YTNode | null;
  image_post_placeholder_text: Text;
  media_generation_data?: {
    text_generation?: {
      open_text_transform_panel_command?: NavigationEndpoint;
      text_transform_entity_key?: string;
    };
    text_to_image_generation?: {
      gallery_teaser_entry_point?: YTNode | null;
    };
  };
  metadata_editor?: YTNode | null;
  multi_image_button_tooltip?: Text;
  on_show_command?: NavigationEndpoint;
  placeholder_text: Text;
  poll_button?: YTNode | null;
  poll_editor_info?: PollEditorInfo;
  poll_post_placeholder_text: Text;
  poll_type_selection_renderer?: YTNode | null;
  post_button: YTNodes.Button | null;
  post_creation_data_key?: string;
  post_creation_disabled_annotation?: Text;
  post_creation_disabled_text?: Text;
  post_ephemerality_dialog_renderer?: YTNode | null;
  post_ephemerality_settings_entity_key?: string;
  post_options_menu?: YTNode | null;
  prefilled_attachment?: {
    poll_data?: {
      choices?: string[];
    };
  };
  prefilled_image_data?: {
    encrypted_blob_id?: string;
    source_external_video_id?: string;
  };
  prefilled_placeholder_text?: Text;
  prefilled_type?: BackstagePostType;
  purpose: BackstagePostDialogPurpose;
  quiz_button?: YTNode | null;
  quiz_editor_info?: QuizEditorInfo;
  quiz_post_placeholder_text: Text;
  rate_limit_error_message: Text;
  schedule_button?: YTNode | null;
  schedule_icon_button?: YTNode | null;
  scheduled_publish_time_bar?: YTNode | null;
  scheduled_publish_time_sec?: string;
  scheduling_date_time_picker?: YTNode | null;
  select_tagged_video_button?: YTNode | null;
  selected_video_entity_key?: string;
  serialized_creation_item_info: string;
  show_aadc_notice_command?: NavigationEndpoint;
  show_audience_picker_command?: NavigationEndpoint;
  show_ephemerality_bottom_sheet_command?: NavigationEndpoint;
  show_fan_community_guidelines_command?: NavigationEndpoint;
  starting_state?: BackstagePostDialogStartingState;
  timestamp_entity_key?: string;
  title: Text;
  tracking_params?: string;
  user_mention_suggestions_endpoint?: NavigationEndpoint;
  video_link_button?: YTNode | null;
  video_link_post_placeholder_text: Text;
  visibility_label: Text;

  constructor(data: RawNode) {
    super();

    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.post_button = Parser.parseItem(data.postButton, YTNodes.Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, YTNodes.Button);
    this.placeholder_text = new Text(data.placeholderText);
    this.editable_text = new Text(data.editableText);
    this.title = new Text(data.title);
    this.image_post_placeholder_text = new Text(data.imagePostPlaceholderText);
    this.poll_post_placeholder_text = new Text(data.pollPostPlaceholderText);
    this.video_link_post_placeholder_text = new Text(data.videoLinkPostPlaceholderText);
    this.error_message = new Text(data.errorMessage);
    this.purpose = data.purpose?.replace('BACKSTAGE_POST_DIALOG_PURPOSE_', '');
    this.serialized_creation_item_info = data.serializedCreationItemInfo;
    this.author_text = new Text(data.authorText);
    this.visibility_label = new Text(data.visibilityLabel);
    this.attachment_type = data.attachmentType?.replace('POST_ATTACHMENT_TYPE_ENUM_', '');
    this.rate_limit_error_message = new Text(data.rateLimitErrorMessage);
    this.quiz_post_placeholder_text = new Text(data.quizPostPlaceholderText);

    this.advanced_tier_features = {
      external_links: {
        allow_external_links: data.advancedTierFeatures?.externalLinks?.allowExternalLinks,
        external_links_rfa_entity_key: data.advancedTierFeatures?.externalLinks?.externalLinksRfaEntityKey,
        verification_banner_button_label: Reflect.has(data.advancedTierFeatures?.externalLinks ?? {}, 'verificationBannerButtonLabel') ?
          new Text(data.advancedTierFeatures.externalLinks.verificationBannerButtonLabel) : undefined,
        verification_banner_message: Reflect.has(data.advancedTierFeatures?.externalLinks ?? {}, 'verificationBannerMessage') ?
          new Text(data.advancedTierFeatures.externalLinks.verificationBannerMessage) : undefined,
        verification_button: Parser.parseItem(data.advancedTierFeatures?.externalLinks?.verificationButton, YTNodes.Button),
        verification_command: Reflect.has(data.advancedTierFeatures?.externalLinks ?? {}, 'verificationCommand') ?
          new NavigationEndpoint(data.advancedTierFeatures.externalLinks.verificationCommand) : undefined
      },
      rate_limit: Reflect.has(data.advancedTierFeatures ?? {}, 'rateLimit') ? {
        rate_limit_commands: data.advancedTierFeatures.rateLimit.rateLimitCommands?.map((entry: RawNode) => ({
          command: Reflect.has(entry, 'command') ? new NavigationEndpoint(entry.command) : undefined,
          error_label: entry.errorLabel
        }))
      } : undefined
    };

    if (Reflect.has(data, 'attachmentDismissButton')) {
      this.attachment_dismiss_button = Parser.parseItem(data.attachmentDismissButton, YTNodes.Button);
    }

    if (Reflect.has(data, 'attachmentEditors')) {
      this.attachment_editors = {
        poll_editor_renderer: Parser.parseItem(data.attachmentEditors.pollEditorRenderer),
        quiz_editor_renderer: Parser.parseItem(data.attachmentEditors.quizEditorRenderer)
      };
    }

    if (Reflect.has(data, 'attachmentElementRenderer')) {
      this.attachment_element_renderer = Parser.parseItem(data.attachmentElementRenderer);
    }

    if (Reflect.has(data, 'backstageAttachment')) {
      this.backstage_attachment = Parser.parseItem(data.backstageAttachment);
    }

    if (Reflect.has(data, 'charLimit')) {
      this.char_limit = data.charLimit;
    }

    if (Reflect.has(data, 'creatorOnboardingPromoRenderer')) {
      this.creator_onboarding_promo_renderer = Parser.parseItem(data.creatorOnboardingPromoRenderer);
    }

    if (Reflect.has(data, 'creatorSurveyCommand')) {
      this.creator_survey_command = new NavigationEndpoint(data.creatorSurveyCommand);
    }

    if (Reflect.has(data, 'dialogBanner')) {
      this.dialog_banner = Parser.parseItem(data.dialogBanner);
    }

    if (Reflect.has(data, 'enableAsyncImageUpload')) {
      this.enable_async_image_upload = data.enableAsyncImageUpload;
    }

    if (Reflect.has(data, 'enableCreationModesUi')) {
      this.enable_creation_modes_ui = data.enableCreationModesUi;
    }

    if (Reflect.has(data, 'expireIconButton')) {
      this.expire_icon_button = Parser.parseItem(data.expireIconButton);
    }

    if (Reflect.has(data, 'extractTagsEndpoint')) {
      this.extract_tags_endpoint = new NavigationEndpoint(data.extractTagsEndpoint);
    }

    if (Reflect.has(data, 'fanCommunityData')) {
      this.fan_community_data = {
        fan_community_guidelines_element_renderer: Parser.parseItem(data.fanCommunityData.fanCommunityGuidelinesElementRenderer),
        fan_community_guidelines_state_key: data.fanCommunityData.fanCommunityGuidelinesStateKey,
        host_channel_name: data.fanCommunityData.hostChannelName,
        show_fan_community_guidelines_command: Reflect.has(data.fanCommunityData, 'showFanCommunityGuidelinesCommand') ?
          new NavigationEndpoint(data.fanCommunityData.showFanCommunityGuidelinesCommand) : undefined
      };
    }

    if (Reflect.has(data, 'fanCommunityGuidelinesStateKey')) {
      this.fan_community_guidelines_state_key = data.fanCommunityGuidelinesStateKey;
    }

    if (Reflect.has(data, 'galleryTeaserData')) {
      this.gallery_teaser_data = {
        max_image_count: data.galleryTeaserData.maxImageCount,
        min_image_count: data.galleryTeaserData.minImageCount
      };
    }

    if (Reflect.has(data, 'headerRenderer')) {
      this.header_renderer = Parser.parseItem(data.headerRenderer);
    }

    if (Reflect.has(data, 'imageButton')) {
      this.image_button = Parser.parseItem(data.imageButton);
    }

    if (Reflect.has(data, 'imageCarouselEditor')) {
      this.image_carousel_editor = Parser.parseItem(data.imageCarouselEditor);
    }

    if (Reflect.has(data, 'imageEditorRenderer')) {
      this.image_editor_renderer = Parser.parseItem(data.imageEditorRenderer);
    }

    if (Reflect.has(data, 'imagePollButton')) {
      this.image_poll_button = Parser.parseItem(data.imagePollButton);
    }

    if (Reflect.has(data, 'imagePollButtonTooltip')) {
      this.image_poll_button_tooltip = new Text(data.imagePollButtonTooltip);
    }

    if (Reflect.has(data, 'imagePollEditorInfo')) {
      this.image_poll_editor_info = this.#parsePollEditorInfo(data.imagePollEditorInfo);
    }

    if (Reflect.has(data, 'imagePollEditorRenderer')) {
      this.image_poll_editor_renderer = Parser.parseItem(data.imagePollEditorRenderer);
    }

    if (Reflect.has(data, 'mediaGenerationData')) {
      this.media_generation_data = {
        text_generation: Reflect.has(data.mediaGenerationData, 'textGeneration') ? {
          open_text_transform_panel_command: Reflect.has(data.mediaGenerationData.textGeneration, 'openTextTransformPanelCommand') ?
            new NavigationEndpoint(data.mediaGenerationData.textGeneration.openTextTransformPanelCommand) : undefined,
          text_transform_entity_key: data.mediaGenerationData.textGeneration.textTransformEntityKey
        } : undefined,
        text_to_image_generation: Reflect.has(data.mediaGenerationData, 'textToImageGeneration') ? {
          gallery_teaser_entry_point: Parser.parseItem(data.mediaGenerationData.textToImageGeneration.galleryTeaserEntryPoint)
        } : undefined
      };
    }

    if (Reflect.has(data, 'metadataEditor')) {
      this.metadata_editor = Parser.parseItem(data.metadataEditor);
    }

    if (Reflect.has(data, 'multiImageButtonTooltip')) {
      this.multi_image_button_tooltip = new Text(data.multiImageButtonTooltip);
    }

    if (Reflect.has(data, 'onShowCommand')) {
      this.on_show_command = new NavigationEndpoint(data.onShowCommand);
    }

    if (Reflect.has(data, 'pollButton')) {
      this.poll_button = Parser.parseItem(data.pollButton);
    }

    if (Reflect.has(data, 'pollEditorInfo')) {
      this.poll_editor_info = this.#parsePollEditorInfo(data.pollEditorInfo);
    }

    if (Reflect.has(data, 'pollTypeSelectionRenderer')) {
      this.poll_type_selection_renderer = Parser.parseItem(data.pollTypeSelectionRenderer);
    }

    if (Reflect.has(data, 'postCreationDataKey')) {
      this.post_creation_data_key = data.postCreationDataKey;
    }

    if (Reflect.has(data, 'postCreationDisabledAnnotation')) {
      this.post_creation_disabled_annotation = new Text(data.postCreationDisabledAnnotation);
    }

    if (Reflect.has(data, 'postCreationDisabledText')) {
      this.post_creation_disabled_text = new Text(data.postCreationDisabledText);
    }

    if (Reflect.has(data, 'postEphemeralityDialogRenderer')) {
      this.post_ephemerality_dialog_renderer = Parser.parseItem(data.postEphemeralityDialogRenderer);
    }

    if (Reflect.has(data, 'postEphemeralitySettingsEntityKey')) {
      this.post_ephemerality_settings_entity_key = data.postEphemeralitySettingsEntityKey;
    }

    if (Reflect.has(data, 'postOptionsMenu')) {
      this.post_options_menu = Parser.parseItem(data.postOptionsMenu);
    }

    if (Reflect.has(data, 'prefilledAttachment')) {
      this.prefilled_attachment = {
        poll_data: Reflect.has(data.prefilledAttachment, 'pollData') ? {
          choices: data.prefilledAttachment.pollData.choices
        } : undefined
      };
    }

    if (Reflect.has(data, 'prefilledImageData')) {
      this.prefilled_image_data = {
        encrypted_blob_id: data.prefilledImageData.encryptedBlobId,
        source_external_video_id: data.prefilledImageData.sourceExternalVideoId
      };
    }

    if (Reflect.has(data, 'prefilledPlaceholderText')) {
      this.prefilled_placeholder_text = new Text(data.prefilledPlaceholderText);
    }

    if (Reflect.has(data, 'prefilledType')) {
      this.prefilled_type = data.prefilledType?.replace('BACKSTAGE_POST_TYPE_', '');
    }

    if (Reflect.has(data, 'quizButton')) {
      this.quiz_button = Parser.parseItem(data.quizButton);
    }

    if (Reflect.has(data, 'quizEditorInfo')) {
      this.quiz_editor_info = {
        add_option_button: Parser.parseItem(data.quizEditorInfo.addOptionButton, YTNodes.Button),
        explanation_placeholder_text: Reflect.has(data.quizEditorInfo, 'explanationPlaceholderText') ?
          new Text(data.quizEditorInfo.explanationPlaceholderText) : undefined,
        mark_answer_button: Parser.parseItem(data.quizEditorInfo.markAnswerButton, YTNodes.Button),
        max_quiz_explanation_chars: data.quizEditorInfo.maxQuizExplanationChars,
        max_quiz_option_chars: data.quizEditorInfo.maxQuizOptionChars,
        max_quiz_options: data.quizEditorInfo.maxQuizOptions,
        min_quiz_explanation_chars: data.quizEditorInfo.minQuizExplanationChars,
        min_quiz_option_chars: data.quizEditorInfo.minQuizOptionChars,
        min_quiz_options: data.quizEditorInfo.minQuizOptions,
        option_placeholder_text: Reflect.has(data.quizEditorInfo, 'optionPlaceholderText') ?
          new Text(data.quizEditorInfo.optionPlaceholderText) : undefined,
        remove_option_button_a11y_text: Reflect.has(data.quizEditorInfo, 'removeOptionButtonA11yText') &&
          Reflect.has(data.quizEditorInfo.removeOptionButtonA11yText, 'accessibilityData') ? {
            accessibility_data: new AccessibilityData(data.quizEditorInfo.removeOptionButtonA11yText.accessibilityData)
          } : undefined
      };
    }

    if (Reflect.has(data, 'scheduleButton')) {
      this.schedule_button = Parser.parseItem(data.scheduleButton);
    }

    if (Reflect.has(data, 'scheduleIconButton')) {
      this.schedule_icon_button = Parser.parseItem(data.scheduleIconButton);
    }

    if (Reflect.has(data, 'scheduledPublishTimeBar')) {
      this.scheduled_publish_time_bar = Parser.parseItem(data.scheduledPublishTimeBar);
    }

    if (Reflect.has(data, 'scheduledPublishTimeSec')) {
      this.scheduled_publish_time_sec = data.scheduledPublishTimeSec;
    }

    if (Reflect.has(data, 'schedulingDateTimePicker')) {
      this.scheduling_date_time_picker = Parser.parseItem(data.schedulingDateTimePicker);
    }

    if (Reflect.has(data, 'selectTaggedVideoButton')) {
      this.select_tagged_video_button = Parser.parseItem(data.selectTaggedVideoButton);
    }

    if (Reflect.has(data, 'selectedVideoEntityKey')) {
      this.selected_video_entity_key = data.selectedVideoEntityKey;
    }

    if (Reflect.has(data, 'showAadcNoticeCommand')) {
      this.show_aadc_notice_command = new NavigationEndpoint(data.showAadcNoticeCommand);
    }

    if (Reflect.has(data, 'showAudiencePickerCommand')) {
      this.show_audience_picker_command = new NavigationEndpoint(data.showAudiencePickerCommand);
    }

    if (Reflect.has(data, 'showEphemeralityBottomSheetCommand')) {
      this.show_ephemerality_bottom_sheet_command = new NavigationEndpoint(data.showEphemeralityBottomSheetCommand);
    }

    if (Reflect.has(data, 'showFanCommunityGuidelinesCommand')) {
      this.show_fan_community_guidelines_command = new NavigationEndpoint(data.showFanCommunityGuidelinesCommand);
    }

    if (Reflect.has(data, 'startingState')) {
      this.starting_state = data.startingState?.replace('BACKSTAGE_POST_DIALOG_STARTING_STATE_', '');
    }

    if (Reflect.has(data, 'timestampEntityKey')) {
      this.timestamp_entity_key = data.timestampEntityKey;
    }

    if (Reflect.has(data, 'trackingParams')) {
      this.tracking_params = data.trackingParams;
    }

    if (Reflect.has(data, 'userMentionSuggestionsEndpoint')) {
      this.user_mention_suggestions_endpoint = new NavigationEndpoint(data.userMentionSuggestionsEndpoint);
    }

    if (Reflect.has(data, 'videoLinkButton')) {
      this.video_link_button = Parser.parseItem(data.videoLinkButton);
    }
  }

  #parsePollEditorInfo(raw: RawNode): PollEditorInfo {
    return {
      add_option_button: Parser.parseItem(raw.addOptionButton, YTNodes.Button),
      custom_option_placeholder_text: Reflect.has(raw, 'customOptionPlaceholderText') ?
        raw.customOptionPlaceholderText.map((text: RawNode) => new Text(text)) : undefined,
      header_icon_type: Reflect.has(raw, 'headerIcon') && Reflect.has(raw.headerIcon, 'iconType') ?
        raw.headerIcon.iconType : undefined,
      header_text: Reflect.has(raw, 'headerText') ? new Text(raw.headerText) : undefined,
      max_poll_option_chars: raw.maxPollOptionChars,
      max_poll_options: raw.maxPollOptions,
      max_poll_question_chars: raw.maxPollQuestionChars,
      min_poll_option_chars: raw.minPollOptionChars,
      min_poll_options: raw.minPollOptions,
      option_default_text: Reflect.has(raw, 'optionDefaultText') ? new Text(raw.optionDefaultText) : undefined,
      option_placeholder_text: Reflect.has(raw, 'optionPlaceholderText') ? new Text(raw.optionPlaceholderText) : undefined,
      poll_option_data: Reflect.has(raw, 'pollOptionData') ? {
        char_count_error_text: Reflect.has(raw.pollOptionData, 'charCountErrorText') ?
          new Text(raw.pollOptionData.charCountErrorText) : undefined,
        chars_remaining_alt_label: Reflect.has(raw.pollOptionData, 'charsRemainingAltLabel') ?
          new Text(raw.pollOptionData.charsRemainingAltLabel) : undefined,
        remove_option_alt_text: Reflect.has(raw.pollOptionData, 'removeOptionAltText') ?
          new Text(raw.pollOptionData.removeOptionAltText) : undefined
      } : undefined,
      poll_question_char_count_error_text: Reflect.has(raw, 'pollQuestionCharCountErrorText') ?
        new Text(raw.pollQuestionCharCountErrorText) : undefined,
      question_placeholder_text: Reflect.has(raw, 'questionPlaceholderText') ? new Text(raw.questionPlaceholderText) : undefined
    };
  }
}
