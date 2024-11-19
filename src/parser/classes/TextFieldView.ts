import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export type DisplayProperties = {
  isMultiline: boolean;
  disableNewLines: boolean;
};

export type ContentProperties = {
  labelText: string;
  placeholderText: string;
  maxCharacterCount: number;
};

export type InitialState = {
  isFocused: boolean;
};

export type FormFieldMetadata = {
  formId: string;
  fieldId: string;
};

export default class TextFieldView extends YTNode {
  static type = 'TextFieldView';

  public display_properties?: DisplayProperties;
  public content_properties?: ContentProperties;
  public initial_state?: InitialState;
  public form_field_metadata?: FormFieldMetadata;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'displayProperties')) {
      this.display_properties = {
        isMultiline: !!data.displayProperties.isMultiline,
        disableNewLines: !!data.displayProperties.disableNewLines
      };
    }

    if (Reflect.has(data, 'contentProperties')) {
      this.content_properties = {
        labelText: data.contentProperties.labelText,
        placeholderText: data.contentProperties.placeholderText,
        maxCharacterCount: data.contentProperties.maxCharacterCount
      };
    }

    if (Reflect.has(data, 'initialState')) {
      this.initial_state = {
        isFocused: !!data.initialState.isFocused
      };
    }

    if (Reflect.has(data, 'formFieldMetadata')) {
      this.form_field_metadata = {
        formId: data.formFieldMetadata.formId,
        fieldId: data.formFieldMetadata.fieldId
      };
    }
  }
}