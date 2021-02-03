import { Injectable } from '@angular/core';
import { FormApi } from '../api/form.api';
import { QuestionaireConfig } from '../api/questionaire-form.config';

export const ANS_NAME = 'answer';

@Injectable()
export class NgxQuestionaireFormService implements FormApi {

  form!: any[];
  formConfig!: QuestionaireConfig[];
  selectedIndex = 0;
  total = 0;

  constructor() { }

  buildForm(qConfig: QuestionaireConfig[]): void {
    this.formConfig = qConfig.length ? [...qConfig] : [];
    this.formConfig = this.formConfig.map((item, i) => ({...item, id: item.id ?? i}));
    this.form = [...this.formConfig];
  }

  setValue(value: string, index: number): string {
    if (index >= 0 && index < this.form.length) {
      this.form = this.form.map((item, i) => i === index ? ({...item, [ANS_NAME]: value}) : item);
      return value;
    }
    throw new Error('Index out of bound');
  }

  next(): number {
    if (this.selectedIndex <= this.form.length) {
      this.selectedIndex++;
      return this.selectedIndex;
    }
    throw new Error('Index out of bound');
  }

  getQuestionaireForm(): any[] {
    return this.form;
  }
}
