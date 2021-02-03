import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { fadeIn } from './animations/animations';
import { FormApi } from './api/form.api';
import { QuestionaireConfig } from './api/questionaire-form.config';
import { QuestionaireTemplateDirective } from './selectors/questionaire-template.directive';
import { NgxQuestionaireFormService } from './services/ngx-questionaire-form.service';

@Component({
  selector: 'ngx-questionaire-form',
  templateUrl: './ngx-questionaire-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgxQuestionaireFormService],
  animations: [
    fadeIn
  ]
})
export class NgxQuestionaireFormComponent implements OnInit {

  @ContentChild(QuestionaireTemplateDirective, { read: TemplateRef }) questionaireTemplate!: TemplateRef<any>;

  @Input()
  set formConfig(config: QuestionaireConfig[]) {
    this.formService.buildForm(config);
  }

  @Output()
  formInit = new EventEmitter<FormApi>();

  formGroupName = 'results';

  constructor(public formService: NgxQuestionaireFormService) { }

  ngOnInit(): void {
    this.formInit.emit(this.formService);
  }

  identify(_: number, item: {id: string}) {
    return item.id;
  }
}
