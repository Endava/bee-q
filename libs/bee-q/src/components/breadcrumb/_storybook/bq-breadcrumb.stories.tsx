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
    dropdown: { control: 'select', options: ['true', 'false'] },
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
      display: flex;
      flex-direction: column;
    }
  </style>
  <div class="main">
    <div class="container">
      <bq-breadcrumb-item>${args.label || 'Application Center'}</bq-breadcrumb-item> <br />
      <bq-breadcrumb-item
        >${args.label || 'Application Center'} <bq-icon name=${args.icon || 'house'} size="14" slot="prefix"></bq-icon>
      </bq-breadcrumb-item>
      <br />
      <bq-breadcrumb-item><bq-icon name=${args.icon || 'house'} size="14" slot="prefix"></bq-icon></bq-breadcrumb-item>
      <br />
    </div>
    <div class="container">
      <bq-breadcrumb-item dropdown=${args.dropdown || 'true'}>${args.label || 'Application Center'}</bq-breadcrumb-item>
      <br />
      <bq-breadcrumb-item dropdown=${args.dropdown || 'true'}>${args.label || 'Application Center'}</bq-breadcrumb-item>
      <br />
      <bq-breadcrumb-item dropdown=${args.dropdown || 'true'}
        ><bq-icon name=${args.icon || 'house'} size="14" slot="prefix"></bq-icon>
      </bq-breadcrumb-item>
    </div>
  </div>
`;

export const Breadcrumb = (args) => html`
  <bq-breadcrumb>
    <bq-breadcrumb-item
      >${args.label || 'Application Center'} <bq-icon name=${args.icon || 'house'} size="14" slot="prefix"></bq-icon>
    </bq-breadcrumb-item>
    <bq-breadcrumb-item>${args.label || 'Application Center'}</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item dropdown=${args.dropdown || 'true'}
      >${args.label || 'Application Center'} <bq-icon name=${args.icon || 'house'} size="14" slot="prefix"></bq-icon>
    </bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item
      >Home<bq-icon name=${args.icon || 'house'} size="{14}" slot="prefix"></bq-icon
    ></bq-breadcrumb-item>
    <bq-breadcrumb-item
      >Application Center <bq-icon name=${args.icon || 'house'} size="14" slot="prefix"></bq-icon>
    </bq-breadcrumb-item>
    <bq-breadcrumb-item dropdown=${args.dropdown || 'true'}>Application List </bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
  <bq-breadcrumb>
    <bq-breadcrumb-item>Home</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application Center</bq-breadcrumb-item>
    <bq-breadcrumb-item>Application List> </bq-breadcrumb-item>
    <bq-breadcrumb-item>An Application</bq-breadcrumb-item>
    <bq-breadcrumb-item>Another Application </bq-breadcrumb-item>
    <bq-breadcrumb-item>Last Application </bq-breadcrumb-item>
  </bq-breadcrumb>
  <br />
`;
