import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormApi } from '../api/form.api';
import { QuestionaireConfig } from '../api/questionaire-form.config';

export const ANS_NAME = 'answer';

@Injectable()
export class NgxQuestionaireFormService implements FormApi {

  formConfig!: QuestionaireConfig[];
  selectedIndex$ = new BehaviorSubject<number>(0);
  form$ = new BehaviorSubject<any[]>([]);
  formId = 0;

  constructor() { }

  get selectedIndex() {
    return this.selectedIndex$.value;
  }

  get form() {
    return this.form$.value;
  }

  buildForm(qConfig: QuestionaireConfig[]): void {
    this.formId++;
    this.formConfig = qConfig.length ? [...qConfig] : [];
    this.form$.next([...this.formConfig]);
    this.formConfig = this.formConfig.map((item, i) => ({...item, id: `${this.formId}-${i}`}));
  }

  setValue(value: string, index: number): string {
    if (index >= 0 && index < this.form.length) {
      // update ids
      this.form$.next(this.form.map((item, i) => i === index ? ({...item, [ANS_NAME]: value}) : item));
      return value;
    }
    throw new Error('Index out of bound');
  }

  next(): number {
    if (this.selectedIndex <= this.form.length) {
      this.selectedIndex$.next(this.selectedIndex + 1);
      return this.selectedIndex;
    }
    throw new Error('Index out of bound');
  }

  getQuestionaireForm(): any[] {
    return this.form;
  }

  reset() {
    this.buildForm(this.formConfig);
    this.selectedIndex$.next(0);
  }
}
