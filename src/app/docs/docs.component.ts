import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, Compiler, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import * as componentList from './docs.component.list';
import { BehaviorSubject } from 'rxjs';
import { FeatureModel } from './docs.component.list';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent implements OnInit, AfterViewInit {
  @ViewChild('exampleContainer', { read: ViewContainerRef })
  exampleContainer!: ViewContainerRef;

  examples = componentList.FEATURES;
  currentSection$ = new BehaviorSubject<FeatureModel>({} as FeatureModel);
  parentLink = 'https://github.com/iresa-org/ngx-questionaire-form/tree/main/src/app/docs/examples/';

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector, private cd: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { 
    this.onSectionChange(componentList.FEATURES[0]);
    this.cd.detectChanges();
  }

  onSectionChange(feature: FeatureModel) {
    this.currentSection$.next(feature);
    this.loadComponent(feature);
  }

  async loadComponent(feature: FeatureModel): Promise<any> {
    this.exampleContainer.clear();
    const componentFactory = await feature.loader(this.cfr);
    this.exampleContainer.createComponent(componentFactory, undefined, this.injector);
    this.cd.detectChanges();
  }
}
