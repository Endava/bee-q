import { h, Component } from '@stencil/core';

/**
 * The toast-item component is designed to inform the user when something happens.
 * @part base - The component's wrapper that holds the prefix and message.
 * @part prefix - The '<div>' tag element that acts as prefix container.
 * @part message - The '<div>' tag element that acts as message container.
 */

@Component({
  tag: 'bq-toast-item',
  styleUrl: '',
  shadow: true,
})
export class BqToastItem {
  // Own Properties
  // ====================

  // Reference to host HTML element
  // ===================================

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================

  // Prop lifecycle events
  // =======================

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

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
      <div part="base">
        <div part="prefix">
          <slot name="prefix" />
        </div>
        <div part="message">
          <slot />
        </div>
      </div>
    );
  }
}
