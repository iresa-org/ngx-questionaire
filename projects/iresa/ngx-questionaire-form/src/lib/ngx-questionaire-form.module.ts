import { NgModule } from '@angular/core';
import { NgxQuestionaireFormComponent } from './ngx-questionaire-form.component';
import { CommonModule } from '@angular/common';
import { QuestionaireTemplateDirective } from './selectors/questionaire-template.directive';

@NgModule({
  declarations: [NgxQuestionaireFormComponent, QuestionaireTemplateDirective],
  imports: [CommonModule],
  exports: [NgxQuestionaireFormComponent, QuestionaireTemplateDirective]
})
export class NgxQuestionaireFormModule { }
