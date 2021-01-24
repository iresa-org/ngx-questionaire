import { NgModule } from '@angular/core';
import { NgxQuestionaireFormComponent } from './ngx-questionaire-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionaireTemplateDirective } from './selectors/questionaire-template.directive';

@NgModule({
  declarations: [NgxQuestionaireFormComponent, QuestionaireTemplateDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgxQuestionaireFormComponent, QuestionaireTemplateDirective]
})
export class NgxQuestionaireFormModule { }
