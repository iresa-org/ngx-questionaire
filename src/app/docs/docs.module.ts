import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicUsageComponent } from './examples/basic-usage/basic-usage.component';
import { DocsContainerComponent } from './docs-container/docs-container.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    data: { title: 'imagely.menu.docs' }
  }
];

const EXAMPLES = [
  BasicUsageComponent
];

@NgModule({
  declarations: [DocsComponent, DocsContainerComponent, ...EXAMPLES],
  imports: [
    CommonModule,

    SharedModule,

    RouterModule.forChild(routes)
  ]
})
export class DocsModule {}
