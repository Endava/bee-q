/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { TAvatarShape, TAvatarSize } from './components/avatar/bq-avatar.types';
import { TBadgeSize } from './components/badge/bq-badge.types';
import { TButtonAppearance, TButtonSize, TButtonType, TButtonVariant } from './components/button/bq-button.types';
import {
  TDividerOrientation,
  TDividerStrokeLinecap,
  TDividerTitleAlignment,
} from './components/divider/bq-divider.types';
import { TIconWeight } from './components/icon/bq-icon.types';
import { TRadioGroupOrientation } from './components/radio-group/bq-radio-group.types';
import { TStatusType } from './components/status/bq-status.types';
export namespace Components {
  interface BqAvatar {
    /**
     * The image source to load on the avatar (this can be also a base64 encoded image)
     */
    image: string;
    /**
     * The text to display on avatar
     */
    initials: string;
    /**
     * A text to use for describing the avatar on assistive devices
     */
    label: string;
    /**
     * The shape of the avatar
     */
    shape: TAvatarShape;
    /**
     * The size of the avatar
     */
    size: TAvatarSize;
  }
  interface BqBadge {
    /**
     * Badge background color. The value should be a valid value of the palette color
     */
    backgroundColor?: string;
    /**
     * The size of the badge
     */
    size?: TBadgeSize;
    /**
     * Badge number color. The value should be a valid value of the palette color
     */
    textColor?: string;
  }
  interface BqBreadcrumb {}
  interface BqBreadcrumbItem {
    /**
     * Active the condition active of item, basically used by latest item in breadcrumb component
     */
    active: boolean;
    /**
     * Contains an arrow If prop is set to true, it displays the options
     */
    dropdown: boolean;
    /**
     * Icon image used by the item in breadcrumb component
     */
    icon: string;
    /**
     * Contains a URL If prop is set, an anchor tag will be rendered
     */
    link: string;
  }
  interface BqButton {
    /**
     * The appearance style to apply to the button
     */
    appearance: TButtonAppearance;
    /**
     * If true, the button will be disabled (no interaction allowed)
     */
    disabled: boolean;
    /**
     * Tells the browser to treat the linked URL as a download. Only used when `href` is set. Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
     */
    download?: string;
    /**
     * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
     */
    href: string;
    /**
     * If `true` it will display the button in a loading state
     */
    loading: boolean;
    /**
     * The size of the button
     */
    size: TButtonSize;
    /**
     * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`) Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
     */
    target: '_blank' | '_parent' | '_self' | '_top';
    /**
     * The default behavior of the button
     */
    type: TButtonType;
    /**
     * The variant of button to apply on top of the appearance
     */
    variant: TButtonVariant;
  }
  interface BqCheckbox {
    /**
     * If true checkbox displays background on hover
     */
    backgroundOnHover?: boolean;
    /**
     * If true checkbox is checked
     */
    checked?: boolean;
    /**
     * If true checkbox is disabled
     */
    disabled?: boolean;
    /**
     * The form ID that the checkbox is associated with
     */
    formId?: string;
    /**
     * A state that is neither checked nor unchecked
     */
    indeterminate: false;
    /**
     * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
     */
    name: string;
    /**
     * If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
     */
    required?: boolean;
    /**
     * Remove focus from the native `<input>` HTML element used under the hood. Use this method instead of the global `element.blur()`.
     */
    vBlur: () => Promise<void>;
    /**
     * Simulate a click event on the native `<input>` HTML element used under the hood. Use this method instead of the global `element.click()`.
     */
    vClick: () => Promise<void>;
    /**
     * Sets focus on the native `<input>` HTML element used under the hood. Use this method instead of the global `element.focus()`.
     */
    vFocus: () => Promise<void>;
    /**
     * A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.
     */
    value: string;
  }
  interface BqDivider {
    /**
     * If true, the divider has a dashed pattern
     */
    dashed: boolean;
    /**
     * The default orientation of the divider
     */
    orientation: TDividerOrientation;
    /**
     * Set the min width of the divider's stroke when text is not centered. Value expressed in px
     */
    strokeBasis?: number;
    /**
     * Set the stroke color of the divider. The value should be a valid value of the palette color
     */
    strokeColor?: string;
    /**
     * Set the gap of the divider's stroke. This is applicable when the stroke is dashed
     */
    strokeDashGap?: number;
    /**
     * Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed
     */
    strokeDashWidth?: number;
    /**
     * Set the lineap of the divider's stroke. This is applicable when the stroke is dashed
     */
    strokeLinecap?: TDividerStrokeLinecap;
    /**
     * Set the thickness of the divider's stroke. Value expressed in px
     */
    strokeThickness?: number;
    /**
     * Set the alignment of the title on the main axis of the divider (horizontal / vertical)
     */
    titleAlignment?: TDividerTitleAlignment;
  }
  interface BqIcon {
    /**
     * Set the stroke color of the SVG. The value should be a valid value of the palette color
     */
    color?: string;
    /**
     * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
     */
    name: string;
    /**
     * Set the size of the SVG
     */
    size?: string | number;
    /**
     * It set the icon weight/style
     */
    weight?: TIconWeight;
  }
  interface BqRadio {
    /**
     * If true radio displays background on hover
     */
    backgroundOnHover?: boolean;
    /**
     * If true radio input is checked
     */
    checked?: boolean;
    /**
     * If true radio input is disabled
     */
    disabled?: boolean;
    /**
     * The form ID that the radio input is associated with
     */
    formId?: string;
    /**
     * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
     */
    name: string;
    /**
     * If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted
     */
    required?: boolean;
    /**
     * Remove focus from the native `<input>` HTML element used under the hood. Use this method instead of the global `element.blur()`.
     */
    vBlur: () => Promise<void>;
    /**
     * Simulate a click event on the native `<input>` HTML element used under the hood. Use this method instead of the global `element.click()`.
     */
    vClick: () => Promise<void>;
    /**
     * Sets focus on the native `<input>` HTML element used under the hood. Use this method instead of the global `element.focus()`.
     */
    vFocus: () => Promise<void>;
    /**
     * A string representing the value of the radio.
     */
    value: string;
  }
  interface BqRadioGroup {
    /**
     * A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change
     */
    debounceTime: number;
    /**
     * If true radio inputs are disabled
     */
    disabled?: boolean;
    /**
     * If true displays fieldset
     */
    fieldset?: boolean;
    /**
     * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
     */
    name: string;
    /**
     * The display orientation of the radio inputs
     */
    orientation: TRadioGroupOrientation;
    /**
     * A string representing the value of the radio.
     */
    value?: string;
  }
  interface BqStatus {
    /**
     * It defines the type of status to display
     */
    type: TStatusType;
  }
}
export interface BqButtonCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLBqButtonElement;
}
export interface BqCheckboxCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLBqCheckboxElement;
}
export interface BqRadioCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLBqRadioElement;
}
export interface BqRadioGroupCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLBqRadioGroupElement;
}
declare global {
  interface HTMLBqAvatarElement extends Components.BqAvatar, HTMLStencilElement {}
  var HTMLBqAvatarElement: {
    prototype: HTMLBqAvatarElement;
    new (): HTMLBqAvatarElement;
  };
  interface HTMLBqBadgeElement extends Components.BqBadge, HTMLStencilElement {}
  var HTMLBqBadgeElement: {
    prototype: HTMLBqBadgeElement;
    new (): HTMLBqBadgeElement;
  };
  interface HTMLBqBreadcrumbElement extends Components.BqBreadcrumb, HTMLStencilElement {}
  var HTMLBqBreadcrumbElement: {
    prototype: HTMLBqBreadcrumbElement;
    new (): HTMLBqBreadcrumbElement;
  };
  interface HTMLBqBreadcrumbItemElement extends Components.BqBreadcrumbItem, HTMLStencilElement {}
  var HTMLBqBreadcrumbItemElement: {
    prototype: HTMLBqBreadcrumbItemElement;
    new (): HTMLBqBreadcrumbItemElement;
  };
  interface HTMLBqButtonElement extends Components.BqButton, HTMLStencilElement {}
  var HTMLBqButtonElement: {
    prototype: HTMLBqButtonElement;
    new (): HTMLBqButtonElement;
  };
  interface HTMLBqCheckboxElement extends Components.BqCheckbox, HTMLStencilElement {}
  var HTMLBqCheckboxElement: {
    prototype: HTMLBqCheckboxElement;
    new (): HTMLBqCheckboxElement;
  };
  interface HTMLBqDividerElement extends Components.BqDivider, HTMLStencilElement {}
  var HTMLBqDividerElement: {
    prototype: HTMLBqDividerElement;
    new (): HTMLBqDividerElement;
  };
  interface HTMLBqIconElement extends Components.BqIcon, HTMLStencilElement {}
  var HTMLBqIconElement: {
    prototype: HTMLBqIconElement;
    new (): HTMLBqIconElement;
  };
  interface HTMLBqRadioElement extends Components.BqRadio, HTMLStencilElement {}
  var HTMLBqRadioElement: {
    prototype: HTMLBqRadioElement;
    new (): HTMLBqRadioElement;
  };
  interface HTMLBqRadioGroupElement extends Components.BqRadioGroup, HTMLStencilElement {}
  var HTMLBqRadioGroupElement: {
    prototype: HTMLBqRadioGroupElement;
    new (): HTMLBqRadioGroupElement;
  };
  interface HTMLBqStatusElement extends Components.BqStatus, HTMLStencilElement {}
  var HTMLBqStatusElement: {
    prototype: HTMLBqStatusElement;
    new (): HTMLBqStatusElement;
  };
  interface HTMLElementTagNameMap {
    'bq-avatar': HTMLBqAvatarElement;
    'bq-badge': HTMLBqBadgeElement;
    'bq-breadcrumb': HTMLBqBreadcrumbElement;
    'bq-breadcrumb-item': HTMLBqBreadcrumbItemElement;
    'bq-button': HTMLBqButtonElement;
    'bq-checkbox': HTMLBqCheckboxElement;
    'bq-divider': HTMLBqDividerElement;
    'bq-icon': HTMLBqIconElement;
    'bq-radio': HTMLBqRadioElement;
    'bq-radio-group': HTMLBqRadioGroupElement;
    'bq-status': HTMLBqStatusElement;
  }
}
declare namespace LocalJSX {
  interface BqAvatar {
    /**
     * The image source to load on the avatar (this can be also a base64 encoded image)
     */
    image?: string;
    /**
     * The text to display on avatar
     */
    initials?: string;
    /**
     * A text to use for describing the avatar on assistive devices
     */
    label?: string;
    /**
     * The shape of the avatar
     */
    shape?: TAvatarShape;
    /**
     * The size of the avatar
     */
    size?: TAvatarSize;
  }
  interface BqBadge {
    /**
     * Badge background color. The value should be a valid value of the palette color
     */
    backgroundColor?: string;
    /**
     * The size of the badge
     */
    size?: TBadgeSize;
    /**
     * Badge number color. The value should be a valid value of the palette color
     */
    textColor?: string;
  }
  interface BqBreadcrumb {}
  interface BqBreadcrumbItem {
    /**
     * Active the condition active of item, basically used by latest item in breadcrumb component
     */
    active?: boolean;
    /**
     * Contains an arrow If prop is set to true, it displays the options
     */
    dropdown?: boolean;
    /**
     * Icon image used by the item in breadcrumb component
     */
    icon?: string;
    /**
     * Contains a URL If prop is set, an anchor tag will be rendered
     */
    link?: string;
  }
  interface BqButton {
    /**
     * The appearance style to apply to the button
     */
    appearance?: TButtonAppearance;
    /**
     * If true, the button will be disabled (no interaction allowed)
     */
    disabled?: boolean;
    /**
     * Tells the browser to treat the linked URL as a download. Only used when `href` is set. Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
     */
    download?: string;
    /**
     * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
     */
    href?: string;
    /**
     * If `true` it will display the button in a loading state
     */
    loading?: boolean;
    /**
     * Handler to be called when the button loses focus
     */
    onBqBlur?: (event: BqButtonCustomEvent<HTMLBqButtonElement>) => void;
    /**
     * Handler to be called when button gets focus
     */
    onBqClick?: (event: BqButtonCustomEvent<HTMLBqButtonElement>) => void;
    /**
     * Handler to be called when the button is clicked
     */
    onBqFocus?: (event: BqButtonCustomEvent<HTMLBqButtonElement>) => void;
    /**
     * The size of the button
     */
    size?: TButtonSize;
    /**
     * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`) Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
     */
    target?: '_blank' | '_parent' | '_self' | '_top';
    /**
     * The default behavior of the button
     */
    type?: TButtonType;
    /**
     * The variant of button to apply on top of the appearance
     */
    variant?: TButtonVariant;
  }
  interface BqCheckbox {
    /**
     * If true checkbox displays background on hover
     */
    backgroundOnHover?: boolean;
    /**
     * If true checkbox is checked
     */
    checked?: boolean;
    /**
     * If true checkbox is disabled
     */
    disabled?: boolean;
    /**
     * The form ID that the checkbox is associated with
     */
    formId?: string;
    /**
     * A state that is neither checked nor unchecked
     */
    indeterminate?: false;
    /**
     * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
     */
    name: string;
    /**
     * Handler to be called when the checkbox loses focus
     */
    onBqBlur?: (event: BqCheckboxCustomEvent<HTMLBqCheckboxElement>) => void;
    /**
     * Handler to be called when the chebkbox state changes
     */
    onBqChange?: (event: BqCheckboxCustomEvent<{ checked: boolean }>) => void;
    /**
     * Handler to be called when the checkbox gets focus
     */
    onBqFocus?: (event: BqCheckboxCustomEvent<HTMLBqCheckboxElement>) => void;
    /**
     * If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
     */
    required?: boolean;
    /**
     * A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.
     */
    value: string;
  }
  interface BqDivider {
    /**
     * If true, the divider has a dashed pattern
     */
    dashed?: boolean;
    /**
     * The default orientation of the divider
     */
    orientation?: TDividerOrientation;
    /**
     * Set the min width of the divider's stroke when text is not centered. Value expressed in px
     */
    strokeBasis?: number;
    /**
     * Set the stroke color of the divider. The value should be a valid value of the palette color
     */
    strokeColor?: string;
    /**
     * Set the gap of the divider's stroke. This is applicable when the stroke is dashed
     */
    strokeDashGap?: number;
    /**
     * Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed
     */
    strokeDashWidth?: number;
    /**
     * Set the lineap of the divider's stroke. This is applicable when the stroke is dashed
     */
    strokeLinecap?: TDividerStrokeLinecap;
    /**
     * Set the thickness of the divider's stroke. Value expressed in px
     */
    strokeThickness?: number;
    /**
     * Set the alignment of the title on the main axis of the divider (horizontal / vertical)
     */
    titleAlignment?: TDividerTitleAlignment;
  }
  interface BqIcon {
    /**
     * Set the stroke color of the SVG. The value should be a valid value of the palette color
     */
    color?: string;
    /**
     * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
     */
    name: string;
    /**
     * Set the size of the SVG
     */
    size?: string | number;
    /**
     * It set the icon weight/style
     */
    weight?: TIconWeight;
  }
  interface BqRadio {
    /**
     * If true radio displays background on hover
     */
    backgroundOnHover?: boolean;
    /**
     * If true radio input is checked
     */
    checked?: boolean;
    /**
     * If true radio input is disabled
     */
    disabled?: boolean;
    /**
     * The form ID that the radio input is associated with
     */
    formId?: string;
    /**
     * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
     */
    name: string;
    /**
     * Handler to be called when the radio loses focus
     */
    onBqBlur?: (event: BqRadioCustomEvent<HTMLBqRadioElement>) => void;
    /**
     * Handler to be called when the radio state changes
     */
    onBqClick?: (event: BqRadioCustomEvent<HTMLBqRadioElement>) => void;
    /**
     * Handler to be called when the radio gets focus
     */
    onBqFocus?: (event: BqRadioCustomEvent<HTMLBqRadioElement>) => void;
    /**
     * Handler to be called when the radio key is pressed
     */
    onBqKeyDown?: (event: BqRadioCustomEvent<KeyboardEvent>) => void;
    /**
     * If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted
     */
    required?: boolean;
    /**
     * A string representing the value of the radio.
     */
    value: string;
  }
  interface BqRadioGroup {
    /**
     * A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change
     */
    debounceTime?: number;
    /**
     * If true radio inputs are disabled
     */
    disabled?: boolean;
    /**
     * If true displays fieldset
     */
    fieldset?: boolean;
    /**
     * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
     */
    name: string;
    /**
     * Handler to be called when the radio state changes
     */
    onBqChange?: (event: BqRadioGroupCustomEvent<{ value: string; target: HTMLBqRadioElement }>) => void;
    /**
     * The display orientation of the radio inputs
     */
    orientation?: TRadioGroupOrientation;
    /**
     * A string representing the value of the radio.
     */
    value?: string;
  }
  interface BqStatus {
    /**
     * It defines the type of status to display
     */
    type?: TStatusType;
  }
  interface IntrinsicElements {
    'bq-avatar': BqAvatar;
    'bq-badge': BqBadge;
    'bq-breadcrumb': BqBreadcrumb;
    'bq-breadcrumb-item': BqBreadcrumbItem;
    'bq-button': BqButton;
    'bq-checkbox': BqCheckbox;
    'bq-divider': BqDivider;
    'bq-icon': BqIcon;
    'bq-radio': BqRadio;
    'bq-radio-group': BqRadioGroup;
    'bq-status': BqStatus;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'bq-avatar': LocalJSX.BqAvatar & JSXBase.HTMLAttributes<HTMLBqAvatarElement>;
      'bq-badge': LocalJSX.BqBadge & JSXBase.HTMLAttributes<HTMLBqBadgeElement>;
      'bq-breadcrumb': LocalJSX.BqBreadcrumb & JSXBase.HTMLAttributes<HTMLBqBreadcrumbElement>;
      'bq-breadcrumb-item': LocalJSX.BqBreadcrumbItem & JSXBase.HTMLAttributes<HTMLBqBreadcrumbItemElement>;
      'bq-button': LocalJSX.BqButton & JSXBase.HTMLAttributes<HTMLBqButtonElement>;
      'bq-checkbox': LocalJSX.BqCheckbox & JSXBase.HTMLAttributes<HTMLBqCheckboxElement>;
      'bq-divider': LocalJSX.BqDivider & JSXBase.HTMLAttributes<HTMLBqDividerElement>;
      'bq-icon': LocalJSX.BqIcon & JSXBase.HTMLAttributes<HTMLBqIconElement>;
      'bq-radio': LocalJSX.BqRadio & JSXBase.HTMLAttributes<HTMLBqRadioElement>;
      'bq-radio-group': LocalJSX.BqRadioGroup & JSXBase.HTMLAttributes<HTMLBqRadioGroupElement>;
      'bq-status': LocalJSX.BqStatus & JSXBase.HTMLAttributes<HTMLBqStatusElement>;
    }
  }
}
