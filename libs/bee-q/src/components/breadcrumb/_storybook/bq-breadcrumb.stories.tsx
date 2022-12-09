import { html } from 'lit-html';
import mdx from './bq-breadcrumb.mdx';
import { BqIcon } from '../../../../../bee-q-angular/src';
import { ICONS_SET } from '../../icon/helper/icons-set';

export default {
  title: 'Components/Breadcrumb',
  component: 'bq-breadcrumb',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    icon: { control: 'select', options: [...ICONS_SET] },
    label: { control: 'text' },
    dropdown: { control: 'select', options: [true, false] },
  },
};

export const BreadcrumbItem = (args) => html`
  <style>
    .main {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .container {
      width: 20%;
      display: flex;
      flex-direction: column;
    }
    /* .row {
      display:flex;
      flex-direction:column;
    } */
  </style>
  <div class="main">
    <div class="container">
      <bq-breadcrumb-item>Home</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon}>Home</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon}></bq-breadcrumb-item> <br />
    </div>
    <div class="container">
      <bq-breadcrumb-item dropdown=${args.dropdown}>Home</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon} dropdown=${args.dropdown}>Home</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon} dropdown=${args.dropdown}></bq-breadcrumb-item>
    </div>
  </div>
`;

export const Breadcrumb = (args) => html`
  <bq-breadcrumb>
    <bq-breadcrumb-item>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application List </bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
`;
