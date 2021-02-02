import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { NgxQuestionaireFormModule } from '@iresa/ngx-questionaire-form';

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
  declarations: [],
  imports: [
    CommonModule,

    // material
    ...MAT_COMPONENTS,

    // Imagely
    NgxQuestionaireFormModule
  ],
  exports: [...MAT_COMPONENTS, NgxQuestionaireFormModule]
})
export class SharedModule {}
