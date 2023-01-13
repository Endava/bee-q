import { Component, h, Prop } from '@stencil/core';

/**
 * @part base - The component's internal wrapper of the breadcrumb component.
 * @part link - The native HTML `<input type="radio">` used under the hood.
 * @part prefix - The `<span>` element that holds the prefix.
 * @part dropdown - The `<span>` element that holds the dropdown.
 */
@Component({
  tag: 'bq-breadcrumb-item',
  styleUrl: './scss/bq-breadcrumb-item.scss',
  shadow: true,
})
export class BqBreadcrumbItem {
  /**
   * Contains a URL
   * If prop is set, an anchor tag will be rendered
   */
  @Prop() link: string;
  /**
   * Contains an arrow
   * If prop is set to true, it displays the options
   */
  @Prop() dropdown: boolean;

  render() {
    return (
      <li class="bq-breadcrumb__item" part="base">
        <a href={this.link} part="link">
          <span class="bq-breadcrumb__item bq-breadcrumb__item--prefix" part="prefix">
            <slot name="prefix" />
          </span>
          <slot></slot>
          {this.dropdown ? (
            <div class="bq-breadcrumb__item bq-breadcrumb__item--dropdown" part="dropdown">
              <bq-icon name="caret-down" size="10"></bq-icon>
            </div>
          ) : (
            ''
          )}
        </a>
      </li>
    );
  }
}
