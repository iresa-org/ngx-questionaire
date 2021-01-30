import { BasicUsageComponent } from './examples/basic-usage/basic-usage.component';

export const IMG_FEATURES = [
  {
    id: 'basic',
    label: 'Basic Usage',
    outlet: BasicUsageComponent,
    html: require('!!raw-loader!./examples/basic-usage/basic-usage.component.html'),
    component: require('!!raw-loader!./examples/basic-usage/basic-usage.component.ts'),
    scss: require('!!raw-loader!./examples/basic-usage/basic-usage.component.scss')
  }
];
