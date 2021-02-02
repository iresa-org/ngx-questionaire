import { ComponentFactoryResolver } from '@angular/core';

export const loadBasic = async (cfr: ComponentFactoryResolver) => {
  const { BasicUsageComponent } = await import('./examples/basic-usage/basic-usage.component');
  return cfr.resolveComponentFactory(BasicUsageComponent);
};

export interface FeatureModel {
  id: string;
  label: string;
  link: string;
  loader: (cfr: ComponentFactoryResolver) => Promise<any>
}


export const FEATURES = [
  {
    id: 'basic',
    label: 'Basic Usage',
    link: 'basic-usage',
    loader: loadBasic
  }
];