import { Component, h, Element } from '@stencil/core';

/**
 * A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid
 * in user interfaces and on web pages. It allows users to keep track and maintain awareness
 * of their locations within programs, documents, or websites.
 *
 * @part base - The component's internal wrapper that holds the navigation links.
 * @part ul - The component's internal wrapper that holds the slot.
 */
@Component({
  tag: 'bq-breadcrumb',
  styleUrl: './scss/bq-breadcrumb.scss',
  shadow: true,
})
export class BqBreadcrumb {
  @Element() host: HTMLElement;

  render() {
    return (
      <nav class="bq-breadcrumb" part="base">
        <ul
          class={
            this.host.children.length <= 4
              ? ' bq-breadcrumb bq-breadcrumb--extended'
              : ' bq-breadcrumb bq-breadcrumb--collapsable'
          }
          part="ul"
        >
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
