import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'bq-breadcrumb',
  styleUrl: './scss/bq-breadcrumb.scss',
  shadow: true,
})
export class BqBreadcrumb {
  @Element() host: HTMLElement;

  render() {
    return (
      <nav class={'bq-breadcrumb-menu'}>
        <ul class={this.host.children.length <= 4 ? 'bq-breadcrumb' : 'bq-breadcrum-collapsable'}>
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
