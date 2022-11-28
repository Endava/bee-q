import { Component, h } from '@stencil/core';

@Component({
  tag: 'bq-breadcrumb',
  styleUrl: './scss/bq-breadcrumb.scss',
  shadow: true,
})
export class BqBreadcrumb {
  render() {
    return (
      <nav class={'bq-breadcrumb-menu'}>
        <ul class={'bq-breadcrumb'}>
          <slot>/</slot>
        </ul>
      </nav>
    );
  }
}
