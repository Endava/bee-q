import { html } from 'lit-html';
import mdx from './bq-breadcrumb.mdx';
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
  </style>
  <div class="main">
    <div class="container">
      <bq-breadcrumb-item>${args.label || 'Application Center'}</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon || 'house'}>${args.label || 'Application Center'}</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon || 'house'}></bq-breadcrumb-item> <br />
    </div>
    <div class="container">
      <bq-breadcrumb-item dropdown=${args.dropdown}>${args.label || 'Application Center'}</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item icon=${args.icon || 'house'} dropdown=${args.dropdown}
        >${args.label || 'Application Center'}</bq-breadcrumb-item
      >
      <br />
      <bq-breadcrumb-item icon=${args.icon || 'house'} dropdown=${args.dropdown}></bq-breadcrumb-item>
    </div>
  </div>
`;

export const Breadcrumb = (args) => html`
  <bq-breadcrumb>
    <bq-breadcrumb-item icon=${args.icon || 'house'}>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>${args.label || 'Application Center'}</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item icon=${args.icon || 'house'}>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item icon=${args.icon || 'house'}>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item dropdown=${args.dropdown}>Application List </bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item icon=${args.icon || 'house'}>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item dropdown=${args.dropdown}>Application List </bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
    <bq-breadcrumb-item>Another Application </bq-breadcrumb-item>
    <bq-breadcrumb-item>Last Application </bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item icon=${args.icon || 'house'}>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item dropdown=${args.dropdown}>Application List </bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
    <bq-breadcrumb-item>Another Application </bq-breadcrumb-item>
  </bq-breadcrumb>
`;
