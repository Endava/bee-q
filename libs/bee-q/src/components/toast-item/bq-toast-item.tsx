import { h, Component, Element, Prop, Watch } from '@stencil/core';
import { validatePropValue } from '../../shared/utils';
import { TOAST_TYPE, TToastType } from './bq-toast-item.types';

/**
 * The toast-item component is designed to inform the user when something happens.
 * @part base - The component's wrapper that holds the icon and message.
 * @part icon - The '<div>' tag element that acts as the icon container.
 * @part message - The '<div>' tag element that acts as message container.
 */

@Component({
  tag: 'bq-toast-item',
  styleUrl: './scss/bq-toast-item.scss',
  shadow: true,
})
export class BqToastItem {
  // Own Properties
  // ====================

  // Reference to host HTML element
  // ===================================
  @Element() el!: HTMLBqToastItemElement;

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================
  /** It defines the type of toast message to display  */
  @Prop({ reflect: true, mutable: true }) type: TToastType = 'default';

  // Prop lifecycle events
  // =======================
  @Watch('type')
  checkPropValues() {
    validatePropValue(TOAST_TYPE, 'default', this.type, this.el, 'type');
  }

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================
  componentWillLoad() {
    this.checkPropValues();
  }
  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      <div
        part="base"
        class="bq-toast-item flex w-fit items-center gap-2.5 rounded-s bg-[color:var(--bq-background--card)] py-2.5 px-4 font-inter text-s font-medium shadow-l"
      >
        <div part="icon" class={`bq-toast-item__icon ${this.type}`}>
          <slot name="icon" />
        </div>
        <div part="message" class="bq-toast-item__message">
          <slot />
        </div>
      </div>
    );
  }
}
