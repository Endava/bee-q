import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bq-breadcrumb-item',
  styleUrl: './scss/bq-breadcrumb-item.scss',
  shadow: true,
})
export class BqBreadcrumbItem {
  /**
   * Icon
   * image used by the item in breadcrumb component
   * */
  @Prop() icon: string;

  /**
   * Active
   * the condition active of item,
   * basically used by latest item in breadcrumb component
   * */
  @Prop() active: boolean;

  /**
   * Contains a URL
   * If prop is set, an anchor tag will be rendered
   */
  @Prop() link: string;

  //@Prop() dropdown: boolean;

  render() {
    return (
      <li class="breadcrumb-item">
        <a href={this.link}>
          {this.icon != null ? (
            <div class="breadcrumb-item-icon">
              <bq-icon name={this.icon} size={14}></bq-icon>
            </div>
          ) : (
            ''
          )}
          <slot></slot>
        </a>
      </li>
    );
  }
}
