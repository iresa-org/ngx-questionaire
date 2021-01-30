import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollspyDirective } from './scrollspy/scrollspy.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgxQuestionaireFormModule } from '@iresa/ngx-questionaire-form';
import { MatRadioModule } from '@angular/material/radio';

export const MAT_COMPONENTS = [
  MatCardModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule
];

@NgModule({
  declarations: [ScrollspyDirective],
  imports: [
    CommonModule,

    // material
    ...MAT_COMPONENTS,

    // Imagely
    NgxQuestionaireFormModule
  ],
  exports: [...MAT_COMPONENTS, NgxQuestionaireFormModule, ScrollspyDirective]
})
export class SharedModule {}
